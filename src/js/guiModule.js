var require, define;
(function (g, undefined) {
    'use strict';
    var observer, util, scripts = {};
    observer = {
        addSubscriber: function (evt, callback) {
            var nameObj = this.subscribers || (this.subscribers = {});
            var nameQueue = nameObj[evt] || (nameObj[evt] = []);
            nameQueue.push(callback);
        },
        publish: function (evt) {
            var args = arguments[1];
            var nameQueue = this.subscribers[evt];
            var i;
            for (i = 0; i < nameQueue.length; i++) {
                nameQueue[i].apply(null, args);
            }
        }
    };
    util = {
        extend: function (src, target, deep) {
            for (var i in src) {
                if (target[i]) return;
                target[i] = src[i];
            }
            return target;
        }
    };
    //------------------分割线------------------------
    function Module(opt) {
        this.id = opt.id; //模块ID
        this.statu = opt.statu; //模块状态
        this.parentModule = opt.parentModule; //父模块
        this.dep = []; //依赖的子模块
        this.factory = opt.calblack; //模块加载完毕后的回调
    }
    util.extend(observer, Module.prototype);

    //scripts 管理页面上所有的动态脚本。
    scripts['a'] = new Module({
        status: 0,
        dep: [],
        callback: function () {
            var me = this;
            return {
                log: function () {
                    console.log(me.id + 'is loaded');
                }
            }
        }
    });
    console.log(scripts['a']);
    //场景一
    // require(['a'],function(a){
    //     console.log('b');
    // })

    // module a;
    // define(function(b){
    //     console.log('a');
    // })
    scripts['a'].addSubscriber('load', function () {
        fire();
    });

    function fire() {
        //if ()
    }
})(window)