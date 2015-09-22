ctrlsModule.controller('indexCtrl', indexCtrl);

indexCtrl.$inject = ['$scope'];

function indexCtrl($scope) {
	$scope.wrapClass = 'page-home';
}