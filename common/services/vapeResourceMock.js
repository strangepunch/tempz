/** mock **/
(function(){
	"use strict";

	var app = angular
				.module("vapeResourceMock",
						["ngMockE2E"]);
	
	app.run(function ($httpBackend){
		//consider renaming this object to vapes so there is no collision when the app starts
		var products = [
			{"productId": 1,
			 "productName": "Pinnacle Pro", //compName
			 "price": 188.00,
			 "temps": ["WHITE" : "370 F","TURQUOISE" : "395 F","GREEN" : "420 F", "ORANGE" : "445", "PURPLE" : "470"],
			 "descriptionDetailed": "The Pinnacle quickly became one of the most popular portable vaporizers for first time users and vape veterans alike because of its easy to use functionality, superb portability, and excellent vapor quality. The creators, VaporBLUNT, have now taken this tiny tower of power and made vast improvements that are taking the Pinnacle to the next level.
VaporBLUNT's Pinnacle Pro vaporizer is still the same small size, measuring about 5 inches tall and less than an inch wide, making it a great fit in the hand, pocket, purse or bag. The Pinnacle Pro vaporizer even keeps the same 1 button design which turns the unit on, toggles between its temperature settings, and then turns the unit off.
What has changed with the upgraded Pinnacle, however, is that it now has 5 temperature settings, which is 3 more than the original version. These temperatures range from 370° to 470° F in 25° increments providing ultimate control over your personal vaporization settings.
The temperature setting is indicated using a color coding system displayed by the 5 LED lights on the front of the Pinnacle Pro. The first 4 temperatures are so that you can find the perfect temperature for your dry herbal blend, while the 5th and highest temperature is intended for oil and concentrate vaporization. That's right, the Pinnacle Pro has the ability to vaporize dry herbs and concentrates right out of the box by simply changing the included "bullet" in the chamber.
Another small, yet very efficient change is the Pro's new battery level indicator. By pressing the button just once the LED lights will light up to display how much battery level the Pinnacle has left. This takes all of the guess work out of when to recharge the battery, further assuring your vape is always ready when you are.
Any VaporBLUNT accessory, including the original Pinnacle's Micro Shower Tool, are all forward compatible so anything you already own will not go to waste. This pint size power house is an excellent choice as a first vaporizer or as an upgrade or addition to your current vaporizer collection. Reach the pinnacle of portable vaporization like a pro with VaporBLUNT's Pinnacle Pro vaporizer",
			 "descriptionAbbrev":  "The Pinnacle quickly became one of the most popular portable vaporizers for first time users and vape veterans alike.",
			 "tags": ["Terpene","Terpinoid","peppermint", "sedative", "memory"],
			 "imageUrl": "http://thevaporblunt.corecommerce.com/images/products/843.jpg"
			}			
		];
		//change this to the proper path
		var productUrl = "/api/products";

		$httpBackend.whenGET(productUrl).respond(products);

		var editingRegex = new RegExp(productUrl + "/[0-9][0-9]*", '');
		
		$httpBackend.whenGET(editingRegex).respond(function (method, url, data){
			var product = {"productId": 0};
			var parameters = url.split('/');
			var length = parameters.length;
			var id = parameters[length - 1];

			if (id > 0){
				for (var i = 0; i < products.length; i++){
					if(products[i].productId == id) {
						product = products[i];
						break;
					}
				};
			}
			return [200, product, {}];
		});

		$httpBackend.whenPOST(productUrl).respond(function (method, url, data){
			var product =  angular.fromJson(data);
			if (!product.productId){
				//new product Id
				product.productId = products[products.length - 1].productId + 1;
				products.push(product);
			}
			else{
				//update product
				for (var i = 0; i < products.length; i++) {
					if (products[i].productId == product.productId){
						products[i] = product;
						break;
					}
				};
			}
			return [200, product, {}];
		});

		//Pass through any requests for application files
		$httpBackend.whenGET(/app/).passThrough();




	})
}());