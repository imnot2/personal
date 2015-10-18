services.factory('user', ['$http', 'utils'function($http, utilsService) {
    var res = {
        userInfo: {
            id: '',
            name: 'sosochen',
            avatar: '',
            level: '',
            identity: 'Buyer'
        },
        token: 'asdfa3rewtq',
        msg: '登录成功！',
        status: 0
    };
    this.login = function(name, password, callback) {
        // $http.post('xxx', {
        //     name: name,
        //     password: password
        // }).success(function(res) {
        if (res.status === 0) {
            this.isLogin = true;
            //this.userInfo = res.userInfo;
            this.saveUserInfo(res.userInfo);
            //this.token = res.token;
            $.setCookie('t', res.token);
        }
        callback(res);
        //})
    };
    this.saveUserInfo = function(userinfo) {
        $.setCookie('UState', {
            id: userInfo.id,
            name: userInfo.name,
            level: userInfo.level,
            avatar: userInfo.avatar,
            identity: userInfo.identity
        }, true);
    };
    this.getToken = function(){
        return $.getCookie('t', true);
    };
    this.getIdentity = function(){
        return this.getUState('identity');
    };
    this.getUState = function(key) {
        var ustate = $.getCookie('UState', true);
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
    this.checkLogin = function(isValid, callback) {
        if (this.getUState('t')) {
            if (isValid) {
                this.getUserInfo(callback);
            }
            return true;
        }
        return false;
    };
    return {
        login: function(loginInfo, callback) {
            var res = {
                userName: 'sosochen',
                token: 'asdfa3rewtq',
                msg: '登录成功！'
            }
            this.userName = res.userName;
            callback(res);
        },
        register: function() {},
        saveUserInfo: function(token) {},
        getUserInfo: function() {},
        getToken: function() {
            return 'asdfa3rewtq';
        },
        getIdentity: function() {
            return 'Buyer';
        }
    }

}])
