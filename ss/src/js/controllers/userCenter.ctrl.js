ctrls.controller('userCenter', [
    '$scope',
    '$http',
    '$state',
    '$stateParams',
    '$rootScope',
    function ($scope, $http, $state, $stateParams, $rootScope) {
    	setTimeout(function(){
    		$state.go('index',{'title':'AAAA'});
    	},3000)
    	
	}
])