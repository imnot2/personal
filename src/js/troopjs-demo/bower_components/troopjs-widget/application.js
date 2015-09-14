/**
 * @license MIT http://troopjs.mit-license.org/
 */
define([
  "./component",
  "troopjs-core/component/signal/initialize",
  "troopjs-core/component/signal/start",
  "troopjs-core/component/signal/stop",
  "troopjs-core/component/signal/finalize",
  "troopjs-hub/emitter",
  "when/when"
], function (Widget, initialize, start, stop, finalize, hub, when) {
  "use strict";

  /**
   * The application widget serves as a container for all troop components that bootstrap the page.
   * @class widget.application
   * @extend widget.component
   * @alias widget.application
   */

  /**
   * Application start event
   * @event hub/application/start
   * @param {widget.application} application The started application
   */

  /**
   * Application stop event
   * @event hub/application/stop
   * @param {widget.application} application The stopped application
   */

  var ARRAY_SLICE = Array.prototype.slice;
  var COMPONENTS = "components";

  /**
   * @method constructor
   * @inheritdoc
   * @param {jQuery|HTMLElement} $element The element that this widget should be attached to
   * @param {String} displayName A friendly name for this widget
   * @param {...core.component.emitter} component List of components to start before starting the application.
   */
  return Widget.extend(function () {
    /**
     * Application components
     * @private
     * @readonly
     * @property {core.component.emitter[]} components
     */
    this[COMPONENTS] = ARRAY_SLICE.call(arguments, 2);
  }, {
    "displayName": "widget/application",

    /**
     * @handler
     * @localdoc Initialize all registered components (widgets and services) that are passed in from the {@link #method-constructor}.
     * @inheritdoc
     */
    "sig/initialize": function () {
      var args = arguments;

      return when.map(this[COMPONENTS], function (component) {
        return initialize.apply(component, args);
      });
    },

    /**
     * @handler
     * @localdoc weave this and all widgets that are within this element.
     * @fires hub/application/start
     * @inheritdoc
     */
    "sig/start": function () {
      var me = this;
      var args = arguments;

      return when
        .map(me[COMPONENTS], function (component) {
          return start.apply(component, args);
        })
        .then(function () {
          return me.weave.apply(me, args);
        })
        .then(function () {
          return hub.emit("application/start", me);
        });
    },

    /**
     * @handler
     * @localdoc stop this and all woven widgets that are within this element.
     * @fires hub/application/stop
     * @inheritdoc
     */
    "sig/stop": function () {
      var me = this;
      var args = arguments;

      return me
        .unweave.apply(me, args).then(function () {
          return when.map(me[COMPONENTS], function (child) {
            return stop.apply(child, args);
          });
        })
        .then(function () {
          return hub.emit("application/stop", me);
        });
    },

    /**
     * @handler
     * @localdoc finalize all registered components (widgets and services) that are registered from the {@link #method-constructor}.
     * @inheritdoc
     */
    "sig/finalize": function () {
      var args = arguments;

      return when.map(this[COMPONENTS], function (component) {
        return finalize.apply(component, args);
      });
    },

    /**
     * Start the component life-cycle, sends out {@link #event-sig/initialize} and then {@link #event-sig/start}.
     * @param {...*} [args] arguments
     * @return {Promise}
     * @fires sig/initialize
     * @fires sig/start
     */
    "start": start,

    /**
     * Stops the component life-cycle, sends out {@link #event-sig/stop} and then {@link #event-sig/finalize}.
     * @param {...*} [args] arguments
     * @return {Promise}
     * @fires sig/stop
     * @fires sig/finalize
     */
    "stop": finalize
  });
});
