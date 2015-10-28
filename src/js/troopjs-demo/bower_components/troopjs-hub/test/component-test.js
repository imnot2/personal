define([
  "buster",
  "../component",
  "../emitter",
  "troopjs-core/component/signal/initialize",
  "troopjs-core/component/signal/start",
  "troopjs-core/component/signal/finalize"
], function (buster, Component, emitter, initialize, start, finalize) {
  "use strict";

  var assert = buster.referee.assert;
  var refute = buster.referee.refute;

  buster.testCase("troopjs-hub/component", {
    "empty phase is protected": function () {
      var spy = this.spy();
      var component = Component.create({
        "hub/foo/bar": spy
      });

      return emitter
        .emit("foo/bar")
        .tap(function () {
          refute.called(spy);
        })
        .tap(function () {
          return start.call(component);
        })
        .tap(function () {
          return finalize.call(component);
        });
    },

    "skip phases are protected": function () {
      var hub_handler = this.spy();
      var sig_handler = this.spy(function () {
        return emitter.emit("foo/bar");
      });
      var component = Component.create({
        "sig/initialize": sig_handler,
        "sig/finalize": sig_handler,
        "hub/foo/bar": hub_handler
      });

      return start.call(component)
        .tap(function () {
          assert.calledOnce(sig_handler);
          refute.called(hub_handler);
        })
        .tap(function () {
          return finalize.call(component);
        })
        .tap(function () {
          assert.calledTwice(sig_handler);
          refute.called(hub_handler);
        });
    },

    "subscribe from spec": function () {
      var spy = this.spy();
      var component = Component.create({
        "hub/foo/bar": spy
      });

      return start.call(component)
        .tap(function () {
          return emitter.emit("foo/bar", 1, true, "test");
        })
        .tap(function () {
          assert.calledOnceWith(spy, 1, true, "test");
        })
        .tap(function () {
          return finalize.call(component);
        });
    },

    "subscribe from spec with memory": function () {
      var spy = this.spy();
      var component = Component.create({
        "hub/foo/bar(true)": spy
      });

      return emitter
        .emit("foo/bar", 1, true, "test")
        .tap(function () {
          return start.call(component);
        })
        .tap(function () {
          assert.calledOnceWith(spy, 1, true, "test");
        })
        .tap(function () {
          return finalize.call(component);
        });
    },

    "dynamic subscribe": function () {
      var spy = this.spy();
      var component = Component.create();

      component.on("hub/foo/bar", spy);

      return start.call(component)
        .tap(function () {
          return emitter.emit("foo/bar");
        })
        .tap(function () {
          assert.calledOnce(spy);
        })
        .tap(function () {
          return finalize.call(component);
        });
    },

    "dynamic subscribe with memory before start": function () {
      var spy = this.spy();
      var component = Component.create();

      component.on("hub/foo/bar", spy, true);

      return emitter
        .emit("foo/bar", 1, true, "test")
        .tap(function () {
          return start.call(component);
        })
        .tap(function () {
          assert.calledOnceWith(spy, 1, true, "test");
        })
        .tap(function () {
          return finalize.call(component);
        });
    },

    "dynamic subscribe with memory after start": function () {
      var spy = this.spy();
      var component = Component.create();

      return start.call(component)
        .tap(function () {
          return emitter.emit("foo/bar", 1, true, "test");
        })
        .tap(function () {
          component.on("hub/foo/bar", spy, true);
          assert.calledOnceWith(spy, 1, true, "test");
        })
        .tap(function () {
          return finalize.call(component);
        });
    },

    "dynamic subscribe and unsubscribe with memory before start": function () {
      var spy = this.spy();
      var component = Component.create();

      component.on("hub/foo/bar", spy, true);
      component.off("hub/foo/bar", spy);

      return emitter
        .emit("foo/bar", 1, true, "test")
        .tap(function () {
          return start.call(component);
        })
        .tap(function () {
          refute.called(spy);
        })
        .tap(function () {
          return finalize.call(component);
        });
    }
  });
});
