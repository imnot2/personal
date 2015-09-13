define(function(){

	var msg = {
		1000: '请输入正确的手机号',
		1011: '用户名或密码错误',
		1022: '手机号码已被注册，请更换手机号码',
		1033: '两次输入的密码不相同',
		1044: '只能使用6-20个字符，包括中英文、数字和下划线',
		1045: '只能使用6-20个字符，包括英文、数字和下划线',
		1055: '请输入用户名',
		1066: '用户名已被注册，请更换',
		1077: '验证码输入有误',
		1088: '注册成功',
		1099: '密码重置成功'
	}

	var _signup_tel_code = 0,
		_signup_data


	soo.ui_signin = function(dom, ops){
		var form = $('#'+dom.data('form'))
		var fdata = form.serializeObject()
		
		if( !$.trim(fdata.user_name) ){
			soo.dialog({
				content: msg[1000]
			})
			return
		}

		if( !soo.check_pass($.trim(fdata.pass)) ){
			soo.dialog({
				content: msg[1045]
			})
			return
		}

		/*soo.apidata('User/Login', {
			Name: $.trim(fdata.user_name),
			Password: fdata.pass
		}, function(res){
	        
	    })*/

	}

	soo.ui_signup_back = function(dom, ops){
		soo.render_page_module()
	}

	soo.ui_signup_start = function(dom, ops){
		var form = $('#'+dom.data('form'))
		var fdata = form.serializeObject()
		
		if( !soo.check_mobile($.trim(fdata.tel)) ){
			soo.dialog({
				content: msg[1000]
			})
			return
		}

		if( !soo.check_pass($.trim(fdata.pass)) || !soo.check_pass($.trim(fdata.pass_2)) ){
			soo.dialog({
				content: msg[1045]
			})
			return
		}

		if( $.trim(fdata.pass) !== $.trim(fdata.pass_2) ){
			soo.dialog({
				content: msg[1033]
			})
			return
		}

		
		soo.apidata('User/SendRegisterValidateCode', {
			Mobile: $.trim(fdata.tel)
		}, function(res){

			soo.render_page_module('tmpl_sign_up_end')

			_signup_data = fdata

	        _signup_tel_code = res.code
	    })

	}

	soo.ui_signup = function(dom, ops){
		var form = $('#'+dom.data('form'))
		var fdata = form.serializeObject()
		
		if( !soo.check_name($.trim(fdata.user_name)) ){
			soo.dialog({
				content: msg[1044]
			})
			return
		}

		/*soo.apidata('User/Register', {
			Mobile: $.trim(fdata.tel)
		}, function(res){
	        
	    })*/

	}

	function init(){

		if( soo.is_page('sign-in') ){

			soo.render_page('sign-in', {}, function(){

			})

		}

		if( soo.is_page('sign-up') ){

			soo.render_page('sign-up', {}, function(){

			})

		}

		if( soo.is_page('resetpassword') ){

			soo.render_page('sign-resetpassword', {}, function(){

			})

		}


	}

	return {
		init : init
	}

})