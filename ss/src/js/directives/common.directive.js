directives.directive('touser', ['$state', 'user', function($state, user) {
    return {
        restrict: 'AE',
        link: function(scope, element, attrs) {
            var token = user.getToken();
            var userInfo;
            touch.on(element, 'tap', function() {
                if (!token) {
                    $state.go('login')
                } else {
                    userInfo = user.getUserInfo();
                    $state.go('user', {
                        'identity': userInfo.identity,
                        'page': 1
                    })
                }
            })
        }
    }
}]).directive('login', ['$state', function($state) {
    return {
        restrict: 'AE',
        link: function(scope, element, attrs) {
            touch.on(element, 'tap', function() {
                $state.go('login', {
                    'ret': window.location.href
                });
            })
        }
    }
}]).directive('loginrequest', ['$http', '$state', 'user', function($http, $state, user) {
    return {
        restrict: 'AE',
        link: function(scope, element, attrs) {
            touch.on(element, 'tap', function() {
                user.login();
            })
        }
    }
}]).directive('register', ['$state', function($state) {
    return {
        restrict: 'AE',
        link: function(scope, element, attrs) {
            touch.on(element, 'tap', function() {
                $state.go('register', {
                    page: 'UserAndPassword'
                })
            })
        }
    }
}]).directive('registerverifymobile', ['$state', function($state) {
    return {
        restrict: 'AE',
        link: function(scope, element, attrs) {
            touch.on(element, 'tap', function() {
                $state.go('register', {
                    page: 'VerifyMobile'
                })
            })
        }
    }
}]).directive('setting', ['$state', function($state) {
    return {
        restrict: 'AE',
        link: function(scope, element, attrs) {
            touch.on(element, 'tap', function() {
                $state.go('setting', {
                    page: 1
                })
            })
        }
    }
}]).directive('forgetpassword', ['$state', function($state) {
    return {
        restrict: 'AE',
        link: function(scope, element, attrs) {
            touch.on(element, 'tap', function() {
                $state.go('forgetpassword', {
                    page: 'Mobile'
                })
            })
        }
    }
}]).directive('forgetpasswordsendcode', ['$state', function($state) {
    return {
        restrict: 'AE',
        link: function(scope, element, attrs) {
            touch.on(element, 'tap', function() {
                $state.go('forgetpassword', {
                    page: 'SendCode'
                })
            })
        }
    }
}]).directive('back', function() {
    return {
        restrict: 'AE',
        link: function(scope, element, attrs) {
            touch.on(element, 'tap', function() {
                window.history.back()
            })
        }
    }
}).directive('slidemenutoggle', ['uiToggleService', function(uiToggleService) {
    return {
        restrict: 'AE',
        link: function(scope, element, attrs) {
            touch.on(element, 'tap', function() {
                var slidemenu = uiToggleService.getUI('slidemenu');
                slidemenu.show = false;
                slidemenu.toggle();
            })
        }
    }
}]).directive('slidemenupanel', ['uiToggleService', function(uiToggleService) {
    return {
        restrict: 'AE',
        link: function(scope, element, attrs) {
            var slidemenu = uiToggleService.getUI('slidemenu');
            scope.$on('slidemenu.toggle', function() {
                element.removeClass(slidemenu.show ? 'slideOutLeft' : 'slideInLeft').addClass(slidemenu.show ? 'slideInLeft' : 'slideOutLeft')
            })
            touch.on($(element).find('.ui-sidemenu-mask'), 'tap', function() {
                slidemenu.toggle();
            });
            touch.on($(element).find('.ui-sidemenu-main'), 'swipeleft', function() {
                slidemenu.toggle();
            })
        }
    }
}]).directive('countdown', function() {
    var s = 1000;
    var m = s * 60;
    var h = m * 60;

    function parseHtml(timestamp) {
        var time = timestamp;
        //这里看需不需要获取服务器时间，因为客户端时间不是很准确。
        var curTime = new Date().getTime();
        var left = time - curTime;

        var hours = Math.floor(left / h);
        var minute = Math.floor((left - hours * h) / m);
        //var secound = Math.floor((left - hours * h - minute * m) / s);

        var timeStr = [hours, minute].join(':');
        var html = [],
            i, str;

        for (i = 0; i < timeStr.length; i++) {
            str = timeStr[i];
            str !== ':' ? html.push('<i>' + str + '</i>') : html.push(str);
        }

        return html.join('');
    }
    return {
        restrict: 'AE',
        template: '<span></span>',
        replace: true,
        link: function(scope, element, attrs) {
            $(element).html(parseHtml(attrs.timestamp));
            setInterval(function() {
                $(element).html(parseHtml(attrs.timestamp));
            }, m)
        }
    }
}).directive('modifyaddress', ['addressService', function(addressService) {
    return {
        restrict: 'AE',
        link: function(scope, element, attrs) {
            var target = $(element).find('.ui-handle');
            target.addClass('slideAnimated');
            touch.on(element, "swiperight", function(ev) {
                target.removeClass('slideOutRight').addClass('slideInRight');
            })
            touch.on(element, "swipeleft", function(ev) {
                target.removeClass('slideInRight').addClass('slideOutRight');
            })
        }
    }
}]).directive('saveaddress', ['addressService', function(addressService) {
    return {
        restrict: 'AE',
        scope: {
            root: '='
        },
        link: function(scope, element, attrs) {
            touch.on(element, 'tap', function() {
                scope.root.saveAddress(scope.root.newAddress);
            })
        }
    }
}]).directive('addaddress', ['addressService', function(addressService) {
    return {
        restrict: 'AE',
        scope: {
            root: '='
        },
        link: function(scope, element, attrs) {
            touch.on(element, 'tap', function() {
                scope.root.addAddress();
            })
        }
    }
}]).directive('deleteaddress', ['addressService', function(addressService) {
    return {
        restrict: 'AE',
        scope: {
            root: '=',
            address: '='
        },
        link: function(scope, element, attrs) {
            touch.on(element, 'tap', function() {
                scope.root.deleteAddress(scope.address);
                //addressService.deleteAddress($(element).parents('.ui-info-panel').attr('addressid'));
            })
        }
    }
}]).directive('editaddress', ['addressService', function(addressService) {
    return {
        restrict: 'AE',
        scope: {
            root: '=',
            address: '='
        },
        link: function(scope, element, attrs) {
            console.log(scope);
            touch.on(element, 'tap', function() {
                scope.root.editAddress(scope.address);
                //addressService.editAddress($(element).parents('.ui-info-panel').attr('addressid'));
            })
        }
    }
}])
