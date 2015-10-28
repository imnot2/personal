/**
 * @license MIT http://troopjs.mit-license.org/
 */
define([
  "module",
  "troopjs-core/config",
  "mu-merge/main"
], function (module, config, merge) {
  "use strict";

  /**
   * @class ajax.config.ajax
   * @private
   */
  var AJAX = {
    /**
     * Method that generates default settings which will be added to any ajax request
     * @return {Object}
     */
    "settings": function () {
      return {
        "headers": {
          "x-troopjs-request-id": new Date().getTime()
        }
      };
    }
  };

  /**
   * Provides configuration for the ajax service
   * @class ajax.config
   * @extends core.config
   * @private
   * @alias feature.config
   */

  return merge.call({}, config, {
    /**
     * Ajax configuration
     * @cfg {ajax.config.ajax}
     * @protected
     */
    "ajax": AJAX
  }, module.config());
});
