services.service('productsService', ['$http', '$rootScope', function($http, $rootScope) {
    var me = this;

    this.products = {
        processing: {
            srcData: [],
            showData: [],
            curPage: 0
        },
        willBegin: {
            srcData: [],
            showData: [],
            curPage: 0
        },
        interest: {
            srcData: [],
            showData: [],
            curPage: 0
        },
        manager: {},
        showSize: 5
    };
    // this.products.processing = {};
    // this.products.willBegin = {};
    // this.products.interest = {};


    this.getProducts = function(productsType, successFn, failFn, isRefresh) {
        var products = me.products[productsType];
        if (!angular.isFunction(arguments[1])) {
            isRefresh = arguments[1];
            successFn = function() {};
            failFn = function() {};
        }
        if (products.showData.length && isRefresh === 'false') return;

        //console.log('getProducts');
        $http({
            url: '/products/' + productsType + '.json',
            method: 'GET'
        }).success(function(res) {
            if (res.data.length) {
                products.srcData = products.srcData.concat(res.data);
                angular.forEach(res.data, function(value, key) {
                    me.products.manager[value.id] = value;
                });
                $rootScope.$broadcast('products.update');
                successFn();
            }
        }).error(function(err) {
            console.log(err);
            failFn(err);
        })
    }
}])
