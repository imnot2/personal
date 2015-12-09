services.service('orderService', ['$http', '$rootScope', function($http, $rootScope) {
    var me = this;
    this.ordersManger = {};
    this.myorder = [];
    this.auctionorder = [];
    this.pageIndex = 0;
    this.resolveOrders = function(order) {
        switch (order.status) {
            case 1:
                order.statusText = "已取消";
                break;
        }
        return order;
    }
    this.getOrders = function(orderType) {
        $http({
            //url: '/products/'+orderType+'.json?v=' + new Date().getTime(),
            url: '/products/orders.json?v=' + new Date().getTime(),
            method: 'GET'
        }).success(function(res) {
            var order, i;
            if (res.status === 200) {
                for (i = 0; i < res.data.length; i++) {
                    order = res.data[i];
                    me[orderType].push(me.resolveOrders(order));
                    me.ordersManger[order.id] = order;
                }
                $rootScope.$broadcast(orderType + '.update');
            }
            me.pageIndex++;
        }).error(function(err) {
            $rootScope.$broadcast(orderType + '.error');
        })
    }
    this.getOrderById = function(orderid) {
        if (this.ordersManger[orderid]) {
            $rootScope.$broadcast('order.get');
        } else {
            $http({
                //url: '/products/'+orderType+'.json?v=' + new Date().getTime(),
                url: '/products/orderdetail.json?v=' + new Date().getTime(),
                method: 'GET'
            }).success(function(res) {
                this.ordersManger[orderid] = res.data;
                $rootScope.$broadcast('order.get');
            }).error(function(err) {
                $rootScope.$broadcast('order.error');
            })
        }
    }
}])
