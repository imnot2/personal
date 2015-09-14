define(function() {
  "use strict";

  var UNDEFINED;
  var FALSE = false;
  var STACK = "stack";
  var CAPTURE_STACK_TRACE = Error.captureStackTrace;

  return function(name) {
    var _Error = CAPTURE_STACK_TRACE
      ? function(message) {
        var me = this;

        CAPTURE_STACK_TRACE(me, _Error);

        Object.defineProperties(me, {
          "message": {
            "enumerable": FALSE,
            "value": message
          }
        });
      }
      : function(message) {
        var error = new Error(message);

        Object.defineProperties(this, {
          "message": {
            "enumerable": FALSE,
            "value": message
          },

          "stack": {
            "enumerable": FALSE,
            "get": function() {
              return error.hasOwnProperty(STACK)
                ? error[STACK].replace(/.*\n/, "")
                : UNDEFINED;
            }
          }
        });
      };

    _Error.prototype = Object.create(Error.prototype, {
      "name": {
        "enumerable": FALSE,
        "value": name
      },
      "constructor": {
        "enumerable": FALSE,
        "value": _Error
      }
    });

    return _Error;
  };
});
