/**
 * @license MIT http://troopjs.mit-license.org/
 */
define([ "../decorator" ], function (Decorator) {
  "use strict";

  /**
   * @class compose.decorator.before
   * @static
   * @alias feature.decorator
   */

  var UNDEFINED;
  var VALUE = "value";

  /**
   * Create a decorator method that is to add code that will be executed before the original method.
   * @method constructor
   * @param {Function} func The decorator function which receives the same arguments as with the original, it's return
   * value (if not undefined) will be send as the arguments of original function.
   * @return {compose.decorator}
   */
  return function (func) {
    return new Decorator(function (descriptor) {
      var next = descriptor[VALUE];

      descriptor[VALUE] = next
        ? function () {
          var me = this;
          var retval = func.apply(me, arguments);

          return next.apply(me, retval !== UNDEFINED ? retval : arguments);
        }
        : func;

      return descriptor;
    });
  };
});
