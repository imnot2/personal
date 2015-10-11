var ssApp = angular.module('ssApp', [
    'ui.router',
    'controllers',
    'services',
    'directives'
]);

var ctrls = angular.module('controllers', []);
var services = angular.module('services', []);
var directives = angular.module('directives', []);

ssApp.run(function ($rootScope, $state, $stateParams) {
    $rootScope.$state = $state;
    $rootScope.$stateParams = $stateParams;
});
ssApp.config(function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/index/1');
    $stateProvider
        .state('index', {
            url: '/index/{type:[1-3]{1}}',
            views: {
                '': {
                    //template: '这里是第一列的内容',
                    //controller: 'Controller',
                    templateUrl: 'tpls/index.tpl.html',
                    controller: 'indexCtrl'
                },
                // 'nav@index': {
                //     templateUrl: 'tpls/ui-wiget/nav.tpl.html'
                // },
                // 'sideMenu@index': {
                //     templateUrl: 'tpls/ui-wiget/sideMenu.tpl.html',
                //     controller: 'sideMenuCtrl'
                // }
            }
        }).state('userBuyer', {
            url: '/user/buyer/{page:[1-2]{1}}',
            views: {
                '': {
                    templateUrl: 'tpls/userBuyer.tpl.html',
                    controller: 'userBuyer'
                }
            }
        }).state('userSeller', {
            url: '/user/seller/{page:[1-3]{1}}',
            views: {
                '': {
                    templateUrl: 'tpls/userSeller.tpl.html',
                    controller: 'userSeller'
                }
            }
        })
});