var ssApp = angular.module('ssApp', [
    'ui.router',
    'routers',
    'controllers',
    'filters',
    'services',
    'directives'
]);


angular.module('routers',[]);

angular.module('directives',[
    'directive.actions',
    'directive.wigets'
]);

var ctrlsModule = angular.module('controllers',[]);
var filtersModule = angular.module('filters',[]);
var serversModule = angular.module('services',[]);
var dirAction = angular.module('directive.actions',[]);
var dirWiget = angular.module('directive.wigets',[]);

ssApp.run(function ($rootScope, $state, $stateParams) {
    $rootScope.$state = $state;
    $rootScope.$stateParams = $stateParams;
});
