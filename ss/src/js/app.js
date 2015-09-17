var routerModule = angular.module('ssApp', ['ui.router']);

routerModule.run(function($rootScope, $state, $stateParams) {
    $rootScope.$state = $state;
    $rootScope.$stateParams = $stateParams;
});

routerModule.config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/index');
    $stateProvider
        .state('index', {
            url: '/index',
            views: {
                '': {
                    //template: '这里是第一列的内容',
                    //controller: 'Controller',
                    templateUrl: 'tpls/index.tpl.html'
                },
                'nav@index': {
                    templateUrl: 'tpls/ui-wiget/nav.tpl.html'
                }
            }
        })
});
// routerModule.controller('Controller', function($scope) {
//     $scope.message = 'test';
//     $scope.topics = [{
//         name: 'Butterscotch',
//         price: 50
//     }, {
//         name: 'Black Current',
//         price: 100
//     }, {
//         name: 'Mango',
//         price: 20
//     }];
// });