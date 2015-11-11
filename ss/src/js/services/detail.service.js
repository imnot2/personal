services.service('detail', ['$http', '$rootScope', 'productsService', function($http, $rootScope, productsService) {
    var products = productsService.products.manager;
    this.getDetail = function(id) {
        if (products[id]) {
            $rootScope.$broadcast('product.get');
        } else {
            $http({
                //url: '/detail/' + id + '.json',
                url: '/products/detail.json',
                method: 'GET'
            }).success(function(res) {
                products[id] = res.data;
                $rootScope.$broadcast('product.get');
            }).error(function(err) {
                console.log(err);
            })
        }
    }
}])
