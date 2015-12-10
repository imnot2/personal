services.service('user', ['$http', '$rootScope', 'utils', function($http, $rootScope, utilsService) {
    var res = {
        userInfo: {
            id: '28765544',
            name: 'sosochen',
            avatar: '/images/temp/1.jpg',
            level: '4',
            identity: 'Buyer'
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
        callback && callback(res);
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
}])
