(function () {
'use strict';

angular.module('ShoppingListCheckOff', [])
.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtController', AlreadyBoughtController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService);

ToBuyController.$inject = ['ShoppingListCheckOffService'];
function ToBuyController(ShoppingListCheckOffService) {
  var ctrlBuy = this;
  ctrlBuy.buyItems = ShoppingListCheckOffService.getBuyItems();
  ctrlBuy.checkItem = function (itemIndex) {
    ShoppingListCheckOffService.checkBuyItem(itemIndex);
  }
}

AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtController(ShoppingListCheckOffService) {
  var ctrlBought = this;
  ctrlBought.boughtItems = ShoppingListCheckOffService.getBoughtItems();
}

function ShoppingListCheckOffService() {
  var service = this;
  
  // list of items to buy
  var buyItems = [{name : 'Mangoes', quantity : '4'},{name : 'Bananas', quantity : '6'},{name : 'Oranges', quantity : '2'},{name : 'Watermelons', quantity : '2'},{name : 'Grapes', quantity : '3'}];
  
  // list of bought items
  var boughtItems = [];
  
  // get buy-items list
  service.getBuyItems = function () {
    return buyItems;
  };
  
  // get bought-items list
  service.getBoughtItems = function () {
    return boughtItems;
  };
  
  // get buy-items list
  service.checkBuyItem = function (itemIndex) {
    // add item to bought-list
    boughtItems.push(buyItems[itemIndex]);
	
	// remove item from buy-list
	buyItems.splice(itemIndex, 1);
  };
}

})();
