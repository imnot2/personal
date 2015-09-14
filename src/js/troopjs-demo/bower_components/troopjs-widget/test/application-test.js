define([
  "buster",
  "troopjs-widget/application",
  "jquery"
], function (buster, Application, $) {
  "use strict";

  var assert = buster.referee.assert;

  buster.testCase("troopjs-widget/application", {
    "setUp": function () {
      this.$el = $("<div></div>");
    },

    "start/stop": function () {
      var app = Application(this.$el);

      return app
        .start()
        .then(function (phase) {
          assert.equals(phase, "started");
        })
        .then(function () {
          return app.stop();
        })
        .then(function (phase) {
          assert.equals(phase, "finalized");
        });
    },

    "tearDown": function () {
      this.$el.remove();
    }
  });
});
