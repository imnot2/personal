/**
 * @license MIT http://troopjs.mit-license.org/
 */
define([
  "../config",
  "when/when"
], function (config, when) {
  "use strict";

  /**
   * @class core.emitter.executor
   * @mixin Function
   * @private
   * @static
   * @alias feature.executor
   */

  var UNDEFINED;
  var CALLBACK = config.emitter.callback;
  var SCOPE = config.emitter.scope;
  var HEAD = config.emitter.head;
  var NEXT = config.emitter.next;

  /**
   * Executes an emission
   * @method constructor
   * @param {Object} event Event object
   * @param {Object} handlers List of handlers
   * @param {*[]} [args] Handler arguments
   * @localdoc
   * - Executes event handlers asynchronously passing each handler `args`.
   *
   * @return {*} Array of handler results
   */
  return function (event, handlers, args) {
    var _handlers = [];
    var _handlersCount = 0;
    var callback = event[CALLBACK];
    var scope = event[SCOPE];
    var handler;

    for (handler = handlers[HEAD]; handler !== UNDEFINED; handler = handler[NEXT]) {
      if (callback && handler[CALLBACK] !== callback) {
        continue;
      }

      if (scope && handler[SCOPE] !== scope) {
        continue;
      }

      _handlers[_handlersCount++] = handler;
    }

    return when.reduce(_handlers, function (results, _handler, index) {
      return when(_handler.handle(args), function (result) {
        results[index] = result;
      })
        .yield(results);
    }, _handlers);
  };
});
