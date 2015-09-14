define(function(){

	soo.ui_home_tab = function(dom, ops){
		dom.addClass('active').siblings().removeClass('active')

		var index = dom.index()

		$('.ui-tabs-content').css({
			'-webkit-transform': 'translate3d(-'+index+'00%,0px,0px)'
		})
	}

	function init(){
		
		soo.render_page('home', {}, function(){

			soo.apidata('Product/ListOnShelfIds', {}, function(res){
		        soo.apidata('Product/ListProducts', {
		            ProductIds:res.Data.ProductIds
		        }, function(res){

		        })
		    })

		    soo.apidata('Product/ListToBeOnShelfIds', {}, function(res){
		        soo.apidata('Product/ListProducts', {
		            ProductIds:res.Data.ProductIds
		        }, function(res){

		        })
		    })

		})

	}

	return {
		init : init
	}

})