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
    'directives.actions.goback',
    'directives.actions.goUserCenter'
]);
angular.module('controllers',[
    'controllers.indexProductsCtrl',
]);

angular.module('filters',[]);
angular.module('services',[]);

ssApp.run(function ($rootScope, $state, $stateParams) {
    $rootScope.$state = $state;
    $rootScope.$stateParams = $stateParams;
});
