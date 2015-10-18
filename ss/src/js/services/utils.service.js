services.factory('utils', [
    '$http',
    '$state',
    '$stateParams',
    function($http, $state, $stateParams) {
        return {
            open: function(url, params) {
                $stateParams.ret = params.ret;
                $state.go(url);
                console.log($stateParams);
            },
            redirect: function(url) {
                //$state.go('')
                location.href = url;
            }
        }
    }
])
