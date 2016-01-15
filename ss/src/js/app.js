var ssApp = angular.module('ssApp', [
    'ui.router',
    'controllers',
    'services',
    'directives'
]);

var ctrls = angular.module('controllers', []);
var services = angular.module('services', []);
var directives = angular.module('directives', []);



ssApp.run(['$rootScope', '$state', '$stateParams', '$location', 'user', function($rootScope, $state, $stateParams, $location, user) {
    $rootScope.$state = $state;
    $rootScope.$stateParams = $stateParams;
    $rootScope.$on('$stateChangeStart', function(ev) {
        user.stateChange = arguments;
    });
}]);
ssApp.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/index');
    $stateProvider.state('index', {
        url: '/index',
        views: {
            '': {
                //template: '这里是第一列的内容',
                //controller: 'Controller',
                templateUrl: '/tpls/index.tpl.html',
                controller: 'indexCtrl'
            },
            // 'nav@index': {
            //     templateUrl: '/tpls/ui-wiget/nav.tpl.html'
            // },
            // 'sideMenu@index': {
            //     templateUrl: '/tpls/ui-wiget/sideMenu.tpl.html',
            //     controller: 'sideMenuCtrl'
            // }
        }
    }).state('user', {
        url: '/user/:identity',
        views: {
            '': {
                templateUrl: '/tpls/user.tpl.html',
                controller: 'userCtrl',
                resolve: {
                    loginRedirect: function(user) {
                        return user.loginRedirect(['identity', 'page']);
                    }
                }
            },
            'content@user': {
                templateUrl: function($stateParams) {
                    return '/tpls/ui-wiget/user' + $stateParams.identity + '.tpl.html'
                },
                controllerProvider: function($stateParams) {
                    return 'user' + $stateParams.identity + 'Ctrl';
                }
            }
        }
    }).state('login', {
        url: '/login/:cur/:params',
        views: {
            '': {
                templateUrl: '/tpls/login.tpl.html'
            }
        }
    }).state('register', {
        url: '/register/:page',
        views: {
            '': {
                templateUrl: '/tpls/register.tpl.html',
                controller: 'registerCtrl'
            },
            'content@register': {
                templateUrl: function($stateParams) {
                    return '/tpls/ui-wiget/register' + $stateParams.page + '.tpl.html'
                }
            }
        }
    }).state('forgetpassword', {
        url: '/forgetpassword/:page',
        views: {
            '': {
                templateUrl: '/tpls/forgetPassword.tpl.html',
                controller: 'forgetpasswordCtrl'
            },
            'content@forgetpassword': {
                templateUrl: function($stateParams) {
                    return '/tpls/ui-wiget/forgetPassword' + $stateParams.page + '.tpl.html'
                }
            }
        }
    }).state('setting', {
        url: '/setting',
        views: {
            '': {
                templateUrl: '/tpls/setting.tpl.html',
                controller: 'settingCtrl',
                resolve: {
                    loginRedirect: function(user) {
                        return user.loginRedirect();
                    }
                }
            }
        },

    }).state('detail', {
        url: '/detail/:id',
        views: {
            '': {
                templateUrl: '/tpls/detail.tpl.html',
                controller: 'detailCtrl'
            }
        }
    }).state('paydeposit', {
        url: '/paydeposit/:type/:id',
        views: {
            '': {
                templateUrl: '/tpls/paydeposit.tpl.html',
                controller: 'paydepositCtrl',
                resolve: {
                    loginRedirect: function(user) {
                        return user.loginRedirect(['type', 'id']);
                    }
                }
            },
            'content@paydeposit': {
                templateUrl: function($stateParams) {
                    return '/tpls/ui-wiget/paydeposit' + $stateParams.type + '.tpl.html'
                }
            },
        }
    }).state('contribute', {
        url: '/contribute',
        views: {
            '': {
                templateUrl: '/tpls/contribute.tpl.html',
                controller: 'contributeCtrl'
            }
        }
    }).state('collect', {
        url: '/collect',
        views: {
            '': {
                templateUrl: '/tpls/collect.tpl.html',
                controller: 'collectCtrl'
            }
        }
    }).state('contact', {
        url: '/contact',
        views: {
            '': {
                templateUrl: '/tpls/contact.tpl.html',
                controller: 'contactCtrl'
            }
        }
    }).state('messages', {
        url: '/messages',
        views: {
            '': {
<<<<<<< Updated upstream
                templateUrl: 'tpls/messages.tpl.html',
                controller: 'messagesCtrl'
=======
                templateUrl: '/tpls/messages.tpl.html',
                controller: 'messagesCtrl',
                resolve: {
                    loginRedirect: function(user) {
                        return user.loginRedirect();
                    }
                }
>>>>>>> Stashed changes
            }
        }
    }).state('preview', {
        url: '/preview',
        views: {
            '': {
<<<<<<< Updated upstream
                templateUrl: 'tpls/preview.tpl.html',
                controller: 'previewCtrl'
=======
                templateUrl: '/tpls/preview.tpl.html',
                controller: 'previewCtrl',
                resolve: {
                    loginRedirect: function(user) {
                        return user.loginRedirect();
                    }
                }
>>>>>>> Stashed changes
            }
        }
    }).state('publish', {
        url: '/publish',
        views: {
            '': {
<<<<<<< Updated upstream
                templateUrl: 'tpls/publish.tpl.html',
                controller: 'publishCtrl'
=======
                templateUrl: '/tpls/publish.tpl.html',
                controller: 'publishCtrl',
                resolve: {
                    loginRedirect: function(user) {
                        return user.loginRedirect();
                    }
                }
>>>>>>> Stashed changes
            }
        }
    })
}]);
