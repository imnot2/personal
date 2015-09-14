/**
 * @license MIT http://troopjs.mit-license.org/
 */
define([ "./default" ], function (Widget) {
  "use strict";

  return Widget.extend(function () {
    this.args = Array.prototype.slice.call(arguments);
  });
});
