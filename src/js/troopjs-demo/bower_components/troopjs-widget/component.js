/**
 * @license MIT http://troopjs.mit-license.org/
 */
define([
  "troopjs-dom/component",
  "./config",
  "./weave",
  "./unweave",
  "./woven"
], function (Component, config, weave, unweave, woven) {
  "use strict";

  /**
   * @class widget.component
   * @extend dom.component
   * @alias feature.component
   * @mixin widget.config
   * @localdoc Adds functionality for working with the loom
   */

  var ARRAY_SLICE = Array.prototype.slice;
  var $ELEMENT = "$element";
  var SELECTOR_WEAVE = "[" + config.widget.weave + "]";
  var SELECTOR_WOVEN = "[" + config.widget.woven + "]";
  var FINALIZE = config.phase.finalize;

  /**
   * @method constructor
   * @inheritdoc
   */
  return Component.extend({
    "displayName": "widget/component",

    /**
     * Handles component render
     * @handler
     * @inheritdoc
     * @localdoc Calls {@link #method-weave} to ensure newly rendered html is woven
     */
    "sig/render": function ($target) {
      return weave.apply($target.find(SELECTOR_WEAVE).addBack(SELECTOR_WEAVE), ARRAY_SLICE.call(arguments, 1));
    },

    /**
     * @handler
     * @inheritdoc
     * @localdoc Calls {@link #method-unweave} to ensure this element is unwoven
     */
    "dom/destroy": function () {
      if (this.phase !== FINALIZE) {
        unweave.call(this[$ELEMENT]);
      }
    },

    /**
     * @method
     * @inheritdoc widget.weave#constructor
     */
    "weave": function () {
      return weave.apply(this[$ELEMENT].find(SELECTOR_WEAVE), ARRAY_SLICE.call(arguments));
    },

    /**
     * @inheritdoc widget.unweave#constructor
     */
    "unweave": function () {
      return unweave.apply(this[$ELEMENT].find(SELECTOR_WOVEN), arguments);
    },

    /**
     * @inheritdoc widget.woven#constructor
     */
    "woven": function () {
      return woven.apply(this[$ELEMENT].find(SELECTOR_WOVEN), arguments);
    }
  });
});
