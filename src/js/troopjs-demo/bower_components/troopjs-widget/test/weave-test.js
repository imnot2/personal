define([
  "buster",
  "troopjs-widget/component",
  "troopjs-widget/weave",
  "jquery"
], function (buster, Widget, weave, $) {
  "use strict";

  var assert = buster.referee.assert;
  var refute = buster.referee.refute;

  buster.testCase("troopjs-widget/weave", {
    "setUp": function () {
      this.timeout = 2000;
      this.$el = $("<div></div>");
    },

    "weaving one widget": function () {
      var $el = this.$el;
      var name = "troopjs-widget/component";

      $el.attr("data-weave", name);

      return weave.call($el).spread(function (widgets) {
        assert.equals(widgets.length, 1, "one widget expected to be woven");

        var widget = widgets[0];

        refute.defined($el.attr("data-weave"), "`data-weave` attribute was not cleared");
        assert.equals($el.attr("data-woven"), widget.toString(), "`data-woven` does not match `widget.toString()`");
        assert.equals(widget.displayName, name, "`displayName` does not match (required) module");
        assert.equals(widget.phase, "started", "`phase` is not `started`");
      });
    },

    "weaving multiple widgets": function () {
      var $el = this.$el;
      var foo_name = "troopjs-widget/component";
      var bar_name = "troopjs-widget/test/default";

      $el.attr("data-weave", [ foo_name, bar_name ].join(" "));

      return weave.call($el).spread(function (widgets) {
        assert.equals(widgets.length, 2, "two widgets expected to be woven");

        var foo_widget = widgets[0];
        var bar_widget = widgets[1];

        refute.defined($el.attr("data-weave"), "`data-weave` attribute was not cleared");
        assert.equals($el.attr("data-woven"), [ foo_widget.toString(), bar_widget.toString() ].join(" "), "`foo_widget` and `bar_widget` expected to appear in `data-woven` attribute");

        assert.equals(foo_widget.displayName, foo_name, "`displayName` does not match (required) module");
        assert.equals(foo_widget.phase, "started", "`phase` is not `started`");

        assert.equals(bar_widget.displayName, bar_name, "`displayName` does not match (required) module");
        assert.equals(bar_widget.phase, "started", "`phase` is not `started`");
      });
    },

    "progressive weaving": function () {
      var $el = this.$el;
      var foo_name = "troopjs-widget/component";
      var bar_name = "troopjs-widget/test/default";

      $el.attr("data-weave", foo_name);

      return weave.call($el).spread(function (one_widgets) {
        var foo_widget = one_widgets[0];

        refute.defined($el.attr("data-weave"), "`data-weave` attribute was not cleared");
        assert.equals($el.attr("data-woven"), foo_widget.toString(), "`data-woven` does not match `widget.toString()`");
        assert.equals(foo_widget.displayName, foo_name, "`displayName` does not match (required) module");
        assert.equals(foo_widget.phase, "started", "`phase` is not `started`");

        $el.attr("data-weave", bar_name);

        return weave.call($el).spread(function (two_widgets) {
          var bar_widget = two_widgets[0];

          refute.defined($el.attr("data-weave"), "`data-weave` attribute was not cleared");
          assert.equals($el.attr("data-woven"), [ foo_widget.toString(), bar_widget.toString() ].join(" "), "`foo_widget` and `bar_widget` expected to appear in `data-woven` attribute");
          assert.equals(bar_widget.displayName, bar_name, "`displayName` does not match (required) module");
          assert.equals(bar_widget.phase, "started", "`phase` is not `started`");
        });
      });
    },

    "weaving with arguments": function () {
      var $el = this.$el;
      var name = "troopjs-widget/test/args";

      $el.attr("data-weave", name + "(true, 1, 'foo')");

      return weave.call($el, false, 2, "bar").spread(function (widgets) {
        var widget = widgets[0];

        refute.defined($el.attr("data-weave"), "`data-weave` attribute was not cleared");
        assert.equals($el.attr("data-woven"), widget.toString(), "`data-woven` does not match `widget.toString()`");
        assert.equals(widget.args.slice(1), [ name, true, 1, "foo", false, 2, "bar" ], "arguments not passed correctly");
        assert.equals(widget.displayName, name, "`displayName` does not match (required) module");
        assert.equals(widget.phase, "started", "`phase` is not `started`");
      });
    },

    "fail to initialize": function () {
      var $el = this.$el.attr("data-weave", "troopjs-widget/test/thrown");

      return weave.call($el).otherwise(function (e) {
        assert.equals(e.message, "initialize failure", "expected `sig/initialize` to throw");
      });
    },

    "tearDown": function () {
      this.$el.remove();
    }
  });
});
