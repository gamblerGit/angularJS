(function () {
'use strict';

angular.module('ShoppingListCheckOff', [])
.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtController', AlreadyBoughtController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService)


ToBuyController.$inject = ['ShoppingListCheckOffService'];
function ToBuyController(ShoppingListCheckOffService) {
  var list = this;

  list.toBuyList = ShoppingListCheckOffService.getToBuyList();

  list.buy = function (itemIndex) {
    ShoppingListCheckOffService.buy(itemIndex);
  };
}

AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtController(ShoppingListCheckOffService) {
  var list = this;

  list.bouhtList = ShoppingListCheckOffService.getBoughtList();
}

//service
function ShoppingListCheckOffService() {
  var service = this;

  // List of shopping items to buy
  var itemsToBuy = [
   {
    name: 'bread',
    quantity: 1
   },
   {
     name: 'milk',
     quantity: 2
   },
   {
     name: 'cheese',
     quantity: 1
   },
   {
     name: 'wine',
     quantity: 10
   },
   {
     name: 'cookies',
     quantity: 100
   },
  ];

  // List of shopping items bought
  var itemsBought =[];

  service.getToBuyList = function () {
    return itemsToBuy;
  };

  service.getBoughtList = function () {
    return itemsBought;
  };

  //buy function (remove item from toBuyList and add it to boughtList)
  service.buy = function(itemIndex){

    var item = {
      name: itemsToBuy[itemIndex].name,
      quantity: itemsToBuy[itemIndex].quantity
    };

    itemsToBuy.splice(itemIndex,1);
    itemsBought.push(item);
  }
}

})();
