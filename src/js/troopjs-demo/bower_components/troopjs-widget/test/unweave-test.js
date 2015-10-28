define([
  "buster",
  "troopjs-widget/weave",
  "troopjs-widget/unweave",
  "when/when",
  "jquery"
], function (buster, weave, unweave, when, $) {
  "use strict";

  var assert = buster.referee.assert;
  var refute = buster.referee.refute;

  buster.testCase("troopjs-widget/unweave", {
    "setUp": function () {
      this.timeout = 2000;
      this.$el = $("<div></div>");
    },

    "one widget": {
      "weave/unweave": function () {
        var $el = this.$el.attr("data-weave", "troopjs-widget/component");

        return weave.call($el).spread(function (woven) {
          return unweave.call($el).spread(function (unwoven) {
            // Make sure the same widgets that were woven were unwoven
            assert.equals(woven, unwoven);
            // no more data-woven attribute
            refute.defined($el.attr("data-woven"));
          });
        });
      },

      "weave/unweave in parallel": function () {
        var $el = this.$el.attr("data-weave", "troopjs-widget/component");

        // Call weave and unweave without pause
        return when.join(weave.call($el), unweave.call($el)).spread(function (woven, unwoven) {
          // Make sure the same widgets that were woven were unwoven
          assert.equals(woven, unwoven);
          // no more data-woven attribute
          refute.defined($el.attr("data-woven"));
        });
      }
    },

    "two widgets": {
      "one with parameters": function () {
        var $el = this.$el.attr("data-weave", "troopjs-widget/component troopjs-widget/component(true, 1, 'string')");

        return weave.call($el).spread(function (woven) {
          return unweave.call($el).spread(function (unwoven) {
            assert.equals(woven, unwoven);
            refute.defined($el.attr("data-woven"));
            refute.defined($el.attr("data-weave"));
          });
        });
      },

      "one with unweave attribute": function () {
        var $el = this.$el.attr({
          "data-weave": "troopjs-widget/component troopjs-widget/test/default",
          "data-unweave": "troopjs-widget/test/default"
        });

        return weave.call($el).spread(function (woven) {
          assert.equals(woven.length, 2);

          var foo = woven[0];
          var bar = woven[1];

          return unweave.call($el).spread(function (unwoven) {
            assert.equals(unwoven.length, 1);

            var baz = unwoven[0];

            // correct widget was unwoven
            assert.equals(bar, baz);

            // "foo" still in data-woven attribute.
            assert.equals($el.attr("data-woven"), foo.toString());

            // data-unweave attribute should be cleared afterward.
            refute.defined($el.attr("data-unweave"));
          });
        });
      },

      "dynamic weaving/unweave": function () {
        var $el = this.$el.attr("data-weave", "troopjs-widget/component");

        return weave.call($el).spread(function (woven) {
          assert.equals(woven.length, 1);

          var foo = woven[0];

          $el.attr("data-weave", "troopjs-widget/test/default");

          return weave.call($el).spread(function (_woven) {
            assert.equals(_woven.length, 1);

            var bar = _woven[0];

            $el.attr("data-unweave", "troopjs-widget/test/default");

            return unweave.call($el).spread(function (unwoven) {
              assert.equals(unwoven.length, 1);

              var baz = unwoven[0];

              // correct widget was unwoven
              assert.equals(bar, baz);

              // "foo" still in data-woven attribute.
              assert.equals($el.attr("data-woven"), foo.toString());

              // data-unweave attribute should be cleared afterward.
              refute.defined($el.attr("data-unweave"));
            });
          });
        });
      }
    },

    "tearDown": function () {
      this.$el.remove();
    }
  });
});
