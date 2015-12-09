directives.directive('productinfo', ['user', 'uiToggleService', '$rootScope', '$state', '$stateParams',
    function(user, uiToggleService, $rootScope, $state, $stateParams) {
        return {
            restrict: 'AE',
            scope: {
                product: '=',
                loginslidein: '='
            },
            template: [
                '<p class="item-info">',
                '    <span class="item-hammer"><i class="fa">&#xe609;</i>{{product.auctions}}</span>',
                '    <span class="item-comments"><i class="fa">&#xe604;</i>{{product.comments}}</span>',
                '    <span class="item-heart"><i class="fa">&#xe606;</i>{{product.likes}}</span>',
                '</p>'
            ].join(''),
            replace: true,
            link: function(scope, element, attrs) {
                var token = user.getToken();
                var dropdown;
                touch.on($(element).find('.item-hammer,.item-comments,.item-heart'), 'tap', function(ev) {
                    if(!token) {
                        dropdown = uiToggleService.getUI('dropdown');
                        dropdown.show = false;
                        dropdown.toggle();
                    } else {
                        //$state.go();
                    }
                    console.log(ev);
                })

            }
        }
    }
])
