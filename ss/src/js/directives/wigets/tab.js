dirAction.directive('tab',function(){
	return {
		restrict:'AE',
		link:function(scope,element,attrs){
			$(element).find('li').on('click',function(e){
				$(this).addClass('active').siblings().removeClass('active');
				$(element).siblings('section.ui-container').find('div.ui-tabs-pane').eq($(this).index()).addClass('active').siblings().removeClass('active');
			})
		}
	}
})