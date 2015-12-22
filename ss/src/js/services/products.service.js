services.service('productsService', ['$http', '$rootScope', 'user', function($http, $rootScope, user) {
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


    this.getProducts = function(productConfig) {
        if (productConfig.needLogin && !user.getToken()) {
            return;
        }
        var productsType = productConfig['type'];
        var products = me.products[productsType];
        var isFirst = productConfig['isFirst'];
        var successFn = productConfig['successFn'] || function() {};
        var failFn = productConfig['failFn'] || function() {};

        console.log(isFirst);
        if(isFirst && products.showData.length){
            //$rootScope.$broadcast(productsType + '.update'); 
            setTimeout(function(){
                successFn();
            },1);          
            //successFn();
            return;
        }        

        //console.log('getProducts');
        $http({
            url: '/products/' + productsType + '.json?v='+ new Date().getTime(),
            method: 'GET'
        }).success(function(res) {
            if (res.data.length) {
                products.srcData = products.srcData.concat(res.data);
                angular.forEach(res.data, function(value, key) {
                    me.products.manager[value.id] = value;
                });
                //$rootScope.$broadcast(productsType + '.update');
                successFn();
            }
        }).error(function(err) {
            console.log(err);
            failFn(err);
        })
    }
    this.getDetail = function(id) {
        var products = this.products.manager;
        if (products[id]) {
            $rootScope.$broadcast('product.get');
        } else {
            $http({
                //url: '/detail/' + id + '.json',
                url: '/products/detail.json?v=' + new Date().getTime(),
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
