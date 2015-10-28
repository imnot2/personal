directives.directive('slidedownlogin', function() {
    return {
        restrict: 'AE',
        link: function(scope, element, attrs) {
            touch.on(element, "swipeup", function(ev) {
                console.log(ev);
                scope.loginSlideIn = false;
                scope.$apply();
            });

        }
    }
})
