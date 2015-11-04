directives.directive('productsscroll', [
    '$rootScope',
    '$state',
    '$stateParams',
    'productsService',
    'utils',
    function($rootScope, $state, $stateParams, productsService, utils) {
        return {
            restrict: 'AE',
            link: function(scope, element, attrs) {
                console.log("AA");
                var pageHash = {
                        '1': 'processing',
                        '2': 'willBegin',
                        '3': 'interest'
                    },
                    page = pageHash[$stateParams.type],
                    products = productsService.products[page],
                    point = 0,
                    showSize = 8,
                    oldTop = 0, // 滚动时不停刷新这个值，用来判断滚动条是否停下来;
                    referTop = 0, //每次滚动停下来才刷新这个值，用来判断滚动的放心。
                    paneWrap,
                    paneNode,
                    interval = null; // 定时器  

                function bindScroll(node) {
                    unbindScroll(node);
                    node.on('scroll', scrollEvt);
                }

                function unbindScroll(node) {
                    node.off('scroll', scrollEvt);
                    referTop = node.scrollTop();
                }

                function scrollEvt() {
                    var node = paneNode,
                        direction = 'up'; //向上滑动。

                    if (interval == null) {
                        interval = setInterval(function() {

                            //跟上一次滚动的距离做比较得出方向。
                            if (node.scrollTop() < referTop) {
                                direction = 'down';
                            };

                            // 判断此刻到顶部的距离是否和上次滚动前的距离相等  
                            if (node.scrollTop() == oldTop) {
                                clearInterval(interval);
                                interval = null;
                                whenStop(node, direction);
                                console.log(point)
                                console.log('whenStop___________')
                            };
                            oldTop = node.scrollTop();
                        }, 300);
                    }

                };


                function updateShowData() {
                    if (point < 0) {
                        point = 0;
                    }
                    if (point + showSize > products.srcData.length) {
                        point = products.srcData.length - showSize;
                    }
                    products.showData = products.srcData.slice(point, point + showSize);
                }

                function whenStop(node, direction) {
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

                    unbindScroll(node);

                    if (point !== 0) {
                        referTop = needScrollTop;
                        node.scrollTop(needScrollTop);
                    }

                    if (point !== products.srcData.length - showSize) {
                        bindScroll(node);
                    } else {
                        //并通知productsService 需要向后端拉数据了。
                        productsService.getProducts(page, 'true');
                    }
                }

                scope.$on('products.update', function() {
                    paneWrap = $(element).find('.ui-tabs-content');
                    paneNode = paneWrap.find('.ui-tabs-pane.active');

                    products = productsService.products[page];

                    updateShowData();

                    bindScroll(paneNode);
                });
            }
        }
    }
])
