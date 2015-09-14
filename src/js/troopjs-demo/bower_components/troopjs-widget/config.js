/**
 * @license MIT http://troopjs.mit-license.org/
 */
define([
  "troopjs-dom/config",
  "module",
  "mu-merge/main"
], function (config, module, merge) {
  "use strict";

  /**
   * @class widget.config.widget
   * @enum
   * @private
   */
  var WIDGET = {
    /**
     * Property of the widget where the **weft** resides.
     */
    "$weft": "$weft",
    /**
     * Attribute name of the element where the **weave** resides.
     */
    "weave": "data-weave",
    /**
     * Attribute name of the element where the **unweave** resides.
     */
    "unweave": "data-unweave",
    /**
     * Attribute name of the element where the **woven** resides.
     */
    "woven": "data-woven"
  };

  /**
   * Provides configuration for the widget package
   * @class widget.config
   * @extends dom.config
   * @private
   * @alias feature.config
   */

  return merge.call({}, config, {
    /**
     * Widget related configuration
     * @cfg {widget.config.widget}
     * @protected
     */
    "widget": WIDGET
  }, module.config());
});
