directives.directive('login', ['$scope', function () {
    return {
        restrict: 'AE',
        link: function (scope, element, attrs) {
            $(element).on('click',function(){

            })
        }
    }
}]).directive('register', ['$scope', function () {
    return {
        restrict: 'AE',
        link: function (scope, element, attrs) {

        }
    }
}]).directive('goback', ['$scope', function () {
    return {
        restrict: 'AE',
        link: function (scope, element, attrs) {

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
})