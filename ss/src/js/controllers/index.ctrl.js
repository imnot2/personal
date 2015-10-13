ctrls.controller('indexCtrl', [
    '$scope',
    '$http',
    '$state',
    '$stateParams',
    '$rootScope',
    'user',
    function ($scope, $http, $state, $stateParams, $rootScope, user) {

        $scope.slideMenuShow = false;
        $scope.wrapClass = 'page-home';

        $scope.type = parseInt($stateParams.type);

        if ($scope.type == 3) {
            if (!user.getToken()) {
                $scope.noLogin = true;
            } else {
                $scope.interestPruducts = [{
                    'endtime': 1444657093125,
                    'owner': {
                        'avatar': '/images/temp/1.jpg',
                        'name': 'sosochen',
                        'level': 3
                    },
                    'auctions': 15,
                    'comments': 25,
                    'likes': 55,
                    'curPrice': 1290,
                    'src': '/images/temp/1.jpg',
                    'title': '石守一生新疆和田玉蝉吊坠玉石一鸣惊人玉2212'
                }, {
                    'endtime': 1444657093125,
                    'owner': {
                        'avatar': '/images/temp/1.jpg',
                        'name': 'sosochen',
                        'level': 3
                    },
                    'auctions': 15,
                    'comments': 45,
                    'likes': 55,
                    'curPrice': 1290,
                    'src': '/images/temp/1.jpg',
                    'title': '石守一生新疆和田玉蝉吊坠玉石一鸣惊人玉器挂22422'
                }, {
                    'endtime': 1444657093125,
                    'owner': {
                        'avatar': '/images/temp/1.jpg',
                        'name': 'sosochen',
                        'level': 3
                    },
                    'auctions': 15,
                    'comments': 75,
                    'likes': 55,
                    'curPrice': 1290,
                    'src': '/images/temp/1.jpg',
                    'title': '石守一生新疆和田玉蝉吊坠玉石一鸣惊人玉器挂543'
                }, {
                    'endtime': 1444657093125,
                    'owner': {
                        'avatar': '/images/temp/1.jpg',
                        'name': 'sosochen',
                        'level': 3
                    },
                    'auctions': 15,
                    'comments': 445,
                    'likes': 55,
                    'curPrice': 1290,
                    'src': '/images/temp/1.jpg',
                    'title': '石守一生新疆和田玉蝉吊坠玉石一鸣惊人玉器挂745'
                }, {
                    'endtime': 1444657093125,
                    'owner': {
                        'avatar': '/images/temp/1.jpg',
                        'name': 'sosochen',
                        'level': 3
                    },
                    'auctions': 15,
                    'comments': 15,
                    'likes': 55,
                    'curPrice': 1290,
                    'src': '/images/temp/1.jpg',
                    'title': '石守一生新疆和田玉蝉吊坠玉石一鸣惊人玉器挂件222'
                }];
            }
        }
        $scope.processingProducts = [{
            'endtime': 1444657093125,
            'owner': {
                'avatar': '/images/temp/1.jpg',
                'name': 'sosochen',
                'level': 3
            },
            'auctions': 15,
            'comments': 25,
            'likes': 55,
            'curPrice': 1290,
            'src': '/images/temp/1.jpg',
            'title': '石守一生新疆和田玉蝉吊坠玉石一鸣惊人玉2212'
        }, {
            'endtime': 1444657093125,
            'owner': {
                'avatar': '/images/temp/1.jpg',
                'name': 'sosochen',
                'level': 3
            },
            'auctions': 15,
            'comments': 45,
            'likes': 55,
            'curPrice': 1290,
            'src': '/images/temp/1.jpg',
            'title': '石守一生新疆和田玉蝉吊坠玉石一鸣惊人玉器挂22422'
        }, {
            'endtime': 1444657093125,
            'owner': {
                'avatar': '/images/temp/1.jpg',
                'name': 'sosochen',
                'level': 3
            },
            'auctions': 15,
            'comments': 75,
            'likes': 55,
            'curPrice': 1290,
            'src': '/images/temp/1.jpg',
            'title': '石守一生新疆和田玉蝉吊坠玉石一鸣惊人玉器挂543'
        }, {
            'endtime': 1444657093125,
            'owner': {
                'avatar': '/images/temp/1.jpg',
                'name': 'sosochen',
                'level': 3
            },
            'auctions': 15,
            'comments': 445,
            'likes': 55,
            'curPrice': 1290,
            'src': '/images/temp/1.jpg',
            'title': '石守一生新疆和田玉蝉吊坠玉石一鸣惊人玉器挂745'
        }, {
            'endtime': 1444657093125,
            'owner': {
                'avatar': '/images/temp/1.jpg',
                'name': 'sosochen',
                'level': 3
            },
            'auctions': 15,
            'comments': 15,
            'likes': 55,
            'curPrice': 1290,
            'src': '/images/temp/1.jpg',
            'title': '石守一生新疆和田玉蝉吊坠玉石一鸣惊人玉器挂件222'
        }];
        $scope.willBeginProducts = [{
            'startTime': 1444657093125,
            'isFollowed': false,
            'src': '/images/temp/1.jpg',
            'title': '守一生新fasdf守一生新'
        }, {
            'startTime': 1444657093125,
            'isFollowed': false,
            'src': '/images/temp/1.jpg',
            'title': '守一生新fasdf守一生新'
        }, {
            'startTime': 1444657093125,
            'isFollowed': false,
            'src': '/images/temp/1.jpg',
            'title': '守一生新fasdf守一生新'
        }, {
            'startTime': 1444657093125,
            'isFollowed': false,
            'src': '/images/temp/1.jpg',
            'title': '守一生新fasdf守一生新'
        }, {
            'startTime': 1444657093125,
            'isFollowed': false,
            'src': '/images/temp/1.jpg',
            'title': '守一生新fasdf守一生新'
        }];
        $scope.dynamicCount = 9;

        var token = user.getToken();
        var identity = user.getIdentity();
        var noLogin = !token;

        $scope.showLogin = noLogin;

        $scope.toUser = function () {
            if (noLogin) {
                $state.go('login')
            } else {
                $state.go('user' + identity, {
                    page: 1
                })
            }
        }
    }
])