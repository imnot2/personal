dirAction.directive('topbar',function(){
    return {
        scope:{},
        restrict:'AE',
        templateUrl:'../../html/tpls/ui-wiget/topBar.tpl.html',
        replace:true,
        controllor:function($scope){
        	//$scope.addSideMenu = function(){}
        },
        link:function(scope,elment,attrs){
            
        }
    }
});