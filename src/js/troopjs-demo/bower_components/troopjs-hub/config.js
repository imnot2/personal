/**
 * @license MIT http://troopjs.mit-license.org/
 */
define([
  "troopjs-core/config",
  "module",
  "mu-merge/main"
], function (config, module, merge) {
  "use strict";

  /**
   * @class hub.config.emitter
   * @extends core.config.emitter
   * @private
   */
  var EMITTER = {
    /**
     * Property name for `memory`
     */
    "memory": "memory"
  };

  /**
   * HUB component configuration
   * @class hub.config
   * @extends core.config
   * @private
   * @alias feature.config
   */

  return merge.call({}, config, {
     /**
     * @cfg {hub.config.emitter}
     * @inheritdoc
     * @protected
     */
    "emitter": EMITTER
  }, module.config());
});
