directives.directive('slidemenuuser',['user',function(user){
    var token = user.getToken();
    var templateStr;
    if(!token){
        templateStr = [
            '<div class="ui-sidemenu-user">',
            '   <div>',
            '       <i class="fa">&#xe60d;</i>',
            '       <a  ui-sref="()"><img ng-src="/images/temp/2.jpg"></a>',
            '       <i class="fa">&#xe60c;</i>',
            '   </div>',
            '   <p><span>'+ user.userName +'</span></p>',
            '</div>'
        ].join('');
    }else{
        templateStr = [
            '<div class="ui-sidemenu-user">',
            '   <div>',
            '       <a href="javascript:;"><img ng-src="/images/icons/thumbnail.png"></a>',
            '   </div>',
            '   <p><a ui-sref="login()">登录</a><a ui-sref="register()">注册</a></p>',
            '</div>'
        ].join('');
    }
    return {
        restrict:'AE',
        template :templateStr,
        replace:true
    }
}])