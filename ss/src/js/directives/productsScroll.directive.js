directives.directive('productsscroll', [
    '$rootScope',
    '$state',
    '$stateParams',
    'viewListService',
    'productsService',
    'utils',
    function($rootScope, $state, $stateParams, viewListService, productsService, utils) {
        return {
            restrict: 'AE',
            link: function(scope, element, attrs) {
                var pageHash = {
                    '1': 'processing',
                    '2': 'willBegin',
                    '3': 'interest'
                };
                var page = pageHash[$stateParams.type];
                viewListService.newViewList(page, element, {
                    dataScore: productsService.products[page],
                    updateEvt: page + '.update',
                    loadData: function() {
                        productsService.getProducts(page, 'true');
                    }
                });

            }
        }
    }
])
