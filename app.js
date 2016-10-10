(function () {
    'use strict';
    angular.module('ShoppingListCheckOff', [])
    .controller('ToBuyController', ToBuyController)
        .controller('AlreadyBoughtController', AlreadyBoughtController)
        .service('ShoppingListCheckOffService', ShoppingListCheckOffService);

    ToBuyController.$inject = ['ShoppingListCheckOffService'];
    function ToBuyController(ShoppingListCheckOffService) {
        var toBuyItem = this;

        toBuyItem.items = ShoppingListCheckOffService.getToBuyItem();

        toBuyItem.buyItem = function(indexOfItems){
            ShoppingListCheckOffService.buyItem(indexOfItems);
        };

        toBuyItem.empty = function(){
            return toBuyItem.items.length === 0;
        }
    };

    AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
    function AlreadyBoughtController(ShoppingListCheckOffService) {
        var boughtItems = this;

        boughtItems.items = ShoppingListCheckOffService.getBoughtItems();

        boughtItems.empty = function(){
            return boughtItems.items.length === 0;
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
        var boughtItems = [];

        service.buyItem = function (indexOfItems) {
            boughtItems.push(buyItems[indexOfItems]);
            buyItems.splice(indexOfItems,1);
        };
        service.getToBuyItem = function () {
            return buyItems;
        };
        service.getBoughtItems = function () {
            return boughtItems;
        };

    }

})();
