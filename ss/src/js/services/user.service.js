services.factory('user', ['$http',
    function($http) {
        return {
            login: function(loginInfo, callback) {
            	var res = {
            		userName: 'sosochen',
            		token:'asdfa3rewtq',
            		msg:'登录成功！'
            	}
                this.userName = res.userName;
                callback(res);
            },
            register: function() {},
            saveUserInfo: function(token) {},
            getUserInfo: function() {},
            getToken: function() {
                //return 'asdfa3rewtq';
            },
            getIdentity: function() {
                return 'Buyer';
            }
        }

    }
])
