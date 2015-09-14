/**
 * @license MIT http://troopjs.mit-license.org/
 */
define([
  "troopjs-core/emitter/composition",
  "./config",
  "./executor"
], function (Emitter, config, executor) {
  "use strict";

  /**
   * A static version of {@link core.emitter.composition} with memorization.
   *
   * ## Memorized emitting
   *
   * A emitter event will memorize the "current" value of each event. Each executor may have it's own interpretation
   * of what "current" means.
   *
   * @class hub.emitter
   * @extend core.emitter.composition
   * @mixin hub.config
   * @inheritdoc
   * @singleton
   */

  /**
   * @method create
   * @static
   * @hide
   */

  /**
   * @method extend
   * @static
   * @hide
   */

  /**
   * @method constructor
   * @hide
   */

  var UNDEFINED;
  var MEMORY = config.emitter.memory;
  var HANDLERS = config.emitter.handlers;
  var EXECUTOR = config.emitter.executor;

  return Emitter.create(function (key, value) {
    var me = this;
    me[key] = value;
    return me;
  }.call({
    "displayName": "hub/emitter",

    /**
     * Returns value in handlers MEMORY
     * @param {String} type event type to peek at
     * @param {*} [value] Value to use _only_ if no memory has been recorder
     * @return {*} Value in MEMORY
     */
    "peek": function (type, value) {
      var handlers;

      return (handlers = this[HANDLERS][type]) === UNDEFINED || !handlers.hasOwnProperty(MEMORY)
        ? value
        : handlers[MEMORY];
    }
  }, EXECUTOR, executor));
});
