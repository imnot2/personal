services.factory('user', ['$http',
	function ($http) {
		return {
			userName:'xiaoding',
			login: function () {},
			register: function () {},
			saveUserInfo: function (token) {},
			getUserInfo: function () {},
			getToken: function () {
				//return 'asdfa3rewtq';
			},
			getIdentity:function(){
				return 'Buyer';
			}
		}

	}
])