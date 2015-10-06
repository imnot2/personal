ctrls.controller('userSeller', [
	'$scope',
	'$http',
	'$state',
	'$stateParams',
	'$rootScope',
	'user',
	'utils',
	function ($scope, $http, $state, $stateParams, $rootScope, user, utils) {
		$scope.wrapClass = 'page-home page-seller';          
        $scope.page = parseInt($stateParams.page);
	}
])
