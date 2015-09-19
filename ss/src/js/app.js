var routerModule = angular.module('ssApp', ['ui.router','controllers']);

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
                    templateUrl: 'tpls/index.tpl.html',
                    controller:'indexCtrl'
                },
                // 'nav@index': {
                //     templateUrl: 'tpls/ui-wiget/nav.tpl.html'
                // },
                'sideMenu@index':{
                    templateUrl: 'tpls/ui-wiget/sideMenu.tpl.html',
                    controller:'sideMenuCtrl'
                }
            }
        })
});