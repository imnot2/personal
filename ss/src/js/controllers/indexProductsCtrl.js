ctrlsModule.controller('indexCtrl', indexCtrl);

indexCtrl.$inject = ['$scope'];

function indexCtrl($scope) {
	$scope.wrapClass = 'page-home';
}
indexModule.controller('indexProductsCtrl', ['$scope', '$http', '$state', '$stateParams',
	function ($scope, $http, $state, $stateParams) {
		alert($scope.wrapClass);
		$http.get('http://www.ipinfo.io').success(function (res) {
			$scope.products = [{
				'name': '石守一生新疆和田玉蝉吊坠玉石一鸣惊人玉器挂件',
				'price': '150'
			}, {
				'name': '石守一生新疆和田玉蝉吊坠玉石一鸣惊人玉器挂件',
				'price': '150'
			}, {
				'name': '石守一生新疆和田玉蝉吊坠玉石一鸣惊人玉器挂件',
				'price': '150'
			}]
		})
	}
])