services.service('viewListService', ['$rootScope', 'utils', function($rootScope, utils) {
    var me = this;
    var direction;
    var instance;

    function bindScroll() {
        unbindScroll();
        instance.pane.on('scroll', whenStop);
    }

    function unbindScroll() {
        instance.pane.off('scroll', whenStop);
        instance.referTop = instance.pane.scrollTop();
    }

    function listenerStop(stopFn) {
        var node = instance.pane;

        direction = 'up'; //向上滑动。
        if (instance.interval == null) {
            instance.interval = setInterval(function() {

                //跟上一次滚动的距离做比较得出方向。
                if (node.scrollTop() < instance.referTop) {
                    direction = 'down';
                };

                // 判断此刻到顶部的距离是否和上次滚动前的距离相等  
                if (node.scrollTop() == instance.oldTop) {
                    clearInterval(instance.interval);
                    instance.interval = null;
                    stopFn && stopFn();
                };
                instance.oldTop = node.scrollTop();
            }, 100);
        }
    }

    function whenStop() {
        listenerStop(function() {
            var node = instance.pane;
            var showSize = instance.showSize;
            var itemHeight = node.find('article').height() + 20; //358; //一个商品dom的高度。
            var scrollTop = node.scrollTop();
            var scrollBottom;
            var scale;
            var needScrollTop;
            if (direction === 'down') {
                scrollBottom = itemHeight * showSize - scrollTop - instance.wrap.height();
                scale = parseInt(scrollBottom / itemHeight);
                if (scale > 3) {
                    scale -= 3;
                    instance.point -= scale;
                } else {
                    scale = 0;
                }
            } else {
                scale = parseInt(scrollTop / itemHeight);
                if (scale > 3) {
                    scale -= 3;
                    instance.point += scale;
                } else {
                    scale = 0;
                }
            }

            if (direction === 'down') {
                needScrollTop = scrollTop + scale * itemHeight;
            } else {
                needScrollTop = scrollTop - scale * itemHeight;
            }

            unbindScroll();
            instance.updateShowData();

            if (instance.point < 0) {
                instance.point = 0;
            }
            if (instance.point > 0) {
                instance.referTop = needScrollTop;
                node.scrollTop(needScrollTop);
                console.log('instance.referTop : ' + needScrollTop);
            }

            if (instance.point >= instance.dataScore.srcData.length - showSize) {
                //并通知productsService 需要向后端拉数据了。
                instance.onupdate(false);
            }

            console.log('point: ' + instance.point);
            console.log('needScrollTop: ' + needScrollTop);

            listenerStop(bindScroll);
            // if (instance.point > 0) {
            //     
            //     instance.referTop = needScrollTop;
            //     node.scrollTop(needScrollTop);
            // }
            // if (instance.point >= instance.dataScore.srcData.length - showSize) {
            //     instance.onupdate(false);
            // }
            // if (instance.point <= 0) {
            //     instance.point = 0;
            // }

        });
    }

    function ViewList(viewName, element, options) {
        this.options = $.extend(options, {});
        this.viewName = viewName;
        this.showSize = 8;
        this.dataScore = this.options.dataScore;
        this.updateEvt = this.options.updateEvt;
        this.loadData = this.options.loadData;
    }
    ViewList.prototype = {
        init: function(element) {
            this.point = 0;
            this.oldTop = 0; // 滚动时不停刷新这个值，用来判断滚动条是否停下来;
            this.referTop = 0; //每次滚动停下来才刷新这个值，用来判断滚动的放心。
            this.interval = null; // 定时器  
            this.el = $(element);
            this.onupdate();
        },
        onupdate: function() {
            var me = this;
            this.loadData(true, function() {
                me.dataScore = me.options.dataScore;
                me.updateShowData();
                me.wrap = me.options.wrap ? me.el.find(me.options.wrap) : $(document);
                me.pane = me.options.wrap ? me.el.find(me.options.wrap) : $(document);
                bindScroll();
            });
        },
        updateShowData: function() {
            var showSize = this.showSize;

            if (this.point < 0) {
                this.point = 0;
            }
            if (this.point + showSize > this.dataScore.srcData.length) {
                this.point = this.dataScore.srcData.length - showSize;
            }
            this.dataScore.showData = this.dataScore.srcData.slice(this.point, this.point + showSize);
            $rootScope.$broadcast(this.viewName + '.viewlist.update');
        },
    }
    this.newViewList = function(viewName, element, options) {
        if (!viewName) return;
        if (!this[viewName]) {
            this[viewName] = new ViewList(viewName, element, options);
        }
        instance = this[viewName];

        //指令对应的element需要重新获取。
        instance.init(element);
    }
}])
