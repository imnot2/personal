directives.directive('mobile', function() {
    return {
        restrict: 'E',
        template: [
            '<div class="ui-form-item">',
            '    <input ng-model="user.mobile" type="text">',
            '    <span class="icons-info"><i class="fa">&#xe60a;</i></span>',
            '</div>'
        ].join(''),
        replace: true,
        link: function(scope, element, attrs) {
            $(element).find('input[type]').attr('placeholder', attrs.placeholder);
        }
    }
}).directive('password', function() {
    return {
        restrict: 'E',
        template: [
            '<div class="ui-form-item">',
            '    <input type="password" ng-model="user.password">',
            '    <span class="icons-info"><i class="fa">&#xe619;</i></span>',
            '</div>'
        ].join(''),
        replace: true,
        link: function(scope, element, attrs) {
            $(element).find('input[type]').attr('placeholder', attrs.placeholder);
        }
    }
}).directive('repassword', function() {
    return {
        restrict: 'E',
        template: [
            '<div class="ui-form-item">',
            '    <input type="password" ng-model="user.repassword">',
            '    <span class="icons-info"><i class="fa">&#xe619;</i></span>',
            '</div>'
        ].join(''),
        replace: true,
        link: function(scope, element, attrs) {
            $(element).find('input[type]').attr('placeholder', attrs.placeholder);
        }
    }
}).directive('username', function() {
    return {
        restrict: 'E',
        template: [
            '<div class="ui-form-item" ng-model="user.username">',
            '    <input type="text">',
            '    <span class="icons-info"><i class="fa">&#xe61b;</i></span>',
            '</div>'
        ].join(''),
        replace: true,
        link: function(scope, element, attrs) {
            $(element).find('input[type]').attr('placeholder', attrs.placeholder);
        }
    }
}).directive('checkcode', ['$stateParams', 'codeService', function($stateParams, codeService) {
    return {
        restrict: 'E',
        template: [
            '<div class="ui-form-item ui-form-item-r">',
            '    <input type="number" ng-model="user.checkcode">',
            '    <!-- 若按钮不可点击则添加 disabled 类 -->',
            '    <button type="button" ng-class="{disabled:disable}" class="btn btn-primary"><span ng-bind="tips"></span></button>',
            '    <span class="icons-info"><i class="fa">&#xe61a;</i></span>',
            '</div>'
        ].join(''),
        replace: true,
        link: function(scope, element, attrs) {
            var m = codeService[codeService.curMobile] || {};
            var timer;
            var countdown = m.curCountDown || 60;
            $(element).find('input[type]').attr('placeholder', attrs.placeholder);
            scope.tips = '60秒';
            scope.disable = true;
            timer = setInterval(function() {
                if (countdown <= 1) {
                    clearInterval(timer);
                    scope.tips = '重新发送';
                    scope.disable = false;
                } else {
                    countdown--;
                    scope.tips = countdown + '秒';
                    scope.disable = true;
                }
                scope.$apply();
            }, 1000);
        }
    }
}])
