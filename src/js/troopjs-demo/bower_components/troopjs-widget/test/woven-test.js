define([
  "buster",
  "troopjs-widget/component",
  "troopjs-widget/weave",
  "troopjs-widget/woven",
  "jquery"
], function (buster, Widget, weave, woven, $) {
  "use strict";

  var assert = buster.referee.assert;

  buster.testCase("troopjs-widget/woven", {
    "setUp": function () {
      this.$el = $("<div></div>").attr("data-weave", "troopjs-widget/component troopjs-widget/component troopjs-widget/test/default");
    },

    "all woven": function () {
      var $el = this.$el;

      return weave.call($el).then(function () {
        return woven.call($el);
      }).spread(function (widgets) {
        assert.equals(widgets.length, 3);
        assert.equals(widgets[0].displayName, "troopjs-widget/component");
        assert.equals(widgets[1].displayName, "troopjs-widget/component");
        assert.equals(widgets[2].displayName, "troopjs-widget/test/default");
      });
    },

    "woven by module": function () {
      var $el = this.$el;

      return weave.call($el).then(function () {
        return woven.call($el, "troopjs-widget/component");
      }).spread(function (widgets) {
        assert.equals(widgets.length, 2);
        assert.equals(widgets[0].displayName, "troopjs-widget/component");
        assert.equals(widgets[1].displayName, "troopjs-widget/component");
      });
    },

    "woven by module@instance": function () {
      var $el = this.$el;
      var name;

      return weave.call($el).spread(function (widgets) {
        return woven.call($el, name = widgets[1].toString());
      }).spread(function (widgets) {
        assert.equals(widgets.length, 1);
        assert.equals(widgets[0].toString(), name);
      });
    },

    "tearDown": function () {
      this.$el.remove();
    }
  });
});
