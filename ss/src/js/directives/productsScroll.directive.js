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
                    showSize = 6,
                    isCustomer = false,
                    paneWrap,
                    paneNode;

                function bindScroll(node, callback) {
                    function scrollEvt() {
                        var topValue = 0, // 上次滚动条到顶部的距离 
                            direction = 'up', //向上滑动。
                            interval = null; // 定时器  

                        console.log('scrollEvt');
                        if(interval == null) // 未发起时，启动定时器 
                            interval = setInterval(function() {
                            //跟上一次滚动的距离做比较得出方向。
                            if(node.scrollTop() < topValue) {
                                direction = 'down';
                            }
                            // 判断此刻到顶部的距离是否和上次滚动前的距离相等  
                            if(node.scrollTop() == topValue) {
                                clearInterval(interval);
                                interval = null;
                                node.off('scroll', scrollEvt);
                                callback(node, direction);
                                node.on('scroll', scrollEvt)
                            };
                        }, 500);
                        topValue = node.scrollTop();
                    }
                    node.on('scroll', scrollEvt)
                }



                function updateShowData() {
                    products.showData = products.srcData.slice(point, point + showSize);

                    if(products.showData.length < showSize) {

                        //如果将要显示的源数据不足6条，把point往回拨，让最后6条显示。
                        point = point - (showSize - products.showData.length);
                        products.showData = products.srcData.slice(point, point + showSize);

                        //并通知productsService 需要向后端拉数据了。
                        productsService.getProducts(page, true);

                        //isCustomer(是否自定义了point值)赋值true；
                        isCustomer = true;
                    }
                }

                function whenStop(node, direction) {
                    var itemHeight = node.children('article').height() + 20; //358; //一个商品dom的高度。
                    var scrollTop = node.scrollTop();
                    var scrollBottom;
                    var scale;

                    if(direction === 'down') {
                        scrollBottom = node.height() - scrollTop - paneWrap.height();
                        console.log('scrollBottom; '+scrollBottom);
                        scale = parseInt(scrollBottom / itemHeight);
                        point -= scale;
                    } else {
                        scale = parseInt(scrollTop / itemHeight);
                        point += scale;
                    }
                    console.log('direction: ' + direction);
                    console.log('point: ' + point);
                    console.log('scale: ' + scale);

                    //如果之前isCustomer(是否自定义了point值)为true，表示当前的显示数据池已经到了末尾
                    if(!isCustomer) {
                        updateShowData();
                        if(direction === 'down') {
                            console.log('scrolldown: ' + scale);
                            node.scrollTop(scrollTop + scale * itemHeight);
                        } else {
                            console.log('scrollTop: ' + scale);
                            node.scrollTop(scrollTop - scale * itemHeight);
                        }
                    }
                }

                scope.$on('products.update', function() {
                    paneWrap = $(element).find('.ui-tabs-content');
                    paneNode = paneWrap.find('.ui-tabs-pane.active');

                    //如果服务端有数据过来，isCustomer(是否自定义了point值)为false；
                    //isCustomer = false;

                    products = productsService.products[page];
                    updateShowData();
                    bindScroll(paneNode, whenStop);
                });
            }
        }
    }
])
