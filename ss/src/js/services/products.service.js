services.service('productsService', ['$http', '$rootScope', function($http, $rootScope) {
    var me = this;

    this.products = {
        processing: {
            srcData: [],
            showData: [],
            manager: {},
            curPage: 0
        },
        willBegin: {
            srcData: [],
            showData: [],
            manager: {},
            curPage: 0
        },
        interest: {
            srcData: [],
            showData: [],
            manager: {},
            curPage: 0
        },
        showSize: 5
    };
    // this.products.processing = {};
    // this.products.willBegin = {};
    // this.products.interest = {};


    this.getProducts = function(productsType, failFn, isRefresh) {
        var products = me.products[productsType];
        if(products.showData.length) return;
        $http({
            url: '/products/' + productsType + '.json',
            method: 'GET'
        }).success(function(res) {
            if(res.data.length) {
                products.srcData = products.srcData.concat(res.data);
                angular.forEach(res.data, function(value, key) {
                    products.manager[value.id] = value;
                });
                $rootScope.$broadcast('products.update');
            }
        }).error(function(err) {
            console.log(err);
            failFn(err);
        })
    }
}])
