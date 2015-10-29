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
                    isCustomer = false;

                function updateShowData() {
                    products.showData = products.srcData.slice(point, point + 6);

                    if(products.showData.length < 6) {

                        //如果将要显示的源数据不足6条，把point往回拨，让最后6条显示。
                        point = point - (6 - products.showData.length);
                        products.showData = products.srcData.slice(point, point + 6);

                        //并通知productsService 需要向后端拉数据了。
                        productsService.getProducts(page, true);

                        //isCustomer(是否自定义了point值)赋值true；
                        isCustomer = true;
                    }
                }

                scope.$on('products.update', function() {
                    //如果服务端有数据过来，isCustomer(是否自定义了point值)为false；
                    //isCustomer = false;

                    products = productsService.products[page];
                    updateShowData();
                    bindScroll();
                });

                function bindScroll() {
                    var paneNode = $(element).find('.ui-tabs-pane.active');
                    var topValue = 0, // 上次滚动条到顶部的距离  
                        interval = null; // 定时器  

                    paneNode.on('scroll', function() {
                        if(interval == null) // 未发起时，启动定时器 
                            interval = setInterval(function() {
                            // 判断此刻到顶部的距离是否和上次滚动前的距离相等  
                            if(paneNode.scrollTop() == topValue) {
                                clearInterval(interval);
                                interval = null;
                                whenStop();
                            }
                        }, 500);
                        topValue = paneNode.scrollTop();
                    })

                    function whenStop() {
                        var scrollTop = paneNode.scrollTop();
                        var itemHeight = paneNode.children('article').height() + 20; //358; //一个商品dom的高度。
                        var scale = parseInt(scrollTop / itemHeight);
                        point += scale;
                        console.log(point);
                        console.log(scale);

                         //如果之前isCustomer(是否自定义了point值)为true，表示当前的显示数据池已经到了末尾
                        if(!isCustomer){
                            updateShowData();
                            paneNode.scrollTop(scrollTop - scale * itemHeight);
                        }
                    }
                }
            }
        }
    }
])
