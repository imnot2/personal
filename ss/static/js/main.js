+(function($){

    if( !window.console ){
        window.console = {
            log: function(){}
        }
    }

    $.fn.serializeObject = function(){
        var o = {};
        var a = this.serializeArray();
        $.each(a, function() {
            if (o[this.name] !== undefined) {
                if (!o[this.name].push) {
                    o[this.name] = [o[this.name]];
                }
                o[this.name].push(this.value || '');
            } else {
                o[this.name] = this.value || '';
            }
        });
        return o;
    }



    FastClick.attach(document.body)






    /* 
     * soo
     * ====================================================
    */
    window.soo={
        apiurl: 'http://api.shangshi.com:11193/api/',
    };

    soo.bd = $('body')
    soo.is_login = false
    soo.user_token = ''

    soo.countdown = function(options){
        var defaults = {
            attr: 'endtime',
            preclass: 'cd-',
            type: 'day'
        }

        options = options ? $.extend({}, defaults, options) : defaults

        $(this).each(function(i, item){
            $(item).attr(options.attr) && timer( $(item) )
        })

        function timer(item){
            var endtime = eval('new Date(' + item.attr(options.attr).replace(/\d+(?=-[^-]+$)/, function (a) { return parseInt(a, 10) - 1; }).match(/\d+/g) + ')').getTime()
              , nowtime = new Date().getTime()
              , lag = (endtime - nowtime) / 1000

            if(lag > 0){
                var second = Math.floor(lag % 60)
                  , minite = Math.floor((lag / 60) % 60)
                  , hour   = 0
                  , day    = 0
                    
                switch(options.type){
                    case 'hour':
                        hour   = Math.floor((lag / 60) / 60)
                        break;
                    case 'day':
                        hour   = Math.floor((lag / 3600) % 24)
                        day    = Math.floor((lag / 3600) / 24)

                        sub(item, 'd', day)
                        break;
                }

                sub(item, 'h', hour)
                sub(item, 'm', minite)
                sub(item, 's', second)
            }else{
                item.html('活动已结束！')
            }

            setTimeout(function(){
                timer(item)
            }, 1000)
        }

        function sub(item, s, t) {
            item.find('.'+options.preclass+s).html(t)
        }

        function zero(time) {  
            return time < 10 ? time = '0' + time : time
        }
    }

    soo.number_format = function(number,fix,fh,jg){
        var fix = arguments[1] ? arguments[1] : 2 ;
        var fh = arguments[2] ? arguments[2] : ',' ;
        var jg = arguments[3] ? arguments[3] : 3 ;
        var str = '' ;
        number = number.toFixed(fix);
        zsw = number.split('.')[0];
        xsw = number.split('.')[1];
        zswarr = zsw.split('');
        for(var i=1;i<=zswarr.length;i++)
        {
          str = zswarr[zswarr.length-i] + str ;
          if(i%jg == 0)
          {
            str = fh+str;
          }
        }
        str = (zsw.length%jg==0) ? str.substr(1) : str;
        zsw = str+'.'+xsw;
        return zsw;
    }

    soo.check_mobile = function(str){
        return /^1\d{10}$/.test(str) ? true : false;
    }

    soo.check_email = function(str){
        return /^(\w-*\.*)+@(\w-?)+(\.\w{2,})+$/.test(str) ? true : false;
    }

    soo.check_name = function(str){
        return /^[\u4E00-\u9FA5A-Za-z0-9_]{6,20}$/.test(str) ? true : false;
    }

    soo.check_pass = function(str){
        return /^[a-zA-Z0-9_]{6,20}$/.test(str) ? true : false;
    }

    soo.tips = function(str){
        if( !str ) return false
        if( !$('.tips').length ){
            $('body').append('<div class="tips"></div>')
        }
        soo._tipstimer && clearTimeout(soo._tipstimer)
        $('.tips').html(str).animate({
            top: 0
        }, 200)
        soo._tipstimer = setTimeout(function(){
            $('.tips').animate({
                top: -30
            }, 200)
        }, 5000)
    }

    soo.loading = function(el, msg){
        if( !msg ){
            msg = '<img src="'+soo.uri+'/img/loading_line.gif">'
        }
        el.html('<div class="loading">'+msg+'</div>')
    }


    soo.is_page = function(name){
        return soo.bd.hasClass('page-'+name) ? true : false;
    }

    soo.body_class = function(str){
        soo.bd.attr('class', $.trim(str))
    }


    soo.dialog = function(options){

        soo.dialog_timer && clearTimeout(soo.dialog_timer)

        $('.ui-dialog, .ui-dialog-hd, .ui-dialog-ft').hide()

        if( options.title ){
            $('.ui-dialog-hd').show().find('h3').html( options.title )
        }

        $('.ui-dialog-bd').html( options.content || '' )

        if( options.confirm ){
            $('.ui-dialog-ft').css({display: '-webkit-box'})
            soo.dialog_confirm_fn = options.confirm
        }else{
            soo.dialog_timer = setTimeout(function(){
                soo.ui_dialog_close()
            }, 4000);
        }

        $('.ui-dialog').fadeIn()

    }

    soo.ui_dialog_confirm = function(){
        soo.ui_dialog_close()
        soo.dialog_confirm_fn && soo.dialog_confirm_fn()
    }

    soo.ui_dialog_close = function(){
        soo.dialog_timer && clearTimeout(soo.dialog_timer)
        $('.ui-dialog').hide()
    }


    soo.ui_page_back = function(){
        history.back()
    }



    soo.share_to = function(dom, to){
        to = to.split('|')[1]
        var url = ''
        switch(to){
            case 'qq':
                url = 'http://connect.qq.com/widget/shareqq/index.html?url='+soo.share.url+'&desc='+soo.share.desc+'&summary='+soo.share.title+'&site=zeshlife&pics='+soo.share.pic
                break;

            case 'weibo':
                url = 'http://service.weibo.com/share/share.php?title='+soo.share.title+'&url='+soo.share.url+'&source=bookmark&pic='+soo.share.pic
                break;

            case 'douban':
                url = 'http://www.douban.com/share/service?image='+soo.share.pic+'&href='+soo.share.url+'&name='+soo.share.title+'&text='+soo.share.desc
                break;
        }

        if( !dom.attr('target') ) dom.attr('href', url).attr('target', '_blank')
    }



    /* 
     * handlers
     * ============================================================================================================================================================
    */
    soo.share = {
        url: document.URL,
        pic: '',
        title: document.title || '',
        desc: $('meta[name="description"]').length ? $('meta[name="description"]').attr('content') : ''    
    }

    /*if( soo.is_page('item-store') ){
        soo.share.pic = $('#carousel-item-store img:first').attr('src')
    }
    else if( soo.is_page('item') ){
        soo.share.pic = $('#carousel-item img:first').attr('src')
    }
    else if( soo.is_page('item-stream') ){
        soo.share.pic = $('.page-item-stream img:first').attr('src')
    }

    if (soo.bd.hasClass('page-item') || soo.bd.hasClass('page-item-preview')) {
        $('#carousel-item').on('slide.bs.carousel', function (data) {
            $('.describe .describe-item:eq('+$(data.relatedTarget).index()+')').fadeIn().siblings().hide()
        })
    }*/


    soo.ui_sidemenu_show = function(dom, ops){
    	// soo.bd.addClass('ui-sidemenu-active')
    	$('.ui-sidemenu').css({
    		left: 0
    	})

    	// soo.bd.addClass('ui-overflow-hidden')
    }

    soo.ui_sidemenu_hide = function(dom, ops){
        // soo.bd.removeClass('ui-sidemenu-active')
        $('.ui-sidemenu').css({
            left: '-100%'
        })

        // soo.bd.removeClass('ui-overflow-hidden')
    }

    soo.ui_href = function(dom, ops){
        console.log( ops )
        soo.set_hash(ops)
    }

    soo.set_hash = function(str){
        location.hash = '!/'+str
    }

    soo.apidata = function(action, datas, success_fn, error_fn){
        datas.AccessToken = soo.user_token
        $.ajax({
            url: soo.apiurl + action,
            type: 'GET',
            dataType: 'jsonp',
            data: datas,
        })
        .success(function(res) {
            console.log(res)

            if( res.msg ){
                soo.tips( res.msg )
            }

            success_fn && success_fn(res)
        })
        .fail(function(res) {
            console.log( res )

            console.log("error");
            error_fn && error_fn(res)
        })
        .always(function(res) {
            // console.log("complete");
        });
        
    }

    
    soo.render_page_cache = {}
    soo.render_page = function(name, page_data, callback){
        if( soo.render_page_cache[name] ){

            $('#ui-wrapper').html( soo.render_page_cache[name] )
            $('#ui-wrapper').append( $('#tmpl_0').render(page_data) )

            callback && callback()

            return
        }
        
        $.ajax({
            url: 'tmpls/'+name+'.html',
            type: 'GET',
            dataType: 'html'/*,
            data: {},*/
        })
        .done(function(res) {

            res = '<script type="text/x-jsrender" id="tmpl_0">' + res.replace(/<!--======================================== (tmpl_[a-z0-9-_]+) ========================================-->/g, '</script><script type="text/x-jsrender" id="$1">') +'</script>'

            soo.render_page_cache[name] = res

            $('#ui-wrapper').html( res )
            $('#ui-wrapper').append( $('#tmpl_0').render(page_data) )

            callback && callback()
        })
        .fail(function(res) {
            console.log("error");
        })
        .always(function(res) {
            
        });
        
    }

    soo.render_page_module = function(id, page_data){
        $('#ui-wrapper .ui-header, #ui-wrapper .ui-container').remove()
        $('#ui-wrapper').append( $('#'+(id||'tmpl_0')).render(page_data) )
    }


    /* 
     * routes
     * ============================================================================================================================================================
    */
    var router = Router({

        'home': function(){

            /*if( $.inArray(pagetype, ['underway', 'coming', 'focus']) === -1 ){
                location.hash = 'home/underway'
            }*/

            soo.body_class('page-home')

            require(['home'], function(fn){
                fn.init()
            })
            
        },


        'item-:id': function(id){
            
            soo.body_class('page-item')

            require(['item'], function(fn){
                fn.init()
            })

        },
        'item-:id/comment': function(id){
            soo.body_class('page-item-comment')

            require(['item-comment'], function(fn){
                fn.init()
            })
        },


        'item-new': function(){
              
        },


        'store-:id': function(id){
            soo.body_class('page-store')

            require(['store'], function(fn){
                fn.init()
            })
        },


        'user/orders': function(){
            soo.body_class('page-user-orders')

            require(['user-buyer'], function(fn){
                fn.init()
            })
        },
        'user/sales': function(){
            soo.body_class('page-user-sales')

            require(['user-buyer'], function(fn){
                fn.init()
            })
        },

        'seller/orders': function(){
            soo.body_class('page-seller-orders')

            require(['user-seller'], function(fn){
                fn.init()
            })
        },
        'seller/store': function(){
            soo.body_class('page-seller-store')

            require(['user-seller'], function(fn){
                fn.init()
            })
        },
        'seller/items': function(){
            soo.body_class('page-seller-items')

            require(['user-seller'], function(fn){
                fn.init()
            })
        },
        'seller/items-down': function(){
            soo.body_class('page-seller-items page-seller-items-down')

            require(['user-seller'], function(fn){
                fn.init()
            })
        },

        'user/setting': function(){
            soo.body_class('page-user-setting')

            require(['user-setting'], function(fn){
                fn.init()
            })
        },

        'user/messages': function(){
            soo.body_class('page-user-messages')

            require(['user-message'], function(fn){
                fn.messages && fn.messages()
            })
        },
        'user/comments': function(){
            soo.body_class('page-user-comments')

            require(['user-message'], function(fn){
                fn.comments && fn.comments()
            })
        },


        'order-:id': function(id){
              
        },

        'order-:id/detail': function(id){
              
        },


        'sign-in': function(){

            soo.body_class('page-sign page-sign-in')

            require(['sign'], function(fn){
                fn.init()
            })

        },
        'sign-up': function(){
              
            soo.body_class('page-sign page-sign-up')

            require(['sign'], function(fn){
                fn.init()
            })

        },

        'sign-out': function(){
              
        },
        'resetpassword': function(){
              
            soo.body_class('page-sign page-resetpassword')

            require(['sign'], function(fn){
                fn.init()
            })

        },


        'favsays': function(){
            soo.body_class('page-favsays')

            soo.render_page('favsays', {}, function(){

            })
        },

        'contribute': function(){
            soo.body_class('page-contribute')

            soo.render_page('contribute', {}, function(){

            })
        },

        'contact': function(){
            soo.body_class('page-contact')

            soo.render_page('contact', {}, function(){

            })
        }


    });

    router.configure({
        on: function(){
            
        },
        notfound: function(){
            soo.set_hash('home')
        }
    })

    router.init();

    if( !location.hash ) soo.set_hash('home')




    /* 
     * 
     * ============================================================================================================================================================
    */

    


    /* click event
     * etap='name|{"asd":"1","rde":"3"}'
     * ============================================================================================================================================================
    */
    $(document).on('click', function(e){
        e = e || window.event;
        var target = e.target || e.srcElement
        var eta = $(target)

        if( eta.parent().attr('etap') ){
            eta = $(eta.parent()[0])
        }else if( eta.parent().parent().attr('etap') ){
            eta = $(eta.parent().parent()[0])
        }

        var params = eta.attr('etap')

        if( params ){
            var fname = params
            if( fname.indexOf('|')>0 ){
                fname = params.split('|')[0]
                params = params.split('|')[1]

                if( Object.prototype.toString.call(params) == '[object Object]' ){
                    params = $.parseJSON(params)
                }
            }else{
            	params = {}
            }
            params.name = fname

            if( eta.hasClass('disabled') ) return 
            fname = fname.replace(/-/g, '_')

            if( soo[fname] ){
                soo[fname](eta, params)
            }
        }
    })

    

    function is_name(str) {
        return /.{2,64}$/.test(str)
    }

    function is_url(str) {
        return /^((http|https)\:\/\/)([a-z0-9-]{1,}.)?[a-z0-9-]{2,}.([a-z0-9-]{1,}.)?[a-z0-9]{2,}$/.test(str)
    }

    function is_qq(str) {
        return /^[1-9]\d{4,13}$/.test(str)
    }

    function is_mail(str) {
        return /^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,4})$/.test(str)
    }

    function strToDate(str, fmt) { //author: meizz   
        if( !fmt ) fmt = 'yyyy-MM-dd hh:mm:ss'
        str = new Date(str*1000)
        var o = {
            "M+": str.getMonth() + 1, //月份   
            "d+": str.getDate(), //日   
            "h+": str.getHours(), //小时   
            "m+": str.getMinutes(), //分   
            "s+": str.getSeconds(), //秒   
            "q+": Math.floor((str.getMonth() + 3) / 3), //季度   
            "S": str.getMilliseconds() //毫秒   
        };
        if (/(y+)/.test(fmt))
            fmt = fmt.replace(RegExp.$1, (str.getFullYear() + "").substr(4 - RegExp.$1.length));
        for (var k in o)
            if (new RegExp("(" + k + ")").test(fmt))
                fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
        return fmt;
    }



})(jQuery)