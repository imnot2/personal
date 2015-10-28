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
   * Proxies to hub that returns a {@link Promise promise} that will resolve to the result
   * @class hub.proxy.promise
   * @extend core.component.emitter
   */

  var ARRAY_PROTO = Array.prototype;
  var ARRAY_PUSH = ARRAY_PROTO.push;
  var ARRAY_SLICE = ARRAY_PROTO.slice;
  var OBJECT_KEYS = Object.keys;
  var OBJECT_TOSTRING = Object.prototype.toString;
  var TOSTRING_STRING = "[object String]";
  var PUBLISH = "publish";
  var SUBSCRIBE = "subscribe";
  var HUB = "hub";
  var ROUTES = "routes";
  var TOPIC = "topic";
  var CONTEXT = "context";
  var CALLBACK = "callback";
  var PEEK = "peek";

  /**
   * @method constructor
   * @param {...Object} routes Routes
   */
  return Emitter.extend(function () {
    this[ROUTES] = ARRAY_SLICE.call(arguments);
  }, {
    "displayName": "hub/proxy/promise",

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

        var remote = routes[HUB];
        var publish = routes[PUBLISH] || {};
        var subscribe = routes[SUBSCRIBE] || {};

        // Iterate publish keys
        OBJECT_KEYS(publish).forEach(function (source) {
          // Extract target
          var target = publish[source];
          var topic;
          var context;
          var peek;

          // If target is a string set topic to target
          if (OBJECT_TOSTRING.call(target) === TOSTRING_STRING) {
            topic = target;
            context = me;
            peek = false;
          }
          // Otherwise just grab topic from target
          else {
            // Make sure we have a topic
            if (!(TOPIC in target)) {
              throw new Error("'" + TOPIC + "' is missing from target '" + source + "'");
            }

            // Get topic
            topic = target[TOPIC];
            context = target[CONTEXT] || me;
            peek = !!target[PEEK];
          }

          // Create callback
          var callback = function () {
            // Initialize args with topic as the first argument
            var args = [ topic ];

            // Push original arguments on args
            ARRAY_PUSH.apply(args, ARRAY_SLICE.call(arguments));

            return remote.emit.apply(remote, args);
          };

          var _callback = publish[source] = {};
          _callback[CONTEXT] = context;
          _callback[CALLBACK] = callback;
          _callback[PEEK] = peek;

          local.on(source, _callback);
        });

        // Iterate subscribe keys
        OBJECT_KEYS(subscribe).forEach(function (source) {
          // Extract target
          var target = subscribe[source];
          var topic;
          var context;
          var peek;

          // If target is a string set topic to target and republish to false
          if (OBJECT_TOSTRING.call(target) === TOSTRING_STRING) {
            topic = target;
            context = me;
            peek = false;
          }
          // Otherwise just grab topic and republish from target
          else {
            // Make sure we have a topic
            if (!(TOPIC in target)) {
              throw new Error("'" + TOPIC + "' is missing from target '" + source + "'");
            }

            // Get topic
            topic = target[TOPIC];
            context = target[CONTEXT] || me;
            peek = !!target[PEEK];
          }

          // Create callback
          var callback = function () {
            // Initialize args with topic as the first argument
            var args = [ topic ];

            // Push original arguments on args
            ARRAY_PUSH.apply(args, ARRAY_SLICE.call(arguments));

            // Publish and store promise as result
            return local.emit.apply(local, args);
          };

          var _callback = {};
          _callback[CONTEXT] = context;
          _callback[CALLBACK] = callback;
          _callback[PEEK] = peek;

          remote.on(source, _callback);
        });
      });
    },

    /**
     * @inheritdoc
     * @localdoc Republishes memorized values
     * @handler
     */
    "sig/start": function () {
      var me = this;
      var results = [];
      var empty = {};

      // Iterate ROUTES
      me[ROUTES].forEach(function (routes) {
        if (!(HUB in routes)) {
          throw new Error("'" + HUB + "' is missing from routes");
        }

        var subscribe = routes[SUBSCRIBE] || {};
        var publish = routes[PUBLISH] || {};
        var remote = routes[HUB];

        // Iterate publish keys
        OBJECT_KEYS(publish).forEach(function (source) {
          var _callback = publish[source];
          var value;

          // Check if we should peek
          if (_callback[PEEK] === true && (value = local.peek(source, empty)) !== empty) {
            // Push result from publish on results
            results.push(remote.emit.apply(local, [ source ].concat(value)));
          }
        });

        // Iterate subscribe keys
        OBJECT_KEYS(subscribe).forEach(function (source) {
          var _callback = subscribe[source];
          var value;

          // Check if we should peek
          if (_callback[PEEK] === true && (value = remote.peek(source, empty)) !== empty) {
            // Push result from publish on results
            results.push(local.emit.apply(local, [ source ].concat(value)));
          }
        });
      });

      // Return promise that will resolve once all results are resolved
      return when.all(results);
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

        var publish = routes[PUBLISH] || {};
        var subscribe = routes[SUBSCRIBE] || {};
        var remote = routes[HUB];

        // Iterate publish keys and unsubscribe
        OBJECT_KEYS(publish).forEach(function (source) {
          local.off(source, publish[source]);
        });

        // Iterate subscribe keys and unsubscribe
        OBJECT_KEYS(subscribe).forEach(function (source) {
          remote.off(source, subscribe[source]);
        });
      });
    }
  });
});
