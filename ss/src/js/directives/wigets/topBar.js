directives.directive('wigets.topBar',['$scope',function($scope){
    return {
        scope:{},
        restrict:'AE',
        templeteUrl:'../../html/tpls/ui-wiget/topBar.tpl.html',
        controllor:function($scope){
        	$scope.addSideMenu = function(){}
        },
        link:function(scope,elment,attrs){
            
        }
    }
}]);