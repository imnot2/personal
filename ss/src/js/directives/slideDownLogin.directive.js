directives.directive('slidedownlogin', ['uiToggleService', function(uiToggleService) {
    return {
        restrict: 'AE',
        link: function(scope, element, attrs) {
            var dropdown = uiToggleService.getUI('dropdown');
            scope.$on('dropdown.toggle', function() {
                element.removeClass(dropdown.show ? 'slideOutUp' : 'slideInDown').addClass(dropdown.show ? 'slideInDown' : 'slideOutUp');
            })
            touch.on(element, "swipeup", function(ev) {
                dropdown.toggle();
            });
        }
    }
}])
