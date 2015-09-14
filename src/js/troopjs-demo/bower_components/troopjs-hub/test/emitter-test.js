define([
  "buster",
  "../emitter",
  "when/when"
], function (buster, emitter, when) {
  "use strict";

  var assert = buster.referee.assert;

  buster.testCase("troopjs-hub/emitter", {
    "setUp": function () {
      this.timeout = 1000;
    },

    "subscribe/publish sync subscribers": function () {
      var foo = "FOO";
      var bar = "BAR";

      var spy1 = this.spy(function (arg) {
        return [ arg, bar ];
      });
      var spy2 = this.spy();
      var spy3 = this.spy(function () {
        return arguments;
      });
      var spy4 = this.spy(function (arg1) {
        return arg1;
      });
      var spy5 = this.spy();

      emitter.on("foo/bar", spy1);
      emitter.on("foo/bar", spy2);
      emitter.on("foo/bar", spy3);
      emitter.on("foo/bar", spy4);
      emitter.on("foo/bar", spy5);

      return emitter
        .emit("foo/bar", foo)
        .tap(function () {
          assert.calledOnce(spy1);
          assert.calledOnce(spy2);
          assert.calledOnce(spy3);
          assert.calledOnce(spy4);
          assert.calledOnce(spy5);
          assert.calledWithExactly(spy1, foo);
          assert.calledWithExactly(spy2, foo, bar);
          assert.calledWithExactly(spy3, foo, bar);
          assert.calledWithExactly(spy4, foo, bar);
          assert.calledWithExactly(spy5, foo);
        });
    },

    "subscribe/publish async subscribers": function () {
      var foo = "FOO";
      var bar = "BAR";

      var spy1 = this.spy(function (arg) {
        return when.resolve([ arg, bar ]);
      });
      var spy2 = this.spy(function () {
        return when.resolve();
      });
      var spy3 = this.spy(function () {
        return when.resolve(arguments);
      });
      var spy4 = this.spy(function (arg1) {
        return when.resolve(arg1);
      });
      var spy5 = this.spy();

      emitter.on("foo/bar", spy1);
      emitter.on("foo/bar", spy2);
      emitter.on("foo/bar", spy3);
      emitter.on("foo/bar", spy4);
      emitter.on("foo/bar", spy5);

      return emitter
        .emit("foo/bar", foo)
        .tap(function () {
          assert.calledOnce(spy1);
          assert.calledOnce(spy2);
          assert.calledOnce(spy3);
          assert.calledOnce(spy4);
          assert.calledOnce(spy5);
          assert.calledWithExactly(spy1, foo);
          assert.calledWithExactly(spy2, foo, bar);
          assert.calledWithExactly(spy3, foo, bar);
          assert.calledWithExactly(spy4, foo, bar);
          assert.calledWithExactly(spy5, foo);
        });
    },

    "bug out in first hub subscriber": function () {
      var err = new Error("bug out");
      var spy = this.spy(function () {
        throw err;
      });

      emitter.on("foo/bar", spy);

      return emitter
        .emit("foo/bar")
        .then(function () {
          assert.called(spy);
          assert.threw(spy, err);
        })
        .otherwise(function (error) {
          assert.same(error, err);
        });
    },

    "tearDown": function () {
      emitter.off("foo/bar");
    }
  });
});
