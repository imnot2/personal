directives.directive('login', ['$state', function($state) {
    return {
        restrict: 'AE',
        link: function(scope, element, attrs) {
            touch.on(element, 'tap', function() {
                $state.go('login');
            })
        }
    }
}]).directive('register', ['$state', function($state) {
    return {
        restrict: 'AE',
        link: function(scope, element, attrs) {
            touch.on(element, 'tap', function() {
                $state.go('register', {
                    page: 1
                })
            })
        }
    }
}]).directive('back', function() {
    return {
        restrict: 'AE',
        link: function(scope, element, attrs) {
            touch.on(element, 'tap', function() {
                window.history.back()
            })
        }
    }
}).directive('forgetpassword', ['$state', function($state) {
    return {
        restrict: 'AE',
        link: function(scope, element, attrs) {
            touch.on(element, 'tap', function() {
                $state.go('forgetpassword', {
                    page: 1
                })
            })
        }
    }
}]).directive('countdown', function() {
    var s = 1000;
    var m = s * 60;
    var h = m * 60;

    function parseHtml(timestamp) {
        var time = timestamp;
        //这里看需不需要获取服务器时间，因为客户端时间不是很准确。
        var curTime = new Date().getTime();
        var left = time - curTime;

        var hours = Math.floor(left / h);
        var minute = Math.floor((left - hours * h) / m);
        //var secound = Math.floor((left - hours * h - minute * m) / s);

        var timeStr = [hours, minute].join(':');
        var html = [],
            i, str;

        for (i = 0; i < timeStr.length; i++) {
            str = timeStr[i];
            str !== ':' ? html.push('<i>' + str + '</i>') : html.push(str);
        }

        return html.join('');
    }
    return {
        restrict: 'AE',
        template: '<span></span>',
        replace: true,
        link: function(scope, element, attrs) {
            $(element).html(parseHtml(attrs.timestamp));
            setInterval(function() {
                $(element).html(parseHtml(attrs.timestamp));
            }, m)
        }
    }
}).directive('saveaddress', ['addressService', function(addressService) {
    return {
        restrict: 'AE',
        scope:{
            root:'='
        },
        link: function(scope, element, attrs) {
            touch.on(element, 'tap', function() {
                scope.root.saveAddress(scope.root.newAddress);
            })
        }
    }
}]).directive('deleteaddress', ['addressService', function(addressService) {
    return {
        restrict: 'AE',
        scope: {
            root:'=',
            address: '='
        },
        link: function(scope, element, attrs) {
            touch.on(element, 'tap', function() {
                scope.root.deleteAddress(scope.address);
                //addressService.deleteAddress($(element).parents('.ui-info-panel').attr('addressid'));
            })
        }
    }
}]).directive('editaddress', ['addressService', function(addressService) {
    return {
        restrict: 'AE',
        scope: {
            root:'=',
            address: '='
        },
        link: function(scope, element, attrs) {
            console.log(scope);
            touch.on(element, 'tap', function() {
                scope.root.editAddress(scope.address);
                //addressService.editAddress($(element).parents('.ui-info-panel').attr('addressid'));
            })
        }
    }
}])
