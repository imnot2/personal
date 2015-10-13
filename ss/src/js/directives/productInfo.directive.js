directives.directive('productinfo', ['user', '$rootScope', '$state', '$stateParams',
    function (user, $rootScope, $state, $stateParams) {
        return {
            restrict: 'AE',
            scope: {
                showLogin: '=',
                product: '='
            },
            template: [
                '<p class="item-info">',
                '    <span class="item-hammer"><i class="fa">&#xe609;</i>{{product.auctions}}</span>',
                '    <span class="item-comments"><i class="fa">&#xe604;</i>{{product.comments}}</span>',
                '    <span class="item-heart"><i class="fa">&#xe606;</i>{{product.likes}}</span>',
                '</p>'
            ].join(''),
            replace: true,
            link: function (scope, element, attrs) {
                var token = user.getToken();
                $(element).find('.item-hammer,.item-comments,.item-heart').hammer().bind('tap', function (ev) {
                    if (!token) {
                        scope.showLogin = true;
                    } else {
                        $state.go();
                    }
                })
            }
        }
    }
])