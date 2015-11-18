services.service('addressService', [
    '$http',
    function($http) {
        this.addresses = [{
        	id:0000,
        	name:'dingding',
        	isDefault:true,
        	mobile:18699999999,
        	detail:'西汉平原郡厌次县（今山东省德州市陵县 **街道 **路 **号'
        },{
        	id:1111,
        	name:'biggie',
        	isDefault:false,
        	mobile:18688888888,
        	detail:'西汉平原郡厌次县（今山东省德州市陵县 **街道 **路 **号'
        },{
        	id:2222,
        	name:'guigui',
        	isDefault:true,
        	mobile:1867777777,
        	detail:'西汉平原郡厌次县（今山东省德州市陵县 **街道 **路 **号'
        }];
        this.getAddresses = function() {}
    }
])
