ctrls.controller('indexCtrl', [
    '$scope',
    '$http',
    '$state',
    '$stateParams',
    '$rootScope',
    function ($scope, $http, $state, $stateParams, $rootScope) {
        // $http.get('http://www.ipinfo.io').success(function (res) {

        // })
        $scope.products = [{
            'name': '石守一生新疆和田玉蝉吊坠玉石一鸣惊人玉器挂件',
            'price': '150',
            'url': '/images/temp/1.jpg'
        }, {
            'name': '石守一生新疆和田玉蝉吊坠玉石一鸣惊人玉器挂件222',
            'price': '150',
            'url': '/images/temp/1.jpg'
        }, {
            'name': '石守一生新疆和田玉蝉吊坠玉石一鸣惊人玉器挂件333',
            'price': '150',
            'url': '/images/temp/1.jpg'
        }]
        $scope.wrapClass = 'page-home';
        $rootScope.menuShow = false;
        $scope.toggleMenuShow = function () {
            $rootScope.menuShow = !$rootScope.menuShow;
        }
    }
])