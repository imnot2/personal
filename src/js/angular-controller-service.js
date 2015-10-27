var app = angular.module('myApp', []);

app.service('Service', function($rootScope) {
    var me = this;
    this.obj = {
        id: "345",
        name: "teddy"
    }
    setTimeout(function() {

        me.obj.id = "6666";
        $rootScope.$broadcast('service.update');
        console.log(me);
    }, 2000);
    // return {
    //     id: "345",
    //     name: "teddy"
    // };

});

app.controller('SelectController', function($scope, Service) {
    $scope.service = Service;

    // $scope.$watch('service', function(newVal, oldVal) {
    //     $scope.service = Service;
    //     if(newVal !== oldVal) {
    //         alert('SelectController value changed!');
    //     }
    // }, true);
    $scope.$on('service.update', function(event) {
        $scope.service = Service;
        //$scope.$apply(); //注意，原文这里少了这一行
    });

    $scope.generate = function() {
        Service.id = "aa";
    };
});

app.controller('GraphController', function($scope, Service) {
    $scope.service = Service;
    $scope.$on('service.update', function(event) {
        $scope.service = Service;
        $scope.$apply(); //注意，原文这里少了这一行
    });
});
