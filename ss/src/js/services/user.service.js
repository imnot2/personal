services.service('user', ['$http',
	function ($http) {
		this.login = function(){};
		this.register = function(){};
		this.saveUserInfo = function(token){};
		this.getUserInfo = function(){};
		this.getToken = function(){};
	}
])