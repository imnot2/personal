angular.module('directives.actions.goback', goBack);

goBack.$inject = ['$scope'];

function goBack($scope) {
    return {
        templete: '<a href="javascript:;" class="icons-menu"><i class="fa">&#xe600;</i></a>',
        replace: true,
        controller: function () {

        }
    }
}