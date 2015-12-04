services.service('uiToggleService', ['$rootScope', function($rootScope) {
    var me = this;

    function UiToggle(name, defaultShow) {
        if (me[this.name]) return me[this.name];
        me[this.name] = this;
        this.name = name;
        this.show = defaultShow;
    }
    UiToggle.prototype.toggle = function() {
        this.show = !this.show;
        $rootScope.$broadcast(this.name + '.toggle');
    }
    this.getUI = function(name) {
        return new UiToggle(name);
    }
}])
