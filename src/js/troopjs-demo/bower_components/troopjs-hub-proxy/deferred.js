/**
 * @license MIT http://troopjs.mit-license.org/
 */
define([
  "troopjs-core/component/emitter",
  "troopjs-hub/emitter",
  "when/when"
], function (Emitter, local, when) {
  "use strict";

  /**
   * Proxies to hub where the last argument is a `deferred`
   * @class hub.proxy.deferred
   * @extend core.component.emitter
   */

  var UNDEFINED;
  var ARRAY_PROTO = Array.prototype;
  var ARRAY_PUSH = ARRAY_PROTO.push;
  var ARRAY_SLICE = ARRAY_PROTO.slice;
  var OBJECT_KEYS = Object.keys;
  var OBJECT_TOSTRING = Object.prototype.toString;
  var TOSTRING_STRING = "[object String]";
  var TOSTRING_ARRAY = "[object Array]";
  var TOSTRING_ARGUMENTS = "[object Arguments]";
  var PUBLISH = "publish";
  var SUBSCRIBE = "subscribe";
  var HUB = "hub";
  var ROUTES = "routes";
  var LENGTH = "length";
  var RESOLVE = "resolve";
  var TOPIC = "topic";
  var DEFER = "defer";
  var CONTEXT = "context";
  var CALLBACK = "callback";
  var MEMORY = "memory";

  function spread (fn) {
    return function (result) {
      var toString_result = OBJECT_TOSTRING.call(result);

      return toString_result === TOSTRING_ARRAY || toString_result === TOSTRING_ARGUMENTS
        ? fn.apply(this, result)
        : fn.call(this, result);
    };
  }

  /**
   * @method constructor
   * @param {...Object} routes Routes
   */
  return Emitter.extend(function () {
    this[ROUTES] = ARRAY_SLICE.call(arguments);
  }, {
    "displayName": "hub/proxy/deferred",

    /**
     * @inheritdoc
     * @localdoc Initializes proxy topics
     * @handler
     */
    "sig/initialize": function () {
      var me = this;

      // Iterate ROUTES
      me[ROUTES].forEach(function (routes) {
        if (!(HUB in routes)) {
          throw new Error("'" + HUB + "' is missing from routes");
        }

        // Let `remote` be the deferred hub (ie. TroopJS 1.x hub)
        var remote = routes[HUB];
        var publish = routes[PUBLISH] || {};
        var subscribe = routes[SUBSCRIBE] || {};

        // Iterate publish keys
        OBJECT_KEYS(publish).forEach(function (source) {
          // Extract target
          var target = publish[source];
          var topic;
          var context;
          var defer;

          // If target is a string use defaults
          if (OBJECT_TOSTRING.call(target) === TOSTRING_STRING) {
            topic = target;
            context = me;
            defer = false;
          }
          // Otherwise just grab topic and defer from target
          else {
            // Make sure we have a topic
            if (!(TOPIC in target)) {
              throw new Error("'" + TOPIC + "' is missing from target '" + source + "'");
            }

            // Get topic
            topic = target[TOPIC];
            // Get context or default
            context = target[CONTEXT] || me;
            // Make sure defer is a boolean
            defer = !!target[DEFER];
          }

          // Create callback
          var callback = function () {
            // Initialize args with topic as the first argument
            var args = [ topic ];
            var deferred;
            var resolve;

            // Push original arguments on args
            ARRAY_PUSH.apply(args, ARRAY_SLICE.call(arguments));

            if (defer) {
              // Create deferred
              deferred = when.defer();

              // Store original resolve method
              resolve = deferred[RESOLVE];

              // Since the deferred implementation in jQuery (that we use in 1.x) allows
              // to resolve with multiple arguments, we monkey-patch resolve here
              deferred[RESOLVE] = deferred.resolver[RESOLVE] = function () {
                resolve(ARRAY_SLICE.call(arguments));
              };

              // Push deferred as last argument on args
              ARRAY_PUSH.call(args, deferred);
            }

            // Publish with args
            remote.emit.apply(remote, args);

            // Return promise
            return deferred
              ? deferred.promise
              : UNDEFINED;
          };

          var _callback = publish[source] = {};
          _callback[CONTEXT] = context;
          _callback[CALLBACK] = callback;

          // Subscribe from local
          local.on(source, _callback);
        });

        // Iterate subscribe keys
        OBJECT_KEYS(subscribe).forEach(function (source) {
          // Extract target
          var target = subscribe[source];
          var topic;
          var context;
          var memory;

          // If target is a string use defaults
          if (OBJECT_TOSTRING.call(target) === TOSTRING_STRING) {
            topic = target;
            context = me;
            memory = false;
          }
          // Otherwise just grab from the properties
          else {
            // Make sure we have a topic
            if (!(TOPIC in target)) {
              throw new Error("'" + TOPIC + "' is missing from target '" + source + "'");
            }

            // Get topic
            topic = target[TOPIC];
            // Get context or default
            context = target[CONTEXT] || me;
            // Make sure memory is a boolean
            memory = !!target[MEMORY];
          }

          // Create callback
          var callback = function () {
            // Initialize args with topic as the first argument
            var args = [ topic ];
            var deferred;
            var result;

            // Push sliced (without topic) arguments on args
            ARRAY_PUSH.apply(args, ARRAY_SLICE.call(arguments, 1));

            // If the last argument look like a promise we pop and store as deferred
            if (when.isPromiseLike(args[args[LENGTH] - 1])) {
              deferred = args.pop();
            }

            // Publish on local and store result
            result = local.emit.apply(local, args);

            // If we have a deferred we should chain it to result
            if (deferred) {
              when(result, spread(deferred.resolve), deferred.reject, deferred.progress);
            }

            // Return result
            return result;
          };

          // Transfer topic and memory to callback
          var _callback = subscribe[source] = {};
          _callback[CONTEXT] = context;
          _callback[CALLBACK] = callback;

          // Subscribe from remote, notice that since we're providing `memory` there _is_ a chance that
          // we'll get a callback before sig/start
          remote.on(source, context, memory, callback);
        });
      });
    },

    /**
     * @inheritdoc
     * @localdoc Finalizes proxy topics
     * @handler
     */
    "sig/finalize": function () {
      var me = this;

      // Iterate ROUTES
      me[ROUTES].forEach(function (routes) {
        if (!(HUB in routes)) {
          throw new Error("'" + HUB + "' is missing from routes");
        }

        // Let `remote` be the deferred hub (ie. TroopJS 1.x hub)
        var remote = routes[HUB];
        var publish = routes[PUBLISH] || {};
        var subscribe = routes[SUBSCRIBE] || {};

        // Iterate publish keys and unsubscribe from local
        OBJECT_KEYS(publish).forEach(function (source) {
          local.off(source, publish[source]);
        });

        // Iterate subscribe keys and unsubscribe from remote
        OBJECT_KEYS(subscribe).forEach(function (source) {
          var _callback = subscribe[source];

          // Un-subscribe from remote hub
          remote.off(source, _callback[CONTEXT], _callback[CALLBACK]);
        });
      });
    }
  });
});
