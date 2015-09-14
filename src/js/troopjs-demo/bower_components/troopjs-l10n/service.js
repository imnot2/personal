/**
 * @license MIT http://troopjs.mit-license.org/
 */
define([
  "troopjs-hub/component",
  "troopjs-hub/emitter"
], function (Component, hub) {
  "use strict";

  var UNDEFINED;
  var DICTIONARY = "dictionary";


  /**
   * Provides localization as a service
   * @class l10n.service
   * @extend hub.component
   * @alias service.l10n
   */

  /**
   * Localization start event
   * @event hub/l10n/start
   */

  /**
   * Localization stop event
   * @event hub/l10n/stop
   */

  /**
   * Localization GET event
   * @event hub/l10n/get
   * @param {String} key Localization key
   * @param {String} [value] Default value
   */

  /**
   * Localization FETCH event
   * @event hub/l10n/fetch
   * @inheritdoc #event-hub/l10n/get
   */

  /**
   * Localization PUT event
   * @event hub/l10n/put
   * @param {String} key Localization key
   * @param {String} value Localization value
   */

  /**
   * Localization UPDATE event
   * @event hub/l10n/update
   * @inheritdoc #event-hub/l10n/put
   */

  /**
   * @method constructor
   */
  return Component.extend(function () {
    this[DICTIONARY] = {};
  }, {
    "displayName": "l10n/service",

    /**
     * @handler
     * @localdoc Notifies interested parties about the service start
     * @inheritdoc
     * @fires hub/l10n/start
     */
    "sig/start": function () {
      return hub.emit("l10n/start");
    },

    /**
     * @handler
     * @localdoc Notifies interested parties about the service stop
     * @inheritdoc
     * @fires hub/l10n/stop
     */
    "sig/stop": function () {
      return hub.emit("l10n/stop");
    },

    /**
     * Gets localization
     * @handler
     * @inheritdoc #event-hub/l10n/get
     * @fires hub/l10n/fetch
     * @fires hub/l10n/put
     * @return {Array}
     */
    "hub/l10n/get": function (key, value) {
      var me = this;
      var dictionary = me[DICTIONARY];

      return me.task(function (resolve, reject) {
        if (dictionary.hasOwnProperty(key)) {
          resolve([ key, dictionary[key] ]);
        }
        else {
          hub
            .emit("l10n/fetch", key, UNDEFINED)
            .spread(function (_key, _value) {
              return _value === UNDEFINED
                ? [ key, value ]
                : hub.emit("l10n/put", _key, _value);
            })
            .then(resolve, reject);
        }
      });
    },

    /**
     * Puts localization
     * @handler
     * @inheritdoc #event-hub/l10n/put
     * @fires hub/l10n/update
     * @return {Array}
     */
    "hub/l10n/put": function (key, value) {
      return hub
        .emit("l10n/update", key, this[DICTIONARY][key] = value)
        .yield([ key, value ]);
    }
  });
});
