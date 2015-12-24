services.service('orderService', ['$http', '$rootScope', function($http, $rootScope) {
    var me = this;

    this.orders = {
        myorder: {
            srcData: [],
            showData: [],
            curPage: 0
        },
        auctionorder: {
            srcData: [],
            showData: [],
            curPage: 0
        },
        manager: {},
        showSize: 5
    };

    this.resolveOrders = function(order) {
        switch (order.status) {
            case 1:
                order.statusText = "已取消";
                break;
        }
        return order;
    }
    this.getOrders = function(orderConfig) {
        var me = this;
        var ordersType = orderConfig['type'];
        var isFirst = orderConfig['isFirst'];
        var successFn = orderConfig['successFn'] || function() {};
        var failFn = orderConfig['failFn'] || function() {};
        var orders = me.orders[ordersType];

        if (isFirst && orders.showData.length) {
            //$rootScope.$broadcast(ordersType + '.update'); 
            setTimeout(function() {
                successFn();
            }, 1);
            //successFn();
            return;
        }


        $http({
            //url: '/products/'+orderType+'.json?v=' + new Date().getTime(),
            url: '/products/orders.json?v=' + new Date().getTime(),
            method: 'GET'
        }).success(function(res) {
            var order, i;
            if (res.status === 200) {
                for (i = 0; i < res.data.length; i++) {
                    order = res.data[i];
                    orders.srcData.push(me.resolveOrders(order));
                    me.orders.manager[order.id] = order;
                }
                $rootScope.$broadcast(ordersType + '.update');
                successFn();
            }
            orders.curPage++;
        }).error(function(err) {
            $rootScope.$broadcast(ordersType + '.error');
            failFn();
        })
    }
    this.getOrderById = function(orderid) {
        var me = this;
        if (me.orders.manager[orderid]) {
            $rootScope.$broadcast('order.get');
        } else {
            $http({
                //url: '/products/'+orderType+'.json?v=' + new Date().getTime(),
                url: '/products/orderdetail.json?v=' + new Date().getTime(),
                method: 'GET'
            }).success(function(res) {
                me.orders.manager[order.id] = res.data;
                $rootScope.$broadcast('order.get');
            }).error(function(err) {
                $rootScope.$broadcast('order.error');
            })
        }
    }
}])
