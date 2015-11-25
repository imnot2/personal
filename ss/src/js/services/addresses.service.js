services.service('addressService', [
    '$http',
    function($http) {
        this.addresses = [{
            id: 10000,
            name: 'dingding',
            isDefault: true,
            mobile: 18699999999,
            postcode: 200000,
            detail: '西汉平原郡厌次县（今山东省德州市陵县 **街道 **路 **号'
        }, {
            id: 1111,
            name: 'biggie',
            isDefault: false,
            mobile: 18688888888,
            postcode: 200000,
            detail: '西汉平原郡厌次县（今山东省德州市陵县 **街道 **路 **号'
        }, {
            id: 2222,
            name: 'guigui',
            isDefault: false,
            mobile: 1867777777,
            postcode: 200000,
            detail: '西汉平原郡厌次县（今山东省德州市陵县 **街道 **路 **号'
        }];
        this.getAddresses = function() {};
        this.saveAddress = function() {};
        this.deleteAddress = function(id) {
            console.log(id);
        }; 
        this.editAddress = function(id) {
            console.log(id);
        };
    }
])
