services.service('productsService', ['$http', '$rootScope', function($http, $rootScope) {
    var me = this;
    
    this.products = {};
    this.products.interest = {};
    this.products.processing = {};
    this.products.willBegin = {};

    this.getProducts = function(productsType, successFn, failFn, isRefresh) {
        $http({
            url: '/products/' + productsType + '.json',
            method: 'GET'
        }).success(function(res) {
            angular.forEach(res.data, function(value, key) {
                console.log(value);
                console.log(key);
                me.products[productsType][value.id] = value;
            });
            $rootScope.$broadcast('products.update');
        }).error(function(err) {
            failFn(err);
        })
    }
}])
