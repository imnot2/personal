services.service('viewListService', ['$rootScope', 'utils', function($rootScope, utils) {
    var me = this;

    function bindScroll() {
        var instance = me.view;
        unbindScroll(instance);
        instance.node.on('scroll', scrollEvt);
    }

    function unbindScroll() {
        var instance = me.view;
        instance.node.off('scroll', scrollEvt);
        instance.referTop = instance.node.scrollTop();
    }

    function scrollEvt() {
        var instance = me.view,
            node = instance.node,
            oldTop = instance.oldTop,
            interval = instance.interval,
            direction = 'up'; //向上滑动。

        if (interval == null) {
            interval = setInterval(function() {

                //跟上一次滚动的距离做比较得出方向。
                if (node.scrollTop() < instance.referTop) {
                    direction = 'down';
                };

                // 判断此刻到顶部的距离是否和上次滚动前的距离相等  
                if (node.scrollTop() == oldTop) {
                    clearInterval(interval);
                    interval = null;
                    whenStop(node, direction);
                };
                oldTop = node.scrollTop();
            }, 300);
        }
    }

    function whenStop(instance, direction) {
        var instance = me.view;
        var node = instance.node;
        var showSize = instance.showSize;
        var point = instance.point;

        var itemHeight = node.children('article').height() + 20; //358; //一个商品dom的高度。
        var scrollTop = node.scrollTop();
        var scrollBottom;
        var scale;
        var needScrollTop;

        if (direction === 'down') {
            scrollBottom = itemHeight * showSize - scrollTop - instance.paneWrap.height();
            scale = parseInt(scrollBottom / itemHeight);
            if (scale > 3) {
                scale -= 3;
                point -= scale;
            } else {
                scale = 0;
            }
        } else {
            scale = parseInt(scrollTop / itemHeight);
            if (scale > 3) {
                scale -= 3;
                point += scale;
            } else {
                scale = 0;
            }
        }

        instance.updateShowData();

        if (direction === 'down') {
            needScrollTop = scrollTop + scale * itemHeight;
        } else {
            needScrollTop = scrollTop - scale * itemHeight;
        }

        unbindScroll(instance);

        if (point !== 0) {
            instance.referTop = needScrollTop;
            node.scrollTop(needScrollTop);
        }

        if (point !== instance.dataScore.srcData.length - showSize) {
            bindScroll(node);
        } else {
            //并通知productsService 需要向后端拉数据了。
            //productsService.getProducts(page, 'true');
            instance.loadData();
        }
    }

    function ViewList(viewName, element, options) {
        this.options = $.extend(options, {});
        this.viewName = viewName;
        this.el = $(element);
        this.point = 0;
        this.showSize = 8;
        this.oldTop = 0; // 滚动时不停刷新这个值，用来判断滚动条是否停下来;
        this.referTop = 0; //每次滚动停下来才刷新这个值，用来判断滚动的放心。
        this.interval = null; // 定时器 
        this.dataScore = this.options.dataScore;
        this.updateEvt = this.options.updateEvt;
        this.loadData = this.options.loadData;
    }
    ViewList.prototype = {
        init: function() {
            var me = this;
            $rootScope.$on(me.updateEvt, function() {

                instance.paneWrap = me.el.find('.ui-tabs-content');
                instance.paneNode = paneWrap.find('.ui-tabs-pane.active');
                me.node = paneNode;
                me.dataScore = me.options.dataScore;

                me.updateShowData();

                bindScroll(me);
            });
            this.loadData();
        },

        updateShowData: function() {
            var point = this.point,
                showSize = this.showSize;

            if (point < 0) {
                point = 0;
            }
            if (point + showSize > this.dataScore.srcData.length) {
                point = this.dataScore.srcData.length - showSize;
            }
            this.dataScore.showData = this.dataScore.srcData.slice(point, point + showSize);
            $rootScope.$broadcast(this.viewName + '.viewlist.update');
        },
    }
    this.newViewList = function(viewName, node, options) {
        this.view = new ViewList(viewName, node, options);
        this.view.init();
    }
}])
