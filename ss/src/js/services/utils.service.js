services.service('utils', [
    '$http',
    '$state',
    '$stateParams',
    function($http, $state, $stateParams) {
        this.bindScope = function(func, scope) {
            if (Object.prototype.toString.call(func) === '[object String]') {
                func = scope[func];
            }
            if (Object.prototype.toString.call(func) !== '[object Function]') {
                throw 'Error "util.bindScope()": "func" is null';
            }
            var xargs = arguments.length > 2 ? [].slice.call(arguments, 2) : null;
            return function() {
                var fn = '[object String]' == Object.prototype.toString.call(func) ? scope[func] : func,
                    args = (xargs) ? xargs.concat([].slice.call(arguments, 0)) : arguments;
                return fn.apply(scope || fn, args);
            };
        }
        this.parseUrl = function(hash,keyArr){
            var hashArr = hash || window.location.hash.substring(2).split('/');
            var i;
            var parseObj = {};
            for(i = 0; i< keyArr.length; i++){
                parseObj[keyArr[i]] = hashArr[i] || '';
            }
            return parseObj;
        }
    }
])
