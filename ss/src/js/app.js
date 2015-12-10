var ssApp = angular.module('ssApp', [
    'ui.router',
    'controllers',
    'services',
    'directives'
]);

var ctrls = angular.module('controllers', []);
var services = angular.module('services', []);
var directives = angular.module('directives', []);

ssApp.run(function($rootScope, $state, $stateParams) {
    $rootScope.$state = $state;
    $rootScope.$stateParams = $stateParams;
});
ssApp.config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/index/1');
    $stateProvider.state('index', {
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
    }).state('user', {
        url: '/user/:identity/:page',
        views: {
            '': {
                templateUrl: 'tpls/user.tpl.html',
                controller: 'userCtrl'
            },
            'content@user': {
                templateUrl: function($stateParams) {
                    return 'tpls/ui-wiget/user' + $stateParams.identity + '.tpl.html'
                },
                controllerProvider: function($stateParams) {
                    return 'user' + $stateParams.identity + 'Ctrl';
                }
            }
        }
    }).state('login', {
        url: '/user/login/:current:params',
        views: {
            '': {
                templateUrl: 'tpls/login.tpl.html'
            }
        }
    }).state('register', {
        url: '/user/register:page',
        views: {
            '': {
                templateUrl: 'tpls/register.tpl.html',
                controller: 'registerCtrl'
            },
            'content@register': {
                templateUrl: function($stateParams) {
                    return 'tpls/ui-wiget/register' + $stateParams.page + '.tpl.html'
                }
            }
        }
    }).state('forgetpassword', {
        url: '/user/forgetpassword:page',
        views: {
            '': {
                templateUrl: 'tpls/forgetPassword.tpl.html',
                controller: 'forgetpasswordCtrl'
            },
            'content@forgetpassword': {
                templateUrl: function($stateParams) {
                    return 'tpls/ui-wiget/forgetPassword' + $stateParams.page + '.tpl.html'
                }
            }
        }
    }).state('setting', {
        url: '/user/setting',
        views: {
            '': {
                templateUrl: 'tpls/setting.tpl.html',
                controller: 'settingCtrl'
            }
        }
    }).state('detail', {
        url: '/detail/:id',
        views: {
            '': {
                templateUrl: 'tpls/detail.tpl.html',
                controller: 'detailCtrl'
            }
        }
    }).state('paydeposit', {
        url: '/paydeposit/:type/:id',
        views: {
            '': {
                templateUrl: 'tpls/paydeposit.tpl.html',
                controller: 'paydepositCtrl'
            },
            'content@paydeposit': {
                templateUrl: function($stateParams) {
                    return 'tpls/ui-wiget/paydeposit' + $stateParams.type + '.tpl.html'
                }
            },
        }
    })
});
