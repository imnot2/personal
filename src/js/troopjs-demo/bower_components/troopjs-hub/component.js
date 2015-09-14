/**
 * @license MIT http://troopjs.mit-license.org/
 */
define([
  "troopjs-core/component/emitter",
  "./config",
  "./emitter",
  "when/when"
], function (Emitter, config, emitter, when) {
  "use strict";

  /**
   * Component that provides hub features.
   * @class hub.component
   * @extend core.component.emitter
   * @mixin hub.config
   * @alias feature.component
   */

  var UNDEFINED;
  var NULL = null;
  var TRUE = true;
  var DATA = config.emitter.data;
  var ARGS = "args";
  var NAME = "name";
  var TYPE = "type";
  var VALUE = "value";
  var LENGTH = "length";
  var HUB = "hub";
  var RE = new RegExp("^" + HUB + "/(.+)");

  /**
   * @handler sig/start
   * @localdoc Triggers memorized values on HUB specials
   * @inheritdoc
   */

  /**
   * @handler sig/added
   * @localdoc Registers subscription on the {@link hub.emitter hub emitter} for matching callbacks
   * @inheritdoc #event-sig/added
   */

  /**
   * @handler sig/removed
   * @localdoc Removes remote subscription from the {@link hub.emitter hub emitter} that was previously registered in {@link #handler-sig/added}
   * @inheritdoc #event-sig/removed
   */

  /**
   * @method constructor
   * @inheritdoc
   */
  return Emitter.extend(function () {
    var me = this;
    var memorized = [];

    // Intercept added handlers
    me.on("sig/added", function (handlers, handler) {
      var _empty = {};
      var _matches;
      var _type;
      var _memory;
      var _data;

      // If we've added a HUB handler ...
      if ((_matches = RE.exec(handler[TYPE])) !== NULL) {
        // Let `_type` be `_matches[1]`
        _type = _matches[1];

        // Let `handler[HUB]` be `_type`
        handler[HUB] = _type;

        // Subscribe to the hub
        emitter.on(_type, handler);

        // If re-emit was requested ...
        if ((_data = handler[DATA]) !== UNDEFINED && _data[0] === TRUE) {
          // If memorization is "open"
          if (memorized !== UNDEFINED) {
            memorized.push(handler);
          }
          // .. otherwise try to `emit` if `emitter` memory for `_type` is not `_empty`
          else if ((_memory = emitter.peek(_type, _empty)) !== _empty) {
            me.emit.apply(me, [ handler ].concat(_memory));
          }
        }
      }
    });

    // Intercept removed handlers
    me.on("sig/removed", function (handlers, handler) {
      var _matches;
      var _data;

      // If we've removed a HUB callback ...
      if ((_matches = RE.exec(handler[TYPE])) !== NULL) {

        // Unsubscribe from the hub
        emitter.off(_matches[1], handler);

        // If re-emit was requested and there are `memorized` callbacks ...
        if ((_data = handler[DATA]) !== UNDEFINED && _data[0] === TRUE && memorized !== UNDEFINED) {
          // TODO in place filtering for performance
          // Filter matching `_handler`
          memorized = memorized.filter(function (_handler) {
            return _handler !== handler;
          });
        }
      }
    });

    // Intercept component start
    me.on("sig/start", function () {
      return when
        // Map `memorized` ...
        .map(memorized, function (_handler) {
          var _memory;
          var _empty = {};

          // If `emitter` memory for `_handler[HUB]` is not `_empty` re-emit ...
          return (_memory = emitter.peek(_handler[HUB], _empty)) !== _empty
            ? me.emit.apply(me, [ _handler ].concat(_memory))
            : UNDEFINED;
        })
        // ... and reset to `UNDEFINED`
        .tap(function () {
          memorized = UNDEFINED;
        });
    });

  }, {
    "displayName": "hub/component",

    /**
     * @inheritdoc
     * @localdoc Registers event handlers declared HUB specials
     * @handler
     */
    "sig/initialize": function () {
      var me = this;
      var specials = me.constructor.specials;

      if (specials.hasOwnProperty(HUB)) {
        specials[HUB].forEach(function (special) {
          var args;

          if ((args = special[ARGS]) !== UNDEFINED && args[LENGTH] > 0) {
            me.on.apply(me, [ special[NAME], special[VALUE] ].concat(special[ARGS]));
          }
          else {
            me.on(special[NAME], special[VALUE]);
          }
        });
      }
    }
  });
});
