(function () {
    'use strict';
    angular.module('ShoppingListCheckOff', [])
    .controller('ToBuyController', ToBuyController)
        .controller('AlreadyBoughtController', AlreadyBoughtController)
        .service('ShoppingListCheckOffService', ShoppingListCheckOffService);

    ToBuyController.$inject = ['ShoppingListCheckOffService'];
    function ToBuyController(ShoppingListCheckOffService) {
        var toBuyItem = this;

        buyList.items = ShoppingListCheckOffService.getToBuyItem();

        buyList.buyItem = function(indexOfItems){
            ShoppingListCheckOffService.buyItem(indexOfItems);
        };

        buyList.empty = function(){
            return buyList.items.length === 0;
        }
    };

    AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
    function AlreadyBoughtController(ShoppingListCheckOffService) {
        var boughtList = this;

        boughtList.items = ShoppingListCheckOffService.getBoughtItems();

        boughtList.empty = function(){
            return boughtList.items.length === 0;
        }
    };

    function ShoppingListCheckOffService() {
        var service = this;

        var buyItems = [ {
                name: "Meat",
                quantity: 5,
            },{
                name: "Bacon",
                quantity: 8,
            },{
                name: "Salad",
                quantity: 3,
            },{
                name: "Ribs",
                quantity: 9,
            },{
                name: "Eggs",
                quantity: 6,
            },

        ];
        var boughtList = [];

        service.buyItem = function (indexOfItems) {
            boughtList.push(buyItems[indexOfItems]);
            buyItems.splice(indexOfItems,1);
        };
        service.getToBuyItem = function () {
            return buyItems;
        };
        service.getBoughtItems = function () {
            return boughtList;
        };

    }

})();
