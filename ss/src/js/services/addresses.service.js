services.service('addressService', [
    '$http',
    '$rootScope',
    function($http, $rootScope) {
        this.addresses = [{
            id: '11111',
            name: 'dingding',
            isDefault: true,
            mobile: 18699999999,
            postcode: 200000,
            detail: '西汉平原郡厌次县（今山东省德州市陵县 **街道 **路 **号'
        }, {
            id: '22222',
            name: 'biggie',
            isDefault: false,
            mobile: 18688888888,
            postcode: 200000,
            detail: '西汉平原郡厌次县（今山东省德州市陵县 **街道 **路 **号'
        }, {
            id: '33333',
            name: 'guigui',
            isDefault: false,
            mobile: 1867777777,
            postcode: 200000,
            detail: '西汉平原郡厌次县（今山东省德州市陵县 **街道 **路 **号'
        }]
        // this.addresses = {
        //     "11111": {
        //         id: '11111',
        //         name: 'dingding',
        //         isDefault: true,
        //         mobile: 18699999999,
        //         postcode: 200000,
        //         detail: '西汉平原郡厌次县（今山东省德州市陵县 **街道 **路 **号'
        //     },
        //     '22222': {
        //         id: '22222',
        //         name: 'biggie',
        //         isDefault: false,
        //         mobile: 18688888888,
        //         postcode: 200000,
        //         detail: '西汉平原郡厌次县（今山东省德州市陵县 **街道 **路 **号'
        //     },
        //     '33333': {
        //         id: '33333',
        //         name: 'guigui',
        //         isDefault: false,
        //         mobile: 1867777777,
        //         postcode: 200000,
        //         detail: '西汉平原郡厌次县（今山东省德州市陵县 **街道 **路 **号'
        //     }
        // }

        this.getAddresses = function() {};
        this.saveAddress = function(address) {
            console.log("add");
            console.log(address);
        };
        this.deleteAddress = function(id) {
            console.log("detele");
            console.log(id);
        };
        this.editAddress = function(address) {
            console.log("edit");
            console.log(address);
            // this.editAddress = this.addresses[id];
            // $rootScope.$broadcast('editAddress.update');
        };
    }
])
