directives.directive('switch', ['$state', function($state) {
    return {
        restrict: 'AE',
        scope: {
            hookvar: '='
        },
        link: function(scope, element, attrs) {
            touch.on($(element).find('li'), 'tap', function(ev) {
                scope.hookvar = $(ev.currentTarget).index() + 1;
                scope.$apply();
            })
        }
    }
}])
