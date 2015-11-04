var app = angular.module('myApp', []);

app.service('Service', function($rootScope) {
    var me = this;
    this.obj = [{
            id: "345",
            name: "teddy"
        }, {
            id: "346",
            name: "dddd"
        }]
        // setTimeout(function() {

    //     me.obj.id = "6666";
    //     $rootScope.$broadcast('service.update');
    //     console.log(me);
    // }, 2000);
    // return {
    //     id: "345",
    //     name: "teddy"
    // };

});

app.controller('SelectController', function($scope, $rootScope, Service) {
    $scope.service = Service.obj;

    // $scope.$watch('service', function(newVal, oldVal) {
    //     $scope.service = Service;
    //     if(newVal !== oldVal) {
    //         alert('SelectController value changed!');
    //     }
    // }, true);
    // $scope.$on('service.update', function(event) {
    //     $scope.service = Service;
    //     //$scope.$apply(); //注意，原文这里少了这一行
    // });

    $scope.generate = function() {
        //ser[0].id = 789;
        Service.obj = [{
            id: "789",
            name: "fff"
        }, {
            id: "888",
            name: "ggg"
        }];
        $scope.$on('service.update', function(event) {
            $scope.service = Service.obj;
            //$scope.$apply(); //注意，原文这里少了这一行
        });
        
        $rootScope.$broadcast('service.update');
        //$scope.service = Service.obj;
        // if($scope.$root.$$phase != '$apply' && $scope.$root.$$phase != '$digest') {
        //     $scope.$digest();
        // }
        //$scope.service = Service.obj.slice(0,1);
    };
});

app.controller('GraphController', function($scope, Service) {
    $scope.service = Service.obj;
    $scope.$on('service.update', function(event) {
        $scope.service = Service.obj;
        //$scope.$apply(); //注意，原文这里少了这一行
    });

    // $scope.$on('service.update', function(event) {
    //     $scope.service = Service;
    //     $scope.$apply(); //注意，原文这里少了这一行
    // });
});
