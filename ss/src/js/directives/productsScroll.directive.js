directives.directive('productsscroll', ['$state', function($state) {
    return {
        restrict: 'AE',
        link: function(scope, element, attrs) {
            touch.on(element, 'swipeup', function(ev) {
                var scrollTop = $(element).find('.ui-tabs-pane.active').scrollTop();
            })
        }
    }
}])
