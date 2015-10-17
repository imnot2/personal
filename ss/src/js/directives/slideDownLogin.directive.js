directives.directive('slidedownlogin', function() {
    return {
        restrict: 'AE',
        link: function(scope, element, attrs) {
            var hammertime = new Hammer($(element)[0]);
            hammertime.add(new Hammer.Swipe());
            hammertime.on("swipeup", function(ev) {
                console.log(ev);
                scope.loginSlideIn = false;
                scope.$apply();
            });

        }
    }
})
