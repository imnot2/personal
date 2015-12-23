directives.directive('productsscroll', [
    '$rootScope',
    '$state',
    '$stateParams',
    'viewListService',
    'productsService',
    'orderService',
    'utils',
    function($rootScope, $state, $stateParams, viewListService, productsService, orderService, utils) {
        return {
            restrict: 'AE',
            link: function(scope, element, attrs) {
                console.log($state);
                var name = $state.current.name;
                if (name === 'index') {
                    var pageHash = {
                        '1': 'processing',
                        '2': 'willBegin',
                        '3': 'interest'
                    };
                    var page = pageHash[$stateParams.type];
                    viewListService.newViewList(page, element, {
                        dataScore: productsService.products[page],
                        wrap: '.ui-tabs-content',
                        pane: '.ui-tabs-pane.active',
                        loadData: function(isFirst, callback) {
                            productsService.getProducts({
                                type: page,
                                isFirst: isFirst,
                                needLogin: page === 'interest',
                                successFn: callback
                            });
                        }
                    });
                }
                if(name === 'user'){
                    var pageHash = {
                        '1': 'myorder',
                        '2': 'auctionorder'
                    };
                    var page = pageHash[$stateParams.type];
                    viewListService.newViewList(page, element, {
                        dataScore: orderService[page],
                        wrap: '.ui-tabs-pane.active',
                        pane: '.ui-tabs-pane.active',
                        loadData: function(isFirst, callback) {
                            orderService.getOrders({
                                type: page,
                                isFirst: isFirst,
                                successFn: callback
                            });
                        }
                    });
                }
            }
        }
    }
])
