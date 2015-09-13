define(function(){

	soo.ui_home_tab_3 = function(dom, ops){
		
	}

	function init(){
		
		soo.render_page('user-buyer', {}, function(){

			if( soo.is_page('user-sales') ){
				$('.ui-user-navbar-nav li').eq(1).addClass('active').siblings().removeClass('active')
				$('.user-tabs-pane').eq(1).addClass('active').siblings('.user-tabs-pane').removeClass('active')
			}else{
				$('.ui-user-navbar-nav li').eq(0).addClass('active').siblings().removeClass('active')
			}

		})

	}

	return {
		init   : init
	}

})