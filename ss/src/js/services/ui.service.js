services.service('uiSlideMenu', ['$http', '$rootScope', function($http, $rootScope) {
    this.toggle = function(){
    	this.show = !this.show;
    	$rootScope.$broadcast('slideMenu.toggle');
    }
}])