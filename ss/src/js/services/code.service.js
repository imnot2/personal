services.factory('codeService', ['$http', function($http) {
    return {
        add: function(mobile) {
            var me = this;
            var m = this[mobile];
            var timerFn;
            if (!m) {
                this.curMobile = mobile;
                this[mobile] = {
                    curCountDown: 60,
                    timer: null,
                    resetTimer: function() {
                        timerFn();
                    }
                };
                timerFn = function() {
                    return setInterval(function() {
                        if (me[mobile].curCountDown <= 0) {
                            clearInterval(me[mobile].timer)
                        } else {
                            me[mobile].curCountDown -= 1;
                        }
                    }, 1000);
                }
                this[mobile].timer = timerFn();
            } else {
                me[mobile].resetTimer();
            }
        }
    }
}])
