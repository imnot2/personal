ctrls.controller('userCenter', [
	'$scope',
	'$http',
	'$state',
	'$stateParams',
	'$rootScope',
	'user',
	'utils',
	function ($scope, $http, $state, $stateParams, $rootScope, user, utils) {
		$scope.wrapClass = 'page-home';
		if (!user.getToken()) $state.go('index', {
			'title': 'AAAA',
			'ret': window.location.href
		});
		// setTimeout(function(){
		// 	$state.go('index',{'title':'AAAA'});
		// },3000)
	}
])