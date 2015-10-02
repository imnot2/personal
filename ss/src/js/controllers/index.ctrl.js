ctrls.controller('indexCtrl', ['$scope', '$http', '$state', '$stateParams',
    function ($scope, $http, $state, $stateParams) {
        // $http.get('http://www.ipinfo.io').success(function (res) {

        // })
        $scope.products = [{
            'name': '石守一生新疆和田玉蝉吊坠玉石一鸣惊人玉器挂件',
            'price': '150',
            'url':'/images/temp/1.jpg'
        }, {
            'name': '石守一生新疆和田玉蝉吊坠玉石一鸣惊人玉器挂件222',
            'price': '150',
            'url':'/images/temp/1.jpg'
        }, {
            'name': '石守一生新疆和田玉蝉吊坠玉石一鸣惊人玉器挂件333',
            'price': '150',
            'url':'/images/temp/1.jpg'
        }]
    }
]).controller('headerCtrl', ['$scope',
    function ($scope) {
        
    }
]);