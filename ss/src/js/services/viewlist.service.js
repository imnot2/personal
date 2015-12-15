services.service('viewListService', ['$rootScope', function($rootScope) {
    var me = this;

    function ViewList(viewName, node, options) {
        this.options = $.extend(options, {});
        this.viewName = viewName;
        this.node = node;
        this.point = 0;
        this.showSize = 8;
        this.oldTop = 0; // 滚动时不停刷新这个值，用来判断滚动条是否停下来;
        this.referTop = 0; //每次滚动停下来才刷新这个值，用来判断滚动的放心。
        this.paneWrap;
        this.paneNode;
        this.interval = null; // 定时器 
        this.dataScore = this.options.dataScore;
        this.updateEvt = this.options.updateEvt;
        this.loadData = this.options.loadData;
        this.init();
    }
    ViewList.prototype = {
        init: function() {
            var me = this;
            $rootScope.$on(me.updateEvt, function() {
                // paneWrap = $(element).find('.ui-tabs-content');
                // paneNode = paneWrap.find('.ui-tabs-pane.active');

                //products = productsService.products[page];
                me.dataScore = me.options.dataScore;

                me.updateShowData();

                me.bindScroll(this.node);
            });
            this.loadData();
        },
        bindScroll: function() {
            this.unbindScroll(this.node);
            this.node.on('scroll', this.scrollEvt);
        },
        unbindScroll: function() {
            this.node.off('scroll', this.scrollEvt);
            this.referTop = this.node.scrollTop();
        },
        scrollEvt: function() {
            var node = this.node,
                oldTop = this.oldTop,
                interval = this.interval,
                whenStop = this.whenStop,
                direction = 'up'; //向上滑动。

            if (interval == null) {
                interval = setInterval(function() {

                    //跟上一次滚动的距离做比较得出方向。
                    if (node.scrollTop() < this.referTop) {
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
        },

        whenStop: function() {
            var node = this.node;
            var showSize = this.showSize;
            var point = this.point;

            var itemHeight = node.children('article').height() + 20; //358; //一个商品dom的高度。
            var scrollTop = node.scrollTop();
            var scrollBottom;
            var scale;
            var needScrollTop;

            if (direction === 'down') {
                scrollBottom = itemHeight * showSize - scrollTop - paneWrap.height();
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

            updateShowData();

            if (direction === 'down') {
                needScrollTop = scrollTop + scale * itemHeight;
            } else {
                needScrollTop = scrollTop - scale * itemHeight;
            }

            this.unbindScroll(node);

            if (point !== 0) {
                this.referTop = needScrollTop;
                node.scrollTop(needScrollTop);
            }

            if (point !== this.dataScore.srcData.length - showSize) {
                this.bindScroll(node);
            } else {
                //并通知productsService 需要向后端拉数据了。
                //productsService.getProducts(page, 'true');
                this.loadData();
            }
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
        new ViewList(viewName, node, options);
    }
}])
