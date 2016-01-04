services.service('user', ['$http', '$rootScope', '$state', '$timeout', '$location', '$q', 'utils', function($http, $rootScope, $state, $timeout, $location, $q, utils) {
    console.log("userservice");    
    var res = {
        userInfo: {
            id: '28765544',
            name: 'sosochen',
            avatar: '/images/temp/1s.jpg',
            level: '4',
            //identity: 'Buyer'
            identity: 'Seller'
        },
        token: 'asdfa3rewtq',
        //token: '',
        msg: '登录成功！',
        status: 0
    };
    this.login = function(name, password, callback) {
        console.log(arguments);
        // $http.post('xxx', {
        //     name: name,
        //     password: password
        // }).success(function(res) {
        if (res.status === 0) {
            this.isLogin = true;
            //this.userInfo = res.userInfo;
            this.saveUserInfo(res.userInfo);
            //this.token = res.token;
            $.cookie('t', res.token);
        }
        $rootScope.dialog = {
            show: true,
            content: res.msg
        }
        $rootScope.$apply();
        callback && callback(res.userInfo);
        //})
    };
    this.saveUserInfo = function(userInfo) {
        $.cookie.json = true;
        $.cookie('UState', {
            id: userInfo.id,
            name: userInfo.name,
            level: userInfo.level,
            avatar: userInfo.avatar,
            identity: userInfo.identity
        });
    };
    this.getUserInfo = function() {
        var userinfo = $.cookie('UState');
        return typeof userinfo === 'string' ? JSON.parse(userinfo) : userinfo;
    };
    this.getToken = function() {
        return $.cookie('t');
    };
    this.getUState = function(key) {
        var ustate = $.cookie('UState');
        if (ustate && (typeof ustate == 'object')) {
            try {
                return ustate[key];
            } catch (error) {
                return false;
            }
        } else {
            return false;
        }
    };
    this.cleanUState = function(isRedir, callback) {
        $.removeCookie('UState', {
            path: '/'
        });
        $.removeCookie('token', {
            path: '/'
        });
        if (typeof callback == 'function') {
            callback();
            if (isRedir) {
                setTimeout(function() {
                    user.redirect('/');
                }, 800);
            }
        } else if (isRedir) {
            this.redirect('/');
        }
    };
    this.loginRedirect = function(redirectArr) {
        var redirectArr = redirectArr || [];
        var deferred = $q.defer();
        var me = this;
        //$timeout(function() {
        $rootScope.$on('$locationChangeSuccess', function() {
            debugger;
            console.log(arguments);
            var newUrl = $location.$$absUrl;
            var hash = newUrl.match(/#\/(.*)+$/)[1].split('/');
            var parseUrlObj = utils.parseUrl(hash.splice(1), redirectArr);
            var loginOption = {
                'cur': hash[0]
            };
            if (redirectArr.length) {
                loginOption.params = JSON.stringify(parseUrlObj)
            }
            if (me.getToken()) {
                deferred.resolve("Allo!");
            } else {
                $state.go('login', loginOption);
            }
        });
        //}, 3000);

        // $timeout(function() {
        //     deferred.resolve("Allo!");
        // }, 2000);
        return deferred.promise;
    }
}])
