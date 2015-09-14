/**
 * @license MIT http://troopjs.mit-license.org/
 */
define([ "../decorator" ], function (Decorator) {
  "use strict";

  /**
   * @class compose.decorator.around
   * @static
   * @alias feature.decorator
   */

  var VALUE = "value";
  var NOP = function () {};

  /**
   * Create a decorator that is to override an existing method.
   * @method constructor
   * @param {Function} func The decorator function which receives the original function as parameter and is supposed to
   * return a function that is to replace the original.
   * @return {compose.decorator}
   */
  return function (func) {
    return new Decorator(function (descriptor) {
      descriptor[VALUE] = func(descriptor[VALUE] || NOP);
      return descriptor;
    });
  };
});
