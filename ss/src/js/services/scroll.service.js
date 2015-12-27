services.service('scrollService', ['$rootScope', function($rootScope) {
    this.listenerStop = function(hookObj) {
        var me = this;
        var direction = 'up'; //向上滑动。
        var node = hookObj.el;
        if (!me.interval) {
            me.initRange = node.scrollTop();
            me.previousRange = node.scrollTop();
            me.interval = setInterval(function() {

                //跟上一次滚动的距离做比较得出方向。
                if (node.scrollTop() < me.previousRange) {
                    direction = 'down';
                };

                // 判断此刻到顶部的距离是否和上次滚动前的距离相等  
                if (node.scrollTop() == me.previousRange) {
                    clearInterval(me.interval);
                    me.interval = null;
                    hookObj.whenStop && hookObj.whenStop({
                        direction: direction,
                        range: Math.abs(me.initRange - me.previousRange)
                    });
                };
                me.previousRange = node.scrollTop();
            }, 100);
        }
    }
}])
