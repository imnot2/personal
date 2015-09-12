define(function(){

	soo.ui_home_tab_3 = function(dom, ops){
		
	}

	function init(){
		
		soo.render_page('user-seller', {}, function(){

			if( soo.is_page('seller-orders') ){
				$('.ui-user-navbar-nav li').eq(0).addClass('active').siblings().removeClass('active')
				$('.user-tabs-pane').eq(0).addClass('active').siblings('.user-tabs-pane').removeClass('active')
				
			}else if( soo.is_page('seller-store') ){
				$('.ui-user-navbar-nav li').eq(1).addClass('active').siblings().removeClass('active')
				$('.user-tabs-pane').eq(1).addClass('active').siblings('.user-tabs-pane').removeClass('active')

			}else{
				$('.ui-user-navbar-nav li').eq(2).addClass('active').siblings().removeClass('active')
				$('.user-tabs-pane').eq(2).addClass('active').siblings('.user-tabs-pane').removeClass('active')

				if( soo.is_page('seller-items-down') ){
					$('.ui-mini-tabs li').eq(1).addClass('active').siblings().removeClass('active')
					$('.ui-mini-tab-panel .ui-order-panel').eq(1).addClass('active').siblings().removeClass('active')
				}else{
					$('.ui-mini-tabs li').eq(0).addClass('active').siblings().removeClass('active')
					$('.ui-mini-tab-panel .ui-order-panel').eq(0).addClass('active').siblings().removeClass('active')
				}
			}

		})

	}

	return {
		init   : init
	}

})