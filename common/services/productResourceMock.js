/** mock **/
(function(){
	"use strict";

	var app = angular
				.module("productResourceMock",
						["ngMockE2E"]);
	
	app.run(function ($httpBackend){
		var temperatures = [126, 246, 313, 315, 334, 351, 356, 365, 388, 428];

		var modes = [1, 2, 3, 'Hi', 'Md', 'Lo', 'i', 's', 'h', 'Hi', 'Md', 'Lo']; //Flavor, Effect, Buds, High, Mid, Low, indica, sativa, hybred
		
		/** temp ranges  - 0 - 355 = Low, 356 - 385 Med, 386 - 470 = High **/

		var detailModes = ['Pos','Per',1,'Neg','Med','Vap'];

		/** VTempType is a flag that indicates when a vape has specific temps available - Y or has a variable range of temps - N  **/
		/** When a variable range is available - N, the min and max temps are listed in VTempType **/
		var vapeTemps = [
			{"VId": 1,
			 "VName": "Crafty", 
			 "VManufacturer" : "Storz & Bickels",
			 "VType": "Portable",
			 "VTempType": "N",
			 "VTempsF": ["104","122", "250","290", "313", "315", "334", "351", "356", "365", "388", "400", "410"],
			 "VTempsC": ["040","050","121", "143", "156", "157", "168", "177", "180", "185", "198", "204", "210"],
			 "VColors": ["Lo", "Lo", "Lo", "Lo", "Lo", "Lo", "Lo", "Lo", "Md", "Md", "Md", "Hi", "Hi", "Hi"],
			 "descriptionAbbrev": "The Crafty vaporizer packs the power of Storz & Bickels' German engineered heating technology into an uber portable vaping unit that can be controlled from your smartphone. Now you can enjoy the efficient herbal vaporizing experience the Volcano and Plenty are known for, on the go. Although the Crafty only has two temperature settings, with the free app you can set those temperatures to any two values you choose.", 
			 "VImageUrl": "images/vapes/crafty1.png"
			},
			{"VId": 2,
			 "VName": "Mighty", 
			 "VManufacturer" : "Storz & Bickels",
			 "VType": "Portable",
			 "VTempType": "N",
			 "VTempsF": ["104","122", "250","290", "313", "315", "334", "351", "356", "365", "388", "400", "410"],
			 "VTempsC": ["040","050","121", "143", "156", "157", "168", "177", "180", "185", "198", "204", "210"],
			 "VColors": ["Lo", "Lo", "Lo", "Lo", "Lo", "Lo", "Lo", "Lo", "Md", "Md", "Md", "Hi", "Hi", "Hi"],
			 "descriptionAbbrev": "The Mighty Vaporizer is the first of the portable vaporizers from German vaping masterminds Storz & Bickel, the same creators of the Volcano and Plenty vaporizers. Their German engineered heaters are the most efficient in the game, and that power is now available in the palm of your hand. The Mighty has an adjustable temperature range with a digital display allowing you to set it to any temp within its range. The temps below indicate that it is capable of low, medum and high temperatures.",
			 "VImageUrl": "images/vapes/mighty1.png"
			},
			{"VId": 3,
			 "VName": "Arizer Solo", 
			 "VManufacturer" : "Arizer",
			 "VType": "Portable",
			 "VTempType": "Y",
			 "VTempsF": ["122", "365", "374", "383", "393", "401", "410"],
			 "VTempsC": ["050", "185", "190", "195", "200", "205", "210"],
			 "VColors": ["Lo", "Md", "Md", "Md", "Hi", "Hi", "Hi"],
 			 "descriptionAbbrev": "The Arizer Solo is a super efficient hand held portable vaporizer by Arizer Tech, the brilliant minds behind the Arizer Extreme Q.",
			 "VImageUrl": "images/vapes/solo1.png"
			},
			{"VId": 4,
			 "VName": "Arizer Air", 
			 "VManufacturer" : "Arizer",
			 "VType": "Portable",
			 "VTempType": "Y",
			 "VTempsF": ["356", "374", "392", "401", "410"],
			 "VTempsC": ["180", "190", "200", "205", "210"],
			 "VColors": ["Lo", "Md", "Hi", "Hi", "Hi"],
			 "descriptionAbbrev": "The Arizer Air vaporizer uses an all glass vapor path and stainless steel heating element to produce desktop quality vapor in a small 5 Inch tall by 1 inch wide travel friendly size.",
			 "VImageUrl": "images/vapes/arizer_air2.png"
			},
			{"VId": 5,
			 "VName": "Pinnacle Pro", 
			 "VManufacturer" : "VaporBlunt",
			 "VType": "Portable",
			 "VTempType": "Y",
			 "VTempsF": ["370", "395", "420", "445", "470"],
			 "VTempsC": ["188", "201", "215", "229", "243"],
			 "VColors": ["Md", "Hi", "Hi", "Hi", "Hi"],
			 "descriptionAbbrev": "The Pinnacle quickly became one of the most popular portable vaporizers for first time users and vape veterans alike because of its easy to use functionality, superb portability, and excellent vapor quality.",
			 "VImageUrl": "images/vapes/pinnaclepro1.png"
			},
			{"VId": 6,
			 "VName": "Silver Surfer", 
			 "VManufacturer" : "7th Floor",
			 "VType": "Desktop",
			 "VTempType": "N",
			 "VTempsF": ["0", "350", "900"],
			 "VTempsC": ["0", "177", "482"],
			 "VColors": ["Lo", "Md", "Hi"],
			 "descriptionAbbrev": "Silver Surfer is a highly customizable, top performing desktop vaporizer. Choose from a wide array of colors, designs, and heater cover options to create your perfect vaporizer.",
			 "VImageUrl": "images/vapes/ssv2.png"
			},
			{"VId": 7,
			 "VName": "Da Buddah", 
			 "VManufacturer" : "7th Floor",
			 "VType": "Desktop",
			 "VTempType": "N",
			 "VTempsF": ["0",  "370", "900"],
			 "VTempsC": ["0", "187", "482"],
			 "VColors": ["Lo", "Md", "Hi"],
			 "descriptionAbbrev":  "Da Buddha is pretty stylish, colored sparkly silver with a faint, fat Buddha logo above the temperature control knob. It's also available in black for a few dollars more. It's basically a stripped-down version of the Silver Surfer Vaporizer, which is made by the same company. It has a wide temperature range controlled by the plastic knob on the front of the unit and how fast you choose to inhale.",
			 "VImageUrl": "images/vapes/dabuddah2.png"
			},
			{"VId": 8,
			 "VName": "LSV", 
			 "VManufacturer" : "7th Floor",
			 "VType": "Desktop",
			 "VTempType": "N",
			 "VTempsF": ["0", "370", "900"],
			 "VTempsC": ["0", "187", "482"],
			 "VColors": ["Lo", "Md", "Hi"],
			 "descriptionAbbrev": "This vape has been designed to within an inch of its life, and it shows. This is a thing of beauty which you will enjoy using and probably enjoy showing off to your friends even more.",
			 "VImageUrl": "images/vapes/life-saber-vaporizer-lsv.png"
			},
			{"VId": 9,
			 "VName": "Magic Flight Launch Box", 
			 "VManufacturer" : "Magic Flight",
			 "VType": "Portable",
			 "VTempType": "N",
			 "VTempsF": ["0", "370", "400"],
			 "VTempsC": ["0", "187", "204"],
			 "VColors": ["Lo", "Md", "Hi"],
			 "descriptionAbbrev": "Beautifully crafted and intuitively designed, the Magic-Flight Launch Box, is powered by a rechargeable AA NiMH battery and holds the title of the world's smallest electronic vaporizer, making it the perfect option for low-profile vaporizing on-the-go.",
			 "VImageUrl": "images/vapes/mflb1.png"
			},
			{"VId": 10,
			 "VName": "Extreme Q", 
			 "VManufacturer" : "Arizer",
			 "VType": "Desktop",
			 "VTempType": "N",
			 "VTempsF": ["122", "250", "290", "313", "315", "334", "351", "356", "365", "388", "400", "428", "445", "500"],
			 "VTempsC": ["050","121", "143", "156", "157", "168", "177", "180", "185", "198", "204", "220", "229", "260"],
			 "VColors": ["Lo", "Lo", "Lo", "Lo", "Lo", "Lo", "Lo", "Md", "Md", "Md", "Hi", "Hi", "Hi", "Hi", "Hi"],
			 "descriptionAbbrev":  "This is the Extreme-Q Vaporizer by Arizer. It is a dual purpose vaporizer or a combo vape because it can be used with a whip and it can also be used with a balloon.",
			 "VImageUrl": "images/vapes/extremeq1.png"
			},
			{"VId": 11,
			 "VName": "V Tower", 
			 "VManufacturer" : "Arizer",
			 "VType": "Desktop",
			 "VTempType": "N",
			 "VTempsF": ["122", "250","290", "313", "315", "334", "351", "356", "365", "388", "400", "428", "445", "500"],
			 "VTempsC": ["050","121", "143", "156", "157", "168", "177", "180", "185", "198", "204", "220", "229", "260"],
			 "VColors": ["Lo", "Lo", "Lo", "Lo", "Lo", "Lo", "Lo", "Md", "Md", "Md", "Hi", "Hi", "Hi", "Hi", "Hi"],
			 "descriptionAbbrev":  "The V-Tower, by Canadian manufacturer Arizer, is a direct draw, simple to use, tabletop vaporizer. For efficient and user-friendly functionality, few vaporizers can compete with its high quality vapor production.",
			 "VImageUrl": "images/vapes/Arizer-V-Tower-Vaporizer.png"
			},
			{"VId": 12,
			 "VName": "Volcano Digit", 
			 "VManufacturer" : "Storz & Bickel",
			 "VType": "Desktop",
			 "VTempType": "N",
			 "VTempsF": ["266", "288", "309", "331", "352", "374", "396", "417", "439"],
			 "VTempsC": ["130", "142", "154", "166", "178", "190", "202", "214", "226"],
			 "VColors": ["Lo", "Lo", "Lo", "Lo", "Lo", "Md", "Md", "Hi", "Hi"],
			 "descriptionAbbrev":  "The Volcano Digit vaporizer's reputation precedes it in most cases and is equally respected by vaporizing newbies and pro vaporizer users alike.",
			 "VImageUrl": "images/vapes/volcano2.png"
			},
			{"VId": 13,
			 "VName": "Volcano Classic", 
			 "VManufacturer" : "Storz & Bickel",
			 "VType": "Desktop",
			 "VTempType": "N",
			 "VTempsF": ["266", "288", "309", "331", "352", "374", "396", "417", "439"],
			 "VTempsC": ["130", "142", "154", "166", "178", "190", "202", "214", "226"],
			 "VColors": ["Lo", "Lo", "Lo", "Lo", "Lo", "Md", "Md", "Hi", "Hi"],
			 "descriptionAbbrev":  "The Volcano Digit vaporizer's reputation precedes it in most cases and is equally respected by vaporizing newbies and pro vaporizer users alike.",
			 "VImageUrl": "images/vapes/volcano1.png"
			},
			{"VId": 14,
			 "VName": "Plenty", 
			 "VManufacturer" : "Storz & Bickel",
			 "VType": "Desktop",
			 "VTempType": "N",
			 "VTempsF": ["100", "370", "420"],
			 "VTempsC": ["037", "187", "215"],
			 "VColors": ["Lo", "Md", "Hi"],
			 "descriptionAbbrev":  "This is Storz & Bickel's very first whip vaporizer and judging from their only other vaporizer, the Volcano vaporizer, you can expect a top of the line product when you buy the Plenty Vaporizer. The Plenty has an analgog temeprature gauge that let's you set a wide range of temperatures including low, medium and high values.",
			 "VImageUrl": "images/vapes/plenty1.png"
			},
			{"VId": 15,
			 "VName": "Ascent", 
			 "VManufacturer" : "DaVinci  Vaporizers",
			 "VType": "Portable",
			 "VTempType": "Y",
			 "VTempsF": ["0", "370", "430"],
			 "VTempsC": ["0", "187", "221"],
			 "VColors": ["Lo", "Md", "Hi"],
			 "descriptionAbbrev":  "The Ascent Vaporizer takes what barriers you think portable vaporizers might be restricted by and smashes through them with ease.",
			 "VImageUrl": "images/vapes/ascent1.png"
			},
			{"VId": 16,
			 "VName": "PUFFiT 2", 
			 "VManufacturer" : "Discreet Vape",
			 "VType": "Portable",
			 "VTempType": "Y",
			 "VTempsF": ["250", "430"],
			 "VTempsC": ["121", "221"],
			 "VColors": ["Lo", "Hi"],
			 "descriptionAbbrev":  "Draw true vapor quickly and easily without drawing attention with a little help from the PUFFiT 2 inhaler vaporizer.",
			 "VImageUrl": "images/vapes/puffit1.png"
			},
			{"VId": 17,
			 "VName": "Haze", 
			 "VManufacturer" : "Haze Vaporizers",
			 "VType": "Portable",
			 "VTempType": "Y",
			 "VTempsF": ["365", "380", "390", "415"],
			 "VTempsC": ["185", "193", "198", "212"],
			 "VColors": ["Md", "Md", "Hi", "Hi"],
			 "descriptionAbbrev":  "Haze is the first portable vaporizer with dual chambers, allowing vaporization of dried blends, solid concentrates, and liquids interchangeably and simultaneously.",
			 "VImageUrl": "images/vapes/haze1.png"
			},
			{"VId": 18,
			 "VName": "Firefly", 
			 "VManufacturer" : "Firefly Vaporizers",
			 "VType": "Portable",
			 "VTempType": "N",
			 "VTempsF": ["0", "370", "400"],
			 "VTempsC": ["0", "187", "204"],
			 "VColors": ["Lo", "Md", "Hi"],
			 "descriptionAbbrev":  "The revolutionary Firefly is the fastest, easiest, most satisfying way to enjoy aromatic blends. Firefly heats instantly at the touch of a button, so it's always ready. There's nothing faster.",
			 "VImageUrl": "images/vapes/firefly1.png"
			},
			{"VId": 19,
			 "VName": "Hot Box", 
			 "VManufacturer" : "Hot Box Vapors",
			 "VType": "Desktop",
			 "VTempType": "N",
			 "VTempsF": ["0", "370", "400"],
			 "VTempsC": ["0", "187", "204"],
			 "VColors": ["Lo", "Md", "Hi"],
			 "descriptionAbbrev":  "The Volcano Digit vaporizer's reputation precedes it in most cases and is equally respected by vaporizing newbies and pro vaporizer users alike.",
			 "VImageUrl": "images/vapes/hotbox1.png"
			},
			{"VId": 20,
			 "VName": "Vapir Rise 2.0", 
			 "VManufacturer" : "Vapir",
			 "VType": "Desktop",
			 "VTempType": "N",
			 "VTempsF": ["0", "370", "420"],
			 "VTempsC": ["0", "187", "215"],
			 "VColors": ["Lo", "Md", "Hi"],
			 "descriptionAbbrev":  "Vapir has already laid the path for many of today's vaporizers with their revolutionary systems developed years ago. The new Vapir Rise carries this legacy into the future and is sure to impress even the most discriminating vapor enthusiast.",
			 "VImageUrl": "images/vapes/vapirrise1.png",
			},
			{"VId": 21,
			 "VName": "Pax", 
			 "VManufacturer" : "Ploom",
			 "VType": "Portable",
			 "VTempType": "Y",
			 "VTempsF": ["370", "390","410"],
			 "VTempsC": ["187", "199", "210"],
			 "VColors": ["Md", "Hi", "Hi"],
			 "descriptionAbbrev": "Pax by Ploom is a premium portable vaporizer that conveniently fits in your pocket and delivers pure, clean vapor. Small and lightweight, Pax is easily taken out and about and heats in under a minute. Its refined design is sleek, stylish, and durable, making Pax the ultimate choice for on-the-go vaporization.",
			 "VImageUrl": "images/vapes/pax1.png",
			},
			{"VId": 22,
			 "VName": "Pax 2", 
			 "VManufacturer" : "Ploom",
			 "VType": "Portable",
			 "VTempType": "Y",
			 "VTempsF": ["360", "380","400", "420"],
			 "VTempsC": ["182", "193", "204", "216"],
			 "VColors": ["Md", "Md", "Hi", "Hi"],
			 "descriptionAbbrev": "PAX 2 has four temperature settings with lip-sensing, motion-sensing, and auto-cooling technologies that intelligently self-optimize power and temperature during use. With a one-button operation and minimal maintenance required, PAX 2's interface is simple and efficient.",
			 "VImageUrl": "images/vapes/pax2black.png",
			},
			{"VId": 23,
			 "VName": "Phantom", 
			 "VManufacturer" : "Cloud V",
			 "VType": "Pen",
			 "VTempType": "N",
			 "VTempsF": ["428"],
			 "VTempsC": ["220"],
			 "VColors": ["Hi"],
			 "descriptionAbbrev": "Known for their essential oil vaporizers such as the Cloud and the second generation Cloud Platinum, Cloud V Enterprises now introduces a powerful vape pen to the industry, specifically for dry herbs.",
			 "VImageUrl": "images/vapes/phantom.png",
			},
			{"VId": 24,
			 "VName": "Alfa", 
			 "VManufacturer" : "Goboof",
			 "VType": "Portable",
			 "VTempType": "Y",
			 "VTempsF": ["374", "410", "446"],
			 "VTempsC": ["190", "210", "230"],
			 "VColors": ["Md", "Hi", "Hi"],
			 "descriptionAbbrev": "Want nice vapor from a short draw? The Alfa is one to consider. This mid-priced portable vape is made by a new company that goes by the name of Goboof, and it has a few unique features that make it stand out.",
			 "VImageUrl": "images/vapes/alfa-vaporizer-goboof.png",
			},
			{"VId": 25,
			 "VName": "Summit", 
			 "VManufacturer" : "Vapium",
			 "VType": "Portable",
			 "VTempType": "Y",
			 "VTempsF": ["320", "338", "356", "374", "392", "410", "428", "450"],
			 "VTempsC": ["160", "170", "180", "190", "200", "210", "220", "230"],
			 "VColors": ["Lo", "Lo", "Md", "Md", "Hi", "Hi", "Hi", "Hi"],
			 "descriptionAbbrev": "With innovative technology, high-quality construction and materials and intuitive functionality crafted specifically for on-the-go use, the Summit redefines industry standards of both utility and style that performs wherever the trail may lead, and beyond.",
			 "VImageUrl": "images/vapes/summit-green-600x600.png",
			},
			{"VId": 26,
			 "VName": "Cloud Evo", 
			 "VManufacturer" : "VapeXhale",
			 "VType": "Desktop",
			 "VTempType": "N",
			 "VTempsF": ["0", "370", "450"],
			 "VTempsC": ["0", "187", "230"],
			 "VColors": ["Lo", "Md", "Hi"],
			 "descriptionAbbrev": "A top-tier desktop unit with an all-glass air path that produces excellent quality vapor. A huge advantage this model has is that the performance is superb with both dry herbs and concentrates.",
			 "VImageUrl": "images/vapes/cloud-evo_thumb.png",
			},
			{"VId": 27,
			 "VName": "Herbal Aire", 
			 "VManufacturer" : "VapeXhale",
			 "VType": "Desktop",
			 "VTempType": "N",
			 "VTempsF": ["250","290", "313", "315", "334", "351", "356", "365", "388", "400"],
			 "VTempsC": ["121", "143", "156", "157", "168", "177", "180", "185", "198", "204"],
			 "VColors": ["Lo", "Lo", "Lo", "Lo", "Lo", "Lo", "Md", "Md", "Md", "Hi", "Hi"],
			 "descriptionAbbrev": "The Aire allows users the option of three different settings, whip style, balloon bag and direct draw. The temperature control on this unit is also great as it allows you to vape at anywhere between 250 F and 400F.",
			 "VImageUrl": "images/vapes/Herbal-Aire-1.png",
			},
			{"VId": 28,
			 "VName": "Herbalizer", 
			 "VManufacturer" : "Herbalizer",
			 "VType": "Desktop",
			 "VTempType": "N",
			 "VTempsF": ["290", "313", "315", "334", "351", "356", "365", "388", "428", "445"],
			 "VTempsC": ["143", "156", "157", "168", "177", "180", "185", "198", "220", "229"],
			 "VColors": ["Lo", "Lo", "Lo", "Lo", "Lo", "Md", "Md", "Md", "Hi", "Hi", "Hi"],
			 "descriptionAbbrev": "The Herbalizer, or Herbie for short, is a high-tech medical device for cannabis patients seeking consistency in dosage and effects. Achieve consistent and precise temperatures to heat specific cannabinoids for your desired medicinal effects.",
			 "VImageUrl": "images/vapes/herbalizer.png",
			}, 
			{"VId": 29,
			 "VName": "V2 Pro Series 3", 
			 "VManufacturer" : "V2 Cigs",
			 "VType": "Pen",
			 "VTempType": "N",
			 "VTempsF": ["350"],
			 "VTempsC": ["177"],
			 "VColors": ["Lo"],
			 "descriptionAbbrev": "For dry herb, the Series 3 uses conduction heating with a temp range from 350-375 degrees Fahrenheit. The temperature is regulated based on a number of things to include your herbs, grind time and draw speed.",
			 "VImageUrl": "images/vapes/v2ProSeries3.png",
			}, 
			{"VId": 30,
			 "VName": "V2 Pro Series 7", 
			 "VManufacturer" : "V2 Cigs",
			 "VType": "Pen",
			 "VTempType": "Y",
			 "VTempsF": ["392", "419", "437"],
			 "VTempsC": ["200", "215", "225"],
			 "VColors": ["Hi", "Hi", "Hi"],
			 "descriptionAbbrev": "The Series 7 is capable of vaporizing three, different mediums: e-liquid, loose leaf and wax. Allow the smart technology of your device to warm your chosen cartridge automatically, or use the variable voltage and temperature settings to tailor a custom vapor experience.",
			 "VImageUrl": "images/vapes/V2ProSeries7.png",
			},
			{"VId": 31,
			 "VName": "G-Pro", 
			 "VManufacturer" : "Grenco Science",
			 "VType": "Portable",
			 "VTempType": "Y",
			 "VTempsF": ["320", "380", "420"],
			 "VTempsC": ["160", "193", "215"],
			 "VColors": ["Lo", "Md", "Hi"],
			 "descriptionAbbrev": "Founded on the principles of performance and user-preference, the G Pro Vaporizer features three variable temperature settings, enabling a uniquely-fitted vaping experience.",
			 "VImageUrl": "images/vapes/GPro-Pen-Solo.png",
			},
			{"VId": 32,
			 "VName": "K-Vape Micro DX", 
			 "VManufacturer" : "KandyPens",
			 "VType": "Pen",
			 "VTempType": "Y",
			 "VTempsF": ["350", "370", "430"],
			 "VTempsC": ["177", "187", "221"],
			 "VColors": ["Lo", "Md", "Hi"],
			 "descriptionAbbrev": "The K-Vape Micro-DX is an extension of the K-Vape line, which is currently one of the top-selling vaporizer brands in the world. It has over 80 possible tempertaure settings and a 3 - 4 hr battery life.",
			 "VImageUrl": "images/vapes/kvape_microDx.png",
			},
			{"VId": 33,
			 "VName": "E-Nano", 
			 "VManufacturer" : "Epic Vapes",
			 "VType": "Desktop",
			 "VTempType": "N",
			 "VTempsF": ["350", "370", "430"],
			 "VTempsC": ["177", "187", "221"],
			 "VColors": ["Lo", "Md", "Hi"],
			 "descriptionAbbrev": "The Epic Vape E-Nano is a super efficient log vaporizer. Log vapes look just like a piece of wood and look great on any living room table.. Unlike most vapes which try to mimic spacecrafts and Apple products. It also heats up instantly and delivers milky clouds.",
			 "VImageUrl": "images/vapes/Epic-Vape-E-Nano-Vape.png",
			},
			{"VId": 34,
			 "VName": "Underdog", 
			 "VManufacturer" : "Underdog Aromatherapy",
			 "VType": "Desktop",
			 "VTempType": "N",
			 "VTempsF": ["350", "370", "430"],
			 "VTempsC": ["177", "187", "221"],
			 "VColors": ["Lo", "Md", "Hi"],
			 "descriptionAbbrev": "The Underdog has a stainless steel heating core. Air is drawn into the Underdog, around the heating core, and up through the herbs in the stem. You should use a voltage regulator is you would like control over a wide range of temperatures.",
			 "VImageUrl": "images/vapes/Underdog-001-225x300.png",
			}
		];

		var vTips = [
			{
				"VTipId": 1,
				"VName": "Arizer Solo",
				"VTipList": [
				 	{ 
				 		"tipNum": "1", 
				 		"tipTxt": "Before using your Arizer Solo for the first time be sure to let it warm to the highest temperature several times to eliminate any residues present from the manufacturing process and any taste associated with them.",
				 		"TipImg" : "images/vapes/solo1.png"
				 	},
				 	{ 
				 		"tipNum": "2", 
				 		"tipTxt": "Although the Solo vaporizer is very easy to master, start with a higher temperature and work your way down as you gain experience. This will result in an optimal vaporizing experience.",
				 		"TipImg" : "images/vapes/solo1.png"
				 	},
				 	{ 
				 		"tipNum": "3", 
				 		"tipTxt": "Even when you find your favorite temperature, remember it may be necessary to adjust as needed when using fresher material that contains moisture (higher temp) or extra dry herbs (lower temp). Generally speaking, temperature levels 3 and 4 will consistently yield the best results for Sativas and temperature levels 5 and 6 for Indicas.",
				 		"TipImg" : "images/vapes/solo1.png"
				 	},
				 	{ 
				 		"tipNum": "4", 
				 		"tipTxt": "It sometimes may be easy to forget, but be sure to hold your Solo upside down while removing the glass stem to reload. Doing this when right side up may cause some material to fall onto the heating element and create residue or clog the small holes the air needs to pass through when using.",
				 		"TipImg" : "images/vapes/solo1.png"
				 	},
				 	{ 
				 		"tipNum": "5", 
				 		"tipTxt": "Although it is not a requirement to grind your herb finely, it will improve the performance and efficiency of your Solo vaporizer. Increased grinding means increased surface area of the cannabis, which allows more hot air to interact with and vaporize the cannabis (remember to hold it upside down when emptying).",
				 		"TipImg" : "images/vapes/solo1.png"
				 	},
				 	{ 
				 		"tipNum": "6", 
				 		"tipTxt": "Whenever possible try to let your Solo charge to full capacity in between use. A full battery will go much further than one that is periodically recharged for short periods of time. A battery charge might last 3-4 hours. The charger that comes with the Solo can't charge while the Solo is in use, so plan accordingly. There are chargers sold separately that allowing charging during use, and there are also car charging adapters available.",
				 		"TipImg" : "images/vapes/solo1.png"
				 	},
				 	{ 
				 		"tipNum": "7", 
				 		"tipTxt": "Use an old school pipe cleaner to clean the Solo's glass stems. Simply fold the pipe cleaner over on itself once to make it a bit thicker (more surface area) and insert. If done frequently you can almost completely avoid using any type of cleaner or solvent. Neglecting to clean your stems frequently will quickly result in slightly diminished performance due to clogging of the air holes. Soaking the stems overnight in rubbing alcohol then rinsing out with water is also very effective.",
				 		"TipImg" : "images/vapes/solo1.png"
				 	},
				 	{ 
				 		"tipNum": "8", 
				 		"tipTxt": "Be sure to turn off your Solo vaporizer right away if taking a break “mid-bowl”. Even though the Solo has an automatic shut-off safety feature, it will continue to vaporize some of your material and cause it to taste stale when you resume use. Despite what many self-professed “vaporizer experts” online may claim, no quality vaporizer will ever result in a “burnt popcorn” type taste when used correctly.",
				 		"TipImg" : "images/vapes/solo1.png"
				 	},
				 	{ 
				 		"tipNum": "9", 
				 		"tipTxt": "To disable the beeping noises on the Arizer Solo, hold the “up” button on the vaporizer until you hear it beep. This disables all further beeping from occurring.",
				 		"TipImg" : "images/vapes/solo1.png"
				 	},
				 	{ 
				 		"tipNum": "10", 
				 		"tipTxt": "After you turn your Solo back on, if you hold the “down” button for a second it will go to last temperature setting you used before turning it off.",
				 		"TipImg" : "images/vapes/solo1.png"
				 	},
				 	{ 
				 		"tipNum": "11", 
				 		"tipTxt": "Make sure you get any leftover material stuck to the bowl-end of the mouthpiece out of there so it doesn't slowly build up and become a nuisance to clean later on. Also try to find something around the house, such as a toothpick, to poke the air holes in the bowl end of the mouthpiece. The last thing you need is those air holes getting clogged up.",
				 		"TipImg" : "images/vapes/solo1.png"
				 	},
				 	{ 
				 		"tipNum": "12", 
				 		"tipTxt": "Always take a look in the hole at the top of the Arizer Solo where the heating element is to make sure no material is in there. It doesn't happen often but sometimes there will be a small amount of vaporized material in there. It is really easy to get out using either a small brush, your finger (if it is not heated up), or blowing in it.",
				 		"TipImg" : "images/vapes/solo1.png"
				 	},
				 	{ 
				 		"tipNum": "13", 
				 		"tipTxt": "The best way to make sure the Solo will be hot enough for your liking is select one level higher then you were planning on using and wait about 10 to 15 minutes before selecting the level you want and start vaping at you desired temperature.",
				 		"TipImg" : "images/vapes/herbalizer.png"
				 	}
				],
			},	
			{
				"VTipId": 2,
				"VName": "Arizer Air",
				"VTipList": [
				 	{ 
				 		"tipNum": "1", 
				 		"tipTxt": "Never touch the end of the removable mouthpiece that is closest to the Air when hot. This can result in burns and will definitely ruin your experience.",
				 		"TipImg" : "images/vapes/arizer_air2.png"
				 	},
				 	{ 
				 		"tipNum": "2", 
				 		"tipTxt": "To maximize your taste experience use low temps. The best way to do this is to insert your mouthpiece, turn the Air on to the lowest setting and begin using it as it warms up to the first temperature. This ensures you get all the low temp effects which typically are where the flavors in your strain are best experienced.",
				 		"TipImg" : "images/vapes/arizer_air2.png"
				 	},
				 	{ 
				 		"tipNum": "3", 
				 		"tipTxt": "Carry an extra prepacked mouthpiece or two with you in the travel case for quick changes when you're on the go and would like to be discreet. This works great for hikes, picnics, sunset cruises etc.",
				 		"TipImg" : "images/vapes/arizer_air2.png"
				 	},
				 	{ 
				 		"tipNum": "4", 
				 		"tipTxt": "To reach temps that are not at one of the preset levels, try vaping between levels by setting your temperature to the level just below the temp your looking for. Then set it to the temp just above and vaporize while the Air is heating up to the next highest level.",
				 		"TipImg" : "images/vapes/arizer_air2.png"
				 	},
				 	{ 
				 		"tipNum": "5", 
				 		"tipTxt": "Remember the ghost hit. There is one hit typically still there when you turn the Air off. While it is cooling off, grab the ghost hit. ",
				 		"TipImg" : "images/vapes/arizer_air2.png"
				 	},
				 	{ 
				 		"tipNum": "6", 
				 		"tipTxt": "Using a domed screen in the Air mouthpiece can both save you herb and provide short but effective sessions. This also prevents ground herb from becoming lodged on the inside of the mouthpiece.",
				 		"TipImg" : "images/vapes/arizer_air2.png"
				 	},
				 	{ 
				 		"tipNum": "7", 
				 		"tipTxt": "Letting your ground herb dry a bit before using it in the Air will increase the efficiency of vaporization. If clouds are what you seek, this is the way to get them.",
				 		"TipImg" : "images/vapes/arizer_air2.png"
				 	},
				 	{ 
				 		"tipNum": "8", 
				 		"tipTxt": "Heating your well used mouthpiece in hot milk and then making hot chocolate can make a long lasting boost to your day. Just be sure to watch the milk so it doesn't boil and stir often.",
				 		"TipImg" : "images/vapes/arizer_air2.png"
				 	},
				 	{ 
				 		"tipNum": "9", 
				 		"tipTxt": "If you are having trouble with draw resistance, some users have found that raising the stem slighty allows more air to pass through the glass for sa smoother draw. Of course, this also means that strength of each draw may be somewhat diluted as well.",
				 		"TipImg" : "images/vapes/arizer_air2.png"
				 	},
				 	{ 
				 		"tipNum": "10", 
				 		"tipTxt": "A good way to always have a charged battery ready for your next session is to place a battery into the external charger as soon as you take it out of the Air when possible.",
				 		"TipImg" : "images/vapes/arizer_air2.png"
				 	},
				 	{ 
				 		"tipNum": "11", 
				 		"tipTxt": "A number of users have suggested one way to maximize the capacity and lifetime of your batteries is to overcharge them before the first use from 30 min to several hours.",
				 		"TipImg" : "images/vapes/arizer_air2.png"
				 	},
				 	{ 
				 		"tipNum": "12", 
				 		"tipTxt": "If the effect or flavor your looking for doesn't conveniently happen at one of the set temperatures on the Air, heat it to the temperature setting just below the value you're looking for, then set it to the next level and begin vaprorizing immediately. This will allow you to get the effects and taste from the temps between the two settings.",
				 		"TipImg" : "images/vapes/arizer_air2.png"
				 	}
				]
			},
			{
				"VTipId": 3,
				"VName": "Crafty",
				"VTipList": [
				 	{ 
				 		"tipNum": "1", 
				 		"tipTxt": "It is posible to turn off or turn down the intensity of the led and the vibration making the Crafty a great stealth option for those times when it really is just your personal choice.",
				 		"TipImg" : "images/vapes/crafty1.png"
				 	},
				 	{ 
				 		"tipNum": "2", 
				 		"tipTxt": "Although the Crafty has only two temperatures using the free app you can set those temperatures to any two temperatures you like. This really enhances the flexibility of this vaporizer.",
				 		"TipImg" : "images/vapes/crafty1.png"
				 	},
				 	{ 
				 		"tipNum": "3", 
				 		"tipTxt": "When you prefer a shorter session, a number of Crafty owners have found that using the stainless steel screen above your herb efectively cuts the capacity in half. This can also extend the life of your personal stash since you use less in each session.",
				 		"TipImg" : "images/vapes/crafty1.png"
				 	},
				 	{ 
				 		"tipNum": "4", 
				 		"tipTxt": "When sharing the session with others you can prevent interruption due to the automatic shutoff by suggesting each person press the on off button once when as soon as they take the Crafty.",
				 		"TipImg" : "images/vapes/crafty1.png"
				 	},
				 	{ 
				 		"tipNum": "5", 
				 		"tipTxt": "Be careful when removing and replacing the top mouthpiece assembly since at times the plastic can be damaged when twisted too far after repeated use.",
				 		"TipImg" : "images/vapes/crafty1.png"
				 	},
				 	{ 
				 		"tipNum": "6", 
				 		"tipTxt": "Letting your ground herb dry a bit before using it in the Crafty will increase the efficiency of vaporization. If clouds are what you seek, this is the way to get them.",
				 		"TipImg" : "images/vapes/crafty1.png"
				 	},
				 	{ 
				 		"tipNum": "7", 
				 		"tipTxt": "Use 100% Isopropyl alcohol & cotton tips to clean every 3-5 bowls.",
				 		"TipImg" : "images/vapes/crafty1.png"
				 	},
				 	{ 
				 		"tipNum": "8", 
				 		"tipTxt": "Make sure you grind fine. The finer, the more vapour you get. Just grind for double what you normally would, and test.",
				 		"TipImg" : "images/vapes/crafty1.png"
				 	},
				 	{ 
				 		"tipNum": "9", 
				 		"tipTxt": "Use the filling tool to stir the bowl half way through. It is also super important to re-compress the bowl with the flat part. The tigher the bowl, the better the vape experience will be.",
				 		"TipImg" : "images/vapes/crafty1.png"
				 	},
				 	{ 
				 		"tipNum": "10", 
				 		"tipTxt": "When re-inserting the cooling chamber filter, bend it like a dome and then insert into place easily, you'll start ruining the mesh if you don't and you try to force it into the circular grooves with it angled flat straight.",
				 		"TipImg" : "images/vapes/crafty1.png"
				 	},
				 	{ 
				 		"tipNum": "11", 
				 		"tipTxt": "Any amount of herb should be ok as long as you use the liquid pad to compress. It just needs to keep the herb compacted.",
				 		"TipImg" : "images/vapes/crafty1.png"
				 	},
				 	{ 
				 		"tipNum": "12", 
				 		"tipTxt": "Start at lower temperatures and work your way up. Find a starting temp and vape until you can't see any more vapor, then increase 10 degrees and repeat.",
				 		"TipImg" : "images/vapes/crafty1.png"
				 	}
			 	]
			},
			{
				"VTipId": 4,
				"VName": "Mighty",
				"VTipList": [
				 	{ 
				 		"tipNum": "1", 
				 		"tipTxt": "The Mighty can be adjusted to any temperature within its range making it a very flexible device. The digital display and automatic sensing and adjustment keeps it at each temperature you have selected.",
				 		"TipImg" : "images/vapes/mighty1.png"
				 	},
				 	{ 
				 		"tipNum": "2", 
				 		"tipTxt": "When sharing the session with others you can prevent interruption by the automatic shutoff by suggesting each person press the on off button as soon as they take their turn.",
				 		"TipImg" : "images/vapes/mighty1.png"
				 	},
				 	{ 
				 		"tipNum": "3", 
				 		"tipTxt": "When you prefer a shorter session, a number of Mighty owners have found that using the stainless steel screen above your herb efectively cuts the capacity in half. This can also extend the life of your personal stash since you use less each session.",
				 		"TipImg" : "images/vapes/mighty1.png"
				 	},
				 	{ 
				 		"tipNum": "4", 
				 		"tipTxt": "Be careful when removing and replacing the top mouthpiece assembly since at times the plastic can be damaged when twisted too far after repeated use.",
				 		"TipImg" : "images/vapes/mighty1.png"
				 	},
				 	{ 
				 		"tipNum": "5", 
				 		"tipTxt": "Letting your ground herb dry a bit before using it in the Mighty will increase the efficiency of vaporization. If clouds are what you seek, this is the way to get them.",
				 		"TipImg" : "images/vapes/mighty1.png"
				 	},
				 	{ 
				 		"tipNum": "6", 
				 		"tipTxt": "Use 100% Isopropyl alcohol & cotton tips to clean every 3-5 bowls.",
				 		"TipImg" : "images/vapes/mighty1.png"
				 	},
				 	{ 
				 		"tipNum": "7", 
				 		"tipTxt": "Make sure you grind fine. The finer, the more vapour you get. It also makes me feel like the bowl lasts forever too. Just grind for double what you normally would, and test.",
				 		"TipImg" : "images/vapes/mighty1.png"
				 	},
				 	{ 
				 		"tipNum": "8", 
				 		"tipTxt": "Use the filling tool to stir the bowl half way through. It is also super important to re-compress the bowl with the flat part. The tigher the bowl, the better the vape experience will be.",
				 		"TipImg" : "images/vapes/mighty1.png"
				 	},
				 	{ 
				 		"tipNum": "9", 
				 		"tipTxt": "When re-inserting the cooling chamber filter, bend it like a dome and then insert into place easily, you'll start ruining the mesh if you don't and you try to force it into the circular grooves with it angled flat straight.",
				 		"TipImg" : "images/vapes/mighty1.png"
				 	},
				 	{ 
				 		"tipNum": "10", 
				 		"tipTxt": "Any amount of herb should be ok as long as you use the liquid pad to compress. It just needs to keep the herb compacted.",
				 		"TipImg" : "images/vapes/mighty1.png"
				 	},
				 	{ 
				 		"tipNum": "11", 
				 		"tipTxt": "Start at lower temperatures and work your way up. Find a starting temp and vape until you can't see any more vapor, then increase 10C and repeat.",
				 		"TipImg" : "images/vapes/mighty1.png"
				 	},
				 	{ 
				 		"tipNum": "12", 
				 		"tipTxt": "You can use a small Altoids container to hold your ABV when you're on the go.",
				 		"TipImg" : "images/vapes/mighty1.png"
				 	}
			 	]	
			},
			{
				"VTipId": 5,
				"VName": "Pinnacle Pro",
				"VTipList": [
				 	{ 
				 		"tipNum": "1", 
				 		"tipTxt": "By filling a bullet half way with one strain and the rest of the way with a differetn strain you can get eh benefits of both using the temperatures listed here for both flavor and effect.",
				 		"TipImg" : "images/vapes/pinnaclepro1.png"
				 	},
				 	{ 
				 		"tipNum": "2", 
				 		"tipTxt": "By setting your Pinnacle Pro to the first temperature setting and vaporizing while it is warming to that level, you can get the benefits of low temp vaping which include the maximum taste for your chosen strain.",
				 		"TipImg" : "images/vapes/pinnaclepro1.png"
				 	},
				 	{ 
				 		"tipNum": "3", 
				 		"tipTxt": "If the effect or flavor your looking for doesn't conveniently happen at one of the set temperatures on the Pinnacle Pro, heat it to the temperature setting just below the value you're looking for, then set it to the next level and begin vaprorizing immediately. This will allow you to get the effects and taste from the temps between the two settings.",
				 		"TipImg" : "images/vapes/pinnaclepro1.png"
				 	},
				 	{ 
				 		"tipNum": "4", 
				 		"tipTxt": "When using the water tool, be careful to not fill it more than halfway and try to only use it vertically if possible. Some users have foudn that water can leak down in to the device causing permanent damage.",
				 		"TipImg" : "images/vapes/pinnaclepro1.png"
				 	},
				 	{ 
				 		"tipNum": "5", 
				 		"tipTxt": "It has been noted that repeated use at high temperatures can cause the plastic mouthpiece to become increasingly fragile. To be sure your mouthpiece doesn't break, turn the unit on to heat it before removing the bullet for your first session. This will loosen the bond that may have formed between the plastic and the resins from earlier sessions.",
				 		"TipImg" : "images/vapes/pinnaclepro1.png"
				 	},
				 	{ 
				 		"tipNum": "6", 
				 		"tipTxt": "Having a container close by for your ABV can help prevent you from getting burned when you complete your session. Just remove the mouthpiece and turn the unit over above the ABV container. The hot bullet should fall into the container and you can now just drop a cool bullet into the Pinnacle and continue vaping.",
				 		"TipImg" : "images/vapes/pinnaclepro1.png"
				 	},
				 	{ 
				 		"tipNum": "7", 
				 		"tipTxt": "If you prefer concentrates some Pinnacle owners have found that placing the wax, hash or oil in a bed of herb can be a pleasant combination. Of course, higher temperatures will be needed to get the most from your concentrates.",
				 		"TipImg" : "images/vapes/pinnaclepro1.png"
				 	},
				 	{ 
				 		"tipNum": "8", 
				 		"tipTxt": "Many users find that grinding their ABV in a coffee grinder before adding it to a cookie or brownie mix is a great way to get the most out of your herb.",
				 		"TipImg" : "images/vapes/pinnaclepro1.png"
				 	},
				 	{ 
				 		"tipNum": "9", 
				 		"tipTxt": "Letting your ground herb dry a bit before using it in the Air will increase the efficiency of vaporization. If clouds are what you seek, this is the way to get them.",
				 		"TipImg" : "images/vapes/pinnaclepro1.png"
				 	},
				 	{ 
				 		"tipNum": "10", 
				 		"tipTxt": "To maximize the life of your PNP, use settings 1-3 most often. Although Vaporblunt advertises the unit is built to handle higher temps, a number of users have reported problems with the unit that result from repeated use at levels 4 and 5.",
				 		"TipImg" : "images/vapes/pinnaclepro1.png"
				 	},
				 	{ 
				 		"tipNum": "11", 
				 		"tipTxt": "When cleaning your Mouthpieces, try not to leave it in isopropyl alcohol for more than 1-3 minutes at a time. Then rinse with water and allow to dry. This will keep the plastic in good condition over time.",
				 		"TipImg" : "images/vapes/pinnaclepro1.png"
				 	},
				 	{ 
				 		"tipNum": "12", 
				 		"tipTxt": "Many PNP owners have found that using the pong mouthpiece gives more satisfying results.",
				 		"TipImg" : "images/vapes/pinnaclepro1.png"
				 	}
			 	]	
			},
			{
				"VTipId": 6,
				"VName": "Silver Surfer",
				"VTipList": [
				 	{ 
				 		"tipNum": "1", 
				 		"tipTxt": "Using a smaller wand can help you moderate your sessions and your tolerance. This will also extend the time your personal stash lasts, potentially saving you money as well.",
				 		"TipImg" : "images/vapes/ssv2.png"
				 	},
				 	{ 
				 		"tipNum": "2", 
				 		"tipTxt": "Although there are no specific temperature settings on the SSV, if you are looking for low temp flavors or effects you can still get them. Set the SSV to a 12:00 position or less and while it is heating up begin vaping. Any low temp benefits should now be yours.",
				 		"TipImg" : "images/vapes/ssv2.png"
				 	},
				 	{ 
				 		"tipNum": "3", 
				 		"tipTxt": "Since the SSV is capable of very high temperatures, there is a risk of combusting your herb if you set it too high. This would both release dangerous chemicals such as benzene and toluene into your system as well as affect the taste of future sessions. Most SSV owners suggest a setting between 12:00 and 3:00 to prevent this, but each device is made differently so be cautious and experiment to find your favorite setting.",
				 		"TipImg" : "images/vapes/ssv2.png"
				 	},
				 	{ 
				 		"tipNum": "4", 
				 		"tipTxt": "If you prefer concentrates, some SSV owners have found that placing the wax, hash or oil in a bed of herb can be a pleasant combination. Of course, higher temperatures will be needed to get the most from your concentrates.",
				 		"TipImg" : "images/vapes/ssv2.png"
				 	},
				 	{ 
				 		"tipNum": "5", 
				 		"tipTxt": "To minimize the risk of having herb enter the SSV heating chamber always remove the wand between draws.",
				 		"TipImg" : "images/vapes/ssv2.png"
				 	},
				 	{ 
				 		"tipNum": "6", 
				 		"tipTxt": "Dont toke too slow as it can burn the herb, nice short fast puffs.",
				 		"TipImg" : "images/vapes/ssv2.png"
				 	},
				 	{ 
				 		"tipNum": "7", 
				 		"tipTxt": "Be careful of banging out the glass wand on the table or ashtray, it will crack after a while.",
				 		"TipImg" : "images/vapes/ssv2.png"
				 	},
				 	{ 
				 		"tipNum": "8", 
				 		"tipTxt": "The SSV has a pretty narrow air stream, you may want to rotate the wand as you're hitting it for a more even vape and try not to load the bowl more than half full.",
				 		"TipImg" : "images/vapes/ssv2.png"
				 	},
				 	{ 
				 		"tipNum": "9", 
				 		"tipTxt": "Use a medium fine grind and stir the bowl with the pick after every hit.",
				 		"TipImg" : "images/vapes/ssv2.png"
				 	},
				 	{ 
				 		"tipNum": "10", 
				 		"tipTxt": "Both screens and tubing are a good deal from the 7th Floor site, and will be needed. It's also a good idea to get an extra wand, in case of an accident.",
				 		"TipImg" : "images/vapes/ssv2.png"
				 	},
				 	{ 
				 		"tipNum": "11", 
				 		"tipTxt": "Take a smaller hit. Only fill up your lungs to like half capacity. Hold that in. Hold it in longer than you ever though you would need to hold your breath. When you finally do exhale, you should see nothing or next to nothing come out. Using this method, you can get medicated on next to nothing.",
				 		"TipImg" : "images/vapes/ssv2.png"
				 	},
				 	{ 
				 		"tipNum": "12", 
				 		"tipTxt": "Have someone you want to share your SSV with, but they have never vaped? Give them an empty wand that hasn't been cleaned thoroughly yet. Even with nothing in it you can get at least a few clouds. They can see first hand what it takes to pull vapor and there is no risk at all of messing anything up.",
				 		"TipImg" : "images/vapes/ssv2.png"
				 	}
			 	]
			},
			{
				"VTipId": 7,
				"VName": "Da Buddah",
				"VTipList": [
				 	{ 
				 		"tipNum": "1", 
				 		"tipTxt": "Using a smaller wand can help you moderate your sessions and your tolerance. This will also extend the time your personal stash lasts potentially saving you money as well.",
				 		"TipImg" : "images/vapes/dabuddah2.png"
				 	},
				 	{ 
				 		"tipNum": "2", 
				 		"tipTxt": "Although there are no specific temperature settings on the DBV, if you are looking for low temp flavors or effects you can still get them. Set your DBV to a 12:00 position or less and while it is heating up begin vaping. Any low temp benefits should now be yours.",
				 		"TipImg" : "images/vapes/dabuddah2.png"
				 	},
				 	{ 
				 		"tipNum": "3", 
				 		"tipTxt": "Since the DBV is capable of very high temperatures, there is a risk of combusting your herb if you set it too high. This would both release dangerous chemicals such as benzene and toluene into your system as well as affect the taste of future sessions. Most DBV owners suggest a setting between 12:00 and 3:00 to prevent this but each device is made differently so be cautious and experiment to find your favorite setting.",
				 		"TipImg" : "images/vapes/dabuddah2.png"
				 	},
				 	{ 
				 		"tipNum": "4", 
				 		"tipTxt": "If you prefer concentrates, some DBV owners have found that placing the wax, hash or oil in a bed of herb can be a pleasant combination. Of course, higher temperatures will be needed to get the most from your concentrates.",
				 		"TipImg" : "images/vapes/dabuddah2.png"
				 	},
				 	{ 
				 		"tipNum": "5", 
				 		"tipTxt": "To minimize the risk of having herb enter the DBV heating chamber always remove the wand between draws.",
				 		"TipImg" : "images/vapes/dabuddah2.png"
				 	},
				 	{ 
				 		"tipNum": "6", 
				 		"tipTxt": "Both screens and tubing are a good deal from the 7th Floor site, and will be needed. It's also a good idea to get an extra wand, in case of an accident.",
				 		"TipImg" : "images/vapes/dabuddah2.png"
				 	},
				 	{ 
				 		"tipNum": "7", 
				 		"tipTxt": "Use a medium fine grind and stir the bowl with the pick after every hit.",
				 		"TipImg" : "images/vapes/dabuddah2.png"
				 	},
				 	{ 
				 		"tipNum": "8", 
				 		"tipTxt": "Dont toke too slow as it can burn the herb, nice short fast puffs.",
				 		"TipImg" : "images/vapes/dabuddah2.png"
				 	},
				 	{ 
				 		"tipNum": "9", 
				 		"tipTxt": "Be careful of banging out the glass wand on the table or ashtray, it will crack after a while.",
				 		"TipImg" : "images/vapes/dabuddah2.png"
				 	},
				 	{ 
				 		"tipNum": "10", 
				 		"tipTxt": "To minimize the risk of having herb enter the DBV heating chamber always remove the wand between draws.",
				 		"TipImg" : "images/vapes/dabuddah2.png"
				 	},
				 	{ 
				 		"tipNum": "11", 
				 		"tipTxt": "Take a smaller hit. Only fill up your lungs to like half capacity. Hold that in. Hold it in longer than you ever though you would need to hold your breath. When you finally do exhale, you should see nothing or next to nothing come out. Using this method, you can get medicated on next to nothing.",
				 		"TipImg" : "images/vapes/dabuddah2.png"
				 	},
				 	{ 
				 		"tipNum": "12", 
				 		"tipTxt": "Have someone you want to share your DBV with, but they have never vaped? Give them an empty wand that hasn't been cleaned thoroughly yet. Even with nothing in it you can get at least a few clouds. They can see first hand what it takes to pull vapor and there is no risk at all of messing anything up.",
				 		"TipImg" : "images/vapes/dabuddah2.png"
				 	}
				] 	
			},
			{
				"VTipId": 8,
				"VName": "LSV",
				"VTipList": [
				 	{ 
				 		"tipNum": "1", 
				 		"tipTxt": "Although there are no specific temperature settings on the LSV, if you are looking for low temp flavors or effects you can still get them. Set the SSV to a 12:00 position or less and while it is heating up begin vaping. Any low temp benefits should now be yours.",
				 		"TipImg" : "images/vapes/life-saber-vaporizer-lsv.png"
				 	},
				 	{ 
				 		"tipNum": "2", 
				 		"tipTxt": "If you prefer concentrates, some LSV owners have found that placing the wax, hash or oil in a bed of herb can be a pleasant combination. Of course, higher temperatures will be needed to get the most from your concentrates.",
				 		"TipImg" : "images/vapes/life-saber-vaporizer-lsv.png"
				 	},
				 	{ 
				 		"tipNum": "3", 
				 		"tipTxt": "Take a smaller hit. Only fill up your lungs to like half capacity. Hold that in. Hold it in longer than you ever though you would need to hold your breath. When you finally do exhale, you should see nothing or next to nothing come out. Using this method, you can get medicated on next to nothing.",
				 		"TipImg" : "images/vapes/life-saber-vaporizer-lsv.png"
				 	}, 
				 	{ 
				 		"tipNum": "4", 
				 		"tipTxt": "Have a 4 piece grinder with a bunch of kief? You can vaporize that, but it's so fine it will fly through the screen. Break off a little cotton ball/q-tip and use tweezers to roll it in the pollen. Stick that in your lsv, crank it up to like 3 o clock and enjoy.",
				 		"TipImg" : "images/vapes/life-saber-vaporizer-lsv.png"
				 	},
				 	{ 
				 		"tipNum": "5", 
				 		"tipTxt": "Have someone you want to share your LSV with, but they have never vaped? Give them an empty wand that hasn't been cleaned thoroughly yet. Even with nothing in it you can get at least a few clouds. They can see first hand what it takes to pull vapor and there is no risk at all of messing anything up.",
				 		"TipImg" : "images/vapes/life-saber-vaporizer-lsv.png"
				 	},
				 	{ 
				 		"tipNum": "6", 
				 		"tipTxt": "Use a medium fine grind and stir the bowl with the pick after every hit.",
				 		"TipImg" : "images/vapes/life-saber-vaporizer-lsv.png"
				 	},
				 	{ 
				 		"tipNum": "7", 
				 		"tipTxt": "A Tip goes here",
				 		"TipImg" : "images/vapes/life-saber-vaporizer-lsv.png"
				 	},
				 	{ 
				 		"tipNum": "8", 
				 		"tipTxt": "A Tip goes here",
				 		"TipImg" : "images/vapes/life-saber-vaporizer-lsv.png"
				 	},
				 	{ 
				 		"tipNum": "9", 
				 		"tipTxt": "A Tip goes here",
				 		"TipImg" : "images/vapes/life-saber-vaporizer-lsv.png"
				 	},
				 	{ 
				 		"tipNum": "10", 
				 		"tipTxt": "A Tip goes here",
				 		"TipImg" : "images/vapes/life-saber-vaporizer-lsv.png"
				 	},
				 	{ 
				 		"tipNum": "11", 
				 		"tipTxt": "A Tip goes here",
				 		"TipImg" : "images/vapes/life-saber-vaporizer-lsv.png"
				 	},
				 	{ 
				 		"tipNum": "12", 
				 		"tipTxt": "A Tip goes here",
				 		"TipImg" : "images/vapes/life-saber-vaporizer-lsv.png"
				 	}
			 	]
			},
			{
				"VTipId": 9,
				"VName": "Magic Flight Launch Box",
				"VTipList": [
				 	{ 
				 		"tipNum": "1", 
				 		"tipTxt": "$0.78 worth of clear PVC will give you a nice whip. The 5/16 inch is the size that fits perfectly",
				 		"TipImg" : "images/vapes/mflb1.png"
				 	},
				 	{ 
				 		"tipNum": "2", 
				 		"tipTxt": "Push your straw through a hookah mouth stem for a flat, clean hitting chamber.",
				 		"TipImg" : "images/vapes/mflb1.png"
				 	},
				 	{ 
				 		"tipNum": "3", 
				 		"tipTxt": "You can use chapstick lids to cover the batteries.",
				 		"TipImg" : "images/vapes/mflb1.png"
				 	},
				 	{ 
				 		"tipNum": "4", 
				 		"tipTxt": "You can use a tic tac container as a bud dispenser.",
				 		"TipImg" : "images/vapes/mflb1.png"
				 	},
				 	{ 
				 		"tipNum": "5", 
				 		"tipTxt": "You can use a small Althoids container to hold your ABV when you're on the go.",
				 		"TipImg" : "images/vapes/mflb1.png"
				 	},
				 	{ 
				 		"tipNum": "6", 
				 		"tipTxt": "Always keep your batteries covered to avoid contact with metal in your pocket or purse.",
				 		"TipImg" : "images/vapes/mflb1.png"
				 	},
				 	{ 
				 		"tipNum": "7", 
				 		"tipTxt": "Don't use acrylic grinders. They wear down very quickly and become dangerous, grinding off tiny, sometimes even microscopic, plastic particles into your weed.",
				 		"TipImg" : "images/vapes/mflb1.png"
				 	},
				 	{ 
				 		"tipNum": "8", 
				 		"tipTxt": "To clean the mouthpiece stem, just dip a cotton swab in alcohol and push through the stem until it's clean, then rinse the stem and let dry.",
				 		"TipImg" : "images/vapes/mflb1.png"
				 	},
				 	{ 
				 		"tipNum": "9", 
				 		"tipTxt": "Vapor is not smoke, so it's ok to hold in.",
				 		"TipImg" : "images/vapes/mflb1.png"
				 	},
				 	{ 
				 		"tipNum": "10", 
				 		"tipTxt": "A Tip goes here",
				 		"TipImg" : "images/vapes/mflb1.png"
				 	},
				 	{ 
				 		"tipNum": "11", 
				 		"tipTxt": "A Tip goes here",
				 		"TipImg" : "images/vapes/mflb1.png"
				 	},
				 	{ 
				 		"tipNum": "12", 
				 		"tipTxt": "A Tip goes here",
				 		"TipImg" : "images/vapes/mflb1.png"
				 	}
			 	]
			},
			{
				"VTipId": 10,
				"VName": "Extreme Q",
				"VTipList": [
				 	{ 
				 		"tipNum": "1", 
				 		"tipTxt": "Vapor is not smoke, so it's ok to hold in.",
				 		"TipImg" : "images/vapes/extremeq1.png"
				 	},
				 	{ 
				 		"tipNum": "2", 
				 		"tipTxt": "If you heat up the vaporizer to 392 degrees F, and then put the empty Cyclone Bowl on the unit's female piece, you will get the most effective and fast vaporization.",
				 		"TipImg" : "images/vapes/extremeq1.png"
				 	},
				 	{ 
				 		"tipNum": "3", 
				 		"tipTxt": "Use the remote to put the fan on the lowest setting and heat the Cyclone bowl even faster, then turn it off once the Extreme Q temperature reaches 392 F.",
				 		"TipImg" : "images/vapes/extremeq1.png"
				 	},
				 	{ 
				 		"tipNum": "4", 
				 		"tipTxt": "The slower you inhale, the more vaporizer fumes you will successfully intake. Once finished with your toke, you can leave the Cyclone Bowl on the Extreme Q for about 30 seconds to one minute without risking unnecessary heat damage to the bud.",
				 		"TipImg" : "images/vapes/extremeq1.png"
				 	},
				 	{ 
				 		"tipNum": "5", 
				 		"tipTxt": "The mouthpiece screen is shaped like a small bowl and needs to cleaned about once a month if you are using the vaporizer daily. You can use the glass tool to scrape the filter clean, but every couple weeks you should just submerge it in rubbing alcohol for a half an hour then rinse and dry.",
				 		"TipImg" : "images/vapes/extremeq1.png"
				 	},
				 	{ 
				 		"tipNum": "6", 
				 		"tipTxt": "As with all vaporizers, use a grinder to grind your pot into fine particulates. This will allow maximum surface area and improve vaporization.",
				 		"TipImg" : "images/vapes/extremeq1.png"
				 	},
				 	{ 
				 		"tipNum": "7", 
				 		"tipTxt": "The Extreme uses a standard 18.8mm connection on both the whip and a bag mouthpieces. They can connect to a 18.8mm GonG joint. (The bag stem has a GonG joint?) Hold the bag upright when connected to a bong to facilitate airflow.",
				 		"TipImg" : "images/vapes/extremeq1.png"
				 	},
				 	{ 
				 		"tipNum": "8", 
				 		"tipTxt": "A Tip goes here",
				 		"TipImg" : "images/vapes/extremeq1.png"
				 	},
				 	{ 
				 		"tipNum": "9", 
				 		"tipTxt": "A Tip goes here",
				 		"TipImg" : "images/vapes/extremeq1.png"
				 	},
				 	{ 
				 		"tipNum": "10", 
				 		"tipTxt": "A Tip goes here",
				 		"TipImg" : "images/vapes/extremeq1.png"
				 	},
				 	{ 
				 		"tipNum": "11", 
				 		"tipTxt": "A Tip goes here",
				 		"TipImg" : "images/vapes/extremeq1.png"
				 	},
				 	{ 
				 		"tipNum": "12", 
				 		"tipTxt": "A Tip goes here",
				 		"TipImg" : "images/vapes/extremeq1.png"
				 	}
			 	]
			},
			{
				"VTipId": 11,
				"VName": "V Tower",
				"VTipList": [
				 	{ 
				 		"tipNum": "1", 
				 		"tipTxt": "Vapor is not smoke, so it's ok to hold in.",
				 		"TipImg" : "images/vapes/Arizer-V-Tower-Vaporizer.png"
				 	},
				 	{ 
				 		"tipNum": "2", 
				 		"tipTxt": "When your V-Tower is heating up be sure to have the cyclone bowl and whip attached to the heating element. This will not only help the V-Tower heat up faster but also ensure an even and consistent vaporizing experience. Make sure while you are doing this the cyclone bowl is NOT packed.",
				 		"TipImg" : "images/vapes/Arizer-V-Tower-Vaporizer.png"
				 	},
				 	{ 
				 		"tipNum": "3", 
				 		"tipTxt": "Always remember to use your stir tool between each pull, or every other pull, from the V-Tower. It may seem like something that can get annoying but this is absolutely essential to getting every active ingredient out of your material.",
				 		"TipImg" : "images/vapes/Arizer-V-Tower-Vaporizer.png"
				 	},
				 	{ 
				 		"tipNum": "4", 
				 		"tipTxt": "After you are done using the V-Tower always give the cyclone bowl and heating element ample time to cool down before clearing out the bowl. Trying to remove the cyclone bowl too soon can result in you burning yourself.",
				 		"TipImg" : "images/vapes/Arizer-V-Tower-Vaporizer.png"
				 	},
				 	{ 
				 		"tipNum": "5", 
				 		"tipTxt": "Taking harder and longer pulls is going to result in you having to clean your glass elbow adapter more often due to the material clogging the screen. It is recommended to take lighter and slower pulls with the V-Tower to avoid having to replace screens over and over.",
				 		"TipImg" : "images/vapes/Arizer-V-Tower-Vaporizer.png"
				 	},
				 	{ 
				 		"tipNum": "6", 
				 		"tipTxt": "Just like the Extreme Q you can also achieve stronger pulls from your V-Tower by packing the bowl end of the whip that normally attaches to the cyclone bowl.",
				 		"TipImg" : "images/vapes/Arizer-V-Tower-Vaporizer.png"
				 	},
				 	{ 
				 		"tipNum": "7", 
				 		"tipTxt": "A Tip goes here",
				 		"TipImg" : "images/vapes/Arizer-V-Tower-Vaporizer.png"
				 	},
				 	{ 
				 		"tipNum": "8", 
				 		"tipTxt": "A Tip goes here",
				 		"TipImg" : "images/vapes/Arizer-V-Tower-Vaporizer.png"
				 	},
				 	{ 
				 		"tipNum": "9", 
				 		"tipTxt": "A Tip goes here",
				 		"TipImg" : "images/vapes/Arizer-V-Tower-Vaporizer.png"
				 	},
				 	{ 
				 		"tipNum": "10", 
				 		"tipTxt": "A Tip goes here",
				 		"TipImg" : "images/vapes/Arizer-V-Tower-Vaporizer.png"
				 	},
				 	{ 
				 		"tipNum": "11", 
				 		"tipTxt": "A Tip goes here",
				 		"TipImg" : "images/vapes/Arizer-V-Tower-Vaporizer.png"
				 	},
				 	{ 
				 		"tipNum": "12", 
				 		"tipTxt": "A Tip goes here",
				 		"TipImg" : "images/vapes/Arizer-V-Tower-Vaporizer.png"
				 	}
			 	]
			},
			{
				"VTipId": 12,
				"VName": "Volcano Digit",
				"VTipList": [
				 	{ 
				 		"tipNum": "1", 
				 		"tipTxt": "Storz & Bickel recommends replacing the bags after 50-100 uses.",
				 		"TipImg" : "images/vapes/volcano2.png"
				 	},
				 	{ 
				 		"tipNum": "2", 
				 		"tipTxt": "If you leave the vapor in the balloons for two long, even a few hours and especially over time, the bags get sticky and smell funny.",
				 		"TipImg" : "images/vapes/volcano2.png"
				 	},
				 	{ 
				 		"tipNum": "3", 
				 		"tipTxt": "Vapor is not smoke, so it's ok to hold in.",
				 		"TipImg" : "images/vapes/volcano2.png"
				 	},
				 	{ 
				 		"tipNum": "4", 
				 		"tipTxt": "You throw the Easy Valve and balloon away after 150 uses, so you avoid cleaning issues but spend more money (a replacement set costs about $60).",
				 		"TipImg" : "images/vapes/volcano2.png"
				 	},
				 	{ 
				 		"tipNum": "5", 
				 		"tipTxt": "We recommend that you use a grinder that is designed specifically with vaporizers in mind. Another factor will be how much botanical you load as well as the temperature. The higher the temperature, the more vapor will be released. It will also be thicker and more visible.",
				 		"TipImg" : "images/vapes/volcano2.png"
				 	},
				 	{ 
				 		"tipNum": "6", 
				 		"tipTxt": "Finding the right temperature can be daunting at first. To really see what works for you, start out at a low temperature. From there you can increase your setting until you find what produces the best vapor you. You will get more control over your temperature with the digital but the classic still produces quality vapor.",
				 		"TipImg" : "images/vapes/volcano2.png"
				 	},
				 	{ 
				 		"tipNum": "7", 
				 		"tipTxt": "Once your botanical is producing no more vapor and is an even brown color, you can next use it in baking.",
				 		"TipImg" : "images/vapes/volcano2.png"
				 	},
				 	{ 
				 		"tipNum": "8", 
				 		"tipTxt": "One often overlooked fact is that the parts dirty at different rates. For example the bottom screen of the filling chamber takes a long time to clog up, because the air is blowing through, not the vaporized plant material. Knowing this you can spread out some of your cleaning tasks to make it less of a burden.",
				 		"TipImg" : "images/vapes/volcano2.png"
				 	},
				 	{ 
				 		"tipNum": "9", 
				 		"tipTxt": "A Tip goes here",
				 		"TipImg" : "images/vapes/volcano2.png"
				 	},
				 	{ 
				 		"tipNum": "10", 
				 		"tipTxt": "A Tip goes here",
				 		"TipImg" : "images/vapes/volcano2.png"
				 	},
				 	{ 
				 		"tipNum": "11", 
				 		"tipTxt": "A Tip goes here",
				 		"TipImg" : "images/vapes/volcano2.png"
				 	},
				 	{ 
				 		"tipNum": "12", 
				 		"tipTxt": "A Tip goes here",
				 		"TipImg" : "images/vapes/volcano2.png"
				 	}
			 	]
			},
			{
				"VTipId": 13,
				"VName": "Volcano Classic",
				"VTipList": [
				 	{ 
				 		"tipNum": "1", 
				 		"tipTxt": "The active ingredient in popular herbal mixtures vaporizes when heated to between 338 F and 372 F. This is not hot enough for the plant material to burn so many of the toxins associated with smoking are not released. On the original Volcano vaporizer, this range is between 4.25 and 6.",
				 		"TipImg" : "images/vapes/volcano1.png"
				 	},
				 	{ 
				 		"tipNum": "2", 
				 		"tipTxt": "Some folks prefer a lighter less dense vapor - they'll set at 5.5 and get a very light mist in the bag, and probably get more bag fillings.",
				 		"TipImg" : "images/vapes/volcano1.png"
				 	},
				 	{ 
				 		"tipNum": "3", 
				 		"tipTxt": "If you prefer a smokier experience, start at 6.5 and ratchet it up a notch with each successive bag filling.",
				 		"TipImg" : "images/vapes/volcano1.png"
				 	},
				 	{ 
				 		"tipNum": "4", 
				 		"tipTxt": "One often overlooked fact is that the parts dirty at different rates. For example the bottom screen of the filling chamber takes a long time to clog up, because the air is blowing through, not the vaporized plant material. Knowing this you can spread out some of your cleaning tasks to make it less of a burden.",
				 		"TipImg" : "images/vapes/volcano1.png"
				 	},
				 	{ 
				 		"tipNum": "5", 
				 		"tipTxt": "Finding the right temperature can be daunting at first. To really see what works for you, start out at a low temperature. From there you can increase your setting until you find what produces the best vapor you. You will get more control over your temperature with the digital but the classic still produces quality vapor.",
				 		"TipImg" : "images/vapes/volcano1.png"
				 	},
				 	{ 
				 		"tipNum": "6", 
				 		"tipTxt": "We recommend that you use a grinder that is designed specifically with vaporizers in mind. Another factor will be how much botanical you load as well as the temperature. The higher the temperature, the more vapor will be released. It will also be thicker and more visible.",
				 		"TipImg" : "images/vapes/volcano1.png"
				 	},
				 	{ 
				 		"tipNum": "7", 
				 		"tipTxt": "Once your botanical is producing no more vapor and is an even brown color, you can next use it in baking.",
				 		"TipImg" : "images/vapes/volcano1.png"
				 	},
				 	{ 
				 		"tipNum": "8", 
				 		"tipTxt": "If you leave the vapor in the balloons for two long, even a few hours and especially over time, the bags get sticky and smell funny.",
				 		"TipImg" : "images/vapes/volcano1.png"
				 	},
				 	{ 
				 		"tipNum": "9", 
				 		"tipTxt": "A Tip goes here",
				 		"TipImg" : "images/vapes/volcano1.png"
				 	},
				 	{ 
				 		"tipNum": "10", 
				 		"tipTxt": "A Tip goes here",
				 		"TipImg" : "images/vapes/volcano1.png"
				 	},
				 	{ 
				 		"tipNum": "11", 
				 		"tipTxt": "A Tip goes here",
				 		"TipImg" : "images/vapes/volcano1.png"
				 	},
				 	{ 
				 		"tipNum": "12",				 		
				 		"tipTxt": "Finding the right temperature can be daunting at first. To really see what works for you, start out at a low temperature. From there you can increase your setting until you find what produces the best vapor you. You will get more control over your temperature with the digital but the classic still produces quality vapor.",
				 		"TipImg" : "images/vapes/volcano1.png"
				 	}
			 	]
			},
			{
				"VTipId": 14,
				"VName": "Plenty",
				"VTipList": [
				 	{ 
				 		"tipNum": "1", 
				 		"tipTxt": "When you pack the herb chamber don't be shy. Try layering the entire bottom screen and then put even more on top. You may find leaving the pad out while vaping and just adding more material gives you some really thick vapor, but the quality and smoothness still remains.",
				 		"TipImg" : "images/vapes/plenty1.png"
				 	},
				 	{ 
				 		"tipNum": "2", 
				 		"tipTxt": "Always cap the mouthpiece with your thumb or finger. If you look at the mouthpiece closely while the Plenty is on you can actually see vapor creeping out of the mouthpiece. So if you aren't constantly pulling you are slowly losing some precious vapor.",
				 		"TipImg" : "images/vapes/plenty1.png"
				 	},
				 	{ 
				 		"tipNum": "3", 
				 		"tipTxt": "When you feel like your material is on its last legs after stirring one or multiple times, try turning your heat level up to max. You can usually get some nice pulls at the end if you do this.",
				 		"TipImg" : "images/vapes/plenty1.png"
				 	},
				 	{ 
				 		"tipNum": "4", 
				 		"tipTxt": "After turning off the Plenty be sure to give it some time to cool down before clearing the herb chamber or storing it away. Also make sure the vent on the bottom is not blocked, so that it can cool down properly.",
				 		"TipImg" : "images/vapes/plenty1.png"
				 	},
				 	{ 
				 		"tipNum": "5", 
				 		"tipTxt": "When you clean out the herb chamber be sure to use the heavy duty brush that they include. Just dumping the material out is not going to do the trick, even if it looks like it did. Also be sure to really jam the brush into the edges around the chamber, both the bottom and top. That is the easiest place for used material to build up.",
				 		"TipImg" : "images/vapes/plenty1.png"
				 	},
				 	{ 
				 		"tipNum": "6", 
				 		"tipTxt": "If you're using it by yourself, just put a pinch of herbs at the bottom and then take the Liquid Pad (included in packaging) and put it on top of the herbs, to fill up the rest of the space inside the chamber, so that when you screw the coil piece on top, all of the contents become packed snugly inside and the herbs are pressed evenly across the bottom screen.",
				 		"TipImg" : "images/vapes/plenty1.png"
				 	},
				 	{ 
				 		"tipNum": "7", 
				 		"tipTxt": "If you plan to use your Plenty vaporizer for a group setting, fill the herb chamber completely because the herbs cannot move around when you move the unit different directions. If you pack it completely, you don't need to worry about slipping and sliding. They will stay pressed against the screen evenly for the whole time.",
				 		"TipImg" : "images/vapes/plenty1.png"
				 	},
				 	{ 
				 		"tipNum": "8", 
				 		"tipTxt": "A Tip goes here",
				 		"TipImg" : "images/vapes/plenty1.png"
				 	},
				 	{ 
				 		"tipNum": "9", 
				 		"tipTxt": "A Tip goes here",
				 		"TipImg" : "images/vapes/plenty1.png"
				 	},
				 	{ 
				 		"tipNum": "10", 
				 		"tipTxt": "A Tip goes here",
				 		"TipImg" : "images/vapes/plenty1.png"
				 	},
				 	{ 
				 		"tipNum": "11", 
				 		"tipTxt": "A Tip goes here",
				 		"TipImg" : "images/vapes/plenty1.png"
				 	},
				 	{ 
				 		"tipNum": "12", 
				 		"tipTxt": "A Tip goes here",
				 		"TipImg" : "images/vapes/plenty1.png"
				 	}
			 	]
			},
			{
				"VTipId": 15,
				"VName": "Ascent",
				"VTipList": [
				 	{ 
				 		"tipNum": "1", 
				 		"tipTxt": "A great option on the Ascent is that it allows you to pre-program a series of temeprature levels before you start your session. It will then stay at each level temporarily before automatically changing to the next temperature value in the series.",
				 		"TipImg" : "images/vapes/ascent1.png"
				 	},
				 	{ 
				 		"tipNum": "2", 
				 		"tipTxt": "Vapor is not smoke, so it's ok to hold in.",
				 		"TipImg" : "images/vapes/ascent1.png"
				 	},
				 	{ 
				 		"tipNum": "3", 
				 		"tipTxt": "Use a pipe cleaner after every single use to brush debris from the inside of the bowl, around the rim, and the bottom of the glass screen, it works great and helps cut down on how often I have to soak my glass sets.",
				 		"TipImg" : "images/vapes/ascent1.png"
				 	},
				 	{ 
				 		"tipNum": "4", 
				 		"tipTxt": "You can swab out your bowl with rubbing alcohol every few uses to prevent it from browning, if you don't you'll need a dabber.",
				 		"TipImg" : "images/vapes/ascent1.png"
				 	},
				 	{ 
				 		"tipNum": "5", 
				 		"tipTxt": "Never try and stick anything down your screen end to try and clean debris out, just let it soak. The screen is very tiny, and the glass itself it very fragile, if you poke too hard, and move around too fast you could end up breaking it.",
				 		"TipImg" : "images/vapes/ascent1.png"
				 	},
				 	{ 
				 		"tipNum": "6", 
				 		"tipTxt": "If you've ever wondered how much weed to put in your DaVinci, well that's a personal preference, but never ever pack it all the way up, to the point where you can't push the bud down",
				 		"TipImg" : "images/vapes/ascent1.png"
				 	},
				 	{ 
				 		"tipNum": "7", 
				 		"tipTxt": "If it's packed too tight, the center doesn't heat, and most often times you'll find that it's extremely hard to take hits, you have to realized that the vaporizer is pulling air from the bottom of the bowl, so you need airflow.",
				 		"TipImg" : "images/vapes/ascent1.png"
				 	},
				 	{ 
				 		"tipNum": "8", 
				 		"tipTxt": "Some people own this vaporizer and don't even realize that it has a buddy rim system so you can share your vaporizer with other people, and not have to have oral contact. When you share your Ascent, use the rim, and pull the straw out for your friends.",
				 		"TipImg" : "images/vapes/ascent1.png"
				 	},
				 	{ 
				 		"tipNum": "9", 
				 		"tipTxt": "If you own a car, and love to vape, you more than 100% need to get the DaVinci Ascent Car Charger. Nothing is worse than having a vaporizer die on you in the middle of a session.",
				 		"TipImg" : "images/vapes/ascent1.png"
				 	},
				 	{ 
				 		"tipNum": "10", 
				 		"tipTxt": "A Tip goes here",
				 		"TipImg" : "images/vapes/ascent1.png"
				 	},
				 	{ 
				 		"tipNum": "11", 
				 		"tipTxt": "A Tip goes here",
				 		"TipImg" : "images/vapes/ascent1.png"
				 	},
				 	{ 
				 		"tipNum": "12", 
				 		"tipTxt": "A Tip goes here",
				 		"TipImg" : "images/vapes/ascent1.png"
				 	}
			 	]
			},
			{
				"VTipId": 16,
				"VName": "PUFFiT 2",
				"VTipList": [
				 	{ 
				 		"tipNum": "1", 
				 		"tipTxt": "Vapor is not smoke, so it's ok to hold in.",
				 		"TipImg" : "images/vapes/puffit1.png"
				 	},
				 	{ 
				 		"tipNum": "2", 
				 		"tipTxt": "If you just stick whole buds in there, you're not maximizing the ingredients of your herb. The finer you pulverize your herb, the more THC and CBD you can activate.",
				 		"TipImg" : "images/vapes/puffit1.png"
				 	},
				 	{ 
				 		"tipNum": "3", 
				 		"tipTxt": "Pack the PUFFiT chamber loosely with your dry blends. Most of the time when someone says they aren't getting good results it's because they have loaded the herb chamber tightly like they would a classic water pipe or dugout.",
				 		"TipImg" : "images/vapes/puffit1.png"
				 	},
				 	{ 
				 		"tipNum": "4", 
				 		"tipTxt": "Inhale gently and slowly once the green light goes on and you'll get a nice tasty cloud. You can even take short little sips rather than large rips.",
				 		"TipImg" : "images/vapes/puffit1.png"
				 	},
				 	{ 
				 		"tipNum": "5", 
				 		"tipTxt": "Before and after loading the herb chamber, be sure to dust out the chamber for any residue from any previous sessions.",
				 		"TipImg" : "images/vapes/puffit1.png"
				 	},
				 	{ 
				 		"tipNum": "6", 
				 		"tipTxt": "One issue that prevents optimal discretion is the time it takes to heat up the Puffit 2. However, this problem can be circumvented by heating the vaporizer out of sight until it is ready to be used.",
				 		"TipImg" : "images/vapes/puffit1.png"
				 	},
				 	{ 
				 		"tipNum": "7", 
				 		"tipTxt": "The concentrate chamber does become messy, so we recommend cleaning it after each use.",
				 		"TipImg" : "images/vapes/puffit1.png"
				 	},
				 	{ 
				 		"tipNum": "8", 
				 		"tipTxt": "The white button you see on the front is your heat-preference light. Press to range between temperatures from 320 degrees to 415 degrees Fahrenheit.",
				 		"TipImg" : "images/vapes/puffit1.png"
				 	},
				 	{ 
				 		"tipNum": "9", 
				 		"tipTxt": "A Tip goes here",
				 		"TipImg" : "images/vapes/puffit1.png"
				 	},
				 	{ 
				 		"tipNum": "10", 
				 		"tipTxt": "A Tip goes here",
				 		"TipImg" : "images/vapes/puffit1.png"
				 	},
				 	{ 
				 		"tipNum": "11", 
				 		"tipTxt": "A Tip goes here",
				 		"TipImg" : "images/vapes/puffit1.png"
				 	},
				 	{ 
				 		"tipNum": "12", 
				 		"tipTxt": "A Tip goes here",
				 		"TipImg" : "images/vapes/puffit1.png"
				 	}
			 	]
			},
			{
				"VTipId": 17,
				"VName": "Haze",
				"VTipList": [
				 	{ 
				 		"tipNum": "1", 
				 		"tipTxt": "The Haze is designed to allow you to enjoy both concentrates and dry herbs with it's two chambers. You can also use dry herb for both chambers if you like extending your session and giving you the option of more tastes and effects with less hassle.",
				 		"TipImg" : "images/vapes/haze1.png"
				 	},
				 	{ 
				 		"tipNum": "2", 
				 		"tipTxt": "Haze Technologies helped ease the pain of not winning an Oscar by including the Haze vaporizer in the ACADEMY AWARDS Oscar Nominees gift bags.",
				 		"TipImg" : "images/vapes/haze1.png"
				 	},
				 	{ 
				 		"tipNum": "3", 
				 		"tipTxt": "Vapor is not smoke, so it's ok to hold in.",
				 		"TipImg" : "images/vapes/haze1.png"
				 	},
				 	{ 
				 		"tipNum": "4", 
				 		"tipTxt": "Bring an extra battery and you ve got 2+ hours before needing to charge.",
				 		"TipImg" : "images/vapes/haze1.png"
				 	},
				 	{ 
				 		"tipNum": "5", 
				 		"tipTxt": "At the size and weight of a flask of whiskey, this vaporizer is more suited to a bag, purse or jacket pocket rather than your pants pocket.",
				 		"TipImg" : "images/vapes/haze1.png"
				 	},
				 	{ 
				 		"tipNum": "6", 
				 		"tipTxt": "The best way to clean the path is with alcohol soaked Q-tip. Simply remove the mouthpiece and insert the alcohol soaked Q-tip into the air path. It will clean all residue within seconds.",
				 		"TipImg" : "images/vapes/haze1.png"
				 	},
				 	{ 
				 		"tipNum": "7", 
				 		"tipTxt": "Haze is using a controlled system for temperatures. The approximate temperatures range 250-275 , 350 – 370, 375- 410, 410-470F. When there is wax content with cans, the system uses a higher value for heating. With conduction screen at low temperature, you will experience the lower end of the range.",
				 		"TipImg" : "images/vapes/haze1.png"
				 	},
				 	{ 
				 		"tipNum": "8", 
				 		"tipTxt": "If you put the unit down without activity (no draws), the unit will shut itself off.",
				 		"TipImg" : "images/vapes/haze1.png"
				 	},
				 	{ 
				 		"tipNum": "9", 
				 		"tipTxt": "The Haze heating element is stainless steel. All metal parts inside and accessories are surgical grade stainless steel (the most expensive and high end steel version). Including the cans, screens, mouthpiece, bowls etc.",
				 		"TipImg" : "images/vapes/haze1.png"
				 	},
				 	{ 
				 		"tipNum": "10", 
				 		"tipTxt": "Convection screen will give you a taste, will medicate you 100% without much physical or visible vapor output at setting 3. This setting may be a bit low for some people, at setting 4 the haze will give you more visible vapor.",
				 		"TipImg" : "images/vapes/haze1.png"
				 	},
				 	{ 
				 		"tipNum": "11", 
				 		"tipTxt": "If you use the conduction screens (the open side ones) at setting 3, you will see that it is the optimum temperature setting for the dry herb for most people. The conduction screen with setting 4 will produce much thicker vapor, but can be a bit on the hot side for some people.",
				 		"TipImg" : "images/vapes/haze1.png"
				 	},
				 	{ 
				 		"tipNum": "12", 
				 		"tipTxt": "Most people use these cans to pre-pack the dry herb and take several cans out to concerts parks etc and they love the performance. So they don't have to deal with prep, dump, grind when they are out.",
				 		"TipImg" : "images/vapes/haze1.png"
				 	}
			 	]
			},
			{
				"VTipId": 18,
				"VName": "Firefly",
				"VTipList": [
				 	{ 
				 		"tipNum": "1", 
				 		"tipTxt": "Although there is no temperature setting on the Firefly, you can control the relative temperature by changing your draw rate and length. With a little practice, ths shoudl allow you to enjoy low, medium or high temperature effects.",
				 		"TipImg" : "images/vapes/firefly1.png"
				 	},
				 	{ 
				 		"tipNum": "2", 
				 		"tipTxt": "Vapor is not smoke, so it's ok to hold in.",
				 		"TipImg" : "images/vapes/firefly1.png"
				 	},
				 	{ 
				 		"tipNum": "3", 
				 		"tipTxt": "Hold the button down, wait for orange glow and start slow long draw, letting off the button about half way through. By varying technique you can get whatever type of vapor your heart desires.",
				 		"TipImg" : "images/vapes/firefly1.png"
				 	},
				 	{ 
				 		"tipNum": "4", 
				 		"tipTxt": "You really don't want to fill it up any higher than the rim of the bowl, and don't pack it too tightly. Do a medium pack and it'll work great.",
				 		"TipImg" : "images/vapes/firefly1.png"
				 	},
				 	{ 
				 		"tipNum": "5", 
				 		"tipTxt": "Get a bottle of isopropyl alcohol and some paper towels and clean the Firefly out regularly. When burned weed starts to accumulate even a little, it gets in the way and ruins the perfect seal that is made when you put to the two halves together.",
				 		"TipImg" : "images/vapes/firefly1.png"
				 	},
				 	{ 
				 		"tipNum": "6", 
				 		"tipTxt": "Order up an external battery charger and an extra battery. You are going to need to switch batteries a lot.",
				 		"TipImg" : "images/vapes/firefly1.png"
				 	},
				 	{ 
				 		"tipNum": "7", 
				 		"tipTxt": "It works like a charm when you pre heat for about 4 seconds and pull for about 8-10 seconds. Then you can let off the button and keep hitting this until you start to feel your lungs expand and the vapor heats your throat up.",
				 		"TipImg" : "images/vapes/firefly1.png"
				 	},
				 	{ 
				 		"tipNum": "8", 
				 		"tipTxt": "A Tip goes here",
				 		"TipImg" : "images/vapes/firefly1.png"
				 	},
				 	{ 
				 		"tipNum": "9", 
				 		"tipTxt": "A Tip goes here",
				 		"TipImg" : "images/vapes/firefly1.png"
				 	},
				 	{ 
				 		"tipNum": "10", 
				 		"tipTxt": "A Tip goes here",
				 		"TipImg" : "images/vapes/firefly1.png"
				 	},
				 	{ 
				 		"tipNum": "11", 
				 		"tipTxt": "A Tip goes here",
				 		"TipImg" : "images/vapes/firefly1.png"
				 	},
				 	{ 
				 		"tipNum": "12", 
				 		"tipTxt": "A Tip goes here",
				 		"TipImg" : "images/vapes/firefly1.png"
				 	}
			 	]
			},
			{
				"VTipId": 19,
				"VName": "Hot Box",
				"VTipList": [
				 	{ 
				 		"tipNum": "1", 
				 		"tipTxt": "Although there is no actual temperature setting on the Hot Box, you can control the relative temperature by changing your draw rate and length. With a little practice, ths shoudl allow you to enjoy low, medium or high temperature effects. To enjoy low temp effects and flavors, begin your draw as the device heats up from it's off state at the beginning of your session.",
				 		"TipImg" : "images/vapes/hotbox1.png"
				 	},
				 	{ 
				 		"tipNum": "2", 
				 		"tipTxt": "Vapor is not smoke, so it's ok to hold in.",
				 		"TipImg" : "images/vapes/hotbox1.png"
				 	},
				 	{ 
				 		"tipNum": "3", 
				 		"tipTxt": "A Tip goes here",
				 		"TipImg" : "images/vapes/hotbox1.png"
				 	},
				 	{ 
				 		"tipNum": "4", 
				 		"tipTxt": "A Tip goes here",
				 		"TipImg" : "images/vapes/hotbox1.png"
				 	},
				 	{ 
				 		"tipNum": "5", 
				 		"tipTxt": "A Tip goes here",
				 		"TipImg" : "images/vapes/hotbox1.png"
				 	},
				 	{ 
				 		"tipNum": "6", 
				 		"tipTxt": "A Tip goes here",
				 		"TipImg" : "images/vapes/hotbox1.png"
				 	},
				 	{ 
				 		"tipNum": "7", 
				 		"tipTxt": "A Tip goes here",
				 		"TipImg" : "images/vapes/hotbox1.png"
				 	},
				 	{ 
				 		"tipNum": "8", 
				 		"tipTxt": "A Tip goes here",
				 		"TipImg" : "images/vapes/hotbox1.png"
				 	},
				 	{ 
				 		"tipNum": "9", 
				 		"tipTxt": "A Tip goes here",
				 		"TipImg" : "images/vapes/hotbox1.png"
				 	},
				 	{ 
				 		"tipNum": "10", 
				 		"tipTxt": "A Tip goes here",
				 		"TipImg" : "images/vapes/hotbox1.png"
				 	},
				 	{ 
				 		"tipNum": "11", 
				 		"tipTxt": "A Tip goes here",
				 		"TipImg" : "images/vapes/hotbox1.png"
				 	},
				 	{ 
				 		"tipNum": "12", 
				 		"tipTxt": "A Tip goes here",
				 		"TipImg" : "images/vapes/hotbox1.png"
				 	}
			 	]
			},
			{
				"VTipId": 20,
				"VName": "Vapir Rise 2.0",
				"VTipList": [
				 	{ 
				 		"tipNum": "1", 
				 		"tipTxt": "Vapor is not smoke, so it's ok to hold in.",
				 		"TipImg" : "images/vapes/vapirrise1.png"
				 	},
				 	{ 
				 		"tipNum": "2", 
				 		"tipTxt": "A Tip goes here",
				 		"TipImg" : "images/vapes/vapirrise1.png"
				 	},
				 	{ 
				 		"tipNum": "3", 
				 		"tipTxt": "A Tip goes here",
				 		"TipImg" : "images/vapes/vapirrise1.png"
				 	},
				 	{ 
				 		"tipNum": "4", 
				 		"tipTxt": "A Tip goes here",
				 		"TipImg" : "images/vapes/vapirrise1.png"
				 	},
				 	{ 
				 		"tipNum": "5", 
				 		"tipTxt": "A Tip goes here",
				 		"TipImg" : "images/vapes/vapirrise1.png"
				 	},
				 	{ 
				 		"tipNum": "6", 
				 		"tipTxt": "A Tip goes here",
				 		"TipImg" : "images/vapes/vapirrise1.png"
				 	},
				 	{ 
				 		"tipNum": "7", 
				 		"tipTxt": "A Tip goes here",
				 		"TipImg" : "images/vapes/vapirrise1.png"
				 	},
				 	{ 
				 		"tipNum": "8", 
				 		"tipTxt": "A Tip goes here",
				 		"TipImg" : "images/vapes/vapirrise1.png"
				 	},
				 	{ 
				 		"tipNum": "9", 
				 		"tipTxt": "A Tip goes here",
				 		"TipImg" : "images/vapes/vapirrise1.png"
				 	},
				 	{ 
				 		"tipNum": "10", 
				 		"tipTxt": "A Tip goes here",
				 		"TipImg" : "images/vapes/vapirrise1.png"
				 	},
				 	{ 
				 		"tipNum": "11", 
				 		"tipTxt": "A Tip goes here",
				 		"TipImg" : "images/vapes/vapirrise1.png"
				 	},
				 	{ 
				 		"tipNum": "12", 
				 		"tipTxt": "A Tip goes here",
				 		"TipImg" : "images/vapes/vapirrise1.png"
				 	}
			 	]
			},
			{
				"VTipId": 21,
				"VName": "Pax",
				"VTipList": [
				 	{ 
				 		"tipNum": "1", 
				 		"tipTxt": "One of the main things that affects how much vapor you get is how finely you grind your material and how you pack the oven. The grind consistency that everyone is used to from a common 2-piece or 4-piece grinder will work with most vaporizers, but if you really want maximum performance you need to grind your herbs even finer, almost to a powder or the consistency of coarse sand. If you have a coffee grinder lying around you could technically use that to try this out, but be sure to grind in short bursts.",
				 		"TipImg" : "images/vapes/pax1.png"
				 	},
				 	{ 
				 		"tipNum": "2", 
				 		"tipTxt": "The recommended way to use this vape for maximum vapor production is with a fully packed oven. Depending on how finely your material is ground up the amount needed to fill the chamber ranges from 0.3g to 0.4g. When you fully pack you can expect approximately 20 full draws before your herbs are spent.",
				 		"TipImg" : "images/vapes/pax1.png"
				 	},
				 	{ 
				 		"tipNum": "3", 
				 		"tipTxt": "The PAX's screen plays a critical role in the quality of your vapor. If you notice a change in the quality of your vapor, your screen is probably due for a cleaning.",
				 		"TipImg" : "images/vapes/pax1.png"
				 	},
				 	{ 
				 		"tipNum": "4", 
				 		"tipTxt": "Drawing a lot of air through the device won't create more vapor, you will just be inhaling hot air. Instead, allow the vapor to form in the oven to produce bigger clouds. Remember to give PAX a few seconds in between your next draw to heat your herb again and create more vapor in the oven.",
				 		"TipImg" : "images/vapes/pax1.png"
				 	},
				 	{ 
				 		"tipNum": "5", 
				 		"tipTxt": "Most PAXers like to start on the low or medium temperature setting and work their way up to the highest temperature before finishing.",
				 		"TipImg" : "images/vapes/pax1.png"
				 	},
				 	{ 
				 		"tipNum": "6", 
				 		"tipTxt": "Vapor is not smoke, so it's ok to hold in.",
				 		"TipImg" : "images/vapes/pax1.png"
				 	},
				 	{ 
				 		"tipNum": "7", 
				 		"tipTxt": "A Tip goes here",
				 		"TipImg" : "images/vapes/pax1.png"
				 	},
				 	{ 
				 		"tipNum": "8", 
				 		"tipTxt": "A Tip goes here",
				 		"TipImg" : "images/vapes/pax1.png"
				 	},
				 	{ 
				 		"tipNum": "9", 
				 		"tipTxt": "A Tip goes here",
				 		"TipImg" : "images/vapes/pax1.png"
				 	},
				 	{ 
				 		"tipNum": "10", 
				 		"tipTxt": "A Tip goes here",
				 		"TipImg" : "images/vapes/pax1.png"
				 	},
				 	{ 
				 	 	"tipNum": "11", 
				 		"tipTxt": "A Tip goes here",
				 		"TipImg" : "images/vapes/pax1.png"
				 	},
				 	{ 
				 		"tipNum": "12", 
				 		"tipTxt": "A Tip goes here",
				 		"TipImg" : "images/vapes/pax1.png"
				 	}
			 	]
			},
			{
				"VTipId": 22,
				"VName": "Pax 2",
				"VTipList": [
				 	{ 
				 		"tipNum": "1", 
				 		"tipTxt": "One of the main things that affects how much vapor you get is how finely you grind your material and how you pack the oven. The grind consistency that everyone is used to from a common 2-piece or 4-piece grinder will work with most vaporizers, but if you really want maximum performance you need to grind your herbs even finer, almost to a powder or the consistency of coarse sand. If you have a coffee grinder lying around you could technically use that to try this out, but be sure to grind in short bursts.",
				 		"TipImg" : "images/vapes/pax2black.png"
				 	},
				 	{ 
				 		"tipNum": "2", 
				 		"tipTxt": "The recommended way to use this vape for maximum vapor production is with a fully packed oven. Depending on how finely your material is ground up the amount needed to fill the chamber ranges from 0.3g to 0.4g. When you fully pack you can expect approximately 20 full draws before your herbs are spent.",
				 		"TipImg" : "images/vapes/pax2black.png"
				 	},
				 	{ 
				 		"tipNum": "3", 
				 		"tipTxt": "The PAX's screen plays a critical role in the quality of your vapor. If you notice a change in the quality of your vapor, your screen is probably due for a cleaning.",
				 		"TipImg" : "images/vapes/pax2black.png"
				 	},
				 	{ 
				 		"tipNum": "4", 
				 		"tipTxt": "Drawing a lot of air through the device won't create more vapor, you will just be inhaling hot air. Instead, allow the vapor to form in the oven to produce bigger clouds. Remember to give PAX a few seconds in between your next draw to heat your herb again and create more vapor in the oven.",
				 		"TipImg" : "images/vapes/pax2black.png"
				 	},
				 	{ 
				 		"tipNum": "5", 
				 		"tipTxt": "Most PAXers like to start on the low or medium temperature setting and work their way up to the highest temperature before finishing.",
				 		"TipImg" : "images/vapes/pax2black.png"
				 	},
				 	{ 
				 		"tipNum": "6", 
				 		"tipTxt": "Vapor is not smoke, so it's ok to hold in.",
				 		"TipImg" : "images/vapes/pax2black.png"
				 	},
				 	{ 
				 		"tipNum": "7", 
				 		"tipTxt": "A Tip goes here",
				 		"TipImg" : "images/vapes/pax2black.png"
				 	},
				 	{ 
				 		"tipNum": "8", 
				 		"tipTxt": "A Tip goes here",
				 		"TipImg" : "images/vapes/pax2black.png"
				 	},
				 	{ 
				 		"tipNum": "9", 
				 		"tipTxt": "A Tip goes here",
				 		"TipImg" : "images/vapes/pax2black.png"
				 	},
				 	{ 
				 		"tipNum": "10", 
				 		"tipTxt": "A Tip goes here",
				 		"TipImg" : "images/vapes/pax2black.png"
				 	},
				 	{ 
				 		"tipNum": "11", 
				 		"tipTxt": "A Tip goes here",
				 		"TipImg" : "images/vapes/pax2black.png"
				 	},
				 	{ 
				 		"tipNum": "12", 
				 		"tipTxt": "A Tip goes here",
				 		"TipImg" : "images/vapes/pax2black.png"
				 	}
			 	]
			},
			{
				"VTipId": 23,
				"VName": "Phantom",
				"VTipList": [
				 	{ 
				 		"tipNum": "1", 
				 		"tipTxt": "Without combustion none of the associated noxious gasses such as CO and CO2 are created. Vaporization releases the active ingredients of organic matter without combustion.",
				 		"TipImg" : "images/vapes/phantom.png"
				 	},
				 	{ 
				 		"tipNum": "2", 
				 		"tipTxt": " Apply 3-5 drops of essential oil to the aromapad by tapping your finger on the back of the bottle. Add a few extra drops for larger rooms.",
				 		"TipImg" : "images/vapes/phantom.png"
				 	},
				 	{ 
				 		"tipNum": "3", 
				 		"tipTxt": "Vapor is not smoke, so it's ok to hold in.",
				 		"TipImg" : "images/vapes/phantom.png"
				 	},
				 	{ 
				 		"tipNum": "4", 
				 		"tipTxt": "A Tip goes here",
				 		"TipImg" : "images/vapes/phantom.png"
				 	},
				 	{ 
				 		"tipNum": "5", 
				 		"tipTxt": "A Tip goes here",
				 		"TipImg" : "images/vapes/phantom.png"
				 	},
				 	{ 
				 		"tipNum": "6", 
				 		"tipTxt": "A Tip goes here",
				 		"TipImg" : "images/vapes/phantom.png"
				 	},
				 	{ 
				 		"tipNum": "7", 
				 		"tipTxt": "A Tip goes here",
				 		"TipImg" : "images/vapes/phantom.png"
				 	},
				 	{ 
				 		"tipNum": "8", 
				 		"tipTxt": "A Tip goes here",
				 		"TipImg" : "images/vapes/phantom.png"
				 	},
				 	{ 
				 		"tipNum": "9", 
				 		"tipTxt": "A Tip goes here",
				 		"TipImg" : "images/vapes/phantom.png"
				 	},
				 	{ 
				 		"tipNum": "10", 
				 		"tipTxt": "A Tip goes here",
				 		"TipImg" : "images/vapes/phantom.png"
				 	},
				 	{ 
				 		"tipNum": "11", 
				 		"tipTxt": "A Tip goes here",
				 		"TipImg" : "images/vapes/phantom.png"
				 	},
				 	{ 
				 		"tipNum": "12", 
				 		"tipTxt": "A Tip goes here",
				 		"TipImg" : "images/vapes/phantom.png"
				 	}
			 	]
			},
			{
				"VTipId": 24,
				"VName": "Alfa",
				"VTipList": [
				 	{ 
				 		"tipNum": "1", 
				 		"tipTxt": "A Tip goes here",
				 		"TipImg" : "images/vapes/alfa-vaporizer-goboof.png"
				 	},
				 	{ 
				 		"tipNum": "2", 
				 		"tipTxt": "A Tip goes here",
				 		"TipImg" : "images/vapes/alfa-vaporizer-goboof.png"
				 	},
				 	{ 
				 		"tipNum": "3", 
				 		"tipTxt": "A Tip goes here",
				 		"TipImg" : "images/vapes/alfa-vaporizer-goboof.png"
				 	},
				 	{ 
				 		"tipNum": "4", 
				 		"tipTxt": "A Tip goes here",
				 		"TipImg" : "images/vapes/alfa-vaporizer-goboof.png"
				 	},
				 	{ 
				 		"tipNum": "5", 
				 		"tipTxt": "A Tip goes here",
				 		"TipImg" : "images/vapes/alfa-vaporizer-goboof.png"
				 	},
				 	{ 
				 		"tipNum": "6", 
				 		"tipTxt": "A Tip goes here",
				 		"TipImg" : "images/vapes/alfa-vaporizer-goboof.png"
				 	},
				 	{ 
				 		"tipNum": "7", 
				 		"tipTxt": "A Tip goes here",
				 		"TipImg" : "images/vapes/alfa-vaporizer-goboof.png"
				 	},
				 	{ 
				 		"tipNum": "8", 
				 		"tipTxt": "A Tip goes here",
				 		"TipImg" : "images/vapes/alfa-vaporizer-goboof.png"
				 	},
				 	{ 
				 		"tipNum": "9", 
				 		"tipTxt": "A Tip goes here",
				 		"TipImg" : "images/vapes/alfa-vaporizer-goboof.png"
				 	},
				 	{ 
				 		"tipNum": "10", 
				 		"tipTxt": "A Tip goes here",
				 		"TipImg" : "images/vapes/alfa-vaporizer-goboof.png"
				 	},
				 	{ 
				 		"tipNum": "11", 
				 		"tipTxt": "A Tip goes here",
				 		"TipImg" : "images/vapes/alfa-vaporizer-goboof.png"
				 	},
				 	{ 
				 		"tipNum": "12", 
				 		"tipTxt": "A Tip goes here",
				 		"TipImg" : "images/vapes/alfa-vaporizer-goboof.png"
				 	}
			 	]
			},
			{
				"VTipId": 25,
				"VName": "Summit",
				"VTipList": [
				 	{ 
				 		"tipNum": "1", 
				 		"tipTxt": "A Tip goes here",
				 		"TipImg" : "images/vapes/summit-green-600x600.png"
				 	},
				 	{ 
				 		"tipNum": "2", 
				 		"tipTxt": "A Tip goes here",
				 		"TipImg" : "images/vapes/summit-green-600x600.png"
				 	},
				 	{ 
				 		"tipNum": "3", 
				 		"tipTxt": "A Tip goes here",
				 		"TipImg" : "images/vapes/summit-green-600x600.png"
				 	},
				 	{ 
				 		"tipNum": "4", 
				 		"tipTxt": "A Tip goes here",
				 		"TipImg" : "images/vapes/summit-green-600x600.png"
				 	},
				 	{ 
				 		"tipNum": "5", 
				 		"tipTxt": "A Tip goes here",
				 		"TipImg" : "images/vapes/summit-green-600x600.png"
				 	},
				 	{ 
				 		"tipNum": "6", 
				 		"tipTxt": "A Tip goes here",
				 		"TipImg" : "images/vapes/summit-green-600x600.png"
				 	},
				 	{ 
				 		"tipNum": "7", 
				 		"tipTxt": "A Tip goes here",
				 		"TipImg" : "images/vapes/summit-green-600x600.png"
				 	},
				 	{ 
				 		"tipNum": "8", 
				 		"tipTxt": "A Tip goes here",
				 		"TipImg" : "images/vapes/summit-green-600x600.png"
				 	},
				 	{ 
				 		"tipNum": "9", 
				 		"tipTxt": "A Tip goes here",
				 		"TipImg" : "images/vapes/summit-green-600x600.png"
				 	},
				 	{ 
				 		"tipNum": "10", 
				 		"tipTxt": "A Tip goes here",
				 		"TipImg" : "images/vapes/summit-green-600x600.png"
				 	},
				 	{ 
				 		"tipNum": "11", 
				 		"tipTxt": "A Tip goes here",
				 		"TipImg" : "images/vapes/summit-green-600x600.png"
				 	},
				 	{ 
				 		"tipNum": "12", 
				 		"tipTxt": "A Tip goes here",
				 		"TipImg" : "images/vapes/summit-green-600x600.png"
				 	}
			 	]
			},
			{
				"VTipId": 26,
				"VName": "Cloud Evo",
				"VTipList": [
				 	{ 
				 		"tipNum": "1", 
				 		"tipTxt": "You can use this unit with your own water tool, or you can get it with one of their matching HydraTubes that fit on top. These glass pieces hold a little bit of water and allow you to further cool and condition the vapor to make it as comfortable as possible.",
				 		"TipImg" : "images/vapes/cloud-evo_thumb.png"
				 	},
				 	{ 
				 		"tipNum": "2", 
				 		"tipTxt": "When using it with herbs you can pack the chamber with as little as .1g or as much as ~.5g. The more you pack the more draws you can take, just don't pack it too tight and don't pack it more than about 80% full so airflow doesn't get restricted.",
				 		"TipImg" : "images/vapes/cloud-evo_thumb.png"
				 	},
				 	{ 
				 		"tipNum": "3", 
				 		"tipTxt": "It may sound a bit odd, but using warm/hot water in your hydrotube while vaporizing will actually give you the best results.",
				 		"TipImg" : "images/vapes/cloud-evo_thumb.png"
				 	},
				 	{ 
				 		"tipNum": "4", 
				 		"tipTxt": "For personal sessions, it works well at about fifty percent full, or about one quarter of a gram. I really wouldn't put more than half a gram in, because it will affect how well your material vaporizes.",
				 		"TipImg" : "images/vapes/cloud-evo_thumb.png"
				 	},
				 	{ 
				 		"tipNum": "5", 
				 		"tipTxt": "The hydratubes can be cleaned just like any other water pipe. 99% isopropyl alcohol works wonders.",
				 		"TipImg" : "images/vapes/cloud-evo_thumb.png"
				 	},
				 	{ 
				 		"tipNum": "6", 
				 		"tipTxt": "A Tip goes here",
				 		"TipImg" : "images/vapes/cloud-evo_thumb.png"
				 	},
				 	{ 
				 		"tipNum": "7", 
				 		"tipTxt": "A Tip goes here",
				 		"TipImg" : "images/vapes/cloud-evo_thumb.png"
				 	},
				 	{ 
				 		"tipNum": "8", 
				 		"tipTxt": "A Tip goes here",
				 		"TipImg" : "images/vapes/cloud-evo_thumb.png"
				 	},
				 	{ 
				 		"tipNum": "9", 
				 		"tipTxt": "A Tip goes here",
				 		"TipImg" : "images/vapes/cloud-evo_thumb.png"
				 	},
				 	{ 
				 		"tipNum": "10", 
				 		"tipTxt": "A Tip goes here",
				 		"TipImg" : "images/vapes/cloud-evo_thumb.png"
				 	},
				 	{ 
				 		"tipNum": "11", 
				 		"tipTxt": "A Tip goes here",
				 		"TipImg" : "images/vapes/cloud-evo_thumb.png"
				 	},
				 	{ 
				 		"tipNum": "12", 
				 		"tipTxt": "A Tip goes here",
				 		"TipImg" : "images/vapes/cloud-evo_thumb.png"
				 	}
			 	]
			},
			{
				"VTipId": 27,
				"VName": "Herbal Aire",
				"VTipList": [
				 	{ 
				 		"tipNum": "1", 
				 		"tipTxt": "It does seem to work better, and you'll get better vapor and more vapor if you put a decent amount of material inside the chamber or the crucible.",
				 		"TipImg" : "images/vapes/Herbal-Aire-1.png"
				 	},
				 	{ 
				 		"tipNum": "2", 
				 		"tipTxt": " Cleaning the chamber will avoid any vuild up over time of leftover material, giving you the quality you expect from the HerbalAire each time you use it.",
				 		"TipImg" : "images/vapes/Herbal-Aire-1.png"
				 	},
				 	{ 
				 		"tipNum": "3", 
				 		"tipTxt": "When using just the mouthpiece, not the whip, for direct inhalation you will want to lower whatever normal vaporizing temperature you use slightly because the vapor going from the vaporizer itself straight to the mouthpiece for inhalation can leave it kind of hot.",
				 		"TipImg" : "images/vapes/Herbal-Aire-1.png"
				 	},
				 	{ 
				 		"tipNum": "4", 
				 		"tipTxt": "For direct inhalation, some owners like to start with 335 to get the flavor of the herb. You should see vapor at that temp. Take a couple of 2 breaths and then move up 10 degrees. Keep doing this until you get to 375.",
				 		"TipImg" : "images/vapes/Herbal-Aire-1.png"
				 	},
				 	{ 
				 		"tipNum": "5", 
				 		"tipTxt": "Watch out for the crucible. It gets super hot for obvious reasons but cools down FAST. Within a minute or 2. Try to get an extra one if you can so you can reload quickly if need be.",
				 		"TipImg" : "images/vapes/Herbal-Aire-1.png"
				 	},
				 	{ 
				 		"tipNum": "6", 
				 		"tipTxt": "A Tip goes here",
				 		"TipImg" : "images/vapes/Herbal-Aire-1.png"
				 	},
				 	{ 
				 		"tipNum": "7", 
				 		"tipTxt": "A Tip goes here",
				 		"TipImg" : "images/vapes/Herbal-Aire-1.png"
				 	},
				 	{ 
				 		"tipNum": "8", 
				 		"tipTxt": "A Tip goes here",
				 		"TipImg" : "images/vapes/Herbal-Aire-1.png"
				 	},
				 	{ 
				 		"tipNum": "9", 
				 		"tipTxt": "A Tip goes here",
				 		"TipImg" : "images/vapes/Herbal-Aire-1.png"
				 	},
				 	{ 
				 		"tipNum": "10", 
				 		"tipTxt": "A Tip goes here",
				 		"TipImg" : "images/vapes/Herbal-Aire-1.png"
				 	},
				 	{ 
				 		"tipNum": "11", 
				 		"tipTxt": "A Tip goes here",
				 		"TipImg" : "images/vapes/Herbal-Aire-1.png"
				 	},
				 	{ 
				 		"tipNum": "12", 
				 		"tipTxt": "A Tip goes here",
				 		"TipImg" : "images/vapes/Herbal-Aire-1.png"
				 	}
			 	]
			},
			{
				"VTipId": 28,
				"VName": "Herbalizer",
				"VTipList": [
				 	{ 
				 		"tipNum": "1", 
				 		"tipTxt": "A Tip goes here",
				 		"TipImg" : "images/vapes/herbalizer.png"
				 	},
				 	{ 
				 		"tipNum": "2", 
				 		"tipTxt": "A Tip goes here",
				 		"TipImg" : "images/vapes/herbalizer.png"
				 	},
				 	{ 
				 		"tipNum": "3", 
				 		"tipTxt": "A Tip goes here",
				 		"TipImg" : "images/vapes/herbalizer.png"
				 	},
				 	{ 
				 		"tipNum": "4", 
				 		"tipTxt": "A Tip goes here",
				 		"TipImg" : "images/vapes/herbalizer.png"
				 	},
				 	{ 
				 		"tipNum": "5", 
				 		"tipTxt": "A Tip goes here",
				 		"TipImg" : "images/vapes/herbalizer.png"
				 	},
				 	{ 
				 		"tipNum": "6", 
				 		"tipTxt": "A Tip goes here",
				 		"TipImg" : "images/vapes/herbalizer.png"
				 	},
				 	{ 
				 		"tipNum": "7", 
				 		"tipTxt": "A Tip goes here",
				 		"TipImg" : "images/vapes/herbalizer.png"
				 	},
				 	{ 
				 		"tipNum": "8", 
				 		"tipTxt": "A Tip goes here",
				 		"TipImg" : "images/vapes/herbalizer.png"
				 	},
				 	{ 
				 		"tipNum": "9", 
				 		"tipTxt": "A Tip goes here",
				 		"TipImg" : "images/vapes/herbalizer.png"
				 	},
				 	{ 
				 		"tipNum": "10", 
				 		"tipTxt": "A Tip goes here",
				 		"TipImg" : "images/vapes/herbalizer.png"
				 	},
				 	{ 
				 		"tipNum": "11", 
				 		"tipTxt": "A Tip goes here",
				 		"TipImg" : "images/vapes/herbalizer.png"
				 	},
				 	{ 
				 		"tipNum": "12", 
				 		"tipTxt": "A Tip goes here",
				 		"TipImg" : "images/vapes/herbalizer.png"
				 	}
			 	]
			},
			{
				"VTipId": 29,
				"VName": "V2 Pro Series 3",
				"VTipList": [
				 	{ 
				 		"tipNum": "1", 
				 		"tipTxt": "The V2 pro Series 3 e-cig has a dimple at the top to line it up with the raised area present on the side of the cartridge. This is instrumental in preventing improper insertion of cartridge.",
				 		"TipImg" : "images/vapes/v2ProSeries3.png"
				 	},
				 	{ 
				 		"tipNum": "2", 
				 		"tipTxt": "The sleek window on the outer casing informs you the level of fluid as well as the type of cartridge being used.",
				 		"TipImg" : "images/vapes/v2ProSeries3.png"
				 	},
				 	{ 
				 		"tipNum": "3", 
				 		"tipTxt": "Using the V2 Pro is as simple as inserting the cartridge and pressing the button for three seconds. Be ready to puff as the indicator light turns green from red. When you hold the button pressed again for three seconds, you will turn off the heating.",
				 		"TipImg" : "images/vapes/v2ProSeries3.png"
				 	},
				 	{ 
				 		"tipNum": "4", 
				 		"tipTxt": "It has the lowest warm up time of 25-30 seconds for loose leaves unlike others in the category which take not less than several minutes to do so.",
				 		"TipImg" : "images/vapes/v2ProSeries3.png"
				 	},
				 	{ 
				 		"tipNum": "5", 
				 		"tipTxt": "To lock the Series 3, all you need to do is quickly push the button three times within 2 seconds. This will get the red LED perimeter flashing three times rendering your device unresponsive to accidental activation when not being used. To unlock the e-cigarette, just repeat the process to see the white LEDs flashing indicating an unlocked device.",
				 		"TipImg" : "images/vapes/v2ProSeries3.png"
				 	},
				 	{ 
				 		"tipNum": "6", 
				 		"tipTxt": "The V2 Series 3 has a built in safety mechanism that shuts off the device by cutting off the power if you hold the fire button for more than 10 seconds.",
				 		"TipImg" : "images/vapes/v2ProSeries3.png"
				 	},
				 	{ 
				 		"tipNum": "7", 
				 		"tipTxt": "When you use it as a loose leaf vaporizer, you can expect it to work at temperatures ranging from 160-180 degrees F. Such temperatures will allow you vaping sessions of approximately 12 hours between charges.",
				 		"TipImg" : "images/vapes/v2ProSeries3.png"
				 	},
				 	{ 
				 		"tipNum": "8", 
				 		"tipTxt": "Bear in mind that the standard packing only has an e-liquid cartridge and hence if you are looking for vaping with other mediums, you will need to consider buying different cartridges. They are readily available on the official website of V2.",
				 		"TipImg" : "images/vapes/v2ProSeries3.png"
				 	},
				 	{ 
				 		"tipNum": "9", 
				 		"tipTxt": "A Tip goes here",
				 		"TipImg" : "images/vapes/v2ProSeries3.png"
				 	},
				 	{ 
				 		"tipNum": "10", 
				 		"tipTxt": "A Tip goes here",
				 		"TipImg" : "images/vapes/v2ProSeries3.png"
				 	},
				 	{ 
				 		"tipNum": "11", 
				 		"tipTxt": "A Tip goes here",
				 		"TipImg" : "images/vapes/v2ProSeries3.png"
				 	},
				 	{ 
				 		"tipNum": "12", 
				 		"tipTxt": "A Tip goes here",
				 		"TipImg" : "images/vapes/v2ProSeries3.png"
				 	}
			 	]
			},
			{
				"VTipId": 30,
				"VName": "V2 Pro Series 7",
				"VTipList": [
				 	{ 
				 		"tipNum": "1", 
				 		"tipTxt": "A Tip goes here",
				 		"TipImg" : "images/vapes/V2ProSeries7.png"
				 	},
				 	{ 
				 		"tipNum": "2", 
				 		"tipTxt": "A Tip goes here",
				 		"TipImg" : "images/vapes/V2ProSeries7.png"
				 	},
				 	{ 
				 		"tipNum": "3", 
				 		"tipTxt": "A Tip goes here",
				 		"TipImg" : "images/vapes/V2ProSeries7.png"
				 	},
				 	{ 
				 		"tipNum": "4", 
				 		"tipTxt": "A Tip goes here",
				 		"TipImg" : "images/vapes/V2ProSeries7.png"
				 	},
				 	{ 
				 		"tipNum": "5", 
				 		"tipTxt": "A Tip goes here",
				 		"TipImg" : "images/vapes/V2ProSeries7.png"
				 	},
				 	{ 
				 		"tipNum": "6", 
				 		"tipTxt": "A Tip goes here",
				 		"TipImg" : "images/vapes/V2ProSeries7.png"
				 	},
				 	{ 
				 		"tipNum": "7", 
				 		"tipTxt": "A Tip goes here",
				 		"TipImg" : "images/vapes/V2ProSeries7.png"
				 	},
				 	{ 
				 		"tipNum": "8", 
				 		"tipTxt": "A Tip goes here",
				 		"TipImg" : "images/vapes/V2ProSeries7.png"
				 	},
				 	{ 
				 		"tipNum": "9", 
				 		"tipTxt": "A Tip goes here",
				 		"TipImg" : "images/vapes/V2ProSeries7.png"
				 	},
				 	{ 
				 		"tipNum": "10", 
				 		"tipTxt": "A Tip goes here",
				 		"TipImg" : "images/vapes/V2ProSeries7.png"
				 	},
				 	{ 
				 		"tipNum": "11", 
				 		"tipTxt": "A Tip goes here",
				 		"TipImg" : "images/vapes/V2ProSeries7.png"
				 	},
				 	{ 
				 		"tipNum": "12", 
				 		"tipTxt": "A Tip goes here",
				 		"TipImg" : "images/vapes/V2ProSeries7.png"
				 	}
			 	]
			},
			{
				"VTipId": 31,
				"VName": "G-Pro",
				"VTipList": [
				 	{ 
				 		"tipNum": "1", 
				 		"tipTxt": "A Tip goes here",
				 		"TipImg" : "images/vapes/GPro-Pen-Solo.png"
				 	},
				 	{ 
				 		"tipNum": "2", 
				 		"tipTxt": "A Tip goes here",
				 		"TipImg" : "images/vapes/GPro-Pen-Solo.png"
				 	},
				 	{ 
				 		"tipNum": "3", 
				 		"tipTxt": "A Tip goes here",
				 		"TipImg" : "images/vapes/GPro-Pen-Solo.png"
				 	},
				 	{ 
				 		"tipNum": "4", 
				 		"tipTxt": "A Tip goes here",
				 		"TipImg" : "images/vapes/GPro-Pen-Solo.png"
				 	},
				 	{ 
				 		"tipNum": "5", 
				 		"tipTxt": "A Tip goes here",
				 		"TipImg" : "images/vapes/GPro-Pen-Solo.png"
				 	},
				 	{ 
				 		"tipNum": "6", 
				 		"tipTxt": "A Tip goes here",
				 		"TipImg" : "images/vapes/GPro-Pen-Solo.png"
				 	},
				 	{ 
				 		"tipNum": "7", 
				 		"tipTxt": "A Tip goes here",
				 		"TipImg" : "images/vapes/GPro-Pen-Solo.png"
				 	},
				 	{ 
				 		"tipNum": "8", 
				 		"tipTxt": "A Tip goes here",
				 		"TipImg" : "images/vapes/GPro-Pen-Solo.png"
				 	},
				 	{ 
				 		"tipNum": "9", 
				 		"tipTxt": "A Tip goes here",
				 		"TipImg" : "images/vapes/GPro-Pen-Solo.png"
				 	},
				 	{ 
				 		"tipNum": "10", 
				 		"tipTxt": "A Tip goes here",
				 		"TipImg" : "images/vapes/GPro-Pen-Solo.png"
				 	},
				 	{ 
				 		"tipNum": "11", 
				 		"tipTxt": "A Tip goes here",
				 		"TipImg" : "images/vapes/GPro-Pen-Solo.png"
				 	},
				 	{ 
				 		"tipNum": "12", 
				 		"tipTxt": "A Tip goes here",
				 		"TipImg" : "images/vapes/GPro-Pen-Solo.png"
				 	}
			 	]
			},
			{
				"VTipId": 32,
				"VName": "K-Vape Micro DX",
				"VTipList": [
				 	{ 
				 		"tipNum": "1", 
				 		"tipTxt": "For the best performance and most vapor production you should grind up your dry herbs fine and pack the chamber full, then tamp it down a tiny bit.",
				 		"TipImg" : "images/vapes/kvape_microDx.png"
				 	},
				 	{ 
				 		"tipNum": "2", 
				 		"tipTxt": "For the best low temp flavors and effects, set your vape on the lowest temperature setting and begin inhaling as it heats up to the selected setting.",
				 		"TipImg" : "images/vapes/kvape_microDx.png"
				 	},
				 	{ 
				 		"tipNum": "3", 
				 		"tipTxt": "A Tip goes here",
				 		"TipImg" : "images/vapes/kvape_microDx.png"
				 	},
				 	{ 
				 		"tipNum": "4", 
				 		"tipTxt": "A Tip goes here",
				 		"TipImg" : "images/vapes/kvape_microDx.png"
				 	},
				 	{ 
				 		"tipNum": "5", 
				 		"tipTxt": "A Tip goes here",
				 		"TipImg" : "images/vapes/kvape_microDx.png"
				 	},
				 	{ 
				 		"tipNum": "6", 
				 		"tipTxt": "A Tip goes here",
				 		"TipImg" : "images/vapes/kvape_microDx.png"
				 	},
				 	{ 
				 		"tipNum": "7", 
				 		"tipTxt": "A Tip goes here",
				 		"TipImg" : "images/vapes/kvape_microDx.png"
				 	},
				 	{ 
				 		"tipNum": "8", 
				 		"tipTxt": "A Tip goes here",
				 		"TipImg" : "images/vapes/kvape_microDx.png"
				 	},
				 	{ 
				 		"tipNum": "9", 
				 		"tipTxt": "A Tip goes here",
				 		"TipImg" : "images/vapes/kvape_microDx.png"
				 	},
				 	{ 
				 		"tipNum": "10", 
				 		"tipTxt": "A Tip goes here",
				 		"TipImg" : "images/vapes/kvape_microDx.png"
				 	},
				 	{ 
				 		"tipNum": "11", 
				 		"tipTxt": "A Tip goes here",
				 		"TipImg" : "images/vapes/kvape_microDx.png"
				 	},
				 	{ 
				 		"tipNum": "12", 
				 		"tipTxt": "A Tip goes here",
				 		"TipImg" : "images/vapes/kvape_microDx.png"
				 	}
			 	]
			},
			{
				"VTipId": 33,
				"VName": "E-Nano",
				"VTipList": [
				 	{ 
				 		"tipNum": "1", 
				 		"tipTxt": "A Tip goes here",
				 		"TipImg" : "images/vapes/Epic-Vape-E-Nano-Vape.png"
				 	},
				 	{ 
				 		"tipNum": "2", 
				 		"tipTxt": "A Tip goes here",
				 		"TipImg" : "images/vapes/Epic-Vape-E-Nano-Vape.png"
				 	},
				 	{ 
				 		"tipNum": "3", 
				 		"tipTxt": "A Tip goes here",
				 		"TipImg" : "images/vapes/Epic-Vape-E-Nano-Vape.png"
				 	},
				 	{ 
				 		"tipNum": "4", 
				 		"tipTxt": "A Tip goes here",
				 		"TipImg" : "images/vapes/Epic-Vape-E-Nano-Vape.png"
				 	},
				 	{ 
				 		"tipNum": "5", 
				 		"tipTxt": "A Tip goes here",
				 		"TipImg" : "images/vapes/Epic-Vape-E-Nano-Vape.png"
				 	},
				 	{ 
				 		"tipNum": "6", 
				 		"tipTxt": "A Tip goes here",
				 		"TipImg" : "images/vapes/Epic-Vape-E-Nano-Vape.png"
				 	},
				 	{ 
				 		"tipNum": "7", 
				 		"tipTxt": "A Tip goes here",
				 		"TipImg" : "images/vapes/Epic-Vape-E-Nano-Vape.png"
				 	},
				 	{ 
				 		"tipNum": "8", 
				 		"tipTxt": "A Tip goes here",
				 		"TipImg" : "images/vapes/Epic-Vape-E-Nano-Vape.png"
				 	},
				 	{ 
				 		"tipNum": "9", 
				 		"tipTxt": "A Tip goes here",
				 		"TipImg" : "images/vapes/Epic-Vape-E-Nano-Vape.png"
				 	},
				 	{ 
				 		"tipNum": "10", 
				 		"tipTxt": "A Tip goes here",
				 		"TipImg" : "images/vapes/Epic-Vape-E-Nano-Vape.png"
				 	},
				 	{ 
				 		"tipNum": "11", 
				 		"tipTxt": "A Tip goes here",
				 		"TipImg" : "images/vapes/Epic-Vape-E-Nano-Vape.png"
				 	},
				 	{ 
				 		"tipNum": "12", 
				 		"tipTxt": "A Tip goes here",
				 		"TipImg" : "images/vapes/Epic-Vape-E-Nano-Vape.png"
				 	}
			 	]
			},
			{
				"VTipId": 34,
				"VName": "Underdog",
				"VTipList": [
				 	{ 
				 		"tipNum": "1", 
				 		"tipTxt": "A Tip goes here",
				 		"TipImg" : "images/vapes/Underdog-001-225x300.png"
				 	},
				 	{ 
				 		"tipNum": "2", 
				 		"tipTxt": "A Tip goes here",
				 		"TipImg" : "images/vapes/Underdog-001-225x300.png"
				 	},
				 	{ 
				 		"tipNum": "3", 
				 		"tipTxt": "A Tip goes here",
				 		"TipImg" : "images/vapes/Underdog-001-225x300.png"
				 	},
				 	{ 
				 		"tipNum": "4", 
				 		"tipTxt": "A Tip goes here",
				 		"TipImg" : "images/vapes/Underdog-001-225x300.png"
				 	},
				 	{ 
				 		"tipNum": "5", 
				 		"tipTxt": "A Tip goes here",
				 		"TipImg" : "images/vapes/Underdog-001-225x300.png"
				 	},
				 	{ 
				 		"tipNum": "6", 
				 		"tipTxt": "A Tip goes here",
				 		"TipImg" : "images/vapes/Underdog-001-225x300.png"
				 	},
				 	{ 
				 		"tipNum": "7", 
				 		"tipTxt": "A Tip goes here",
				 		"TipImg" : "images/vapes/Underdog-001-225x300.png"
				 	},
				 	{ 
				 		"tipNum": "8", 
				 		"tipTxt": "A Tip goes here",
				 		"TipImg" : "images/vapes/Underdog-001-225x300.png"
				 	},
				 	{ 
				 		"tipNum": "9", 
				 		"tipTxt": "A Tip goes here",
				 		"TipImg" : "images/vapes/Underdog-001-225x300.png"
				 	},
				 	{ 
				 		"tipNum": "10", 
				 		"tipTxt": "A Tip goes here",
				 		"TipImg" : "images/vapes/Underdog-001-225x300.png"
				 	},
				 	{ 
				 		"tipNum": "11", 
				 		"tipTxt": "A Tip goes here",
				 		"TipImg" : "images/vapes/Underdog-001-225x300.png"
				 	},
				 	{ 
				 		"tipNum": "12", 
				 		"tipTxt": "A Tip goes here",
				 		"TipImg" : "images/vapes/Underdog-001-225x300.png"
				 	}
			 	]
			},

		];  

		/**var temperatures = [126, 246, 273, 313, 315, 334, 349, 351, 352, 356, 360, 365, 388, 408, 423, 428, 435, 482]**/

		/** temp ranges are L= 0-330F, M= 331-390F H= 391-445F**/
		var recEffects = [
			{"recEffectId": 1,
			 "recEffectName": "Euphoric",  
			 "recEffectType": "P",
			 "recEffectTempRange" : "Md",
			 "imageUrl": "Euphoric.png"
			}, 
			{"recEffectId": 2,
			 "recEffectName": "Happy",  
			 "recEffectType": "P",
			 "recEffectTempRange" : "Md",
			 "imageUrl": "Happy.png"
			},
			{"recEffectId": 3,
			 "recEffectName": "Uplifted",  
			 "recEffectType": "P",
			 "recEffectTempRange" : "Hi",
			 "imageUrl": "Uplifted.png"
			},
			{"recEffectId": 4,
			 "recEffectName": "Relaxed",  
			 "recEffectType": "P",
			 "recEffectTempRange" : "Hi",
			 "imageUrl": "Relaxed.png"
			},
			{"recEffectId": 5,
			 "recEffectName": "Creative",  
			 "recEffectType": "P",
			 "recEffectTempRange" : "Md",
			 "imageUrl": "Creative.png"
			},
			{"recEffectId": 6,
			 "recEffectName": "Energetic",  
			 "recEffectType": "P",
			 "recEffectTempRange" : "Lo",
			 "imageUrl": "Energetic.png"
			},
			{"recEffectId": 7,
			 "recEffectName": "Long Lasting",  
			 "recEffectType": "P",
			 "recEffectTempRange" : "Hi",
			 "imageUrl": "LongLasting.png"
			},
			{"recEffectId": 8,
			 "recEffectName": "Potent",  
			 "recEffectType": "P",
			 "recEffectTempRange" : "Hi",
			 "imageUrl": "VeryPotent.png"
			},
			{"recEffectId": 9,
			 "recEffectName": "Balanced",  
			 "recEffectType": "P",
			 "recEffectTempRange" : "Lo",
			 "imageUrl": "Balanced.png"
			},
			{"recEffectId": 10,
			 "recEffectName": "Calmness",  
			 "recEffectType": "P",
			 "recEffectTempRange" : "Lo",
			 "imageUrl": "MentalCalmness.png"
			},
			{"recEffectId": 11,
			 "recEffectName": "Productive",  
			 "recEffectType": "P",
			 "recEffectTempRange" : "Lo",
			 "imageUrl": "Productive.png"
			}, 
			{"recEffectId": 12,
			 "recEffectName": "Pain relief",  
			 "recEffectType": "P",
			 "recEffectTempRange" : "Hi",
			 "imageUrl": "PainRelief.png"
			},
			{"recEffectId": 13,
			 "recEffectName": "Psychoactive",  
			 "recEffectType": "P",
			 "recEffectTempRange" : "Md",
			 "imageUrl": "MildlyPsyc.png"
			},
			{"recEffectId": 14,
			 "recEffectName": "Mellow",  
			 "recEffectType": "P",
			 "recEffectTempRange" : "Lo",
			 "imageUrl": "Mellow.png"
			},
			{"recEffectId": 15,
			 "recEffectName": "Intense",  
			 "recEffectType": "P",
			 "recEffectTempRange" : "Hi",
			 "imageUrl": "IntenseEff.png"
			},
			{"recEffectId": 16,
			 "recEffectName": "Mind + Body",  
			 "recEffectType": "P",
			 "recEffectTempRange" : "Hi",
			 "imageUrl": "MindAndBodyBuzz.png"
			},
			{"recEffectId": 17,
			 "recEffectName": "Conversational",  
			 "recEffectType": "P",
			 "recEffectTempRange" : "Md",
			 "imageUrl": "EnhanceConv.png"
			},
			{"recEffectId": 18,
			 "recEffectName": "Therapeutic",  
			 "recEffectType": "P",
			 "recEffectTempRange" : "Hi",
			 "imageUrl": "Therapeutic.png"
			},
			{"recEffectId": 19,
			 "recEffectName": "Tingly",  
			 "recEffectType": "P",
			 "recEffectTempRange" : "Md",
			 "imageUrl": "Tingly.png"
			},
			{"recEffectId": 20,
			 "recEffectName": "Hungry",  
			 "recEffectType": "P",
			 "recEffectTempRange" : "Md",
			 "imageUrl": "EnhanceHung.png"
			},
			{"recEffectId": 21,
			 "recEffectName": "Dry Mouth",  
			 "recEffectType": "N",
			 "recEffectTempRange" : "Hi",
			 "imageUrl": "DryMouth.png"
			},
			{"recEffectId": 22,
			 "recEffectName": "Dry Eyes",  
			 "recEffectType": "N",
			 "recEffectTempRange" : "Hi",
			 "imageUrl": "DryEyes.png"
			},
			{"recEffectId": 23,
			 "recEffectName": "Paranoid",  
			 "recEffectType": "N",
			 "recEffectTempRange" : "Hi",
			 "imageUrl": "Paranoid.png"
			},
			{"recEffectId": 24,
			 "recEffectName": "Dizzy",  
			 "recEffectType": "N",
			 "recEffectTempRange" : "Hi",
			 "imageUrl": "Dizzy.png"
			},
			{"recEffectId": 25,
			 "recEffectName": "Anxious",  
			 "recEffectType": "N",
			 "recEffectTempRange" : "Hi",
			 "imageUrl": "Anxious.png"
			},
			{"recEffectId": 26,
			 "recEffectName": "Munchies",  
			 "recEffectType": "N",
			 "recEffectTempRange" : "Md",
			 "imageUrl": "Munchies.png"
			},
			{"recEffectId": 27,
			 "recEffectName": "Headache",  
			 "recEffectType": "N",
			 "recEffectTempRange" : "Hi",
			 "imageUrl": "Headache.png"
			},
			{"recEffectId": 28,
			 "recEffectName": "Drowsiness",  
			 "recEffectType": "N",
			 "recEffectTempRange" : "Hi",
			 "imageUrl": "EnhanceDrow.png"
			},
			{"recEffectId": 29,
			 "recEffectName": "Couch Lock",  
			 "recEffectType": "N",
			 "recEffectTempRange" : "Hi",
			 "imageUrl": "CouchLocked.png"
			},
			{"recEffectId": 30,
			 "recEffectName": "Clear headed",  
			 "recEffectType": "P",
			 "recEffectTempRange" : "Lo",
			 "imageUrl": "ClearHeaded.png"
			},
			{"recEffectId": 31,
			 "recEffectName": "Sexual",  
			 "recEffectType": "P",
			 "recEffectTempRange" : "Md",
			 "imageUrl": "EnhanceSexu.png"
			},
			{"recEffectId": 32,
			 "recEffectName": "Giggly",  
			 "recEffectType": "P",
			 "recEffectTempRange" : "Md",
			 "imageUrl": "Giggly.png"
			},
			{"recEffectId": 33,
			 "recEffectName": "Less Social",  
			 "recEffectType": "N",
			 "recEffectTempRange" : "Hi",
			 "imageUrl": "LessSocial.png"
			},
			{"recEffectId": 34,
			 "recEffectName": "Focused",  
			 "recEffectType": "P",
			 "recEffectTempRange" : "Lo",
			 "imageUrl": "Focused.png"
			}
		];

	var tastes = [
		{ 
			"tasteId": 1,
			"taste": "Earthy",
			"compound": "Myrcene",
			"tempF": "334",
			"tempC": "168",			
			"imageUrl": "Earthy.png"
		},
		{ 
			"tasteId": 2,
			"taste": "Pine",
			"compound": "Pinene",
			"tempF": "313",
			"tempC": "156",			
			"imageUrl": "Pine.png"
		},
		{ 
			"tasteId": 3,
			"taste": "Pungent",
			"compound": "",
			"tempF": "0",
			"tempC": "0",			
			"imageUrl": "Pungent.png"
		},
		{ 
			"tasteId": 4,
			"taste": "Woody",
			"compound": "Caryophyllene",
			"tempF": "246",
			"tempC": "119",			
			"imageUrl": "Woody.png"
		},
		{ 
			"tasteId": 5,
			"taste": "Sage",
			"compound": "Myrcene",
			"tempF": "334",
			"tempC": "168",			
			"imageUrl": "Sage.png"
		},
		{ 
			"tasteId": 6,
			"taste": "Sweet",
			"compound": "Linalool",
			"tempF": "388",
			"tempC": "198",			
			"imageUrl": "Sweet.png"
		},
		{ 
			"tasteId": 7,
			"taste": "Berry",
			"compound": "",
			"tempF": "0",
			"tempC": "0",			
			"imageUrl": "Berry.png"
		},
		{ 
			"tasteId": 8,
			"taste": "Tropical",
			"compound": "Myrcene",
			"tempF": "334",
			"tempC": "168",			
			"imageUrl": "Tropical.png"
		},
		{ 
			"tasteId": 9,
			"taste": "Mango",
			"compound": "Myrcene",
			"tempF": "334",
			"tempC": "168",
			"imageUrl": "Mango.png"
		},
		{ 
			"tasteId": 10,
			"taste": "Diesel",
			"compound": "",
			"tempF": "0",
			"tempC": "0",			
			"imageUrl": "Diesel.png"
		},
		{ 
			"tasteId": 11,
			"taste": "Skunk",
			"compound": "",
			"tempF": "0",
			"tempC": "0",			
			"imageUrl": "Skunk.png"
		},
		{ 
			"tasteId": 12,
			"taste": "Honey",
			"compound": "",
			"tempF": "0",
			"tempC": "0",			
			"imageUrl": "Honey.png"
		},
		{ 
			"tasteId": 13,
			"taste": "Citrus",
			"compound": "Limonene",
			"tempF": "351",
			"tempC": "177",		
			"imageUrl": "Citrus.png"
		},
		{ 
			"tasteId": 14,
			"taste": "Lemon",
			"compound": "Limonene",
			"tempF": "351",
			"tempC": "177",		
			"imageUrl": "Lemon.png"
		},
		{ 
			"tasteId": 15,
			"taste": "Tea",
			"compound": "",
			"tempF": "0",
			"tempC": "0",			
			"imageUrl": "Tea.png"
		},
		{ 
			"tasteId": 16,
			"taste": "Strawberry",
			"compound": "",
			"tempF": "0",
			"tempC": "0",			
			"imageUrl": "Strawberry.png"
		},
		{ 
			"tasteId": 17,
			"taste": "Pineapple",
			"compound": "Myrcene",
			"tempF": "334",
			"tempC": "168",			
			"imageUrl": "Pineapple.png"
		},
		{ 
			"tasteId": 18,
			"taste": "Cheese",
			"compound": "",
			"tempF": "0",
			"tempC": "0",			
			"imageUrl": "Cheese.png"
		},
		{ 
			"tasteId": 19,
			"taste": "Grape",
			"compound": "",
			"tempF": "0",
			"tempC": "0",			
			"imageUrl": "Grape.png"
		},
		{ 
			"tasteId": 20,
			"taste": "Mint",
			"compound": "Caryophyllene",
			"tempF": "246",
			"tempC": "119",			
			"imageUrl": "Mint.png"
		},
		{ 
			"tasteId": 21,
			"taste": "Chemical",
			"compound": "",
			"tempF": "0",
			"tempC": "0",			
			"imageUrl": "Chemical.png"
		},
		{ 
			"tasteId": 22,
			"taste": "Spicy",
			"compound": "Caryophyllene",
			"tempF": "246",
			"tempC": "119",			
			"imageUrl": "Spicy.png"
		},
		{ 
			"tasteId": 23,
			"taste": "Herbal",
			"compound": "Myrcene",
			"tempF": "334",
			"tempC": "168",			
			"imageUrl": "Herbal.png"
		},
		{ 
			"tasteId": 24,
			"taste": "Flowery",
			"compound": "Linalool",
			"tempF": "388",
			"tempC": "198",			
			"imageUrl": "Flowery.png"
		}, 
		{ 
			"tasteId": 25,
			"taste": "Pepper",
			"compound": "Caryophyllene",
			"tempF": "246",
			"tempC": "119",			
			"imageUrl": "Pepper.png"
		},
		{ 
			"tasteId": 26,
			"taste": "Grapefruit",
			"compound": "Limonene",
			"tempF": "351",
			"tempC": "177",			
			"imageUrl": "Grapefruit.png"
		},
		{ 
			"tasteId": 27,
			"taste": "Fruity",
			"compound": "Linalool",
			"tempF": "388",
			"tempC": "198",			
			"imageUrl": "Fruity.png"
		},
		{ 
			"tasteId": 28,
			"taste": "Orange",
			"compound": "Limonene",
			"tempF": "351",
			"tempC": "177",			
			"imageUrl": "Orange.png"
		},
		{ 
			"tasteId": 29,
			"taste": "Hash",
			"compound": "Caryophyllene",
			"tempF": "246",
			"tempC": "119",			
			"imageUrl": "Hash.png"
		},
		{ 
			"tasteId": 30,
			"taste": "Sour",
			"compound": "Limonene",
			"tempF": "351",
			"tempC": "177",			
			"imageUrl": "Sour.png"
		},
		{ 
			"tasteId": 31,
			"taste": "Chestnut",
			"compound": "",
			"tempF": "0",
			"tempC": "0",			
			"imageUrl": "Chestnut.png"
		},
		{ 
			"tasteId": 32,
			"taste": "Blueberry",
			"compound": "",
			"tempF": "0",
			"tempC": "0",			
			"imageUrl": "Blueberry.png"
		},
		{ 
			"tasteId": 33,
			"taste": "Coffee",
			"compound": "",
			"tempF": "0",
			"tempC": "0",			
			"imageUrl": "Coffee.png"
		},
		{ 
			"tasteId": 34,
			"taste": "Dank",
			"compound": "Myrcene",
			"tempF": "334",
			"tempC": "168",			
			"imageUrl": "Dank.png"
		},
		{ 
			"tasteId": 35,
			"taste": "Lime",
			"compound": "Limonene",
			"tempF": "351",
			"tempC": "177",			
			"imageUrl": "Lime.png"
		},
		{ 
			"tasteId": 36,
			"taste": "Menthol",
			"compound": "Caryophyllene",
			"tempF": "246",
			"tempC": "119",			
			"imageUrl": "Menthol.png"
		},
		{ 
			"tasteId": 37,
			"taste": "Plum",
			"compound": "",
			"tempF": "0",
			"tempC": "0",			
			"imageUrl": "Plum.png"
		},
		{ 
			"tasteId": 38,
			"taste": "Lavender",
			"compound": "Linalool",
			"tempF": "388",
			"tempC": "198",			
			"imageUrl": "Lavender.png"
		},
		{ 
			"tasteId": 39,
			"taste": "Exotic",
			"compound": "Myrcene",
			"tempF": "334",
			"tempC": "168",			
			"imageUrl": "Exotic.png"
		},
		{ 
			"tasteId": 40,
			"taste": "Nutty",
			"compound": "",
			"tempF": "0",
			"tempC": "0",			
			"imageUrl": "Nutty.png"
		},
		{ 
			"tasteId": 41,
			"taste": "Tree Fruit",
			"compound": "",
			"tempF": "0",
			"tempC": "0",			
			"imageUrl": "TreeFruit.png"
		},
		{ 
			"tasteId": 42,
			"taste": "Chocolate",
			"compound": "",
			"tempF": "0",
			"tempC": "0",			
			"imageUrl": "Chocolate.png"
		},
		{ 
			"tasteId": 44,
			"taste": "Vanilla",
			"compound": "",
			"tempF": "0",
			"tempC": "0",			
			"imageUrl": "Vanilla.png"
		}

	];

		var strainNames = [
			{"strainId": 1,
			 "strainName": "Trainwreck", 
			 "strainType": "Hybrid",
			 "imageUrl": "images/strains/trainwreck_100x100.jpg"

			},
			{"strainId": 2,
			 "strainName": "White Widow", 
			 "strainType": "Hybrid",
			 "imageUrl": "images/strains/white-widow_100x100.jpg"

			},
			{"strainId": 3,
			 "strainName": "Sage", 
			 "strainType": "Hybrid",
			 "imageUrl": "images/strains/sage_100x100.jpg"

			},
			{"strainId": 4,
			 "strainName": "Skywalker OG", 
			 "strainType": "Hybrid",
			 "imageUrl": "images/strains/skywalker-og_100x100.jpg"

			},
			{"strainId": 5,
			 "strainName": "Permafrost", 
			 "strainType": "Hybrid",
			 "imageUrl": "images/strains/permafrost_100x100.jpg"

			},
			{"strainId": 6,
			 "strainName": "Querkle", 
			 "strainType": "Indica",
			 "imageUrl": "images/strains/querkle_100x100.jpg"

			},
			{"strainId": 7,
			 "strainName": "Papaya", 
			 "strainType": "Hybrid",
			 "imageUrl": "images/strains/papaya_100x100.jpg"

			},
			{"strainId": 8,
			 "strainName": "Pennywise", 
			 "strainType": "Indica",
			 "imageUrl": "images/strains/pennywise_100x100.jpg"

			},
			{"strainId": 9,
			 "strainName": "OG #18", 
			 "strainType": "Hybrid",
			 "imageUrl": "images/strains/og--18_100x100.jpg"

			},
			{"strainId": 10,
			 "strainName": "OG Kush", 
			 "strainType": "Hybrid",
			 "imageUrl": "images/strains/og-kush_100x100.jpg"

			},
			{"strainId": 11,
			 "strainName": "Canna-Tsu", 
			 "strainType": "Hybrid",
			 "imageUrl": "images/strains/canna-tsu_100x100.jpg"

			},
			{"strainId": 12,
			 "strainName": "Nebula", 
			 "strainType": "Hybrid",
			 "imageUrl": "images/strains/nebula_100x100.jpg"

			},
			{"strainId": 13,
			 "strainName": "XJ-13", 
			 "strainType": "Hybrid",
			 "imageUrl": "images/strains/xj-13_100x100.jpg"

			},
			{"strainId": 14,
			 "strainName": "Yumbodlt", 
			 "strainType": "Indica",
			 "imageUrl": "images/strains/yumboldt_100x100.jpg"

			},
			{"strainId": 15,
			 "strainName": "Vortex", 
			 "strainType": "Sativa",
			 "imageUrl": "images/strains/vortex_100x100.jpg"

			},
			{"strainId": 16,
			 "strainName": "Warlock", 
			 "strainType": "Hybrid",
			 "imageUrl": "images/strains/warlock_100x100.jpg"

			},
			{"strainId": 17,
			 "strainName": "Strawberry Cough", 
			 "strainType": "Sativa",
			 "imageUrl": "images/strains/strawberry-cough_100x100.jpg"

			},
			{"strainId": 18,
			 "strainName": "Stardawg", 
			 "strainType": "Hybrid",
			 "imageUrl": "images/strains/stardawg_100x100.jpg"


			},
			{"strainId": 19,
			 "strainName": "Strawberry", 
			 "strainType": "Hybrid",
			 "imageUrl": "images/strains/strawberry_100x100.jpg"

			},
			{"strainId": 20,
			 "strainName": "Sour Diesel", 
			 "strainType": "Sativa",
			 "imageUrl": "images/strains/sour-diesel_100x100.jpg"

			},
			{"strainId": 21,
			 "strainName": "Shipwreck", 
			 "strainType": "Sativa",
			 "imageUrl": "images/strains/Shipwreck_100x100.jpg"

			},
			{"strainId": 22,
			 "strainName": "Skywalker", 
			 "strainType": "Hybrid",
			 "imageUrl": "images/strains/skywalker_100x100.jpg"

			},
			{"strainId": 23,
			 "strainName": "Romulan", 
			 "strainType": "Hybrid",
			 "imageUrl": "images/strains/romulan_100x100.jpg"

			},
			{"strainId": 24,
			 "strainName": "Purple Wreck", 
			 "strainType": "Indica",
			 "imageUrl": "images/strains/purple-wreck_100x100.jpg"

			},
			{"strainId": 25,
			 "strainName": "Pineapple", 
			 "strainType": "Hybrid",
			 "imageUrl": "images/strains/pineapple_100x100.jpg"

			},
			{"strainId": 26,
			 "strainName": "Purple Cheese", 
			 "strainType": "Hybrid",
			 "imageUrl": "images/strains/purple-cheese_100x100.jpg"

			},
			{"strainId": 27,
			 "strainName": "ACDC", 
			 "strainType": "Hybrid",
			 "imageUrl": "images/strains/acdc_100x100.jpg"

			},
			{"strainId": 28,
			 "strainName": "Shark Shock", 
			 "strainType": "Indica",
			 "imageUrl": "images/strains/shark-shock_100x100.jpg"

			},
			{"strainId": 29,
			 "strainName": "Superman OG", 
			 "strainType": "Indica",
			 "imageUrl": "images/strains/superman-og_100x100.jpg"

			},
			{"strainId": 30,
			 "strainName": "Thin Mint", 
			 "strainType": "Hybrid",
			 "imageUrl": "images/strains/thin-mint-girl-scout-cookies_100x100.jpg"

			},
			{"strainId": 31,
			 "strainName": "Banana Diesel", 
			 "strainType": "Hybrid",
			 "imageUrl": "images/strains/banana-diesel_100x100.jpg"

			},
			{"strainId": 32,
			 "strainName": "Candy OG", 
			 "strainType": "Indica",
			 "imageUrl": "images/strains/Candy-Og.jpg"

			},
			{"strainId": 33,
			 "strainName": "Chem Valley Kush", 
			 "strainType": "Hybrid",
			 "imageUrl": "images/strains/chem-valley-kush_100x100.jpg"

			},
			{"strainId": 34,
			 "strainName": "Confidential Cheese", 
			 "strainType": "Indica",
			 "imageUrl": "images/strains/confidential-cheese_100x100.jpg"

			},
			{"strainId": 35,
			 "strainName": "Deadhead OG", 
			 "strainType": "Hybrid",
			 "imageUrl": "images/strains/deadhead-og_100x100.jpg"

			},
			{"strainId": 36,
			 "strainName": "Diablo", 
			 "strainType": "Indica",
			 "imageUrl": "images/strains/diablo_100x100.jpg"

			},
			{"strainId": 37,
			 "strainName": "Dutch Passion", 
			 "strainType": "Hybrid",
			 "imageUrl": "images/strains/dutch-passion.JPG"

			},
			{"strainId": 38,
			 "strainName": "Eden OG", 
			 "strainType": "Hybrid",
			 "imageUrl": "images/strains/eden.jpg"

			},
			{"strainId": 39,
			 "strainName": "Euphoria", 
			 "strainType": "Sativa",
			 "imageUrl": "images/strains/euphoria_100x100.jpg"

			},
			{"strainId": 40,
			 "strainName": "Fire Bomb", 
			 "strainType": "Hybrid",
			 "imageUrl": "images/strains/fire_bomb.jpg"

			},
			{"strainId": 41,
			 "strainName": "Forum Cookies/GSC", 
			 "strainType": "Hybrid",
			 "imageUrl": "images/strains/forum_cookies.jpg"

			},
			{"strainId": 42,
			 "strainName": "Gooey Wreck", 
			 "strainType": "Hybrid",
			 "imageUrl": "images/strains/gooey-wreck.jpg"

			},
			{"strainId": 43,
			 "strainName": "Grapefruit Haze", 
			 "strainType": "Hybrid",
			 "imageUrl": "images/strains/grapefruit-haze_100x100.jpg"

			},
			{"strainId": 44,
			 "strainName": "Green Crack", 
			 "strainType": "Sativa",
			 "imageUrl": "images/strains/green-crack_100x100.jpg"

			},
			{"strainId": 45,
			 "strainName": "Green Dream", 
			 "strainType": "Hybrid",
			 "imageUrl": "images/strains/green-dream_100x100.jpg"

			},
			{"strainId": 46,
			 "strainName": "Green Thailand", 
			 "strainType": "Sativa",
			 "imageUrl": "images/strains/thai_100x100.jpg"

			},
			{"strainId": 47,
			 "strainName": "H-Train Wreck", 
			 "strainType": "Hybrid",
			 "imageUrl": "images/strains/H-trainwreck.jpg"

			},
			{"strainId": 48,
			 "strainName": "Hawaiian Hulk", 
			 "strainType": "Sativa",
			 "imageUrl": "images/strains/bruce-banner_100x100.jpg"

			},
			{"strainId": 49,
			 "strainName": "Jack Chemdawg", 
			 "strainType": "Sativa",
			 "imageUrl": "images/strains/chemdawg_100x100.jpg"

			},
			{"strainId": 50,
			 "strainName": "Jack Herer", 
			 "strainType": "Sativa",
			 "imageUrl": "images/strains/jack-herer_100x100.jpg"

			},
			{"strainId": 51,
			 "strainName": "Jillybean", 
			 "strainType": "Hybrid",
			 "imageUrl": "images/strains/jillybean_100x100.jpg"

			},
			{"strainId": 52,
			 "strainName": "Lamb's Bread", 
			 "strainType": "Sativa",
			 "imageUrl": "images/strains/lamb-s-bread_100x100.jpg"

			},
			{"strainId": 53,
			 "strainName": "Lemon Haze", 
			 "strainType": "Sativa",
			 "imageUrl": "images/strains/lemon-haze_100x100.jpg"

			},
			{"strainId": 54,
			 "strainName": "Lemon Head OG", 
			 "strainType": "Sativa",
			 "imageUrl": "images/strains/super-lemon-og_100x100.jpg"

			},
			{"strainId": 55,
			 "strainName": "Lulu", 
			 "strainType": "Sativa",
			 "imageUrl": "images/strains/lulu200x160.jpg"

			},
			{"strainId": 56,
			 "strainName": "Magic Jack", 
			 "strainType": "Sativa",
			 "imageUrl": "images/strains/Magic-Jack-300.jpg"

			},
			{"strainId": 57,
			 "strainName": "Mike Tyson", 
			 "strainType": "Indica",
			 "imageUrl": "images/strains/mike-tyson-marijuana-strain.jpg"

			},
			{"strainId": 58,
			 "strainName": "Moon Candy", 
			 "strainType": "Sativa",
			 "imageUrl": "images/strains/moon_candy.jpg"

			},
			{"strainId": 59,
			 "strainName": "Moonshine Diesel", 
			 "strainType": "Sativa",
			 "imageUrl": "images/strains/moonshine-Deisel.jpg"

			},
			{"strainId": 60,
			 "strainName": "Northern Lights", 
			 "strainType": "Indica",
			 "imageUrl": "images/strains/northern-lights_100x100_7d43.jpg"

			},
			{"strainId": 61,
			 "strainName": "Pineapple Express", 
			 "strainType": "Hybrid",
			 "imageUrl": "images/strains/pineapple-express_100x100.jpg"

			},
			{"strainId": 62,
			 "strainName": "Platinum Trinity Kush", 
			 "strainType": "Sativa",
			 "imageUrl": "images/strains/platinum_trinity_kush.jpg"

			},
			{"strainId": 63,
			 "strainName": "Private Reserve OG", 
			 "strainType": "Indica",
			 "imageUrl": "images/strains/private_reserve_OG.jpg"

			},
			{"strainId": 64,
			 "strainName": "Purple Haze", 
			 "strainType": "Sativa",
			 "imageUrl": "images/strains/purple-haze_100x100.jpg"

			},
			
			{"strainId": 65,
			 "strainName": "Purple Urkle", 
			 "strainType": "Indica",
			 "imageUrl": "images/strains/purple-urkle_100x100.jpg"

			},
			{"strainId": 66,
			 "strainName": "Raskal OG", 
			 "strainType": "Hybrid",
			 "imageUrl": "images/strains/raskal-og_100x100.jpg"

			},
			{"strainId": 67,
			 "strainName": "Regulator OG", 
			 "strainType": "Indica",
			 "imageUrl": "images/strains/regulator-og.jpg"

			},
			{"strainId": 68,
			 "strainName": "Saturn OG", 
			 "strainType": "Hybrid",
			 "imageUrl": "images/strains/saturn-og_100x100.jpg"

			},
			{"strainId": 69,
			 "strainName": "Sherbet Cookies", 
			 "strainType": "Hybrid",
			 "imageUrl": "images/strains/sunset-sherbet_100x100.jpg"

			},
			{"strainId": 70,
			 "strainName": "Sour Cherry", 
			 "strainType": "Hybrid",
			 "imageUrl": "images/strains/Sour_Cherry_Kush.jpg"

			},
			{"strainId": 71,
			 "strainName": "Stratosphere", 
			 "strainType": "Hybrid",
			 "imageUrl": "images/strains/stratosphere.jpg"

			},
			{"strainId": 72,
			 "strainName": "Super Grandaddy", 
			 "strainType": "Indica",
			 "imageUrl": "images/strains/Super_GDP.jpg"

			},
			{"strainId": 73,
			 "strainName": "Tangerine", 
			 "strainType": "Hybrid",
			 "imageUrl": "images/strains/tangerine_100x100jpg"

			},
			{"strainId": 74,
			 "strainName": "Tangilope", 
			 "strainType": "Sativa",
			 "imageUrl": "images/strains/tangilope_100x100.jpg"

			},
			{"strainId": 75,
			 "strainName": "Tropical OG", 
			 "strainType": "Indica",
			 "imageUrl": "images/strains/Tropical_OG.jpg"

			},
			{"strainId": 76,
			 "strainName": "Ancient OG", 
			 "strainType": "Indica",
			 "imageUrl": "images/strains/ancient-og_100x100.jpg"

			},
			{"strainId": 77,
			 "strainName": "Afghani", 
			 "strainType": "Indica",
			 "imageUrl": "images/strains/afghani_100x100_902b.jpg"

			},
			{"strainId": 78,
			 "strainName": "Avi-Dekel", 
			 "strainType": "Sativa",
			 "imageUrl": "images/strains/avi-dekel_100x100.jpg"

			},
			{"strainId": 79,
			 "strainName": "Bull Rider", 
			 "strainType": "Hybrid",
			 "imageUrl": "images/strains/bull-rider-1498.jpg"

			},
			{"strainId": 80,
			 "strainName": "Cannatonic", 
			 "strainType": "Hybrid",
			 "imageUrl": "images/strains/cannatonic_100x100.jpg"

			},
			{"strainId": 81,
			 "strainName": "Charlotte's Web", 
			 "strainType": "Sativa",
			 "imageUrl": "images/strains/charlotte-s-web_100x100.jpg"

			},
			{"strainId": 82,
			 "strainName": "G13 Haze", 
			 "strainType": "Indica",
			 "imageUrl": "images/strains/g13-haze_100x100.jpg"

			},
			{"strainId": 83,
			 "strainName": "Great White Shark", 
			 "strainType": "Sativa",
			 "imageUrl": "images/strains/great-white-shark_100x100.jpg"

			},
			{"strainId": 84,
			 "strainName": "Harle-Tsu", 
			 "strainType": "Hybrid",
			 "imageUrl": "images/strains/harle-tsu_100x100.jpg"

			},
			{"strainId": 85,
			 "strainName": "Harlequin", 
			 "strainType": "Sativa",
			 "imageUrl": "images/strains/harlequin_100x100.jpg"

			},
			{"strainId": 86,
			 "strainName": "Hog", 
			 "strainType": "Indica",
			 "imageUrl": "images/strains/hog_100x100.jpg"

			},
			{"strainId": 87,
			 "strainName": "King's Kush", 
			 "strainType": "Indica",
			 "imageUrl": "images/strains/king-s-kush_100x100.jpg"

			},
			{"strainId": 88,
			 "strainName": "Kosher Kush", 
			 "strainType": "Indica",
			 "imageUrl": "images/strains/kosher-kush_100x100.jpg"

			},
			{"strainId": 89,
			 "strainName": "Lemon Larry OG", 
			 "strainType": "Hybrid",
			 "imageUrl": "images/strains/larry-og_100x100.jpg"

			},
			{"strainId": 90,
			 "strainName": "Master Bubba", 
			 "strainType": "Hybrid",
			 "imageUrl": "images/strains/master-bubba_100x100jpg"

			},
			{"strainId": 91,
			 "strainName": "Pineapple Thai", 
			 "strainType": "Sativa",
			 "imageUrl": "images/strains/pineapple-thai_100x100.jpg"

			},
			{"strainId": 92,
			 "strainName": "Sour Tsunami", 
			 "strainType": "Hybrid",
			 "imageUrl": "images/strains/sour-tsunami_100x100.jpg"

			},
			{"strainId": 93,
			 "strainName": "The White", 
			 "strainType": "Hybrid",
			 "imageUrl": "images/strains/the-white_100x100.jpg"

			},
			{"strainId": 94,
			 "strainName": "Valentine X", 
			 "strainType": "Hybrid",
			 "imageUrl": "images/strains/Valentine-X.jpg"

			},
			{"strainId": 95,
			 "strainName": "White Fire Alien OG", 
			 "strainType": "Hybrid",
			 "imageUrl": "images/strains/white-fire-alien-og_100x100.jpg"

			},
			{"strainId": 96,
			 "strainName": "Yoda OG", 
			 "strainType": "Hybrid",
			 "imageUrl": "images/strains/yoda-og_100x100.jpg"

			},
			{"strainId": 97,
			 "strainName": "707 Headband", 
			 "strainType": "Hybrid",
			 "imageUrl": "images/strains/707-headband_100x100.jpg"

			},
			{"strainId": 98,
			 "strainName": "Acapulco Gold", 
			 "strainType": "Sativa",
			 "imageUrl": "images/strains/acapulco-gold_100x100.jpg"

			},
			{"strainId": 99,
			 "strainName": "Alien OG", 
			 "strainType": "Hybrid",
			 "imageUrl": "images/strains/alien-og_100x100.jpg"

			},
			{"strainId": 100,
			 "strainName": "Alien Rock Candy", 
			 "strainType": "Hybrid",
			 "imageUrl": "images/strains/alien-rock-candy_100x100.jpg"

			},
			{"strainId": 101,
			 "strainName": "Amnesia Haze", 
			 "strainType": "Sativa",
			 "imageUrl": "images/strains/amnesia-haze_100x100.jpg"

			},
			{"strainId": 102,
			 "strainName": "ATF", 
			 "strainType": "Sativa",
			 "imageUrl": "images/strains/alaskan-thunder-fuck_100x100.jpg"

			},
			{"strainId": 103,
			 "strainName": "Bay Cookies", 
			 "strainType": "Hybrid",
			 "imageUrl": "images/strains/bay_cookies.jpg"

			},
			{"strainId": 104,
			 "strainName": "Berry Queen", 
			 "strainType": "Hybrid",
			 "imageUrl": "images/strains/berryQueen.jpg"

			},
			{"strainId": 105,
			 "strainName": "Berry White", 
			 "strainType": "Hybrid",
			 "imageUrl": "images/strains/berry-white_100x100.jpg"

			},
			{"strainId": 106,
			 "strainName": "UW", 
			 "strainType": "Indica",
			 "imageUrl": "images/strains/uw_100x100.jpg"

			},
			{"strainId": 107,
			 "strainName": "Blue Dream", 
			 "strainType": "Hybrid",
			 "imageUrl": "images/strains/blue-dream_100x100.jpg"

			},
			{"strainId": 108,
			 "strainName": "Blue Moonshine", 
			 "strainType": "Indica",
			 "imageUrl": "images/strains/blue-moonshine_100x100.jpg"

			},
			{"strainId": 109,
			 "strainName": "Blueberry Trainwreck", 
			 "strainType": "Hybrid",
			 "imageUrl": "images/strains/blueberry_100x100.jpg"

			},
			{"strainId": 110,
			 "strainName": "Cannatonic #4", 
			 "strainType": "Hybrid",
			 "imageUrl": "images/strains/cannatonic_100x100.jpg"

			},
			{"strainId": 111,
			 "strainName": "Candy Jack", 
			 "strainType": "Sativa",
			 "imageUrl": "images/strains/candy-jack_100x100.jpg"

			},
			{"strainId": 112,
			 "strainName": "CandyLand", 
			 "strainType": "Sativa",
			 "imageUrl": "images/strains/candyland_100x100.jpg"

			},
			{"strainId": 113,
			 "strainName": "Cannalope Haze", 
			 "strainType": "Sativa",
			 "imageUrl": "images/strains/cannalope-haze_100x100.jpg"

			},
			{"strainId": 114,
			 "strainName": "Cataract Kush", 
			 "strainType": "Hybrid",
			 "imageUrl": "images/strains/cataract-kush_100x100.jpg"

			},
			{"strainId": 115,
			 "strainName": "Chemdawg", 
			 "strainType": "Hybrid",
			 "imageUrl": "images/strains/chemdawg_100x100.jpg"

			},
			{"strainId": 116,
			 "strainName": "Cherry Pie", 
			 "strainType": "Hybrid",
			 "imageUrl": "images/strains/cherry-pie_100x100.jpg"

			},
			{"strainId": 117,
			 "strainName": "Chocolate Thai", 
			 "strainType": "Sativa",
			 "imageUrl": "images/strains/chocolate-thai_100x100.jpg"

			},
			{"strainId": 118,
			 "strainName": "Clear Lake", 
			 "strainType": "Hybrid",
			 "imageUrl": "images/strains/clear_lake.jpg"

			},
			{"strainId": 119,
			 "strainName": "Dubtech", 
			 "strainType": "Indica",
			 "imageUrl": "images/strains/dubtech.jpg"

			},
			{"strainId": 120,
			 "strainName": "Ghost OG", 
			 "strainType": "Indica",
			 "imageUrl": "images/strains/ghost-og_100x100.jpg"

			},
			{"strainId": 121,
			 "strainName": "Grape Cookies", 
			 "strainType": "Indica",
			 "imageUrl": "images/strains/grape_Cookies.jpg"

			},
			{"strainId": 120,
			 "strainName": "Grape Kool Aid", 
			 "strainType": "Indica",
			 "imageUrl": "images/strains/Purple Wreck-578x433.jpg"

			},
			{"strainId": 121,
			 "strainName": "Jupiter Kush", 
			 "strainType": "Indica",
			 "imageUrl": "images/strains/jupiter-kush_100x100.jpg"

			},
			{"strainId": 122,
			 "strainName": "L.A. Confidential", 
			 "strainType": "Indica",
			 "imageUrl": "images/strains/la-confidential_100x100.jpg"

			},
			{"strainId": 123,
			 "strainName": "Lemon Jack", 
			 "strainType": "Sativa",
			 "imageUrl": "images/strains/lemon-jack_100x100.jpg"

			},
			{"strainId": 124,
			 "strainName": "Lemon OG Kush", 
			 "strainType": "Hybrid",
			 "imageUrl": "images/strains/lemon-og-kush_100x100.jpg"

			},
			{"strainId": 125,
			 "strainName": "Mad Max", 
			 "strainType": "Hybrid",
			 "imageUrl": "images/strains/MADMAX.jpg"

			},
			{"strainId": 126,
			 "strainName": "Mafia OG", 
			 "strainType": "Indica",
			 "imageUrl": "images/strains/mafia-og.jpg"

			},
			{"strainId": 127,
			 "strainName": "Mango Maui", 
			 "strainType": "Sativa",
			 "imageUrl": "images/strains/mango-maui-578x385.jpg"

			},
			{"strainId": 128,
			 "strainName": "May Weather Kush", 
			 "strainType": "Indica",
			 "imageUrl": "images/strains/May-weather-kush.jpg"

			},
			{"strainId": 129,
			 "strainName": "Phantom OG", 
			 "strainType": "Indica",
			 "imageUrl": "images/strains/phantom-og_100x100.jpg"

			},
			{"strainId": 130,
			 "strainName": "Pineapple Hogsbreath", 
			 "strainType": "Hybrid",
			 "imageUrl": "images/strains/hog-s-breath_100x100.jpg"

			},
			{"strainId": 131,
			 "strainName": "Silverback Gorilla", 
			 "strainType": "Indica",
			 "imageUrl": "images/strains/silverback-gorilla_100x100.jpg"

			},
			{"strainId": 132,
			 "strainName": "Sugar Plum", 
			 "strainType": "Sativa",
			 "imageUrl": "images/strains/sugar-plum_100x100.jpg"

			},
			{"strainId": 133,
			 "strainName": "Super Lemon Haze", 
			 "strainType": "Sativa",
			 "imageUrl": "images/strains/super-lemon-haze_100x100.jpg"

			},
			{"strainId": 134,
			 "strainName": "Lemon Marmalade", 
			 "strainType": "Hybrid",
			 "imageUrl": "images/strains/acapulco-gold_100x100.jpg"

			},
			{"strainId": 135,
			 "strainName": "White Fire OG", 
			 "strainType": "Hybrid",
			 "imageUrl": "images/strains/white-fire-og_100x100.jpg"

			},
			{"strainId": 138,
			 "strainName": "White Walker OG", 
			 "strainType": "Hybrid",
			 "imageUrl": "images/strains/whitewalker-og_100x100.jpg"

			},
			{"strainId": 139,
			 "strainName": "Cherry Bomb", 
			 "strainType": "Hybrid",
			 "imageUrl": "images/strains/cherry-bomb_100x100.jpg"

			},
			{"strainId": 140,
			 "strainName": "DJ Short Blueberry",
			 "strainType": "Indica",
			 "imageUrl": "images/strains/dj-short-blueberry_100x100.jpg"

			},
			{"strainId": 141,
			 "strainName": "El Alquimista",
			 "strainType": "Hybrid",
			 "imageUrl": "images/strains/El-Alquimista.jpg"

			},
			{"strainId": 142,
			 "strainName": "Godfather OG",
			 "strainType": "Indica",
			 "imageUrl": "images/strains/godfather-og_100x100.jpg"

			},
			{"strainId": 143,
			 "strainName": "Herijuana",
			 "strainType": "Indica",
			 "imageUrl": "images/strains/herijuana_100x100.jpg"

			},
			{"strainId": 144,
			 "strainName": "Lavender",
			 "strainType": "Indica",
			 "imageUrl": "images/strains/lavender_100x100.jpg"

			},
			{"strainId": 145,
			 "strainName": "Purple Coma",
			 "strainType": "Sativa",
			 "imageUrl": "images/strains/purple-coma.jpg"

			},
			{"strainId": 146,
			 "strainName": "Purple Passion",
			 "strainType": "Indica",
			 "imageUrl": "images/strains/purple-passion_100x100.jpg"

			},
			{"strainId": 147,
			 "strainName": "Sour Bubble",
			 "strainType": "Indica",
			 "imageUrl": "images/strains/sour-bubble_100x100.jpg"

			},
			{"strainId": 148,
			 "strainName": "Sour Dub",
			 "strainType": "Sativa",
			 "imageUrl": "images/strains/SourDub.jpg"

			},
			{"strainId": 149,
			 "strainName": "Strawberry Mist",
			 "strainType": "Sativa",
			 "imageUrl": "images/strains/Kali-Mist-Bud-Closeup.jpg"

			},
			{"strainId": 150,
			 "strainName": "LA Chocolat",
			 "strainType": "Hybrid",
			 "imageUrl": "images/strains/DNA_Genetics_Seeds_-_LA_Chocolat.jpg"

			},
			{"strainId": 151,
			 "strainName": "Afghani Bullrider",
			 "strainType": "Indica",
			 "imageUrl": "images/strains/afghani-bullrider_100x100.jpg"

			},
			{"strainId": 152,
			 "strainName": "Afgoo",
			 "strainType": "Indica",
			 "imageUrl": "images/strains/afgoo_100x100.jpg"

			},
			{"strainId": 153,
			 "strainName": "Afgooey",
			 "strainType": "Indica",
			 "imageUrl": "images/strains/afgooey_100x100.jpg"

			},
			{"strainId": 154,
			 "strainName": "AK-47",
			 "strainType": "Hybrid",
			 "imageUrl": "images/strains/ak-47_100x100.jpg"

			},
			{"strainId": 155,
			 "strainName": "AK-48",
			 "strainType": "Hybrid",
			 "imageUrl": "images/strains/ak-48_100x100.jpg"

			},
			{"strainId": 156,
			 "strainName": "Kalashnikova",
			 "strainType": "Hybrid",
			 "imageUrl": "images/strains/kalashnikova_100x100.jpg"

			},
			{"strainId": 157,
			 "strainName": "Black Buddah",
			 "strainType": "Indica",
			 "imageUrl": "images/strains/Black-Budha.jpg"

			},
			{"strainId": 158,
			 "strainName": "OG Cheese",
			 "strainType": "Hybrid",
			 "imageUrl": "images/strains/og-cheese_100x100.jpg"

			},
			{"strainId": 159,
			 "strainName": "Mercury OG",
			 "strainType": "Indica",
			 "imageUrl": "images/strains/mercury-og_100x100.jpg"

			},
			{"strainId": 160,
			 "strainName": "Silver Surfer",
			 "strainType": "Hybrid",
			 "imageUrl": "images/strains/silver-surfer_100x100.jpg"

			},
			{"strainId": 161,
			 "strainName": "Sour OG",
			 "strainType": "Hybrid",
			 "imageUrl": "images/strains/sour-og_100x100.jpg"

			},
			{"strainId": 162,
			 "strainName": "Mars OG",
			 "strainType": "Indica",
			 "imageUrl": "images/strains/mars-og_100x100.jpg"

			},
			{"strainId": 163,
			 "strainName": "White Rhino",
			 "strainType": "Indica",
			 "imageUrl": "images/strains/white-rhino_100x100.jpg"

			},
			{"strainId": 164,
			 "strainName": "Green Queen",
			 "strainType": "Hybrid",
			 "imageUrl": "images/strains/green-queen_100x100.jpg"

			},
			{"strainId": 165,
			 "strainName": "Green Dynamite",
			 "strainType": "Indica",
			 "imageUrl": "images/strains/dynamite_100x100.jpg"

			},
			{"strainId": 166,
			 "strainName": "J1",
			 "strainType": "Hybrid",
			 "imageUrl": "images/strains/j1_100x100.jpg"

			},
			{"strainId": 167,
			 "strainName": "Kryptonite",
			 "strainType": "Indica",
			 "imageUrl": "images/strains/kryptonite_100x100.jpg"

			},
			{"strainId": 168,
			 "strainName": "Master Kush",
			 "strainType": "Indica",
			 "imageUrl": "images/strains/master-kush_100x100.jpg"

			},
			{"strainId": 169,
			 "strainName": "Black Magic Kush",
			 "strainType": "Indica",
			 "imageUrl": "images/strains/black-magic-kush.jpg"

			},
			{"strainId": 170,
			 "strainName": "Blackberry Kush",
			 "strainType": "Indica",
			 "imageUrl": "images/strains/blackberry-kush_100x100.jpg"

			},
			{"strainId": 171,
			 "strainName": "Blue Diesel",
			 "strainType": "Hybrid",
			 "imageUrl": "images/strains/blue-diesel_100x100.jpg"

			}, 
			{"strainId": 172,
			 "strainName": "Blue Haze",
			 "strainType": "Hybrid",
			 "imageUrl": "images/strains/blue-haze_100x100.jpg"

			},
			{"strainId": 173,
			 "strainName": "Brutus OG",
			 "strainType": "Indica",
			 "imageUrl": "images/strains/brutus-og-3.png"

			},
			{"strainId": 174,
			 "strainName": "Bubba Kush",
			 "strainType": "Indica",
			 "imageUrl": "images/strains/bubba-kush_100x100.jpg"

			},
			{"strainId": 175,
			 "strainName": "Cheese",
			 "strainType": "Hybrid",
			 "imageUrl": "images/strains/cheese_100x100.jpg"

			}, 
			{"strainId": 176,
			 "strainName": "Cinderella 99",
			 "strainType": "Hybrid",
			 "imageUrl": "images/strains/cinderella-99_100x100.jpg"

			}, 
			{"strainId": 177,
			 "strainName": "Diablo Haze",
			 "strainType": "Indica",
			 "imageUrl": "images/strains/diablo_100x100.jpg"

			},
			{"strainId": 178,
			 "strainName": "Diamond OG",
			 "strainType": "Indica",
			 "imageUrl": "images/strains/diamond-og_100x100.jpg"

			},
			{"strainId": 179,
			 "strainName": "Grandaddy Purple",
			 "strainType": "Indica",
			 "imageUrl": "images/strains/grandaddy-purple.jpg"

			},
			{"strainId": 180,
			 "strainName": "Fire OG",
			 "strainType": "Hybrid",
			 "imageUrl": "images/strains/fire-og_100x100.jpg"

			}, 
			{"strainId": 181,
			 "strainName": "Girl Scout Cookies",
			 "strainType": "Hybrid",
			 "imageUrl": "images/strains/girl-scout-cookies_100x100.jpg"

			},
			{"strainId": 182,
			 "strainName": "Grape Ape",
			 "strainType": "Indica",
			 "imageUrl": "images/strains/grape-ape_100x100.jpg"

			},
			{"strainId": 183,
			 "strainName": "Headband",
			 "strainType": "Hybrid",
			 "imageUrl": "images/strains/headband_100x100.jpg"

			}, 
			{"strainId": 184,
			 "strainName": "Island Sweet Skunk",
			 "strainType": "Sativa",
			 "imageUrl": "images/strains/island-sweet-skunk_100x100.jpg"

			},
			{"strainId": 185,
			 "strainName": "LA Kush",
			 "strainType": "Hybrid",
			 "imageUrl": "images/strains/la-kush_100x100.jpg"

			},
			{"strainId": 186,
			 "strainName": "Gorilla Glue #4",
			 "strainType": "Hybrid",
			 "imageUrl": "images/strains/gorilla-glue--4_100x100.jpg"

			},
			{"strainId": 187,
			 "strainName": "Jack Frost",
			 "strainType": "Hybrid",
			 "imageUrl": "images/strains/jack-frost_100x100.jpg"

			},
			{"strainId": 188,
			 "strainName": "Kali Mist",
			 "strainType": "Hybrid",
			 "imageUrl": "images/strains/kali-mist_100x100.jpg"

			},
		 	{"strainId": 189,
			 "strainName": "NY Sour Diesel",
			 "strainType": "Hybrid",
			 "imageUrl": "images/strains/nyc-sour-diesel.jpg"

			},
		 	{"strainId": 190,
		 	"strainName": "Skunk #1",
		 	"strainType": "Hybrid",
		 	"imageUrl": "images/strains/skunk--1_100x100.jpg"

			},
			{"strainId": 191,
			 	"strainName": "Snowcap",
			 	"strainType": "Hybrid",
			 	"imageUrl": "images/strains/snowcap_100x100.jpg"

			},
			{"strainId": 192,
			 	"strainName": "Super Silver Haze",
			 	"strainType": "Sativa",
			 	"imageUrl": "images/strains/super-silver-haze_100x100.jpg"

			},
			{"strainId": 193,
			 	"strainName": "Neptune OG",
			 	"strainType": "Indica",
			 	"imageUrl": "images/strains/neptune-og_100x100.jpg"

			},
			{"strainId": 194,
			 	"strainName": "Organic OG",
			 	"strainType": "Hybrid",
			 	"imageUrl": "images/strains/organic-og-kush.JPG"

			},
			{"strainId": 195,
			 	"strainName": "Kandy Kush",
			 	"strainType": "Hybrid",
			 	"imageUrl": "images/strains/kandy-kush_100x100.jpg"

			},
			{"strainId": 196,
			 	"strainName": "King Louis XIII",
			 	"strainType": "Sativa",
			 	"imageUrl": "images/strains/king-louis-xiii_100x100.jpg"

			},
			{"strainId": 197,
			 	"strainName": "White Kryptonite",
			 	"strainType": "Hybrid",
			 	"imageUrl": "images/strains/white-kryptonite_100x100.jpg"

			},
			{"strainId": 198,
			 	"strainName": "Legend OG",
			 	"strainType": "Hybrid",
			 	"imageUrl": "images/strains/kryptonite_100x100.jpg"

			},
			{"strainId": 199,
			 	"strainName": "Lemon Diesel",
			 	"strainType": "Hybrid",
			 	"imageUrl": "images/strains/lemon-diesel_100x100.jpg"

			},
			{"strainId": 200,
			 	"strainName": "Lemon Kush",
			 	"strainType": "Hybrid",
			 	"imageUrl": "images/strains/lemon-kush_100x100.jpg"

			},
			{"strainId": 201,
			 	"strainName": "Blackwater",
			 	"strainType": "Indica",
			 	"imageUrl": "images/strains/blackwater_100x100.jpg"
			 	
			}, 
			{"strainId": 202,
			 	"strainName": "UltraViolet OG",
			 	"strainType": "Indica",
			 	"imageUrl": "images/strains/UltravioletOG.jpg"
			 	
			}, 
			{"strainId": 203,
			 	"strainName": "Face Off OG",
			 	"strainType": "Indica",
			 	"imageUrl": "images/strains/face-off-og_100x100.jpg"
			 	
			},
			{"strainId": 204,
			 	"strainName": "Citrix",
			 	"strainType": "Hybrid",
			 	"imageUrl": "images/strains/Citrix.jpg"
			 	
			},
			{"strainId": 205,
			 	"strainName": "Grapefruit",
			 	"strainType": "Sativa",
			 	"imageUrl": "images/strains/grapefruit_100x100.jpg"
			 	
			},
			{"strainId": 206,
			 	"strainName": "Chocolate Kush",
			 	"strainType": "Sativa",
			 	"imageUrl": "images/strains/chocolate-kush_100x100.jpg"
			 	
			},
			{"strainId": 207,
			 	"strainName": "Chocolate Chunk",
			 	"strainType": "Indica",
			 	"imageUrl": "images/strains/chocolate-chunk_100x100.jpg"
			 	
			},
			{"strainId": 208,
			 	"strainName": "Chocolope",
			 	"strainType": "Sativa",
			 	"imageUrl": "images/strains/chocolope_100x100.jpg"
			 	
			},
			{"strainId": 209,
			 	"strainName": "Cinex",
			 	"strainType": "Hybrid",
			 	"imageUrl": "images/strains/cinex_100x100.jpg"
			 	
			},
			{"strainId": 210,
			 	"strainName": "Shiskaberry",
			 	"strainType": "Indica",
			 	"imageUrl": "images/strains/shishkaberry_100x100.jpg"
			 	
			},
			{"strainId": 211,
			 	"strainName": "R4",
			 	"strainType": "Indica",
			 	"imageUrl": "images/strains/R4-200x160.jpg"
			 	
			},
			{"strainId": 212,
			 	"strainName": "Super Sweet",
			 	"strainType": "Indica",
			 	"imageUrl": "images/strains/super-sweet_100x100.jpg"
			 	
			},
			{"strainId": 213,
			 	"strainName": "Sweet Lavender Diesel",
			 	"strainType": "Indica",
			 	"imageUrl": "images/strains/sweet-lavender-diesel.jpg"
			 	
			},
			{"strainId": 214,
			 	"strainName": "Cotton Candy Kush",
			 	"strainType": "Indica",
			 	"imageUrl": "images/strains/cotton-candy-kush_100x100.jpg"
			 	
			},
			{"strainId": 215,
			 	"strainName": "Larry OG",
			 	"strainType": "Hybrid",
			 	"imageUrl": "images/strains/larry-og_100x100.jpg"
			 	
			}, 
			{"strainId": 216,
			 	"strainName": "Flo",
			 	"strainType": "Hybrid",
			 	"imageUrl": "images/strains/flo_100x100.jpg"
			 	
			},
			{"strainId": 217,
			 	"strainName": "Obama Kush",
			 	"strainType": "Indica",
			 	"imageUrl": "images/strains/obama-kush_100x100.jpg"
			 	
			},
			{"strainId": 218,
			 	"strainName": "Orange Crush",
			 	"strainType": "Hybrid",
			 	"imageUrl": "images/strains/orange-crush_100x100.jpg"
			 	
			},
			{"strainId": 219,
			 	"strainName": "Pink Kush",
			 	"strainType": "Hybrid",
			 	"imageUrl": "images/strains/pink-kush_100x100.jpg"
			 	
			},
			{"strainId": 220,
			 	"strainName": "Red Dragon",
			 	"strainType": "Hybrid",
			 	"imageUrl": "images/strains/red-dragon_100x100.jpg"
			 	
			},
			{"strainId": 221,
			 	"strainName": "Purple Sour Diesel",
			 	"strainType": "Hybrid",
			 	"imageUrl": "images/strains/purple-sour-diesel_100x100.jpg"
			 	
			},
			{"strainId": 222,
			 	"strainName": "Dream Queen",
			 	"strainType": "Hybrid",
			 	"imageUrl": "images/strains/dream-queen_100x100.jpg"
			 	
			},
			{"strainId": 223,
			 	"strainName": "Willy's Wonder",
			 	"strainType": "Indica",
			 	"imageUrl": "images/strains/willy-s-wonder_100x100.jpg"
			 	
			},
			{"strainId": 224,
			 	"strainName": "Jean Guy",
			 	"strainType": "Hybrid",
			 	"imageUrl": "images/strains/jean-guy_100x100.jpg"
			 	
			},
			{"strainId": 225,
			 	"strainName": "Orange Bud",
			 	"strainType": "Hybrid",
			 	"imageUrl": "images/strains/orange-bud_100x100.jpg"
			 	
			},
			{"strainId": 226,
			 	"strainName": "Fucking Incredible",
			 	"strainType": "Indica",
			 	"imageUrl": "images/strains/fucking-incredible_100x100.jpg"
			 	
			},
			{"strainId": 227,
			 	"strainName": "Sage N Sour",
			 	"strainType": "Indica",
			 	"imageUrl": "images/strains/sage-n-sour_100x100.jpg"
			 	
			},
			{"strainId": 228,
			 	"strainName": "Bubba OG",
			 	"strainType": "Indica",
			 	"imageUrl": "images/strains/bubba-og_100x100.jpg"
			 	
			},
			{"strainId": 229,
			 	"strainName": "Hawaiian Snow",
			 	"strainType": "Sativa",
			 	"imageUrl": "images/strains/hawaiian-snow_100x100.jpg"
			 	
			},
			{"strainId": 230,
			 	"strainName": "Dr. Who",
			 	"strainType": "Hybrid",
			 	"imageUrl": "images/strains/hawaiian-snow_100x100.jpg"
			 	
			},
			{"strainId": 231,
			 	"strainName": "Pineapple Chunk",
			 	"strainType": "Hybrid",
			 	"imageUrl": "images/strains/pineapple-chunk_100x100.jpg"
			 	
			},
			{"strainId": 232,
			 	"strainName": "Pot of Gold",
			 	"strainType": "Indica",
			 	"imageUrl": "images/strains/pot-of-gold_100x100.jpg"
			 	
			},
			{"strainId": 233,
			 	"strainName": "Tangerine Kush",
			 	"strainType": "Indica",
			 	"imageUrl": "images/strains/tangerine-kush_100x100.jpg"
			 	
			},
			{"strainId": 234,
			 	"strainName": "Black Cherry Soda",
			 	"strainType": "Hybrid",
			 	"imageUrl": "images/strains/black-cherry-soda_100x100.jpg"
			 	
			},
			{"strainId": 235,
			 	"strainName": "Qrazy Train",
			 	"strainType": "Hybrid",
			 	"imageUrl": "images/strains/qrazy-train_100x100.jpg"
			 	
			}, 
			{"strainId": 236,
			 	"strainName": "Death Star OG",
			 	"strainType": "Hybrid",
			 	"imageUrl": "images/strains/death-star-og_100x100.jpg"
			 	
			},
			{"strainId": 237,
			 	"strainName": "Blueberry Cheesecake",
			 	"strainType": "Hybrid",
			 	"imageUrl": "images/strains/blueberry-cheesecake_100x100.jpg"
			 	
			},
			{"strainId": 238,
			 	"strainName": "Blue Crack",
			 	"strainType": "Hybrid",
			 	"imageUrl": "images/strains/blue-crack_100x100.jpg"
			 	
			},
			{"strainId": 239,
			 	"strainName": "Bio-Diesel",
			 	"strainType": "Hybrid",
			 	"imageUrl": "images/strains/bio-diesel_100x100.jpg"
			 	
			}, 
			{"strainId": 240,
			 	"strainName": "Power Kush",
			 	"strainType": "Indica",
			 	"imageUrl": "images/strains/power-kush_100x100.jpg"
			 	
			}, 
			{"strainId": 241,
			 	"strainName": "Panama Red",
			 	"strainType": "Sativa",
			 	"imageUrl": "images/strains/panama-red_100x100.jpg"
			 	
			}, 
			{"strainId": 242,
			 	"strainName": "Purple Dragon",
			 	"strainType": "Indica",
			 	"imageUrl": "images/strains/purple-dragon_100x100.jpg"
			 	
			}, 
			{"strainId": 243,
			 	"strainName": "King Kong",
			 	"strainType": "Hybrid",
			 	"imageUrl": "images/strains/king-kong_100x100.jpg"
			 	
			}, 
			{"strainId": 244,
			 	"strainName": "Church OG",
			 	"strainType": "Hybrid",
			 	"imageUrl": "images/strains/church-og_100x100.jpg"
			 	
			}, 
			{"strainId": 245,
			 	"strainName": "Purple Arrow",
			 	"strainType": "Hybrid",
			 	"imageUrl": "images/strains/purple-arrow_100x100.jpg"
			 	
			}, 
			{"strainId": 246,
			 	"strainName": "Pandora's Box",
			 	"strainType": "Sativa",
			 	"imageUrl": "images/strains/pandora-s-box_100x100.jpg"
			 	
			}, 
			{"strainId": 247,
			 	"strainName": "Abusive OG",
			 	"strainType": "Indica",
			 	"imageUrl": "images/strains/abusive-og_100x100.jpg"
			 	
			}, 
			{"strainId": 248,
			 	"strainName": "Platinum Purple Kush",
			 	"strainType": "Indica",
			 	"imageUrl": "images/strains/Platinum-Purple-Kush_100x100.jpg"
			 	
			},
			{"strainId": 249,
			 	"strainName": "Black Tuna",
			 	"strainType": "Indica",
			 	"imageUrl": "images/strains/black-tuna_100x100.jpg"
			 	
			},
			{"strainId": 250,
			 	"strainName": "Charlie Sheen",
			 	"strainType": "Hybrid",
			 	"imageUrl": "images/strains/charlie-sheen_100x100.jpg"
			 	
			}, 
			{"strainId": 251,
			 	"strainName": "Rainbow",
			 	"strainType": "Hybrid",
			 	"imageUrl": "images/strains/rainbow_100x100.jpg"
			 	
			},
			{"strainId": 252,
			 	"strainName": "Caramelicious",
			 	"strainType": "Hybrid",
			 	"imageUrl": "images/strains/caramelicious_100x100.jpg"
			 	
			}, 
			{"strainId": 253,
			 	"strainName": "Sour Cream",
			 	"strainType": "Hybrid",
			 	"imageUrl": "images/strains/sour-cream_100x100.jpg"
			 	
			},
			{"strainId": 254,
			 	"strainName": "Apollo 11",
			 	"strainType": "Hybrid",
			 	"imageUrl": "images/strains/apollo-11_100x100.jpg"
			 	
			}, 
			{"strainId": 255,
			 	"strainName": "Green Crack Extreme",
			 	"strainType": "Sativa",
			 	"imageUrl": "images/strains/green-crack-extreme_100x100.jpg"
			 	
			},
			{"strainId": 256,
			 	"strainName": "Sour Cheese",
			 	"strainType": "Hybrid",
			 	"imageUrl": "images/strains/sour-cheese_100x100.jpg"
			 	
			}, 
			{"strainId": 257,
			 	"strainName": "Venom OG",
			 	"strainType": "Hybrid",
			 	"imageUrl": "images/strains/venom-og_100x100.jpg"
			 	
			}, 
			{"strainId": 258,
			 	"strainName": "Platinum Wreck",
			 	"strainType": "Hybrid",
			 	"imageUrl": "images/strains/platinum_kush_indica.jpg"
			 	
			}, 
			{"strainId": 259,
			 	"strainName": "Deep Purple",
			 	"strainType": "Indica",
			 	"imageUrl": "images/strains/deep-purple_100x100.jpg"
			 	
			},
			{"strainId": 261,
			 	"strainName": "Purple Afghani",
			 	"strainType": "Indica",
			 	"imageUrl": "images/strains/purple-afghani_100x100.jpg"
			 	
			},
			{"strainId": 262,
			 	"strainName": "Heavy Duty Fruity",
			 	"strainType": "Hybrid",
			 	"imageUrl": "images/strains/heavy-duty-fruity_100x100.jpg"
			 	
			}, 
			{"strainId": 263,
			 	"strainName": "The Truth",
			 	"strainType": "Hybrid",
			 	"imageUrl": "images/strains/the-truth_100x100.jpg"
			 	
			}, 
			{"strainId": 264,
			 	"strainName": "Triple Diesel",
			 	"strainType": "Hybrid",
			 	"imageUrl": "images/strains/triple-diesel_100x100.jpg"
			 	
			},
			{"strainId": 265,
			 	"strainName": "Grape Crush",
			 	"strainType": "Hybrid",
			 	"imageUrl": "images/strains/grape-crush_100x100.jpg"
			 	
			}, 
			{"strainId": 266,
			 	"strainName": "Holland's Hope",
			 	"strainType": "Indica",
			 	"imageUrl": "images/strains/hollands-hope_100x100.jpg"
			 	
			},
			{"strainId": 267,
			 	"strainName": "Black Cherry OG",
			 	"strainType": "Indica",
			 	"imageUrl": "images/strains/black-cherry-og_100x100.jpg"
			 	
			},
			{"strainId": 268,
			 	"strainName": "Blue Frost",
			 	"strainType": "Hybrid",
			 	"imageUrl": "images/strains/blue-frost_100x100.jpg"
			 	
			},
			{"strainId": 269,
			 	"strainName": "BC Sweet Tooth",
			 	"strainType": "Hybrid",
			 	"imageUrl": "images/strains/bc-sweet-tooth_100x100.jpg"
			 	
			},
			{"strainId": 270,
			 	"strainName": "Pink Panther",
			 	"strainType": "Hybrid",
			 	"imageUrl": "images/strains/pink-panther_100x100.jpg"
			 	
			},
			{"strainId": 271,
			 	"strainName": "Orange Diesel",
			 	"strainType": "Hybrid",
			 	"imageUrl": "images/strains/orange-diesel_100x100.jpg"
			 	
			}, 
			{"strainId": 272,
			 	"strainName": "Watermelon",
			 	"strainType": "Indica",
			 	"imageUrl": "images/strains/watermelon_100x100.jpg"
			 	
			},
			{"strainId": 273,
			 	"strainName": "OG Wreck",
			 	"strainType": "Hybrid",
			 	"imageUrl": "images/strains/og-wreck_100x100.jpg"
			 	
			},
			{"strainId": 274,
			 	"strainName": "Green Hornet",
			 	"strainType": "Hybrid",
			 	"imageUrl": "images/strains/green-hornet_100x100.jpg"
			 	
			},
			{"strainId": 275,
			 	"strainName": "Purple Ice",
			 	"strainType": "Hybrid",
			 	"imageUrl": "images/strains/purple-ice_100x100.jpg"
			 	
			},
			{"strainId": 276,
			 	"strainName": "Blue Knight",
			 	"strainType": "Hybrid",
			 	"imageUrl": "images/strains/blue-knight_100x100.jpg"
			 	
			}, 
			{"strainId": 277,
			 	"strainName": "Scooby Snacks",
			 	"strainType": "Hybrid",
			 	"imageUrl": "images/strains/scooby-snacks_100x100.jpg"
			 	
			},
			{"strainId": 278,
			 	"strainName": "Afghan Diesel",
			 	"strainType": "Hybrid",
			 	"imageUrl": "images/strains/afghan-diesel_100x100.jpg"
			 	
			}, 
			{"strainId": 279,
			 	"strainName": "Tigers Milk",
			 	"strainType": "Indica",
			 	"imageUrl": "images/strains/tiger-s-milk_100x100.jpg"
			 	
			}, 
			{"strainId": 280,
			 	"strainName": "Mexican",
			 	"strainType": "Sativa",
			 	"imageUrl": "images/strains/mexican_100x100.jpg"
			 	
			},
			{"strainId": 281,
			 	"strainName": "Lifesaver",
			 	"strainType": "Hybrid",
			 	"imageUrl": "images/strains/lifesaver_100x100.jpg"
			 	
			},
			{"strainId": 282,
			 	"strainName": "Freezeland",
			 	"strainType": "Indica",
			 	"imageUrl": "images/strains/freezeland_100x100.jpg"
			 	
			},
			{"strainId": 283,
			 	"strainName": "Critical Sensi Star",
			 	"strainType": "Indica",
			 	"imageUrl": "images/strains/critical-sensi-star_100x100.jpg"
			 	
			},
			{"strainId": 284,
			 	"strainName": "Rugburn OG",
			 	"strainType": "Hybrid",
			 	"imageUrl": "images/strains/rug-burn-og_100x100.jpg"
			 	
			},
			{"strainId": 285,
			 	"strainName": "White Lightning",
			 	"strainType": "Hybrid",
			 	"imageUrl": "images/strains/white-lightning_100x100.jpg"
			 	
			},
			{"strainId": 286,
			 	"strainName": "Black Betty",
			 	"strainType": "Hybrid",
			 	"imageUrl": "images/strains/black-betty_100x100.jpg"
			 	
			},
			{"strainId": 287,
			 	"strainName": "The Black",
			 	"strainType": "Indica",
			 	"imageUrl": "images/strains/the-black_100x100.jpg"
			 	
			},
			{"strainId": 288,
			 	"strainName": "The Black",
			 	"strainType": "Sativa",
			 	"imageUrl": "images/strains/pineapple-jack_100x100.jpg"
			 	
			},
			{"strainId": 289,
			 	"strainName": "Barbara Bud",
			 	"strainType": "Indica",
			 	"imageUrl": "images/strains/barbara-bud_100x100.jpg"
			 	
			},
			{"strainId": 290,
			 	"strainName": "Wappa",
			 	"strainType": "Indica",
			 	"imageUrl": "images/strains/wappa_100x100.jpg"
			 	
			}

		]; 



		var strains = [
			{"strainId": 1,
			 "strainName": "Trainwreck", 
			 "strainType": "Hybrid",
			 "components": [
				 	{ 
				 		"name": "THC9", 
				 		"value": 15.15
				 	},
				 	{ 
				 		"name": "CBD", 
				 		"value": 0.25
				 	},
				 	{ 
				 		"name": "CBN", 
				 		"value": 0.57
				 	},
				 	{ 
				 		"name": "CBG", 
				 		"value": 0.62
				 	},
				 	{ 
				 		"name": "CBC", 
				 		"value": 0.30
				 	},
				 	{ 
				 		"name": "THCV", 
				 		"value": 0.03
				 	},
				 	{ 
				 		"name": "THCA", 
				 		"value": 0.0
				 	},
				 	{ 
				 		"name": "THC8", 
				 		"value": 0.0
				 	},
				 	{ 
				 		"name": "Pulegone", 
				 		"value": 0.0
				 	},
				 	{ 
				 		"name": "Myrcene", 
				 		"value": 0.40
				 	},
				 	{ 
				 		"name": "Caryophyllene", 
				 		"value": 0.40
				 	},
				 	{ 
				 		"name": "Limonene", 
				 		"value": 0.50
				 	},
				 	{ 
				 		"name": "Linalool", 
				 		"value": 0.01
				 	},
				 	{ 
				 		"name": "Eucalyptol", 
				 		"value": 0.0
				 	},
				 	{ 
				 		"name": "Pinene", 
				 		"value": 0.20
				 	},
				 	{ 
				 		"name": "Terpineol", 
				 		"value": 0.00
				 	},
				 	{ 
				 		"name": "Terpineol-4", 
				 		"value": 0.0
				 	},
				 	{ 
				 		"name": "Cymene", 
				 		"value": 0.0
				 	},
				 	{ 
				 		"name": "Apigenin", 
				 		"value": 0.0
				 	},
				 	{ 
				 		"name": "Quercetin", 
				 		"value": 0.0
				 	},
				 	{ 
				 		"name": "Cannflavin A", 
				 		"value": 0.0
				 	},
				 	{ 
				 		"name": "Beta-sitosterol", 
				 		"value": 0.0
				 	},
				 	{ 
				 		"name": "CBL", 
				 		"value": 0.0
				 	},
				 	{ 
				 		"name": "Humulene", 
				 		"value": 0.00
				 	},
				 	{ 
				 		"name": "Terpinolene", 
				 		"value": 0.00
				 	} 	
		 	],
		 	 "taste": ["Earthy","Pine","Pungent"],
		 	 "conditions": ["ADD/ADHD", "Anxiety", "Bipolar", "Depression", "Insomnia", "Pain", "Stress", "Headache"],
			 "positiveEffects": ["Euphoric", "Happy", "Uplifted", "Relaxed", "Creative"],
			 "negativeEffects": ["Dry Mouth", "Dry Eyes", "Paranoid", "Dizzy", "Anxious"],
			 "descriptionDetailed": "Trainwreck begins its speedy hurtle through the mind with a surge of euphoria, awakening creativity and happiness. Migraines, pain, and arthritis are mowed down by Trainwreck's high THC content, and many patients also use it for relief of anxiety, ADD/ADHD, and PTSD.",
			 "descriptionAbbrev":  "Effects that hit like a freight train",
			 "tags": ["Earthy", "Pine", "Pungent"],
			 "imageUrl": "images/strains/trainwreck_100x100.jpg"
			},
			{"strainId": 2,
			 "strainName": "White Widow", 
			 "strainType": "Hybrid",
			 "components": [
			 	{ 
			 		"name": "THC9", 
			 		"value": 14.68
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 0.17
			 	},
			 	{ 
			 		"name": "CBN", 
			 		"value": 0.51
			 	},
			 	{ 
			 		"name": "CBG", 
			 		"value": 0.35
			 	},
			 	{ 
			 		"name": "CBC", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCV", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCA", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "THC8", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Pulegone", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Myrcene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Caryophyllene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Limonene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Linalool", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Eucalyptol", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Pinene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol-4", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Cymene", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Apigenin", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Quercetin", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Cannflavin A", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Beta-sitosterol", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "CBL", 
			 		"value": 0.0
			 	},
			 	{ 
				 		"name": "Humulene", 
				 		"value": 0.00
				},
				{ 
				 		"name": "Terpinolene", 
				 		"value": 0.00
				}
			 ],
			 "taste": ["Earthy","Woody","Pungent"],	 	
		 	 "conditions": ["Anxiety","Depression", "Stress", "Pain", "Insomnia"],
			 "positiveEffects": ["Happy", "Energetic", "Euphoric", "Uplifted", "Relaxed", "Creative"],
			 "negativeEffects": ["Dry Mouth", "Dry Eyes", "Paranoid", "Dizzy", "Anxious"],
			 "descriptionDetailed": "A powerful burst of euphoria and energy breaks through immediately, stimulating both conversation and creativity.",
			 "descriptionAbbrev":  "A powerful burst of euphoria and energy breaks through immediately, stimulating both conversation and creativity.",
			 "tags": ["Hybrid", "White Widow"],
			 "imageUrl": "images/strains/white-widow_100x100.jpg"
			},
			{"strainId": 3,
			 "strainName": "Sage", 
			 "strainType": "Hybrid",
			 "components": [
			 	{ 
			 		"name": "THC9", 
			 		"value": 18.36
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 0.22
			 	},
			 	{ 
			 		"name": "CBN", 
			 		"value": 0.44
			 	},
			 	{ 
			 		"name": "CBG", 
			 		"value": 0.40
			 	},
			 	{ 
			 		"name": "CBC", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCV", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCA", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "THC8", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Pulegone", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Myrcene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Caryophyllene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Limonene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Linalool", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Eucalyptol", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Pinene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol-4", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Cymene", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Apigenin", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Quercetin", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Cannflavin A", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Beta-sitosterol", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "CBL", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Humulene", 
			 		"value": 0.00
				},
				{ 
			 		"name": "Terpinolene", 
			 		"value": 0.00
				}
		 	],
		 	 "taste": ["Sage","Earthy","Woody"],   
		 	 "conditions": ["Depression", "Anxiety", "Stress", "Pain", "Fatigue", "Muscle Spasms", "Fibromyalgia"],
			 "positiveEffects": ["Long Lasting", "Uplifted", "Happy"],
			 "negativeEffects": [""],
			 "descriptionDetailed": "Spicy sandalwood flavor combined with a Long Lasting and uplifting high make this the plant for those who like the best.",
			 "descriptionAbbrev":  "Spicy sandalwood flavor combined with a Long Lasting and uplifting high make this the plant for those who like the best.",
			 "tags": ["Hybrid", "Sage"],
			 "imageUrl": "images/strains/sage_100x100.jpg"
			},
			{"strainId": 4,
			 "strainName": "Skywalker OG", 
			 "strainType": "Hybrid",
			 "components": [
			 	{ 
			 		"name": "THC9", 
			 		"value": 18.36
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 0.22
			 	},
			 	{ 
			 		"name": "CBN", 
			 		"value": 0.03
			 	},
			 	{ 
			 		"name": "CBG", 
			 		"value": 0.50
			 	},
			 	{ 
			 		"name": "CBC", 
			 		"value": 0.10
			 	},
			 	{ 
			 		"name": "THCV", 
			 		"value": 0.40
			 	},
			 	{ 
			 		"name": "THCA", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "THC8", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Pulegone", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Myrcene", 
			 		"value": 1.10
			 	},
			 	{ 
			 		"name": "Caryophyllene", 
			 		"value": 1.00
			 	},
			 	{ 
			 		"name": "Limonene", 
			 		"value": 0.60
			 	},
			 	{ 
			 		"name": "Linalool", 
			 		"value": 0.50
			 	},
			 	{ 
			 		"name": "Eucalyptol", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Pinene", 
			 		"value": 0.50
			 	},
			 	{ 
			 		"name": "Terpineol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol-4", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Cymene", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Apigenin", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Quercetin", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Cannflavin A", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Beta-sitosterol", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "CBL", 
			 		"value": 0.7
			 	},
			 	{ 
			 		"name": "Humulene", 
			 		"value": 0.00
				},
				{ 
			 		"name": "Terpinolene", 
			 		"value": 0.00
				} 	
		 	],  
		 	"taste": ["Earthy","Pungent", "Sweet"],
		 	 "conditions": ["Tension", "Anxiety", "Stress", "Pain"],
			 "positiveEffects": ["Relaxed", "Mild tingling", "Numbness"],
			 "negativeEffects": [""],
			 "descriptionDetailed": "This strain makes relaxation your only mission, and some users report strong body effects that include mild tingling and numbness. If pain and physical limitations are the issue, Skywalker OG is here to rescue you.",
			 "descriptionAbbrev":  "Makes relaxation your only mission.",
			 "tags": ["Hybrid", "Skywalker OG", "OG"],
			 "imageUrl": "images/strains/skywalker-og_100x100.jpg"
			},
			{"strainId": 5,
			 "strainName": "Permafrost", 
			 "strainType": "Hybrid",
			 "components": [
			 	{ 
			 		"name": "THC9", 
			 		"value": 15.54
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 0.30
			 	},
			 	{ 
			 		"name": "CBN", 
			 		"value": 0.81
			 	},
			 	{ 
			 		"name": "CBG", 
			 		"value": 0.44
			 	},
			 	{ 
			 		"name": "CBC", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCV", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCA", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "THC8", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Pulegone", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Myrcene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Caryophyllene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Limonene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Linalool", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Eucalyptol", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Pinene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol-4", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Cymene", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Apigenin", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Quercetin", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Cannflavin A", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Beta-sitosterol", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "CBL", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Humulene", 
			 		"value": 0.00
				},
				{ 
			 		"name": "Terpinolene", 
			 		"value": 0.00
				} 	
		 	],  
		 	"taste": ["Earthy","Pine", "Sweet"],
			"conditions": ["Gastrointestinal Disorders", "ADD/ADHD", "Anxiety", "Arthritis", "Asthma", "Multiple Sclerosis", "Stress", "Pain", "Depression", "Insomnia", "Headache"],
			 "positiveEffects": ["Happy", "Relaxed", "Uplifted", "Creative", "Euphoric", "Potent", "Balanced", "Pain relief"],
			 "negativeEffects": ["Dry Mouth", "Dry Eyes", "Dizzy", "Paranoid", "Headache", "Drowsiness"],
			 "descriptionDetailed": "Larger doses demonstrate the strain's potency: as sensory detail peaks, attention becomes transfixed, and a full-body calm takes over. For this reason, Permafrost may help patients treating ADD/ADHD and anxiety symptoms, and others have reported its success in treating arthritis, asthma, multiple sclerosis, and gastrointestinal disorders.",
			 "descriptionAbbrev":  "Permafrost's relaxing effects are balanced between mind and body.",
			 "tags": ["Hybrid", "Permafrost"],
			 "imageUrl": "images/strains/permafrost_100x100.jpg"
			},
			{"strainId": 6,
			 "strainName": "Querkle", 
			 "strainType": "Indica",
			 "components": [
			 	{ 
			 		"name": "THC9", 
			 		"value": 25.20
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 0.20
			 	},
			 	{ 
			 		"name": "CBN", 
			 		"value": 0.68
			 	},
			 	{ 
			 		"name": "CBG", 
			 		"value": 0.28
			 	},
			 	{ 
			 		"name": "CBC", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCV", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCA", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "THC8", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Pulegone", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Myrcene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Caryophyllene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Limonene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Linalool", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Eucalyptol", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Pinene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol-4", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Cymene", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Apigenin", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Quercetin", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Cannflavin A", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Beta-sitosterol", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "CBL", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Humulene", 
			 		"value": 0.00
				},
				{ 
			 		"name": "Terpinolene", 
			 		"value": 0.00
				} 	
		 	], 
		 	"taste": ["Sweet","Berry","Earthy"],
		 	 "conditions": ["ADD/ADHD", "Anorexia", "Arthritis", "Depression", "Fibromyalgia", "Insomnia", "Nausea", "Pain", "Stress"],
			 "positiveEffects": ["Happy", "Relaxed", "Creative"],
			 "negativeEffects": [""],
			 "descriptionDetailed": "Purple Urkle crossed with Space Queen produces this indica/sativa 80/20 marijuana variety. ",
			 "descriptionAbbrev":  "Querkle has a fruity grape & berry scent",
			 "tags": ["Indica", "Querkle", "Nausea"],
			 "imageUrl": "images/strains/querkle_100x100.jpg"
			},
			{"strainId": 7,
			 "strainName": "Papaya", 
			 "strainType": "Hybrid",
			 "components": [
			 	{ 
			 		"name": "THC9", 
			 		"value": 14.21
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 0.41
			 	},
			 	{ 
			 		"name": "CBN", 
			 		"value": 0.13
			 	},
			 	{ 
			 		"name": "CBG", 
			 		"value": 0.30
			 	},
			 	{ 
			 		"name": "CBC", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCV", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCA", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "THC8", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Pulegone", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Myrcene", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Caryophyllene", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Limonene", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Linalool", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Eucalyptol", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Pinene", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Terpineol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol-4", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Cymene", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Apigenin", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Quercetin", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Cannflavin A", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Beta-sitosterol", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "CBL", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Humulene", 
			 		"value": 0.00
				},
				{ 
			 		"name": "Terpinolene", 
			 		"value": 0.00
				} 	
		 	],  
		 	"taste": ["Tropical","Sweet","Mango"],
		 	 "conditions": ["Stress", "Pain", "Headache", "Insomnia", "Nausea"],
			 "positiveEffects": ["Relaxed", "Happy", "Euphoric", "Creative", "Uplifted", "Calmness", "Mellow", "Energetic", "Productive"],
			 "negativeEffects": ["Dry Mouth", "Paranoid", "Dry Eyes", "Dizzy", "Headache"],
			 "descriptionDetailed": "The indica element of this strain does provide a Calmness, but many consumers also find that this strain makes them energetic and productive.",
			 "descriptionAbbrev":  "Effects that might be more in line with a traditional sativa.",
			 "tags": ["Hybrid", "Papaya"],
			 "imageUrl": "images/strains/papaya_100x100.jpg"
			},
			{"strainId": 8,
			 "strainName": "Pennywise", 
			 "strainType": "Indica",
			 "components": [
			 	{ 
			 		"name": "THC9", 
			 		"value": 20.52
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 0.15
			 	},
			 	{ 
			 		"name": "CBN", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBG", 
			 		"value": 0.56	
			 	},
			 	{ 
			 		"name": "CBC", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCV", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCA", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "THC8", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Pulegone", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Myrcene", 
			 		"value": 0.07
			 	},
			 	{ 
			 		"name": "Caryophyllene", 
			 		"value": 0.11
			 	},
			 	{ 
			 		"name": "Limonene", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Linalool", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Eucalyptol", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Pinene", 
			 		"value": 0.06
			 	},
			 	{ 
			 		"name": "Terpineol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol-4", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Cymene", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Apigenin", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Quercetin", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Cannflavin A", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Beta-sitosterol", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "CBL", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Humulene", 
			 		"value": 0.24
				},
				{ 
			 		"name": "Terpinolene", 
			 		"value": 0.50
				} 	
		 	],
		 	"taste": ["Earthy","Sweet","Woody", "Coffee", "Lemon"],
		 	 "conditions": ["Arthritis", "PTSD", "Epilepsy", "Cancer", "Migraines", "Headache", "Hypertension", "Fibromyalgia"],
			 "positiveEffects": ["Pain relief", "Psychoactive", "Therapeutic", "Relaxed", "Mellow", "Clear headed", "Euphoric"],
			 "negativeEffects": ["Drowsiness"],
			 "descriptionDetailed": "Rich in the therapeutic compound CBD. Pennywise is especially effective in treating arthritis, PTSD, epilepsy, neurological disorders, and cancer symptoms. It contains a 1:1 ratio of CBD and THC, so the psychoactive effects are milder and more relaxing.",
 			 "descriptionAbbrev":  "Rich in the therapeutic compound CBD. Pennywise is especially effective in treating arthritis, PTSD, epilepsy, neurological disorders, and cancer symptoms. ",
			 "tags": [""],
			 "imageUrl": "images/strains/pennywise_100x100.jpg"
			},
			{"strainId": 9,
			 "strainName": "OG #18", 
			 "strainType": "Hybrid",
			 "components": [
			 	{ 
			 		"name": "THC9", 
			 		"value": 19.84
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 0.76
			 	},
			 	{ 
			 		"name": "CBN", 
			 		"value": 0.04
			 	},
			 	{ 
			 		"name": "CBG", 
			 		"value": 0.30
			 	},
			 	{ 
			 		"name": "CBC", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCV", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCA", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "THC8", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Pulegone", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Myrcene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Caryophyllene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Limonene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Linalool", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Eucalyptol", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Pinene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol-4", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Cymene", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Apigenin", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Quercetin", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Cannflavin A", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Beta-sitosterol", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "CBL", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Humulene", 
			 		"value": 0.00
				},
				{ 
			 		"name": "Terpinolene", 
			 		"value": 0.00
				} 	
		 	],
		 	"taste": ["Diesel", "Earthy", "Skunk"],   
		 	 "conditions": ["Pain", "Stress"],
			 "positiveEffects": ["Pain relief", "Relaxed", "Mellow",  "Conversational"],
			 "negativeEffects": ["Drowsiness"],
			 "descriptionDetailed": "This indica-dominant hybrid delivers a long-lasting sedative and trancey high, ideal for leisure and relaxation.",
			 "descriptionAbbrev":  "This indica-dominant hybrid delivers a long-lasting sedative and trancey high, ideal for leisure and relaxation.",
			 "tags": ["Hybrid", "OG #18", "OG"],
			 "imageUrl": "images/strains/og--18_100x100.jpg"
			},
			{"strainId": 10,
			 "strainName": "OG Kush", 
			 "strainType": "Hybrid",
			 "components": [
			 	{ 
			 		"name": "THC9", 
			 		"value": 17.02
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 0.36
			 	},
			 	{ 
			 		"name": "CBN", 
			 		"value": 0.54
			 	},
			 	{ 
			 		"name": "CBG", 
			 		"value": 0.36
			 	},
			 	{ 
			 		"name": "CBC", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "THCV", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCA", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "THC8", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Pulegone", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Myrcene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Caryophyllene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Limonene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Linalool", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Eucalyptol", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Pinene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol-4", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Cymene", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Apigenin", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Quercetin", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Cannflavin A", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Beta-sitosterol", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "CBL", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Humulene", 
			 		"value": 0.00
				},
				{ 
			 		"name": "Terpinolene", 
			 		"value": 0.00
				} 	
		 	],
		 	"taste": ["Earthy", "Woody", "Pine"],
		 	 "conditions": ["Migraines", "Stress", "Anxiety", "Depression"],
			 "positiveEffects": ["Euphoric", "Happy", "Uplifting"],
			 "negativeEffects": [""],
			 "descriptionDetailed": "With OG Kush, patients most commonly cite improvements in migraines, ADD/ADHD, and stress disorders.",
			 "descriptionAbbrev":  "Euphoric and happy effects that combat stress and anxiety",
			 "tags": ["Hybrid", "OG Kush", "OG", "Kush"],
			 "imageUrl": "images/strains/og-kush_100x100.jpg"
			},
			{"strainId": 11,
			 "strainName": "Canna-Tsu", 
			 "strainType": "Hybrid",
			 "components": [
			 	{ 
			 		"name": "THC9", 
			 		"value": 8.02
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 9.70
			 	},
			 	{ 
			 		"name": "CBN", 
			 		"value": 0.08
			 	},
			 	{ 
			 		"name": "CBG", 
			 		"value": 0.30
			 	},
			 	{ 
			 		"name": "CBC", 
			 		"value": 0.30
			 	},
			 	{ 
			 		"name": "THCV", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCA", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "THC8", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Pulegone", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Myrcene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Caryophyllene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Limonene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Linalool", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Eucalyptol", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Pinene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol-4", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Cymene", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Apigenin", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Quercetin", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Cannflavin A", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Beta-sitosterol", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "CBL", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Humulene", 
			 		"value": 0.00
				},
				{ 
			 		"name": "Terpinolene", 
			 		"value": 0.00
				} 	
		 	],  
		 	"taste": ["Earthy", "Pungent", "Woody", "Citrus", "Mint"],
		 	 "conditions": ["Cancer", "Nausea", "Epilepsy", "Stress", "Pain", "Appetite Loss", "Inflammation", "Depression"],
			 "positiveEffects": ["Potent", "Clear headed", "Euphoric", "Drowsiness", "Pain relief", "Relaxed", "Mellow", "Hungry"],
			 "negativeEffects": ["Drowsiness", "Munchies"],
			 "descriptionDetailed": "Because of its high-CBD, low-THC cannabinoid profile, Canna-Tsu delivers its mellow effects with mental clarity.",
			 "descriptionAbbrev":  "Mellow effects with mental clarity.",
			 "tags": ["Hybrid", "Canna-Tsu", "Cancer", "Nausea", "Epilepsy", "Stress"],
			 "imageUrl": "images/strains/canna-tsu_100x100.jpg"
			},
			{"strainId": 12,
			 "strainName": "Nebula", 
			 "strainType": "Hybrid",
			 "components": [
			 	{ 
			 		"name": "THC9", 
			 		"value": 17.02
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 0.34
			 	},
			 	{ 
			 		"name": "CBN", 
			 		"value": 0.73
			 	},
			 	{ 
			 		"name": "CBG", 
			 		"value": 0.08
			 	},
			 	{ 
			 		"name": "CBC", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCV", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCA", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "THC8", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Pulegone", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Myrcene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Caryophyllene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Limonene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Linalool", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Eucalyptol", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Pinene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol-4", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Cymene", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Apigenin", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Quercetin", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Cannflavin A", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Beta-sitosterol", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "CBL", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Humulene", 
			 		"value": 0.00
				},
				{ 
			 		"name": "Terpinolene", 
			 		"value": 0.00
				} 	
		 	], 
		 	"taste": ["Honey", "Sweet", "Skunk"],
		 	 "conditions": ["Stress", "Depression", "Nausea", "Pain", "Fatigue"],
			 "positiveEffects": ["Intense", "Mind + Body", "Euphoric", "Happy", "Uplifted", "Relaxed", "Mellow",  "Creative"],
			 "negativeEffects": ["Dry Eyes", "Dry Mouth", "Headache", "Paranoid", "Dizzy"],
			 "descriptionDetailed": "Nebula has won many awards, including 3rd place in the sativa category at the High Times Cannabis Cup in 1999 and 2nd place in 2005.",
			 "descriptionAbbrev":  "A head and body buzz described as intense and almost psychedelic",
			 "tags": ["Hybrid", "Nebula"],
			 "imageUrl": "images/strains/nebula_100x100.jpg"
			},
			{"strainId": 13,
			 "strainName": "XJ-13", 
			 "strainType": "Hybrid",
			 "components": [
			 	{ 
			 		"name": "THC9", 
			 		"value": 17.10
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 0.18
			 	},
			 	{ 
			 		"name": "CBN", 
			 		"value": 0.03
			 	},
			 	{ 
			 		"name": "CBG", 
			 		"value": 0.30
			 	},
			 	{ 
			 		"name": "CBC", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCV", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCA", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "THC8", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Pulegone", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Myrcene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Caryophyllene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Limonene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Linalool", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Eucalyptol", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Pinene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol-4", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Cymene", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Apigenin", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Quercetin", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Cannflavin A", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Beta-sitosterol", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "CBL", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Humulene", 
			 		"value": 0.00
				},
				{ 
			 		"name": "Terpinolene", 
			 		"value": 0.00
				} 	
		 	], 
		 	"taste": ["Citrus", "Pine", "Sweet"],
		 	 "conditions": ["Stress", "Depression", "Pain", "Fatigue", "Headache"],
			 "positiveEffects": ["Happy", "Uplifted", "Euphoric", "Creative", "Conversational", "Therapeutic", "Energetic", "Relaxed", "Mellow"],
			 "negativeEffects": ["Dry Mouth", "Dry Eyes", "Paranoid", "Dizzy", "Headache"],
			 "descriptionDetailed": "This hybrid cross of Jack Herer and G13 Haze induces unencumbered cerebral effects perfect for stimulating creativity and conversation.",
			 "descriptionAbbrev":  "Cherished for both its therapeutic effects and enjoyable euphoric buzz.",
			 "tags": ["Hybrid", "XJ-13"],
			 "imageUrl": "images/strains/xj-13_100x100.jpg"
			},
			{"strainId": 14,
			 "strainName": "Yumboldt", 
			 "strainType": "Indica",
			 "components": [
			 	{ 
			 		"name": "THC9", 
			 		"value": 18.77
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 0.22
			 	},
			 	{ 
			 		"name": "CBN", 
			 		"value": 0.04
			 	},
			 	{ 
			 		"name": "CBG", 
			 		"value": 0.94
			 	},
			 	{ 
			 		"name": "CBC", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCV", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCA", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "THC8", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Pulegone", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Myrcene", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Caryophyllene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Limonene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Linalool", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Eucalyptol", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Pinene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol-4", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Cymene", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Apigenin", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Quercetin", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Cannflavin A", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Beta-sitosterol", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "CBL", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Humulene", 
			 		"value": 0.00
				},
				{ 
			 		"name": "Terpinolene", 
			 		"value": 0.00
				} 	
		 	],
		 	"taste": ["Earthy", "Sweet", "Pungent"],
		 	 "conditions": ["Pain", "Stress", "Insomnia", "Nausea", "Appetite Loss"],
			 "positiveEffects": ["Drowsiness", "Euphoric", "Relaxed", "Mellow",  "Uplifted", "Hungry"],
			 "negativeEffects": ["Dry Mouth", "Dry Eyes", "Dizzy", "Headache", "Paranoid", "Munchies"],
			 "descriptionDetailed": "Yumboldt is great at making you sleepy and content.",
			 "descriptionAbbrev":  "Yumboldt is great at making you sleepy and content.",
			 "tags": ["Indica", "Yumbodlt"],
			 "imageUrl": "images/strains/yumboldt_100x100.jpg"
			},
			{"strainId": 15,
			 "strainName": "Vortex", 
			 "strainType": "Sativa",
			 "components": [
			 	{ 
			 		"name": "THC9", 
			 		"value": 15.87
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 0.24
			 	},
			 	{ 
			 		"name": "CBN", 
			 		"value": 0.67
			 	},
			 	{ 
			 		"name": "CBG", 
			 		"value": 0.26
			 	},
			 	{ 
			 		"name": "CBC", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCV", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCA", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "THC8", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Pulegone", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Myrcene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Caryophyllene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Limonene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Linalool", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Eucalyptol", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Pinene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol-4", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Cymene", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Apigenin", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Quercetin", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Cannflavin A", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Beta-sitosterol", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "CBL", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Humulene", 
			 		"value": 0.00
				},
				{ 
			 		"name": "Terpinolene", 
			 		"value": 0.00
				} 	
		 	], 
		 	"taste": ["Pungent", "Citrus", "Lemon"],
		 	 "conditions": ["Stress", "Depression", "Fatigue", "Appetite Loss", "Pain"],
			 "positiveEffects": ["Happy", "Euphoric", "Energetic", "Uplifted", "Creative"],
			 "negativeEffects": ["Dry Mouth", "Dry Eyes", "Dizzy", "Paranoid", "Headache"],
			 "descriptionDetailed": "A sweet and sour lemon aroma accented by notes of tropical mango, while its inherited effects can range from racy and energetic to heavy and disorienting.",
			 "descriptionAbbrev":  "Will pull you into a whirling mass of euphoria like a cosmic riptide",
			 "tags": ["Sativa", "Vortex"],
			 "imageUrl": "images/strains/vortex_100x100.jpg"
			},
			{"strainId": 16,
			 "strainName": "Warlock", 
			 "strainType": "Hybrid",
			 "components": [
			 	{ 
			 		"name": "THC9", 
			 		"value": 14.31
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 0.56
			 	},
			 	{ 
			 		"name": "CBN", 
			 		"value": 1.25
			 	},
			 	{ 
			 		"name": "CBG", 
			 		"value": 0.30
			 	},
			 	{ 
			 		"name": "CBC", 
			 		"value": 0.30
			 	},
			 	{ 
			 		"name": "THCV", 
			 		"value": 0.03
			 	},
			 	{ 
			 		"name": "THCA", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "THC8", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Pulegone", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Myrcene", 
			 		"value": 0.40
			 	},
			 	{ 
			 		"name": "Caryophyllene", 
			 		"value": 0.40
			 	},
			 	{ 
			 		"name": "Limonene", 
			 		"value": 0.50
			 	},
			 	{ 
			 		"name": "Linalool", 
			 		"value": 0.01
			 	},
			 	{ 
			 		"name": "Eucalyptol", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Pinene", 
			 		"value": 0.20
			 	},
			 	{ 
			 		"name": "Terpineol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol-4", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Cymene", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Apigenin", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Quercetin", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Cannflavin A", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Beta-sitosterol", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "CBL", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Humulene", 
			 		"value": 0.00
				},
				{ 
			 		"name": "Terpinolene", 
			 		"value": 0.00
				} 	
		 	],
		 	"taste": ["Earthy", "Woody", "Tea"],
		 	 "conditions": ["Pain", "Stress", "Nausea", "Depression", "Insomnia", "ADD/ADHD"],
			 "positiveEffects": ["Relaxed", "Euphoric", "Tingly", "Uplifted", "Happy", "Focused"],
			 "negativeEffects": ["Dry Mouth", "Headache", "Paranoid", "Dry Eyes"],
			 "descriptionDetailed": "Its stimulating, focused buzz sharpens the mind against inattention and boredom, and may help those struggling with ADD/ADHD. With a sweet and sour aroma, Warlocks ushers in its mellow stress-relieving and engaged effects.",
			 "descriptionAbbrev":  "Its stimulating, focused buzz sharpens the mind against inattention and boredom, and may help those struggling with ADD/ADHD.",
			 "tags": ["Earthy", "Woody", "Tea", "Sweet", "Sour"],
			 "imageUrl": "images/strains/warlock_100x100.jpg"
			},
			{"strainId": 17,
			 "strainName": "Strawberry Cough", 
			 "strainType": "Sativa",
			 "components": [
			 	{ 
			 		"name": "THC9", 
			 		"value": 16.89
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 0.22
			 	},
			 	{ 
			 		"name": "CBN", 
			 		"value": 1.14
			 	},
			 	{ 
			 		"name": "CBG", 
			 		"value": 0.27
			 	},
			 	{ 
			 		"name": "CBC", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCV", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCA", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "THC8", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Pulegone", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Myrcene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Caryophyllene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Limonene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Linalool", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Eucalyptol", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Pinene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol-4", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Cymene", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Apigenin", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Quercetin", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Cannflavin A", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Beta-sitosterol", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "CBL", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Humulene", 
			 		"value": 0.00
				},
				{ 
			 		"name": "Terpinolene", 
			 		"value": 0.00
				} 	
		 	], 
		 	"taste": ["Strawberry", "Sweet", "Berry"],
		 	 "conditions": ["Stress", "Depression", "Pain", "Fatigue", "Appetite Loss"],
			 "positiveEffects": ["Happy", "Euphoric", "Uplifted", "Relaxed", "Energetic", "Conversational"],
			 "negativeEffects": ["Dry Mouth", "Dry Eyes", "Dizzy", "Paranoid", "Headache", "Munchies"],
			 "descriptionDetailed": "Strawberry Cough is a great solution for managing social anxieties and to balance yourself in times of elevated stress.",
			 "descriptionAbbrev":  "An aura of euphoria that is sure to leave a smile on your face.",
			 "tags": ["Sativa", "Strawberry Cough"],
			 "imageUrl": "images/strains/strawberry-cough_100x100.jpg"
			},
			{"strainId": 18,
			 "strainName": "Stardawg", 
			 "strainType": "Hybrid",
			 "components": [
			 	{ 
			 		"name": "THC9", 
			 		"value": 11.45
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 0.03
			 	},
			 	{ 
			 		"name": "CBN", 
			 		"value": 0.67
			 	},
			 	{ 
			 		"name": "CBG", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBC", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCV", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCA", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "THC8", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Pulegone", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Myrcene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Caryophyllene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Limonene", 
			 		"value": 0.50
			 	},
			 	{ 
			 		"name": "Linalool", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Eucalyptol", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Pinene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol-4", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Cymene", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Apigenin", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Quercetin", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Cannflavin A", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Beta-sitosterol", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "CBL", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Humulene", 
			 		"value": 0.00
				},
				{ 
			 		"name": "Terpinolene", 
			 		"value": 0.00
				} 	
		 	], 
		 	"taste": ["Pungent", "Diesel", "Earthy"],
		 	 "conditions": ["Stress", "Anxiety", "Fatigue"],
			 "positiveEffects": [""],
			 "negativeEffects": [""],
			 "descriptionDetailed": "Stardawg, whose uplifting effects may help patients treating stress, fatigue, and anxiety disorders.",
			 "descriptionAbbrev":  "Earthy pine with sour notes of diesel color.",
			 "tags": ["Hybrid", "Stardawg"],
			 "imageUrl": "images/strains/stardawg_100x100.jpg"
			},
			{"strainId": 19,
			 "strainName": "Strawberry", 
			 "strainType": "Hybrid",
			 "components": [
			 	{ 
			 		"name": "THC9", 
			 		"value": 18.61
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 0.40
			 	},
			 	{ 
			 		"name": "CBN", 
			 		"value": 0.18
			 	},
			 	{ 
			 		"name": "CBG", 
			 		"value": 4.15
			 	},
			 	{ 
			 		"name": "CBC", 
			 		"value": 0.30
			 	},
			 	{ 
			 		"name": "THCV", 
			 		"value": 0.03
			 	},
			 	{ 
			 		"name": "THCA", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "THC8", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Pulegone", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Myrcene", 
			 		"value": 0.40
			 	},
			 	{ 
			 		"name": "Caryophyllene", 
			 		"value": 0.40
			 	},
			 	{ 
			 		"name": "Limonene", 
			 		"value": 0.50
			 	},
			 	{ 
			 		"name": "Linalool", 
			 		"value": 0.01
			 	},
			 	{ 
			 		"name": "Eucalyptol", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Pinene", 
			 		"value": 0.20
			 	},
			 	{ 
			 		"name": "Terpineol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol-4", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Cymene", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Apigenin", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Quercetin", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Cannflavin A", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Beta-sitosterol", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "CBL", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Humulene", 
			 		"value": 0.00
				},
				{ 
			 		"name": "Terpinolene", 
			 		"value": 0.00
				} 	
		 	],  
		 	"taste": ["Strawberry", "Sweet", "Berry"],
		 	 "conditions": ["Anxiety", "Stress", "Depression", "Insomnia", "Pain", "Nausea"],
			 "positiveEffects": ["Relaxed", "Calmness", "Mellow", "Drowsiness", "Uplifted"],
			 "negativeEffects": ["Drowsiness"],
			 "descriptionDetailed": "Consumers prone to anxiety choose Strawberry for its stress-relieving qualities without the jarring paranoia common among high THC strains. ",
			 "descriptionAbbrev":  "Comfortable and relaxing.",
			 "tags": ["Strawberry"],
			 "imageUrl": "images/strains/strawberry_100x100.jpg"
			},
			{"strainId": 20,
			 "strainName": "Sour Diesel", 
			 "strainType": "Sativa",
			 "components": [
			 	{ 
			 		"name": "THC9", 
			 		"value": 22.86
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 0.20
			 	},
			 	{ 
			 		"name": "CBN", 
			 		"value": 0.02
			 	},
			 	{ 
			 		"name": "CBG", 
			 		"value": 0.50
			 	},
			 	{ 
			 		"name": "CBC", 
			 		"value": 0.20
			 	},
			 	{ 
			 		"name": "THCV", 
			 		"value": 0.10
			 	},
			 	{ 
			 		"name": "THCA", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "THC8", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Pulegone", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Myrcene", 
			 		"value": 0.30
			 	},
			 	{ 
			 		"name": "Caryophyllene", 
			 		"value": 0.20
			 	},
			 	{ 
			 		"name": "Limonene", 
			 		"value": 0.30
			 	},
			 	{ 
			 		"name": "Linalool", 
			 		"value": 0.06
			 	},
			 	{ 
			 		"name": "Eucalyptol", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Pinene", 
			 		"value": 0.17
			 	},
			 	{ 
			 		"name": "Terpineol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol-4", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Cymene", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Apigenin", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Quercetin", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Cannflavin A", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Beta-sitosterol", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "CBL", 
			 		"value": 0.20
			 	},
			 	{ 
			 		"name": "Humulene", 
			 		"value": 0.00
				},
				{ 
			 		"name": "Terpinolene", 
			 		"value": 0.00
				} 	
		 	], 
		 	"taste": ["Diesel", "Pungent", "Earthy"],
		 	 "conditions": ["Anorexia","Anxiety", "Depression", "Insomnia", "Appetite Loss","Pain", "Stress"],
			 "positiveEffects": ["Happy", "Energetic", "Uplifted", "Relaxed",  "Creative"],
			 "negativeEffects": ["Dry Mouth", "Dry Eyes", "Paranoid", "Dizzy", "Anxious", "Munchies"],
			 "descriptionDetailed": "This fast-acting strain delivers energizing, dreamy cerebral effects that have pushed Sour Diesel to its legendary status. Stress, pain, and depression fade away in long-lasting relief that makes Sour Diesel a top choice among medical patients.",
			 "descriptionAbbrev":  "An invigorating sativa named after its pungent, diesel-like aroma.",
			 "tags": ["Sativa", "Sour Diesel", "Stress", "Depression", "Pain", "Lack of Appetite", "Headache", "Happy", "Uplifted", "Euphoric", "Energetic", "Creative"],
			 "imageUrl": "images/strains/sour-diesel_100x100.jpg"
			},
			{"strainId": 21,
			 "strainName": "Shipwreck", 
			 "strainType": "Sativa",
			 "components": [
			 	{ 
			 		"name": "THC9", 
			 		"value": 17.38
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 0.11
			 	},
			 	{ 
			 		"name": "CBN", 
			 		"value": 0.04
			 	},
			 	{ 
			 		"name": "CBG", 
			 		"value": 0.90
			 	},
			 	{ 
			 		"name": "CBC", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCV", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCA", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "THC8", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Pulegone", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Myrcene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Caryophyllene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Limonene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Linalool", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Eucalyptol", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Pinene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol-4", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Cymene", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Apigenin", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Quercetin", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Cannflavin A", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Beta-sitosterol", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "CBL", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Humulene", 
			 		"value": 0.00
				},
				{ 
			 		"name": "Terpinolene", 
			 		"value": 0.00
				} 	
		 	], 
		 	"taste": ["Sweet", "Skunk", "Citrus"],
		 	 "conditions": ["Pain", "Eye Pressure", "Fatigue", "Stress", "Headache"],
			 "positiveEffects": ["Happy", "Euphoric", "Uplifted", "Energetic", "Relaxed"],
			 "negativeEffects": ["Dry Mouth", "Dry Eyes", "Dizzy", "Headache", "Paranoid"],
			 "descriptionDetailed": "A strong body buzz is also common, so Shipwreck can induce laziness and sleep later on depending on tolerance and dosage.",
			 "descriptionAbbrev":  "Gives patients a mellow lift that's great for getting things done.",
			 "tags": ["Shipwreck"],
			 "imageUrl": "images/strains/Shipwreck_100x100.jpg"
			},
			{"strainId": 22,
			 "strainName": "Skywalker", 
			 "strainType": "Hybrid",
			 "components": [
			 	{ 
			 		"name": "THC9", 
			 		"value": 16.38
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 0.28
			 	},
			 	{ 
			 		"name": "CBN", 
			 		"value": 0.35
			 	},
			 	{ 
			 		"name": "CBG", 
			 		"value": 0.68
			 	},
			 	{ 
			 		"name": "CBC", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCV", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCA", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "THC8", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Pulegone", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Myrcene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Caryophyllene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Limonene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Linalool", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Eucalyptol", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Pinene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol-4", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Cymene", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Apigenin", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Quercetin", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Cannflavin A", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Beta-sitosterol", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "CBL", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Humulene", 
			 		"value": 0.00
				},
				{ 
			 		"name": "Terpinolene", 
			 		"value": 0.00
				} 	
		 	], 
		 	"taste": ["Sweet", "Earthy", "Pungent"],
		 	 "conditions": ["Stress", "Pain", "Depression", "Insomnia", "Nausea"],
			 "positiveEffects": ["Relaxed", "Happy", "Euphoric", "Uplifted", "Drowsiness", "Focused"],
			 "negativeEffects": ["Dry Mouth", "Dry Eyes", "Dizzy", "Paranoid", "Headache"],
			 "descriptionDetailed": "The sativa side of this strain allows for a nice head high as well, but it isn't overly hazy or unfocused. Skywalker was created by Amsterdam's Dutch Passion Seeds to combine the sweet fruity aroma of Blueberry with the growing strengths of the hardy, high-yielding Mazar.",
			 "descriptionAbbrev":  "Helps patients knock out pain and relax into sleep ",
			 "tags": ["Skywalker"],
			 "imageUrl": "images/strains/skywalker_100x100.jpg"
			},
			{"strainId": 23,
			 "strainName": "Romulan", 
			 "strainType": "Hybrid",
			 "components": [
			 	{ 
			 		"name": "THC9", 
			 		"value": 16.22
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 0.28
			 	},
			 	{ 
			 		"name": "CBN", 
			 		"value": 0.33
			 	},
			 	{ 
			 		"name": "CBG", 
			 		"value": 0.32
			 	},
			 	{ 
			 		"name": "CBC", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCV", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCA", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "THC8", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Pulegone", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Myrcene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Caryophyllene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Limonene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Linalool", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Eucalyptol", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Pinene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol-4", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Cymene", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Apigenin", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Quercetin", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Cannflavin A", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Beta-sitosterol", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "CBL", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Humulene", 
			 		"value": 0.00
				},
				{ 
			 		"name": "Terpinolene", 
			 		"value": 0.00
				} 	
		 	], 
		 	"taste": ["Earthy", "Pine", "Woody"],
		 	 "conditions": ["Stress", "Insomnia", "Pain", "Depression", "Nausea"],
			 "positiveEffects": ["Relaxed", "Drowsiness", "Happy", "Euphoric", "Hungry"],
			 "negativeEffects": ["Dry Mouth", "Dry Eyes", "Headache", "Dizzy", "Paranoid", "Munchies"],
			 "descriptionDetailed": "A deep, sedating relaxation makes Romulan a favorite strain for patients treating muscle spasms and nerve damage.",
			 "descriptionAbbrev":  "A full body calm with heavily intoxicating properties.",
			 "tags": ["Romulan"],
			 "imageUrl": "images/strains/romulan_100x100.jpg"
			},
			{"strainId": 24,
			 "strainName": "Purple Wreck", 
			 "strainType": "Indica",
			 "components": [
			 	{ 
			 		"name": "THC9", 
			 		"value": 15.20
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 0.16
			 	},
			 	{ 
			 		"name": "CBN", 
			 		"value": 0.24
			 	},
			 	{ 
			 		"name": "CBG", 
			 		"value": 0.51
			 	},
			 	{ 
			 		"name": "CBC", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCV", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCA", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "THC8", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Pulegone", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Myrcene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Caryophyllene", 
			 		"value": 0.40
			 	},
			 	{ 
			 		"name": "Limonene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Linalool", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Eucalyptol", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Pinene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol-4", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Cymene", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Apigenin", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Quercetin", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Cannflavin A", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Beta-sitosterol", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "CBL", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Humulene", 
			 		"value": 0.00
				},
				{ 
			 		"name": "Terpinolene", 
			 		"value": 0.00
				} 	
		 	], 
		 	"taste": ["Sweet", "Berry", "Pine"],
		 	 "conditions": ["Pain", "Stress", "Insomnia", "Appetite Loss", "Depression"],
			 "positiveEffects": ["Relaxed", "Happy", "Euphoric", "Productive", "Drowsiness", "Hungry"],
			 "negativeEffects": ["Dry Mouth", "Dry Eyes", "Paranoid", "Dizzy", "Anxious", "Munchies"],
			 "descriptionDetailed": "Relaxes the body but uplifting mentally. Active and motivating so you can stay productive if needed.",
			 "descriptionAbbrev":  "Relaxes the body but uplifting mentally. Active and motivating so you can stay productive if needed.",
			 "tags": ["Purple Wreck"],
			 "imageUrl": "images/strains/purple-wreck_100x100.jpg"
			},
			{"strainId": 25,
			 "strainName": "Pineapple", 
			 "strainType": "Hybrid",
			 "components": [
			 	{ 
			 		"name": "THC9", 
			 		"value": 16.72
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 0.35
			 	},
			 	{ 
			 		"name": "CBN", 
			 		"value": 0.73
			 	},
			 	{ 
			 		"name": "CBG", 
			 		"value": 0.63
			 	},
			 	{ 
			 		"name": "CBC", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCV", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCA", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "THC8", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Pulegone", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Myrcene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Caryophyllene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Limonene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Linalool", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Eucalyptol", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Pinene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol-4", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Cymene", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Apigenin", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Quercetin", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Cannflavin A", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Beta-sitosterol", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "CBL", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Humulene", 
			 		"value": 0.00
				},
				{ 
			 		"name": "Terpinolene", 
			 		"value": 0.00
				} 	
		 	], 
		 	"taste": ["Pineapple", "Sweet", "Tropical"],
		 	 "conditions": ["PMS"],
			 "positiveEffects": [""],
			 "negativeEffects": [""],
			 "descriptionDetailed": "A perfect strain for stress relief, Pineapple will transport you to your happy place, leaving you uplifted and relaxed.",
			 "descriptionAbbrev":  "Pronounced flavors of pineapple and diesel.",
			 "tags": ["Hybrid", "Pineapple", "PMS"],
			 "imageUrl": "images/strains/pineapple_100x100.jpg"
			},
			{"strainId": 26,
			 "strainName": "Purple Cheese", 
			 "strainType": "Hybrid",
			 "components": [
			 	{ 
			 		"name": "THC9", 
			 		"value": 13.96
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 0.64
			 	},
			 	{ 
			 		"name": "CBN", 
			 		"value": 0.79
			 	},
			 	{ 
			 		"name": "CBG", 
			 		"value": 0.17
			 	},
			 	{ 
			 		"name": "CBC", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCV", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCA", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "THC8", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Pulegone", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Myrcene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Caryophyllene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Limonene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Linalool", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Eucalyptol", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Pinene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol-4", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Cymene", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Apigenin", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Quercetin", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Cannflavin A", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Beta-sitosterol", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "CBL", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Humulene", 
			 		"value": 0.00
				},
				{ 
			 		"name": "Terpinolene", 
			 		"value": 0.00
				} 	
		 	], 
		 	"taste": ["Cheese", "Sweet", "Grape"],
		 	 "conditions": ["ADD/ADHD", "Anorexia", "Anxiety", "Asthma", "Depression", "Insomnia", "Pain", "PMS", "Stress"],
			 "positiveEffects": ["Happy", "Uplifted", "Focused", "Relaxed", "Euphoric", "Creative"],
			 "negativeEffects": ["Dry Mouth", "Headache"],
			 "descriptionDetailed": "With a palatable fruit aroma, Purple Cheese delivers powerful full-body effects best suited for night owls or patients treating pain.",
			 "descriptionAbbrev":  "Purple Cheese delivers powerful full-body effects best suited for night owls or patients treating pain.",
			 "tags": ["Hybrid", "Cheese", "Purple", "Purple Cheese", "PMS"],
			 "imageUrl": "images/strains/purple-cheese_100x100.jpg"
			},
			{"strainId": 27,
			 "strainName": "ACDC", 
			 "strainType": "Hybrid",
			 "components": [
			 	{ 
			 		"name": "THC9", 
			 		"value": 0.90
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 19.00
			 	},
			 	{ 
			 		"name": "CBN", 
			 		"value": 0.03
			 	},
			 	{ 
			 		"name": "CBG", 
			 		"value": 0.04
			 	},
			 	{ 
			 		"name": "CBC", 
			 		"value": 0.30
			 	},
			 	{ 
			 		"name": "THCV", 
			 		"value": 0.01
			 	},
			 	{ 
			 		"name": "THCA", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "THC8", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Pulegone", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Myrcene", 
			 		"value": 1.10
			 	},
			 	{ 
			 		"name": "Caryophyllene", 
			 		"value": 0.06
			 	},
			 	{ 
			 		"name": "Limonene", 
			 		"value": 0.13
			 	},
			 	{ 
			 		"name": "Linalool", 
			 		"value": 0.03
			 	},
			 	{ 
			 		"name": "Eucalyptol", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Pinene", 
			 		"value": 0.20
			 	},
			 	{ 
			 		"name": "Terpineol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol-4", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Cymene", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Apigenin", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Quercetin", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Cannflavin A", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Beta-sitosterol", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "CBL", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Humulene", 
			 		"value": 0.00
				},
					{ 
			 		"name": "Terpinolene", 
			 		"value": 0.00
				} 	
		 	],  
		 	"taste": ["Earthy", "Skunk", "Sweet"],
		 	 "conditions": ["Cancer", "Epilepsy", "Migraines", "Muscle Spasms", "Pain", "Stress", "Bipolar", "Depression", "Nausea", "Hypertension", "HIV/AIDS", "Glaucoma", "PTSD", "Anxiety", "Multiple Sclerosis"],
			 "positiveEffects": ["Happy", "Focused", "Relaxed"],
			 "negativeEffects": ["Dry Mouth", "Anxious", "Dizzy", "Dry Eyes", "Paranoid"],
			 "descriptionDetailed": "Tests have put ACDC's CBD content as high as 19%, which helps many patients treat pain, anxiety, epilepsy, multiple sclerosis, and the negative effects of chemotherapy, all without intoxication.",
			 "descriptionAbbrev":  "This strain induces no psychoactive effects.",
			 "tags": ["Hybrid", "ACDC", "Bipolar", "Depression", "Nausea", "Hypertension", "HIV/AIDS", "Glaucoma", "PTSD", "Stress"],
			 "imageUrl": "images/strains/acdc_100x100.jpg"
			},
			{"strainId": 28,
			 "strainName": "Shark Shock", 
			 "strainType": "Indica",
			 "components": [
			 	{ 
			 		"name": "THC9", 
			 		"value": 22.10
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 0.35
			 	},
			 	{ 
			 		"name": "CBN", 
			 		"value": 0.07
			 	},
			 	{ 
			 		"name": "CBG", 
			 		"value": 0.30
			 	},
			 	{ 
			 		"name": "CBC", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCV", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCA", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "THC8", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Pulegone", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Myrcene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Caryophyllene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Limonene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Linalool", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Eucalyptol", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Pinene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol-4", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Cymene", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Apigenin", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Quercetin", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Cannflavin A", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Beta-sitosterol", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "CBL", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Humulene", 
			 		"value": 0.00
				},
				{ 
			 		"name": "Terpinolene", 
			 		"value": 0.00
				} 	
		 	],  
		 	"taste": ["Sweet", "Skunk", "Pungent"],
		 	 "conditions": ["Pain", "Asthma", "Fibromyalgia", "Stress", "Appetite Loss", "Nausea", "Muscle Spasms"],
			 "positiveEffects": ["Relaxed", "Happy", "Pain relief", "Drowsiness", "Hungry", "Euphoric"],
			 "negativeEffects": ["Drowsiness", "Munchies", "Dry Mouth", "Dry Eyes", "Anxious", "Headache", "Dizzy"],
			 "descriptionDetailed": "Has a fruity taste and carries intense stoney effects. If you suffer from chronic pains, experience depression, can't eat or have any other health issue, consider adding Shark Shock cannabis into your daily routine.",
			 "descriptionAbbrev":  "Has a fruity taste and carries intense stoney effects. If you suffer from chronic pains, experience depression, can't eat or have any other health issue, consider adding Shark Shock cannabis into your daily routine.",
			 "tags": [""],
			 "imageUrl": "images/strains/shark-shock_100x100.jpg"
			},
			{"strainId": 29,
			 "strainName": "Superman OG", 
			 "strainType": "Indica",
			 "components": [
			 	{ 
			 		"name": "THC9", 
			 		"value": 17.50
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 0.24
			 	},
			 	{ 
			 		"name": "CBN", 
			 		"value": 0.06
			 	},
			 	{ 
			 		"name": "CBG", 
			 		"value": 0.30
			 	},
			 	{ 
			 		"name": "CBC", 
			 		"value": 0.30
			 	},
			 	{ 
			 		"name": "THCV", 
			 		"value": 0.03
			 	},
			 	{ 
			 		"name": "THCA", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "THC8", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Pulegone", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Myrcene", 
			 		"value": 0.40
			 	},
			 	{ 
			 		"name": "Caryophyllene", 
			 		"value": 0.40
			 	},
			 	{ 
			 		"name": "Limonene", 
			 		"value": 0.50
			 	},
			 	{ 
			 		"name": "Linalool", 
			 		"value": 0.01
			 	},
			 	{ 
			 		"name": "Eucalyptol", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Pinene", 
			 		"value": 0.20
			 	},
			 	{ 
			 		"name": "Terpineol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol-4", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Cymene", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Apigenin", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Quercetin", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Cannflavin A", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Beta-sitosterol", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "CBL", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Humulene", 
			 		"value": 0.00
				},
				{ 
			 		"name": "Terpinolene", 
			 		"value": 0.00
				} 	
		 	],  
		 	"taste": ["Pine", "Pungent", "Sweet"],
		 	 "conditions": ["ADD/ADHD", "Anorexia", "Anxiety", "Asthma", "Depression", "Insomnia", "Appetite Loss", "Pain", "PMS", "Stress" ],
			 "positiveEffects": ["Happy", "Focused", "Relaxed", "Drowsiness", "Euphoric", "Stimulate Hunger"],
			 "negativeEffects": ["Munchies", "Couch Lock", "Dry Eyes", "Dry Mouth", "Dizzy", "Paranoid", "Headache"],
			 "descriptionDetailed": "Superman OG provides a strong heavy body sensation and will put you to sleep in a hurry. While great for pain management, muscle spasms, and insomnia, Superman OG's potent sedative effects make it a strictly nighttime strain. ",
			 "descriptionAbbrev":  "A must try for cannabis connoisseurs.",
			 "tags": ["Pine", "Sweet", "Lemon"],
			 "imageUrl": "images/strains/superman-og_100x100.jpg"
			},
			{"strainId": 30,
			 "strainName": "Thin Mint", 
			 "strainType": "Hybrid",
			 "components": [
			 	{ 
			 		"name": "THC9", 
			 		"value": 21.0
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 0.32
			 	},
			 	{ 
			 		"name": "CBN", 
			 		"value": 0.07
			 	},
			 	{ 
			 		"name": "CBG", 
			 		"value": 0.30
			 	},
			 	{ 
			 		"name": "CBC", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCV", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCA", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "THC8", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Pulegone", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Myrcene", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Caryophyllene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Limonene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Linalool", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Eucalyptol", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Pinene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol-4", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Cymene", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Apigenin", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Quercetin", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Cannflavin A", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Beta-sitosterol", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "CBL", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Humulene", 
			 		"value": 0.00
				},
				{ 
			 		"name": "Terpinolene", 
			 		"value": 0.00
				} 	
		 	], 
		 	"taste": ["Sweet", "Mint"],
		 	 "conditions": ["ADD/ADHD", "Anorexia", "Anxiety", "Asthma", "Bipolar", "Depression", "Nausea", "PMS", "Pain", "Swelling", "Insomnia", "Appetite Loss", "Stress"],
			 "positiveEffects": ["Happy", "Focused", "Relaxed", "Euphoric", "Uplifted"],
			 "negativeEffects": ["Dry Mouth", "Dry Eyes", "Paranoid", "Dizzy", "Anxious", "Munchies"],
			 "descriptionDetailed": "The high psychoactivity of this strain is not for novice consumers, but patients with a variety of symptoms are giving Thin Mint their seal of approval: severe pain, nausea, swelling, insomnia, and appetite loss are no match for the potency of Thin Mint.",
			 "descriptionAbbrev":  "Powerful full-body effect that gives this strain its sterling reputation.",
			 "tags": ["Hybrid", "Thin Mint", "Asthma", "Bipolar", "Nausea", "PMS"],
			 "imageUrl": "images/strains/thin-mint-girl-scout-cookies_100x100.jpg"
			},
			{"strainId": 31,
			 "strainName": "Banana Diesel", 
			 "strainType": "Hybrid",
			 "components": [
			 	{ 
			 		"name": "THC9", 
			 		"value": 17.48
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 0.33
			 	},
			 	{ 
			 		"name": "CBN", 
			 		"value": 0.48
			 	},
			 	{ 
			 		"name": "CBG", 
			 		"value": 0.30
			 	},
			 	{ 
			 		"name": "CBC", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCV", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCA", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THC8", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Pulegone", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Myrcene", 
			 		"value": 0.01
			 	},
			 	{ 
			 		"name": "Caryophyllene", 
			 		"value": 1.92
			 	},
			 	{ 
			 		"name": "Limonene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Linalool", 
			 		"value": 0.10
			 	},
			 	{ 
			 		"name": "Eucalyptol", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Pinene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol-4", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Cymene", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Apigenin", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Quercetin", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Cannflavin A", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Beta-sitosterol", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "CBL", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Humulene", 
			 		"value": 0.00
				},
				{ 
			 		"name": "Terpinolene", 
			 		"value": 0.00
				} 	
		 	],  
		 	"taste": ["Diesel", "Sweet", "Chemical"],
		 	 "conditions": ["ADD/ADHD", "Anorexia", "Anxiety","Bipolar", "Epilepsy", "Migraines", "Pain", "Stress", "Appetite Loss", "Mood Disorders"],
			 "positiveEffects": ["Happy", "Energetic", "Focused", "Relaxed", "Conversational"],
			 "negativeEffects": ["Dry Mouth", "Dry Eyes", "Dizzy", "Headache", "Paranoid", "Munchies"],
			 "descriptionDetailed": "A slightly energizing kick followed by intense focus makes this a perfect strain for daytime consumption with effects that steer clear of undesirable lethargy. These thick, pale green buds reek a sweet, fruity aroma and preface the tangy taste to come.",
			 "descriptionAbbrev":  "Banana Diesel is a potent appetite stimulant and stress combatant, suitable for either weight or mood disorders.",
			 "tags": ["Hybrid", "Banana Diesel", "Diesel", "Bipolar", "Pain", "Stress"],
			 "imageUrl": "images/strains/banana-diesel_100x100.jpg"
			},
			{"strainId": 32,
			 "strainName": "Candy OG", 
			 "strainType": "Indica",
			 "components": [
			 	{ 
			 		"name": "THC9", 
			 		"value": 22.50
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 0.55
			 	},
			 	{ 
			 		"name": "CBN", 
			 		"value": 0.04
			 	},
			 	{ 
			 		"name": "CBG", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBC", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "THCV", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "THCA", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "THC8", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Pulegone", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Myrcene", 
			 		"value": 0.19
			 	},
			 	{ 
			 		"name": "Caryophyllene", 
			 		"value": 1.80
			 	},
			 	{ 
			 		"name": "Limonene", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Linalool", 
			 		"value": 0.43
			 	},
			 	{ 
			 		"name": "Eucalyptol", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Pinene", 
			 		"value": 0.05
			 	},
			 	{ 
			 		"name": "Terpineol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol-4", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Cymene", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Apigenin", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Quercetin", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Cannflavin A", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Beta-sitosterol", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "CBL", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Humulene", 
			 		"value": 0.00
				},
				{ 
			 		"name": "Terpinolene", 
			 		"value": 0.00
				} 	
		 	],  
		 	"taste": [""],
		 	 "conditions": ["ADD/ADHD","Anorexia","Anxiety", "Bipolar", "Depression", "Nausea", "Pain", "PMS", "Stress"],
			 "positiveEffects": ["Focused", "Happy", "Euphoric", "Uplifted", "Drowsiness"],
			 "negativeEffects": ["Dry Mouth", "Dry Eyes", "Dizzy", "Headache", "Paranoid"],
			 "descriptionDetailed": "When consuming or smoking this cannabis strain in larger amounts, patients can expect the effects to be much more powerful and sedative, making it a great strain for late-night medicating sessions. It is currently being used to naturally battle insomnia and sleep apnea in patients.",
			 "descriptionAbbrev":  "When consuming or smoking this cannabis strain in larger amounts, patients can expect the effects to be much more powerful and sedative, making it a great strain for late-night medicating sessions. It is currently being used to naturally battle insomnia and sleep apnea in patients.",
			 "tags": ["Indica", "Candy OG", "OG", "Bipolar", "Depression", "Nausea", "Stress"],
			 "imageUrl": "images/strains/Candy-Og.jpg"
			},
			{"strainId": 33,
			 "strainName": "Chem Valley Kush", 
			 "strainType": "Hybrid",
			 "components": [
			 	{ 
			 		"name": "THC9", 
			 		"value": 21.80
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 0.30
			 	},
			 	{ 
			 		"name": "CBN", 
			 		"value": 0.10
			 	},
			 	{ 
			 		"name": "CBG", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBC", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCV", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCA", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "THC8", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Pulegone", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Myrcene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Caryophyllene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Limonene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Linalool", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Eucalyptol", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Pinene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol-4", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Cymene", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Apigenin", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Quercetin", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Cannflavin A", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Beta-sitosterol", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "CBL", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Humulene", 
			 		"value": 0.00
				},
				{ 
			 		"name": "Terpinolene", 
			 		"value": 0.00
				} 	
		 	], 
		 	"taste": ["Pine", "Earthy", "Sweet"], 
		 	 "conditions": ["Bipolar", "Stress", "Pain", "Appetite Loss", "Insomnia", "Depression"],
			 "positiveEffects": ["Happy", "Euphoric", "Creative", "Relaxed"],
			 "negativeEffects": ["Dizzy", "Cotton Mouth", "Dry Eyes", "Munchies"],
			 "descriptionDetailed": "Chem Valley Kush is a sativa-leaning hybrid cross between Chemdawg and SFV OG bred by Cali Connection.",
			 "descriptionAbbrev":  "The taste was citrusy and fruity with a comfortable and well balanced high, while not overwhelmingly potent.",
			 "tags": ["Hybrid", "Chem Valley Kush", "Kush", "Bipolar", "Stress"],
			 "imageUrl": "images/strains/chem-valley-kush_100x100.jpg"
			},
			{"strainId": 34,
			 "strainName": "Confidential Cheese", 
			 "strainType": "Indica",
			 "components": [
			 	{ 
			 		"name": "THC9", 
			 		"value": 16.49
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 0.39
			 	},
			 	{ 
			 		"name": "CBN", 
			 		"value": 0.51
			 	},
			 	{ 
			 		"name": "CBG", 
			 		"value": 0.50
			 	},
			 	{ 
			 		"name": "CBC", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCV", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCA", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "THC8", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Pulegone", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Myrcene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Caryophyllene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Limonene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Linalool", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Eucalyptol", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Pinene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol-4", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Cymene", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Apigenin", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Quercetin", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Cannflavin A", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Beta-sitosterol", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "CBL", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Humulene", 
			 		"value": 0.00
				},
				{ 
			 		"name": "Terpinolene", 
			 		"value": 0.00
				} 	
		 	], 
		 	"taste": ["Cheese", "Pungent", "Earthy"], 
		 	 "conditions": ["ADD/ADHD","Anorexia","Arthritis", "Pain","Bipolar","Depression", "Insomnia", "Appetite Loss", "Nausea", "Stress"],
			 "positiveEffects": ["Happy", "Relaxed", "Uplifted", "Conversational", "Creative"],
			 "negativeEffects": ["Anxious", "Dry Mouth", "Dry Eyes", "Dizzy", "Munchies"],
			 "descriptionDetailed": "Medical patients have used the potent and heavy effects of Confidential Cheese to treat severe pain, insomnia, and lost appetite..",
			 "descriptionAbbrev":  "This indica-dominant strain has pale green crystal-covered buds with a sour cheese aroma inherited from its parent.",
			 "tags": ["Indica", "Confidential Cheese", "Cheese", "Bipolar", "Nausea", "Stress"],
			 "imageUrl": "images/strains/confidential-cheese_100x100.jpg"
			},
			{"strainId": 35,
			 "strainName": "Deadhead OG", 
			 "strainType": "Hybrid",
			 "components": [
			 	{ 
			 		"name": "THC9", 
			 		"value": 17.72
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 0.39
			 	},
			 	{ 
			 		"name": "CBN", 
			 		"value": 0.75
			 	},
			 	{ 
			 		"name": "CBG", 
			 		"value": 0.29
			 	},
			 	{ 
			 		"name": "CBC", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCV", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCA", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "THC8", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Pulegone", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Myrcene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Caryophyllene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Limonene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Linalool", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Eucalyptol", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Pinene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol-4", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Cymene", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Apigenin", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Quercetin", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Cannflavin A", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Beta-sitosterol", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "CBL", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Humulene", 
			 		"value": 0.00
				},
				{ 
			 		"name": "Terpinolene", 
			 		"value": 0.00
				} 	
		 	],  
		 	"taste": ["Pungent", "Skunk", "Earthy"],
		 	 "conditions": ["ADD/ADHD","Anxiety","Bipolar", "Depression", "Migraines", "Headache", "Stress", "Insomnia", "Muscle Pain"],
			 "positiveEffects": ["Happy", "Uplifted", "Relaxed", "Focused"],
			 "negativeEffects": ["Cotton Mouth", "Dry Eyes", "Dizzy", "Anxious"],
			 "descriptionDetailed": "Treats anxiety, depression, insomnia, loss of appetite, muscle and joint pain. ",
			 "descriptionAbbrev":  "Deadhead OG is bred by The Cali Connection and is a 60/40 hybrid of Chemdawg 91 and SFV OG Kush.",
			 "tags": ["Hybrid", "Deadhead OG", "OG", "Bipolar", "Depression", "Migraines", "Headache", "Stress"],
			 "imageUrl": "images/strains/deadhead-og_100x100.jpg"
			},
			{"strainId": 36,
			 "strainName": "Diablo", 
			 "strainType": "Indica",
			 "components": [
			 	{ 
			 		"name": "THC9", 
			 		"value": 20.30
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 0.23
			 	},
			 	{ 
			 		"name": "CBN", 
			 		"value": 0.06
			 	},
			 	{ 
			 		"name": "CBG", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBC", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCV", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCA", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "THC8", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Pulegone", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Myrcene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Caryophyllene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Limonene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Linalool", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Eucalyptol", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Pinene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol-4", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Cymene", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Apigenin", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Quercetin", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Cannflavin A", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Beta-sitosterol", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "CBL", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Humulene", 
			 		"value": 0.00
				},
				{ 
			 		"name": "Terpinolene", 
			 		"value": 0.00
				} 	
		 	],  
		 	"taste": ["Berry", "Sweet", "Spicy", "Herbal"],
		 	 "conditions": ["Bipolar", "Pain", "Insomnia", "Migraines", "Headache", "Nausea", "Stress", "Depression"],
			 "positiveEffects": ["Relaxed", "Euphoric", "Happy", "Uplifted"],
			 "negativeEffects": ["Dry Mouth", "Dry Eyess", "Dizzy", "Paranoid"],
			 "descriptionDetailed": "With lineage from Grapefruit, Blueberry and South African Sativa, there is a sweet flavor to the Diablo cannabis strain.",
			 "descriptionAbbrev":  "This indica has a purple hue, fruity and spicy flavors, and a THC content that tends to fall between 15-20 percent.",
			 "tags": ["Indica", "Diablo", "Bipolar", "Migraines", "Headache", "Stress"],
			 "imageUrl": "images/strains/diablo_100x100.jpg"
			},
			{"strainId": 37,
			 "strainName": "Dutch Passion", 
			 "strainType": "Hybrid",
			 "components": [
			 	{ 
			 		"name": "THC9", 
			 		"value": 14.78
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 0.25
			 	},
			 	{ 
			 		"name": "CBN", 
			 		"value": 0.16
			 	},
			 	{ 
			 		"name": "CBG", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBC", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCV", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCA", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "THC8", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Pulegone", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Myrcene", 
			 		"value": 0.03
			 	},
			 	{ 
			 		"name": "Caryophyllene", 
			 		"value": 0.83
			 	},
			 	{ 
			 		"name": "Limonene", 
			 		"value": 0.19
			 	},
			 	{ 
			 		"name": "Linalool", 
			 		"value": 0.14
			 	},
			 	{ 
			 		"name": "Eucalyptol", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Pinene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol-4", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Cymene", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Apigenin", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Quercetin", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Cannflavin A", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Beta-sitosterol", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "CBL", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Humulene", 
			 		"value": 0.00
				},
				{ 
			 		"name": "Terpinolene", 
			 		"value": 0.00
				} 	
		 	],  
		 	"taste": [""],
		 	 "conditions": ["Anorexia", "Anxiety", "Depression", "Bipolar", "Pain", "PMS", "Stress"],
			 "positiveEffects": ["Happy", "Focused", "Relaxed", "Creative"],
			 "negativeEffects": [""],
			 "descriptionDetailed": "After you grind it and a real sweet almost tropical fruit comes out in the high notes and those low earthy tones become much more pronounced.",
			 "descriptionAbbrev":  "Deep green leaf and a nice nearly lime green buds that have a hit of the foxtail calyx form.",
			 "tags": ["Hybrid", "Dutch Passion", "Bipolar"],
			 "imageUrl": "images/strains/dutch-passion.JPG"
			},
			{"strainId": 38,
			 "strainName": "Eden OG", 
			 "strainType": "Hybrid",
			 "components": [
			 	{ 
			 		"name": "THC9", 
			 		"value": 15.12
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 0.04
			 	},
			 	{ 
			 		"name": "CBN", 
			 		"value": 0.11
			 	},
			 	{ 
			 		"name": "CBG", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBC", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCV", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCA", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "THC8", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Pulegone", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Myrcene", 
			 		"value": 0.39
			 	},
			 	{ 
			 		"name": "Caryophyllene", 
			 		"value": 0.17
			 	},
			 	{ 
			 		"name": "Limonene", 
			 		"value": 0.56
			 	},
			 	{ 
			 		"name": "Linalool", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Eucalyptol", 
			 		"value": 0.06
			 	},
			 	{ 
			 		"name": "Pinene", 
			 		"value": 0.04
			 	},
			 	{ 
			 		"name": "Terpineol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol-4", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Cymene", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Apigenin", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Quercetin", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Cannflavin A", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Beta-sitosterol", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "CBL", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Humulene", 
			 		"value": 0.00
				},
				{ 
			 		"name": "Terpinolene", 
			 		"value": 0.00
				} 	
		 	],  
		 	"taste": [""],
		 	 "conditions": ["Stress", "Seizures", "Pain", "Nausea", "Migraines", "Appetite Loss", "Depression", "Bipolar", "Anxiety"],
			 "positiveEffects": ["Happy", "Energetic", "Focused", "Relaxed", "Hungry"],
			 "negativeEffects": ["Munchies"],
			 "descriptionDetailed": "This beauty has an almost immediate freight train-like effect to the head with the heavy body sink kinda sneaking up on you a little later.",
			 "descriptionAbbrev":  "This beauty has an almost immediate freight train-like effect to the head with the heavy body sink kinda sneaking up on you a little later.",
			 "tags": ["Hybrid", "Eden OG", "OG", "Bipolar", "Migraines", "Headache", "Nausea"],
			 "imageUrl": "images/strains/eden.jpg"
			},
			{"strainId": 39,
			 "strainName": "Euphoria", 
			 "strainType": "Sativa",
			 "components": [
			 	{ 
			 		"name": "THC9", 
			 		"value": 16.60
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 0.37
			 	},
			 	{ 
			 		"name": "CBN", 
			 		"value": 0.04
			 	},
			 	{ 
			 		"name": "CBG", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBC", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCV", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCA", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "THC8", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Pulegone", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Myrcene", 
			 		"value": 0.41
			 	},
			 	{ 
			 		"name": "Caryophyllene", 
			 		"value": 0.63
			 	},
			 	{ 
			 		"name": "Limonene", 
			 		"value": 0.35
			 	},
			 	{ 
			 		"name": "Linalool", 
			 		"value": 0.25
			 	},
			 	{ 
			 		"name": "Eucalyptol", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Pinene", 
			 		"value": 1.87
			 	},
			 	{ 
			 		"name": "Terpineol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol-4", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Cymene", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Apigenin", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Quercetin", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Cannflavin A", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Beta-sitosterol", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "CBL", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Humulene", 
			 		"value": 0.00
				},
				{ 
			 		"name": "Terpinolene", 
			 		"value": 0.00
				} 	
		 	], 
		 	"taste": ["Sweet","Flowery","Woody"], 
		 	 "conditions": ["Bipolar", "Social Anxiety", "Stress", "Pain", "Insomnia"],
			 "positiveEffects": ["Euphoric", "Happy", "Uplifted", "Energetic", "Creative", "Conversational", "Drowsiness", "Pain relief"],
			 "negativeEffects": ["Dry Mouth", "Dry Eyes", "Headache", "Couch Lock"],
			 "descriptionDetailed": "Effects of this strain are upbeat and social overall, so much so that it might be too energetic for some users, especially if sleep is the goal. Great for social anxiety, this strain performs just as expected and promotes a sense of well-being.",
			 "descriptionAbbrev":  "Effects of this strain are upbeat and social overall.",
			 "tags": ["Sativa", "Euphoria", "Bipolar"],
			 "imageUrl": "images/strains/euphoria_100x100.jpg"
			},
			{"strainId": 40,
			 "strainName": "Fire Bomb", 
			 "strainType": "Hybrid",
			 "components": [
			 	{ 
			 		"name": "THC9", 
			 		"value": 28.10
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 0.42
			 	},
			 	{ 
			 		"name": "CBN", 
			 		"value": 0.03
			 	},
			 	{ 
			 		"name": "CBG", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBC", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCV", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCA", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "THC8", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Pulegone", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Myrcene", 
			 		"value": 0.89
			 	},
			 	{ 
			 		"name": "Caryophyllene", 
			 		"value": 0.20
			 	},
			 	{ 
			 		"name": "Limonene", 
			 		"value": 0.25
			 	},
			 	{ 
			 		"name": "Linalool", 
			 		"value": 0.28
			 	},
			 	{ 
			 		"name": "Eucalyptol", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Pinene", 
			 		"value": 3.66
			 	},
			 	{ 
			 		"name": "Terpineol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol-4", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Cymene", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Apigenin", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Quercetin", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Cannflavin A", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Beta-sitosterol", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "CBL", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Humulene", 
			 		"value": 0.00
				},
				{ 
			 		"name": "Terpinolene", 
			 		"value": 0.00
				} 	
		 	],  
		 	"taste": ["Fruity"],
		 	 "conditions": ["Stress", "PMS", "Pain", "Migraines", "Appetite Loss", "Insomnia", "Depression", "Bipolar", "Arthritis", "Anxiety", "Anorexia"],
			 "positiveEffects": ["Happy", "Energetic", "Focused", "Relaxed", "Hungry", "Potent", "Drowsiness"],
			 "negativeEffects": ["Munchies", "Couch Lock"],
			 "descriptionDetailed": "This plant is tall with resinous, fruity, potent buds.",
			 "descriptionAbbrev":  "This plant is tall with resinous, fruity, potent buds.",
			 "tags": ["Hybrid", "Fire Bomb", "Bipolar", "Migraines", "Headache"],
			 "imageUrl": "images/strains/fire_bomb.jpg"
			},
			{"strainId": 41,
			 "strainName": "Forum Cookies/GSC", 
			 "strainType": "Hybrid",
			 "components": [
			 	{ 
			 		"name": "THC9", 
			 		"value": 22.10
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 0.42
			 	},
			 	{ 
			 		"name": "CBN", 
			 		"value": 0.13
			 	},
			 	{ 
			 		"name": "CBG", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBC", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCV", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCA", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "THC8", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Pulegone", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Myrcene", 
			 		"value": 0.03
			 	},
			 	{ 
			 		"name": "Caryophyllene", 
			 		"value": 3.11
			 	},
			 	{ 
			 		"name": "Limonene", 
			 		"value": 0.34
			 	},
			 	{ 
			 		"name": "Linalool", 
			 		"value": 0.50
			 	},
			 	{ 
			 		"name": "Eucalyptol", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Pinene", 
			 		"value": 0.04
			 	},
			 	{ 
			 		"name": "Terpineol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol-4", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Cymene", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Apigenin", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Quercetin", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Cannflavin A", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Beta-sitosterol", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "CBL", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Humulene", 
			 		"value": 0.00
				},
				{ 
			 		"name": "Terpinolene", 
			 		"value": 0.00
				} 	
		 	],  
		 	"taste": ["Sweet", "Earthy", "Pungent"],
		 	 "conditions": ["ADD/ADHD", "Anorexia", "Anxiety", "Bipolar", "Depression", "Insomnia", "Appetite Loss", "Migraines", "Pain", "Stress", "Nausea"],
			 "positiveEffects": ["Happy", "Focused", "Relaxed", "Creative"],
			 "negativeEffects": ["Munchies"],
			 "descriptionDetailed": "Forum Cut Girl Scout Cookie is what the majority of medical patients consider true GSC.",
			 "descriptionAbbrev":  "Forum Cut Girl Scout Cookie is what the majority of medical patients consider true GSC.",
			 "tags": ["Hybrid", "Forum Cookies/GSC", "Bipolar", "Migraines", "Headache"],
			 "imageUrl": "images/strains/forum_cookies.jpg"
			},
			{"strainId": 42,
			 "strainName": "Gooey Wreck", 
			 "strainType": "Hybrid",
			 "components": [
			 	{ 
			 		"name": "THC9", 
			 		"value": 25.00
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 0.85
			 	},
			 	{ 
			 		"name": "CBN", 
			 		"value": 0.07
			 	},
			 	{ 
			 		"name": "CBG", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBC", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCV", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCA", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "THC8", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Pulegone", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Myrcene", 
			 		"value": 0.16
			 	},
			 	{ 
			 		"name": "Caryophyllene", 
			 		"value": 0.31
			 	},
			 	{ 
			 		"name": "Limonene", 
			 		"value": 0.04
			 	},
			 	{ 
			 		"name": "Linalool", 
			 		"value": 0.17
			 	},
			 	{ 
			 		"name": "Eucalyptol", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Pinene", 
			 		"value": 1.25
			 	},
			 	{ 
			 		"name": "Terpineol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol-4", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Cymene", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Apigenin", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Quercetin", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Cannflavin A", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Beta-sitosterol", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "CBL", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Humulene", 
			 		"value": 0.00
				},
				{ 
			 		"name": "Terpinolene", 
			 		"value": 0.00
				} 	
		 	],   
		 	"taste": [""],
		 	 "conditions": ["ADD/ADHD", "Anorexia", "Anxiety",  "Bipolar", "Migraines", "Headache", "Hypertension", "Depression", "Glaucoma", "Appetite Loss", "Muscle Spasms", "Pain", "PMS", "Stress"],
			 "positiveEffects": ["Happy", "Focused", "Relaxed"],
			 "negativeEffects": ["Munchies"],
			 "descriptionDetailed": "Gooey Wreck is a cross between Afgooey, a hybrid of an Afghan indica and a Maui Haze sativa, and Trainwreck.",
			 "descriptionAbbrev":  "Gooey Wreck is a cross between Afgooey and Trainwreck.",
			 "tags": ["Hybrid", "Gooey Wreck", "Wreck", "Bipolar", "Migraines", "Headache", "Hypertension", "Glaucoma"],
			 "imageUrl": "images/strains/gooey-wreck.jpg"
			},
			{"strainId": 43,
			 "strainName": "Grapefruit Haze", 
			 "strainType": "Hybrid",
			 "components": [
			 	{ 
			 		"name": "THC9", 
			 		"value": 16.90
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 0.32
			 	},
			 	{ 
			 		"name": "CBN", 
			 		"value": 0.07
			 	},
			 	{ 
			 		"name": "CBG", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBC", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCV", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCA", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "THC8", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Pulegone", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Myrcene", 
			 		"value": 0.05
			 	},
			 	{ 
			 		"name": "Caryophyllene", 
			 		"value": 0.79
			 	},
			 	{ 
			 		"name": "Limonene", 
			 		"value": 0.05
			 	},
			 	{ 
			 		"name": "Linalool", 
			 		"value": 0.03
			 	},
			 	{ 
			 		"name": "Eucalyptol", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Pinene", 
			 		"value": 0.11
			 	},
			 	{ 
			 		"name": "Terpineol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol-4", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Cymene", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Apigenin", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Quercetin", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Cannflavin A", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Beta-sitosterol", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "CBL", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Humulene", 
			 		"value": 0.00
				},
				{ 
			 		"name": "Terpinolene", 
			 		"value": 0.00
				} 	
		 	], 
		 	 "taste": ["Pepper", "Grapefruit", "Citrus"],
		 	 "conditions": ["ADD/ADHD", "Anxiety", "Bipolar", "Depression", "Insomnia", "Migraines", "PMS", "Stress", "Muscle Spasms", "Fibromyalgia"],
			 "positiveEffects": ["Happy", "Energetic", "Relaxed", "Creative"],
			 "negativeEffects": ["Dry Mouth", "Dizzy", "Dry Eyes"],
			 "descriptionDetailed": "The famous BC Grapefruit Indica strain and the Super Silver Haze come together for a very strong hybrid.",
			 "descriptionAbbrev":  "A beautiful blend of fruity and spicy flavours with a very cerebral high.",
			 "tags": ["Hybrid", "Grapefruit Haze", "Haze", "Bipolar", "Migraines", "Headache", "PMS"],
			 "imageUrl": "images/strains/grapefruit-haze_100x100.jpg"
			},
			{"strainId": 44,
			 "strainName": "Green Crack", 
			 "strainType": "Sativa",
			 "components": [
			 	{ 
			 		"name": "THC9", 
			 		"value": 15.83
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 0.10
			 	},
			 	{ 
			 		"name": "CBN", 
			 		"value": 0.05
			 	},
			 	{ 
			 		"name": "CBG", 
			 		"value": 2.60
			 	},
			 	{ 
			 		"name": "CBC", 
			 		"value": 0.30
			 	},
			 	{ 
			 		"name": "THCV", 
			 		"value": 0.30
			 	},
			 	{ 
			 		"name": "THCA", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "THC8", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Pulegone", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Myrcene", 
			 		"value": 1.40
			 	},
			 	{ 
			 		"name": "Caryophyllene", 
			 		"value": 0.50
			 	},
			 	{ 
			 		"name": "Limonene", 
			 		"value": 0.40
			 	},
			 	{ 
			 		"name": "Linalool", 
			 		"value": 0.10
			 	},
			 	{ 
			 		"name": "Eucalyptol", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Pinene", 
			 		"value": 0.20
			 	},
			 	{ 
			 		"name": "Terpineol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol-4", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Cymene", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Apigenin", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Quercetin", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Cannflavin A", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Beta-sitosterol", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "CBL", 
			 		"value": 0.50
			 	},
			 	{ 
			 		"name": "Humulene", 
			 		"value": 0.00
				},
				{ 
			 		"name": "Terpinolene", 
			 		"value": 0.00
				} 	
		 	],
		 	"taste": ["Sweet", "Citrus", "Earthy"],   
		 	 "conditions": ["ADD/ADHD", "Anxiety", "Bipolar", "Depression", "Appetite Loss", "Pain", "Stress"],
			 "positiveEffects": ["Energetic", "Happy", "Uplifted", "Euphoric", "Creative"],
			 "negativeEffects": ["Dry Mouth", "Dry Eyes", "Paranoid", "Dizzy", "Anxious", "Munchies"],
			 "descriptionDetailed": "Few strains compare to Green Crack's sharp energy and focus as it induces an invigorating mental buzz that keeps you going throughout the day. With a tangy, fruity flavor redolent of mango, Green Crack is the perfect daytime medication for patients treating fatigue, stress, and depression.",
			 "descriptionAbbrev":  "The perfect daytime medication for patients treating fatigue, stress, and depression.",
			 "tags": ["Sativa", "Green Crack", "Bipolar"],
			 "imageUrl": "images/strains/green-crack_100x100.jpg"
			},
			{"strainId": 45,
			 "strainName": "Green Dream", 
			 "strainType": "Hybrid",
			 "components": [
			 	{ 
			 		"name": "THC9", 
			 		"value": 23.10
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 0.47
			 	},
			 	{ 
			 		"name": "CBN", 
			 		"value": 0.11
			 	},
			 	{ 
			 		"name": "CBG", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBC", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCV", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCA", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "THC8", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Pulegone", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Myrcene", 
			 		"value": 0.61
			 	},
			 	{ 
			 		"name": "Caryophyllene", 
			 		"value": 1.66
			 	},
			 	{ 
			 		"name": "Limonene", 
			 		"value": 0.43
			 	},
			 	{ 
			 		"name": "Linalool", 
			 		"value": 0.16
			 	},
			 	{ 
			 		"name": "Eucalyptol", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Pinene", 
			 		"value": 0.03
			 	},
			 	{ 
			 		"name": "Terpineol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol-4", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Cymene", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Apigenin", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Quercetin", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Cannflavin A", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Beta-sitosterol", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "CBL", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Humulene", 
			 		"value": 0.00
				},
				{ 
			 		"name": "Terpinolene", 
			 		"value": 0.00
				} 	
		 	], 
		 	"taste": ["Earthy", "Sweet", "Blueberry"], 
		 	 "conditions": ["Anorexia", "Anxiety", "Asthma", "Depression", "Bipolar", "PMS", "Appetite Loss", "Pain", "Muscle Spasms", "Stress", "Insomnia"],
			 "positiveEffects": ["Happy", "Uplifted", "Euphoric", "Creative", "Relaxed"],
			 "negativeEffects": ["Dry Mouth", "Dry Eyes", "Paranoid", "Dizzy", "Anxious", "Munchies"],
			 "descriptionDetailed": "A sativa-dominant hybrid cross of Green Crack and Blue Dream. The green crack intensity and energetic buzz compliments the blue dreams soulfulness.",
			 "descriptionAbbrev":  "A sativa-dominant hybrid cross of Green Crack and Blue Dream. The green crack intensity and energetic buzz compliments the blue dreams soulfulness.",
			 "tags": ["Hybrid", "Green Dream", "Bipolar"],
			 "imageUrl": "images/strains/green-dream_100x100.jpg"
			},
			{"strainId": 46,
			 "strainName": "Green Thailand", 
			 "strainType": "Sativa",
			 "components": [
			 	{ 
			 		"name": "THC9", 
			 		"value": 21.00
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 0.54
			 	},
			 	{ 
			 		"name": "CBN", 
			 		"value": 0.09
			 	},
			 	{ 
			 		"name": "CBG", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBC", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCV", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCA", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "THC8", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Pulegone", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Myrcene", 
			 		"value": 1.43
			 	},
			 	{ 
			 		"name": "Caryophyllene", 
			 		"value": 1.43
			 	},
			 	{ 
			 		"name": "Limonene", 
			 		"value": 2.19
			 	},
			 	{ 
			 		"name": "Linalool", 
			 		"value": 0.63
			 	},
			 	{ 
			 		"name": "Eucalyptol", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Pinene", 
			 		"value": 0.03
			 	},
			 	{ 
			 		"name": "Terpineol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol-4", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Cymene", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Apigenin", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Quercetin", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Cannflavin A", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Beta-sitosterol", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "CBL", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Humulene", 
			 		"value": 0.00
				},
				{ 
			 		"name": "Terpinolene", 
			 		"value": 0.00
				} 	
		 	],  
		 	"taste": ["Fruity", "Sweet"],
		 	 "conditions": ["Anxiety", "Arthritis", "Bipolar", "Depression", "Glaucoma", "Appetite Loss", "Migraines", "Headache", "Nausea", "Stress", "Impotence"],
			 "positiveEffects": ["Happy", "Energetic", "Focused", "Creative", "Sexual"],
			 "negativeEffects": ["Munchies"],
			 "descriptionDetailed": "Green Thailand is a pure landrace Thai strain from the island of Ko Chang in Thailand. It boasts as one of the highest THC contents of any cannabis variety in the world. Green Thailand is one of the most productive strains in Thailand helped by the relatively short flowering time compared to some other Thai strains.",
			 "descriptionAbbrev":  "One of the highest THC contents of any cannabis variety in the world. Green Thailand is a pure landrace Thai strain from the island of Ko Chang in Thailand.",
			 "tags": ["Sativa", "Green Thailand", "Bipolar", "Migraines", "Headache", "Nausea", "Glaucoma"],
			 "imageUrl": "images/strains/green-thai_100x100.jpg"
			},
			{"strainId": 47,
			 "strainName": "H-Train Wreck", 
			 "strainType": "Hybrid",
			 "components": [
			 	{ 
			 		"name": "THC9", 
			 		"value": 19.10
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 0.27
			 	},
			 	{ 
			 		"name": "CBN", 
			 		"value": 0.06
			 	},
			 	{ 
			 		"name": "CBG", 
			 		"value": 0.62
			 	},
			 	{ 
			 		"name": "CBC", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCV", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCA", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "THC8", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Pulegone", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Myrcene", 
			 		"value": 0.04
			 	},
			 	{ 
			 		"name": "Caryophyllene", 
			 		"value": 1.05
			 	},
			 	{ 
			 		"name": "Limonene", 
			 		"value": 0.33
			 	},
			 	{ 
			 		"name": "Linalool", 
			 		"value": 0.09
			 	},
			 	{ 
			 		"name": "Eucalyptol", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Pinene", 
			 		"value": 0.10
			 	},
			 	{ 
			 		"name": "Terpineol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol-4", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Cymene", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Apigenin", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Quercetin", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Cannflavin A", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Beta-sitosterol", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "CBL", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Humulene", 
			 		"value": 0.00
				},
				{ 
			 		"name": "Terpinolene", 
			 		"value": 0.00
				} 	
		 	],  
		 	"taste": ["Earthy", "Pine", "Pungent"],
		 	 "conditions": ["ADD/ADHD","Anorexia","Anxiety","Bipolar", "Migraines", "Depression", "Insomnia", "Appetite Loss", "Pain", "Stress"],
			 "positiveEffects": ["Happy", "Focused", "Relaxed", "Creative"],
			 "negativeEffects": ["Munchies"],
			 "descriptionDetailed": "Trainwreck is a sativa-dominant cannabis strain that hits you as hard as a freight train that you don't see coming.",
			 "descriptionAbbrev":  "People swear by Trainwreck for its Pain relief and other medicinal qualities.",
			 "tags": ["Hybrid", "H-Train Wreck", "Bipolar", "Migraines", "Headache"],
			 "imageUrl": "images/strains/H-trainwreck.jpg"
			},
			{"strainId": 48,
			 "strainName": "Hawaiian Hulk", 
			 "strainType": "Sativa",
			 "components": [
			 	{ 
			 		"name": "THC9", 
			 		"value": 21.00
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 0.27
			 	},
			 	{ 
			 		"name": "CBN", 
			 		"value": 0.14
			 	},
			 	{ 
			 		"name": "CBG", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBC", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCV", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCA", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "THC8", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Pulegone", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Myrcene", 
			 		"value": 0.28
			 	},
			 	{ 
			 		"name": "Caryophyllene", 
			 		"value": 0.51
			 	},
			 	{ 
			 		"name": "Limonene", 
			 		"value": 0.17
			 	},
			 	{ 
			 		"name": "Linalool", 
			 		"value": 0.15
			 	},
			 	{ 
			 		"name": "Eucalyptol", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Pinene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol-4", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Cymene", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Apigenin", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Quercetin", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Cannflavin A", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Beta-sitosterol", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "CBL", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Humulene", 
			 		"value": 0.00
				},
				{ 
			 		"name": "Terpinolene", 
			 		"value": 0.00
				} 	
		 	],  
		 	"taste": ["Sweet", "Tropical", "Citrus"],
		 	 "conditions": ["Anorexia", "Anxiety", "Bipolar", "Depression", "Insomnia", "Appetite Loss", "Migraines", "Pain", "Stress", "Impotence"],
			 "positiveEffects": ["Happy", "Energetic", "Focused", "Relaxed", "Conversational", "Creative", "Sexual"],
			 "negativeEffects": ["Munchies"],
			 "descriptionDetailed": "A great strain for relaxing with friends or listening to music.",
			 "descriptionAbbrev":  "A great strain for relaxing with friends or listening to music.",
			 "tags": ["Sativa", "Hawaiian Hulk", "Hawaiian","Bipolar", "Migraines", "Headache"],
			 "imageUrl": "images/strains/bruce-banner_100x100.jpg"
			},
			{"strainId": 49,
			 "strainName": "Jack Chemdawg", 
			 "strainType": "Sativa",
			 "components": [
			 	{ 
			 		"name": "THC9", 
			 		"value": 25.40
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 0.34
			 	},
			 	{ 
			 		"name": "CBN", 
			 		"value": 0.05
			 	},
			 	{ 
			 		"name": "CBG", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBC", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCV", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCA", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "THC8", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Pulegone", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Myrcene", 
			 		"value": 0.09
			 	},
			 	{ 
			 		"name": "Caryophyllene", 
			 		"value": 0.61
			 	},
			 	{ 
			 		"name": "Limonene", 
			 		"value": 0.25
			 	},
			 	{ 
			 		"name": "Linalool", 
			 		"value": 0.12
			 	},
			 	{ 
			 		"name": "Eucalyptol", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Pinene", 
			 		"value": 0.13
			 	},
			 	{ 
			 		"name": "Terpineol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol-4", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Cymene", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Apigenin", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Quercetin", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Cannflavin A", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Beta-sitosterol", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "CBL", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Humulene", 
			 		"value": 0.00
				},
				{ 
			 		"name": "Terpinolene", 
			 		"value": 0.00
				} 	
		 	],  
		 	"taste": ["Earthy", "Diesel", "Pungent"],
		 	 "conditions": ["ADD/ADHD", "Anxiety", "Bipolar", "Depression", "Migraines", "Headache", "PMS", "Pain", "Stress"],
			 "positiveEffects": ["Happy", "Energetic", "Focused", "Creative"],
			 "negativeEffects": ["Dry Mouth", "Dry Eyes", "Dizzy", "Paranoid", "Headache"],
			 "descriptionDetailed": "Between its mysterious origin, ambiguous genetics, and the plethora of successful crosses the strain has produced, Chemdawg has practically secured itself a permanent place in the cannabis hall of fame.",
			 "descriptionAbbrev":  "Expect to have a very cerebral experience, coupled with a strong heavy-bodied feeling.",
			 "tags": ["Sativa", "Jack Chemdawg", "Chemdawg", "Jack", "Bipolar", "Migraines", "Headache", "PMS"],
			 "imageUrl": "images/strains/chemdawg_100x100.jpg"
			},
			{"strainId": 50,
			 "strainName": "Jack Herer", 
			 "strainType": "Sativa",
			 "components": [
			 	{ 
			 		"name": "THC9", 
			 		"value": 20.60
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 0.12
			 	},
			 	{ 
			 		"name": "CBN", 
			 		"value": 0.02
			 	},
			 	{ 
			 		"name": "CBG", 
			 		"value": 1.40
			 	},
			 	{ 
			 		"name": "CBC", 
			 		"value": 0.07
			 	},
			 	{ 
			 		"name": "THCV", 
			 		"value": 0.15
			 	},
			 	{ 
			 		"name": "THCA", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "THC8", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Pulegone", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Myrcene", 
			 		"value": 0.20
			 	},
			 	{ 
			 		"name": "Caryophyllene", 
			 		"value": 0.20
			 	},
			 	{ 
			 		"name": "Limonene", 
			 		"value": 0.30
			 	},
			 	{ 
			 		"name": "Linalool", 
			 		"value": 0.01
			 	},
			 	{ 
			 		"name": "Eucalyptol", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Pinene", 
			 		"value": 0.20
			 	},
			 	{ 
			 		"name": "Terpineol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol-4", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Cymene", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Apigenin", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Quercetin", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Cannflavin A", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Beta-sitosterol", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "CBL", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Humulene", 
			 		"value": 0.00
				},
				{ 
			 		"name": "Terpinolene", 
			 		"value": 0.00
				} 	
		 	], 
		 	"taste": ["Earthy", "Pine", "Woody"], 
		 	 "conditions": ["Anorexia","Depression", "Stress", "Pain", "Fatigue", "Appetite Loss"],
			 "positiveEffects": ["Happy", "Uplifted", "Euphoric", "Energetic", "Creative"],
			 "negativeEffects": ["Dry Mouth", "Dry Eyes", "Dizzy", "Paranoid", "Anxious", "Munchies"],
			 "descriptionDetailed": "Sensi Seeds created Jack Herer hoping to capture both the cerebral elevation associated with sativas and the heavy resin production of indicas. Its rich genetic background gives rise to several different variations of Jack Herer, each phenotype bearing its own unique features and effects.",
			 "descriptionAbbrev":  "Consumers typically describe this 55% sativa hybrid as blissful, Clear headed, and creative.",
			 "tags": ["Sativa", "Jack Herer", "Jack", "Bipolar", "Stress", "Depression", "Pain", "Fatigue", "Lack of Appetite", "Happy", "Uplifted", "Euphoric", "Energetic", "Creative"],
			 "imageUrl": "images/strains/jack-herer_100x100.jpg"
			},
			{"strainId": 51,
			 "strainName": "Jillybean", 
			 "strainType": "Hybrid",
			 "components": [
			 	{ 
			 		"name": "THC9", 
			 		"value": 18.70
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 0.31
			 	},
			 	{ 
			 		"name": "CBN", 
			 		"value": 0.07
			 	},
			 	{ 
			 		"name": "CBG", 
			 		"value": 0.30
			 	},
			 	{ 
			 		"name": "CBC", 
			 		"value": 0.30
			 	},
			 	{ 
			 		"name": "THCV", 
			 		"value": 0.03
			 	},
			 	{ 
			 		"name": "THCA", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "THC8", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Pulegone", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Myrcene", 
			 		"value": 0.56
			 	},
			 	{ 
			 		"name": "Caryophyllene", 
			 		"value": 1.53
			 	},
			 	{ 
			 		"name": "Limonene", 
			 		"value": 0.38
			 	},
			 	{ 
			 		"name": "Linalool", 
			 		"value": 0.39
			 	},
			 	{ 
			 		"name": "Eucalyptol", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Pinene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol-4", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Cymene", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Apigenin", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Quercetin", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Cannflavin A", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Beta-sitosterol", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "CBL", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Humulene", 
			 		"value": 0.00
				},
				{ 
			 		"name": "Terpinolene", 
			 		"value": 0.00
				} 	
		 	],  
		 	"taste": ["Sweet", "Citrus", "Orange"],
		 	 "conditions": ["ADD/ADHD", "Anxiety", "Bipolar", "Depression", "Fatigue", "Pain", "PMS", "Stress"],
			 "positiveEffects": ["Happy","Euphoric", "Energetic", "Creative", "Conversational"],
			 "negativeEffects": ["Dry Mouth", "Dry Eyes", "Dizzy", "Paranoid", "Headache"],
			 "descriptionDetailed": "Jillybean is described as being an upbeat and happy hybrid, with flavors of tangy orange and mango.",
			 "descriptionAbbrev":  "A top choice for creative minds and social butterflies looking for unencumbered euphoria during daytime hours.",
			 "tags": ["Hybrid", "Jillybean", "Bipolar", "PMS"],
			 "imageUrl": "images/strains/jillybean_100x100.jpg"
			},
			{"strainId": 52,
			 "strainName": "Lamb's Bread", 
			 "strainType": "Sativa",
			 "components": [
			 	{ 
			 		"name": "THC9", 
			 		"value": 18.50
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 1.81
			 	},
			 	{ 
			 		"name": "CBN", 
			 		"value": 0.07
			 	},
			 	{ 
			 		"name": "CBG", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBC", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCV", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCA", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THC8", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pulegone", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Myrcene", 
			 		"value": 0.07
			 	},
			 	{ 
			 		"name": "Caryophyllene", 
			 		"value": 1.68
			 	},
			 	{ 
			 		"name": "Limonene", 
			 		"value": 0.53
			 	},
			 	{ 
			 		"name": "Linalool", 
			 		"value": 0.15
			 	},
			 	{ 
			 		"name": "Eucalyptol", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Pinene", 
			 		"value": 0.06
			 	},
			 	{ 
			 		"name": "Terpineol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol-4", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Cymene", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Apigenin", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Quercetin", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Cannflavin A", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Beta-sitosterol", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "CBL", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Humulene", 
			 		"value": 0.00
				},
				{ 
			 		"name": "Terpinolene", 
			 		"value": 0.00
				} 	
		 	],  
		 	"taste": ["Earthy", "Pungent", "Woody"],
		 	 "conditions": ["ADD/ADHD", "Anorexia", "Anxiety", "Bipolar", "Depression", "Appetite Loss", "Pain", "Stress", "Fatigue", "Nausea"],
			 "positiveEffects": ["Happy", "Uplifted", "Energetic", "Euphoric", "Relaxed", "Creative"],
			 "negativeEffects": ["Dry Mouth", "Dry Eyes", "Anxious", "Paranoid", "Headache", "Munchies"],
			 "descriptionDetailed": "Stress subsides quickly from the Lamb's Bread buzz, which can help ease depression. The origins of this plant comes from Jamaica and it has been reported that even Bob Marley himself has encountered this wonderful slice of cannabis genealogy.",
			 "descriptionAbbrev":  "Known to give mass amounts of energy and positive introspection.",
			 "tags": ["Sativa", "Lamb's Bread", "Bipolar"],
			 "imageUrl": "images/strains/lamb-s-bread_100x100.jpg"
			},
			{"strainId": 53,
			 "strainName": "Lemon Haze", 
			 "strainType": "Sativa",
			 "components": [
			 	{ 
			 		"name": "THC9", 
			 		"value": 23.20
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 0.63
			 	},
			 	{ 
			 		"name": "CBN", 
			 		"value": 0.70
			 	},
			 	{ 
			 		"name": "CBG", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBC", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCV", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCA", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THC8", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pulegone", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Myrcene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Caryophyllene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Limonene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Linalool", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Eucalyptol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pinene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol-4", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cymene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Apigenin", 
			 	 	"value": 0.00
			 	},
			 	{ 
			 		"name": "Quercetin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cannflavin A", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Beta-sitosterol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBL", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Humulene", 
			 		"value": 0.00
				},
				{ 
			 		"name": "Terpinolene", 
			 		"value": 0.00
				} 	
		 	],
		 	"taste": ["Lemon", "Citrus", "Sweet"], 
		 	 "conditions": ["ADD/ADHD", "Anorexia", "Anxiety", "Arthritis", "Asthma", "Bipolar", "Depression", "Appetite Loss", "Pain", "Stress", "Insomnia"],
			 "positiveEffects": ["Happy", "Energetic", "Relaxed", "Creative"],
			 "negativeEffects": ["Dry Mouth", "Dry Eyes", "Paranoid", "Dizzy", "Headache", "Munchies"],
			 "descriptionDetailed": "Its buds appear to be green and yellow with amber hairs on the trichomes, giving it the yellow tint.",
			 "descriptionAbbrev":  "Has been characterized as smelling of fresh peeled lemon slices with a similar taste.",
			 "tags": ["Lemon", "Citrus",  "Sweet"],
			 "imageUrl": "images/strains/lemon-haze_100x100.jpg"
			},
			{"strainId": 54,
			 "strainName": "Lemon Head OG", 
			 "strainType": "Sativa",
			 "components": [
			 	{ 
			 		"name": "THC9", 
			 		"value": 15.70
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 0.39
			 	},
			 	{ 
			 		"name": "CBN", 
			 		"value": 0.25
			 	},
			 	{ 
			 		"name": "CBG", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBC", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCV", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCA", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THC8", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pulegone", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Myrcene", 
			 		"value": 0.02
			 	},
			 	{ 
			 		"name": "Caryophyllene", 
			 		"value": 0.81
			 	},
			 	{ 
			 		"name": "Limonene", 
			 		"value": 0.23
			 	},
			 	{ 
			 		"name": "Linalool", 
			 		"value": 0.34
			 	},
			 	{ 
			 		"name": "Eucalyptol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pinene", 
			 		"value": 0.02
			 	},
			 	{ 
			 		"name": "Terpineol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol-4", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cymene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Apigenin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Quercetin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cannflavin A", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Beta-sitosterol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBL", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Humulene", 
			 		"value": 0.00
				},
				{ 
			 		"name": "Terpinolene", 
			 		"value": 0.00
				} 	
		 	], 
		 	"taste": ["Sweet", "Lemon", "Diesel"], 
		 	 "conditions": ["ADD/ADHD", "Anorexia", "Anxiety", "Asthma", "Bipolar", "Depression", "Migraines", "Pain", "Stress", "Cramps", "Nausea"],
			 "positiveEffects": ["Happy", "Energetic", "Focused", "Relaxed", "Conversational", "Sexual"],
			 "negativeEffects": ["Munchies"],
			 "descriptionDetailed": "Its complex terpene profile and heavy resin production make Super Lemon OG an excellent choice for producing top-notch concentrates, like the two extracts that took home prizes at the 2014 High Times' Cannabis Cup in Amsterdam.",
			 "descriptionAbbrev":  "Its taste and aroma carry a strong citrus note that is entangled with tones of spicy pepper and pungent diesel fuel.",
			 "tags": ["Sativa", "Lemon Head OG", "OG",  "Bipolar", "Migraines", "Headache"],
			 "imageUrl": "images/strains/super-lemon-og_100x100.jpg"
			},
			{"strainId": 55,
			 "strainName": "Lulu", 
			 "strainType": "Sativa",
			 "components": [
			 	{ 
			 		"name": "THC9", 
			 		"value": 19.02
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 0.38
			 	},
			 	{ 
			 		"name": "CBN", 
			 		"value": 0.06
			 	},
			 	{ 
			 		"name": "CBG", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBC", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCV", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCA", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THC8", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pulegone", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Myrcene", 
			 		"value": 0.34
			 	},
			 	{ 
			 		"name": "Caryophyllene", 
			 		"value": 2.07
			 	},
			 	{ 
			 		"name": "Limonene", 
			 		"value": 1.62
			 	},
			 	{ 
			 		"name": "Linalool", 
			 		"value": 0.41
			 	},
			 	{ 
			 		"name": "Eucalyptol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pinene", 
			 		"value": 0.22
			 	},
			 	{ 
			 		"name": "Terpineol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol-4", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cymene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Apigenin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Quercetin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cannflavin A", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Beta-sitosterol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBL", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Humulene", 
			 		"value": 0.00
				},
				{ 
			 		"name": "Terpinolene", 
			 		"value": 0.00
				} 	
		 	], 
		 	"taste": ["Earthy", "Chocolate", "Lemon"],
		 	 "conditions": ["Stress", "PMS", "Pain", "Migraines", "Insomnia", "Hypertension", "Fibromyalgia", "Depression", "Bipolar", "Arthritis", "Anxiety"],
			 "positiveEffects": ["Happy", "Energetic", "Focused", "Relaxed", "Conversational", "Creative", "Motivated"],
			 "negativeEffects": ["Conversational"],
			 "descriptionDetailed": "The result of a Mikado daddy and a clone-only Green Crack mother that came from British Columbia.",
			 "descriptionAbbrev":  "The result of a Mikado daddy and a clone-only Green Crack mother that came from British Columbia.",
			 "tags": [""],
			 "imageUrl": "images/strains/lulu200x160.jpg"
			},
			{"strainId": 56,
			 "strainName": "Magic Jack", 
			 "strainType": "Sativa",
			 "components": [
			 	{ 
			 		"name": "THC9", 
			 		"value": 19.70
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 0.36
			 	},
			 	{ 
			 		"name": "CBN", 
			 		"value": 0.28
			 	},
			 	{ 
			 		"name": "CBG", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBC", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCV", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCA", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THC8", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pulegone", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Myrcene", 
			 		"value": 0.04
			 	},
			 	{ 
			 		"name": "Caryophyllene", 
			 		"value": 1.31
			 	},
			 	{ 
			 		"name": "Limonene", 
			 		"value": 0.06
			 	},
			 	{ 
			 		"name": "Linalool", 
			 		"value": 0.06
			 	},
			 	{ 
			 		"name": "Eucalyptol", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Pinene", 
			 		"value": 0.03
			 	},
			 	{ 
			 		"name": "Terpineol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol-4", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cymene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Apigenin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Quercetin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cannflavin A", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Beta-sitosterol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBL", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Humulene", 
			 		"value": 0.00
				},
				{ 
			 		"name": "Terpinolene", 
			 		"value": 0.00
				} 	
		 	],   
		 	"taste": ["Lemon", "Woody"],
		 	 "conditions": ["Anorexia", "Anxiety", "Bipolar", "Depression", "Insomnia", "Migraines", "Pain", "PMS", "Stress", "Fibromyalgia", "Nausea"],
			 "positiveEffects": ["Happy", "Energetic", "Focused", "Relaxed", "Creative", "Hungry", "Pain relief"],
			 "negativeEffects": ["Munchies"],
			 "descriptionDetailed": "This is a perfect daytime strain, energetic but not too racy, and great for helping relieve stress and promoting a sense of peace and relaxation.",
			 "descriptionAbbrev":  "This is a perfect daytime strain, energetic but not too racy, and great for helping relieve stress and promoting a sense of peace and relaxation.",
			 "tags": ["Lemon"],
			 "imageUrl": "images/strains/Magic-Jack-300.jpg"
			},
			{"strainId": 57,
			 "strainName": "Mike Tyson", 
			 "strainType": "Indica",
			 "components": [
			 	{ 
			 		"name": "THC9", 
			 		"value": 24.90
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 0.31
			 	},
			 	{ 
			 		"name": "CBN", 
			 		"value": 0.07
			 	},
			 	{ 
			 		"name": "CBG", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBC", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCV", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCA", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THC8", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pulegone", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Myrcene", 
			 		"value": 0.11
			 	},
			 	{ 
			 		"name": "Caryophyllene", 
			 		"value": 1.33
			 	},
			 	{ 
			 		"name": "Limonene", 
			 		"value": 0.69
			 	},
			 	{ 
			 		"name": "Linalool", 
			 		"value": 0.83
			 	},
			 	{ 
			 		"name": "Eucalyptol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pinene", 
			 		"value": 0.04
			 	},
			 	{ 
			 		"name": "Terpineol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol-4", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cymene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Apigenin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Quercetin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cannflavin A", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Beta-sitosterol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBL", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Humulene", 
			 		"value": 0.00
				},
				{ 
			 		"name": "Terpinolene", 
			 		"value": 0.00
				} 	
		 	],   
		 	"taste": ["Sweet", "Skunk", "Diesel"],
		 	 "conditions": ["ADD/ADHD", "Anorexia", "Anxiety","Bipolar", "Depression", "Hypertension", "Appetite Loss", "Muscle Spasms", "Pain","PMS"],
			 "positiveEffects": ["Happy", "Focused", "Relaxed", "Conversational", "Creative"],
			 "negativeEffects": ["Munchies"],
			 "descriptionDetailed": "This very heavy Indica, courtesy of Med 215 Collective, certainly looks like it will knock you out faster than you can say Arturo Gatti",
			 "descriptionAbbrev":  "Certainly pays respect to the man with the greatest one hitter in the history of the sport.",
			 "tags": ["Indica", "Mike Tyson", "Bipolar", "Hypertension", "PMS"],
			 "imageUrl": "images/strains/mike-tyson-marijuana-strain.jpg"
			},
			{"strainId": 58,
			 "strainName": "Moon Candy", 
			 "strainType": "Sativa",
			 "components": [
			 	{ 
			 		"name": "THC9", 
			 		"value": 20.40
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 0.51
			 	},
			 	{ 
			 		"name": "CBN", 
			 		"value": 0.04
			 	},
			 	{ 
			 		"name": "CBG", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBC", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCV", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCA", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THC8", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pulegone", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Myrcene", 
			 		"value": 0.22
			 	},
			 	{ 
			 		"name": "Caryophyllene", 
			 		"value": 0.36
			 	},
			 	{ 
			 		"name": "Limonene", 
			 		"value": 0.11
			 	},
			 	{ 
			 		"name": "Linalool", 
			 		"value": 0.16
			 	},
			 	{ 
			 		"name": "Eucalyptol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pinene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol-4", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cymene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Apigenin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Quercetin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cannflavin A", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Beta-sitosterol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBL", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Humulene", 
			 		"value": 0.00
				},
				{ 
			 		"name": "Terpinolene", 
			 		"value": 0.00
				} 	
		 	],
		 	"taste": ["Sweet", "Fruity"], 
		 	 "conditions": ["ADD/ADHD", "Anxiety", "Bipolar", "Depression", "Insomnia", "Nausea", "Pain", "Stress"],
			 "positiveEffects": ["Happy", "Focused", "Relaxed", "Creative"],
			 "negativeEffects": ["Drowsiness"],
			 "descriptionDetailed": "With a sweet and fruity taste, Moon Candy will make you feel happy and creative while relieving stress and pain.",
			 "descriptionAbbrev":  "With a sweet and fruity taste, Moon Candy will make you feel happy and creative while relieving stress and pain.",
			 "tags": ["Sativa", "Moon Candy", "Bipolar"],
			 "imageUrl": "images/strains/moon_candy.jpg"
			},
			{"strainId": 59,
			 "strainName": "Moonshine Diesel", 
			 "strainType": "Sativa",
			 "components": [
			 	{ 
			 		"name": "THC9", 
			 		"value": 22.90
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 0.31
			 	},
			 	{ 
			 		"name": "CBN", 
			 		"value": 0.08
			 	},
			 	{ 
			 		"name": "CBG", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBC", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCV", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCA", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THC8", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pulegone", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Myrcene", 
			 		"value": 0.07
			 	},
			 	{ 
			 		"name": "Caryophyllene", 
			 		"value": 0.60
			 	},
			 	{ 
			 		"name": "Limonene", 
			 		"value": 0.45
			 	},
			 	{ 
			 		"name": "Linalool", 
			 		"value": 1.57
			 	},
			 	{ 
			 		"name": "Eucalyptol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pinene", 
			 		"value": 0.04
			 	},
			 	{ 
			 		"name": "Terpineol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol-4", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cymene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Apigenin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Quercetin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cannflavin A", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Beta-sitosterol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBL", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Humulene", 
			 		"value": 0.00
				},
				{ 
			 		"name": "Terpinolene", 
			 		"value": 0.00
				} 	
		 	],   
		 	"taste": ["Citrus", "Flowery", "Diesel", "Grapefruit"],
		 	 "conditions": ["Anorexia", "Anxiety", "Bipolar", "Depression", "Fibromyalgia", "Migraines", "Nausea", "Pain", "PMS", "Stress"],
			 "positiveEffects": ["Happy", "Long Lasting", "Focused", "Drowsiness", "Hungry"],
			 "negativeEffects": ["Munchies", "Couch Lock"],
			 "descriptionDetailed": "The high is Long Lasting and physical, commonly beginning with hilarity, followed by extreme appetite stimulation then sedation.",
			 "descriptionAbbrev":  "The high is Long Lasting and physical, commonly beginning with hilarity, followed by extreme appetite stimulation then sedation.",
			 "tags": ["Sativa", "Moonshine Diesel", "Diesel", "Bipolar", "Migraines", "Headache", "Nausea", "PMS"],
			 "imageUrl": "images/strains/moonshine-Deisel.jpg"
			},
			{"strainId": 60,
			 "strainName": "Northern Lights", 
			 "strainType": "Indica",
			 "components": [
			 	{ 
			 		"name": "THC9", 
			 		"value": 14.55
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 0.34
			 	},
			 	{ 
			 		"name": "CBN", 
			 		"value": 0.38
			 	},
			 	{ 
			 		"name": "CBG", 
			 		"value": 0.30
			 	},
			 	{ 
			 		"name": "CBC", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCV", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCA", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THC8", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pulegone", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Myrcene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Caryophyllene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Limonene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Linalool", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Eucalyptol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pinene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol-4", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cymene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Apigenin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Quercetin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cannflavin A", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Beta-sitosterol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBL", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Humulene", 
			 		"value": 0.00
				},
				{ 
			 		"name": "Terpinolene", 
			 		"value": 0.00
				} 	
		 	],   
		 	"taste": ["Earthy", "Sweet", "Pine"],
		 	 "conditions": ["ADD/ADHD", "Anxiety", "Arthritis", "Bipolar", "Depression", "Insomnia", "Migraines", "Pain", "Stress"],
			 "positiveEffects": ["Happy", "Focused", "Relaxed", "Conversational", "Drowsiness", "Uplifted", "Euphoric"],
			 "negativeEffects": ["Dry Mouth", "Dry Eyes", "Dizzy", "Paranoid", "Headache"],
			 "descriptionDetailed": "Northern Lights stands among the most famous strains of all time, a pure indica cherished for its resinous buds, fast flowering, and resilience during growth.",
			 "descriptionAbbrev":  "Comfortable laziness allows patients to relieve pain and sleeplessness, while its mellow contentment roots out depression and stress.",
			 "tags": ["Indica", "Northern Lights", "Bipolar", "Migraines", "Headache"],
			 "imageUrl": "images/strains/northern-lights_100x100_7d43.jpg"
			},
			{"strainId": 61,
			 "strainName": "Pineapple Express", 
			 "strainType": "Hybrid",
			 "components": [
			 	{ 
			 		"name": "THC9", 
			 		"value": 15.89
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 0.24
			 	},
			 	{ 
			 		"name": "CBN", 
			 		"value": 0.57
			 	},
			 	{ 
			 		"name": "CBG", 
			 		"value": 0.35
			 	},
			 	{ 
			 		"name": "CBC", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCV", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCA", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THC8", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pulegone", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Myrcene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Caryophyllene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Limonene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Linalool", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Eucalyptol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pinene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol-4", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cymene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Apigenin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Quercetin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cannflavin A", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Beta-sitosterol", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "CBL", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Humulene", 
			 		"value": 0.00
				},
				{ 
			 		"name": "Terpinolene", 
			 		"value": 0.00
				} 	
		 	],   
		 	"taste": ["Pineapple", "Sweet", "Tropical"],
		 	 "conditions": ["ADD/ADHD", "Anorexia", "Anxiety", "Bipolar", "Depression", "Appetite Loss", "Pain", "PMS", "Stress", "Insomnia", "Headache"],
			 "positiveEffects": ["Happy", "Energetic", "Euphoric", "Focused", "Relaxed", "Creative"],
			 "negativeEffects": ["Dry Mouth", "Dry Eyes", "Paranoid", "Dizzy", "Headache", "Munchies"],
			 "descriptionDetailed": "The smell has been likened to fresh apple and mango, with a taste of pineapple, pine and cedar.",
			 "descriptionAbbrev":  "This hard-hitting sativa provides an energetic high up to 2 hours.",
			 "tags": ["Hybrid", "Pineapple Express", "Bipolar", "PMS"],
			 "imageUrl": "images/strains/pineapple-express_100x100.jpg"
			},
			{"strainId": 62,
			 "strainName": "Platinum Trinity Kush", 
			 "strainType": "Sativa",
			 "components": [
			 	{ 
			 		"name": "THC9", 
			 		"value": 17.20
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 0.52
			 	},
			 	{ 
			 		"name": "CBN", 
			 		"value": 0.02
			 	},
			 	{ 
			 		"name": "CBG", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBC", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCV", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCA", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THC8", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pulegone", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Myrcene", 
			 		"value": 0.10
			 	},
			 	{ 
			 		"name": "Caryophyllene", 
			 		"value": 1.95
			 	},
			 	{ 
			 		"name": "Limonene", 
			 		"value": 1.24
			 	},
			 	{ 
			 		"name": "Linalool", 
			 		"value": 0.38
			 	},
			 	{ 
			 		"name": "Eucalyptol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pinene", 
			 		"value": 0.06
			 	},
			 	{ 
			 		"name": "Terpineol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol-4", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cymene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Apigenin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Quercetin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cannflavin A", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Beta-sitosterol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBL", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Humulene", 
			 		"value": 0.00
				},
				{ 
			 		"name": "Terpinolene", 
			 		"value": 0.00
				} 	
		 	],   
		 	"taste": ["Earthy", "Sweet", "Hash"],
		 	 "conditions": ["ADD/ADHD", "Anorexia", "Anxiety", "Bipolar", "Depression", "Insomnia", "Appetite Loss", "Migraines", "Pain", "PMS", "Stress"],
			 "positiveEffects": ["Happy", "Focused", "Mellow", "Relaxed"],
			 "negativeEffects": ["Munchies"],
			 "descriptionDetailed": "A Clear headed, happy high develops into a mellow contentment.",
			 "descriptionAbbrev":  "A Clear headed, happy high develops into a mellow contentment.",
			 "tags": [""],
			 "imageUrl": "images/strains/platinum_trinity_kush.jpg"
			},
			{"strainId": 63,
			 "strainName": "Private Reserve OG", 
			 "strainType": "Indica",
			 "components": [
			 	{ 
			 		"name": "THC9", 
			 		"value": 27.00
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 0.38
			 	},
			 	{ 
			 		"name": "CBN", 
			 		"value": 0.05
			 	},
			 	{ 
			 		"name": "CBG", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBC", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCV", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCA", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THC8", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pulegone", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Myrcene", 
			 		"value": 0.11
			 	},
			 	{ 
			 		"name": "Caryophyllene", 
			 		"value": 1.52
			 	},
			 	{ 
			 		"name": "Limonene", 
			 		"value": 1.59
			 	},
			 	{ 
			 		"name": "Linalool", 
			 		"value": 0.75
			 	},
			 	{ 
			 		"name": "Eucalyptol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pinene", 
			 		"value": 0.03
			 	},
			 	{ 
			 		"name": "Terpineol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol-4", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cymene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Apigenin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Quercetin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cannflavin A", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Beta-sitosterol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBL", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Humulene", 
			 		"value": 0.00
				},
				{ 
			 		"name": "Terpinolene", 
			 		"value": 0.00
				} 	
		 	],   
		 	"taste": ["Sour", "Diesel"],
		 	 "conditions": ["ADD/ADHD", "Anorexia", "Anxiety", "Arthritis", "Bipolar", "Depression", "Insomnia", "Appetite Loss", "Muscle Spasms", "Pain", "Stress"],
			 "positiveEffects": ["Happy", "Focused", "Relaxed", "Euphoric", "Uplifted", "Drowsiness"],
			 "negativeEffects": ["Dry Mouth", "Dry Eyes", "Anxious", "Headache", "Munchies"],
			 "descriptionDetailed": "True to its predecessors, this flower carries the distinct diesel kush flavor with sour undertones.",
			 "descriptionAbbrev":  "This indica-dominant hybrid delivers a long-lasting sedative and trancey high, ideal for leisure and relaxation.",
			 "tags": ["Indica", "Private Reserve OG", "OG", "Bipolar"],
			 "imageUrl": "images/strains/private_reserve_OG.jpg"
			},
			{"strainId": 64,
			 "strainName": "Purple Haze", 
			 "strainType": "Sativa",
			 "components": [
			 	{ 
			 		"name": "THC9", 
			 		"value": 13.10
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 0.38
			 	},
			 	{ 
			 		"name": "CBN", 
			 		"value": 0.71
			 	},
			 	{ 
			 		"name": "CBG", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBC", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCV", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCA", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THC8", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pulegone", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Myrcene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Caryophyllene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Limonene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Linalool", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Eucalyptol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pinene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol-4", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cymene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Apigenin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Quercetin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cannflavin A", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Beta-sitosterol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBL", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Humulene", 
			 		"value": 0.00
				},
				{ 
			 		"name": "Terpinolene", 
			 		"value": 0.00
				} 	
		 	],   
		 	"taste": ["Sweet", "Berry", "Earthy"],
		 	 "conditions": ["ADD/ADHD", "Anorexia", "Anxiety", "Arthritis", "Bipolar", "Depression", "Muscle Spasms", "Pain", "Stress", "Fatigue", "Headache"],
			 "positiveEffects": ["Happy", "Euphoric", "Uplifted", "Energetic", "Relaxed", "Creative"],
			 "negativeEffects": ["Dry Mouth", "Dry Eyes", "Paranoid", "Dizzy", "Headache"],
			 "descriptionDetailed": "This nostalgic sativa staple remains cherished for its high-energy cerebral stimulation that awakens creativity and blissful contentment throughout the day.",
			 "descriptionAbbrev":  "Delivers a dreamy burst of euphoria that brings veteran consumers back to their psychedelic heyday.",
			 "tags": ["Sativa", "Purple Haze", "Haze", "Bipolar"],
			 "imageUrl": "images/strains/purple-haze_100x100.jpg"
			},
			
			{"strainId": 65,
			 "strainName": "Purple Urkle", 
			 "strainType": "Indica",
			 "components": [
			 	{ 
			 		"name": "THC9", 
			 		"value": 17.60
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 0.43
			 	},
			 	{ 
			 		"name": "CBN", 
			 		"value": 0.08
			 	},
			 	{ 
			 		"name": "CBG", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBC", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCV", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCA", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "THC8", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Pulegone", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Myrcene", 
			 		"value": 0.40
			 	},
			 	{ 
			 		"name": "Caryophyllene", 
			 		"value": 0.40
			 	},
			 	{ 
			 		"name": "Limonene", 
			 		"value": 0.50
			 	},
			 	{ 
			 		"name": "Linalool", 
			 		"value": 0.01
			 	},
			 	{ 
			 		"name": "Eucalyptol", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Pinene", 
			 		"value": 0.20
			 	},
			 	{ 
			 		"name": "Terpineol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol-4", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Cymene", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Apigenin", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Quercetin", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Cannflavin A", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Beta-sitosterol", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "CBL", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Humulene", 
			 		"value": 0.00
				},
				{ 
			 		"name": "Terpinolene", 
			 		"value": 0.00
				} 	
		 	], 
		 	"taste": ["Sweet", "Grape", "Berry"],
		 	 "conditions": ["Bipolar", "Migraines", "Headache", "PMS", "Insomnia", "Pain", "Depression", "Appetite Loss"],
			 "positiveEffects": ["Relaxed", "Drowsiness", "Euphoric", "Happy", "Hungry"],
			 "negativeEffects": ["Couch Lock", "Drowsiness", "Dry Mouth", "Dry Eyes", "Dizzy", "Paranoid", "Headache", "Munchies"],
			 "descriptionDetailed": "The indica effects are deeply relaxing, sleep-inducing, and a great option for full-body Pain relief.",
			 "descriptionAbbrev":  "The indica effects are deeply relaxing, sleep-inducing, and a great option for full-body Pain relief.",
			 "tags": ["Indica", "Purple Urkle", "Purple", "Bipolar", "Migraines", "Headache", "PMS"],
			 "imageUrl": "images/strains/purple-urkle_100x100.jpg"
			},
			{"strainId": 66,
			 "strainName": "Raskal OG", 
			 "strainType": "Hybrid",
			 "components": [
			 	{ 
			 		"name": "THC9", 
			 		"value": 9.67
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 0.12
			 	},
			 	{ 
			 		"name": "CBN", 
			 		"value": 0.06
			 	},
			 	{ 
			 		"name": "CBG", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBC", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCV", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCA", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THC8", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pulegone", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Myrcene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Caryophyllene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Limonene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Linalool", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Eucalyptol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pinene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol-4", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cymene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Apigenin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Quercetin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cannflavin A", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Beta-sitosterol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBL", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Humulene", 
			 		"value": 0.00
				},
				{ 
			 		"name": "Terpinolene", 
			 		"value": 0.00
				} 	
		 	], 
		 	"taste": ["Earthy", "Citrus", "Lemon"],
		 	 "conditions": ["Depression", "Stress", "Pain", "Fatigue", "Headache", "Bipolar", "Nausea", "PMS"],
			 "positiveEffects": ["Happy", "Euphoric", "Relaxed", "Uplifted", "Focused"],
			 "negativeEffects": ["Dry Eyes", "Dry Mouth", "Paranoid", "Dizzy", "Headache"],
			 "descriptionDetailed": "Raskal OG smells of lemon and pine with a musty and grassy taste.",
			 "descriptionAbbrev":  "Raskal OG smells of lemon and pine with a musty and grassy taste.",
			 "tags": ["Hybrid", "Raskal OG", "OG", "Bipolar", "Nausea", "PMS"],
			 "imageUrl": "images/strains/raskal-og_100x100.jpg"
			},
			{"strainId": 67,
			 "strainName": "Regulator OG", 
			 "strainType": "Indica",
			 "components": [
			 	{ 
			 		"name": "THC9", 
			 		"value": 23.30
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 0.31
			 	},
			 	{ 
			 		"name": "CBN", 
			 		"value": 0.19
			 	},
			 	{ 
			 		"name": "CBG", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBC", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCV", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCA", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THC8", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pulegone", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Myrcene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Caryophyllene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Limonene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Linalool", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Eucalyptol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pinene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol-4", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cymene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Apigenin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Quercetin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cannflavin A", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Beta-sitosterol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBL", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Humulene", 
			 		"value": 0.00
				},
				{ 
			 		"name": "Terpinolene", 
			 		"value": 0.00
				} 	
		 	],
		 	"taste": ["Sweet", "Lemon"],
		 	 "conditions": ["Bipolar", "Migraines", "Pain", "Anxiety", "Headache"],
			 "positiveEffects": ["Balanced", "Cerebral", "Relaxed"],
			 "negativeEffects": ["Mild"],
			 "descriptionDetailed": "The high produced from Regulator OG is a pleasant balance of cerebral and body effects.",
			 "descriptionAbbrev":  "The high produced from Regulator OG is a pleasant balance of cerebral and body effects.",
			 "tags": ["Indica", "Regulator OG", "OG", "Bipolar", "Migraines", "Headache"],
			 "imageUrl": "images/strains/regulator-og.jpg"
			},
			{"strainId": 68,
			 "strainName": "Saturn OG", 
			 "strainType": "Hybrid",
			 "components": [
			 	{ 
			 		"name": "THC9", 
			 		"value": 23.80
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 0.35
			 	},
			 	{ 
			 		"name": "CBN", 
			 		"value": 0.24
			 	},
			 	{ 
			 		"name": "CBG", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBC", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCV", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCA", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THC8", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pulegone", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Myrcene", 
			 		"value": 0.06
			 	},
			 	{ 
			 		"name": "Caryophyllene", 
			 		"value": 1.79
			 	},
			 	{ 
			 		"name": "Limonene", 
			 		"value": 0.07
			 	},
			 	{ 
			 		"name": "Linalool", 
			 		"value": 0.12
			 	},
			 	{ 
			 		"name": "Eucalyptol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pinene", 
			 		"value": 0.11
			 	},
			 	{ 
			 		"name": "Terpineol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol-4", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cymene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Apigenin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Quercetin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cannflavin A", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Beta-sitosterol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBL", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Humulene", 
			 		"value": 0.00
				},
				{ 
			 		"name": "Terpinolene", 
			 		"value": 0.00
				} 	
		 	],
		 	"taste": ["Earthy", "Citrus", "Pungent"],
		 	 "conditions": ["Stress", "PMS", "Pain", "Hypertension", "Fibromyalgia", "Bipolar", "Anxiety", "Anorexia", "ADD/ADHD"],
			 "positiveEffects": ["Happy", "Energetic", "Focused", "Relaxed", "Hungry", "Giggly"],
			 "negativeEffects": ["Munchies"],
			 "descriptionDetailed": "Effects are most commonly described as hybrid-like in its balanced calm and moderate cerebral effects.",
			 "descriptionAbbrev":  "Effects are most commonly described as hybrid-like in its balanced calm and moderate cerebral effects.",
			 "tags": ["Hybrid", "Saturn OG", "OG", "Bipolar", "Hypertension", "PMS"],
			 "imageUrl": "images/strains/saturn-og_100x100.jpg"
			},
			{"strainId": 69,
			 "strainName": "Sherbet Cookies", 
			 "strainType": "Hybrid",
			 "components": [
			 	{ 
			 		"name": "THC9", 
			 		"value": 25.60
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 0.29
			 	},
			 	{ 
			 		"name": "CBN", 
			 		"value": 0.07
			 	},
			 	{ 
			 		"name": "CBG", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBC", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCV", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCA", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THC8", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pulegone", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Myrcene", 
			 		"value": 0.20
			 	},
			 	{ 
			 		"name": "Caryophyllene", 
			 		"value": 1.29
			 	},
			 	{ 
			 		"name": "Limonene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Linalool", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Eucalyptol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pinene", 
			 		"value": 0.06
			 	},
			 	{ 
			 		"name": "Terpineol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol-4", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cymene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Apigenin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Quercetin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cannflavin A", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Beta-sitosterol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBL", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Humulene", 
			 		"value": 0.00
				},
				{ 
			 		"name": "Terpinolene", 
			 		"value": 0.00
				} 	
		 	], 
		 	"taste": ["Citrus", "Pine", "Earthy"],
		 	 "conditions": ["Stress", "Migraines", "Appetite Loss", "Insomnia", "Depression", "Bipolar", "Arthritis", "Anxiety", "Anorexia"],
			 "positiveEffects": ["Happy", "Energetic", "Focused", "Relaxed", "Hungry"],
			 "negativeEffects": ["Giggly", "Munchies"],
			 "descriptionDetailed": "It is the perfect strain for users that want to get motivated, and stay awake.",
			 "descriptionAbbrev":  "It is the perfect strain for users that want to get motivated, and stay awake.",
			 "tags": ["Hybrid", "Sherbet Cookies", "Cookies", "Bipolar", "Migraines", "Headache"],
			 "imageUrl": "images/strains/sunset-sherbet_100x100.jpg"
			},
			{"strainId": 70,
			 "strainName": "Sour Cherry", 
			 "strainType": "Hybrid",
			 "components": [
			 	{ 
			 		"name": "THC9", 
			 		"value": 14.20
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 9.28
			 	},
			 	{ 
			 		"name": "CBN", 
			 		"value": 0.08
			 	},
			 	{ 
			 		"name": "CBG", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBC", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCV", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCA", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THC8", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pulegone", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Myrcene", 
			 		"value": 0.03
			 	},
			 	{ 
			 		"name": "Caryophyllene", 
			 		"value": 1.26
			 	},
			 	{ 
			 		"name": "Limonene", 
			 		"value": 0.30
			 	},
			 	{ 
			 		"name": "Linalool", 
			 		"value": 0.24
			 	},
			 	{ 
			 		"name": "Eucalyptol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pinene", 
			 		"value": 0.04
			 	},
			 	{ 
			 		"name": "Terpineol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol-4", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cymene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Apigenin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Quercetin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cannflavin A", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Beta-sitosterol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBL", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Humulene", 
			 		"value": 0.00
				},
				{ 
			 		"name": "Terpinolene", 
			 		"value": 0.00
				} 	
		 	], 
		 	"taste": ["Sweet", "Earthy", "Berry"],
		 	 "conditions": ["Anxiety", "Bipolar", "Depression", "Pain", "Stress"],
			 "positiveEffects": ["Happy", "Energetic", "Focused", "Relaxed"],
			 "negativeEffects": [""],
			 "descriptionDetailed": "The hit wipes away last night's cobwebs and bring an airy feeling inside the head; clear but also nicely high.",
			 "descriptionAbbrev":  "Great daytime smoke enabling you to get through your day with a super Cherry Smile on your face.",
			 "tags": ["Hybrid", "Sour Cherry", "Bipolar"],
			 "imageUrl": "images/strains/Sour_Cherry_Kush.jpg"
			},
			{"strainId": 71,
			 "strainName": "Stratosphere", 
			 "strainType": "Hybrid",
			 "components": [
			 	{ 
			 		"name": "THC9", 
			 		"value": 20.00
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 0.31
			 	},
			 	{ 
			 		"name": "CBN", 
			 		"value": 0.07
			 	},
			 	{ 
			 		"name": "CBG", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBC", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCV", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCA", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THC8", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pulegone", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Myrcene", 
			 		"value": 0.03
			 	},
			 	{ 
			 		"name": "Caryophyllene", 
			 		"value": 0.37
			 	},
			 	{ 
			 		"name": "Limonene", 
			 		"value": 0.28
			 	},
			 	{ 
			 		"name": "Linalool", 
			 		"value": 0.53
			 	},
			 	{ 
			 		"name": "Eucalyptol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pinene", 
			 		"value": 0.07
			 	},
			 	{ 
			 		"name": "Terpineol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol-4", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cymene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Apigenin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Quercetin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cannflavin A", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Beta-sitosterol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBL", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Humulene", 
			 		"value": 0.00
				},
				{ 
			 		"name": "Terpinolene", 
			 		"value": 0.00
				} 	
		 	], 
		 	"taste": ["Lemon", "Earthy", "Berry"],
		 	 "conditions": ["ADD/ADHD","Anorexia","Anxiety", "Bipolar","Depression", "Migraines", "Pain", "PMS", "Stress", "Impotence"],
			 "positiveEffects": ["Happy", "Energetic", "Focused", "Relaxed", "Creative", "Sexual"],
			 "negativeEffects": [""],
			 "descriptionDetailed": "Another rock hard resin machine that will sit on the top shelf all day.",
			 "descriptionAbbrev":  "Indica dominant phenotypes are perfect for relaxation and healing.",
			 "tags": ["Hybrid", "Stratosphere", "Bipolar", "Migraines", "Headache", "PMS"],
			 "imageUrl": "images/strains/stratosphere.jpg"
			},
			{"strainId": 72,
			 "strainName": "Super Grandaddy", 
			 "strainType": "Indica",
			 "components": [
			 	{ 
			 		"name": "THC9", 
			 		"value": 16.10
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 0.38
			 	},
			 	{ 
			 		"name": "CBN", 
			 		"value": 0.07
			 	},
			 	{ 
			 		"name": "CBG", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBC", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCV", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCA", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THC8", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pulegone", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Myrcene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Caryophyllene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Limonene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Linalool", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Eucalyptol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pinene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol-4", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cymene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Apigenin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Quercetin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cannflavin A", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Beta-sitosterol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBL", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Humulene", 
			 		"value": 0.00
				},
				{ 
			 		"name": "Terpinolene", 
			 		"value": 0.00
				} 	
		 	],
		 	"taste": ["Sweet", "Grape"],
		 	 "conditions": ["ADD/ADHD", "Anorexia", "Anxiety", "Arthritis", "Bipolar", "Depression", "Hypertension", "Muscle Spasms", "Pain", "PMS"],
			 "positiveEffects": ["Happy", "Focused", "Relaxed", "Creative"],
			 "negativeEffects": [""],
			 "descriptionDetailed": "Detailed description here. Detailed description here.Detailed description here.Detailed description here. Detailed description here.",
			 "descriptionAbbrev":  "This is worthy of the name Super GDP. From the gorgeous crystal covered buds to the grape smell, the taste, and then the buzz…just a step above any other GDP.",
			 "tags": ["Creamy smooth grape flavor"],
			 "imageUrl": "images/strains/Super_GDP.jpg"
			},
			{"strainId": 73,
			 "strainName": "Tangerine", 
			 "strainType": "Hybrid",
			 "components": [
			 	{ 
			 		"name": "THC9", 
			 		"value": 22.10
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 0.49
			 	},
			 	{ 
			 		"name": "CBN", 
			 		"value": 0.12
			 	},
			 	{ 
			 		"name": "CBG", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBC", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCV", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCA", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THC8", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pulegone", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Myrcene", 
			 		"value": 0.16
			 	},
			 	{ 
			 		"name": "Caryophyllene", 
			 		"value": 0.55
			 	},
			 	{ 
			 		"name": "Limonene", 
			 		"value": 1.06
			 	},
			 	{ 
			 		"name": "Linalool", 
			 		"value": 0.07
			 	},
			 	{ 
			 		"name": "Eucalyptol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pinene", 
			 		"value": 0.03
			 	},
			 	{ 
			 		"name": "Terpineol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol-4", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cymene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Apigenin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Quercetin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cannflavin A", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Beta-sitosterol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBL", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Humulene", 
			 		"value": 0.00
				},
				{ 
			 		"name": "Terpinolene", 
			 		"value": 0.00
				} 	
		 	],
		 	"taste": ["Orange", "Citrus", "Mango"],
		 	 "conditions": ["ADD/ADHD","Anorexia","Anxiety","Bipolar","Fibromyalgia","Appetite Loss","Muscle Spasms", "Pain","PMS", "Stress", "Impotence"],
			 "positiveEffects": ["Happy","Relaxed","Energetic", "Focused", "Conversational", "Creative", "Sexual", "Fatigue"],
			 "negativeEffects": ["Dry Mouth", "Dry Eyes", "Anxious", "Munchies"],
			 "descriptionDetailed": "Indoor or outdoor grows can expect flowers between 7 and 8 weeks.",
			 "descriptionAbbrev":  "The fruity tangerine aroma is accompanied with notes of mango and pineapple.",
			 "tags": ["Hybrid", "Tangerine", "Bipolar", "PMS"],
			 "imageUrl": "images/strains/tangerine_100x100jpg"
			},
			{"strainId": 74,
			 "strainName": "Tangilope", 
			 "strainType": "Sativa",
			 "components": [
			 	{ 
			 		"name": "THC9", 
			 		"value": 27.30
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 0.39
			 	},
			 	{ 
			 		"name": "CBN", 
			 		"value": 0.10
			 	},
			 	{ 
			 		"name": "CBG", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBC", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCV", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCA", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THC8", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pulegone", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Myrcene", 
			 		"value": 0.31
			 	},
			 	{ 
			 		"name": "Caryophyllene", 
			 		"value": 2.43
			 	},
			 	{ 
			 		"name": "Limonene", 
			 		"value": 2.77
			 	},
			 	{ 
			 		"name": "Linalool", 
			 		"value": 0.73
			 	},
			 	{ 
			 		"name": "Eucalyptol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pinene", 
			 		"value": 0.08
			 	},
			 	{ 
			 		"name": "Terpineol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol-4", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cymene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Apigenin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Quercetin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cannflavin A", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Beta-sitosterol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBL", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Humulene", 
			 		"value": 0.00
				},
				{ 
			 		"name": "Terpinolene", 
			 		"value": 0.00
				} 	
		 	],
		 	"taste": ["Orange", "Sweet", "Citrus"],
		 	 "conditions": ["Anxiety","Bipolar","Depression","Appetite Loss", "PMS", "Stress"],
			 "positiveEffects": ["Uplifted", "Happy", "Creative", "Energetic","Euphoric", "Focused"],
			 "negativeEffects":["Dry Mouth", "Munchies"], 
			 "descriptionDetailed": "Tangilope is a chocolatey, citrus blend of Tangie and Chocolope, two of DNA Genetics' best sativas.",
			 "descriptionAbbrev":  "The cerebral effects evoke happiness, giggles, and can stimulate creativity.",
			 "tags": ["Sativa", "Tangilope", "Bipolar", "PMS"],
			 "imageUrl": "images/strains/tangilope_100x100.jpg"
			},
			{"strainId": 75,
			 "strainName": "Tropical OG", 
			 "strainType": "Indica",
			 "components": [
			 	{ 
			 		"name": "THC9", 
			 		"value": 26.05
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 0.39
			 	},
			 	{ 
			 		"name": "CBN", 
			 		"value": 0.08
			 	},
			 	{ 
			 		"name": "CBG", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBC", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCV", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCA", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THC8", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pulegone", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Myrcene", 
			 		"value": 1.30
			 	},
			 	{ 
			 		"name": "Caryophyllene", 
			 		"value": 2.33
			 	},
			 	{ 
			 		"name": "Limonene", 
			 		"value": 0.12
			 	},
			 	{ 
			 		"name": "Linalool", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Eucalyptol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pinene", 
			 		"value": 0.32
			 	},
			 	{ 
			 		"name": "Terpineol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol-4", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cymene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Apigenin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Quercetin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cannflavin A", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Beta-sitosterol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBL", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Humulene", 
			 		"value": 0.00
				},
				{ 
			 		"name": "Terpinolene", 
			 		"value": 0.00
				} 	
		 	], 
		 	"taste": ["Tropical", "Pungent"],
		 	 "conditions": ["Stress", "PMS", "Pain", "Appetite Loss", "Depression", "Bipolar", "Anxiety", "Anorexia"],
			 "positiveEffects": ["Happy", "Energetic", "Focused", "Relaxed", "Motivated"],
			 "negativeEffects": ["Munchies"],
			 "descriptionDetailed": "Tropical OG has an exceptional high which is very clear & uplifting. Tropical OG offers a very good strength and a mixed physical and mental medicinal effect.",
			 "descriptionAbbrev":  "Tropical OG has an exceptional high which is very clear & uplifting. Tropical OG offers a very good strength and a mixed physical and mental medicinal effect.",
			 "tags": ["Indica", "Tropical OG", "OG", "Bipolar", "PMS"],
			 "imageUrl": "images/strains/Tropical_OG.jpg"
			},
			{"strainId": 76,
			 "strainName": "Ancient OG", 
			 "strainType": "Indica",
			 "components": [
			 	{ 
			 		"name": "THC9", 
			 		"value": 20.30
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 0.40
			 	},
			 	{ 
			 		"name": "CBN", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBG", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBC", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCV", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCA", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THC8", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pulegone", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Myrcene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Caryophyllene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Limonene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Linalool", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Eucalyptol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pinene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol-4", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cymene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Apigenin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Quercetin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cannflavin A", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Beta-sitosterol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBL", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Humulene", 
			 		"value": 0.00
				},
				{ 
			 		"name": "Terpinolene", 
			 		"value": 0.00
				} 	
		 	],
		 	"taste": ["Mango", "Citrus", "Sweet", "Lemon", "Tropical"],
		 	 "conditions": ["Insomnia", "Depression", "Stress"],
			 "positiveEffects": ["Happy", "Relaxed", "Drowsiness", "Hungry"],
			 "negativeEffects": ["Couch Lock", "Munchies"],
			 "descriptionDetailed": "Its thickly resinous buds exude aromatic notes of earthy pine and sweet citrus that are fully realized in Ancient OG's taste.",
			 "descriptionAbbrev":  "Its thickly resinous buds exude aromatic notes of earthy pine and sweet citrus that are fully realized in Ancient OG's taste.",
			 "tags": [""],
			 "imageUrl": "images/strains/ancient-og_100x100.jpg"
			},
			{"strainId": 77,
			 "strainName": "Afghani", 
			 "strainType": "Indica",
			 "components": [
			 	{ 
			 		"name": "THC9", 
			 		"value": 14.61
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 0.05
			 	},
			 	{ 
			 		"name": "CBN", 
			 		"value": 0.02
			 	},
			 	{ 
			 		"name": "CBG", 
			 		"value": 0.62
			 	},
			 	{ 
			 		"name": "CBC", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCV", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCA", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THC8", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pulegone", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Myrcene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Caryophyllene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Limonene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Linalool", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Eucalyptol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pinene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol-4", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cymene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Apigenin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Quercetin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cannflavin A", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Beta-sitosterol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBL", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Humulene", 
			 		"value": 0.00
				},
				{ 
			 		"name": "Terpinolene", 
			 		"value": 0.00
				} 	
		 	],
		 	"taste": ["Earthy", "Pungent", "Sweet"], 
		 	 "conditions": ["Anxiety", "Cancer", "Insomnia", "Migraines", "Pain", "Stress"],
			 "positiveEffects": ["Relaxed", "Drowsiness", "Happy", "Euphoric", "Hungry"],
			 "negativeEffects": ["Dry Mouth", "Dry Eyes", "Dizzy", "Headache", "Paranoid", "Munchies"],
			 "descriptionDetailed": "Afghani is a heavy indica strain named after its geographic origin, where the earliest varieties of cannabis are believed to have grown. Patients most commonly turn to this potent indica to treat insomnia, pain, and stress disorders.",
			 "descriptionAbbrev":  "With a sweet, earthy aroma, Afghani delivers a deep, sedating relaxation and euphoria.",
			 "tags": ["Indica", "Afghani", "Cancer", "Pain", "Stress"],
			 "imageUrl": "images/strains/afghani_100x100_902b.jpg"
			},
			{"strainId": 78,
			 "strainName": "Avi-Dekel", 
			 "strainType": "Sativa",
			 "components": [
			 	{ 
			 		"name": "THC9", 
			 		"value": 0.87
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 15.36
			 	},
			 	{ 
			 		"name": "CBN", 
			 		"value": 0.16
			 	},
			 	{ 
			 		"name": "CBG", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBC", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCV", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCA", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THC8", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pulegone", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Myrcene", 
			 		"value": 0.02
			 	},
			 	{ 
			 		"name": "Caryophyllene", 
			 		"value": 0.30
			 	},
			 	{ 
			 		"name": "Limonene", 
			 		"value": 0.24
			 	},
			 	{ 
			 		"name": "Linalool", 
			 		"value": 0.03
			 	},
			 	{ 
			 		"name": "Eucalyptol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pinene", 
			 		"value": 0.20
			 	},
			 	{ 
			 		"name": "Terpineol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol-4", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cymene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Apigenin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Quercetin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cannflavin A", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Beta-sitosterol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBL", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Humulene", 
			 		"value": 0.00
				},
				{ 
			 		"name": "Terpinolene", 
			 		"value": 0.00
				} 	
		 	],
		 	"taste": ["Chestnut", "Earthy", "Woody"],
		 	 "conditions": ["Anxiety", "Cancer", "Epilepsy", "Pain", "Stress", "Muscle Spasms", "Nausea", "Inflammation"],
			 "positiveEffects": ["Focused", "Happy", "Relaxed", "Aroused"],
			 "negativeEffects": ["Dry Mouth", "Anxious", "Headache"],
			 "descriptionDetailed": "Avi-Dekel is a sativa-dominant strain developed by Tikun Olam to contain high levels of CBD and almost no THC.",
			 "descriptionAbbrev":  "Its CBD content, reaching as high as 15.8 percent, is intended to treat inflammation as well as sleep and digestive disorders",
			 "tags": ["Sativa", "Avi-Dekel", "Cancer", "Pain", "Stress"],
			 "imageUrl": "images/strains/avi-dekel_100x100.jpg"
			},
			{"strainId": 79,
			 "strainName": "Bull Rider", 
			 "strainType": "Hybrid",
			 "components": [
			 	{ 
			 		"name": "THC9", 
			 		"value": 19.62
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 0.10
			 	},
			 	{ 
			 		"name": "CBN", 
			 		"value": 0.16
			 	},
			 	{ 
			 		"name": "CBG", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBC", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCV", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCA", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THC8", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pulegone", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Myrcene", 
			 		"value": 0.28
			 	},
			 	{ 
			 		"name": "Caryophyllene", 
			 		"value": 0.38
			 	},
			 	{ 
			 		"name": "Limonene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Linalool", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Eucalyptol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pinene", 
			 		"value": 0.97
			 	},
			 	{ 
			 		"name": "Terpineol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol-4", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cymene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Apigenin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Quercetin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cannflavin A", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Beta-sitosterol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBL", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Humulene", 
			 		"value": 0.00
				},
				{ 
			 		"name": "Terpinolene", 
			 		"value": 0.00
				} 	
		 	],
		 	"taste": ["Pine", "Earthy", "Pungent"],
		 	 "conditions": ["Anxiety", "Arthritis", "Cancer", "Epilepsy", "Insomnia", "Muscle Spasms", "Pain", "Stress"],
			 "positiveEffects": ["Relaxed", "Drowsiness", "Hungry"],
			 "negativeEffects": ["Couch Lock", "Munchies"],
			 "descriptionDetailed": " It has a very heavy initial cerebral punch to the head that eventually fades into a very nice, but extremely heavy body sedation.",
			 "descriptionAbbrev":  " It has a very heavy initial cerebral punch to the head that eventually fades into a very nice, but extremely heavy body sedation.",
			 "tags": ["Hybrid", "Bull Rider", "Cancer", "Stress"],
			 "imageUrl": "images/strains/bull-rider-1498.jpg"
			},
			{"strainId": 80,
			 "strainName": "Cannatonic", 
			 "strainType": "Hybrid",
			 "components": [
			 	{ 
			 		"name": "THC9", 
			 		"value": 14.00
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 23.40
			 	},
			 	{ 
			 		"name": "CBN", 
			 		"value": 0.07
			 	},
			 	{ 
			 		"name": "CBG", 
			 		"value": 1.60
			 	},
			 	{ 
			 		"name": "CBC", 
			 		"value": 0.54
			 	},
			 	{ 
			 		"name": "THCV", 
			 		"value": 0.40
			 	},
			 	{ 
			 		"name": "THCA", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THC8", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pulegone", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Myrcene", 
			 		"value": 1.68
			 	},
			 	{ 
			 		"name": "Caryophyllene", 
			 		"value": 0.26
			 	},
			 	{ 
			 		"name": "Limonene", 
			 		"value": 0.35
			 	},
			 	{ 
			 		"name": "Linalool", 
			 		"value": 0.12
			 	},
			 	{ 
			 		"name": "Eucalyptol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pinene", 
			 		"value": 0.41
			 	},
			 	{ 
			 		"name": "Terpineol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol-4", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cymene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Apigenin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Quercetin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cannflavin A", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Beta-sitosterol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBL", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Humulene", 
			 		"value": 0.00
				},
				{ 
			 		"name": "Terpinolene", 
			 		"value": 0.00
				} 	
		 	],
		 	"taste": ["Earthy", "Woody", "Pungent", "Pine"],
		 	 "conditions": ["Cancer", "Depression", "Epilepsy", "Stress", "Pain", "Inflammation", "Muscle Spasms"],
			 "positiveEffects": ["Relaxed", "Happy", "Uplifted", "Focused", "Euphoric"],
			 "negativeEffects": ["Dry Mouth", "Dry Eyes", "Anxious", "Dizzy", "Headache"],
			 "descriptionDetailed": "It's recommended for one to use this as a daytime or wake and bake strain. You will likely be able to medicate throughout the day without feeling bogged down.",
			 "descriptionAbbrev":  "It's recommended for one to use this as a daytime or wake and bake strain. You will likely be able to medicate throughout the day without feeling bogged down.",
			 "tags": [""],
			 "imageUrl": "images/strains/cannatonic_100x100.jpg"
			},
			{"strainId": 81,
			 "strainName": "Charlotte's Web", 
			 "strainType": "Sativa",
			 "components": [
			 	{ 
			 		"name": "THC9", 
			 		"value": 10.46
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 8.40
			 	},
			 	{ 
			 		"name": "CBN", 
			 		"value": 0.10
			 	},
			 	{ 
			 		"name": "CBG", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBC", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCV", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCA", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THC8", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pulegone", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Myrcene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Caryophyllene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Limonene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Linalool", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Eucalyptol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pinene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol-4", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cymene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Apigenin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Quercetin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cannflavin A", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Beta-sitosterol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBL", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Humulene", 
			 		"value": 0.00
				},
				{ 
			 		"name": "Terpinolene", 
			 		"value": 0.00
				} 	
		 	],
		 	"taste": ["Earthy", "Woody", "Pine"],
		 	 "conditions": ["Cancer", "Epilepsy", "Stress", "Pain", "Depression", "Seizures", "Fatigue"],
			 "positiveEffects": ["Focused", "Happy", "Relaxed", "Uplifted", "Euphoric"],
			 "negativeEffects": ["Dry Eyes", "Dry Mouth", "Dizzy", "Axious", "Paranoid"],
			 "descriptionDetailed": "Charlotte's powerful web may cause dizziness for some patients, so new users should be cautious. Overall, the flowers of this strain have a fresh pine aroma.",
			 "descriptionAbbrev":  "This strain is effective with little to no psychoactive effects, making it great for those who don't want their medication to affect their daily tasks.",
			 "tags": ["Sativa", "Charlotte's Web", "Cancer", "Epilepsy", "Stress"],
			 "imageUrl": "images/strains/charlotte-s-web_100x100.jpg"
			},
			{"strainId": 82,
			 "strainName": "G13 Haze", 
			 "strainType": "Indica",
			 "components": [
			 	{ 
			 		"name": "THC9", 
			 		"value": 20.80
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 0.37
			 	},
			 	{ 
			 		"name": "CBN", 
			 		"value": 0.06
			 	},
			 	{ 
			 		"name": "CBG", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBC", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCV", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCA", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THC8", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pulegone", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Myrcene", 
			 		"value": 0.57
			 	},
			 	{ 
			 		"name": "Caryophyllene", 
			 		"value": 1.48
			 	},
			 	{ 
			 		"name": "Limonene", 
			 		"value": 0.33
			 	},
			 	{ 
			 		"name": "Linalool", 
			 		"value": 0.18
			 	},
			 	{ 
			 		"name": "Eucalyptol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pinene", 
			 		"value": 0.55
			 	},
			 	{ 
			 		"name": "Terpineol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol-4", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cymene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Apigenin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Quercetin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cannflavin A", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Beta-sitosterol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBL", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Humulene", 
			 		"value": 0.00
				},
				{ 
			 		"name": "Terpinolene", 
			 		"value": 0.00
				} 	
		 	], 
		 	"taste": ["Pine", "Woody", "Pepper"],
		 	 "conditions": ["Anxiety","Cancer", "Depression","Epilepsy", "Pain", "Stress"],
			 "positiveEffects": ["Happy", "Energetic", "Relaxed", "Creative", "Giggly"],
			 "negativeEffects": ["Dry Mouth", "Dizzy", "Dry Eyes", "Paranoid", "Headache"],
			 "descriptionDetailed": "His hybrid of G13 has been crossed with an original Haze to give it a more uplifting sensation while still retaining the heavy hitting indica undertones.",
			 "descriptionAbbrev":  "Bred for maximum potency and renowned for its medical use, and it's definitely not recommended for beginners.",
			 "tags": ["Indica", "G13 Haze", "Cancer", "Epilepsy"],
			 "imageUrl": "images/strains/g13-haze_100x100.jpg"
			},
			{"strainId": 83,
			 "strainName": "Great White Shark", 
			 "strainType": "Sativa",
			 "components": [
			 	{ 
			 		"name": "THC9", 
			 		"value": 17.74
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 0.28
			 	},
			 	{ 
			 		"name": "CBN", 
			 		"value": 0.09
			 	},
			 	{ 
			 		"name": "CBG", 
			 		"value": 0.51
			 	},
			 	{ 
			 		"name": "CBC", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCV", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCA", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THC8", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pulegone", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Myrcene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Caryophyllene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Limonene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Linalool", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Eucalyptol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pinene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol-4", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cymene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Apigenin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Quercetin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cannflavin A", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Beta-sitosterol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBL", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Humulene", 
			 		"value": 0.00
				},
				{ 
			 		"name": "Terpinolene", 
			 		"value": 0.00
				} 	
		 	],
		 	"taste": ["Earthy", "Citrus", "Sweet"],
		 	 "conditions": ["Anorexia", "Anxiety", "Cancer", "Depression", "Appetite Loss", "Pain", "Stress", "Fatigue", "Headache"],
			 "positiveEffects": ["Happy", "Energetic", "Relaxed", "Creative", "Euphoric"],
			 "negativeEffects": ["Dry Mouth", "Dry Eyes", "Headache", "Dizzy", "Paranoid", "Munchies"],
			 "descriptionDetailed": "Often recommended medically to treat chronic pain ailments. The sativa qualities of this strain keep this heavy hitter from being a complete knockout, but it isn't recommended for days when a lot of work needs to get done.",
			 "descriptionAbbrev":  "Known for its ability to provide a strong indica body buzz very quickly.",
			 "tags": ["Sativa", "Great White Shark", "Cancer"],
			 "imageUrl": "images/strains/great-white-shark_100x100.jpg"
			},
			{"strainId": 84,
			 "strainName": "Harle-Tsu", 
			 "strainType": "Hybrid",
			 "components": [
			 	{ 
			 		"name": "THC9", 
			 		"value": 5.11
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 9.85
			 	},
			 	{ 
			 		"name": "CBN", 
			 		"value": 0.05
			 	},
			 	{ 
			 		"name": "CBG", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBC", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCV", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCA", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THC8", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pulegone", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Myrcene", 
			 		"value": 0.13
			 	},
			 	{ 
			 		"name": "Caryophyllene", 
			 		"value": 0.32
			 	},
			 	{ 
			 		"name": "Limonene", 
			 		"value": 0.08
			 	},
			 	{ 
			 		"name": "Linalool", 
			 		"value": 0.09
			 	},
			 	{ 
			 		"name": "Eucalyptol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pinene", 
			 		"value": 0.03
			 	},
			 	{ 
			 		"name": "Terpineol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol-4", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cymene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Apigenin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Quercetin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cannflavin A", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Beta-sitosterol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBL", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Humulene", 
			 		"value": 0.00
				},
				{ 
			 		"name": "Terpinolene", 
			 		"value": 0.00
				} 	
		 	],
		 	"taste": ["Earthy", "Spicy", "Herbal", "Sweet"],
		 	 "conditions": ["ADD/ADHD","Anorexia", "Anxiety", "Arthritis", "Asthma", "Cancer", "Migraines", "Depression", "Epilepsy", "Pain", "Stress"],
			 "positiveEffects": ["Happy", "Focused", "Relaxed", "Uplifted", "Euphoric"],
			 "negativeEffects": ["Dry Mouth"],
			 "descriptionDetailed": "Harle-Tsu, bred by the Southern Humboldt Seed Collective, is a high-CBD hybrid cross between Harlequin and Sour Tsunami. With a CBD content 20 times higher than its THC content, Harle-Tsu brings relief to pain and inflammation without psychoactivity.",
			 "descriptionAbbrev":  "Brings relief to pain and inflammation without psychoactivity.",
			 "tags": ["Hybrid", "Harle-Tsu", "Cancer", "Migraines", "Headache", "Epilepsy"],
			 "imageUrl": "images/strains/harle-tsu_100x100.jpg"
			},
			{"strainId": 85,
			 "strainName": "Harlequin", 
			 "strainType": "Sativa",
			 "components": [
			 	{ 
			 		"name": "THC9", 
			 		"value": 6.98
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 14.00
			 	},
			 	{ 
			 		"name": "CBN", 
			 		"value": 0.01
			 	},
			 	{ 
			 		"name": "CBG", 
			 		"value": 0.50
			 	},
			 	{ 
			 		"name": "CBC", 
			 		"value": 0.20
			 	},
			 	{ 
			 		"name": "THCV", 
			 		"value": 0.13
			 	},
			 	{ 
			 		"name": "THCA", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "THC8", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Pulegone", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Myrcene", 
			 		"value": 0.06
			 	},
			 	{ 
			 		"name": "Caryophyllene", 
			 		"value": 1.36
			 	},
			 	{ 
			 		"name": "Limonene", 
			 		"value": 1.99
			 	},
			 	{ 
			 		"name": "Linalool", 
			 		"value": 0.02
			 	},
			 	{ 
			 		"name": "Eucalyptol", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Pinene", 
			 		"value": 0.07
			 	},
			 	{ 
			 		"name": "Terpineol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol-4", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cymene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Apigenin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Quercetin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cannflavin A", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Beta-sitosterol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBL", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Humulene", 
			 		"value": 0.00
				},
				{ 
			 		"name": "Terpinolene", 
			 		"value": 0.00
				} 	
		 	], 
		 	"taste": ["Earthy", "Woody", "Pine"],
		 	 "conditions": ["Arthritis", "Cancer", "Nausea", "Epilepsy", "Pain", "Stress", "Inflammation", "Depression", "Headache"],
			 "positiveEffects": ["Relaxed", "Happy", "Uplifted", "Energetic", "Focused", "Euphoric"],
			 "negativeEffects": ["Dry Mouth", "Dry Eyes", "Headache", "Anxious", "Dizzy"],
			 "descriptionDetailed": "Unlike most high-CBD strains, Harlequin almost always develops a CBD:THC ratio of 5:2, making this strain one of the most effective out there for treatment of pain and anxiety, as CBD counteracts THC's paranoia while amplifying its painkilling properties.",
			 "descriptionAbbrev":  "What draws crowds to Harlequin is its ability to relax without sedation, and to relieve without intoxication.",
			 "tags": ["Sativa", "Harlequin", "Cancer", "Nausea", "Epilepsy"],
			 "imageUrl": "images/strains/harlequin_100x100.jpg"
			},
			{"strainId": 86,
			 "strainName": "Hog", 
			 "strainType": "Indica",
			 "components": [
			 	{ 
			 		"name": "THC9", 
			 		"value": 14.80
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 0.43
			 	},
			 	{ 
			 		"name": "CBN", 
			 		"value": 0.19
			 	},
			 	{ 
			 		"name": "CBG", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBC", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCV", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCA", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THC8", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pulegone", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Myrcene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Caryophyllene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Limonene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Linalool", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Eucalyptol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pinene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol-4", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cymene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Apigenin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Quercetin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cannflavin A", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Beta-sitosterol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBL", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Humulene", 
			 		"value": 0.00
				},
				{ 
			 		"name": "Terpinolene", 
			 		"value": 0.00
				} 	
		 	],
		 	"taste": ["Earthy", "Sweet", "Pungent"],
		 	 "conditions": ["Cancer", "Migraines", "Headache"],
			 "positiveEffects": ["Relaxed", "Drowsiness", "Euphoric", "Happy", "Uplifted"],
			 "negativeEffects": ["Dry Eyes", "Dry Mouth", "Anxious", "Dizzy", "Paranoid"],
			 "descriptionDetailed": "Originally bred by T.H. Seeds in Amsterdam, this potent indica is regarded as one of the strongest strains in the world and won a High Times Cannabis Cup for the best indica in 2002.",
			 "descriptionAbbrev":  "This strain is recognized by its pungent aroma, indicative of its world-renowned, extremely heavy body buzz.",
			 "tags": ["Indica", "Hog", "Cancer", "Migraines", "Headache"],
			 "imageUrl": "images/strains/hog_100x100.jpg"
			},
			{"strainId": 87,
			 "strainName": "King's Kush", 
			 "strainType": "Indica",
			 "components": [
			 	{ 
			 		"name": "THC9", 
			 		"value": 24.75
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 0.84
			 	},
			 	{ 
			 		"name": "CBN", 
			 		"value": 0.03
			 	},
			 	{ 
			 		"name": "CBG", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBC", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCV", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCA", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THC8", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pulegone", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Myrcene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Caryophyllene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Limonene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Linalool", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Eucalyptol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pinene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol-4", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cymene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Apigenin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Quercetin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cannflavin A", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Beta-sitosterol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBL", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Humulene", 
			 		"value": 0.00
				},
				{ 
			 		"name": "Terpinolene", 
			 		"value": 0.00
				} 	
		 	],
		 	"taste": ["Sweet", "Citrus", "Earthy"],
		 	 "conditions": ["Cancer", "Pain", "Stress", "Depression", "Insomnia", "Appetite Loss", "Fibromyalgia"],
			 "positiveEffects": ["Euphoric", "Relaxed", "Happy", "Drowsiness", "Uplifted"],
			 "negativeEffects": ["Dry Mouth", "Dry Eyes", "Paranoid", "Dizzy", "Headache"],
			 "descriptionDetailed": "With gradual but powerful effects, King's Kush is famous for its potency and shiny trichromes during flowering.",
			 "descriptionAbbrev":  "This strain comes across as sweet and sour with a powerful and tangy grape scent, as well as some hints of lavender.",
			 "tags": ["Indica", "King's Kush", "Kush","Cancer"],
			 "imageUrl": "images/strains/king-s-kush_100x100.jpg"
			},
			{"strainId": 88,
			 "strainName": "Kosher Kush", 
			 "strainType": "Indica",
			 "components": [
			 	{ 
			 		"name": "THC9", 
			 		"value": 18.63
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 0.36
			 	},
			 	{ 
			 		"name": "CBN", 
			 		"value": 0.82
			 	},
			 	{ 
			 		"name": "CBG", 
			 		"value": 0.12
			 	},
			 	{ 
			 		"name": "CBC", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCV", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCA", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THC8", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pulegone", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Myrcene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Caryophyllene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Limonene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Linalool", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Eucalyptol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pinene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol-4", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cymene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Apigenin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Quercetin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cannflavin A", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Beta-sitosterol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBL", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Humulene", 
			 		"value": 0.00
				},
				{ 
			 		"name": "Terpinolene", 
			 		"value": 0.00
				} 	
		 	], 
		 	"taste": ["Earthy", "Pungent", "Pine"],
		 	 "conditions": ["Anorexia", "Anxiety", "Cancer", "Chronic Aches", "Depression", "Insomnia", "Muscle Spasms", "Pain", "Stress"],
			 "positiveEffects": ["Happy", "Relaxed", "Drowsiness", "Euphoric", "Uplifted"],
			 "negativeEffects": ["Dry Mouth", "Dry Eyes", "Dizzy", "Paranoid", "Headache"],
			 "descriptionDetailed": "Kosher Kush is the world's first ever strain to be blessed by a Rabbi. From the vault of DNA's Reserva Privada seed line,",
			 "descriptionAbbrev":  "Kosher Kush won the High Times Indica Cup in 2010 and 2011.",
			 "tags": ["Earthy", "Pungent", "Pine"],
			 "imageUrl": "images/strains/kosher-kush_100x100.jpg"
			},
			{"strainId": 89,
			 "strainName": "Lemon Larry OG", 
			 "strainType": "Hybrid",
			 "components": [
			 	{ 
			 		"name": "THC9", 
			 		"value": 9.48
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 9.70
			 	},
			 	{ 
			 		"name": "CBN", 
			 		"value": 0.03
			 	},
			 	{ 
			 		"name": "CBG", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBC", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCV", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCA", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THC8", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pulegone", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Myrcene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Caryophyllene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Limonene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Linalool", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Eucalyptol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pinene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol-4", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cymene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Apigenin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Quercetin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cannflavin A", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Beta-sitosterol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBL", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Humulene", 
			 		"value": 0.00
				},
				{ 
			 		"name": "Terpinolene", 
			 		"value": 0.00
				} 	
		 	], 
		 	"taste": ["Pineapple", "Pine", "Lemon"],
		 	 "conditions": ["Cancer", "Epilepsy", "Stress", "Pain", "Depression", "Appetite Loss", "Insomnia"],
			 "positiveEffects": ["Happy", "Relaxed", "Uplifted", "Euphoric", "Giggly"],
			 "negativeEffects": ["Dry Mouth", "Dry Eyes", "Anxious", "Dizzy", "Paranoid"],
			 "descriptionDetailed": "Larry OG produces a potent yet easy body buzz that will allow you to relax while getting things done.",
			 "descriptionAbbrev":  "The effects are happy but not overwhelming.",
			 "tags": ["Hybrid", "Lemon Larry OG","OG", "Cancer", "Epilepsy"],
			 "imageUrl": "images/strains/larry-og_100x100.jpg"
			},
			{"strainId": 90,
			 "strainName": "Master Bubba", 
			 "strainType": "Hybrid",
			 "components": [
			 	{ 
			 		"name": "THC9", 
			 		"value": 9.48
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 9.70
			 	},
			 	{ 
			 		"name": "CBN", 
			 		"value": 0.03
			 	},
			 	{ 
			 		"name": "CBG", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBC", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCV", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCA", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THC8", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pulegone", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Myrcene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Caryophyllene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Limonene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Linalool", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Eucalyptol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pinene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol-4", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cymene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Apigenin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Quercetin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cannflavin A", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Beta-sitosterol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBL", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Humulene", 
			 		"value": 0.00
				},
				{ 
			 		"name": "Terpinolene", 
			 		"value": 0.00
				} 	
		 	],
		 	"taste": ["Earthy", "Skunk", "Spicy", "Herbal"],
		 	 "conditions": ["Cancer", "Insomnia", "Stress", "Pain", "Muscle Spasms", "Appetite Loss"],
			 "positiveEffects": ["Relaxed", "Euphoric", "Drowsiness", "Hungry", "Happy"],
			 "negativeEffects": ["Dry Mouth", "Dry Eyes", "Dizzy", "Paranoid", "Munchies"],
			 "descriptionDetailed": "Popular for the treatment of pain, stress and insomnia thanks to the strong body sedation it provides.",
			 "descriptionAbbrev":  "Master Bubba is the perfect strain for those looking for true indica effects. ",
			 "tags": ["Hybrid", "Lemon Larry OG","OG", "Cancer"],
			 "imageUrl": "images/strains/master-bubba_100x100jpg"
			},
			{"strainId": 91,
			 "strainName": "Pineapple Thai", 
			 "strainType": "Sativa",
			 "components": [
			 	{ 
			 		"name": "THC9", 
			 		"value": 16.10
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 5.46
			 	},
			 	{ 
			 		"name": "CBN", 
			 		"value": 0.07
			 	},
			 	{ 
			 		"name": "CBG", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBC", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCV", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCA", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THC8", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pulegone", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Myrcene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Caryophyllene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Limonene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Linalool", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Eucalyptol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pinene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol-4", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cymene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Apigenin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Quercetin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cannflavin A", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Beta-sitosterol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBL", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Humulene", 
			 		"value": 0.00
				},
				{ 
			 		"name": "Terpinolene", 
			 		"value": 0.00
				} 	
		 	],
		 	"taste": ["Pineapple", "Earthy", "Pepper"],
		 	 "conditions": ["Cancer", "Depression", "Fatigue", "Stress", "Insomnia", "Pain"],
			 "positiveEffects": ["Happy", "Uplifted", "Energetic", "Focused"],
			 "negativeEffects": ["Dry Mouth", "Dry Eyes", "Dizzy", "Paranoid" ],
			 "descriptionDetailed": "This flower's attractiveness comes from its ability to administer powerful Pain relief without sedation, embodying true hybrid effects.",
			 "descriptionAbbrev":  "Although Pineapple Thai is an option for daytime use, its strength may lead to a nighttime preference.",
			 "tags": ["Sativa", "Pineapple Thai", "Cancer"],
			 "imageUrl": "images/strains/pineapple-thai_100x100.jpg"
			},
			{"strainId": 92,
			 "strainName": "Sour Tsunami", 
			 "strainType": "Hybrid",
			 "components": [
			 	{ 
			 		"name": "THC9", 
			 		"value": 4.20
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 8.43
			 	},
			 	{ 
			 		"name": "CBN", 
			 		"value": 0.06
			 	},
			 	{ 
			 		"name": "CBG", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBC", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCV", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCA", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THC8", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pulegone", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Myrcene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Caryophyllene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Limonene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Linalool", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Eucalyptol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pinene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol-4", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cymene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Apigenin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Quercetin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cannflavin A", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Beta-sitosterol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBL", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Humulene", 
			 		"value": 0.00
				},
				{ 
			 		"name": "Terpinolene", 
			 		"value": 0.00
				} 	
		 	],
		 	"taste": ["Earthy", "Pine", "Citrus"],
		 	 "conditions": ["Cancer", "Migraines", "Headache", "Epilepsy"],
			 "positiveEffects": ["Relaxed", "Focused", "Uplifted", "Happy", "Energetic"],
			 "negativeEffects": ["Dry Mouth", "Dry Eyes", "Anxious", "Paranoid"],
			 "descriptionDetailed": "The result is a strain that's effective at treating pain and inflammation without producing a significant high that is linked to high THC.",
			 "descriptionAbbrev":  "Sour Tsunami is a strain that became famous for being one of the first to be specifically bred for high CBD rather than THC content.",
			 "tags": ["Hybrid", "Sour Tsunami", "Sour", "Cancer", "Migraines", "Headache", "Epilepsy"],
			 "imageUrl": "images/strains/sour-tsunami_100x100.jpg"
			},
			{"strainId": 93,
			 "strainName": "The White", 
			 "strainType": "Hybrid",
			 "components": [
			 	{ 
			 		"name": "THC9", 
			 		"value": 23.90
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 0.12
			 	},
			 	{ 
			 		"name": "CBN", 
			 		"value": 0.95
			 	},
			 	{ 
			 		"name": "CBG", 
			 		"value": 1.10
			 	},
			 	{ 
			 		"name": "CBC", 
			 		"value": 0.03
			 	},
			 	{ 
			 		"name": "THCV", 
			 		"value": 0.20
			 	},
			 	{ 
			 		"name": "THCA", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THC8", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pulegone", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Myrcene", 
			 		"value": 0.62
			 	},
			 	{ 
			 		"name": "Caryophyllene", 
			 		"value": 0.72
			 	},
			 	{ 
			 		"name": "Limonene", 
			 		"value": 0.06
			 	},
			 	{ 
			 		"name": "Linalool", 
			 		"value": 0.09
			 	},
			 	{ 
			 		"name": "Eucalyptol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pinene", 
			 		"value": 1.16
			 	},
			 	{ 
			 		"name": "Terpineol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol-4", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cymene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Apigenin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Quercetin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cannflavin A", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Beta-sitosterol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBL", 
			 		"value": 0.20
			 	},
			 	{ 
			 		"name": "Humulene", 
			 		"value": 0.00
				},
				{ 
			 		"name": "Terpinolene", 
			 		"value": 0.00
				} 	
		 	], 
		 	"taste": ["Earthy", "Pine", "Pungent"],
		 	 "conditions": ["Stress", "Insomnia", "Depression", "Pain", "Cancer", "Nausea", "Headache"],
			 "positiveEffects": ["Relaxed", "Happy", "Euphoric", "Uplifted", "Drowsiness"],
			 "negativeEffects": ["Dry Mouth", "Dry Eyes", "Dizzy", "Paranoid", "Anxious"],
			 "descriptionDetailed": "The White strain is a 2009 IC420 cup winner named for the color of the buds when ripe.",
			 "descriptionAbbrev":  "The White strain is a 2009 IC420 cup winner named for the color of the buds when ripe.",
			 "tags": ["Hybrid", "The White", "Cancer"],
			 "imageUrl": "images/strains/the-white_100x100.jpg"
			},
			{"strainId": 94,
			 "strainName": "Valentine X", 
			 "strainType": "Hybrid",
			 "components": [
			 	{ 
			 		"name": "THC9", 
			 		"value": 1.80
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 24.57
			 	},
			 	{ 
			 		"name": "CBN", 
			 		"value": 0.06
			 	},
			 	{ 
			 		"name": "CBG", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBC", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCV", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCA", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THC8", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pulegone", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Myrcene", 
			 		"value": 0.05
			 	},
			 	{ 
			 		"name": "Caryophyllene", 
			 		"value": 0.49
			 	},
			 	{ 
			 		"name": "Limonene", 
			 		"value": 0.26
			 	},
			 	{ 
			 		"name": "Linalool", 
			 		"value": 0.10
			 	},
			 	{ 
			 		"name": "Eucalyptol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pinene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol-4", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cymene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Apigenin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Quercetin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cannflavin A", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Beta-sitosterol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBL", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Humulene", 
			 		"value": 0.00
				},
				{ 
			 		"name": "Terpinolene", 
			 		"value": 0.00
				} 	
		 	],
		 	"taste": ["Pine", "Earthy", "Honey"],
		 	 "conditions": ["ADD/ADHD", "Anxiety", "Cancer", "Epilepsy", "Pain", "Stress", "Impotence", "Muscle Spasms", "Seizures", "Spasticity", "Inflammation"],
			 "positiveEffects": ["Happy", "Relaxed", "Creative", "Tingly", "Euphoric", "Drowsiness", "Aroused"],
			 "negativeEffects": ["Drowsiness"],
			 "descriptionDetailed": "It is a variant of the remarkable ACDC that is cherished for its healing properties. Many find Valentine X to be a great help for seizure disorders, inflammation, and when treating cancer.",
			 "descriptionAbbrev":  "In addition to its medicinal effects this strain is known to spark creative thinking.",
			 "tags": ["Pine", "Earthy", "Honey"],
			 "imageUrl": "images/strains/Valentine-X.jpg"
			},
			{"strainId": 95,
			 "strainName": "White Fire Alien OG", 
			 "strainType": "Hybrid",
			 "components": [
			 	{ 
			 		"name": "THC9", 
			 		"value": 23.80
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 0.32
			 	},
			 	{ 
			 		"name": "CBN", 
			 		"value": 0.05
			 	},
			 	{ 
			 		"name": "CBG", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBC", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCV", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCA", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THC8", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pulegone", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Myrcene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Caryophyllene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Limonene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Linalool", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Eucalyptol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pinene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol-4", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cymene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Apigenin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Quercetin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cannflavin A", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Beta-sitosterol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBL", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Humulene", 
			 		"value": 0.00
				},
				{ 
			 		"name": "Terpinolene", 
			 		"value": 0.00
				} 	
		 	],
		 	"taste": ["Pungent", "Earthy", "Lemon"],
		 	 "conditions": ["Cancer", "Pain", "Anxiety", "Tension", "Stress"],
			 "positiveEffects": ["Relaxed", "Calming"],
			 "negativeEffects": [""],
			 "descriptionDetailed": "There's no better way to conclude a hard day's work than with a stress-relieving dose of White Fire Alien OG.",
			 "descriptionAbbrev":  "With a sweet lemon aroma, this hybrid cross mixes The White with Fire Alien Kush for a full-body calm that eases pain, anxiety, and tension.",
			 "tags": ["Hybrid", "White Fire Alien OG", "OG", "Cancer"],
			 "imageUrl": "images/strains/white-fire-alien-og_100x100.jpg"
			},
			{"strainId": 96,
			 "strainName": "Yoda OG", 
			 "strainType": "Hybrid",
			 "components": [
			 	{ 
			 		"name": "THC9", 
			 		"value": 22.00
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 0.28
			 	},
			 	{ 
			 		"name": "CBN", 
			 		"value": 0.14
			 	},
			 	{ 
			 		"name": "CBG", 
			 		"value": 0.29
			 	},
			 	{ 
			 		"name": "CBC", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCV", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCA", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THC8", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pulegone", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Myrcene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Caryophyllene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Limonene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Linalool", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Eucalyptol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pinene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol-4", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cymene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Apigenin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Quercetin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cannflavin A", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Beta-sitosterol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBL", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Humulene", 
			 		"value": 0.00
				},
				{ 
			 		"name": "Terpinolene", 
			 		"value": 0.00
				} 	
		 	],
		 	"taste": ["Earthy", "Pungent", "Woody"],
		 	 "conditions": ["Cancer", "Stress", "Insomnia", "Pain", "Depression", "Appetite Loss"],
			 "positiveEffects": ["Relaxed", "Drowsiness", "Happy", "Euphoric", "Hungry"],
			 "negativeEffects": ["Dry Mouth", "Dry Eyes", "Dizzy", "Paranoid", "Headache", "Munchies"],
			 "descriptionDetailed": "Seasoned consumers may be able to withstand its heaviness during the day, but Yoda OG is most popularly chosen for nighttime consumption.",
			 "descriptionAbbrev":  "Its sedating, euphoric effects make it a popular medicine for anxiety and insomnia, and it also provides an extra kick to the appetite.",
			 "tags": ["Hybrid", "Yoda OG", "OG", "Cancer"],
			 "imageUrl": "images/strains/yoda-og_100x100.jpg"
			},
			{"strainId": 97,
			 "strainName": "707 Headband", 
			 "strainType": "Hybrid",
			 "components": [
			 	{ 
			 		"name": "THC9", 
			 		"value": 23.10
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 0.39
			 	},
			 	{ 
			 		"name": "CBN", 
			 		"value": 0.08
			 	},
			 	{ 
			 		"name": "CBG", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBC", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCV", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCA", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THC8", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pulegone", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Myrcene", 
			 		"value": 0.39
			 	},
			 	{ 
			 		"name": "Caryophyllene", 
			 		"value": 1.69
			 	},
			 	{ 
			 		"name": "Limonene", 
			 		"value": 0.39
			 	},
			 	{ 
			 		"name": "Linalool", 
			 		"value": 0.28
			 	},
			 	{ 
			 		"name": "Eucalyptol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pinene", 
			 		"value": 0.06
			 	},
			 	{ 
			 		"name": "Terpineol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol-4", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cymene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Apigenin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Quercetin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cannflavin A", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Beta-sitosterol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBL", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Humulene", 
			 		"value": 0.00
				},
				{ 
			 		"name": "Terpinolene", 
			 		"value": 0.00
				} 	
		 	],
		 	"taste": ["Pungent", "Sweet", "Skunk"],
		 	 "conditions": ["Stress", "Depression","Pain", "Fatigue", "Muscle Spasms", "Nausea" ],
			 "positiveEffects": ["Energetic", "Relaxed", "Happy", "Uplifted", "Euphoric", "Creative"],
			 "negativeEffects": ["Dry Mouth", "Dry Eyes", "Dizzy", "Paranoid", "Headache"],
			 "descriptionDetailed": "An indica dominant hybrid, this strain is known to have high THC levels and can be strong, but it's balanced enough to leave most users feeling heady and creative rather than sleepy. Because of this, it's often used to treat tension and anxiety.",
			 "descriptionAbbrev":  "An indica dominant hybrid, this strain is known to have high THC levels and can be strong.",
			 "tags": ["Hybrid", "707 Headband", "Depression", "Pain", "Stress"],
			 "imageUrl": "images/strains/707-headband_100x100.jpg"
			},
			{"strainId": 98,
			 "strainName": "Acapulco Gold", 
			 "strainType": "Sativa",
			 "components": [
			 	{ 
			 		"name": "THC9", 
			 		"value": 13.43
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 0.08
			 	},
			 	{ 
			 		"name": "CBN", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBG", 
			 		"value": 0.16
			 	},
			 	{ 
			 		"name": "CBC", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCV", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCA", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THC8", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pulegone", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Myrcene", 
			 		"value": 0.48
			 	},
			 	{ 
			 		"name": "Caryophyllene", 
			 		"value": 0.71
			 	},
			 	{ 
			 		"name": "Limonene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Linalool", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Eucalyptol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pinene", 
			 		"value": 0.87
			 	},
			 	{ 
			 		"name": "Terpineol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol-4", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cymene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Apigenin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Quercetin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cannflavin A", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Beta-sitosterol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBL", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Humulene", 
			 		"value": 0.00
				},
				{ 
			 		"name": "Terpinolene", 
			 		"value": 0.00
				} 	
		 	],
		 	"taste": ["Earthy", "Pungent", "Woody"],
		 	 "conditions": ["Anorexia", "Depression", "Appetite Loss", "Stress", "Pain", "Headache", "Fatigue", "Arthritis"],
			 "positiveEffects": ["Happy", "Energetic", "Uplifted", "Euphoric", "Creative", "Relaxed"],
			 "negativeEffects": ["Dry Mouth", "Dry Eyes", "Paranoid", "Dizzy", "Headache", "Munchies"],
			 "descriptionDetailed": "One of the most well-known strains, Acapulco Gold has been likened to dinner at a five-star restaurant.  An aroma of burnt toffee lingers when the bud is broken up.",
			 "descriptionAbbrev":  "One of the most well-known strains, Acapulco Gold has been likened to dinner at a five-star restaurant.  An aroma of burnt toffee lingers when the bud is broken up.",
			 "tags": ["Sativa", "Acapulco Gold", "Depression", "Pain", "Stress"],
			 "imageUrl": "images/strains/acapulco-gold_100x100.jpg"
			},
			{"strainId": 99,
			 "strainName": "Alien OG", 
			 "strainType": "Hybrid",
			 "components": [
			 	{ 
			 		"name": "THC9", 
			 		"value": 14.55
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 0.20
			 	},
			 	{ 
			 		"name": "CBN", 
			 		"value": 0.48
			 	},
			 	{ 
			 		"name": "CBG", 
			 		"value": 0.11
			 	},
			 	{ 
			 		"name": "CBC", 
			 		"value": 0.20
			 	},
			 	{ 
			 		"name": "THCV", 
			 		"value": 0.20
			 	},
			 	{ 
			 		"name": "THCA", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "THC8", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Pulegone", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Myrcene", 
			 		"value": 0.30
			 	},
			 	{ 
			 		"name": "Caryophyllene", 
			 		"value": 0.08
			 	},
			 	{ 
			 		"name": "Limonene", 
			 		"value": 0.40
			 	},
			 	{ 
			 		"name": "Linalool", 
			 		"value": 0.09
			 	},
			 	{ 
			 		"name": "Eucalyptol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pinene", 
			 		"value": 0.09
			 	},
			 	{ 
			 		"name": "Terpineol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol-4", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cymene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Apigenin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Quercetin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cannflavin A", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Beta-sitosterol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBL", 
			 		"value": 0.20
			 	},
			 	{ 
			 		"name": "Humulene", 
			 		"value": 0.00
				},
				{ 
			 		"name": "Terpinolene", 
			 		"value": 0.00
				} 	
		 	], 
		 	"taste": ["Earthy", "Sweet", "Pine"],
		 	 "conditions": ["Anxiety", "Depression", "Insomnia", "Migraines", "Pain", "Stress"],
			 "positiveEffects": ["Relaxed", "Happy", "Euphoric", "Uplifted", "Creative"],
			 "negativeEffects": ["Dry Mouth", "Dry Eyes", "Paranoid", "Headache", "Dizzy"],
			 "descriptionDetailed": "Detailed description here. Detailed description here.Detailed description here.Detailed description here. Detailed description here.",
			 "descriptionAbbrev":  "Alien OG is a cross between Tahoe OG and Alien Kush.",
			 "tags": ["Sativa", "Alien OG", "OG", "Migraines", "Headache", "Pain", "Stress"],
			 "imageUrl": "images/strains/alien-og_100x100.jpg"
			},
			{"strainId": 100,
			 "strainName": "Alien Rock Candy", 
			 "strainType": "Hybrid",
			 "components": [
			 	{ 
			 		"name": "THC9", 
			 		"value": 9.91
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 0.16
			 	},
			 	{ 
			 		"name": "CBN", 
			 		"value": 0.06
			 	},
			 	{ 
			 		"name": "CBG", 
			 		"value": 1.58
			 	},
			 	{ 
			 		"name": "CBC", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCV", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCA", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THC8", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pulegone", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Myrcene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Caryophyllene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Limonene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Linalool", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Eucalyptol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pinene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol-4", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cymene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Apigenin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Quercetin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cannflavin A", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Beta-sitosterol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBL", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Humulene", 
			 		"value": 0.00
				},
				{ 
			 		"name": "Terpinolene", 
			 		"value": 0.00
				} 	
		 	],
		 	"taste": ["Sweet", "Earthy", "Citrus"],
		 	 "conditions": ["ADD/ADHD", "Anxiety", "Depression", "Insomnia", "Pain", "Stress"],
			 "positiveEffects": ["Happy", "Relaxed", "Euphoric", "Uplifted", "Energetic"],
			 "negativeEffects": ["Dry Mouth", "Paranoid"],
			 "descriptionDetailed": "Alien Rock Candy by Alien Genetics is an indica-dominant hybrid with an aroma as sweet as the name suggests. This Sour Dubble and Tahoe Alien cross captures a fruity, citrus aroma that carries through until the exhale.",
			 "descriptionAbbrev":  "Full relaxation of the mind and body make this strain ideal for the end of an active or stressful day, with a heaviness that segueways nicely into sleep.",
			 "tags": ["Sativa", "Alien Rock Candy", "Depression" ,"Stress"],
			 "imageUrl": "images/strains/alien-rock-candy_100x100.jpg"
			},
			{"strainId": 101,
			 "strainName": "Amnesia Haze", 
			 "strainType": "Sativa",
			 "components": [
			 	{ 
			 		"name": "THC9", 
			 		"value": 20.15
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 0.05
			 	},
			 	{ 
			 		"name": "CBN", 
			 		"value": 0.07
			 	},
			 	{ 
			 		"name": "CBG", 
			 		"value": 0.61
			 	},
			 	{ 
			 		"name": "CBC", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCV", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCA", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THC8", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pulegone", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Myrcene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Caryophyllene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Limonene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Linalool", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Eucalyptol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pinene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol-4", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cymene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Apigenin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Quercetin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cannflavin A", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Beta-sitosterol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBL", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Humulene", 
			 		"value": 0.00
				},
				{ 
			 		"name": "Terpinolene", 
			 		"value": 0.00
				} 	
		 	],
		 	"taste": ["Sweet", "Earthy", "Citrus"],
		 	 "conditions": ["Anorexia","Anxiety","Depression", "Insomnia", "Appetite Loss", "Pain", "Stress", "Fibromyalgia"],
			 "positiveEffects": ["Happy", "Euphoric", "Uplifted", "Relaxed", "Creative", "Hungry"],
			 "negativeEffects": ["Dry Mouth", "Dry Eyes", "Paranoid", "Dizzy", "Anxious", "Munchies"],
			 "descriptionDetailed": "With earthy flavors of lemons and citrus, Amnesia Haze is a perfect strain to start your day with a smile.",
			 "descriptionAbbrev":  "The uplifting, energetic buzz is one you won't soon forget.",
			 "tags": ["Sativa", "Amnesia Haze", "Depression", "Stress"],
			 "imageUrl": "images/strains/amnesia-haze_100x100.jpg"
			},
			{"strainId": 102,
			 "strainName": "ATF", 
			 "strainType": "Sativa",
			 "components": [
			 	{ 
			 		"name": "THC9", 
			 		"value": 14.76
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 0.17
			 	},
			 	{ 
			 		"name": "CBN", 
			 		"value": 0.75
			 	},
			 	{ 
			 		"name": "CBG", 
			 		"value": 0.12
			 	},
			 	{ 
			 		"name": "CBC", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCV", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCA", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THC8", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pulegone", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Myrcene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Caryophyllene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Limonene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Linalool", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Eucalyptol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pinene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol-4", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cymene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Apigenin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Quercetin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cannflavin A", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Beta-sitosterol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBL", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Humulene", 
			 		"value": 0.00
				},
				{ 
			 		"name": "Terpinolene", 
			 		"value": 0.00
				} 	
		 	],
		 	"taste": ["Earthy", "Sweet", "Pungent"],
		 	 "conditions": ["Stress", "Depression", "Pain", "Fatigue","Insomnia", "Migraines",  ],
			 "positiveEffects": ["Happy", "Uplifted", "Energetic", "Euphoric", "Relaxed"],
			 "negativeEffects": ["Dry Mouth", "Dry Eyes", "Dizzy", "Paranoid", "Headache"],
			 "descriptionDetailed": "A strong sativa that will have you feeling the effects soon after exhale.",
			 "descriptionAbbrev":  "A strong sativa that will have you feeling the effects soon after exhale.",
			 "tags": ["Sativa", "ATF", "Depression", "Pain", "Stress"],
			 "imageUrl": "images/strains/alaskan-thunder-fuck_100x100.jpg"
			},
			{"strainId": 103,
			 "strainName": "Bay Cookies", 
			 "strainType": "Hybrid",
			 "components": [
			 	{ 
			 		"name": "THC9", 
			 		"value": 21.05
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 0.39
			 	},
			 	{ 
			 		"name": "CBN", 
			 		"value": 0.06
			 	},
			 	{ 
			 		"name": "CBG", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBC", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCV", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCA", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THC8", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pulegone", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Myrcene", 
			 		"value": 0.07
			 	},
			 	{ 
			 		"name": "Caryophyllene", 
			 		"value": 2.45
			 	},
			 	{ 
			 		"name": "Limonene", 
			 		"value": 0.62
			 	},
			 	{ 
			 		"name": "Linalool", 
			 		"value": 0.49
			 	},
			 	{ 
			 		"name": "Eucalyptol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pinene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol-4", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cymene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Apigenin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Quercetin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cannflavin A", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Beta-sitosterol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBL", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Humulene", 
			 		"value": 0.00
				},
				{ 
			 		"name": "Terpinolene", 
			 		"value": 0.00
				} 	
		 	],
		 	"taste": ["Sweet", "Earthy", "Pungent"],
		 	 "conditions": ["Anorexia", "Anxiety", "Depression", "Nausea", "PTSD","OCD", "Pain", "Stress"],
			 "positiveEffects": ["Relaxed", "Anxiety", "Uplifted"],
			 "negativeEffects": ["Dry Mouth", "Dry Eyes", "Paranoid", "Dizzy", "Headache"],
			 "descriptionDetailed": "The delicate terpene profile created a sweet-tasting vapor that may remind you of pink lemonade.",
			 "descriptionAbbrev":  "The delicate terpene profile created a sweet-tasting vapor that may remind you of pink lemonade.",
			 "tags": ["Sativa", "Bay Cookies", "Depression", "Nausea", "Pain", "Stress"],
			 "imageUrl": "images/strains/bay_cookies.jpg"
			},
			{"strainId": 104,
			 "strainName": "Berry Queen", 
			 "strainType": "Hybrid",
			 "components": [
			 	{ 
			 		"name": "THC9", 
			 		"value": 22.90
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 0.46
			 	},
			 	{ 
			 		"name": "CBN", 
			 		"value": 0.07
			 	},
			 	{ 
			 		"name": "CBG", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBC", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCV", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCA", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THC8", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pulegone", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Myrcene", 
			 		"value": 0.56
			 	},
			 	{ 
			 		"name": "Caryophyllene", 
			 		"value": 1.90
			 	},
			 	{ 
			 		"name": "Limonene", 
			 		"value": 3.86
			 	},
			 	{ 
			 		"name": "Linalool", 
			 		"value": 0.16
			 	},
			 	{ 
			 		"name": "Eucalyptol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pinene", 
			 		"value": 0.06
			 	},
			 	{ 
			 		"name": "Terpineol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol-4", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cymene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Apigenin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Quercetin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cannflavin A", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Beta-sitosterol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBL", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Humulene", 
			 		"value": 0.00
				},
				{ 
			 		"name": "Terpinolene", 
			 		"value": 0.00
				} 	
		 	],
		 	"taste": ["Berry", "Sweet", "Blueberry"],
		 	 "conditions": ["Stress", "Pain", "Nausea", "Depression", "Anxiety", "Anorexia", "Insomnia",],
			 "positiveEffects": ["Happy", "Energetic", "Relaxed", "Hungry", "Pain relief"],
			 "negativeEffects": ["Munchies", "Less Social"],
			 "descriptionDetailed": "This strain is perfect for inspiring an upbeat mood and may lead to conversation and creative pursuits.",
			 "descriptionAbbrev":  "This strain is perfect for inspiring an upbeat mood and may lead to conversation and creative pursuits.",
			 "tags": [""],
			 "imageUrl": "images/strains/berryQueen.jpg"
			},
			{"strainId": 105,
			 "strainName": "Berry White", 
			 "strainType": "Hybrid",
			 "components": [
			 	{ 
			 		"name": "THC9", 
			 		"value": 23.10
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 0.11
			 	},
			 	{ 
			 		"name": "CBN", 
			 		"value": 0.04
			 	},
			 	{ 
			 		"name": "CBG", 
			 		"value": 1.10
			 	},
			 	{ 
			 		"name": "CBC", 
			 		"value": 0.20
			 	},
			 	{ 
			 		"name": "THCV", 
			 		"value": 0.14
			 	},
			 	{ 
			 		"name": "THCA", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THC8", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pulegone", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Myrcene", 
			 		"value": 0.40
			 	},
			 	{ 
			 		"name": "Caryophyllene", 
			 		"value": 0.11
			 	},
			 	{ 
			 		"name": "Limonene", 
			 		"value": 0.30
			 	},
			 	{ 
			 		"name": "Linalool", 
			 		"value": 0.08
			 	},
			 	{ 
			 		"name": "Eucalyptol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pinene", 
			 		"value": 0.20
			 	},
			 	{ 
			 		"name": "Terpineol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol-4", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cymene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Apigenin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Quercetin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cannflavin A", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Beta-sitosterol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBL", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Humulene", 
			 		"value": 0.00
				},
				{ 
			 		"name": "Terpinolene", 
			 		"value": 0.00
				} 	
		 	], 
		 	"taste": ["Berry", "Sweet", "Blueberry"],
		 	 "conditions": ["Depression", "Pain", "Stress"],
			 "positiveEffects": ["Relaxed", "Happy", "Euphoric", "Uplifted", "Creative", "Conversational"],
			 "negativeEffects": ["Dry Mouth", "Dry Eyes", "Paranoid", "Dizzy", "Anxious"],
			 "descriptionDetailed": "This strain is perfect for inspiring an upbeat mood and may lead to conversation and creative pursuits.",
			 "descriptionAbbrev":  "Berry is famous in its own right for its even, balanced effects that offer relaxation from stress and anxiety along with a sense of euphoria.",
			 "tags": ["Hybrid", "Berry White", "Berry", "Depression", "Pain", "Stress"],
			 "imageUrl": "images/strains/berry-white_100x100.jpg"
			},
			{"strainId": 106,
			 "strainName": "UW", 
			 "strainType": "Indica",
			 "components": [
			 	{ 
			 		"name": "THC9", 
			 		"value": 19.69
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 0.17
			 	},
			 	{ 
			 		"name": "CBN", 
			 		"value": 0.21
			 	},
			 	{ 
			 		"name": "CBG", 
			 		"value": 0.39
			 	},
			 	{ 
			 		"name": "CBC", 
			 		"value": 0.02
			 	},
			 	{ 
			 		"name": "THCV", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCA", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THC8", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pulegone", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Myrcene", 
			 		"value": 0.06
			 	},
			 	{ 
			 		"name": "Caryophyllene", 
			 		"value": 0.65
			 	},
			 	{ 
			 		"name": "Limonene", 
			 		"value": 1.89
			 	},
			 	{ 
			 		"name": "Linalool", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Eucalyptol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pinene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol-4", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cymene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Apigenin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Quercetin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cannflavin A", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Beta-sitosterol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBL", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Humulene", 
			 		"value": 0.74
				},
				{ 
			 		"name": "Terpinolene", 
			 		"value": 0.00
				} 	
		 	],
		 	"taste": ["Earthy", "Sweet", "Woody"],
		 	 "conditions": ["Pain", "Fibromyalgia", "Stress", "Insomnia", "Inflammation", "Muscle Spasms"],
			 "positiveEffects": ["Relaxed", "Drowsiness", "Happy", "Euphoric", "Creative"],
			 "negativeEffects": ["Dry Mouth", "Dry Eyes", "Headache", "Anxious", "Paranoid"],
			 "descriptionDetailed": "Almost entirely indica, this strain's powerful high is sedative and popular for pain relief and insomnia.",
			 "descriptionAbbrev":  "Almost entirely indica, this strain's powerful high is sedative and popular for pain relief and insomnia.",
			 "tags": [""],
			 "imageUrl": "images/strains/uw_100x100.jpg"
			},
			{"strainId": 107,
			 "strainName": "Blue Dream", 
			 "strainType": "Hybrid",
			 "components": [
			 	{ 
			 		"name": "THC9", 
			 		"value": 15.82
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 0.16
			 	},
			 	{ 
			 		"name": "CBN", 
			 		"value": 0.57
			 	},
			 	{ 
			 		"name": "CBG", 
			 		"value": 0.27
			 	},
			 	{ 
			 		"name": "CBC", 
			 		"value": 0.11
			 	},
			 	{ 
			 		"name": "THCV", 
			 		"value": 0.09
			 	},
			 	{ 
			 		"name": "THCA", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THC8", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pulegone", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Myrcene", 
			 		"value": 0.70
			 	},
			 	{ 
			 		"name": "Caryophyllene", 
			 		"value": 0.11
			 	},
			 	{ 
			 		"name": "Limonene", 
			 		"value": 0.13
			 	},
			 	{ 
			 		"name": "Linalool", 
			 		"value": 0.06
			 	},
			 	{ 
			 		"name": "Eucalyptol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pinene", 
			 		"value": 0.30
			 	},
			 	{ 
			 		"name": "Terpineol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol-4", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cymene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Apigenin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Quercetin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cannflavin A", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Beta-sitosterol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBL", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Humulene", 
			 		"value": 0.00
				},
				{ 
			 		"name": "Terpinolene", 
			 		"value": 0.00
				} 	
		 	], 
		 	"taste": ["Sweet", "Blueberry", "Berry"],
		 	 "conditions": ["Anxiety","Depression", "Insomnia", "Migraines", "Headache", "Nausea", "Pain", "Stress"],
			 "positiveEffects": ["Happy", "Relaxed", "Euphoric", "Energetic",  "Creative"],
			 "negativeEffects": ["Dry Mouth", "Dry Eyes", "Paranoid", "Dizzy", "Headache"],
			 "descriptionDetailed": "With a sweet berry aroma redolent of its Blueberry parent, Blue Dream delivers swift symptom relief without heavy sedative effects. This makes Blue Dream a popular daytime medicine for patients treating pain, depression, nausea, and other ailments requiring a high THC strain. ",
			 "descriptionAbbrev":  "Blue Dream balances full-body relaxation with gentle cerebral invigoration.",
			 "tags": ["Hybrid", "Blue Dream", "Migraines", "Headache", "Nausea", "Stress"],
			 "imageUrl": "images/strains/blue-dream_100x100.jpg"
			},
			{"strainId": 108,
			 "strainName": "Blue Moonshine", 
			 "strainType": "Indica",
			 "components": [
			 	{ 
			 		"name": "THC9", 
			 		"value": 28.10
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 0.42
			 	},
			 	{ 
			 		"name": "CBN", 
			 		"value": 0.03
			 	},
			 	{ 
			 		"name": "CBG", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBC", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCV", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCA", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THC8", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pulegone", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Myrcene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Caryophyllene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Limonene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Linalool", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Eucalyptol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pinene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol-4", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cymene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Apigenin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Quercetin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cannflavin A", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Beta-sitosterol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBL", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Humulene", 
			 		"value": 0.00
				},
				{ 
			 		"name": "Terpinolene", 
			 		"value": 0.00
				} 	
		 	], 
		 	"taste": ["Earthy", "Blueberry", "Berry"],
		 	 "conditions": ["Depression", "Stress", "Pain", "Muscle Spasms", "Insomnia"],
			 "positiveEffects": ["Relaxed", "Euphoric", "Happy", "Giggly", "Focused", "Sexual"],
			 "negativeEffects": ["Dry Mouth", "Dry Eyes", "Headache", "Dizzy", "Paranoid"],
			 "descriptionDetailed": "While growing and after it's harvested, these plants have a sharp and fruity smell that brings to mind fermentation.",
			 "descriptionAbbrev":  "Blue Moonshine is a Potent blueberry indica strain that provides a nice body high.",
			 "tags": ["Indica", "Blue Moonshine", "Depression", "Stress"],
			 "imageUrl": "images/strains/blue-moonshine_100x100.jpg"
			},
			{"strainId": 109,
			 "strainName": "Blueberry Trainwreck", 
			 "strainType": "Hybrid",
			 "components": [
			 	{ 
			 		"name": "THC9", 
			 		"value": 25.75
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 3.86
			 	},
			 	{ 
			 		"name": "CBN", 
			 		"value": 1.13
			 	},
			 	{ 
			 		"name": "CBG", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBC", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCV", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCA", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THC8", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pulegone", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Myrcene", 
			 		"value": 0.02
			 	},
			 	{ 
			 		"name": "Caryophyllene", 
			 		"value": 0.29
			 	},
			 	{ 
			 		"name": "Limonene", 
			 		"value": 0.11
			 	},
			 	{ 
			 		"name": "Linalool", 
			 		"value": 0.19
			 	},
			 	{ 
			 		"name": "Eucalyptol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pinene", 
			 		"value": 0.50
			 	},
			 	{ 
			 		"name": "Terpineol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol-4", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cymene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Apigenin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Quercetin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cannflavin A", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Beta-sitosterol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBL", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Humulene", 
			 		"value": 0.00
				},
				{ 
			 		"name": "Terpinolene", 
			 		"value": 0.00
				} 	
		 	], 
		 	"taste": ["Blueberry", "Pungent", "Sweet", "Skunk"],
		 	 "conditions": ["ADD/ADHD", "Anxiety", "Depression", "Pain", "Stress", "Insomnia", "Appetite Loss"],
			 "positiveEffects": ["Happy", "Energetic", "Relaxed", "Conversational", "Creative", "Sexual"],
			 "negativeEffects": ["Couch Lock", "Drowsiness"],
			 "descriptionDetailed": "This peculiar cannabis can be an exceptionally exciting fast-paced roller coaster, or a demonic heart-throbbing anxiety hell.",
			 "descriptionAbbrev":  "Only takes a couple hits to get blazed for several hours.",
			 "tags": ["Hybrid", "Blueberry Trainwreck", "Trainwreck", "Depression", "Stress"],
			 "imageUrl": "images/strains/blueberry_100x100.jpg"
			},
			{"strainId": 110,
			 "strainName": "Cannatonic #4", 
			 "strainType": "Hybrid",
			 "components": [
			 	{ 
			 		"name": "THC9", 
			 		"value": 6.24
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 8.11
			 	},
			 	{ 
			 		"name": "CBN", 
			 		"value": 0.07
			 	},
			 	{ 
			 		"name": "CBG", 
			 		"value": 0.18
			 	},
			 	{ 
			 		"name": "CBC", 
			 		"value": 0.02
			 	},
			 	{ 
			 		"name": "THCV", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCA", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THC8", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pulegone", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Myrcene", 
			 		"value": 0.19
			 	},
			 	{ 
			 		"name": "Caryophyllene", 
			 		"value": 0.15
			 	},
			 	{ 
			 		"name": "Limonene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Linalool", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Eucalyptol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pinene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol-4", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cymene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Apigenin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Quercetin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cannflavin A", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Beta-sitosterol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBL", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Humulene", 
			 		"value": 0.00
				},
				{ 
			 		"name": "Terpinolene", 
			 		"value": 0.00
				} 	
		 	],
		 	"taste": ["Earthy", "Pungent", "Pine", "Sweet"],
		 	 "conditions": ["Depression", "Pain", "Stress", "Inflammation", "Muscle Spasms"],
			 "positiveEffects": ["Pain relief", "Relaxed", "Happy", "Focused", "Uplifted", "Euphoric"],
			 "negativeEffects": ["Dry Mouth", "Dry Eyes", "Anxious", "Dizzy", "Headache"],
			 "descriptionDetailed": "This strain with the high CBD level is a purely medical strain. With almost no head high it's perfect for people with stress, anxiety, pain without couch lock. The pain relief is great.",
			 "descriptionAbbrev":  "This strain with the high CBD level is a purely medical strain. With almost no head high it's perfect for people with stress, anxiety, pain without couch lock. The pain relief is great.",
			 "tags": [""],
			 "imageUrl": "images/strains/cannatonic_100x100.jpg"
			},
			{"strainId": 111,
			 "strainName": "Candy Jack", 
			 "strainType": "Sativa",
			 "components": [
			 	{ 
			 		"name": "THC9", 
			 		"value": 23.40
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 0.25
			 	},
			 	{ 
			 		"name": "CBN", 
			 		"value": 0.07
			 	},
			 	{ 
			 		"name": "CBG", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBC", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCV", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCA", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THC8", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pulegone", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Myrcene", 
			 		"value": 0.19
			 	},
			 	{ 
			 		"name": "Caryophyllene", 
			 		"value": 1.08
			 	},
			 	{ 
			 		"name": "Limonene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Linalool", 
			 		"value": 0.20
			 	},
			 	{ 
			 		"name": "Eucalyptol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pinene", 
			 		"value": 0.08
			 	},
			 	{ 
			 		"name": "Terpineol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol-4", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cymene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Apigenin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Quercetin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cannflavin A", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Beta-sitosterol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBL", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Humulene", 
			 		"value": 0.00
				},
				{ 
			 		"name": "Terpinolene", 
			 		"value": 0.00
				} 	
		 	], 
		 	"taste": ["Sweet", "Pine", "Citrus"],
		 	 "conditions": ["Anorexia", "Anxiety", "Depression", "Appetite Loss", "Fatigue", "Nausea", "Pain", "Stress"],
			 "positiveEffects": ["Happy", "Energetic", "Relaxed", "Creative", "Euphoric"],
			 "negativeEffects": ["Dry Mouth", "Dry Eyes", "Paranoid", "Headache", "Dizzy", "Munchies"],
			 "descriptionDetailed": "With a few Cannabis Cup wins already under its belt, Candy Jack's potency, flavor, and effects have won this sativa a sterling reputation in the cannabis world.",
			 "descriptionAbbrev":  "Patients typically appreciate Candy Jack's ability to counter stress, depression, and appetite loss.",
			 "tags": ["Sweet", "Pine", "Citrus"],
			 "imageUrl": "images/strains/candy-jack_100x100.jpg"
			},
			{"strainId": 112,
			 "strainName": "CandyLand", 
			 "strainType": "Sativa",
			 "components": [
			 	{ 
			 		"name": "THC9", 
			 		"value": 27.30
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 0.44
			 	},
			 	{ 
			 		"name": "CBN", 
			 		"value": 0.08
			 	},
			 	{ 
			 		"name": "CBG", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBC", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCV", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCA", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THC8", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pulegone", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Myrcene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Caryophyllene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Limonene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Linalool", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Eucalyptol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pinene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol-4", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cymene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Apigenin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Quercetin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cannflavin A", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Beta-sitosterol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBL", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Humulene", 
			 		"value": 0.00
				},
				{ 
			 		"name": "Terpinolene", 
			 		"value": 0.00
				} 	
		 	],
		 	"taste": ["Sweet", "Earthy", "Spicy", "Herbal"],
		 	 "conditions": ["Anxiety", "Depression", "Migraines", "Fatigue","Headache", "Stress"],
			 "positiveEffects": ["Happy", "Uplifted", "Energetic", "Conversational", "Creative", "Relaxed"],
			 "negativeEffects": ["Dry Mouth", "Dry Eyes", "Dizzy", "Anxious", "Paranoid"],
			 "descriptionDetailed": "Golden hairs weave through Candyland's thick coat of sugar-like trichomes and highlight the compact, camouflage-colored buds. This strain grows well indoors and out, and patients turn to Candyland to relieve pain, muscle tension, and sour moods.",
			 "descriptionAbbrev":  "Strong sativa genetics give Candyland uplifting and stimulating effects, making it a perfect strain for social gatherings or creative passtimes.",
			 "tags": ["Sativa", "CandyLand", "Migraines", "Headache", "Stress"],
			 "imageUrl": "images/strains/candyland_100x100.jpg"
			},
			{"strainId": 113,
			 "strainName": "Cannalope Haze", 
			 "strainType": "Sativa",
			 "components": [
			 	{ 
			 		"name": "THC9", 
			 		"value": 13.41
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 0.25
			 	},
			 	{ 
			 		"name": "CBN", 
			 		"value": 1.35
			 	},
			 	{ 
			 		"name": "CBG", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBC", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCV", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCA", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THC8", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pulegone", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Myrcene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Caryophyllene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Limonene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Linalool", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Eucalyptol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pinene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol-4", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cymene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Apigenin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Quercetin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cannflavin A", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Beta-sitosterol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBL", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Humulene", 
			 		"value": 0.00
				},
				{ 
			 		"name": "Terpinolene", 
			 		"value": 0.00
				} 	
		 	],
		 	"taste": ["Tropical", "Sweet", "Flowery"],
		 	 "conditions": ["Anxiety", "Depression", "Migraines", "Pain", "Stress"],
			 "positiveEffects": ["Happy", "Energetic", "Creative", "Uplifted", "Euphoric", "Relaxed"],
			 "negativeEffects": ["Dry Mouth", "Dry Eyes", "Dizzy", "Paranoid", "Headache", "Munchies"],
			 "descriptionDetailed": "Cannalope Haze is a sweet mix of tropical, melon, and floral flavors. The smooth taste and hefty resin production make it great for producing concentrates.",
			 "descriptionAbbrev":  "This strain is a great solution for fatigue and when struggling with appetite loss.",
			 "tags": ["Sativa", "Cannalope Haze", "Haze", "Migraines", "Headache", "Stress"],
			 "imageUrl": "images/strains/cannalope-haze_100x100.jpg"
			},
			{"strainId": 114,
			 "strainName": "Cataract Kush", 
			 "strainType": "Hybrid",
			 "components": [
			 	{ 
			 		"name": "THC9", 
			 		"value": 19.82
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 0.35
			 	},
			 	{ 
			 		"name": "CBN", 
			 		"value": 0.81
			 	},
			 	{ 
			 		"name": "CBG", 
			 		"value": 0.22
			 	},
			 	{ 
			 		"name": "CBC", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCV", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCA", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THC8", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pulegone", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Myrcene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Caryophyllene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Limonene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Linalool", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Eucalyptol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pinene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol-4", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cymene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Apigenin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Quercetin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cannflavin A", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Beta-sitosterol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBL", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Humulene", 
			 		"value": 0.00
				},
				{ 
			 		"name": "Terpinolene", 
			 		"value": 0.00
				} 	
		 	],
		 	"taste": ["Earthy", "Pungent", "Skunk"],
		 	 "conditions": ["Anorexia", "Anxiety", "Depression", "Insomnia", "Appetite Loss", "Pain", "Stress"],
			 "positiveEffects": ["Happy", "Relaxed", "Euphoric", "Drowsiness", "Hungry"],
			 "negativeEffects": ["Dry Mouth", "Dry Eyes", "Paranoid", "Anxious", "Dizzy", "Drowsiness", "Munchies"],
			 "descriptionDetailed": "Most describe Cataract as a creeper high that keeps on building long after you stop smoking! This strain has been years in the making and is NOT recommended for the light-weight smoker.",
			 "descriptionAbbrev":  "The effect is good for pain, eating and sleep disorders",
			 "tags": ["Pungent", "Skunk", "Earthy"],
			 "imageUrl": "images/strains/cataract-kush_100x100.jpg"
			},
			{"strainId": 115,
			 "strainName": "Chemdawg", 
			 "strainType": "Hybrid",
			 "components": [
			 	{ 
			 		"name": "THC9", 
			 		"value": 17.70
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 0.47
			 	},
			 	{ 
			 		"name": "CBN", 
			 		"value": 0.16
			 	},
			 	{ 
			 		"name": "CBG", 
			 		"value": 0.39
			 	},
			 	{ 
			 		"name": "CBC", 
			 		"value": 0.03
			 	},
			 	{ 
			 		"name": "THCV", 
			 		"value": 0.20
			 	},
			 	{ 
			 		"name": "THCA", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THC8", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pulegone", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Myrcene", 
			 		"value": 0.30
			 	},
			 	{ 
			 		"name": "Caryophyllene", 
			 		"value": 0.40
			 	},
			 	{ 
			 		"name": "Limonene", 
			 		"value": 0.14
			 	},
			 	{ 
			 		"name": "Linalool", 
			 		"value": 0.06
			 	},
			 	{ 
			 		"name": "Eucalyptol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pinene", 
			 		"value": 0.11
			 	},
			 	{ 
			 		"name": "Terpineol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol-4", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cymene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Apigenin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Quercetin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cannflavin A", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Beta-sitosterol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBL", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Humulene", 
			 		"value": 0.00
				},
				{ 
			 		"name": "Terpinolene", 
			 		"value": 0.00
				} 	
		 	],   
		 	"taste": ["Earthy", "Diesel", "Pungent"],
		 	 "conditions": ["Anorexia", "Anxiety", "Arthritis", "Depression", "Insomnia", "Nausea", "Appetite Loss", "Pain", "PMS", "Stress"],
			 "positiveEffects": ["Happy", "Relaxed", "Creative", "Euphoric", "Uplifted"],
			 "negativeEffects": ["Dry Mouth", "Dry Eyes", "Dizzy", "Paranoid", "Headache", "Munchies"],
			 "descriptionDetailed": "The original source of powerhouse strains like Sour Diesel and OG Kush, Chemdawg is known for its distinct, diesel-like aroma. Pungent and sharp, you'll be able to smell this hybrid from a mile away.",
			 "descriptionAbbrev":  "Expect to have a very cerebral experience, coupled with a strong heavy-bodied feeling.",
			 "tags": ["Hybrid", "Chemdawg", "Depression", "Stress"],
			 "imageUrl": "images/strains/chemdawg_100x100.jpg"
			},
			{"strainId": 116,
			 "strainName": "Cherry Pie", 
			 "strainType": "Hybrid",
			 "components": [
			 	{ 
			 		"name": "THC9", 
			 		"value": 26.90
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 0.11
			 	},
			 	{ 
			 		"name": "CBN", 
			 		"value": 0.03
			 	},
			 	{ 
			 		"name": "CBG", 
			 		"value": 0.60
			 	},
			 	{ 
			 		"name": "CBC", 
			 		"value": 0.14
			 	},
			 	{ 
			 		"name": "THCV", 
			 		"value": 0.09
			 	},
			 	{ 
			 		"name": "THCA", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THC8", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pulegone", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Myrcene", 
			 		"value": 0.60
			 	},
			 	{ 
			 		"name": "Caryophyllene", 
			 		"value": 0.20
			 	},
			 	{ 
			 		"name": "Limonene", 
			 		"value": 0.16
			 	},
			 	{ 
			 		"name": "Linalool", 
			 		"value": 0.15
			 	},
			 	{ 
			 		"name": "Eucalyptol", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Pinene", 
			 		"value": 0.08
			 	},
			 	{ 
			 		"name": "Terpineol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol-4", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cymene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Apigenin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Quercetin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cannflavin A", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Beta-sitosterol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBL", 
			 		"value": 0.07
			 	},
			 	{ 
			 		"name": "Humulene", 
			 		"value": 0.00
				},
				{ 
			 		"name": "Terpinolene", 
			 		"value": 0.00
				} 	
		 	],   
		 	"taste": ["Sweet", "Berry", "Earthy"],
		 	 "conditions": ["Depression", "Stress", "Pain", "Insomnia", "Headache"],
			 "positiveEffects": ["Relaxed", "Happy", "Euphoric", "Uplifted", "Creative"],
			 "negativeEffects": ["Dry Mouth", "Dry Eyes", "Dizzy", "Anxious", "Paranoid"],
			 "descriptionDetailed": "With buds that are dense and full of orange hairs and a touch of purple, this strain smells of sweet and sour cherry pie.",
			 "descriptionAbbrev":  "The effects have been known to come on in minutes and stick around for a couple hours. ",
			 "tags": ["Hybrid", "Cherry Pie", "Depression", "Stress"],
			 "imageUrl": "images/strains/cherry-pie_100x100.jpg"
			},
			{"strainId": 117,
			 "strainName": "Chocolate Thai", 
			 "strainType": "Sativa",
			 "components": [
			 	{ 
			 		"name": "THC9", 
			 		"value": 20.50
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 0.31
			 	},
			 	{ 
			 		"name": "CBN", 
			 		"value": 0.08
			 	},
			 	{ 
			 		"name": "CBG", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBC", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCV", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCA", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THC8", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pulegone", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Myrcene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Caryophyllene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Limonene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Linalool", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Eucalyptol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pinene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol-4", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cymene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Apigenin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Quercetin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cannflavin A", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Beta-sitosterol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBL", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Humulene", 
			 		"value": 0.00
				},
				{ 
			 		"name": "Terpinolene", 
			 		"value": 0.00
				} 	
		 	],
		 	"taste": ["Coffee", "Sweet", "Earthy"],
		 	 "conditions": ["Migraines", "Headache", "Stress"],
			 "positiveEffects": ["Uplifting"],
			 "negativeEffects": [""],
			 "descriptionDetailed": "The strain is renowned for potent cerebral effects, despite its spindly, skimpy appearance.",
			 "descriptionAbbrev":  "The strain is renowned for potent cerebral effects, despite its spindly, skimpy appearance.",
			 "tags": ["Sativa", "Chocolate Thai", "Migraines", "Headache", "Stress"],
			 "imageUrl": "images/strains/chocolate-thai_100x100.jpg"
			},
			{"strainId": 118,
			 "strainName": "Clear Lake", 
			 "strainType": "Hybrid",
			 "components": [
			 	{ 
			 		"name": "THC9", 
			 		"value": 22.10
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 0.23
			 	},
			 	{ 
			 		"name": "CBN", 
			 		"value": 0.05
			 	},
			 	{ 
			 		"name": "CBG", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBC", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCV", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCA", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THC8", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pulegone", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Myrcene", 
			 		"value": 0.22
			 	},
			 	{ 
			 		"name": "Caryophyllene", 
			 		"value": 4.12
			 	},
			 	{ 
			 		"name": "Limonene", 
			 		"value": 0.96
			 	},
			 	{ 
			 		"name": "Linalool", 
			 		"value": 1.23
			 	},
			 	{ 
			 		"name": "Eucalyptol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pinene", 
			 		"value": 0.06
			 	},
			 	{ 
			 		"name": "Terpineol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol-4", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cymene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Apigenin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Quercetin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cannflavin A", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Beta-sitosterol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBL", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Humulene", 
			 		"value": 0.00
				},
				{ 
			 		"name": "Terpinolene", 
			 		"value": 0.00
				} 	
		 	],
		 	"taste": [""],
		 	 "conditions": ["ADD/ADHD","Anxiety","Asthma","Insomnia", "Migraines", "Pain","Seizures", "Stress"],
			 "positiveEffects": ["Focused", "Relaxed", "Arousing"],
			 "negativeEffects": ["Couch Lock", "Drowsiness"],
			 "descriptionDetailed": "A mind-numbing physically impressive Clear Lake OG medicinal strain best for treating symptoms related to MS, arthritis, RTS, muscle spasms, insomnia, ADHD, pain, stress, and anxiety relief.",
			 "descriptionAbbrev":  "Super-duper powerful and way heavy, a completely flooring knock down result that will reduce movement and cease productive action or thought.",
			 "tags": ["Hybrid", "Clear Lake", "Migraines", "Headache", "Stress"],
			 "imageUrl": "images/strains/clear_lake.jpg"
			},
			{"strainId": 119,
			 "strainName": "Dubtech", 
			 "strainType": "Indica",
			 "components": [
			 	{ 
			 		"name": "THC9", 
			 		"value": 26.38
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 3.83
			 	},
			 	{ 
			 		"name": "CBN", 
			 		"value": 1.04
			 	},
			 	{ 
			 		"name": "CBG", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBC", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCV", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCA", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THC8", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pulegone", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Myrcene", 
			 		"value": 0.04
			 	},
			 	{ 
			 		"name": "Caryophyllene", 
			 		"value": 0.59
			 	},
			 	{ 
			 		"name": "Limonene", 
			 		"value": 0.66
			 	},
			 	{ 
			 		"name": "Linalool", 
			 		"value": 1.77
			 	},
			 	{ 
			 		"name": "Eucalyptol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pinene", 
			 		"value": 0.07
			 	},
			 	{ 
			 		"name": "Terpineol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol-4", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cymene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Apigenin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Quercetin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cannflavin A", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Beta-sitosterol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBL", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Humulene", 
			 		"value": 0.00
				},
				{ 
			 		"name": "Terpinolene", 
			 		"value": 0.00
				} 	
		 	],
		 	"taste": ["Sweet", "Fruity", "Flowery"],
		 	 "conditions": ["Anorexia", "Anxiety", "Depression", "Insomnia", "Appetite Loss", "Migraines", "Muscle Spasms",  "Nausea", "Pain", "Seizures", "Stress"],
			 "positiveEffects": ["Creative", "Euphoric", "Relaxed", "Hungry", "Energetic", "Happy", "Focused", "Balanced", "Calmness"],
			 "negativeEffects": ["Munchies", "Drowsiness"],
			 "descriptionDetailed": "The pungent cotton candy flavor of the smoke yields an overwhelming cornucopia of fruit flavors, foreshadowed by the rich floral overtones of the tightly manicured buds. The effects are immediate and ever-present body high and a very peaceful, calming, centered emotional state, with creeping euphoria. Strong appetite stimulant. ",
			 "descriptionAbbrev":  "The pungent cotton candy flavor of the smoke yields an overwhelming cornucopia of fruit flavors, foreshadowed by the rich floral overtones of the tightly manicured buds. The effects are immediate adn ever-present body high and a very peaceful, calming, centered emotional state, with creeping euphoria. Strong appetite stimulant.",
			 "tags": ["Indica", "Dubtech", "Migraines", "Headache", "Nausea"],
			 "imageUrl": "images/strains/dubtech.jpg"
			},
			{"strainId": 120,
			 "strainName": "Ghost OG", 
			 "strainType": "Indica",
			 "components": [
			 	{ 
			 		"name": "THC9", 
			 		"value": 22.00
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 0.33
			 	},
			 	{ 
			 		"name": "CBN", 
			 		"value": 0.14
			 	},
			 	{ 
			 		"name": "CBG", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBC", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCV", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCA", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THC8", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pulegone", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Myrcene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Caryophyllene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Limonene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Linalool", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Eucalyptol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pinene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol-4", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cymene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Apigenin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Quercetin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cannflavin A", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Beta-sitosterol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBL", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Humulene", 
			 		"value": 0.00
				},
				{ 
			 		"name": "Terpinolene", 
			 		"value": 0.00
				} 	
		 	],
		 	"taste": ["Citrus", "Earthy", "Pine"],
		 	 "conditions": ["Migraines", "Headache", "Pain", "Insomnia", "Depression", "Anxiety"],
			 "positiveEffects": ["Relaxed"],
			 "negativeEffects": [""],
			 "descriptionDetailed": "Often described as simultaneously potent and non-intrusive, Ghost OG has won itself Cup awards and renown among consumers.",
			 "descriptionAbbrev":  "Often described as simultaneously potent and non-intrusive, Ghost OG has won itself Cup awards and renown among consumers.",
			 "tags": ["Indica", "Ghost OG", "OG", "Migraines", "Headache"],
			 "imageUrl": "images/strains/ghost-og_100x100.jpg"
			},
			{"strainId": 121,
			 "strainName": "Grape Cookies", 
			 "strainType": "Indica",
			 "components": [
			 	{ 
			 		"name": "THC9", 
			 		"value": 17.10
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 0.21
			 	},
			 	{ 
			 		"name": "CBN", 
			 		"value": 0.09
			 	},
			 	{ 
			 		"name": "CBG", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBC", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCV", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCA", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THC8", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pulegone", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Myrcene", 
			 		"value": 0.25
			 	},
			 	{ 
			 		"name": "Caryophyllene", 
			 		"value": 0.82
			 	},
			 	{ 
			 		"name": "Limonene", 
			 		"value": 1.12
			 	},
			 	{ 
			 		"name": "Linalool", 
			 		"value": 0.81
			 	},
			 	{ 
			 		"name": "Eucalyptol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pinene", 
			 		"value": 0.05
			 	},
			 	{ 
			 		"name": "Terpineol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol-4", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cymene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Apigenin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Quercetin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cannflavin A", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Beta-sitosterol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBL", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Humulene", 
			 		"value": 0.00
				},
				{ 
			 		"name": "Terpinolene", 
			 		"value": 0.00
				} 	
		 	], 
		 	"taste": ["Grape", "Sweet", "Fruity"],
		 	 "conditions": ["ADD/ADHD", "Anorexia", "Anxiety", "Depression","Fibromyalgia", "Glaucoma", "Insomnia", "Appetite Loss","Migraines", "Nausea", "Pain", "Seizures", "PMS", "Stress"],
			 "positiveEffects": ["Happy", "Focused", "Relaxed"],
			 "negativeEffects": ["Munchies"],
			 "descriptionDetailed": "Fierce rugged lines shape my variety of buds into chunky SUPER dense samples of absolutely ideal marijuana.  99.9% of the nug is usable, smokeable, incredible material, save its minty spinal cord.",
			 "descriptionAbbrev":  "Very powerful and effective medication. Top shelf anywhere",
			 "tags": ["Indica", "Grape Cookies", "Cookies", "Migraines", "Headache", "Nausea", "Glaucoma", "PMS"],
			 "imageUrl": "images/strains/grape_Cookies.jpg"
			},
			{"strainId": 122,
			 "strainName": "Grape Kool Aid", 
			 "strainType": "Indica",
			 "components": [
			 	{ 
			 		"name": "THC9", 
			 		"value": 19.58
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 0.37
			 	},
			 	{ 
			 		"name": "CBN", 
			 		"value": 0.10
			 	},
			 	{ 
			 		"name": "CBG", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBC", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCV", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCA", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THC8", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pulegone", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Myrcene", 
			 		"value": 0.71
			 	},
			 	{ 
			 		"name": "Caryophyllene", 
			 		"value": 1.93
			 	},
			 	{ 
			 		"name": "Limonene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Linalool", 
			 		"value": 0.03
			 	},
			 	{ 
			 		"name": "Eucalyptol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pinene", 
			 		"value": 0.23
			 	},
			 	{ 
			 		"name": "Terpineol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol-4", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cymene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Apigenin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Quercetin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cannflavin A", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Beta-sitosterol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBL", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Humulene", 
			 		"value": 0.00
				},
				{ 
			 		"name": "Terpinolene", 
			 		"value": 0.00
				} 	
		 	],
		 	"taste": ["Grape", "Sour", "Dank"],
		 	 "conditions": ["ADD/ADHD", "Anorexia", "Anxiety","Arthritis","Depression","Insomnia","Migraines", "Pain", "Nausea", "Stress", "Hypertension"],
			 "positiveEffects": ["Happy", "Focused", "Relaxed", "Creative"],
			 "negativeEffects": ["Couch Lock"],
			 "descriptionDetailed": "Grape Kool Aid is a cross between Bubba Kush and Super Lemon Haze.",
			 "descriptionAbbrev":  "This strain is indica dominant giving it relaxing properties but without that couch-locked feeling.",
			 "tags": ["Grape"],
			 "imageUrl": "images/strains/Purple Wreck-578x433.jpg"
			},
			{"strainId": 123,
			 "strainName": "Jupiter Kush", 
			 "strainType": "Indica",
			 "components": [
			 	{ 
			 		"name": "THC9", 
			 		"value": 19.79
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 0.24
			 	},
			 	{ 
			 		"name": "CBN", 
			 		"value": 0.03
			 	},
			 	{ 
			 		"name": "CBG", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBC", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCV", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCA", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THC8", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pulegone", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Myrcene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Caryophyllene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Limonene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Linalool", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Eucalyptol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pinene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol-4", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cymene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Apigenin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Quercetin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cannflavin A", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Beta-sitosterol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBL", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Humulene", 
			 		"value": 0.00
				},
				{ 
			 		"name": "Terpinolene", 
			 		"value": 0.00
				} 	
		 	],
		 	"taste": ["Pine", "Citrus", "Diesel"],
		 	 "conditions": ["Migraines", "Headache", "Epilepsy"],
			 "positiveEffects": ["Uplifted","Happy", "Relaxed", "Creative", "Euphoric"],
			 "negativeEffects": ["Dry Eyes", "Dry Mouth", "Dizzy", "Paranoid", "Munchies"],
			 "descriptionDetailed": "Detailed description here. Detailed description here.Detailed description here.Detailed description here. Detailed description here.",
			 "descriptionAbbrev":  "Short description here.",
			 "tags": ["Indica", "Jupiter Kush", "Kush", "Migraines", "Headache", "Epilepsy"],
			 "imageUrl": "images/strains/jupiter-kush_100x100.jpg"
			},
			{"strainId": 124,
			 "strainName": "L.A. Confidential", 
			 "strainType": "Indica",
			 "components": [
			 	{ 
			 		"name": "THC9", 
			 		"value": 19.00
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 0.08
			 	},
			 	{ 
			 		"name": "CBN", 
			 		"value": 0.07
			 	},
			 	{ 
			 		"name": "CBG", 
			 		"value": 0.30
			 	},
			 	{ 
			 		"name": "CBC", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCV", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCA", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THC8", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pulegone", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Myrcene", 
			 		"value": 0.08
			 	},
			 	{ 
			 		"name": "Caryophyllene", 
			 		"value": 0.04
			 	},
			 	{ 
			 		"name": "Limonene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Linalool", 
			 		"value": 0.05
			 	},
			 	{ 
			 		"name": "Eucalyptol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pinene", 
			 		"value": 0.04
			 	},
			 	{ 
			 		"name": "Terpineol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol-4", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cymene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Apigenin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Quercetin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cannflavin A", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Beta-sitosterol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBL", 
			 		"value": 0.05
			 	},
			 	{ 
			 		"name": "Humulene", 
			 		"value": 0.00
				},
				{ 
			 		"name": "Terpinolene", 
			 		"value": 0.00
				} 	
		 	],   
		 	"taste": ["Pine", "Earthy", "Pungent"],
		 	 "conditions": ["Anorexia", "Insomnia", "Migraines", "Pain", "Stress", "Depression", "Appetite Loss"],
			 "positiveEffects": ["Happy", "Relaxed", "Euphoric", "Drowsiness", "Uplifted"],
			 "negativeEffects": ["Dry Mouth", "Dry Eyes", "Dizzy", "Paranoid", "Anxious", "Munchies", "Drowsiness"],
			 "descriptionDetailed": "Detailed description here. Detailed description here.Detailed description here.Detailed description here. Detailed description here.",
			 "descriptionAbbrev":  "LA Confidential is a well-rounded strain that delivers a fast-approaching sensation that is both psychedelic and super calming on the mind and body",
			 "tags": ["Earthy", "Pine", "Pungent"],
			 "imageUrl": "images/strains/la-confidential_100x100.jpg"
			},
			{"strainId": 125,
			 "strainName": "Lemon Jack", 
			 "strainType": "Sativa",
			 "components": [
			 	{ 
			 		"name": "THC9", 
			 		"value": 22.10
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 0.33
			 	},
			 	{ 
			 		"name": "CBN", 
			 		"value": 0.06
			 	},
			 	{ 
			 		"name": "CBG", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBC", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCV", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCA", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THC8", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pulegone", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Myrcene", 
			 		"value": 0.09
			 	},
			 	{ 
			 		"name": "Caryophyllene", 
			 		"value": 1.83
			 	},
			 	{ 
			 		"name": "Limonene", 
			 		"value": 0.95
			 	},
			 	{ 
			 		"name": "Linalool", 
			 		"value": 0.98
			 	},
			 	{ 
			 		"name": "Eucalyptol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pinene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol-4", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cymene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Apigenin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Quercetin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cannflavin A", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Beta-sitosterol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBL", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Humulene", 
			 		"value": 0.00
				},
				{ 
			 		"name": "Terpinolene", 
			 		"value": 0.00
				} 	
		 	],
		 	"taste": ["Lemon", "Citrus", "Lime"],
		 	 "conditions": ["ADD/ADHD", "Depression", "Migraines", "Pain", "Stress", "Spasticity", "Fatigue"],
			 "positiveEffects": ["Uplifted", "Energetic", "Conversational", "Happy", "Focused", "Tingly"],
			 "negativeEffects": ["Dry Mouth", "Dry Eyes", "Dizzy", "Paranoid", "Anxious"],
			 "descriptionDetailed": "A potent strain featuring a distinct, chemical-like lemon smell, Lemon Jack has strong psychoactive effects. Focused and energizing, this strain's effects draw from both its Jack Herer and Lemon Kush heritage.",
			 "descriptionAbbrev":  "Patients who suffer from headaches and fatigue tend to find relief with this strain, though it may not be the best choice for those who suffer from anxiety.",
			 "tags": ["Sativa", "Lemon Jack", "Migraines", "Headache"],
			 "imageUrl": "images/strains/lemon-jack_100x100.jpg"
			},
			{"strainId": 126,
			 "strainName": "Lemon OG Kush", 
			 "strainType": "Hybrid",
			 "components": [
			 	{ 
			 		"name": "THC9", 
			 		"value": 25.10
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 0.45
			 	},
			 	{ 
			 		"name": "CBN", 
			 		"value": 0.06
			 	},
			 	{ 
			 		"name": "CBG", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBC", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCV", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCA", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THC8", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pulegone", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Myrcene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Caryophyllene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Limonene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Linalool", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Eucalyptol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pinene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol-4", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cymene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Apigenin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Quercetin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cannflavin A", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Beta-sitosterol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBL", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Humulene", 
			 		"value": 0.00
				},
				{ 
			 		"name": "Terpinolene", 
			 		"value": 0.00
				} 	
		 	],
		 	"taste": ["Lemon", "Citrus", "Sweet"],
		 	 "conditions": ["Migraines", "Headache", "Stress", "Pain", "Insomnia", "Depression"],
			 "positiveEffects": ["Relaxed", "Euphoric", "Happy", "Uplifted", "Hungry"],
			 "negativeEffects": ["Dry Mouth", "Dry Eyes", "Dizzy", "Paranoid", "Headache", "Munchies"],
			 "descriptionDetailed": "Detailed description here. Detailed description here.Detailed description here.Detailed description here. Detailed description here.",
			 "descriptionAbbrev":  "Short description here.",
			 "tags": ["Sativa", "Lemon OG Kush", "OG", "Kush", "Migraines", "Headache"],
			 "imageUrl": "images/strains/lemon-og-kush_100x100.jpg"
			},
			{"strainId": 127,
			 "strainName": "Mad Max", 
			 "strainType": "Hybrid",
			 "components": [
			 	{ 
			 		"name": "THC9", 
			 		"value": 18.80
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 0.31
			 	},
			 	{ 
			 		"name": "CBN", 
			 		"value": 0.02
			 	},
			 	{ 
			 		"name": "CBG", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBC", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCV", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCA", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THC8", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pulegone", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Myrcene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Caryophyllene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Limonene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Linalool", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Eucalyptol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pinene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol-4", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cymene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Apigenin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Quercetin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cannflavin A", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Beta-sitosterol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBL", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Humulene", 
			 		"value": 0.00
				},
				{ 
			 		"name": "Terpinolene", 
			 		"value": 0.00
				} 	
		 	],
		 	"taste": ["Pine", "Woody", "Earthy"],
		 	 "conditions": ["Migraines", "Headache", "ADD/ADHD"],
			 "positiveEffects": ["Relaxed"],
			 "negativeEffects": [""],
			 "descriptionDetailed": "Mad Max OG has an earthy pine scent with woody undertones, an aroma that has become the signature of OG Kush varieties and descendants.",
			 "descriptionAbbrev":  "Mad Max OG has an earthy pine scent with woody undertones, an aroma that has become the signature of OG Kush varieties and descendants.",
			 "tags": ["Hybrid", "Mad Max", "Migraines", "Headache"],
			 "imageUrl": "images/strains/MADMAX.jpg"
			},
			{"strainId": 128,
			 "strainName": "Mafia OG", 
			 "strainType": "Indica",
			 "components": [
			 	{ 
			 		"name": "THC9", 
			 		"value": 30.30
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 0.40
			 	},
			 	{ 
			 		"name": "CBN", 
			 		"value": 0.03
			 	},
			 	{ 
			 		"name": "CBG", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBC", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCV", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCA", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THC8", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pulegone", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Myrcene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Caryophyllene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Limonene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Linalool", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Eucalyptol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pinene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol-4", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cymene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Apigenin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Quercetin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cannflavin A", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Beta-sitosterol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBL", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Humulene", 
			 		"value": 0.00
				},
				{ 
			 		"name": "Terpinolene", 
			 		"value": 0.00
				} 	
		 	],
		 	"taste": ["Sweet", "Citrus", "Earthy", "Spicy", "Diesel"],
		 	 "conditions": ["Migraines", "Headache", "Nausea", "Glaucoma", "PMS"],
			 "positiveEffects": ["Energetic", "Euphoric"],
			 "negativeEffects": [""],
			 "descriptionDetailed": "Detailed description here. Detailed description here.Detailed description here.Detailed description here. Detailed description here.",
			 "descriptionAbbrev":  "Short description here.",
			 "tags": ["Indica", "Mafia OG", "Migraines", "Headache", "Nausea", "Glaucoma", "PMS"],
			 "imageUrl": "images/strains/mafia-og.jpg"
			},
			{"strainId": 129,
			 "strainName": "Mango Maui", 
			 "strainType": "Sativa",
			 "components": [
			 	{ 
			 		"name": "THC9", 
			 		"value": 18.01
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 0.30
			 	},
			 	{ 
			 		"name": "CBN", 
			 		"value": 0.02
			 	},
			 	{ 
			 		"name": "CBG", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBC", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCV", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCA", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THC8", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pulegone", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Myrcene", 
			 		"value": 0.09
			 	},
			 	{ 
			 		"name": "Caryophyllene", 
			 		"value": 0.74
			 	},
			 	{ 
			 		"name": "Limonene", 
			 		"value": 0.08
			 	},
			 	{ 
			 		"name": "Linalool", 
			 		"value": 0.03
			 	},
			 	{ 
			 		"name": "Eucalyptol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pinene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol-4", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cymene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Apigenin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Quercetin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cannflavin A", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Beta-sitosterol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBL", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Humulene", 
			 		"value": 0.00
				},
				{ 
			 		"name": "Terpinolene", 
			 		"value": 0.00
				} 	
		 	],   
		 	"taste": ["Diesel", "Lemon", "Pungent", "Mango", "Tropical"],
		 	 "conditions": ["Anxiety", "Depression", "Migraines", "Nausea", "Pain", "Seizures", "Stress"],
			 "positiveEffects": ["Happy", "Energetic", "Focused", "Relaxed", "Conversational"],
			 "negativeEffects": [""],
			 "descriptionDetailed": "A flavorful mix of sweet mango and tropical flavors that invigorate the senses and uplift your mood.",
			 "descriptionAbbrev":  "A flavorful mix of sweet mango and tropical flavors that invigorate the senses and uplift your mood.",
			 "tags": ["Sativa", "Mango Maui", "Migraines", "Headache", "Nausea"],
			 "imageUrl": "images/strains/mango-maui-578x385.jpg"
			},
			{"strainId": 130,
			 "strainName": "May Weather Kush", 
			 "strainType": "Indica",
			 "components": [
			 	{ 
			 		"name": "THC9", 
			 		"value": 29.50
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 0.33
			 	},
			 	{ 
			 		"name": "CBN", 
			 		"value": 0.03
			 	},
			 	{ 
			 		"name": "CBG", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBC", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCV", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCA", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THC8", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pulegone", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Myrcene", 
			 		"value": 0.47
			 	},
			 	{ 
			 		"name": "Caryophyllene", 
			 		"value": 1.30
			 	},
			 	{ 
			 		"name": "Limonene", 
			 		"value": 2.61
			 	},
			 	{ 
			 		"name": "Linalool", 
			 		"value": 2.10
			 	},
			 	{ 
			 		"name": "Eucalyptol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pinene", 
			 		"value": 0.08
			 	},
			 	{ 
			 		"name": "Terpineol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol-4", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cymene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Apigenin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Quercetin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cannflavin A", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Beta-sitosterol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBL", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Humulene", 
			 		"value": 0.00
				},
				{ 
			 		"name": "Terpinolene", 
			 		"value": 0.00
				} 	
		 	], 
		 	"taste": ["Diesel"],
		 	 "conditions": ["Anorexia", "Anxiety", "Arthritis", "Depression", "Fibromyalgia", "Insomnia", "Migraines", "Muscle Spasms", "Pain", "PMS", "Stress"],
			 "positiveEffects": ["Happy", "Focused", "Relaxed"],
			 "negativeEffects": [""],
			 "descriptionDetailed": "Detailed description here. Detailed description here.Detailed description here.Detailed description here. Detailed description here.",
			 "descriptionAbbrev":  "Short description here.",
			 "tags": ["Indica", "May Weather Kush", "Migraines", "Headache", "PMS"],
			 "imageUrl": "images/strains/May-weather-kush.jpg"
			},
			{"strainId": 131,
			 "strainName": "Phantom OG", 
			 "strainType": "Indica",
			 "components": [
			 	{ 
			 		"name": "THC9", 
			 		"value": 25.60
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 0.49
			 	},
			 	{ 
			 		"name": "CBN", 
			 		"value": 0.07
			 	},
			 	{ 
			 		"name": "CBG", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBC", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCV", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCA", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THC8", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pulegone", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Myrcene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Caryophyllene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Limonene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Linalool", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Eucalyptol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pinene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol-4", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cymene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Apigenin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Quercetin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cannflavin A", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Beta-sitosterol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBL", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Humulene", 
			 		"value": 0.00
				},
				{ 
			 		"name": "Terpinolene", 
			 		"value": 0.00
				} 	
		 	],
		 	"taste": ["Flowery", "Earthy", "Pine", "Menthol"],
		 	 "conditions": ["Migraines", "Headache", "Hypertension"],
			 "positiveEffects": ["Energetic", "Relaxed", "Euphoric", "Happy", "Focused"],
			 "negativeEffects": ["Drowsiness", "Munchies"],
			 "descriptionDetailed": "Detailed description here. Detailed description here.Detailed description here.Detailed description here. Detailed description here.",
			 "descriptionAbbrev":  "Phantom OG is an indica-dominant strain that begins with heightened energy and ends with a crash of full-body relaxation.",
			 "tags": ["Indica", "Phantom OG", "OG", "Migraines", "Headache", "Hypertension"],
			 "imageUrl": "images/strains/phantom-og_100x100.jpg"
			},
			{"strainId": 132,
			 "strainName": "Pineapple Hogsbreath", 
			 "strainType": "Hybrid",
			 "components": [
			 	{ 
			 		"name": "THC9", 
			 		"value": 19.80
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 0.32
			 	},
			 	{ 
			 		"name": "CBN", 
			 		"value": 0.04
			 	},
			 	{ 
			 		"name": "CBG", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBC", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCV", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCA", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THC8", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pulegone", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Myrcene", 
			 		"value": 0.21
			 	},
			 	{ 
			 		"name": "Caryophyllene", 
			 		"value": 1.91
			 	},
			 	{ 
			 		"name": "Limonene", 
			 		"value": 0.22
			 	},
			 	{ 
			 		"name": "Linalool", 
			 		"value": 0.54
			 	},
			 	{ 
			 		"name": "Eucalyptol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pinene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol-4", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cymene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Apigenin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Quercetin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cannflavin A", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Beta-sitosterol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBL", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Humulene", 
			 		"value": 0.00
				},
				{ 
			 		"name": "Terpinolene", 
			 		"value": 0.00
				} 	
		 	], 
		 	"taste": ["Pineapple", "Cheese"],
		 	 "conditions": ["ADD/ADHD", "Anxiety", "Arthritis", "Depression", "Appetite Loss", "Migraines", "Muscle Spasms", "Nausea", "Pain", "PMS", "Stress"],
			 "positiveEffects": ["Happy", "Energetic", "Focused", "Relaxed"],
			 "negativeEffects": ["Dry Eyes", "Dry Mouth", "Paranoid", "Anxious", "Dizzy", "Munchies"],
			 "descriptionDetailed": "Her buds are light and dark green with orange hairs and a healthy amount of crystals.",
			 "descriptionAbbrev":  "The taste has been described as cheddar and provides a overall tingly mind and body high.",
			 "tags": ["Hybrid", "Pineapple Hogsbreath", "Pineapple", "Migraines", "Headache", "Nausea", "PMS"],
			 "imageUrl": "images/strains/hog-s-breath_100x100.jpg"
			},
			{"strainId": 133,
			 "strainName": "Silverback Gorilla", 
			 "strainType": "Indica",
			 "components": [
			 	{ 
			 		"name": "THC9", 
			 		"value": 18.20
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 0.25
			 	},
			 	{ 
			 		"name": "CBN", 
			 		"value": 0.08
			 	},
			 	{ 
			 		"name": "CBG", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBC", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCV", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCA", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THC8", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pulegone", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Myrcene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Caryophyllene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Limonene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Linalool", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Eucalyptol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pinene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol-4", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cymene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Apigenin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Quercetin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cannflavin A", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Beta-sitosterol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBL", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Humulene", 
			 		"value": 0.00
				},
				{ 
			 		"name": "Terpinolene", 
			 		"value": 0.00
				} 	
		 	],
		 	"taste": ["Pine", "Earthy", "Sweet"],
		 	 "conditions": ["Migraines", "Headache"],
			 "positiveEffects": ["Relaxed", "Euphoric", "Happy", "Drowsiness", "Tingly"],
			 "negativeEffects": ["Dry Mouth", "Paranoid", "Dry Eyes", "Dizzy"],
			 "descriptionDetailed": "Featuring a musky, piney aroma similar to a morning walk in the forest, this strain provides a truly relaxing experience.",
			 "descriptionAbbrev":  "For those struggling with insomnia and stress, Silverback Gorilla is a must-try strain.",
			 "tags": ["Indica", "Silverback Gorilla", "Migraines", "Headache"],
			 "imageUrl": "images/strains/silverback-gorilla_100x100.jpg"
			},
			{"strainId": 134,
			 "strainName": "Sugar Plum", 
			 "strainType": "Sativa",
			 "components": [
			 	{ 
			 		"name": "THC9", 
			 		"value": 23.80
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 0.46
			 	},
			 	{ 
			 		"name": "CBN", 
			 		"value": 0.07
			 	},
			 	{ 
			 		"name": "CBG", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBC", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCV", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCA", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THC8", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pulegone", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Myrcene", 
			 		"value": 0.13
			 	},
			 	{ 
			 		"name": "Caryophyllene", 
			 		"value": 1.48
			 	},
			 	{ 
			 		"name": "Limonene", 
			 		"value": 1.14
			 	},
			 	{ 
			 		"name": "Linalool", 
			 		"value": 0.90
			 	},
			 	{ 
			 		"name": "Eucalyptol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pinene", 
			 		"value": 0.02
			 	},
			 	{ 
			 		"name": "Terpineol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol-4", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cymene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Apigenin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Quercetin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cannflavin A", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Beta-sitosterol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBL", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Humulene", 
			 		"value": 0.00
				},
				{ 
			 		"name": "Terpinolene", 
			 		"value": 0.00
				} 	
		 	],
		 	"taste": ["Berry", "Plum", "Spicy", "Herbal"],
		 	 "conditions": ["ADD/ADHD","Anorexia","Anxiety","Arthritis","Inflammation","Seizures","Depression","Cramps", "Glaucoma","Appetite Loss", "Migraines", "Nausea", "Pain", "PMS", "Stress"],
			 "positiveEffects": ["Happy", "Euphoric", "Energetic", "Uplifted", "Focused", "Relaxed", "Tingly", "Conversational"],
			 "negativeEffects": ["Dizzy", "Dry Mouth", "Munchies"],
			 "descriptionDetailed": "Sugar Plum produces hard-hitting and long-lasting cerebral effects. Its THC content has been measured as high as 28%, a much-needed potency for patients treating severe pain, nausea, glaucoma, mood disorders, and gastrointestinal complications.",
			 "descriptionAbbrev":  "Much-needed potency for patients treating severe pain, nausea, glaucoma, mood disorders, and gastrointestinal complications.",
			 "tags": ["Berry", "Sweet"],
			 "imageUrl": "images/strains/sugar-plum_100x100.jpg"
			},
			{"strainId": 135,
			 "strainName": "Super Lemon Haze", 
			 "strainType": "Sativa",
			 "components": [
			 	{ 
			 		"name": "THC9", 
			 		"value": 16.53
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 0.40
			 	},
			 	{ 
			 		"name": "CBN", 
			 		"value": 0.82
			 	},
			 	{ 
			 		"name": "CBG", 
			 		"value": 0.66
			 	},
			 	{ 
			 		"name": "CBC", 
			 		"value": 0.02
			 	},
			 	{ 
			 		"name": "THCV", 
			 		"value": 0.20
			 	},
			 	{ 
			 		"name": "THCA", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THC8", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pulegone", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Myrcene", 
			 		"value": 0.30
			 	},
			 	{ 
			 		"name": "Caryophyllene", 
			 		"value": 0.20
			 	},
			 	{ 
			 		"name": "Limonene", 
			 		"value": 0.40
			 	},
			 	{ 
			 		"name": "Linalool", 
			 		"value": 0.01
			 	},
			 	{ 
			 		"name": "Eucalyptol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pinene", 
			 		"value": 0.02
			 	},
			 	{ 
			 		"name": "Terpineol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol-4", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cymene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Apigenin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Quercetin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cannflavin A", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Beta-sitosterol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBL", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Humulene", 
			 		"value": 0.00
				},
				{ 
			 		"name": "Terpinolene", 
			 		"value": 0.00
				} 	
		 	], 
		 	"taste": ["Lemon", "Citrus", "Sweet"],
		 	 "conditions": ["ADD/ADHD", "Anorexia","Anxiety","Arthritis","Depression","Appetite Loss","Migraines", "Pain", "Fatigue", "Stress"],
			 "positiveEffects": ["Happy","Uplifted","Euphoric","Energetic", "Creative"],
			 "negativeEffects": ["Dry Mouth", "Dry Eyes", "Paranoid", "Dizzy", "Anxious", "Munchies"],
			 "descriptionDetailed": " As the name states this strain has real lemony characteristics. The smell is zesty, citrusy, and a little sweet. As for the taste, it's everything one would expect from the namesake; tart and sweet like lemonheads candy - not quite as sharp as one might expect.",
			 "descriptionAbbrev":  "The effects are uniquely energetic and lively, may not be the best strain for those of us that are naturally wound-up tight.",
			 "tags": ["Sativa", "Super Lemon Haze", "Migraines", "Headache"],
			 "imageUrl": "images/strains/super-lemon-haze_100x100.jpg"
			},
			{"strainId": 136,
			 "strainName": "Lemon Marmalade", 
			 "strainType": "Hybrid",
			 "components": [
			 	{ 
			 		"name": "THC9", 
			 		"value": 30.00
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 0.01
			 	},
			 	{ 
			 		"name": "CBN", 
			 		"value": 0.01
			 	},
			 	{ 
			 		"name": "CBG", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBC", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCV", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCA", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THC8", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pulegone", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Myrcene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Caryophyllene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Limonene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Linalool", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Eucalyptol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pinene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol-4", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cymene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Apigenin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Quercetin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cannflavin A", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Beta-sitosterol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBL", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Humulene", 
			 		"value": 0.00
				},
				{ 
			 		"name": "Terpinolene", 
			 		"value": 0.00
				} 	
		 	],   
		 	"taste": ["Citrus", "Lemon", "Pine"],
		 	 "conditions": ["Depression", "Stress", "Hypertension"],
			 "positiveEffects": ["Euphoric", "Energetic", "Relaxed"],
			 "negativeEffects": [""],
			 "descriptionDetailed": "The effects from Lemon Marmalade come on quick with a euphoric burst of heady energy that quickly levels off into a more relaxing full-bodied experience.",
			 "descriptionAbbrev":  "The effects from Lemon Marmalade come on quick with a euphoric burst of heady energy that quickly levels off into a more relaxing full-bodied experience.",
			 "tags": ["Hybrid", "The White", "Migraines", "Headache"],
			 "imageUrl": "images/strains/acapulco-gold_100x100.jpg"
			},
			{"strainId": 137,
			 "strainName": "White Fire OG", 
			 "strainType": "Hybrid",
			 "components": [
			 	{ 
			 		"name": "THC9", 
			 		"value": 23.20
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 0.36
			 	},
			 	{ 
			 		"name": "CBN", 
			 		"value": 0.06
			 	},
			 	{ 
			 		"name": "CBG", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBC", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCV", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCA", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THC8", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pulegone", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Myrcene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Caryophyllene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Limonene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Linalool", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Eucalyptol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pinene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol-4", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cymene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Apigenin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Quercetin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cannflavin A", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Beta-sitosterol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBL", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Humulene", 
			 		"value": 0.00
				},
				{ 
			 		"name": "Terpinolene", 
			 		"value": 0.00
				} 	
		 	], 
		 	"taste": ["Earthy", "Pungent", "Woody"],
		 	 "conditions": ["Migraines", "Headache", "Nausea"],
			 "positiveEffects": ["Uplifted", "Focused", "Conversational", "Creative"],
			 "negativeEffects": [""],
			 "descriptionDetailed": "Daytime use of this strain won't leave the consumer drowsy, making it a good choice for social and creative activities.",
			 "descriptionAbbrev":  "Daytime use of this strain won't leave the consumer drowsy, making it a good choice for social and creative activities.",
			 "tags": ["Hybrid", "White Fire OG", "OG", "Migraines", "Headache", "Nausea"],
			 "imageUrl": "images/strains/white-fire-og_100x100.jpg"
			},
			{"strainId": 138,
			 "strainName": "White Walker OG", 
			 "strainType": "Hybrid",
			 "components": [
			 	{ 
			 		"name": "THC9", 
			 		"value": 16.20
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 0.30
			 	},
			 	{ 
			 		"name": "CBN", 
			 		"value": 0.04
			 	},
			 	{ 
			 		"name": "CBG", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBC", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCV", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCA", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THC8", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pulegone", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Myrcene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Caryophyllene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Limonene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Linalool", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Eucalyptol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pinene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol-4", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cymene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Apigenin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Quercetin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cannflavin A", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Beta-sitosterol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBL", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Humulene", 
			 		"value": 0.00
				},
				{ 
			 		"name": "Terpinolene", 
			 		"value": 0.00
				} 	
		 	],
		 	"taste": ["Citrus", "Earthy", "Pungent"],
		 	 "conditions": ["Migraines", "Headache", "Nausea"],
			 "positiveEffects": ["Uplifted", "Happy"],
			 "negativeEffects": [""],
			 "descriptionDetailed": "This Los Angeles native earned first place in the 2013 High Times Amsterdam Cannabis Cup and is cherished to this day for its ability to lift the mood with swiftness.",
			 "descriptionAbbrev":  "This Los Angeles native earned first place in the 2013 High Times Amsterdam Cannabis Cup and is cherished to this day for its ability to lift the mood with swiftness.",
			 "tags": ["Hybrid", "White Walker OG", "OG", "Migraines", "Headache", "Nausea"],
			 "imageUrl": "images/strains/whitewalker-og_100x100.jpg"
			},
			{"strainId": 139,
			 "strainName": "Cherry Bomb", 
			 "strainType": "Hybrid",
			 "components": [
			 	{ 
			 		"name": "THC9", 
			 		"value": 19.00
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 0.30
			 	},
			 	{ 
			 		"name": "CBN", 
			 		"value": 0.06
			 	},
			 	{ 
			 		"name": "CBG", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBC", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCV", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCA", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THC8", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pulegone", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Myrcene", 
			 		"value": 0.06
			 	},
			 	{ 
			 		"name": "Caryophyllene", 
			 		"value": 0.66
			 	},
			 	{ 
			 		"name": "Limonene", 
			 		"value": 0.67
			 	},
			 	{ 
			 		"name": "Linalool", 
			 		"value": 0.55
			 	},
			 	{ 
			 		"name": "Eucalyptol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pinene", 
			 		"value": 0.05
			 	},
			 	{ 
			 		"name": "Terpineol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol-4", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cymene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Apigenin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Quercetin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cannflavin A", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Beta-sitosterol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBL", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Humulene", 
			 		"value": 0.00
				},
				{ 
			 		"name": "Terpinolene", 
			 		"value": 0.00
				} 	
		 	],
		 	"taste": ["Earthy", "Pine", "Berry", "Woody"],
		 	 "conditions": ["Anorexia", "Anxiety", "Appetite Loss", "Nausea", "Pain", "Fibromyalgia", "PMS", "Stress"],
			 "positiveEffects": ["Happy", "Relaxed", "Uplifted", "Creative", "Euphoric"],
			 "negativeEffects": ["Dry Eyes", "Dry Mouth", "Headache", "Paranoid", "Dizzy", "Munchies"],
			 "descriptionDetailed": "The immediate effects are active and mentally alert, but can border on antsy for some. This feeling tends to smooth into a more focused state that allows for normal activities and may even help you tackle that to-do list or next creative project.",
			 "descriptionAbbrev":  "A great hybrid that provides mild to moderate effects that are appropriate for daytime consumption.",
			 "tags": ["Earthy", "Pungent", "Pine"],
			 "imageUrl": "images/strains/cherry-bomb_100x100.jpg"
			},
			{"strainId": 140,
			 "strainName": "DJ Short Blueberry",
			 "strainType": "Indica",
			 "components": [
			 	{ 
			 		"name": "THC9", 
			 		"value": 14.78
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 0.26
			 	},
			 	{ 
			 		"name": "CBN", 
			 		"value": 0.07
			 	},
			 	{ 
			 		"name": "CBG", 
			 		"value": 0.93
			 	},
			 	{ 
			 		"name": "CBC", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCV", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCA", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THC8", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pulegone", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Myrcene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Caryophyllene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Limonene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Linalool", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Eucalyptol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pinene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol-4", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cymene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Apigenin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Quercetin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cannflavin A", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Beta-sitosterol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBL", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Humulene", 
			 		"value": 0.00
				},
				{ 
			 		"name": "Terpinolene", 
			 		"value": 0.00
				} 	
		 	], 
		 	"taste": ["Sweet", "Blueberry", "Berry"],
		 	 "conditions": ["Anorexia", "Anxiety", "Insomnia", "Appetite Loss", "Nausea", "Pain", "Stress"],
			 "positiveEffects": ["Happy", "Relaxed", "Euphoric", "Uplifted", "Drowsiness"],
			 "negativeEffects": ["Drowsiness", "Dry Mouth", "Dry Eyes", "Headache", "Dizzy", "Anxious", "Munchies"],
			 "descriptionDetailed": "This Blueberry is a dense and stout plant with red, purple and blue hues.  The finished product has a very fruity aroma and taste of blueberry.  The high is euphoric and Long Lasting.",
			 "descriptionAbbrev":  "A very fruity aroma and taste of blueberry.",
			 "tags": ["Blueberry", "Berry", "Sweet"],
			 "imageUrl": "images/strains/dj-short-blueberry_100x100.jpg"
			},
			{"strainId": 141,
			 "strainName": "El Alquimista",
			 "strainType": "Hybrid",
			 "components": [
			 	{ 
			 		"name": "THC9", 
			 		"value": 24.40
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 0.27
			 	},
			 	{ 
			 		"name": "CBN", 
			 		"value": 0.05
			 	},
			 	{ 
			 		"name": "CBG", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBC", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCV", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCA", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THC8", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pulegone", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Myrcene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Caryophyllene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Limonene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Linalool", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Eucalyptol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pinene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol-4", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cymene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Apigenin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Quercetin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cannflavin A", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Beta-sitosterol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBL", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Humulene", 
			 		"value": 0.00
				},
				{ 
			 		"name": "Terpinolene", 
			 		"value": 0.00
				} 	
		 	],   
		 	"taste": [""],
		 	 "conditions": ["Nausea"],
			 "positiveEffects": ["Relaxed", "Active", "Happy"],
			 "negativeEffects": [""],
			 "descriptionDetailed": "Literally means The Alchemist, this hybrid marijuana is the result of crossing the legendary Northern Lights with AK 47.",
			 "descriptionAbbrev":  "Literally means The Alchemist, this hybrid marijuana is the result of crossing the legendary Northern Lights with AK 47.",
			 "tags": ["Hybrid", "El Alquimista", "Nausea"],
			 "imageUrl": "images/strains/El-Alquimista.jpg"
			},
			{"strainId": 142,
			 "strainName": "Godfather OG",
			 "strainType": "Indica",
			 "components": [
			 	{ 
			 		"name": "THC9", 
			 		"value": 21.37
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 0.67
			 	},
			 	{ 
			 		"name": "CBN", 
			 		"value": 0.05
			 	},
			 	{ 
			 		"name": "CBG", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBC", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCV", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCA", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THC8", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pulegone", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Myrcene", 
			 		"value": 0.44
			 	},
			 	{ 
			 		"name": "Caryophyllene", 
			 		"value": 1.48
			 	},
			 	{ 
			 		"name": "Limonene", 
			 		"value": 0.84
			 	},
			 	{ 
			 		"name": "Linalool", 
			 		"value": 0.55
			 	},
			 	{ 
			 		"name": "Eucalyptol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pinene", 
			 		"value": 0.16
			 	},
			 	{ 
			 		"name": "Terpineol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol-4", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cymene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Apigenin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Quercetin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cannflavin A", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Beta-sitosterol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBL", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Humulene", 
			 		"value": 0.00
				},
				{ 
			 		"name": "Terpinolene", 
			 		"value": 0.00
				} 	
		 	],
		 	"taste": ["Earthy", "Pungent", "Pine"],
		 	 "conditions": ["Anorexia", "Anxiety", "Insomnia", "Pain", "Stress", "Depression", "Headache"],
			 "positiveEffects": ["Relaxed", "Happy", "Drowsiness", "Euphoric", "Hungry" ],
			 "negativeEffects": ["Dry Eyes", "Dry Mouth", "Paranoid", "Dizzy", "Munchies"],
			 "descriptionDetailed": "The Don is a result of crossing Granddaddy Purple and OG Kush, and there is a kushy spiciness in its scent coupled with some subtle grape notes. Godfather OG is powerful; with THC levels that have been measured as high as 28%, this strain is an offer you can't refuse.",
			 "descriptionAbbrev":  "Often recommended for insomnia and pain due to its sedative indica properties.",
			 "tags": ["Sativa", "Godfather OG", "Nausea", "Epilepsy"],
			 "imageUrl": "images/strains/godfather-og_100x100.jpg"
			},
			{"strainId": 143,
			 "strainName": "Herijuana",
			 "strainType": "Indica",
			 "components": [
			 	{ 
			 		"name": "THC9", 
			 		"value": 17.30
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 0.27
			 	},
			 	{ 
			 		"name": "CBN", 
			 		"value": 0.07
			 	},
			 	{ 
			 		"name": "CBG", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBC", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCV", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCA", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THC8", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pulegone", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Myrcene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Caryophyllene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Limonene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Linalool", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Eucalyptol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pinene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol-4", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cymene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Apigenin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Quercetin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cannflavin A", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Beta-sitosterol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBL", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Humulene", 
			 		"value": 0.00
				},
				{ 
			 		"name": "Terpinolene", 
			 		"value": 0.00
				} 	
		 	],
		 	"taste": ["Earthy", "Sweet", "Pungent"],
		 	 "conditions": ["Nausea", "Pain", "Stress", "Insomnia", "Headache"],
			 "positiveEffects": ["Relaxed", "Drowsiness","Euphoric", "Happy", "Tingly"],
			 "negativeEffects": ["Dry Mouth", "Dry Eyes", "Headache", "Dizzy", "Anxious"],
			 "descriptionDetailed": "Provides great body-numbing effects to free you from pain, nice strain to smoke when chilling at home.",
			 "descriptionAbbrev":  "Provides great body-numbing effects to free you from pain, nice strain to smoke when chilling at home.",
			 "tags": ["Indica", "Herojuana", "Nausea"],
			 "imageUrl": "images/strains/herijuana_100x100.jpg"
			},
			{"strainId": 144,
			 "strainName": "Lavender",
			 "strainType": "Indica",
			 "components": [
			 	{ 
			 		"name": "THC9", 
			 		"value": 25.40
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 0.46
			 	},
			 	{ 
			 		"name": "CBN", 
			 		"value": 0.03
			 	},
			 	{ 
			 		"name": "CBG", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBC", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCV", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCA", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THC8", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pulegone", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Myrcene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Caryophyllene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Limonene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Linalool", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Eucalyptol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pinene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol-4", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cymene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Apigenin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Quercetin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cannflavin A", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Beta-sitosterol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBL", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Humulene", 
			 		"value": 0.00
				},
				{ 
			 		"name": "Terpinolene", 
			 		"value": 0.00
				} 	
		 	], 
		 	"taste": ["Lavender", "Flowery", "Sweet"],
		 	 "conditions": ["Nausea", "Pain", "Stress", "Insomnia", "Nausea", "Depression"],
			 "positiveEffects": ["Relaxed", "Happy", "Euphoric", "Uplifted", "Drowsiness"],
			 "negativeEffects": ["Dry Mouth", "Dry Eyes", "Anxious", "Dizzy", "Paranoid"],
			 "descriptionDetailed": "This strain, sometimes referred to as Lavender Kush, has dense buds that give off a floral and spicy aroma.",
			 "descriptionAbbrev":  "This strain, sometimes referred to as Lavender Kush, has dense buds that give off a floral and spicy aroma.",
			 "tags": ["Indica", "Lavender", "Nausea"],
			 "imageUrl": "images/strains/lavender_100x100.jpg"
			},
			{"strainId": 145,
			 "strainName": "Purple Coma",
			 "strainType": "Sativa",
			 "components": [
			 	{ 
			 		"name": "THC9", 
			 		"value": 15.60
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 0.25
			 	},
			 	{ 
			 		"name": "CBN", 
			 		"value": 0.04
			 	},
			 	{ 
			 		"name": "CBG", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBC", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCV", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCA", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THC8", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pulegone", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Myrcene", 
			 		"value": 0.47
			 	},
			 	{ 
			 		"name": "Caryophyllene", 
			 		"value": 1.25
			 	},
			 	{ 
			 		"name": "Limonene", 
			 		"value": 1.88
			 	},
			 	{ 
			 		"name": "Linalool", 
			 		"value": 1.34
			 	},
			 	{ 
			 		"name": "Eucalyptol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pinene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol-4", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cymene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Apigenin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Quercetin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cannflavin A", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Beta-sitosterol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBL", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Humulene", 
			 		"value": 0.00
				},
				{ 
			 		"name": "Terpinolene", 
			 		"value": 0.00
				} 	
		 	], 
		 	"taste": ["Grape"],
		 	 "conditions": ["ADD/ADHD", "Anxiety", "Fibromyalgia", "Nausea", "Stress"],
			 "positiveEffects": ["Happy", "Energetic", "Relaxed"],
			 "negativeEffects": [""],
			 "descriptionDetailed": "Detailed description here. Detailed description here.Detailed description here.Detailed description here. Detailed description here.",
			 "descriptionAbbrev":  "Short description here.",
			 "tags": ["Sativa", "Purple Coma", "Nausea"],
			 "imageUrl": "images/strains/purple-coma.jpg"
			},
			{"strainId": 146,
			 "strainName": "Purple Passion",
			 "strainType": "Indica",
			 "components": [
			 	{ 
			 		"name": "THC9", 
			 		"value": 21.00
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 0.35
			 	},
			 	{ 
			 		"name": "CBN", 
			 		"value": 0.12
			 	},
			 	{ 
			 		"name": "CBG", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBC", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCV", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCA", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THC8", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pulegone", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Myrcene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Caryophyllene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Limonene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Linalool", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Eucalyptol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pinene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol-4", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cymene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Apigenin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Quercetin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cannflavin A", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Beta-sitosterol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBL", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Humulene", 
			 		"value": 0.00
				},
				{ 
			 		"name": "Terpinolene", 
			 		"value": 0.00
				} 	
		 	], 
		 	"taste": ["Grape", "Pungent", "Sweet"],
		 	 "conditions": ["Nausea", "Stress", "Pain", "Insomnia", "Appetite Loss"],
			 "positiveEffects": ["Relaxed", "Drowsiness", "Headache", "Euphoric", "Happy", "Creative"],
			 "negativeEffects": ["Dry Mouth", "Dry Eyes", "Headache", "Dizzy", "Paranoid"],
			 "descriptionDetailed": "Purple Passion is great for unleashing your creative side.",
			 "descriptionAbbrev":  "Purple Passion is great for unleashing your creative side.",
			 "tags": ["Indica", "Purple Passion", "Nausea"],
			 "imageUrl": "images/strains/purple-passion_100x100.jpg"
			},
			{"strainId": 147,
			 "strainName": "Sour Bubble",
			 "strainType": "Indica",
			 "components": [
			 	{ 
			 		"name": "THC9", 
			 		"value": 27.13
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 0.52
			 	},
			 	{ 
			 		"name": "CBN", 
			 		"value": 0.03
			 	},
			 	{ 
			 		"name": "CBG", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBC", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCV", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCA", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THC8", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pulegone", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Myrcene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Caryophyllene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Limonene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Linalool", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Eucalyptol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pinene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol-4", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cymene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Apigenin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Quercetin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cannflavin A", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Beta-sitosterol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBL", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Humulene", 
			 		"value": 0.00
				},
				{ 
			 		"name": "Terpinolene", 
			 		"value": 0.00
				} 	
		 	],
		 	"taste": ["Chestnut", "Sweet", "Earthy", "Diesel"],
		 	 "conditions": ["Nausea", "Pain", "Insomnia", "Muscle Spasms", "Anxiety"],
			 "positiveEffects": ["Relaxed", "Uplifting"],
			 "negativeEffects": ["Drowsiness"],
			 "descriptionDetailed": "These sticky buds offer a sweet, fruity aroma with diesel undertones, and deliver relaxing, uplifting effects. ",
			 "descriptionAbbrev":  "These sticky buds offer a sweet, fruity aroma with diesel undertones, and deliver relaxing, uplifting effects. ",
			 "tags": ["Indica", "Sour Bubble", "Nausea"],
			 "imageUrl": "images/strains/sour-bubble_100x100.jpg"
			},
			{"strainId": 148,
			 "strainName": "Sour Dub",
			 "strainType": "Sativa",
			 "components": [
			 	{ 
			 		"name": "THC9", 
			 		"value": 21.20
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 0.22
			 	},
			 	{ 
			 		"name": "CBN", 
			 		"value": 0.12
			 	},
			 	{ 
			 		"name": "CBG", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBC", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCV", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCA", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THC8", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pulegone", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Myrcene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Caryophyllene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Limonene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Linalool", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Eucalyptol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pinene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol-4", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cymene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Apigenin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Quercetin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cannflavin A", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Beta-sitosterol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBL", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Humulene", 
			 		"value": 0.00
				},
				{ 
			 		"name": "Terpinolene", 
			 		"value": 0.00
				} 	
		 	],
		 	"taste": ["Pine", "Earthy", "Dank"], 
		 	 "conditions": ["Nausea", "Pain", "Insomnia", "Anxiety", "Appetite Loss"],
			 "positiveEffects": ["Energetic", "Happy"],
			 "negativeEffects": [""],
			 "descriptionDetailed": "Stoned on Arrival.",
			 "descriptionAbbrev":  "Stoned on Arrival.",
			 "tags": ["Sativa", "Sour Dub", "Nausea"],
			 "imageUrl": "images/strains/SourDub.jpg"
			},
			{"strainId": 149,
			 "strainName": "Strawberry Mist",
			 "strainType": "Sativa",
			 "components": [
			 	{ 
			 		"name": "THC9", 
			 		"value": 16.00
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 0.38
			 	},
			 	{ 
			 		"name": "CBN", 
			 		"value": 0.02
			 	},
			 	{ 
			 		"name": "CBG", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBC", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCV", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCA", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THC8", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pulegone", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Myrcene", 
			 		"value": 0.06
			 	},
			 	{ 
			 		"name": "Caryophyllene", 
			 		"value": 0.56
			 	},
			 	{ 
			 		"name": "Limonene", 
			 		"value": 3.85
			 	},
			 	{ 
			 		"name": "Linalool", 
			 		"value": 0.06
			 	},
			 	{ 
			 		"name": "Eucalyptol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pinene", 
			 		"value": 0.04
			 	},
			 	{ 
			 		"name": "Terpineol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol-4", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cymene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Apigenin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Quercetin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cannflavin A", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Beta-sitosterol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBL", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Humulene", 
			 		"value": 0.00
				},
				{ 
			 		"name": "Terpinolene", 
			 		"value": 0.00
				} 	
		 	], 
		 	"taste": ["Strawberry", "Sweet", "Berry"],
		 	 "conditions": ["ADD/ADHD","Anorexia","Anxiety","Depression","Nausea","Pain", "PMS", "Stress", "Impotence"],
			 "positiveEffects": ["Happy", "Energetic", "Focused", "Conversational", "Creative", "Sexual"],
			 "negativeEffects": [""],
			 "descriptionDetailed": "This sativa-dominant strain smells of fresh strawberries and will tickle your lungs.",
			 "descriptionAbbrev":  "This sativa-dominant strain smells of fresh strawberries and will tickle your lungs.",
			 "tags": ["Sativa", "Strawberry Mist", "Nausea", "PMS"],
			 "imageUrl": "images/strains/Kali-Mist-Bud-Closeup.jpg"
			},
			{"strainId": 150,
			 "strainName": "LA Chocolat",
			 "strainType": "Hybrid",
			 "components": [
			 	{ 
			 		"name": "THC9", 
			 		"value": 15.40
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 0.01
			 	},
			 	{ 
			 		"name": "CBN", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBG", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBC", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCV", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCA", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THC8", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pulegone", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Myrcene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Caryophyllene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Limonene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Linalool", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Eucalyptol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pinene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol-4", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cymene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Apigenin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Quercetin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cannflavin A", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Beta-sitosterol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBL", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Humulene", 
			 		"value": 0.00
				},
				{ 
			 		"name": "Terpinolene", 
			 		"value": 0.00
				} 	
		 	],
		 	"taste": ["Sweet", "Earthy", "Chocolate", "Coffee", "Fruity"],
		 	 "conditions": ["Pain", "Stress", "Appetite Loss"],
			 "positiveEffects": ["Calmness", "Relaxed", "Hungry", "Long Lasting", "Potent"],
			 "negativeEffects": ["Drowsiness", "Munchies"],
			 "descriptionDetailed": "LA Chocolat has an intense aroma and flavor, with notes of chocolate, ground, and fruit. Its effect is powerful and relaxing, ideal to rest peacefully",
			 "descriptionAbbrev":  "LA Chocolat has an intense aroma and flavor, with notes of chocolate, ground, and fruit. Its effect is powerful and relaxing, ideal to rest peacefully",
			 "tags": [""],
			 "imageUrl": "images/strains/DNA_Genetics_Seeds_-_LA_Chocolat.jpg"
			},
			{"strainId": 151,
			 "strainName": "Afghani Bullrider",
			 "strainType": "Indica",
			 "components": [
			 	{ 
			 		"name": "THC9", 
			 		"value": 23.49
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 0.23
			 	},
			 	{ 
			 		"name": "CBN", 
			 		"value": 0.02
			 	},
			 	{ 
			 		"name": "CBG", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBC", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCV", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCA", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THC8", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pulegone", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Myrcene", 
			 		"value": 0.26
			 	},
			 	{ 
			 		"name": "Caryophyllene", 
			 		"value": 2.15
			 	},
			 	{ 
			 		"name": "Limonene", 
			 		"value": 2.55
			 	},
			 	{ 
			 		"name": "Linalool", 
			 		"value": 1.57
			 	},
			 	{ 
			 		"name": "Eucalyptol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pinene", 
			 		"value": 0.62
			 	},
			 	{ 
			 		"name": "Terpineol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol-4", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cymene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Apigenin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Quercetin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cannflavin A", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Beta-sitosterol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBL", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Humulene", 
			 		"value": 0.00
				},
				{ 
			 		"name": "Terpinolene", 
			 		"value": 0.00
				} 	
		 	], 
		 	"taste": ["Pine", "Earthy", "Pungent"],
		 	 "conditions": ["Anorexia", "Anxiety", "Chronic Aches", "Insomnia", "Appetite Loss", "Pain", "Stress"],
			 "positiveEffects": ["Happy", "Relaxed", "Focused", "Energetic", "Uplifted", "Giggly"],
			 "negativeEffects": ["Dry Mouth", "Dry Eyes", "Paranoid", "Dizzy", "Headache", "Munchies"],
			 "descriptionDetailed": "Afghani Bullrider is pretty to look at, with light green buds covered in orange hair, and has a strong sweet and sour smell with some piney freshness. This strain is a heavy hitter that delivers a strong body without the full sedative effects some indicas can have; it heads straight to the brain and may boost creative thoughts while providing physical relaxation. With its high levels of THC and CBD, Afghani Bullrider is recommended for chronic pain, insomnia, and anxiety.",
			 "descriptionAbbrev":  "This strain is a heavy hitter that delivers a strong body without the full sedative effects.",
			 "tags": ["Indica", "Afghani Bullrider", "Pain", "Stress"],
			 "imageUrl": "images/strains/afghani-bullrider_100x100.jpg"
			},
			{"strainId": 152,
			 "strainName": "Afgoo",
			 "strainType": "Indica",
			 "components": [
			 	{ 
			 		"name": "THC9", 
			 		"value": 15.43
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 0.16
			 	},
			 	{ 
			 		"name": "CBN", 
			 		"value": 1.46
			 	},
			 	{ 
			 		"name": "CBG", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBC", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCV", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCA", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THC8", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pulegone", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Myrcene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Caryophyllene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Limonene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Linalool", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Eucalyptol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pinene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol-4", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cymene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Apigenin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Quercetin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cannflavin A", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Beta-sitosterol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBL", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Humulene", 
			 		"value": 0.00
				},
				{ 
			 		"name": "Terpinolene", 
			 		"value": 0.00
				} 	
		 	],
		 	"taste": ["Earthy", "Pine", "Woody"],
		 	 "conditions": ["Anorexia", "Depression", "Insomnia", "Appetite Loss", "Pain", "Stress"],
			 "positiveEffects": ["Relaxed", "Drowsiness", "Euphoric", "Happy", "Hungry" ],
			 "negativeEffects": ["Dry Mouth", "Dry Eyes", "Dizzy", "Paranoid", "Headache", "Munchies"],
			 "descriptionDetailed": "A potent indica strain that is believed to descend from an Afghani indica and a Haze sativa from the island of Maui.",
			 "descriptionAbbrev":  "This strain undoubtedly takes after its indica parent as it primarily delivers relaxing, sleepy effects alongside its earthy pine flavor. ",
			 "tags": ["Indica", "Afgoo", "Pain", "Stress"],
			 "imageUrl": "images/strains/afgoo_100x100.jpg"
			},
			{"strainId": 153,
			 "strainName": "Afgooey",
			 "strainType": "Indica",
			 "components": [
			 	{ 
			 		"name": "THC9", 
			 		"value": 25.00
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 0.85
			 	},
			 	{ 
			 		"name": "CBN", 
			 		"value": 0.07
			 	},
			 	{ 
			 		"name": "CBG", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBC", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCV", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCA", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THC8", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pulegone", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Myrcene", 
			 		"value": 0.16
			 	},
			 	{ 
			 		"name": "Caryophyllene", 
			 		"value": 0.31
			 	},
			 	{ 
			 		"name": "Limonene", 
			 		"value": 0.04
			 	},
			 	{ 
			 		"name": "Linalool", 
			 		"value": 0.17
			 	},
			 	{ 
			 		"name": "Eucalyptol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pinene", 
			 		"value": 1.25
			 	},
			 	{ 
			 		"name": "Terpineol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol-4", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cymene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Apigenin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Quercetin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cannflavin A", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Beta-sitosterol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBL", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Humulene", 
			 		"value": 0.00
				},
				{ 
			 		"name": "Terpinolene", 
			 		"value": 0.00
				} 	
		 	], 
		 	"taste": ["Earthy", "Pungent", "Woody"],
		 	 "conditions": ["Anxiety", "Insomnia", "Migraines", "Pain", "Stress"],
			 "positiveEffects": ["Relaxed", "Happy", "Euphoric", "Hungry", "Drowsiness"],
			 "negativeEffects": ["Dry Mouth", "Dry Eyes", "Paranoid", "Headache", "Dizzy", "Munchies"],
			 "descriptionDetailed": "Its sativa parent may lend Afgoo some uplifting, creative qualities, but this strain undoubtedly takes after its indica parent as it primarily delivers relaxing, sleepy effects alongside its earthy pine flavor.",
			 "descriptionAbbrev":  "Primarily delivers relaxing, sleepy effects alongside its earthy pine flavor.",
			 "tags": ["Indica", "Afgooey", "Pain", "Stress"],
			 "imageUrl": "images/strains/afgooey_100x100.jpg"
			},
			{"strainId": 154,
			 "strainName": "AK-47",
			 "strainType": "Hybrid",
			 "components": [
			 	{ 
			 		"name": "THC9", 
			 		"value": 16.67
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 0.17
			 	},
			 	{ 
			 		"name": "CBN", 
			 		"value": 0.30
			 	},
			 	{ 
			 		"name": "CBG", 
			 		"value": 0.40
			 	},
			 	{ 
			 		"name": "CBC", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCV", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCA", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THC8", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pulegone", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Myrcene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Caryophyllene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Limonene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Linalool", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Eucalyptol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pinene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol-4", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cymene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Apigenin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Quercetin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cannflavin A", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Beta-sitosterol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBL", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Humulene", 
			 		"value": 0.00
				},
				{ 
			 		"name": "Terpinolene", 
			 		"value": 0.00
				} 	
		 	],
		 	"taste": ["Earthy", "Pine", "Skunk"],
		 	 "conditions": ["Anorexia", "Depression", "Insomnia", "Appetite Loss", "Pain", "Stress"],
			 "positiveEffects": ["Happy", "Relaxed", "Creative", "Uplifted", "Euphoric", "Hungry", "Conversational"],
			 "negativeEffects": ["Dry Mouth", "Dry Eyes", "Dizzy", "Paranoid", "Headache", "Munchies"],
			 "descriptionDetailed": "This sativa-dominant hybrid delivers a steady and long-lasting cerebral buzz that keeps you mentally alert and engaged in creative or social activities.",
			 "descriptionAbbrev":  "AK-47 will leave you relaxed and mellow.",
			 "tags": ["Hybrid", "AK-47", "Pain", "Stress"],
			 "imageUrl": "images/strains/ak-47_100x100.jpg"
			},
			{"strainId": 155,
			 "strainName": "AK-48",
			 "strainType": "Hybrid",
			 "components": [
			 	{ 
			 		"name": "THC9", 
			 		"value": 16.39
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 0.10
			 	},
			 	{ 
			 		"name": "CBN", 
			 		"value": 0.28
			 	},
			 	{ 
			 		"name": "CBG", 
			 		"value": 0.34
			 	},
			 	{ 
			 		"name": "CBC", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCV", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCA", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THC8", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pulegone", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Myrcene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Caryophyllene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Limonene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Linalool", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Eucalyptol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pinene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol-4", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cymene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Apigenin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Quercetin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cannflavin A", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Beta-sitosterol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBL", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Humulene", 
			 		"value": 0.00
				},
				{ 
			 		"name": "Terpinolene", 
			 		"value": 0.00
				} 	
		 	], 
		 	"taste": ["Earthy", "Pine", "Sweet"],
		 	 "conditions": ["Anorexia","Depression", "Insomnia", "Appetite Loss", "Pain", "Stress"],
			 "positiveEffects": ["Relaxed", "Happy", "Euphoric", "Uplifted", "Drowsiness"],
			 "negativeEffects": ["Dry Mouth", "Dry Eyes", "Paranoid", "Dizzy", "Headache", "Munchies"],
			 "descriptionDetailed": "AK-48's parents are Ice and Jock Horror.  Its Ice mother has ancestors of Afghani, Skunk, Northern Lights and Shiva stock.",
			 "descriptionAbbrev":  "AK-48 high leans more towards typical sativa effects.",
			 "tags": ["Hybrid", "AK-48", "Pain", "Stress"],
			 "imageUrl": "images/strains/ak-48_100x100.jpg"
			},
			{"strainId": 156,
			 "strainName": "Kalashnikova",
			 "strainType": "Hybrid",
			 "components": [
			 	{ 
			 		"name": "THC9", 
			 		"value": 15.44
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 0.17
			 	},
			 	{ 
			 		"name": "CBN", 
			 		"value": 0.02
			 	},
			 	{ 
			 		"name": "CBG", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBC", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCV", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCA", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THC8", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pulegone", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Myrcene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Caryophyllene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Limonene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Linalool", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Eucalyptol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pinene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol-4", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cymene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Apigenin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Quercetin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cannflavin A", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Beta-sitosterol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBL", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Humulene", 
			 		"value": 0.00
				},
				{ 
			 		"name": "Terpinolene", 
			 		"value": 0.00
				} 	
		 	],
		 	"taste": ["Citrus", "Lemon", "Pine"],
		 	 "conditions": ["Pain", "Stress"],
			 "positiveEffects": ["Clear headed", "Long Lasting", "Relaxed", "Creative", "Conversational"],
			 "negativeEffects": ["Drowsiness", "Munchies", "Couch Lock"],
			 "descriptionDetailed": "Produces strong, long-lasting indica effects while maintaining a clear train of thought. Kalashnikova's aroma is a mixture of lemon, mango, and sweet honey.",
			 "descriptionAbbrev":  "Produces strong, long-lasting indica effects while maintaining a clear train of thought. Kalashnikova's aroma is a mixture of lemon, mango, and sweet honey.",
			 "tags": [""],
			 "imageUrl": "images/strains/kalashnikova_100x100.jpg"
			},
			{"strainId": 157,
			 "strainName": "Black Buddah",
			 "strainType": "Indica",
			 "components": [
			 	{ 
			 		"name": "THC9", 
			 		"value": 20.90
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 0.47
			 	},
			 	{ 
			 		"name": "CBN", 
			 		"value": 0.12
			 	},
			 	{ 
			 		"name": "CBG", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBC", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCV", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCA", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THC8", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pulegone", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Myrcene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Caryophyllene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Limonene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Linalool", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Eucalyptol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pinene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol-4", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cymene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Apigenin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Quercetin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cannflavin A", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Beta-sitosterol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBL", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Humulene", 
			 		"value": 0.00
				},
				{ 
			 		"name": "Terpinolene", 
			 		"value": 0.00
				} 	
		 	],
		 	"taste": ["Exotic"],
		 	 "conditions": ["Pain", "Stress"],
			 "positiveEffects": ["Cerebral", "Energetic", "Happy"],
			 "negativeEffects": [""],
			 "descriptionDetailed": "The perfect cerebral smoke with fantastic exotic flavor.",
			 "descriptionAbbrev":  "The perfect cerebral smoke with fantastic exotic flavor.",
			 "tags": ["Indica", "Black Buddah", "Pain", "Stress"],
			 "imageUrl": "images/strains/Black-Budha.jpg"
			},
			{"strainId": 158,
			 "strainName": "OG Cheese",
			 "strainType": "Hybrid",
			 "components": [
			 	{ 
			 		"name": "THC9", 
			 		"value": 7.18
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 0.36
			 	},
			 	{ 
			 		"name": "CBN", 
			 		"value": 0.04
			 	},
			 	{ 
			 		"name": "CBG", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBC", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCV", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCA", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THC8", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pulegone", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Myrcene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Caryophyllene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Limonene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Linalool", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Eucalyptol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pinene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol-4", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cymene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Apigenin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Quercetin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cannflavin A", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Beta-sitosterol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBL", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Humulene", 
			 		"value": 0.00
				},
				{ 
			 		"name": "Terpinolene", 
			 		"value": 0.00
				} 	
		 	], 
		 	"taste": ["Skunk", "Cheese", "Citrus"],
		 	 "conditions": ["ADD/ADHD", "Anorexia", "Anxiety",  "Arthritis", "Depression", "Hypertension", "Nausea", "Insomnia", "Pain", "PMS", "Stress"],
			 "positiveEffects": ["Happy", "Focused", "Relaxed", "Creative", "Hungry", "Euphoric", "Uplifted"],
			 "negativeEffects": ["Dry Mouth", "Dry Eyes", "Dizzy", "Munchies"],
			 "descriptionDetailed": "A powerfully euphoric strain with a funky aroma somewhat similar to that of cheese. OG Cheese's dreamy, intoxicating buzz makes it a popular strain for recreational consumers.",
			 "descriptionAbbrev":  "OG Cheese's dreamy, intoxicating buzz makes it a popular strain for recreational consumers.",
			 "tags": ["Hybrid", "OG Cheese", "OG", "Hypertension", "PMS"],
			 "imageUrl": "images/strains/og-cheese_100x100.jpg"
			},
			{"strainId": 159,
			 "strainName": "Mercury OG",
			 "strainType": "Indica",
			 "components": [
			 	{ 
			 		"name": "THC9", 
			 		"value": 27.00
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 0.35
			 	},
			 	{ 
			 		"name": "CBN", 
			 		"value": 0.03
			 	},
			 	{ 
			 		"name": "CBG", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBC", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCV", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCA", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THC8", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pulegone", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Myrcene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Caryophyllene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Limonene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Linalool", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Eucalyptol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pinene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol-4", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cymene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Apigenin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Quercetin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cannflavin A", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Beta-sitosterol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBL", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Humulene", 
			 		"value": 0.00
				},
				{ 
			 		"name": "Terpinolene", 
			 		"value": 0.00
				} 	
		 	], 
		 	"taste": ["Earthy", "Pungent", "Sweet"],
		 	 "conditions": ["ADD/ADHD", "Anorexia", "Anxiety", "Depression","Hypertension", "Appetite Loss", "Pain","PMS", "Stress", "Nausea", "Insomnia"],
			 "positiveEffects": ["Happy", "Focused", "Relaxed", "Conversational", "Drowsiness", "Tingly", "Euphoric"],
			 "negativeEffects": ["Dry Mouth", "Dry Eyes", "Paranoid", "Munchies"],
			 "descriptionDetailed": "Although uplifting, this indica is on the heavier side, appealing to experienced users who desire strong medicinal treatment.",
			 "descriptionAbbrev":  "This strain is favored for its powerful effects that provide clarity and heightened sensory perception",
			 "tags": ["Indica", "Mercury OG", "Hypertension", "PMS"],
			 "imageUrl": "images/strains/mercury-og_100x100.jpg"
			},
			{"strainId": 160,
			 "strainName": "Silver Surfer",
			 "strainType": "Hybrid",
			 "components": [
			 	{ 
			 		"name": "THC9", 
			 		"value": 24.86
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 0.52
			 	},
			 	{ 
			 		"name": "CBN", 
			 		"value": 0.15
			 	},
			 	{ 
			 		"name": "CBG", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBC", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCV", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCA", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THC8", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pulegone", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Myrcene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Caryophyllene", 
			 		"value": 3.63
			 	},
			 	{ 
			 		"name": "Limonene", 
			 		"value": 1.24
			 	},
			 	{ 
			 		"name": "Linalool", 
			 		"value": 0.44
			 	},
			 	{ 
			 		"name": "Eucalyptol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pinene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol-4", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cymene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Apigenin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Quercetin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cannflavin A", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Beta-sitosterol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBL", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Humulene", 
			 		"value": 0.00
				},
				{ 
			 		"name": "Terpinolene", 
			 		"value": 0.00
				} 	
		 	], 
		 	"taste": ["Citrus", "Earthy", "Flowery"],
		 	 "conditions": ["ADD/ADHD", "Arthritis", "Glaucoma", "Insomnia", "Pain", "Stress", "Muscle Spasms", "Fibromyalgia", "Depression" ],
			 "positiveEffects": ["Happy", "Relaxed", "Conversational", "Energetic", "Uplifted"],
			 "negativeEffects": ["Paranoid", "Dry Mouth", "Anxious", "Dizzy", "Dry Eyes"],
			 "descriptionDetailed": "Silver Surfer is a sativa-dominant hybrid whose potent cerebral effects may have you feeling like you're zipping through the space with your super-hero powers.",
			 "descriptionAbbrev":  "This strain is very energetic and motivates many to check things off their lists or inspires talkative social activities.",
			 "tags": ["Hybrid", "Silver Surfer", "Glaucoma"],
			 "imageUrl": "images/strains/silver-surfer_100x100.jpg"
			},
			{"strainId": 161,
			 "strainName": "Sour OG",
			 "strainType": "Hybrid",
			 "components": [
			 	{ 
			 		"name": "THC9", 
			 		"value": 17.75
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 0.25
			 	},
			 	{ 
			 		"name": "CBN", 
			 		"value": 0.73
			 	},
			 	{ 
			 		"name": "CBG", 
			 		"value": 0.48
			 	},
			 	{ 
			 		"name": "CBC", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCV", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCA", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THC8", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pulegone", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Myrcene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Caryophyllene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Limonene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Linalool", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Eucalyptol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pinene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol-4", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cymene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Apigenin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Quercetin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cannflavin A", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Beta-sitosterol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBL", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Humulene", 
			 		"value": 0.00
				},
				{ 
			 		"name": "Terpinolene", 
			 		"value": 0.00
				} 	
		 	],
		 	"taste": ["Earthy", "Diesel", "Sweet"],
		 	 "conditions": ["Anxiety","Depression", "Epilepsy", "Insomnia", "Pain", "Stress"],
			 "positiveEffects": ["Happy", "Energetic", "Conversational", "Creative", "Relaxed", "Euphoric"],
			 "negativeEffects": ["Dry Mouth", "Dry Eyes", "Dizzy", "Anxious", "Paranoid"],
			 "descriptionDetailed": "A very nice weed to smoke, not overly powerful but provides a relaxing yet energetic high.",
			 "descriptionAbbrev":  "Great for chilling with friends and laughing.",
			 "tags": ["Hybrid", "Sour OG", "Epilepsy"],
			 "imageUrl": "images/strains/sour-og_100x100.jpg"
			},
			{"strainId": 162,
			 "strainName": "Mars OG",
			 "strainType": "Indica",
			 "components": [
			 	{ 
			 		"name": "THC9", 
			 		"value": 22.90
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 0.46
			 	},
			 	{ 
			 		"name": "CBN", 
			 		"value": 0.07
			 	},
			 	{ 
			 		"name": "CBG", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBC", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCV", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCA", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THC8", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pulegone", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Myrcene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Caryophyllene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Limonene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Linalool", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Eucalyptol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pinene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol-4", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cymene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Apigenin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Quercetin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cannflavin A", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Beta-sitosterol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBL", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Humulene", 
			 		"value": 0.00
				},
				{ 
			 		"name": "Terpinolene", 
			 		"value": 0.00
				} 	
		 	], 
		 	"taste": ["Sweet", "Earthy", "Pungent"],
		 	 "conditions": ["Epilepsy", "Pain", "Appetite Loss", "Insomnia", "Stress", "Headache"],
			 "positiveEffects": ["Relaxed", "Uplifted", "Anxious", "Drowsiness", "Hungry"],
			 "negativeEffects": ["Headache", "Dry Mouth", "Dry Eyes", "Dizzy", "Paranoid", "Munchies"],
			 "descriptionDetailed": "With a hearty, thick taste and pungent smell, Mars OG will take away your pains and easily put you to sleep.",
			 "descriptionAbbrev":  "With a hearty, thick taste and pungent smell, Mars OG will take away your pains and easily put you to sleep.",
			 "tags": ["Indica", "Mars OG", "Epilepsy"],
			 "imageUrl": "images/strains/mars-og_100x100.jpg"
			},
			{"strainId": 163,
			 "strainName": "White Rhino",
			 "strainType": "Indica",
			 "components": [
			 	{ 
			 		"name": "THC9", 
			 		"value": 19.51
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 0.14
			 	},
			 	{ 
			 		"name": "CBN", 
			 		"value": 0.01
			 	},
			 	{ 
			 		"name": "CBG", 
			 		"value": 0.38
			 	},
			 	{ 
			 		"name": "CBC", 
			 		"value": 0.01
			 	},
			 	{ 
			 		"name": "THCV", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCA", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THC8", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pulegone", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Myrcene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Caryophyllene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Limonene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Linalool", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Eucalyptol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pinene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol-4", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cymene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Apigenin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Quercetin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cannflavin A", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Beta-sitosterol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBL", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Humulene", 
			 		"value": 0.00
				},
				{ 
			 		"name": "Terpinolene", 
			 		"value": 0.00
				} 	
		 	], 
		 	"taste": ["Earthy", "Pungent", "Woody"],
		 	 "conditions": ["Stress", "Pain", "Insomnia", "Depression", "Appetite Loss"],
			 "positiveEffects": ["Relaxed", "Happy", "Drowsiness", "Euphoric", "Uplifted", "Drowsiness"],
			 "negativeEffects": ["Dry Mouth", "Dry Eyes", "Dizzy", "Headache", "Paranoid"],
			 "descriptionDetailed": "The buds give off a strong and heady high. White Rhino is one of the best types of marijuana for medicinal use since it has such a high THC content.",
			 "descriptionAbbrev":  "The buds give off a strong and heady high. White Rhino is one of the best types of marijuana for medicinal use since it has such a high THC content.",
			 "tags": [""],
			 "imageUrl": "images/strains/white-rhino_100x100.jpg"
			},
			{"strainId": 164,
			 "strainName": "Green Queen",
			 "strainType": "Hybrid",
			 "components": [
			 	{ 
			 		"name": "THC9", 
			 		"value": 0.50
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 15.00
			 	},
			 	{ 
			 		"name": "CBN", 
			 		"value": 0.07
			 	},
			 	{ 
			 		"name": "CBG", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBC", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCV", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCA", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THC8", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pulegone", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Myrcene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Caryophyllene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Limonene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Linalool", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Eucalyptol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pinene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol-4", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cymene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Apigenin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Quercetin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cannflavin A", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Beta-sitosterol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBL", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Humulene", 
			 		"value": 0.00
				},
				{ 
			 		"name": "Terpinolene", 
			 		"value": 0.00
				} 	
		 	], 
		 	"taste": ["Pungent", "Sweet", "Woody"],
		 	 "conditions": ["Stress", "Pain", "Depression", "Muscle Spasms", "Insomnia"],
			 "positiveEffects": ["Happy", "Energetic", "Uplifted", "Conversational", "Euphoric", "Drowsiness"],
			 "negativeEffects": ["Dry Mouth", "Dry Eyes", "Anxious", "Headache", "Dizzy", "Drowsiness"],
			 "descriptionDetailed": "Green Queen is gold and yellow in color and known to provide a strong body buzz. Extremely stony but not lazy high at all. Great for a social meet up and just chillin as well.",
			 "descriptionAbbrev":  "Green Queen is gold and yellow in color and known to provide a strong body buzz. Extremely stony but not lazy high at all. Great for a social meet up and just chillin as well.",
			 "tags": ["Hybrid", "Cannatonic #4", "Epilepsy"],
			 "imageUrl": "images/strains/green-queen_100x100.jpg"
			},
			{"strainId": 165,
			 "strainName": "Green Dynamite",
			 "strainType": "Indica",
			 "components": [
			 	{ 
			 		"name": "THC9", 
			 		"value": 24.66
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 0.43
			 	},
			 	{ 
			 		"name": "CBN", 
			 		"value": 0.11
			 	},
			 	{ 
			 		"name": "CBG", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBC", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCV", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCA", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THC8", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pulegone", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Myrcene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Caryophyllene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Limonene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Linalool", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Eucalyptol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pinene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol-4", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cymene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Apigenin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Quercetin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cannflavin A", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Beta-sitosterol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBL", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Humulene", 
			 		"value": 0.00
				},
				{ 
			 		"name": "Terpinolene", 
			 		"value": 0.00
				} 	
		 	],   
		 	"taste": ["Grapefruit", "Earthy", "Grape"],
		 	 "conditions": ["PMS", "Insomnia", "Stress", "Pain", "Depression", "Muscle spasms"],
			 "positiveEffects": ["Relaxed", "Happy", "Euphoric", "Drowsiness", "Hungry"],
			 "negativeEffects": ["Dry Mouth", "Dry Eyes", "Headache", "Paranoid", "Dizzy"],
			 "descriptionDetailed": "Smells like grapefruit and produces and thick and fruity smoke.",
			 "descriptionAbbrev":  "Smells like grapefruit and produces and thick and fruity smoke.",
			 "tags": ["Indica", "Green Dynamite", "PMS"],
			 "imageUrl": "images/strains/dynamite_100x100.jpg"
			},
			{"strainId": 166,
			 "strainName": "J1",
			 "strainType": "Hybrid",
			 "components": [
			 	{ 
			 		"name": "THC9", 
			 		"value": 14.00
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 0.19
			 	},
			 	{ 
			 		"name": "CBN", 
			 		"value": 0.05
			 	},
			 	{ 
			 		"name": "CBG", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBC", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCV", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCA", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THC8", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pulegone", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Myrcene", 
			 		"value": 0.05
			 	},
			 	{ 
			 		"name": "Caryophyllene", 
			 		"value": 0.84
			 	},
			 	{ 
			 		"name": "Limonene", 
			 		"value": 0.05
			 	},
			 	{ 
			 		"name": "Linalool", 
			 		"value": 0.05
			 	},
			 	{ 
			 		"name": "Eucalyptol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pinene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol-4", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cymene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Apigenin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Quercetin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cannflavin A", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Beta-sitosterol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBL", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Humulene", 
			 		"value": 0.00
				},
				{ 
			 		"name": "Terpinolene", 
			 		"value": 0.00
				} 	
		 	],
		 	"taste": ["Citrus", "Sweet", "Pungent"], 
		 	 "conditions": ["ADD/ADHD", "Depression", "Migraines", "Pain", "Stress", "PMS", "Fatigue", "Headache"],
			 "positiveEffects": ["Happy", "Energetic", "Relaxed", "Creative"],
			 "negativeEffects": ["Dry Mouth", "Dry Eyes", "Dizzy", "Paranoid", "Anxious"],
			 "descriptionDetailed": "The flowers are emerald green and frosty with a sweet aroma resembling the unmistakable Jack Herer pungency. This strain's seemingly only flaw is the top-shelf price that tends to come with its exceptional quality.",
			 "descriptionAbbrev":  "Best known for its strong, uplifting, Clear headed buzz that allows for mobility.",
			 "tags": ["Hybrid", "J1", "PMS"],
			 "imageUrl": "images/strains/j1_100x100.jpg"
			},
			{"strainId": 167,
			 "strainName": "Kryptonite",
			 "strainType": "Indica",
			 "components": [
			 	{ 
			 		"name": "THC9", 
			 		"value": 18.60
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 0.47
			 	},
			 	{ 
			 		"name": "CBN", 
			 		"value": 0.04
			 	},
			 	{ 
			 		"name": "CBG", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBC", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCV", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCA", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THC8", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pulegone", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Myrcene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Caryophyllene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Limonene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Linalool", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Eucalyptol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pinene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol-4", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cymene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Apigenin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Quercetin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cannflavin A", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Beta-sitosterol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBL", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Humulene", 
			 		"value": 0.00
				},
				{ 
			 		"name": "Terpinolene", 
			 		"value": 0.00
				} 	
		 	], 
		 	"taste": ["Sweet", "Pungent", "Earthy"],
		 	 "conditions": ["PMS", "Stress", "Pain", "Insomnia", "Depression", "Cramps", "Fibromyalgia"],
			 "positiveEffects": ["Relaxed", "Happy", "Drowsiness", "Euphoric", "Hungry"],
			 "negativeEffects": ["Dry Mouth", "Dry Eyes", "Dizzy", "Paranoid", "Headache", "Munchies"],
			 "descriptionDetailed": "Capable of sending users into deep indica medicated state, the high can be almost immediate and Long Lasting.",
			 "descriptionAbbrev":  "Capable of sending users into deep indica medicated state, the high can be almost immediate and Long Lasting.",
			 "tags": ["Indica", "Krytonite", "PMS"],
			 "imageUrl": "images/strains/kryptonite_100x100.jpg"
			},
			{"strainId": 168,
			 "strainName": "Master Kush",
			 "strainType": "Indica",
			 "components": [
			 	{ 
			 		"name": "THC9", 
			 		"value": 21.20
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 0.27
			 	},
			 	{ 
			 		"name": "CBN", 
			 		"value": 0.04
			 	},
			 	{ 
			 		"name": "CBG", 
			 		"value": 0.08
			 	},
			 	{ 
			 		"name": "CBC", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCV", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCA", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THC8", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pulegone", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Myrcene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Caryophyllene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Limonene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Linalool", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Eucalyptol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pinene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol-4", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cymene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Apigenin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Quercetin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cannflavin A", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Beta-sitosterol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBL", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Humulene", 
			 		"value": 0.00
				},
				{ 
			 		"name": "Terpinolene", 
			 		"value": 0.00
				} 	
		 	], 
		 	"taste": ["Earthy", "Pungent", "Sweet"],
		 	 "conditions": ["PMS", "Stress", "Insomnia", "Depression", "Appetite Loss"],
			 "positiveEffects": ["Relaxed", "Euphoric", "Happy", "Drowsiness", "Uplifted"],
			 "negativeEffects": ["Dry Mouth", "Dry Eyes", "Paranoid", "Dizzy", "Headache"],
			 "descriptionDetailed": "With Master Kush, you can anticipate full-body relaxation coupled with sharpened sensory awareness that can bring out the best of any activity.",
			 "descriptionAbbrev":  "With Master Kush, you can anticipate full-body relaxation coupled with sharpened sensory awareness that can bring out the best of any activity.",
			 "tags": ["Indica", "Master Kush", "Kush", "PMS"],
			 "imageUrl": "images/strains/master-kush_100x100.jpg"
			},
			{"strainId": 169,
			 "strainName": "Black Magic Kush",
			 "strainType": "Indica",
			 "components": [
			 	{ 
			 		"name": "THC9", 
			 		"value": 26.73
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 0.10
			 	},
			 	{ 
			 		"name": "CBN", 
			 		"value": 0.01
			 	},
			 	{ 
			 		"name": "CBG", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBC", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCV", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCA", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THC8", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pulegone", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Myrcene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Caryophyllene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Limonene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Linalool", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Eucalyptol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pinene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol-4", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cymene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Apigenin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Quercetin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cannflavin A", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Beta-sitosterol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBL", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Humulene", 
			 		"value": 0.00
				},
				{ 
			 		"name": "Terpinolene", 
			 		"value": 0.00
				} 	
		 	], 
		 	"taste": ["Sweet", "Fruity"],
		 	 "conditions": ["Stress", "Pain", "Insomnia"],
			 "positiveEffects": ["Relaxed", "Drowsiness"],
			 "negativeEffects": ["Drowsiness"],
			 "descriptionDetailed": " If you can manage to stay awake, the body buzz is quite pleasant, and does tend to help with body aches and pains.",
			 "descriptionAbbrev":  " If you can manage to stay awake, the body buzz is quite pleasant, and does tend to help with body aches and pains.",
			 "tags": ["Indica", "Black Magic Kush", "Kush", "Stress"],
			 "imageUrl": "images/strains/black-magic-kush.jpg"
			},
			{"strainId": 170,
			 "strainName": "Blackberry Kush",
			 "strainType": "Indica",
			 "components": [
			 	{ 
			 		"name": "THC9", 
			 		"value": 22.90
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 0.27
			 	},
			 	{ 
			 		"name": "CBN", 
			 		"value": 0.19
			 	},
			 	{ 
			 		"name": "CBG", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBC", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCV", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCA", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THC8", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pulegone", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Myrcene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Caryophyllene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Limonene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Linalool", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Eucalyptol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pinene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol-4", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cymene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Apigenin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Quercetin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cannflavin A", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Beta-sitosterol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBL", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Humulene", 
			 		"value": 0.00
				},
				{ 
			 		"name": "Terpinolene", 
			 		"value": 0.00
				} 	
		 	], 
		 	"taste": ["Berry", "Grape", "Lavender"],
		 	 "conditions": ["Anorexia", "Anxiety", "Insomnia", "Pain", "Stress"],
			 "positiveEffects": ["Happy", "Relaxed", "Creative", "Drowsiness", "Euphoric", "Uplifted"],
			 "negativeEffects": ["Dry Mouth", "Dry Eyes", "Headache", "Dizzy", "Paranoid", "Drowsiness"],
			 "descriptionDetailed": "Blackberry Kush tends to have a hashy, jet fuel smell and taste that is balanced by sweet berries.",
			 "descriptionAbbrev":  "Often recommended for the treatment of pain thanks to its strong indica body effects.",
			 "tags": ["Berry", "Sweet", "Earthy"],
			 "imageUrl": "images/strains/blackberry-kush_100x100.jpg"
			},
			{"strainId": 171,
			 "strainName": "Blue Diesel",
			 "strainType": "Hybrid",
			 "components": [
			 	{ 
			 		"name": "THC9", 
			 		"value": 22.14
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 0.41
			 	},
			 	{ 
			 		"name": "CBN", 
			 		"value": 0.03
			 	},
			 	{ 
			 		"name": "CBG", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBC", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCV", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCA", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THC8", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pulegone", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Myrcene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Caryophyllene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Limonene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Linalool", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Eucalyptol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pinene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol-4", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cymene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Apigenin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Quercetin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cannflavin A", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Beta-sitosterol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBL", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Humulene", 
			 		"value": 0.00
				},
				{ 
			 		"name": "Terpinolene", 
			 		"value": 0.00
				} 	
		 	],
		 	"taste": ["Blueberry", "Sweet", "Berry"],
		 	 "conditions": ["Stress", "Pain", "Depression", "Headache", "Appetite Loss"],
			 "positiveEffects": ["Relaxed", "Happy", "Euphoric", "Uplifted", "Creative"],
			 "negativeEffects": ["Dry Mouth", "Dizzy", "Dry Eyes", "Paranoid", "Headache"],
			 "descriptionDetailed": "This strain is optimal for daytime and comes with little to no fatigue or increased appetite, making it a desirable option for medical marijuana patients.",
			 "descriptionAbbrev":  "This strain is optimal for daytime and comes with little to no fatigue or increased appetite, making it a desirable option for medical marijuana patients.",
			 "tags": ["Hybrid", "Blue Diesel", "Stress"],
			 "imageUrl": "images/strains/blue-diesel_100x100.jpg"
			}, 
			{"strainId": 172,
			 "strainName": "Blue Haze",
			 "strainType": "Hybrid",
			 "components": [
			 	{ 
			 		"name": "THC9", 
			 		"value": 14.81
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 0.37
			 	},
			 	{ 
			 		"name": "CBN", 
			 		"value": 0.03
			 	},
			 	{ 
			 		"name": "CBG", 
			 		"value": 0.35
			 	},
			 	{ 
			 		"name": "CBC", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCV", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCA", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THC8", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pulegone", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Myrcene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Caryophyllene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Limonene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Linalool", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Eucalyptol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pinene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol-4", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cymene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Apigenin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Quercetin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cannflavin A", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Beta-sitosterol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBL", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Humulene", 
			 		"value": 0.00
				},
				{ 
			 		"name": "Terpinolene", 
			 		"value": 0.00
				} 	
		 	], 
		 	"taste": ["Earthy", "Blueberry", "Pine"],
		 	 "conditions": ["Anorexia", "Anxiety", "Insomnia", "Appetite Loss", "Pain", "Stress", "Depression", "Headache"],
			 "positiveEffects": ["Happy", "Relaxed", "Creative", "Uplifted", "Euphoric"],
			 "negativeEffects": ["Dry Mouth", "Dry Eyes", "Dizzy", "Anxious", "Paranoid", "Munchies"],
			 "descriptionDetailed": "Blue Haze is a great candidate for the regular consumer's arsenal as it is appropriate for a broad spectrum of activities and provides the optimal balance between cerebral and physical effects.",
			 "descriptionAbbrev":  "Has a pleasing taste and scent, and its furry dense buds produce full-bodied effects.",
			 "tags": ["Blueberry", "Sweet", "Woody"],
			 "imageUrl": "images/strains/blue-haze_100x100.jpg"
			},
			{"strainId": 173,
			 "strainName": "Brutus OG",
			 "strainType": "Indica",
			 "components": [
			 	{ 
			 		"name": "THC9", 
			 		"value": 25.50
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 0.32
			 	},
			 	{ 
			 		"name": "CBN", 
			 		"value": 0.04
			 	},
			 	{ 
			 		"name": "CBG", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBC", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCV", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCA", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THC8", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pulegone", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Myrcene", 
			 		"value": 0.17
			 	},
			 	{ 
			 		"name": "Caryophyllene", 
			 		"value": 2.46
			 	},
			 	{ 
			 		"name": "Limonene", 
			 		"value": 2.70
			 	},
			 	{ 
			 		"name": "Linalool", 
			 		"value": 1.92
			 	},
			 	{ 
			 		"name": "Eucalyptol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pinene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol-4", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cymene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Apigenin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Quercetin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cannflavin A", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Beta-sitosterol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBL", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Humulene", 
			 		"value": 0.00
				},
				{ 
			 		"name": "Terpinolene", 
			 		"value": 0.00
				} 	
		 	],
		 	"taste": ["Citrus", "Lemon", "Pine", "Diesel"],
		 	 "conditions": ["Stress", "Anxiety", "Arthritis", "Chronic Aches", "Muscle Spasms", "Pain"],
			 "positiveEffects": ["Happy", "Relaxed"],
			 "negativeEffects": ["Drowsiness"],
			 "descriptionDetailed": "Brutus is characterized by its tight, dense bud structure, eye catching washes of resinous trichomes, and particularly pungent aroma consisting of sharp citrus notes, fuel, and pine.",
			 "descriptionAbbrev":  "Exceptionally powerful and one of the finest choices to be found for those seeking to melt away severe pain and muscle tension and perfect for those in  need of a potent sleeping aid",
			 "tags": ["Lemon", "Pine"],
			 "imageUrl": "images/strains/brutus-og-3.png"
			},
			{"strainId": 174,
			 "strainName": "Bubba Kush",
			 "strainType": "Indica",
			 "components": [
			 	{ 
			 		"name": "THC9", 
			 		"value": 14.29
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 0.09
			 	},
			 	{ 
			 		"name": "CBN", 
			 		"value": 0.58
			 	},
			 	{ 
			 		"name": "CBG", 
			 		"value": 0.28
			 	},
			 	{ 
			 		"name": "CBC", 
			 		"value": 0.05
			 	},
			 	{ 
			 		"name": "THCV", 
			 		"value": 0.30
			 	},
			 	{ 
			 		"name": "THCA", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THC8", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pulegone", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Myrcene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Caryophyllene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Limonene", 
			 		"value": 0.07
			 	},
			 	{ 
			 		"name": "Linalool", 
			 		"value": 0.01
			 	},
			 	{ 
			 		"name": "Eucalyptol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pinene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol-4", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cymene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Apigenin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Quercetin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cannflavin A", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Beta-sitosterol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBL", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Humulene", 
			 		"value": 0.00
				},
				{ 
			 		"name": "Terpinolene", 
			 		"value": 0.00
				} 	
		 	],   
		 	"taste": ["Earthy", "Sweet", "Pungent"],
		 	 "conditions": ["Anorexia", "Anxiety", "Insomnia", "Appetite Loss", "Pain", "Stress"],
			 "positiveEffects": ["Happy", "Relaxed", "Drowsiness", "Hungry", "Euphoric"],
			 "negativeEffects": ["Munchies", "Drowsiness", "Dry Mouth", "Dry Eyes", "Dizzy", "Paranoid", "Headache"],
			 "descriptionDetailed": "Bubba Kush exhibits a distinctive, bulky bud structure with hues that range from forest green to pale purple. Its effects may begin focused in the head, but it isn't long before the buzz reaches the rest of the body.",
			 "descriptionAbbrev":  "A perfect go-to strain for evening relaxation, restful sleep, or a lazy weekend at home.",
			 "tags": ["Indica", "Bubba Kush", "Kush", "Stress"],
			 "imageUrl": "images/strains/bubba-kush_100x100.jpg"
			},
			{"strainId": 175,
			 "strainName": "Cheese",
			 "strainType": "Hybrid",
			 "components": [
			 	{ 
			 		"name": "THC9", 
			 		"value": 15.48
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 0.25
			 	},
			 	{ 
			 		"name": "CBN", 
			 		"value": 0.67
			 	},
			 	{ 
			 		"name": "CBG", 
			 		"value": 0.28
			 	},
			 	{ 
			 		"name": "CBC", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCV", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCA", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THC8", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pulegone", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Myrcene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Caryophyllene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Limonene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Linalool", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Eucalyptol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pinene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol-4", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cymene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Apigenin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Quercetin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cannflavin A", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Beta-sitosterol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBL", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Humulene", 
			 		"value": 0.00
				},
				{ 
			 		"name": "Terpinolene", 
			 		"value": 0.00
				} 	
		 	],
		 	"taste": ["Cheese", "Pungent", "Earthy"],
		 	 "conditions": ["Anorexia", "Depression", "Insomnia", "Appetite Loss", "Pain", "Stress"],
			 "positiveEffects": ["Happy", "Relaxed", "Euphoric", "Uplifted", "Hungry"],
			 "negativeEffects": ["Dry Mouth", "Dry Eyes", "Dizzy", "Paranoid", "Headache", "Munchies"],
			 "descriptionDetailed": "Cheese is an indica-dominant hybrid from the U.K. that has achieved widespread popularity for its unique flavor and consistent potency.",
			 "descriptionAbbrev":  "Well-known for its relaxed, happy effects that gently ease you into a blissful state of mind.",
			 "tags": ["Hybrid", "Cheese", "Stress"],
			 "imageUrl": "images/strains/cheese_100x100.jpg"
			}, 
			{"strainId": 176,
			 "strainName": "Cinderella 99",
			 "strainType": "Hybrid",
			 "components": [
			 	{ 
			 		"name": "THC9", 
			 		"value": 10.14
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 0.25
			 	},
			 	{ 
			 		"name": "CBN", 
			 		"value": 0.18
			 	},
			 	{ 
			 		"name": "CBG", 
			 		"value": 0.02
			 	},
			 	{ 
			 		"name": "CBC", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCV", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCA", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THC8", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pulegone", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Myrcene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Caryophyllene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Limonene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Linalool", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Eucalyptol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pinene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol-4", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cymene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Apigenin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Quercetin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cannflavin A", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Beta-sitosterol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBL", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Humulene", 
			 		"value": 0.00
				},
				{ 
			 		"name": "Terpinolene", 
			 		"value": 0.00
				} 	
		 	],   
		 	"taste": ["Citrus", "Sweet", "Tropical"],
		 	 "conditions": ["ADD/ADHD", "Anorexia", "Anxiety", "Arthritis", "Depression", "Appetite Loss", "Fatigue", "Pain", "PMS", "Stress"],
			 "positiveEffects": ["Happy", "Energetic", "Focused", "Relaxed", "Creative"],
			 "negativeEffects": ["Dry Mouth", "Dry Eyes", "Paranoid", "Dizzy", "Anxious", "Munchies"],
			 "descriptionDetailed": "Be careful not to underestimate her or you may pass out or become paranoid.  Cinderella 99 is a sativa-dominant strain and provides all the good sativa benefits.",
			 "descriptionAbbrev":  "Great for daytime use and provides plenty of energy",
			 "tags": ["Hybrid", "Cinderella 99", "Stress"],
			 "imageUrl": "images/strains/cinderella-99_100x100.jpg"
			}, 
			{"strainId": 177,
			 "strainName": "Diablo Haze",
			 "strainType": "Indica",
			 "components": [
			 	{ 
			 		"name": "THC9", 
			 		"value": 27.29
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 0.43
			 	},
			 	{ 
			 		"name": "CBN", 
			 		"value": 0.02
			 	},
			 	{ 
			 		"name": "CBG", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBC", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCV", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCA", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THC8", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pulegone", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Myrcene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Caryophyllene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Limonene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Linalool", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Eucalyptol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pinene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol-4", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cymene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Apigenin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Quercetin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cannflavin A", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Beta-sitosterol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBL", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Humulene", 
			 		"value": 0.00
				},
				{ 
			 		"name": "Terpinolene", 
			 		"value": 0.00
				} 	
		 	],
		 	"taste": ["Berry", "Sweet", "Spicy", "Herbal"],
		 	 "conditions": ["Stress", "Pain", "Insomnia", "Depression", "Nausea"],
			 "positiveEffects": ["Relaxed", "Happy", "Euphoric", "Drowsiness", "Tingly"],
			 "negativeEffects": ["Dry Mouth", "Dry Eyes", "Dizzy", "Headache", "Paranoid"],
			 "descriptionDetailed": "This indica has a purple hue, fruity and spicy flavors.",
			 "descriptionAbbrev":  "This indica has a purple hue, fruity and spicy flavors.",
			 "tags": ["Indica", "Diablo Haze", "Haze", "Stress"],
			 "imageUrl": "images/strains/diablo_100x100.jpg"
			},
			{"strainId": 177,
			 "strainName": "Diamond OG",
			 "strainType": "Indica",
			 "components": [
			 	{ 
			 		"name": "THC9", 
			 		"value": 22.95
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 0.39
			 	},
			 	{ 
			 		"name": "CBN", 
			 		"value": 0.11
			 	},
			 	{ 
			 		"name": "CBG", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBC", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCV", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCA", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THC8", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pulegone", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Myrcene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Caryophyllene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Limonene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Linalool", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Eucalyptol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pinene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol-4", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cymene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Apigenin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Quercetin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cannflavin A", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Beta-sitosterol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBL", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Humulene", 
			 		"value": 0.00
				},
				{ 
			 		"name": "Terpinolene", 
			 		"value": 0.00
				} 	
		 	],
		 	"taste": ["Sweet", "Pungent", "Earthy"],
		 	 "conditions": ["Stress", "Pain", "Insomnia", "Muscle Spasms", "Depression"],
			 "positiveEffects": ["Drowsiness", "Relaxed", "Happy", "Euphoric", "Giggly"],
			 "negativeEffects": ["Dry Eyes", "Dry Mouth", "Dizzy", "Paranoid", "Headache"],
			 "descriptionDetailed": "A true indica, this strain induces full-body relaxation that nixes pain and muscle spasms before settling into an overall laziness.",
			 "descriptionAbbrev":  "A true indica, this strain induces full-body relaxation that nixes pain and muscle spasms before settling into an overall laziness.",
			 "tags": ["Indica", "Diamond OG", "OG", "Stress"],
			 "imageUrl": "images/strains/diamond-og_100x100.jpg"
			},
			{"strainId": 178,
			 "strainName": "Grandaddy Purple",
			 "strainType": "Indica",
			 "components": [
			 	{ 
			 		"name": "THC9", 
			 		"value": 18.93
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 0.59
			 	},
			 	{ 
			 		"name": "CBN", 
			 		"value": 0.08
			 	},
			 	{ 
			 		"name": "CBG", 
			 		"value": 0.50
			 	},
			 	{ 
			 		"name": "CBC", 
			 		"value": 0.16
			 	},
			 	{ 
			 		"name": "THCV", 
			 		"value": 0.20
			 	},
			 	{ 
			 		"name": "THCA", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THC8", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pulegone", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Myrcene", 
			 		"value": 1.00
			 	},
			 	{ 
			 		"name": "Caryophyllene", 
			 		"value": 0.20
			 	},
			 	{ 
			 		"name": "Limonene", 
			 		"value": 0.12
			 	},
			 	{ 
			 		"name": "Linalool", 
			 		"value": 0.09
			 	},
			 	{ 
			 		"name": "Eucalyptol", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Pinene", 
			 		"value": 0.30
			 	},
			 	{ 
			 		"name": "Terpineol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol-4", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cymene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Apigenin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Quercetin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cannflavin A", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Beta-sitosterol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBL", 
			 		"value": 0.10
			 	},
			 	{ 
			 		"name": "Humulene", 
			 		"value": 0.00
				},
				{ 
			 		"name": "Terpinolene", 
			 		"value": 0.00
				} 	
		 	],   
		 	"taste": ["Grape", "Berry", "Sweet"],
		 	 "conditions": ["Anorexia", "Anxiety", "Appetite Loss", "Muscle Spasms", "Pain", "Insomnia", "Depression", "Stress"],
			 "positiveEffects": ["Happy", "Relaxed", "Drowsiness", "Euphoric", "Hungry"],
			 "negativeEffects": ["Munchies", "Dry Mouth", "Dry Eyes", "Dizzy", "Paranoid", "Headache"],
			 "descriptionDetailed": "Its potent psychoactive effects are clearly detectable in both mind and body, delivering a fusion of cerebral euphoria and physical relaxation.",
			 "descriptionAbbrev":  "The taste is fruity like grapes and so is the smell.",
			 "tags": ["Grapes"],
			 "imageUrl": "images/strains/grandaddy-purple.jpg"
			},
			{"strainId": 179,
			 "strainName": "Fire OG",
			 "strainType": "Hybrid",
			 "components": [
			 	{ 
			 		"name": "THC9", 
			 		"value": 21.00
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 0.17
			 	},
			 	{ 
			 		"name": "CBN", 
			 		"value": 0.02
			 	},
			 	{ 
			 		"name": "CBG", 
			 		"value": 0.60
			 	},
			 	{ 
			 		"name": "CBC", 
			 		"value": 0.10
			 	},
			 	{ 
			 		"name": "THCV", 
			 		"value": 0.13
			 	},
			 	{ 
			 		"name": "THCA", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THC8", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pulegone", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Myrcene", 
			 		"value": 0.60
			 	},
			 	{ 
			 		"name": "Caryophyllene", 
			 		"value": 0.14
			 	},
			 	{ 
			 		"name": "Limonene", 
			 		"value": 0.20
			 	},
			 	{ 
			 		"name": "Linalool", 
			 		"value": 0.20
			 	},
			 	{ 
			 		"name": "Eucalyptol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pinene", 
			 		"value": 0.14
			 	},
			 	{ 
			 		"name": "Terpineol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol-4", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cymene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Apigenin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Quercetin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cannflavin A", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Beta-sitosterol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBL", 
			 		"value": 0.20
			 	},
			 	{ 
			 		"name": "Humulene", 
			 		"value": 0.00
				},
				{ 
			 		"name": "Terpinolene", 
			 		"value": 0.00
				} 	
		 	],
		 	"taste": ["Earthy", "Pungent", "Pine"],
		 	 "conditions": ["Stress", "Depression", "Pain", "Insomnia", "Lack of Appetite"],
			 "positiveEffects": ["Happy", "Relaxed", "Euphoric", "Uplifted", "Creative"],
			 "negativeEffects": ["Dry Mouth", "Dry Eyes", "Paranoid", "Dizzy", "Headache"],
			 "descriptionDetailed": "Known for being one of the strongest of the OG strains, Fire OG has a strong scent similar to Lemon Pledge and an effect that can last up to 3 hours.",
			 "descriptionAbbrev":  "Known for being one of the strongest of the OG strains, Fire OG has a strong scent similar to Lemon Pledge and an effect that can last up to 3 hours.",
			 "tags": ["Hybrid", "Fire OG", "OG", "Stress", "Depression", "Pain", "Insomnia", "Lack of Appetite", "Happy", "Relaxed", "Euphoric", "Uplifted", "Creative"],
			 "imageUrl": "images/strains/fire-og_100x100.jpg"
			}, 
			{"strainId": 180,
			 "strainName": "Girl Scout Cookies",
			 "strainType": "Hybrid",
			 "components": [
			 	{ 
			 		"name": "THC9", 
			 		"value": 22.00
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 0.12
			 	},
			 	{ 
			 		"name": "CBN", 
			 		"value": 0.03
			 	},
			 	{ 
			 		"name": "CBG", 
			 		"value": 1.30
			 	},
			 	{ 
			 		"name": "CBC", 
			 		"value": 0.30
			 	},
			 	{ 
			 		"name": "THCV", 
			 		"value": 0.20
			 	},
			 	{ 
			 		"name": "THCA", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THC8", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pulegone", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Myrcene", 
			 		"value": 0.20
			 	},
			 	{ 
			 		"name": "Caryophyllene", 
			 		"value": 0.40
			 	},
			 	{ 
			 		"name": "Limonene", 
			 		"value": 0.30
			 	},
			 	{ 
			 		"name": "Linalool", 
			 		"value": 0.20
			 	},
			 	{ 
			 		"name": "Eucalyptol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pinene", 
			 		"value": 0.13
			 	},
			 	{ 
			 		"name": "Terpineol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol-4", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cymene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Apigenin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Quercetin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cannflavin A", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Beta-sitosterol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBL", 
			 		"value": 0.13
			 	},
			 	{ 
			 		"name": "Humulene", 
			 		"value": 0.00
				},
				{ 
			 		"name": "Terpinolene", 
			 		"value": 0.00
				} 	
		 	], 
		 	"taste": ["Sweet", "Earthy", "Pungent"],
		 	 "conditions": ["Stress", "Pain", "Depression", "Insomnia", "Lack of Appetite"],
			 "positiveEffects": ["Happy", "Euphoric", "Relaxed", "Uplifted", "Creative"],
			 "negativeEffects": ["Dry Mouth", "Dry Eyes", "Dizzy", "Paranoid",  "Headache"],
			 "descriptionDetailed": "With a sweet and earthy aroma, Girl Scout Cookies launches you to euphoria's top floor where full-body relaxation meets a time-bending cerebral space.",
			 "descriptionAbbrev":  "With a sweet and earthy aroma, Girl Scout Cookies launches you to euphoria's top floor where full-body relaxation meets a time-bending cerebral space.",
			 "tags": ["Hybrid", "Girl Scout Cookies", "Stress", "Pain", "Depression"],
			 "imageUrl": "images/strains/girl-scout-cookies_100x100.jpg"
			},
			{"strainId": 181,
			 "strainName": "Grape Ape",
			 "strainType": "Indica",
			 "components": [
			 	{ 
			 		"name": "THC9", 
			 		"value": 22.00
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 0.03
			 	},
			 	{ 
			 		"name": "CBN", 
			 		"value": 0.01
			 	},
			 	{ 
			 		"name": "CBG", 
			 		"value": 0.50
			 	},
			 	{ 
			 		"name": "CBC", 
			 		"value": 0.05
			 	},
			 	{ 
			 		"name": "THCV", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCA", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THC8", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pulegone", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Myrcene", 
			 		"value": 1.00
			 	},
			 	{ 
			 		"name": "Caryophyllene", 
			 		"value": 0.40
			 	},
			 	{ 
			 		"name": "Limonene", 
			 		"value": 0.06
			 	},
			 	{ 
			 		"name": "Linalool", 
			 		"value": 0.10
			 	},
			 	{ 
			 		"name": "Eucalyptol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pinene", 
			 		"value": 0.20
			 	},
			 	{ 
			 		"name": "Terpineol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol-4", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cymene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Apigenin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Quercetin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cannflavin A", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Beta-sitosterol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBL", 
			 		"value": 0.16
			 	},
			 	{ 
			 		"name": "Humulene", 
			 		"value": 0.00
				},
				{ 
			 		"name": "Terpinolene", 
			 		"value": 0.00
				} 	
		 	],   
		 	"taste": ["Grape", "Sweet", "Berry"],
		 	 "conditions": ["Stress", "Pain", "Depression", "Insomnia", "Lack of Appetite"],
			 "positiveEffects": ["Relaxed", "Happy", "Drowsiness", "Euphoric", "Hungry"],
			 "negativeEffects": ["Dry Mouth", "Dry Eyes", "Dizzy", "Paranoid",  "Headache", "Munchies"],
			 "descriptionDetailed": "Named for its distinct grape-like smell, this indica is known for providing carefree relaxation that can help soothe pain, stress, and anxiety. ",
			 "descriptionAbbrev":  "Named for its distinct grape-like smell, this indica is known for providing carefree relaxation that can help soothe pain, stress, and anxiety. ",
			 "tags": ["Indica", "Grape Ape", "Grape", "Pain", "Stress", "Insomnia", "Depression", "Nausea"],
			 "imageUrl": "images/strains/grape-ape_100x100.jpg"
			},
			{"strainId": 182,
			 "strainName": "Headband",
			 "strainType": "Hybrid",
			 "components": [
			 	{ 
			 		"name": "THC9", 
			 		"value": 22.00
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 0.03
			 	},
			 	{ 
			 		"name": "CBN", 
			 		"value": 0.01
			 	},
			 	{ 
			 		"name": "CBG", 
			 		"value": 0.50
			 	},
			 	{ 
			 		"name": "CBC", 
			 		"value": 0.05
			 	},
			 	{ 
			 		"name": "THCV", 
			 		"value": 0.12
			 	},
			 	{ 
			 		"name": "THCA", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THC8", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pulegone", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Myrcene", 
			 		"value": 1.00
			 	},
			 	{ 
			 		"name": "Caryophyllene", 
			 		"value": 0.40
			 	},
			 	{ 
			 		"name": "Limonene", 
			 		"value": 0.06
			 	},
			 	{ 
			 		"name": "Linalool", 
			 		"value": 0.10
			 	},
			 	{ 
			 		"name": "Eucalyptol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pinene", 
			 		"value": 0.20
			 	},
			 	{ 
			 		"name": "Terpineol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol-4", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cymene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Apigenin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Quercetin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cannflavin A", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Beta-sitosterol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBL", 
			 		"value": 0.16
			 	},
			 	{ 
			 		"name": "Humulene", 
			 		"value": 0.00
				},
				{ 
			 		"name": "Terpinolene", 
			 		"value": 0.00
				} 	
		 	],   
		 	"taste": ["Earthy", "Pungent", "Diesel"],
		 	 "conditions": ["Stress", "Depression", "Pain", "Insomnia", "Headache"],
			 "positiveEffects": ["Happy", "Relaxed", "Euphoric", "Uplifted", "Creative"],
			 "negativeEffects": ["Dry Mouth", "Dry Eyes", "Dizzy",  "Headache",  "Paranoid"],
			 "descriptionDetailed": "The smooth, creamy smoke is accented by flavors of lemons and diesel while the long-lasting effects are great for Pain relief, helping you to relax, and to combat elevated stress levels.",
			 "descriptionAbbrev":  "The smooth, creamy smoke is accented by flavors of lemons and diesel while the long-lasting effects are great for Pain relief, helping you to relax, and to combat elevated stress levels.",
			 "tags": ["Hybrid", "Headband", "Stress", "Depression", "Pain", "Insomnia", "Headache", "Happy", "Relaxed", "Euphoric", "Uplifted", "Creative"],
			 "imageUrl": "images/strains/headband_100x100.jpg"
			}, 
			{"strainId": 183,
			 "strainName": "Island Sweet Skunk",
			 "strainType": "Sativa",
			 "components": [
			 	{ 
			 		"name": "THC9", 
			 		"value": 18.00
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 0.05
			 	},
			 	{ 
			 		"name": "CBN", 
			 		"value": 0.01
			 	},
			 	{ 
			 		"name": "CBG", 
			 		"value": 0.70
			 	},
			 	{ 
			 		"name": "CBC", 
			 		"value": 0.04
			 	},
			 	{ 
			 		"name": "THCV", 
			 		"value": 0.15
			 	},
			 	{ 
			 		"name": "THCA", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THC8", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pulegone", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Myrcene", 
			 		"value": 0.60
			 	},
			 	{ 
			 		"name": "Caryophyllene", 
			 		"value": 0.16
			 	},
			 	{ 
			 		"name": "Limonene", 
			 		"value": 0.30
			 	},
			 	{ 
			 		"name": "Linalool", 
			 		"value": 0.03
			 	},
			 	{ 
			 		"name": "Eucalyptol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pinene", 
			 		"value": 0.50
			 	},
			 	{ 
			 		"name": "Terpineol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol-4", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cymene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Apigenin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Quercetin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cannflavin A", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Beta-sitosterol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBL", 
			 		"value": 0.12
			 	},
			 	{ 
			 		"name": "Humulene", 
			 		"value": 0.00
				},
				{ 
			 		"name": "Terpinolene", 
			 		"value": 0.00
				} 	
		 	], 
		 	"taste": ["Sweet", "Skunk", "Tropical"],
		 	 "conditions": ["Pain", "Stress", "Depression", "Fatigue", "Nausea"],
			 "positiveEffects": ["Happy", "Uplifted", "Euphoric", "Energetic", "Creative"],
			 "negativeEffects": ["Dry Mouth", "Dry Eyes", "Paranoid", "Dizzy",  "Headache"],
			 "descriptionDetailed": "Some varieties of Island Sweet Skunk have a heightened CBD content to help patients treating anxiety, inflammation, and muscle spasms.",
			 "descriptionAbbrev":  "Some varieties of Island Sweet Skunk have a heightened CBD content to help patients treating anxiety, inflammation, and muscle spasms.",
			 "tags": ["Sativa", "Island Sweet Skunk", "Skunk", "Pain", "Stress", "Depression", "Fatigue", "Nausea", "Happy", "Uplifted", "Euphoric", "Energetic", "Creative"],
			 "imageUrl": "images/strains/island-sweet-skunk_100x100.jpg"
			},
			{"strainId": 184,
			 "strainName": "LA Kush",
			 "strainType": "Hybrid",
			 "components": [
			 	{ 
			 		"name": "THC9", 
			 		"value": 21.00
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 0.04
			 	},
			 	{ 
			 		"name": "CBN", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBG", 
			 		"value": 0.80
			 	},
			 	{ 
			 		"name": "CBC", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCV", 
			 		"value": 0.15
			 	},
			 	{ 
			 		"name": "THCA", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THC8", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pulegone", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Myrcene", 
			 		"value": 0.30
			 	},
			 	{ 
			 		"name": "Caryophyllene", 
			 		"value": 0.20
			 	},
			 	{ 
			 		"name": "Limonene", 
			 		"value": 0.16
			 	},
			 	{ 
			 		"name": "Linalool", 
			 		"value": 0.10
			 	},
			 	{ 
			 		"name": "Eucalyptol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pinene", 
			 		"value": 0.04
			 	},
			 	{ 
			 		"name": "Terpineol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol-4", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cymene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Apigenin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Quercetin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cannflavin A", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Beta-sitosterol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBL", 
			 		"value": 0.16
			 	},
			 	{ 
			 		"name": "Humulene", 
			 		"value": 0.00
				},
				{ 
			 		"name": "Terpinolene", 
			 		"value": 0.00
				} 	
		 	], 
		 	"taste": ["Nutty", "Menthol", "Mint"],
		 	 "conditions": ["Stress", "Fatigue", "Insomnia", "Lack Of Appetite", "Pain"],
			 "positiveEffects": ["Happy", "Relaxed", "Euphoric", "Creative", "Uplifted"],
			 "negativeEffects": ["Anxious", "Dry Mouth"],
			 "descriptionDetailed": "If you are looking to alleviate stress or need a spark of creativity, look to LA Kush.",
			 "descriptionAbbrev":  "If you are looking to alleviate stress or need a spark of creativity, look to LA Kush.",
			 "tags": ["Hybrid", "LA Kush", "Kush", "Stress", "Fatigue", "Insomnia", "Lack Of Appetite", "Pain", "Happy", "Relaxed", "Euphoric", "Creative", "Uplifted"],
			 "imageUrl": "images/strains/la-kush_100x100.jpg"
			},
			{"strainId": 185,
			 "strainName": "Gorilla Glue #4",
			 "strainType": "Hybrid",
			 "components": [
			 	{ 
			 		"name": "THC9", 
			 		"value": 18.66
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBN", 
			 		"value": 0.13
			 	},
			 	{ 
			 		"name": "CBG", 
			 		"value": 0.48
			 	},
			 	{ 
			 		"name": "CBC", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCV", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCA", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THC8", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pulegone", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Myrcene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Caryophyllene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Limonene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Linalool", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Eucalyptol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pinene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol-4", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cymene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Apigenin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Quercetin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cannflavin A", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Beta-sitosterol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBL", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Humulene", 
			 		"value": 0.00
				},
				{ 
			 		"name": "Terpinolene", 
			 		"value": 0.00
				} 	
		 	], 
		 	"taste": ["Pine", "Pungent", "Diesel"],
		 	 "conditions": ["ADD/ADHD", "Anorexia", "Anxiety", "Arthritis", "Depression", "Fibromyalgia", "Muscle Spasms", "Appetite Loss","Pain", "Stress", "Headache"],
			 "positiveEffects": ["Happy", "Energetic", "Relaxed", "Creative"],
			 "negativeEffects": ["Dry Mouth", "Dry Eyes", "Dizzy", "Anxious", "Paranoid", "Munchies"],
			 "descriptionDetailed": "This chunky, conic, crystal-covered strain flowers in 56 to 60 days, and is said to come from Chemsis, Sour Dubb, and Chocolate Diesel.",
			 "descriptionAbbrev":  "A potent hybrid strain that won 1st place in the 2014 Los Angeles Cannabis Cup.",
			 "tags": ["Hybrid", "LA Kush", "Kush", "Stress", "Fatigue", "Insomnia", "Lack Of Appetite", "Pain", "Happy", "Relaxed", "Euphoric", "Creative", "Uplifted"],
			 "imageUrl": "images/strains/gorilla-glue--4_100x100.jpg"
			},
			{"strainId": 186,
			 "strainName": "Jack Frost",
			 "strainType": "Hybrid",
			 "components": [
			 	{ 
			 		"name": "THC9", 
			 		"value": 14.00
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBN", 
			 		"value": 0.07
			 	},
			 	{ 
			 		"name": "CBG", 
			 		"value": 0.59
			 	},
			 	{ 
			 		"name": "CBC", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCV", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCA", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THC8", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pulegone", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Myrcene", 
			 		"value": 0.27
			 	},
			 	{ 
			 		"name": "Caryophyllene", 
			 		"value": 1.85
			 	},
			 	{ 
			 		"name": "Limonene", 
			 		"value": 0.39
			 	},
			 	{ 
			 		"name": "Linalool", 
			 		"value": 0.13
			 	},
			 	{ 
			 		"name": "Eucalyptol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pinene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol-4", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cymene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Apigenin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Quercetin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cannflavin A", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Beta-sitosterol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBL", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Humulene", 
			 		"value": 0.00
				},
				{ 
			 		"name": "Terpinolene", 
			 		"value": 0.00
				} 
		 	], 
		 	"taste": ["Sweet", "Earthy", "Pungent"],
		 	 "conditions": ["ADD/ADHD", "Anorexia", "Anxiety", "Arthritis", "Asthma", "Depression", "Insomnia", "Pain", "Stress"],
			 "positiveEffects": ["Euphoric", "Happy", "Energetic", "Relaxed", "Creative"],
			 "negativeEffects": ["Dry Mouth", "Dry Eyes", "Dizzy", "Headache", "Paranoid"],
			 "descriptionDetailed": "Bred by Goldenseed, Jack Frost was developed over 5 years of persistence in order to improve on the potency and aroma of this strain.",
			 "descriptionAbbrev":  "Bred by Goldenseed, Jack Frost was developed over 5 years of persistence in order to improve on the potency and aroma of this strain.",
			 "tags": [],
			 "imageUrl": "images/strains/jack-frost_100x100.jpg"
			},
			 	{"strainId": 187,
			 "strainName": "Kali Mist",
			 "strainType": "Hybrid",
			 "components": [
			 	{ 
			 		"name": "THC9", 
			 		"value": 16.78
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBN", 
			 		"value": 1.34
			 	},
			 	{ 
			 		"name": "CBG", 
			 		"value": 0.24
			 	},
			 	{ 
			 		"name": "CBC", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCV", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCA", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THC8", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pulegone", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Myrcene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Caryophyllene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Limonene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Linalool", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Eucalyptol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pinene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol-4", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cymene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Apigenin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Quercetin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cannflavin A", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Beta-sitosterol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBL", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Humulene", 
			 		"value": 0.00
				},
				{ 
			 		"name": "Terpinolene", 
			 		"value": 0.00
				}
		 	],
		 	"taste": ["Sweet", "Earthy", "Flowery"],
			"conditions": ["ADD/ADHD", "Anorexia", "Anxiety", "Depression", "Fibromyalgia", "Appetite Loss", "Pain", "Stress"],
		 	"positiveEffects": ["Euphoric", "Happy", "Energetic", "Relaxed", "Creative"],
		 	"negativeEffects": ["Dry Mouth", "Dry Eyes", "Headache", "Dizzy", "Paranoid", "Munchies"],
		 	"descriptionDetailed": "This lightweight sativa is a perfect choice for consumers looking to maintain focus and productivity throughout their day.",
		 	"descriptionAbbrev":  "Known to deliver Clear headed, energetic effects that can verge on psychedelic at times",
		 	"tags": ["Kali Mist"],
		 	"imageUrl": "images/strains/kali-mist_100x100.jpg"
		},
			 	{"strainId": 188,
				 "strainName": "NY Sour Diesel",
				 "strainType": "Hybrid",
				 "components": [
			 	{ 
			 		"name": "THC9", 
			 		"value": 20.10
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBN", 
			 		"value": 0.03
			 	},
			 	{ 
			 		"name": "CBG", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBC", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCV", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCA", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THC8", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pulegone", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Myrcene", 
			 		"value": 0.04
			 	},
			 	{ 
			 		"name": "Caryophyllene", 
			 		"value": 1.12
			 	},
			 	{ 
			 		"name": "Limonene", 
			 		"value": 0.30
			 	},
			 	{ 
			 		"name": "Linalool", 
			 		"value": 0.20
			 	},
			 	{ 
			 		"name": "Eucalyptol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pinene", 
			 		"value": 0.04
			 	},
			 	{ 
			 		"name": "Terpineol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol-4", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cymene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Apigenin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Quercetin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cannflavin A", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Beta-sitosterol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBL", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Humulene", 
			 		"value": 0.00
				},
				{ 
			 		"name": "Terpinolene", 
			 		"value": 0.00
				}
		 	],
		 	"taste": ["Diesel", "Pungent", "Earthy"],
		 	"conditions": ["Anorexia", "Anxiety", "Asthma", "Depression", "Insomnia", "Appetite Loss", "Pain", "Stress"],
		 	"positiveEffects": ["Happy", "Uplifted", "Energetic", "Relaxed", "Creative"],
		 	"negativeEffects": ["Munchies", "Dry Mouth", "Dry Eyes", "Paranoid", "Dizzy", "Anxious"],
		 	"descriptionDetailed": "This fast-acting strain delivers energizing, dreamy cerebral effects that have pushed Sour Diesel to its legendary status.",
		 	"descriptionAbbrev":  "This fast-acting strain delivers energizing, dreamy cerebral effects that have pushed Sour Diesel to its legendary status.",
		 	"tags": [],
		 	"imageUrl": "images/strains/nyc-sour-diesel.jpg"
		},
	 	{"strainId": 189,
	 	"strainName": "Skunk #1",
	 	"strainType": "Hybrid",
	 	"components": [
			 	{ 
			 		"name": "THC9", 
			 		"value": 12.88
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBN", 
			 		"value": 0.98
			 	},
			 	{ 
			 		"name": "CBG", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBC", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCV", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCA", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THC8", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pulegone", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Myrcene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Caryophyllene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Limonene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Linalool", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Eucalyptol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pinene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol-4", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cymene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Apigenin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Quercetin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cannflavin A", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Beta-sitosterol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBL", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Humulene", 
			 		"value": 0.00
				},
				{ 
			 		"name": "Terpinolene", 
			 		"value": 0.00
				}	
		 	],
		 	"taste": ["Skunk", "Sweet", "Earthy"], 
		 	 "conditions": ["ADD/ADHD", "Anorexia", "Anxiety", "Depression", "Fibromyalgia", "Pain", "Stress"],
			 "positiveEffects": ["Happy", "Energetic", "Relaxed", "Sexual", "Uplifted", "Hungry"],
			 "negativeEffects": ["Dry Mouth", "Dry Eyes", "Paranoid", "Dizzy", "Headache", "Munchies"],
			 "descriptionDetailed": "This hybrid offers elevated creativity through its high-energy buzz, while stress and appetite loss melt away.",
			 "descriptionAbbrev":  "This hybrid offers elevated creativity through its high-energy buzz, while stress and appetite loss melt away.",
			 "tags": ["Skunk #1"],
			 "imageUrl": "images/strains/skunk--1_100x100.jpg"
			},
			{"strainId": 190,
			 	"strainName": "Snowcap",
			 	"strainType": "Hybrid",
			 	"components": [
			 	{ 
			 		"name": "THC9", 
			 		"value": 27.99
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBN", 
			 		"value": 0.06
			 	},
			 	{ 
			 		"name": "CBG", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBC", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCV", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCA", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THC8", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pulegone", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Myrcene", 
			 		"value": 0.89
			 	},
			 	{ 
			 		"name": "Caryophyllene", 
			 		"value": 2.50
			 	},
			 	{ 
			 		"name": "Limonene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Linalool", 
			 		"value": 0.03
			 	},
			 	{ 
			 		"name": "Eucalyptol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pinene", 
			 		"value": 0.05
			 	},
			 	{ 
			 		"name": "Terpineol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol-4", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cymene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Apigenin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Quercetin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cannflavin A", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Beta-sitosterol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBL", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Humulene", 
			 		"value": 0.00
				},
				{ 
			 		"name": "Terpinolene", 
			 		"value": 0.00
				}	
		 	], 
		 	"taste": ["Lemon", "Earthy", "Citrus"],
		 	 "conditions": ["Anxiety", "Depression", "Appetite Loss", "Pain", "Stress"],
			 "positiveEffects": ["Uplifted", "Happy", "Energetic", "Creative", "Focused"],
			 "negativeEffects": ["Dry Mouth", "Dry Eyes", "Paranoid", "Dizzy", "Anxious", "Munchies"],
			 "descriptionDetailed": "Snowcap is a potent sativa with a nice lemony scent with a hint of menthol.",
			 "descriptionAbbrev":  "The effects are decidedly cerebral and should trigger creativity, happiness, and a case of the giggles",
			 "tags": ["Snowcap"],
			 "imageUrl": "images/strains/snowcap_100x100.jpg"
			},
			{"strainId": 191,
			 	"strainName": "Super Silver Haze",
			 	"strainType": "Sativa",
			 	"components": [
			 	{ 
			 		"name": "THC9", 
			 		"value": 16.81
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBN", 
			 		"value": 0.58
			 	},
			 	{ 
			 		"name": "CBG", 
			 		"value": 0.45
			 	},
			 	{ 
			 		"name": "CBC", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCV", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCA", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THC8", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pulegone", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Myrcene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Caryophyllene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Limonene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Linalool", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Eucalyptol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pinene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol-4", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cymene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Apigenin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Quercetin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cannflavin A", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Beta-sitosterol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBL", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Humulene", 
			 		"value": 0.00
				},
				{ 
			 		"name": "Terpinolene", 
			 		"value": 0.00
				}	
		 	], 
		 	"taste": ["Citrus", "Sweet", "Pungent"],
		 	 "conditions": ["ADD/ADHD", "Anorexia","Anxiety","Nausea","Depression", "Appetite Loss", "Pain", "Stress", "Fatigue"],
			 "positiveEffects": ["Happy", "Uplifted","Euphoric", "Energetic", "Relaxed", "Creative"],
			 "negativeEffects": ["Dry Mouth", "Dry Eyes", "Dizzy", "Paranoid", "Anxious", "Munchies"],
			 "descriptionDetailed": "By crossing the genetics of Skunk, Northern Lights, and Haze, we are left with a beautiful, sticky sativa blend that boasts an energetic, long-lasting body high.",
			 "descriptionAbbrev":  "The uplifting effects are a great remedy for high stress levels or when suffering from a lack of appetite or nausea.",
			 "tags": ["Citrus", "Sweet", "Pungent"],
			 "imageUrl": "images/strains/super-silver-haze_100x100.jpg"
			},
			{"strainId": 192,
			 	"strainName": "Neptune OG",
			 	"strainType": "Indica",
			 	"components": [
			 	{ 
			 		"name": "THC9", 
			 		"value": 21.74
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBN", 
			 		"value": 0.07
			 	},
			 	{ 
			 		"name": "CBG", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBC", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCV", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCA", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THC8", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pulegone", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Myrcene", 
			 		"value": 0.04
			 	},
			 	{ 
			 		"name": "Caryophyllene", 
			 		"value": 1.02
			 	},
			 	{ 
			 		"name": "Limonene", 
			 		"value": 0.47
			 	},
			 	{ 
			 		"name": "Linalool", 
			 		"value": 0.54
			 	},
			 	{ 
			 		"name": "Eucalyptol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pinene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol-4", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cymene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Apigenin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Quercetin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cannflavin A", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Beta-sitosterol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBL", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Humulene", 
			 		"value": 0.00
				},
				{ 
			 		"name": "Terpinolene", 
			 		"value": 0.00
				}	
		 	], 
		 	"taste": ["Tropical", "Tree Fruit", "Pungent"],
		 	 "conditions": ["ADD/ADHD", "Anorexia", "Anxiety", "Arthritis", "Insomnia", "Appetite Loss", "Muscle Spasms", "Pain", "Stress"],
			 "positiveEffects": ["Happy", "Focused", "Relaxed", "Creative", "Drowsiness", "Hungry", "Euphoric"],
			 "negativeEffects": ["Dry Mouth", "Dizzy", "Dry Eyes", "Paranoid", "Anxious", "Munchies"],
			 "descriptionDetailed": "This strain also differs from typical indicas in its earthy aroma that delivers smoothly with low expansion. An established strain within the medicinal cannabis community, Neptune OG can be appropriately described as otherworldly.",
			 "descriptionAbbrev":  "Sets itself apart by its euphoric onset prior to the heavy, sedative effects, making it also useful for stress relief.",
			 "tags": [""],
			 "imageUrl": "images/strains/neptune-og_100x100.jpg"
			},
			{"strainId": 193,
			 	"strainName": "Organic OG",
			 	"strainType": "Hybrid",
			 	"components": [
			 	{ 
			 		"name": "THC9", 
			 		"value": 13.88
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBN", 
			 		"value": 0.12
			 	},
			 	{ 
			 		"name": "CBG", 
			 		"value": 2.79
			 	},
			 	{ 
			 		"name": "CBC", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCV", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCA", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THC8", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pulegone", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Myrcene", 
			 		"value": 0.04
			 	},
			 	{ 
			 		"name": "Caryophyllene", 
			 		"value": 1.02
			 	},
			 	{ 
			 		"name": "Limonene", 
			 		"value": 0.47
			 	},
			 	{ 
			 		"name": "Linalool", 
			 		"value": 0.54
			 	},
			 	{ 
			 		"name": "Eucalyptol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pinene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol-4", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cymene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Apigenin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Quercetin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cannflavin A", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Beta-sitosterol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBL", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Humulene", 
			 		"value": 0.00
				},
				{ 
			 		"name": "Terpinolene", 
			 		"value": 0.00
				}	
		 	], 
		 	"taste": ["Earthy", "Woody", "Pine"],
		 	 "conditions": ["ADD/ADHD", "Anxiety", "Depression", "Appetite Loss", "Pain", "Seizures", "Stress"],
			 "positiveEffects": ["Happy", "Focused", "Relaxed", "Creative"],
			 "negativeEffects": ["Munchies"],
			 "descriptionDetailed": "Immediate heavy indica stone that mixes a powerful body high with a racing head rush.",
			 "descriptionAbbrev":  "Immediate heavy indica stone that mixes a powerful body high with a racing head rush.",
			 "tags": [""],
			 "imageUrl": "images/strains/organic-og-kush.JPG"
			},
			{"strainId": 194,
			 	"strainName": "Kandy Kush",
			 	"strainType": "Hybrid",
			 	"components": [
			 	{ 
			 		"name": "THC9", 
			 		"value": 20.33
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 0.28
			 	},
			 	{ 
			 		"name": "CBN", 
			 		"value": 0.10
			 	},
			 	{ 
			 		"name": "CBG", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBC", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCV", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCA", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THC8", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pulegone", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Myrcene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Caryophyllene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Limonene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Linalool", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Eucalyptol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pinene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol-4", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cymene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Apigenin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Quercetin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cannflavin A", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Beta-sitosterol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBL", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Humulene", 
			 		"value": 0.00
				},
				{ 
			 		"name": "Terpinolene", 
			 		"value": 0.00
				}	
		 	], 
		 	"taste": ["Sweet", "Earthy", "Flowery"],
		 	 "conditions": ["Anorexia", "Anxiety", "Insomnia", "Appetite Loss", "Pain", "Stress"],
			 "positiveEffects": ["Happy", "Relaxed", "Creative", "Euphoric", "Uplifted", "Drowsiness"],
			 "negativeEffects": ["Dry Mouth", "Dry Eyes", "Dizzy", "Headache", "Paranoid", "Munchies"],
			 "descriptionDetailed": "Kandy Kush won the first ever Western Slope Cannabis Crown in Aspen.",
			 "descriptionAbbrev":  "Kandy Kush won the first ever Western Slope Cannabis Crown in Aspen.",
			 "tags": ["Sweet", "Earthy", "Flowery"],
			 "imageUrl": "images/strains/kandy-kush_100x100.jpg"
			},
			{"strainId": 195,
			 	"strainName": "King Louis XIII",
			 	"strainType": "Sativa",
			 	"components": [
			 	{ 
			 		"name": "THC9", 
			 		"value": 27.40
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 0.31
			 	},
			 	{ 
			 		"name": "CBN", 
			 		"value": 0.07
			 	},
			 	{ 
			 		"name": "CBG", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBC", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCV", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCA", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THC8", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pulegone", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Myrcene", 
			 		"value": 0.05
			 	},
			 	{ 
			 		"name": "Caryophyllene", 
			 		"value": 1.21
			 	},
			 	{ 
			 		"name": "Limonene", 
			 		"value": 0.67
			 	},
			 	{ 
			 		"name": "Linalool", 
			 		"value": 1.17
			 	},
			 	{ 
			 		"name": "Eucalyptol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pinene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol-4", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cymene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Apigenin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Quercetin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cannflavin A", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Beta-sitosterol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBL", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Humulene", 
			 		"value": 0.00
				},
				{ 
			 		"name": "Terpinolene", 
			 		"value": 0.00
				}	
		 	], 
		 	"taste": ["Pine", "Pungent", "Earthy"],
		 	 "conditions": ["Anorexia", "Anxiety", "Insomnia", "Appetite Loss", "Pain", "Stress", "Nausea", "Depression"],
			 "positiveEffects": ["Happy", "Relaxed", "Drowsiness", "Euphoric", "Hungry"],
			 "negativeEffects": ["Dry Mouth", "Dry Eyes", "Paranoid", "Dizzy", "Headache", "Munchies"],
			 "descriptionDetailed": "The difference is this monarch's odor is one that's meant to be enjoyed. Its dense nugs have an overwhelmingly piney smell with an earthy musk that will have you thinking of your last forest adventure.",
			 "descriptionAbbrev":  "It's dense nugs have an overwhelmingly piney smell with an earthy musk that will have you thinking of your last forest adventure.",
			 "tags": ["Pine", "Pungent", "Earthy"],
			 "imageUrl": "images/strains/king-louis-xiii_100x100.jpg"
			},
			{"strainId": 196,
			 	"strainName": "White Kryptonite",
			 	"strainType": "Hybrid",
			 	"components": [
			 	{ 
			 		"name": "THC9", 
			 		"value": 14.52
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBN", 
			 		"value": 0.26
			 	},
			 	{ 
			 		"name": "CBG", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBC", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCV", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCA", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THC8", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pulegone", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Myrcene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Caryophyllene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Limonene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Linalool", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Eucalyptol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pinene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol-4", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cymene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Apigenin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Quercetin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cannflavin A", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Beta-sitosterol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBL", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Humulene", 
			 		"value": 0.00
				},
				{ 
			 		"name": "Terpinolene", 
			 		"value": 0.00
				}	
		 	], 
		 	"taste": ["Flowery", "Pungent", "Spicy", "Herbal"],
		 	 "conditions": ["Anxiety", "Insomnia", "Stress", "Fatigue"],
			 "positiveEffects": ["Energetic", "Relaxed"],
			 "negativeEffects": [""],
			 "descriptionDetailed": "The powerful euphoria dealt by White Kryptonite borders on hypnotic and trance-like at times, making this strain a good choice for meditative, introspective evenings.",
			 "descriptionAbbrev":  "The powerful euphoria dealt by White Kryptonite borders on hypnotic and trance-like at times, making this strain a good choice for meditative, introspective evenings.",
			 "tags": [""],
			 "imageUrl": "images/strains/white-kryptonite_100x100.jpg"
			},
			{"strainId": 197,
			 	"strainName": "Legend OG",
			 	"strainType": "Hybrid",
			 	"components": [
			 	{ 
			 		"name": "THC9", 
			 		"value": 24.89
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 0.43
			 	},
			 	{ 
			 		"name": "CBN", 
			 		"value": 0.05
			 	},
			 	{ 
			 		"name": "CBG", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBC", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCV", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCA", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THC8", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pulegone", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Myrcene", 
			 		"value": 0.88
			 	},
			 	{ 
			 		"name": "Caryophyllene", 
			 		"value": 3.70
			 	},
			 	{ 
			 		"name": "Limonene", 
			 		"value": 2.17
			 	},
			 	{ 
			 		"name": "Linalool", 
			 		"value": 1.04
			 	},
			 	{ 
			 		"name": "Eucalyptol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pinene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol-4", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cymene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Apigenin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Quercetin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cannflavin A", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Beta-sitosterol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBL", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Humulene", 
			 		"value": 0.00
				},
				{ 
			 		"name": "Terpinolene", 
			 		"value": 0.00
				}	
		 	], 
		 	"taste": ["Sweet", "Pine"],
		 	 "conditions": ["Anorexia", "Anxiety", "Chronic Aches", "Appetite Loss", "Muscle Spasms", "Pain", "Stress"],
			 "positiveEffects": ["Happy", "Relaxed", "Drowsiness"],
			 "negativeEffects": ["Munchies", "Drowsiness"],
			 "descriptionDetailed": "Absolutely the very best OG I've ever smoked, and I've grown and smoked almost all of them.",
			 "descriptionAbbrev":  "Absolutely the very best OG I've ever smoked, and I've grown and smoked almost all of them.",
			 "tags": [""],
			 "imageUrl": "images/strains/kryptonite_100x100.jpg"
			},
			{"strainId": 198,
			 	"strainName": "Lemon Diesel",
			 	"strainType": "Hybrid",
			 	"components": [
			 	{ 
			 		"name": "THC9", 
			 		"value": 13.92
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 0.34
			 	},
			 	{ 
			 		"name": "CBN", 
			 		"value": 0.19
			 	},
			 	{ 
			 		"name": "CBG", 
			 		"value": 0.29
			 	},
			 	{ 
			 		"name": "CBC", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCV", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCA", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THC8", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pulegone", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Myrcene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Caryophyllene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Limonene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Linalool", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Eucalyptol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pinene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol-4", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cymene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Apigenin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Quercetin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cannflavin A", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Beta-sitosterol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBL", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Humulene", 
			 		"value": 0.00
				},
				{ 
			 		"name": "Terpinolene", 
			 		"value": 0.00
				}	
		 	], 
		 	"taste": ["Lemon", "Diesel", "Citrus"],
		 	 "conditions": ["Anorexia", "Anxiety", "Depression", "Appetite Loss", "Pain", "Stress"],
			 "positiveEffects": ["Happy", "Focused", "Relaxed", "Creative"],
			 "negativeEffects": ["Dry Mouth", "Dry Eyes", "Paranoid", "Anxious", "Dizzy", "Munchies"],
			 "descriptionDetailed": "The buds have been described as smelling fruity and sweet, with a hint of a skunk. The smell and flavor have been likened to citrus and pepper, with effects that can sneak up on its consumer. Lemon Diesel was in the Top Ten at the Emerald Cup in 2010.",
			 "descriptionAbbrev":  "The smell and flavor have been likened to citrus and pepper, with effects that can sneak up on its consumer. ",
			 "tags": ["Lemon", "Diesel", "Citrus"],
			 "imageUrl": "images/strains/lemon-diesel_100x100.jpg"
			},
			{"strainId": 199,
			 	"strainName": "Lemon Kush",
			 	"strainType": "Hybrid",
			 	"components": [
			 	{ 
			 		"name": "THC9", 
			 		"value": 17.63
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 0.29
			 	},
			 	{ 
			 		"name": "CBN", 
			 		"value": 0.43
			 	},
			 	{ 
			 		"name": "CBG", 
			 		"value": 0.33
			 	},
			 	{ 
			 		"name": "CBC", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCV", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCA", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THC8", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pulegone", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Myrcene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Caryophyllene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Limonene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Linalool", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Eucalyptol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pinene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol-4", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cymene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Apigenin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Quercetin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cannflavin A", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Beta-sitosterol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBL", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Humulene", 
			 		"value": 0.00
				},
				{ 
			 		"name": "Terpinolene", 
			 		"value": 0.00
				}	
		 	], 
		 	"taste": ["Lemon", "Citrus", "Sweet"],
		 	 "conditions": ["Anorexia", "Anxiety", "Depression", "Appetite Loss", "Pain", "Seizures", "Stress", "Insomnia"],
			 "positiveEffects": ["Happy", "Relaxed", "Creative"],
			 "negativeEffects": ["Dry Mouth", "Dry Eyes", "Paranoid", "Dizzy", "Headache", "Munchies"],
			 "descriptionDetailed": "The light green buds are covered in a white frosting of trichomes and provide uplifting and creative effects.",
			 "descriptionAbbrev":  "Lemon Kush is the perfect solution for when the stresses of life have you feeling sour.",
			 "tags": ["Lemon", "Citrus", "Sweet"],
			 "imageUrl": "images/strains/lemon-kush_100x100.jpg"
			},
			{"strainId": 200,
			 	"strainName": "Blackwater",
			 	"strainType": "Indica",
			 	"components": [
			 	{ 
			 		"name": "THC9", 
			 		"value": 16.28
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 0.31
			 	},
			 	{ 
			 		"name": "CBN", 
			 		"value": 0.32
			 	},
			 	{ 
			 		"name": "CBG", 
			 		"value": 1.00
			 	},
			 	{ 
			 		"name": "CBC", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCV", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCA", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THC8", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pulegone", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Myrcene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Caryophyllene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Limonene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Linalool", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Eucalyptol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pinene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol-4", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cymene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Apigenin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Quercetin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cannflavin A", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Beta-sitosterol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBL", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Humulene", 
			 		"value": 0.00
				},
				{ 
			 		"name": "Terpinolene", 
			 		"value": 0.00
				}	
		 	], 
		 	"taste": ["Earthy", "Sweet", "Pungent"],
		 	 "conditions": ["Arthritis", "Anxiety", "Insomnia", "Pain", "Stress", "Nausea", "Appetite Loss"],
			 "positiveEffects": ["Happy", "Relaxed", "Euphoric", "Drowsiness", "Hungry"],
			 "negativeEffects": ["Dry Mouth", "Dry Eyes", "Dizzy", "Paranoid", "Anxious", "Munchies"],
			 "descriptionDetailed": "Blackwater is an indica strain typically bred from Mendo Purps and San Fernando Valley OG Kush. Its round, compact buds take on a deep purple color and a sweet grape aroma that blends with subtle undertones of lemon and pine.",
			 "descriptionAbbrev": "What begins as a mellow and euphoric cerebral experience melts down to the rest of the body in a head-to-toe euphoric calm that relieves stress and anxiety. Patients have also reported its success in treating pain, appetite loss, and multiple sclerosis.",
			 "tags": ["Earthy", "Sweet", "Berry"],
			 "imageUrl": "images/strains/blackwater_100x100.jpg"
			},
			{"strainId": 201,
			 	"strainName": "UltraViolet OG",
			 	"strainType": "Indica",
			 	"components": [
			 	{ 
			 		"name": "THC9", 
			 		"value": 15.00
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 0.90
			 	},
			 	{ 
			 		"name": "CBN", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBG", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBC", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCV", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCA", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THC8", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pulegone", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Myrcene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Caryophyllene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Limonene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Linalool", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Eucalyptol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pinene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol-4", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cymene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Apigenin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Quercetin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cannflavin A", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Beta-sitosterol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBL", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Humulene", 
			 		"value": 0.00
				},
				{ 
			 		"name": "Terpinolene", 
			 		"value": 0.00
				}	
		 	], 
		 	"taste": ["Earthy", "Sweet", "Pungent"],
		 	 "conditions": ["Insomnia", "Stress", "Depression"],
			 "positiveEffects": ["Euphoric", "Dreamy", "Drowsiness"],
			 "negativeEffects": ["Drowsiness"],
			 "descriptionDetailed": "This powerful indica strain delivers dreamy, sleepy euphoria that gives your eyelids some heaviness at night while giving your mood a burst of positivity.",
			 "descriptionAbbrev": "This powerful indica strain delivers dreamy, sleepy euphoria that gives your eyelids some heaviness at night while giving your mood a burst of positivity.",
			 "tags": [""],
			 "imageUrl": "images/strains/UltravioletOG.jpg"
			},
			{"strainId": 202,
			 	"strainName": "Face Off OG",
			 	"strainType": "Indica",
			 	"components": [
			 	{ 
			 		"name": "THC9", 
			 		"value": 19.99
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 0.14
			 	},
			 	{ 
			 		"name": "CBN", 
			 		"value": 0.01
			 	},
			 	{ 
			 		"name": "CBG", 
			 		"value": 0.29
			 	},
			 	{ 
			 		"name": "CBC", 
			 		"value": 0.02
			 	},
			 	{ 
			 		"name": "THCV", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCA", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THC8", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pulegone", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Myrcene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Caryophyllene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Limonene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Linalool", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Eucalyptol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pinene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol-4", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cymene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Apigenin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Quercetin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cannflavin A", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Beta-sitosterol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBL", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Humulene", 
			 		"value": 0.00
				},
				{ 
			 		"name": "Terpinolene", 
			 		"value": 0.00
				}	
		 	], 
		 	"taste": ["Sweet", "Berry", "Earthy"],
		 	 "conditions": ["Anxiety", "Insomnia", "Stress", "Pain", "Arthritis", "Fibromyalgia", "Headache", "Hangover", "Appetite Loss"],
			 "positiveEffects": ["Euphoric", "Dreamy", "Drowsiness", "Calmness"],
			 "negativeEffects": ["Drowsiness"],
			 "descriptionDetailed": "Its crushing full-body effects make this strain a great choice for resolving severe pain or for relaxing on a lazy weekend.",
			 "descriptionAbbrev": "Its crushing full-body effects make this strain a great choice for resolving severe pain or for relaxing on a lazy weekend.",
			 "tags": [""],
			 "imageUrl": "images/strains/face-off-og_100x100.jpg"
			},
			{"strainId": 203,
			 	"strainName": "Sunset Sherbet",
			 	"strainType": "Hybrid",
			 	"components": [
			 	{ 
			 		"name": "THC9", 
			 		"value": 23.60
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 1.30
			 	},
			 	{ 
			 		"name": "CBN", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBG", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBC", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCV", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCA", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THC8", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pulegone", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Myrcene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Caryophyllene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Limonene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Linalool", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Eucalyptol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pinene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol-4", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cymene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Apigenin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Quercetin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cannflavin A", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Beta-sitosterol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBL", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Humulene", 
			 		"value": 0.00
				},
				{ 
			 		"name": "Terpinolene", 
			 		"value": 0.00
				}	
		 	], 
		 	"taste": ["Citrus", "Sweet", "Berry", "Mint", "Fruity"],
		 	 "conditions": ["Stress", "Hypertension", "Bipolar", "Anxiety"],
			 "positiveEffects": ["Relaxed", "Energetic", "Euphoric", "Happy", "Uplifting"],
			 "negativeEffects": ["Drowsiness"],
			 "descriptionDetailed": " Sunset Sherbet exhibits powerful full-body effects elevated by a jolt of cerebral energy.",
			 "descriptionAbbrev": " Sunset Sherbet exhibits powerful full-body effects elevated by a jolt of cerebral energy.",
			 "tags": [""],
			 "imageUrl": "images/strains/sunset-sherbet_100x100.jpg"
			},
			{"strainId": 204,
			 	"strainName": "Citrix",
			 	"strainType": "Hybrid",
			 	"components": [
			 	{ 
			 		"name": "THC9", 
			 		"value": 20.00
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 1.30
			 	},
			 	{ 
			 		"name": "CBN", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBG", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBC", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCV", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCA", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THC8", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pulegone", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Myrcene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Caryophyllene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Limonene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Linalool", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Eucalyptol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pinene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol-4", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cymene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Apigenin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Quercetin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cannflavin A", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Beta-sitosterol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBL", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Humulene", 
			 		"value": 0.00
				},
				{ 
			 		"name": "Terpinolene", 
			 		"value": 0.00
				}	
		 	], 
		 	"taste": ["Grapefruit", "Lemon", "Citrus"],
		 	 "conditions": ["Stress", "Hypertension", "Depression"],
			 "positiveEffects": ["Euphoric", "Happy", "Uplifting"],
			 "negativeEffects": [""],
			 "descriptionDetailed": "Citrix entices the senses before drawing you into its active, Clear headed euphoria.",
			 "descriptionAbbrev": "Citrix entices the senses before drawing you into its active, Clear headed euphoria.",
			 "tags": [""],
			 "imageUrl": "images/strains/Citrix.jpg"
			},
			{"strainId": 205,
			 "strainName": "Grapefruit",
			 "strainType": "Sativa",
			 "components": [
			 	{ 
			 		"name": "THC9", 
			 		"value": 15.00
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 0.30
			 	},
			 	{ 
			 		"name": "CBN", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBG", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBC", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCV", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCA", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THC8", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pulegone", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Myrcene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Caryophyllene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Limonene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Linalool", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Eucalyptol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pinene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol-4", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cymene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Apigenin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Quercetin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cannflavin A", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Beta-sitosterol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBL", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Humulene", 
			 		"value": 0.00
				},
				{ 
			 		"name": "Terpinolene", 
			 		"value": 0.00
				}	
		 	], 
		 	"taste": ["Grapefruit", "Citrus", "Sweet"],
		 	 "conditions": ["Stress", "Depression", "Pain", "Fatigue", "Nausea"],
			 "positiveEffects": ["Uplifting", "Happy", "Energetic", "Euphoric", "Creative"],
			 "negativeEffects": ["Dry Mouth", "Dry Eyes", "Paranoid", "Anxious", "Headache"],
			 "descriptionDetailed": "The tropical, citrus smell of Grapefruit mixes with energetic effects to give you a happy stress-reliever that also works well for battling migraine headaches.",
			 "descriptionAbbrev": "The tropical, citrus smell of Grapefruit mixes with energetic effects to give you a happy stress-reliever that also works well for battling migraine headaches.",
			 "tags": [""],
			 "imageUrl": "images/strains/grapefruit_100x100.jpg"
			},
			{"strainId": 206,
			 "strainName": "Chocolate Kush",
			 "strainType": "Sativa",
			 "components": [
			 	{ 
			 		"name": "THC9", 
			 		"value": 14.00
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 0.98
			 	},
			 	{ 
			 		"name": "CBN", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBG", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBC", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCV", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCA", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THC8", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pulegone", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Myrcene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Caryophyllene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Limonene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Linalool", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Eucalyptol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pinene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol-4", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cymene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Apigenin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Quercetin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cannflavin A", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Beta-sitosterol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBL", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Humulene", 
			 		"value": 0.00
				},
				{ 
			 		"name": "Terpinolene", 
			 		"value": 0.00
				}	
		 	], 
		 	"taste": ["Chocolate", "Earthy", "Pungent", "Sweet"],
		 	 "conditions": ["Stress", "Pain", "Insomnia", "Depression", "Nausea"],
			 "positiveEffects": ["Relaxed", "Euphoric", "Happy", "Hungry", "Uplifted"],
			 "negativeEffects": ["Dry Mouth", "Dry Eyes", "Headache", "Paranoid", "Dizzy", "Munchies"],
			 "descriptionDetailed": "Also known as Chocolope Kush, the buds on Chocolate Kush are dense and dark colored with a large amount of white crystals. It is known to have the aroma of vanilla mixed with chocolate.",
			 "descriptionAbbrev": "Also known as Chocolope Kush, the buds on Chocolate Kush are dense and dark colored with a large amount of white crystals. It is known to have the aroma of vanilla mixed with chocolate.",
			 "tags": [""],
			 "imageUrl": "images/strains/chocolate-kush_100x100.jpg"
			},
			{"strainId": 207,
			 "strainName": "Chocolate Chunk",
			 "strainType": "Indica",
			 "components": [
			 	{ 
			 		"name": "THC9", 
			 		"value": 12.10
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 0.05
			 	},
			 	{ 
			 		"name": "CBN", 
			 		"value": 0.03
			 	},
			 	{ 
			 		"name": "CBG", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBC", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCV", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCA", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THC8", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pulegone", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Myrcene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Caryophyllene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Limonene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Linalool", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Eucalyptol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pinene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol-4", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cymene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Apigenin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Quercetin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cannflavin A", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Beta-sitosterol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBL", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Humulene", 
			 		"value": 0.00
				},
				{ 
			 		"name": "Terpinolene", 
			 		"value": 0.00
				}	
		 	], 
		 	"taste": ["Chocolate", "Earthy", "Pungent", "Coffee", "Hash"],
		 	 "conditions": ["Stress", "Insomnia", "Depression", "Nausea", "Pain"],
			 "positiveEffects": ["Relaxed", "Happy", "Drowsiness", "Euphoric", "Uplifted"],
			 "negativeEffects": ["Dry Mouth", "Dry Eyes", "Headache", "Dizzy", "Paranoid"],
			 "descriptionDetailed": "Chocolate Chunk gives a quick and heavy hit which will leave you relaxed and even a little bit sleepy. It has a hashy flavor reminiscent of the slightly bitter taste of top quality dark chocolate and the smell combines sweet and earthy notes.",
			 "descriptionAbbrev": "Chocolate Chunk gives a quick and heavy hit which will leave you relaxed and even a little bit sleepy. ",
			 "tags": [""],
			 "imageUrl": "images/strains/chocolate-chunk_100x100.jpg"
			},
			{"strainId": 208,
			 "strainName": "Chocolope",
			 "strainType": "Sativa",
			 "components": [
			 	{ 
			 		"name": "THC9", 
			 		"value": 15.82
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 0.07
			 	},
			 	{ 
			 		"name": "CBN", 
			 		"value": 0.01
			 	},
			 	{ 
			 		"name": "CBG", 
			 		"value": 0.23
			 	},
			 	{ 
			 		"name": "CBC", 
			 		"value": 0.01
			 	},
			 	{ 
			 		"name": "THCV", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCA", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THC8", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pulegone", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Myrcene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Caryophyllene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Limonene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Linalool", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Eucalyptol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pinene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol-4", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cymene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Apigenin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Quercetin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cannflavin A", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Beta-sitosterol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBL", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Humulene", 
			 		"value": 0.00
				},
				{ 
			 		"name": "Terpinolene", 
			 		"value": 0.00
				}	
		 	], 
		 	"taste": ["Earthy", "Coffee", "Sweet"],
		 	 "conditions": ["Stress", "Depression", "Pain", "Fatigue", "Headache"],
			 "positiveEffects": ["Happy", "Uplifted", "Euphoric", "Energetic", "Creative"],
			 "negativeEffects": ["Dry Mouth", "Dry Eyes", "Paranoid", "Dizzy", "Headache"],
			 "descriptionDetailed": "The hefty sativa buds give earthy, sweet coffee flavors that provide a dreamy, cerebral effect.",
			 "descriptionAbbrev": "The hefty sativa buds give earthy, sweet coffee flavors that provide a dreamy, cerebral effect.",
			 "tags": [""],
			 "imageUrl": "images/strains/chocolope_100x100.jpg"
			},
			{"strainId": 209,
			 "strainName": "Cinex",
			 "strainType": "Hybrid",
			 "components": [
			 	{ 
			 		"name": "THC9", 
			 		"value": 11.19
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 0.09
			 	},
			 	{ 
			 		"name": "CBN", 
			 		"value": 0.01
			 	},
			 	{ 
			 		"name": "CBG", 
			 		"value": 0.12
			 	},
			 	{ 
			 		"name": "CBC", 
			 		"value": 0.05
			 	},
			 	{ 
			 		"name": "THCV", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCA", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THC8", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pulegone", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Myrcene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Caryophyllene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Limonene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Linalool", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Eucalyptol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pinene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol-4", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cymene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Apigenin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Quercetin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cannflavin A", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Beta-sitosterol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBL", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Humulene", 
			 		"value": 0.00
				},
				{ 
			 		"name": "Terpinolene", 
			 		"value": 0.00
				}	
		 	], 
		 	"taste": ["Earthy", "Citrus", "Sweet"],
		 	 "conditions": ["Stress", "Depression", "Pain", "Nausea", "Fatigue"],
			 "positiveEffects": ["Happy", "Uplifted", "Energetic", "Euphoric", "Relaxed", "Creative"],
			 "negativeEffects": ["Dry Mouth", "Dry Eyes", "Anxious", "Paranoid", "Dizzy"],
			 "descriptionDetailed": "The effects are Clear headed and uplifting, perfect for building a positive mindset and stimulating creative energy.",
			 "descriptionAbbrev": "The effects are Clear headed and uplifting, perfect for building a positive mindset and stimulating creative energy.",
			 "tags": [""],
			 "imageUrl": "images/strains/cinex_100x100.jpg"
			},
			{"strainId": 210,
			 "strainName": "Shiskaberry",
			 "strainType": "Indica",
			 "components": [
			 	{ 
			 		"name": "THC9", 
			 		"value": 20.10
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 0.20
			 	},
			 	{ 
			 		"name": "CBN", 
			 		"value": 0.01
			 	},
			 	{ 
			 		"name": "CBG", 
			 		"value": 0.61
			 	},
			 	{ 
			 		"name": "CBC", 
			 		"value": 0.02
			 	},
			 	{ 
			 		"name": "THCV", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCA", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THC8", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pulegone", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Myrcene", 
			 		"value": 0.07
			 	},
			 	{ 
			 		"name": "Caryophyllene", 
			 		"value": 0.21
			 	},
			 	{ 
			 		"name": "Limonene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Linalool", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Eucalyptol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pinene", 
			 		"value": 0.22
			 	},
			 	{ 
			 		"name": "Terpineol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol-4", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cymene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Apigenin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Quercetin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cannflavin A", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Beta-sitosterol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBL", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Humulene", 
			 		"value": 0.00
				},
				{ 
			 		"name": "Terpinolene", 
			 		"value": 0.00
				}	
		 	], 
		 	"taste": ["Berry", "Sweet", "Blueberry"],
		 	 "conditions": ["Stress", "Pain", "Depression", "Insomnia", "Headache"],
			 "positiveEffects": ["Relaxed", "Happy", "Euphoric", "Drowsiness", "Uplifted", "Conversational"],
			 "negativeEffects": ["Dry Mouth", "Dry Eyes", "Paranoid", "Dizzy", "Headache"],
			 "descriptionDetailed": "Its initial head buzz is happy and good for finishing things up or being social, but once its indica side kicks in, lazy is the word.",
			 "descriptionAbbrev": "Its initial head buzz is happy and good for finishing things up or being social, but once its indica side kicks in, lazy is the word.",
			 "tags": [""],
			 "imageUrl": "images/strains/shishkaberry_100x100.jpg"
			},
			{"strainId": 211,
			 "strainName": "R4",
			 "strainType": "Indica",
			 "components": [
			 	{ 
			 		"name": "THC9",  
			 		"value": 1.1
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 15.80
			 	},
			 	{ 
			 		"name": "CBN", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBG", 
			 		"value": 0.86
			 	},
			 	{ 
			 		"name": "CBC", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCV", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCA", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THC8", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pulegone", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Myrcene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Caryophyllene", 
			 		"value": 1.29
			 	},
			 	{ 
			 		"name": "Limonene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Linalool", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Eucalyptol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pinene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol-4", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cymene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Apigenin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Quercetin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cannflavin A", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Beta-sitosterol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBL", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Humulene", 
			 		"value": 2.00
				},
				{ 
			 		"name": "Terpinolene", 
			 		"value": 0.00
				}	
		 	], 
		 	"taste": [""],
		 	 "conditions": ["Epilepsy", "Nausea", "Pain", "Cancer"],
			 "positiveEffects": ["Clear headed", "Pain relief"],
			 "negativeEffects": ["Dry Mouth"],
			 "descriptionDetailed": "This is a strong medical choice that won't get patients high. In addition to seizure disorders, medical uses include treatment of pain and nausea.",
			 "descriptionAbbrev": "This is a strong medical choice that won't get patients high. In addition to seizure disorders, medical uses include treatment of pain and nausea.",
			 "tags": [""],
			 "imageUrl": "images/strains/R4-200x160.jpg"
			},
			{"strainId": 212,
			 "strainName": "Super Sweet",
			 "strainType": "Indica",
			 "components": [
			 	{ 
			 		"name": "THC9",  
			 		"value": 14.00
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 0.01
			 	},
			 	{ 
			 		"name": "CBN", 
			 		"value": 0.01
			 	},
			 	{ 
			 		"name": "CBG", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBC", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCV", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCA", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THC8", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pulegone", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Myrcene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Caryophyllene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Limonene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Linalool", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Eucalyptol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pinene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol-4", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cymene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Apigenin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Quercetin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cannflavin A", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Beta-sitosterol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBL", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Humulene", 
			 		"value": 0.00
				},
				{ 
			 		"name": "Terpinolene", 
			 		"value": 0.00
				}	
		 	], 
		 	"taste": ["Flowery", "Sweet", "Honey"],
		 	 "conditions": ["Anxiety", "Stress"],
			 "positiveEffects": ["Mild", "Relaxed", "Long Lasting", "Euphoric"],
			 "negativeEffects": ["Dry Mouth"],
			 "descriptionDetailed": "Super Sweet is a good choice for novice consumers or those looking for a less intoxicating buzz.",
			 "descriptionAbbrev": "Super Sweet is a good choice for novice consumers or those looking for a less intoxicating buzz.",
			 "tags": [""],
			 "imageUrl": "images/strains/super-sweet_100x100.jpg"
			},
			{"strainId": 213,
			 "strainName": "Sweet Lavender Diesel",
			 "strainType": "Hybrid",
			 "components": [
			 	{ 
			 		"name": "THC9",  
			 		"value": 17.51
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 0.06
			 	},
			 	{ 
			 		"name": "CBN", 
			 		"value": 0.06
			 	},
			 	{ 
			 		"name": "CBG", 
			 		"value": 0.25	
			 	},
			 	{ 
			 		"name": "CBC", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCV", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCA", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THC8", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pulegone", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Myrcene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Caryophyllene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Limonene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Linalool", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Eucalyptol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pinene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol-4", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cymene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Apigenin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Quercetin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cannflavin A", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Beta-sitosterol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBL", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Humulene", 
			 		"value": 0.00
				},
				{ 
			 		"name": "Terpinolene", 
			 		"value": 0.00
				}	
		 	], 
		 	"taste": ["Diesel", "Sweet", "Lavender"],
		 	 "conditions": ["Seizures", "Fibromyalgia", "Nausea", "Insomnia"],
			 "positiveEffects": ["Pain relief", "Hungry", "Drowsiness"],
			 "negativeEffects": ["Dry Mouth", "Anxious", "Munchies", "Drowsiness"],
			 "descriptionDetailed": "The first place the bud hits you is the in the eyes, an immediate creeper buzz kicks in.  The buzz then spreads to the rest of your head.  After you finish your smoke, the body buzz kicks in.",
			 "descriptionAbbrev": "The first place the bud hits you is the in the eyes, an immediate creeper buzz kicks in.  The buzz then spreads to the rest of your head.  After you finish your smoke, the body buzz kicks in.",
			 "tags": [""],
			 "imageUrl": "images/strains/sweet-lavender-diesel.jpg"
			},
			{"strainId": 214,
			 "strainName": "Cotton Candy Kush",
			 "strainType": "Hybrid",
			 "components": [
			 	{ 
			 		"name": "THC9",  
			 		"value": 19.91
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 2.08
			 	},
			 	{ 
			 		"name": "CBN", 
			 		"value": 0.54
			 	},
			 	{ 
			 		"name": "CBG", 
			 		"value": 0.49	
			 	},
			 	{ 
			 		"name": "CBC", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCV", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCA", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THC8", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pulegone", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Myrcene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Caryophyllene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Limonene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Linalool", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Eucalyptol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pinene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol-4", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cymene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Apigenin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Quercetin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cannflavin A", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Beta-sitosterol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBL", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Humulene", 
			 		"value": 0.00
				},
				{ 
			 		"name": "Terpinolene", 
			 		"value": 0.00
				}	
		 	], 
		 	"taste": ["Sweet", "Berry", "Flowery"],
		 	 "conditions": ["Stress", "Pain", "Depression", "Insomnia", "Nausea", "Fibromyalgia", "Appetite Loss"],
			 "positiveEffects": ["Relaxed", "Happy", "Uplifted", "Euphoric", "Dizzy", "Headache",  "Drowsiness", "Pain relief", "Hungry"],
			 "negativeEffects": ["Dry Mouth", "Anxious", "Drowsiness", "Munchies"],
			 "descriptionDetailed": "This magnificent blend of Indica-dominant and pure sativa makes for an incredible all-around medication.",
			 "descriptionAbbrev": "This magnificent blend of Indica-dominant and pure sativa makes for an incredible all-around medication.",
			 "tags": [""],
			 "imageUrl": "images/strains/cotton-candy-kush_100x100.jpg"
			},
			{"strainId": 215,
			 "strainName": "Larry OG",
			 "strainType": "Hybrid",
			 "components": [
			 	{ 
			 		"name": "THC9",  
			 		"value": 19.59
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 0.13
			 	},
			 	{ 
			 		"name": "CBN", 
			 		"value": 0.54
			 	},
			 	{ 
			 		"name": "CBG", 
			 		"value": 0.23	
			 	},
			 	{ 
			 		"name": "CBC", 
			 		"value": 0.02
			 	},
			 	{ 
			 		"name": "THCV", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCA", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THC8", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pulegone", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Myrcene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Caryophyllene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Limonene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Linalool", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Eucalyptol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pinene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol-4", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cymene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Apigenin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Quercetin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cannflavin A", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Beta-sitosterol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBL", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Humulene", 
			 		"value": 0.00
				},
				{ 
			 		"name": "Terpinolene", 
			 		"value": 0.00
				}	
		 	], 
		 	"taste": ["Sweet", "Berry", "Flowery"],
		 	 "conditions": ["Stress", "Pain", "Depression", "Appetite Loss", "Insomnia", "Fibromyalgia"],
			 "positiveEffects": ["Happy", "Relaxed", "Uplifted", "Euphoric", "Hungry"],
			 "negativeEffects": ["Dry Mouth", "Dry Eyes", "Anxious", "Dizzy", "Paranoid", "Munchies"],
			 "descriptionDetailed": "Larry OG produces a potent yet easy body buzz that will allow you to relax while getting things done. The effects are happy but not overwhelming.",
			 "descriptionAbbrev": "Larry OG produces a potent yet easy body buzz that will allow you to relax while getting things done. The effects are happy but not overwhelming.",
			 "tags": [""],
			 "imageUrl": "images/strains/larry-og_100x100.jpg"
			},
			{"strainId": 216,
			 "strainName": "Flo",
			 "strainType": "Hybrid",
			 "components": [
			 	{ 
			 		"name": "THC9",  
			 		"value": 14.00
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 0.26
			 	},
			 	{ 
			 		"name": "CBN", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBG", 
			 		"value": 0.00	
			 	},
			 	{ 
			 		"name": "CBC", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCV", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCA", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THC8", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pulegone", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Myrcene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Caryophyllene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Limonene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Linalool", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Eucalyptol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pinene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol-4", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cymene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Apigenin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Quercetin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cannflavin A", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Beta-sitosterol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBL", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Humulene", 
			 		"value": 0.00
				},
				{ 
			 		"name": "Terpinolene", 
			 		"value": 0.00
				}	
		 	], 
		 	"taste": ["Earthy", "Sweet", "Citrus"],
		 	 "conditions": ["Stress", "Depression", "Pain", "Fibromyalgia", "Nausea", "Migraines"],
			 "positiveEffects": ["Happy", "Uplifted", "Relaxed", "Euphoric", "Energetic", "Clear headed", "Creative"],
			 "negativeEffects": ["Dry Mouth", "Dry Eyes",  "Dizzy", "Anxious", "Headache"],
			 "descriptionDetailed": " The effects of Flo are described as energetic yet subtle, making it ideal for many as a wake and bake. Flo can provide a perfect boost for creative types, sparking inspiration for artists and musicians.",
			 "descriptionAbbrev": " The effects of Flo are described as energetic yet subtle, making it ideal for many as a wake and bake. Flo can provide a perfect boost for creative types, sparking inspiration for artists and musicians.",
			 "tags": [""],
			 "imageUrl": "images/strains/flo_100x100.jpg"
			},
			{"strainId": 217,
			 "strainName": "Obama Kush",
			 "strainType": "Indica",
			 "components": [
			 	{ 
			 		"name": "THC9",  
			 		"value": 14.90
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 0.07
			 	},
			 	{ 
			 		"name": "CBN", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBG", 
			 		"value": 0.25	
			 	},
			 	{ 
			 		"name": "CBC", 
			 		"value": 0.03
			 	},
			 	{ 
			 		"name": "THCV", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCA", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THC8", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pulegone", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Myrcene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Caryophyllene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Limonene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Linalool", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Eucalyptol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pinene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol-4", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cymene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Apigenin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Quercetin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cannflavin A", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Beta-sitosterol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBL", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Humulene", 
			 		"value": 0.00
				},
				{ 
			 		"name": "Terpinolene", 
			 		"value": 0.00
				}	
		 	], 
		 	"taste": ["Sweet", "Earthy", "Grape"],
		 	 "conditions": ["Stress", "Pain", "Insomnia", "Depression", "Appetite Loss", "Fibromyalgia", "Migraines"],
			 "positiveEffects": ["Relaxed", "Euphoric", "Happy", "Uplifted", "Drowsiness", "Balanced"],
			 "negativeEffects": ["Dry Mouth", "Dizzy", "Paranoid", "Dry Eyes", "Headache", "Munchies"],
			 "descriptionDetailed": "This strain is recommended for all levels of patients looking for a balanced experience, as it offers powerful physical effects as well as an intense cerebral uplift that does not stimulate appetite or put you to sleep.",
			 "descriptionAbbrev": "This strain is recommended for all levels of patients looking for a balanced experience, as it offers powerful physical effects as well as an intense cerebral uplift that does not stimulate appetite or put you to sleep.",
			 "tags": [""],
			 "imageUrl": "images/strains/obama-kush_100x100.jpg"
			},
			{"strainId": 218,
			 "strainName": "Orange Crush",
			 "strainType": "Hybrid",
			 "components": [
			 	{ 
			 		"name": "THC9",  
			 		"value": 14.49
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 0.12
			 	},
			 	{ 
			 		"name": "CBN", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBG", 
			 		"value": 0.00	
			 	},
			 	{ 
			 		"name": "CBC", 
			 		"value": 0.03
			 	},
			 	{ 
			 		"name": "THCV", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCA", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THC8", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pulegone", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Myrcene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Caryophyllene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Limonene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Linalool", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Eucalyptol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pinene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol-4", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cymene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Apigenin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Quercetin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cannflavin A", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Beta-sitosterol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBL", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Humulene", 
			 		"value": 0.00
				},
				{ 
			 		"name": "Terpinolene", 
			 		"value": 0.00
				}	
		 	], 
		 	"taste": ["Orange", "Citrus", "Sweet"],
		 	 "conditions": ["Stress", "Depression", "Pain", "Appetite Loss", "Fibromyalgia", "Migraines"],
			 "positiveEffects": ["Happy", "Uplifted", "Energetic", "Euphoric", "Relaxed"],
			 "negativeEffects": ["Dry Mouth", "Dry Eyes", "Headache", "Dizzy", "Paranoid"],
			 "descriptionDetailed": "Orange Crush is a sativa-dominant cannabis strain with a super sweet tangy flavor and aroma.",
			 "descriptionAbbrev": "Orange Crush is a sativa-dominant cannabis strain with a super sweet tangy flavor and aroma.",
			 "tags": [""],
			 "imageUrl": "images/strains/orange-crush_100x100.jpg"
			},
			{"strainId": 219,
			 "strainName": "Pink Kush",
			 "strainType": "Hybrid",
			 "components": [
			 	{ 
			 		"name": "THC9",  
			 		"value": 18.00
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 0.12
			 	},
			 	{ 
			 		"name": "CBN", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBG", 
			 		"value": 0.00	
			 	},
			 	{ 
			 		"name": "CBC", 
			 		"value": 0.03
			 	},
			 	{ 
			 		"name": "THCV", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCA", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THC8", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pulegone", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Myrcene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Caryophyllene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Limonene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Linalool", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Eucalyptol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pinene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol-4", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cymene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Apigenin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Quercetin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cannflavin A", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Beta-sitosterol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBL", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Humulene", 
			 		"value": 0.00
				},
				{ 
			 		"name": "Terpinolene", 
			 		"value": 0.00
				}	
		 	], 
		 	"taste": ["Sweet", "Flowery", "Earthy" ],
		 	 "conditions": ["Pain", "Insomnia", "Anxiety", "Appetite Loss", "Fibromyalgia", "Epilepsy"],
			 "positiveEffects": ["Intense", "Relaxed", "Euphoric", "Pain", "Hungry", "Drowsiness", "Sexual"],
			 "negativeEffects": ["Dry Eyes", "Munchies", "Drowsiness", "Couch Lock"],
			 "descriptionDetailed": "Even for veteran consumers, the heaviness of this strain could be considered overpowering, and even small doses eliminate pain, insomnia, and appetite loss.",
			 "descriptionAbbrev": "Even for veteran consumers, the heaviness of this  strain could be considered overpowering, and even small doses eliminate pain, insomnia, and appetite loss.",
			 "tags": [""],
			 "imageUrl": "images/strains/pink-kush_100x100.jpg"
			},
			{"strainId": 220,
			 "strainName": "Red Dragon",
			 "strainType": "Hybrid",
			 "components": [
			 	{ 
			 		"name": "THC9",  
			 		"value": 19.15
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 0.19
			 	},
			 	{ 
			 		"name": "CBN", 
			 		"value": 0.14
			 	},
			 	{ 
			 		"name": "CBG", 
			 		"value": 0.11	
			 	},
			 	{ 
			 		"name": "CBC", 
			 		"value": 0.03
			 	},
			 	{ 
			 		"name": "THCV", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCA", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THC8", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pulegone", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Myrcene", 
			 		"value": 0.08
			 	},
			 	{ 
			 		"name": "Caryophyllene", 
			 		"value": 0.36
			 	},
			 	{ 
			 		"name": "Limonene", 
			 		"value": 0.08
			 	},
			 	{ 
			 		"name": "Linalool", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Eucalyptol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pinene", 
			 		"value": 0.06
			 	},
			 	{ 
			 		"name": "Terpineol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol-4", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cymene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Apigenin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Quercetin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cannflavin A", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Beta-sitosterol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBL", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Humulene", 
			 		"value": 0.27
				},
				{ 
			 		"name": "Terpinolene", 
			 		"value": 0.67
				}	
		 	], 
		 	"taste": ["Sweet", "Pungent", "Spicy", "Herbal" ],
		 	 "conditions": ["Stress", "Pain", "Depression", "Appetite Loss", "Fibromyalgia", "Fatigue"],
			 "positiveEffects": ["Happy", "Uplifted", "Euphoric", "Relaxed", "Conversational"],
			 "negativeEffects": ["Dry Mouth", "Dry Eyes", "Anxious", "Paranoid", "Dizzy"],
			 "descriptionDetailed": "Slightly sativa-dominant, this strain is giggly and upbeat. Great for those suffering from depression or stress, Red Dragon has a very happy and uplifting effect.",
			 "descriptionAbbrev": "Slightly sativa-dominant, this strain is giggly and upbeat. Great for those suffering from depression or stress, Red Dragon has a very happy and uplifting effect.",
			 "tags": [""],
			 "imageUrl": "images/strains/red-dragon_100x100.jpg"
			},
			{"strainId": 221,
			 "strainName": "Purple Sour Diesel",
			 "strainType": "Hybrid",
			 "components": [
			 	{ 
			 		"name": "THC9",  
			 		"value": 19.15
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 0.19
			 	},
			 	{ 
			 		"name": "CBN", 
			 		"value": 0.14
			 	},
			 	{ 
			 		"name": "CBG", 
			 		"value": 0.11	
			 	},
			 	{ 
			 		"name": "CBC", 
			 		"value": 0.03
			 	},
			 	{ 
			 		"name": "THCV", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCA", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THC8", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pulegone", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Myrcene", 
			 		"value": 0.08
			 	},
			 	{ 
			 		"name": "Caryophyllene", 
			 		"value": 0.36
			 	},
			 	{ 
			 		"name": "Limonene", 
			 		"value": 0.08
			 	},
			 	{ 
			 		"name": "Linalool", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Eucalyptol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pinene", 
			 		"value": 0.06
			 	},
			 	{ 
			 		"name": "Terpineol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol-4", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cymene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Apigenin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Quercetin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cannflavin A", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Beta-sitosterol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBL", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Humulene", 
			 		"value": 0.27
				},
				{ 
			 		"name": "Terpinolene", 
			 		"value": 0.67
				}	
		 	], 
		 	"taste": ["Diesel", "Earthy", "Pungent" ],
		 	 "conditions": ["Stress", "Insomnia", "Pain", "Depression", "Headache", "Fibromyalgia"],
			 "positiveEffects": ["Euphoric", "Relaxed", "Happy", "Uplifted", "Hungry"],
			 "negativeEffects": ["Dry Mouth", "Dry Eyes", "Paranoid", "Headache", "Dizzy", "Munchies"],
			 "descriptionDetailed": "Featuring heavy head effects and a slight body high, Purple Sour Diesel will energize your mind while leaving you physically relaxed. This strain features a sour, fruity aroma similar to sour grapes.",
			 "descriptionAbbrev": "Featuring heavy head effects and a slight body high, Purple Sour Diesel will energize your mind while leaving you physically relaxed. This strain features a sour, fruity aroma similar to sour grapes.",
			 "tags": [""],
			 "imageUrl": "images/strains/purple-sour-diesel_100x100.jpg"
			},
			{"strainId": 222,
			 "strainName": "Dream Queen",
			 "strainType": "Hybrid",
			 "components": [
			 	{ 
			 		"name": "THC9",  
			 		"value": 21.44
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 0.10
			 	},
			 	{ 
			 		"name": "CBN", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBG", 
			 		"value": 0.26	
			 	},
			 	{ 
			 		"name": "CBC", 
			 		"value": 0.07
			 	},
			 	{ 
			 		"name": "THCV", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCA", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THC8", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pulegone", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Myrcene", 
			 		"value": 0.78
			 	},
			 	{ 
			 		"name": "Caryophyllene", 
			 		"value": 0.49
			 	},
			 	{ 
			 		"name": "Limonene", 
			 		"value": 0.08
			 	},
			 	{ 
			 		"name": "Linalool", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Eucalyptol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pinene", 
			 		"value": 2.66
			 	},
			 	{ 
			 		"name": "Terpineol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol-4", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cymene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Apigenin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Quercetin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cannflavin A", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Beta-sitosterol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBL", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Humulene", 
			 		"value": 2.04
				},
				{ 
			 		"name": "Terpinolene", 
			 		"value": 0.67
				}	
		 	], 
		 	"taste": ["Sweet", "Earthy", "Flowery" ],
		 	 "conditions": ["Stress", "Pain", "Insomnia", "Depression", "Nausea", "Fibromyalgia"],
			 "positiveEffects": ["Relaxed", "Uplifted", "Euphoric", "Happy", "Drowsiness"],
			 "negativeEffects": ["Dry Mouth", "Dry Eyes", "Headache", "Dizzy", "Paranoid"],
			 "descriptionDetailed": "With an aroma of bubblegum and slight hints of mango and pineapple, Dream Queen will provide a good cerebral high.",
			 "descriptionAbbrev": "With an aroma of bubblegum and slight hints of mango and pineapple, Dream Queen will provide a good cerebral high.",
			 "tags": [""],
			 "imageUrl": "images/strains/dream-queen_100x100.jpg"
			},
			{"strainId": 223,
			 "strainName": "Willy's Wonder",
			 "strainType": "Indica",
			 "components": [
			 	{ 
			 		"name": "THC9",  
			 		"value": 15.88
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 0.12
			 	},
			 	{ 
			 		"name": "CBN", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBG", 
			 		"value": 0.07	
			 	},
			 	{ 
			 		"name": "CBC", 
			 		"value": 0.01
			 	},
			 	{ 
			 		"name": "THCV", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCA", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THC8", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pulegone", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Myrcene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Caryophyllene", 
			 		"value": 0.41
			 	},
			 	{ 
			 		"name": "Limonene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Linalool", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Eucalyptol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pinene", 
			 		"value": 2.66
			 	},
			 	{ 
			 		"name": "Terpineol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol-4", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cymene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Apigenin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Quercetin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cannflavin A", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Beta-sitosterol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBL", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Humulene", 
			 		"value": 0.48
				},
				{ 
			 		"name": "Terpinolene", 
			 		"value": 0.67
				}	
		 	], 
		 	"taste": ["Sweet", "Earthy", "Flowery" ],
		 	 "conditions": ["Stress", "Pain", "Depression", "Insomnia", "Fatigue", "Fibromyalgia"],
			 "positiveEffects": ["Relaxed", "Euphoric", "Happy", "Tingly", "Drowsiness"],
			 "negativeEffects": ["Dry Mouth", "Dry Eyes", "Dizzy", "Headache", "Paranoid"],
			 "descriptionDetailed": "The strain's aroma is an equally diverse mix of tropical fruit and citrus that also comes through in its sweet and sour taste.",
			 "descriptionAbbrev": "The strain's aroma is an equally diverse mix of tropical fruit and citrus that also comes through in its sweet and sour taste.",
			 "tags": [""],
			 "imageUrl": "images/strains/willy-s-wonder_100x100.jpg"
			},
			{"strainId": 224,
			 "strainName": "Jean Guy",
			 "strainType": "Hybrid",
			 "components": [
			 	{ 
			 		"name": "THC9",  
			 		"value": 25.00
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 0.02
			 	},
			 	{ 
			 		"name": "CBN", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBG", 
			 		"value": 0.00	
			 	},
			 	{ 
			 		"name": "CBC", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCV", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCA", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THC8", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pulegone", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Myrcene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Caryophyllene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Limonene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Linalool", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Eucalyptol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pinene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol-4", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cymene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Apigenin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Quercetin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cannflavin A", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Beta-sitosterol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBL", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Humulene", 
			 		"value": 0.00
				},
				{ 
			 		"name": "Terpinolene", 
			 		"value": 0.00
				}	
		 	], 
		 	"taste": ["Citrus", "Earthy", "Lemon", "Pine"],
		 	 "conditions": ["Fatigue", "Fibromyalgia", "Cancer"],
			 "positiveEffects": ["Energetic", "Uplifted", "Intense", "Pain relief", "Relaxed", "Sexual", "Euphoric"],
			 "negativeEffects": ["Dry Mouth", "Paranoid", "Anxious", "Headache"],
			 "descriptionDetailed": "Its energizing and uplifting qualities makes Jean Guy a perfect strain to start the day with, although scattered and distracting thoughts may interfere with productivity.",
			 "descriptionAbbrev": "Its energizing and uplifting qualities makes Jean Guy a perfect strain to start the day with, although scattered and distracting thoughts may interfere with productivity.",
			 "tags": [""],
			 "imageUrl": "images/strains/jean-guy_100x100.jpg"
			},
			{"strainId": 225,
			 "strainName": "Orange Bud",
			 "strainType": "Hybrid",
			 "components": [
			 	{ 
			 		"name": "THC9",  
			 		"value": 16.50
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 0.30
			 	},
			 	{ 
			 		"name": "CBN", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBG", 
			 		"value": 0.00	
			 	},
			 	{ 
			 		"name": "CBC", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCV", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCA", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THC8", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pulegone", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Myrcene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Caryophyllene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Limonene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Linalool", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Eucalyptol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pinene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol-4", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cymene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Apigenin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Quercetin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cannflavin A", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Beta-sitosterol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBL", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Humulene", 
			 		"value": 0.00
				},
				{ 
			 		"name": "Terpinolene", 
			 		"value": 0.00
				}	
		 	], 
		 	"taste": ["Orange", "Citrus", "Sweet"],
		 	 "conditions": ["Stress", "Pain", "Depression", "Fibromyalgia", "Anxiety"],
			 "positiveEffects": ["Happy", "Euphoric", "Uplifted", "Relaxed", "Creative", "Hungry", "Intense"],
			 "negativeEffects": ["Dry Mouth", "Dry Eyes", "Headache", "Paranoid", "Dizzy", "Munchies"],
			 "descriptionDetailed": "With bright orange hairs coating the surface, this strain has scents of orange and nectarines.",
			 "descriptionAbbrev": "With bright orange hairs coating the surface, this strain has scents of orange and nectarines.",
			 "tags": [""],
			 "imageUrl": "images/strains/orange-bud_100x100.jpg"
			},
			{"strainId": 226,
			 "strainName": "Fucking Incredible",
			 "strainType": "Indica",
			 "components": [
			 	{ 
			 		"name": "THC9",  
			 		"value": 22.13
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 0.16
			 	},
			 	{ 
			 		"name": "CBN", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBG", 
			 		"value": 0.38	
			 	},
			 	{ 
			 		"name": "CBC", 
			 		"value": 0.03
			 	},
			 	{ 
			 		"name": "THCV", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCA", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THC8", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pulegone", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Myrcene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Caryophyllene", 
			 		"value": 0.42
			 	},
			 	{ 
			 		"name": "Limonene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Linalool", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Eucalyptol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pinene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol-4", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cymene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Apigenin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Quercetin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cannflavin A", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Beta-sitosterol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBL", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Humulene", 
			 		"value": 0.53
				},
				{ 
			 		"name": "Terpinolene", 
			 		"value": 0.21
				}	
		 	], 
		 	"taste": ["Earthy", "Pungent", "Skunk"],
		 	 "conditions": ["Stress", "Pain", "Insomnia", "Depression", "Inflammation", "Fibromyalgia"],
			 "positiveEffects": ["Relaxed", "Happy", "Euphoric", "Uplifted", "Sexual"],
			 "negativeEffects": ["Dry Mouth", "Dry Eyes", "Dizzy", "Headache", "Paranoid"],
			 "descriptionDetailed": "A pure indica strain and was created by combining the genetics of two magnificent indicas back in 1990.",
			 "descriptionAbbrev": "A pure indica strain and was created by combining the genetics of two magnificent indicas back in 1990.",
			 "tags": [""],
			 "imageUrl": "images/strains/fucking-incredible_100x100.jpg"
			},
			{"strainId": 227,
			 "strainName": "Sage N Sour",
			 "strainType": "Sativa",
			 "components": [
			 	{ 
			 		"name": "THC9",  
			 		"value": 24.54
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 0.31
			 	},
			 	{ 
			 		"name": "CBN", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBG", 
			 		"value": 0.00	
			 	},
			 	{ 
			 		"name": "CBC", 
			 		"value": 0.04
			 	},
			 	{ 
			 		"name": "THCV", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCA", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THC8", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pulegone", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Myrcene", 
			 		"value": 0.06
			 	},
			 	{ 
			 		"name": "Caryophyllene", 
			 		"value": 0.62
			 	},
			 	{ 
			 		"name": "Limonene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Linalool", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Eucalyptol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pinene", 
			 		"value": 0.24
			 	},
			 	{ 
			 		"name": "Terpineol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol-4", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cymene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Apigenin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Quercetin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cannflavin A", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Beta-sitosterol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBL", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Humulene", 
			 		"value": 0.52
				},
				{ 
			 		"name": "Terpinolene", 
			 		"value": 0.89
				}	
		 	], 
		 	"taste": ["Sage", "Earthy", "Sweet"],
		 	 "conditions": ["Stress", "Depression", "Pain", "Appetite Loss", "Nausea",  "Fibromyalgia"],
			 "positiveEffects": ["Uplifted", "Euphoric", "Happy", "Energetic", "Relaxed"],
			 "negativeEffects": ["Dry Mouth", "Dry Eyes", "Paranoid", "Anxious", "Headache"],
			 "descriptionDetailed": "With an aroma that closely matches the subtle herbal notes of sage, Sage N Sour delivers a perfect balance of euphoria, energy, and happiness to its consumer.",
			 "descriptionAbbrev": "With an aroma that closely matches the subtle herbal notes of sage, Sage N Sour delivers a perfect balance of euphoria, energy, and happiness to its consumer.",
			 "tags": [""],
			 "imageUrl": "images/strains/sage-n-sour_100x100.jpg"
			},
			{"strainId": 228,
			 "strainName": "Bubba OG",
			 "strainType": "Indica",
			 "components": [
			 	{ 
			 		"name": "THC9",  
			 		"value": 16.39
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 0.11
			 	},
			 	{ 
			 		"name": "CBN", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBG", 
			 		"value": 0.30	
			 	},
			 	{ 
			 		"name": "CBC", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCV", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCA", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THC8", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pulegone", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Myrcene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Caryophyllene", 
			 		"value": 0.68
			 	},
			 	{ 
			 		"name": "Limonene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Linalool", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Eucalyptol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pinene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol-4", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cymene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Apigenin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Quercetin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cannflavin A", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Beta-sitosterol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBL", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Humulene", 
			 		"value": 1.71
				},
				{ 
			 		"name": "Terpinolene", 
			 		"value": 0.00
				}	
		 	], 
		 	"taste": ["Earthy", "Pungent", "Pine"],
		 	 "conditions": ["Stress", "Pain", "Depression", "Insomnia", "Appetite Loss", "Fibromyalgia"],
			 "positiveEffects": ["Relaxed", "Drowsiness", "Hungry", "Happy", "Euphoric"],
			 "negativeEffects": ["Dry Mouth", "Dry Eyes", "Dizzy", "Paranoid", "Drowsiness", "Munchies"],
			 "descriptionDetailed": "Tingly body and sleepy eyes, you will want to sit but your mind can remain focused or is free to wander.  Great for relaxing, hanging out, and just enjoying life.",
			 "descriptionAbbrev": "Tingly body and sleepy eyes, you will want to sit but your mind can remain focused or is free to wander.  Great for relaxing, hanging out, and just enjoying life.",
			 "tags": [""],
			 "imageUrl": "images/strains/bubba-og_100x100.jpg"
			},
			{"strainId": 229,
			 "strainName": "Hawaiian Snow",
			 "strainType": "Sativa",
			 "components": [
			 	{ 
			 		"name": "THC9",  
			 		"value": 11.05
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 0.20
			 	},
			 	{ 
			 		"name": "CBN", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBG", 
			 		"value": 0.31	
			 	},
			 	{ 
			 		"name": "CBC", 
			 		"value": 0.08 
			 	},
			 	{ 
			 		"name": "THCV", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCA", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THC8", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pulegone", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Myrcene", 
			 		"value": 0.75
			 	},
			 	{ 
			 		"name": "Caryophyllene", 
			 		"value": 0.99
			 	},
			 	{ 
			 		"name": "Limonene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Linalool", 
			 		"value": 2.54
			 	},
			 	{ 
			 		"name": "Eucalyptol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pinene", 
			 		"value": 0.91
			 	},
			 	{ 
			 		"name": "Terpineol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol-4", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cymene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Apigenin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Quercetin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cannflavin A", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Beta-sitosterol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBL", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Humulene", 
			 		"value": 0.30
				},
				{ 
			 		"name": "Terpinolene", 
			 		"value": 0.00
				}	
		 	], 
		 	"taste": ["Earthy", "Pungent", "Pine"],
		 	 "conditions": ["Stress", "Depression", "Pain", "Fatigue", "Insomnia", "Fibromyalgia"],
			 "positiveEffects": ["Happy", "Giggly", "Uplifted", "Euphoric", "Energetic", "Creative"],
			 "negativeEffects": ["Dry Mouth", "Dry Eyes", "Dizzy", "Headache", "Paranoid", "Drowsiness"],
			 "descriptionDetailed": "This cannabis strain has been known to incite long rounds of giggles, great for hanging out with friends.",
			 "descriptionAbbrev": "This cannabis strain has been known to incite long rounds of giggles, great for hanging out with friends.",
			 "tags": [""],
			 "imageUrl": "images/strains/hawaiian-snow_100x100.jpg"
			},
			{"strainId": 230,
			 "strainName": "Dr. Who",
			 "strainType": "Hybrid",
			 "components": [
			 	{ 
			 		"name": "THC9",  
			 		"value": 20.21
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 0.25
			 	},
			 	{ 
			 		"name": "CBN", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBG", 
			 		"value": 0.48	
			 	},
			 	{ 
			 		"name": "CBC", 
			 		"value": 0.00 
			 	},
			 	{ 
			 		"name": "THCV", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCA", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THC8", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pulegone", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Myrcene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Caryophyllene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Limonene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Linalool", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Eucalyptol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pinene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol-4", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cymene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Apigenin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Quercetin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cannflavin A", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Beta-sitosterol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBL", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Humulene", 
			 		"value": 0.18
				},
				{ 
			 		"name": "Terpinolene", 
			 		"value": 0.00
				}	
		 	], 
		 	"taste": ["Sweet", "Pungent", "Earthy"],
		 	 "conditions": ["Pain", "Stress", "Appetite Loss", "Multiple Sclerosis", "ADHD", "Bipolar", "Depression", "Nausea", "Fibromyalgia"],
			 "positiveEffects": ["Pain relief", "Relaxed", "Uplifted", "Hungry", "Calmness", "Productive"],
			 "negativeEffects": ["Dry Mouth", "Dry Eyes", "Munchies"],
			 "descriptionDetailed": "This 60 percent indica strain can deliver swift relief to pain, stress, appetite loss, multiple sclerosis, ADHD, mood disorders, and nausea without lethargy or sedation, making Dr. Who a good choice for any time of the day.",
			 "descriptionAbbrev": "This 60 percent indica strain can deliver swift relief to pain, stress, appetite loss, multiple sclerosis, ADHD, mood disorders, and nausea without lethargy or sedation, making Dr. Who a good choice for any time of the day.",
			 "tags": [""],
			 "imageUrl": "images/strains/dr--who_100x100.jpg"
			}, 
			{"strainId": 231,
			 "strainName": "Pinneapple Chunk",
			 "strainType": "Hybrid",
			 "components": [
			 	{ 
			 		"name": "THC9",  
			 		"value": 23.51
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 0.20
			 	},
			 	{ 
			 		"name": "CBN", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBG", 
			 		"value": 0.71	
			 	},
			 	{ 
			 		"name": "CBC", 
			 		"value": 0.03 
			 	},
			 	{ 
			 		"name": "THCV", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCA", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THC8", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pulegone", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Myrcene", 
			 		"value": 0.10
			 	},
			 	{ 
			 		"name": "Caryophyllene", 
			 		"value": 0.86
			 	},
			 	{ 
			 		"name": "Limonene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Linalool", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Eucalyptol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pinene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol-4", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cymene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Apigenin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Quercetin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cannflavin A", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Beta-sitosterol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBL", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Humulene", 
			 		"value": 0.40
				},
				{ 
			 		"name": "Terpinolene", 
			 		"value": 0.00
				}	
		 	], 
		 	"taste": ["Pineapple", "Sweet", "Skunk"],
		 	 "conditions": ["Pain", "Chronic Pain"],
			 "positiveEffects": ["Intense", "Energetic", "Relaxed", "Pain relief"],
			 "negativeEffects": ["Dry Mouth", "Dry Eyes", "Anxious", "Paranoid"],
			 "descriptionDetailed": "Pineapple Chunk will deliver a small dose of CBD with its crushing THC content, resulting in powerful painkilling and stress-relieving properties.",
			 "descriptionAbbrev": "Pineapple Chunk will deliver a small dose of CBD with its crushing THC content, resulting in powerful painkilling and stress-relieving properties.",
			 "tags": [""],
			 "imageUrl": "images/strains/pineapple-chunk_100x100.jpg"
			},
			{"strainId": 232,
			 "strainName": "Pot of Gold",
			 "strainType": "Indica",
			 "components": [
			 	{ 
			 		"name": "THC9",  
			 		"value": 17.36
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 0.17
			 	},
			 	{ 
			 		"name": "CBN", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBG", 
			 		"value": 0.13	
			 	},
			 	{ 
			 		"name": "CBC", 
			 		"value": 0.00 
			 	},
			 	{ 
			 		"name": "THCV", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCA", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THC8", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pulegone", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Myrcene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Caryophyllene", 
			 		"value": 0.77
			 	},
			 	{ 
			 		"name": "Limonene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Linalool", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Eucalyptol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pinene", 
			 		"value": 0.66
			 	},
			 	{ 
			 		"name": "Terpineol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol-4", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cymene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Apigenin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Quercetin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cannflavin A", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Beta-sitosterol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBL", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Humulene", 
			 		"value": 1.47
				},
				{ 
			 		"name": "Terpinolene", 
			 		"value": 0.00
				}	
		 	], 
		 	"taste": ["Flowery", "Pungent", "Berry", "Hash"],
		 	 "conditions": ["Stress", "Insomnia", "Pain", "Appetite Loss", "Depression", "Fibromyalgia"],
			 "positiveEffects": ["Happy", "Relaxed", "Uplifted", "Euphoric", "Pain relief", "Hungry"],
			 "negativeEffects": ["Dry Mouth", "Dry Eyes", "Headache", "Dizzy", "Paranoid", "Munchies"],
			 "descriptionDetailed": "Comes on quick and is very much a head stone. Usually very sticky and hard to break up by hand, definitely use a grinder for this variety.",
			 "descriptionAbbrev": "Comes on quick and is very much a head stone. Usually very sticky and hard to break up by hand, definitely use a grinder for this variety.",
			 "tags": [""],
			 "imageUrl": "images/strains/pot-of-gold_100x100.jpg"
			},
			{"strainId": 233,
			 "strainName": "Tangerine Kush",
			 "strainType": "Indica",
			 "components": [
			 	{ 
			 		"name": "THC9",  
			 		"value": 12.95
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 0.34
			 	},
			 	{ 
			 		"name": "CBN", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBG", 
			 		"value": 0.84	
			 	},
			 	{ 
			 		"name": "CBC", 
			 		"value": 0.00 
			 	},
			 	{ 
			 		"name": "THCV", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCA", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THC8", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pulegone", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Myrcene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Caryophyllene", 
			 		"value": 0.70
			 	},
			 	{ 
			 		"name": "Limonene", 
			 		"value": 1.37
			 	},
			 	{ 
			 		"name": "Linalool", 
			 		"value": 2.10
			 	},
			 	{ 
			 		"name": "Eucalyptol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pinene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol-4", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cymene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Apigenin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Quercetin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cannflavin A", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Beta-sitosterol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBL", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Humulene", 
			 		"value": 0.45
				},
				{ 
			 		"name": "Terpinolene", 
			 		"value": 0.00
				}	
		 	], 
		 	"taste": ["Citrus", "Orange", "Tropical"],
		 	 "conditions": ["Stress", "Headache", "Insomnia", "Pain", "Depression"],
			 "positiveEffects": ["Happy", "Relaxed", "Uplifted", "Euphoric", "Energetic", "Drowsiness", "Pain relief"],
			 "negativeEffects": ["Dry Mouth", "Dry Eyes", "Headache", "Paranoid", "Dizzy", "Drowsiness"],
			 "descriptionDetailed": "Tangerine Kush is potent with a quick onset. Providing consumers with a happy, body-heavy sensation, this strain is great for those looking for a lazy day at the beach.",
			 "descriptionAbbrev": "Tangerine Kush is potent with a quick onset. Providing consumers with a happy, body-heavy sensation, this strain is great for those looking for a lazy day at the beach.",
			 "tags": [""],
			 "imageUrl": "images/strains/tangerine-kush_100x100.jpg"
			},
			{"strainId": 234,
			 "strainName": "Black Cherry Soda",
			 "strainType": "Hybrid",
			 "components": [
			 	{ 
			 		"name": "THC9",  
			 		"value": 20.01
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 0.18
			 	},
			 	{ 
			 		"name": "CBN", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBG", 
			 		"value": 0.75	
			 	},
			 	{ 
			 		"name": "CBC", 
			 		"value": 0.00 
			 	},
			 	{ 
			 		"name": "THCV", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCA", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THC8", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pulegone", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Myrcene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Caryophyllene", 
			 		"value": 0.87
			 	},
			 	{ 
			 		"name": "Limonene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Linalool", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Eucalyptol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pinene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol-4", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cymene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Apigenin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Quercetin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cannflavin A", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Beta-sitosterol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBL", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Humulene", 
			 		"value": 0.36
				},
				{ 
			 		"name": "Terpinolene", 
			 		"value": 0.00
				}	
		 	], 
		 	"taste": ["Sweet", "Berry", "Pungent"],
		 	 "conditions": ["Fibromyalgia", "Pain", "Stress", "Anxiety", "Appetite Loss"],
			 "positiveEffects": ["Energetic", "Pain relief", "Long Lasting", "Clear headed", "Balanced", "Creative", "Relaxed", "Tingly"],
			 "negativeEffects": ["Dry Mouth", "Munchies", "Anxious"],
			 "descriptionDetailed": "Black Cherry Soda is a potent medicine that hits without heavy sedation, making it popular among patients treating severe symptoms throughout the day.",
			 "descriptionAbbrev": "Black Cherry Soda is a potent medicine that hits without heavy sedation, making it popular among patients treating severe symptoms throughout the day.",
			 "tags": [""],
			 "imageUrl": "images/strains/black-cherry-soda_100x100.jpg"
			},
			{"strainId": 235,
			 "strainName": "Qrazy Train",
			 "strainType": "Hybrid",
			 "components": [
			 	{ 
			 		"name": "THC9",  
			 		"value": 14.02
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 0.08
			 	},
			 	{ 
			 		"name": "CBN", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBG", 
			 		"value": 0.11	
			 	},
			 	{ 
			 		"name": "CBC", 
			 		"value": 0.00 
			 	},
			 	{ 
			 		"name": "THCV", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCA", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THC8", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pulegone", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Myrcene", 
			 		"value": 0.20
			 	},
			 	{ 
			 		"name": "Caryophyllene", 
			 		"value": 0.35
			 	},
			 	{ 
			 		"name": "Limonene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Linalool", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Eucalyptol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pinene", 
			 		"value": 0.72
			 	},
			 	{ 
			 		"name": "Terpineol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol-4", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cymene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Apigenin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Quercetin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cannflavin A", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Beta-sitosterol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBL", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Humulene", 
			 		"value": 0.35
				},
				{ 
			 		"name": "Terpinolene", 
			 		"value": 0.00
				}	
		 	], 
		 	"taste": ["Sweet", "Citrus", "Earthy", "Fruit", "Spicy"],
		 	 "conditions": ["Fibromyalgia", "Stress", "Pain", "Depression", "Insomnia", "Muscle Spasms"],
			 "positiveEffects": ["Relaxed", "Happy", "Uplifted", "Focused", "Euphoric"],
			 "negativeEffects": ["Dry Mouth", "Dry Eyes", "Headache", "Dizzy", "Paranoid"],
			 "descriptionDetailed": "A true hybrid, this train will have you feeling mellow and alert. Its diversity comes out in the strain's unique flavor that includes spice and fruit notes.",
			 "descriptionAbbrev": "A true hybrid, this train will have you feeling mellow and alert. Its diversity comes out in the strain's unique flavor that includes spice and fruit notes.",
			 "tags": [""],
			 "imageUrl": "images/strains/qrazy-train_100x100.jpg"
			},
			{"strainId": 236,
			 "strainName": "Death Star OG",
			 "strainType": "Indica",
			 "components": [
			 	{ 
			 		"name": "THC9",  
			 		"value": 23.81
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 0.14
			 	},
			 	{ 
			 		"name": "CBN", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBG", 
			 		"value": 0.45	
			 	},
			 	{ 
			 		"name": "CBC", 
			 		"value": 0.07 
			 	},
			 	{ 
			 		"name": "THCV", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCA", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THC8", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pulegone", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Myrcene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Caryophyllene", 
			 		"value": 0.39
			 	},
			 	{ 
			 		"name": "Limonene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Linalool", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Eucalyptol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pinene", 
			 		"value": 0.57
			 	},
			 	{ 
			 		"name": "Terpineol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol-4", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cymene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Apigenin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Quercetin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cannflavin A", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Beta-sitosterol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBL", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Humulene", 
			 		"value": 3.05
				},
				{ 
			 		"name": "Terpinolene", 
			 		"value": 0.00
				}	
		 	], 
		 	"taste": ["Earthy", "Sweet", "Pungent"],
		 	 "conditions": ["Fibromyalgia", "Stress", "Insomnia", "Pain", "Nausea", "Depression"],
			 "positiveEffects": ["Euphoric", "Drowsiness", "Relaxed", "Happy", "Uplifted"],
			 "negativeEffects": ["Drowsiness", "Dry Mouth", "Dry Eyes", "Dizzy", "Paranoid", "Anxious"],
			 "descriptionDetailed": "Death Star OG is a potent cross between Sour Diesel, Sensi Star, and OG Kush.",
			 "descriptionAbbrev": "Death Star OG is a potent cross between Sour Diesel, Sensi Star, and OG Kush.",
			 "tags": [""],
			 "imageUrl": "images/strains/death-star-og_100x100.jpg"
			},
			{"strainId": 237,
			 "strainName": "Blueberry Cheesecake",
			 "strainType": "Hybrid",
			 "components": [
			 	{ 
			 		"name": "THC9",  
			 		"value": 23.26
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 0.10
			 	},
			 	{ 
			 		"name": "CBN", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBG", 
			 		"value": 0.24	
			 	},
			 	{ 
			 		"name": "CBC", 
			 		"value": 0.03 
			 	},
			 	{ 
			 		"name": "THCV", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCA", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THC8", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pulegone", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Myrcene", 
			 		"value": 0.10
			 	},
			 	{ 
			 		"name": "Caryophyllene", 
			 		"value": 0.64
			 	},
			 	{ 
			 		"name": "Limonene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Linalool", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Eucalyptol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pinene", 
			 		"value": 0.58
			 	},
			 	{ 
			 		"name": "Terpineol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol-4", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cymene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Apigenin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Quercetin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cannflavin A", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Beta-sitosterol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBL", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Humulene", 
			 		"value": 0.44
				},
				{ 
			 		"name": "Terpinolene", 
			 		"value": 0.00
				}	
		 	], 
		 	"taste": ["Coffee", "Blueberry", "Sweet", "Cheese"],
		 	 "conditions": ["Fibromyalgia","Stress", "Pain", "Depression", "Nausea", "Insomnia"],
			 "positiveEffects": ["Relaxed", "Happy", "Uplifted", "Drowsiness", "Euphoric", "Hungry"],
			 "negativeEffects": ["Drowsiness", "Munchies", "Dry Mouth", "Dry Eyes", "Headache", "Paranoid", "Dizzy"],
			 "descriptionDetailed": "Strong coffee, blueberry, sweet flavors and a smooth smoke with a heavy throat hit.",
			 "descriptionAbbrev": "Strong coffee, blueberry, sweet flavors and a smooth smoke with a heavy throat hit.",
			 "tags": [""],
			 "imageUrl": "images/strains/blueberry-cheesecake_100x100.jpg"
			},
			{"strainId": 238,
			 "strainName": "Blue Crack",
			 "strainType": "Hybrid",
			 "components": [
			 	{ 
			 		"name": "THC9",  
			 		"value": 6.15
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 0.17
			 	},
			 	{ 
			 		"name": "CBN", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBG", 
			 		"value": 0.22	
			 	},
			 	{ 
			 		"name": "CBC", 
			 		"value": 0.00 
			 	},
			 	{ 
			 		"name": "THCV", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCA", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THC8", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pulegone", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Myrcene", 
			 		"value": 0.04
			 	},
			 	{ 
			 		"name": "Caryophyllene", 
			 		"value": 0.52
			 	},
			 	{ 
			 		"name": "Limonene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Linalool", 
			 		"value": 2.01
			 	},
			 	{ 
			 		"name": "Eucalyptol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pinene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol-4", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cymene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Apigenin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Quercetin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cannflavin A", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Beta-sitosterol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBL", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Humulene", 
			 		"value": 0.00
				},
				{ 
			 		"name": "Terpinolene", 
			 		"value": 0.00
				}	
		 	], 
		 	"taste": ["Blueberry", "Berry", "Mint"],
		 	 "conditions": ["Stress", "Depression", "Pain", "Fibromyalgia", "Fatigue", "Muscle Spasms"],
			 "positiveEffects": ["Relaxed", "Uplifted", "Happy", "Creative", "Focused"],
			 "negativeEffects": ["Dry Mouth", "Dry Eyes", "Headache", "Dizzy", "Paranoid"],
			 "descriptionDetailed": "As a high-energy strain with moderate to long-lasting effects, Blue Crack is a popular choice for daytime medicating.",
			 "descriptionAbbrev": "As a high-energy strain with moderate to long-lasting effects, Blue Crack is a popular choice for daytime medicating.",
			 "tags": [""],
			 "imageUrl": "images/strains/blue-crack_100x100.jpg"
			},
			{"strainId": 239,
			 "strainName": "Bio-Diesel",
			 "strainType": "Hybrid",
			 "components": [
			 	{ 
			 		"name": "THC9",  
			 		"value": 16.57
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 0.24
			 	},
			 	{ 
			 		"name": "CBN", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBG", 
			 		"value": 0.64	
			 	},
			 	{ 
			 		"name": "CBC", 
			 		"value": 0.00 
			 	},
			 	{ 
			 		"name": "THCV", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCA", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THC8", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pulegone", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Myrcene", 
			 		"value": 0.13
			 	},
			 	{ 
			 		"name": "Caryophyllene", 
			 		"value": 0.91
			 	},
			 	{ 
			 		"name": "Limonene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Linalool", 
			 		"value": 1.29
			 	},
			 	{ 
			 		"name": "Eucalyptol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pinene", 
			 		"value": 0.52
			 	},
			 	{ 
			 		"name": "Terpineol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol-4", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cymene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Apigenin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Quercetin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cannflavin A", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Beta-sitosterol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBL", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Humulene", 
			 		"value": 2.23
				},
				{ 
			 		"name": "Terpinolene", 
			 		"value": 0.00
				}	
		 	], 
		 	"taste": ["Diesel", "Earthy", "Chemical"],
		 	 "conditions": ["Pain", "Fibromyalgia", "Stress", "Depression", "Headache", "Appetite Loss"],
			 "positiveEffects": ["Euphoric", "Happy", "Relaxed", "Uplifted", "Creative"],
			 "negativeEffects": ["Dry Mouth", "Dry Eyes", "Headache", "Paranoid", "Dizzy"],
			 "descriptionDetailed": "Excels at delivering both intense and balanced effects: an acute, speedy sativa onset gravitates into numbing relaxation. The hybrid effects make this strain a reliable choice for mental and physical relief alike, so it's no surprise that Bio-Diesel is cherished by cannabis connoisseurs.",
			 "descriptionAbbrev": "Excels at delivering both intense and balanced effects: an acute, speedy sativa onset gravitates into numbing relaxation. The hybrid effects make this strain a reliable choice for mental and physical relief alike, so it's no surprise that Bio-Diesel is cherished by cannabis connoisseurs.",
			 "tags": [""],
			 "imageUrl": "images/strains/bio-diesel_100x100.jpg"
			},
			{"strainId": 240,
			 "strainName": "Power Kush",
			 "strainType": "Indica",
			 "components": [
			 	{ 
			 		"name": "THC9",  
			 		"value": 6.28
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 7.71
			 	},
			 	{ 
			 		"name": "CBN", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBG", 
			 		"value": 0.25	
			 	},
			 	{ 
			 		"name": "CBC", 
			 		"value": 0.05 
			 	},
			 	{ 
			 		"name": "THCV", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCA", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THC8", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pulegone", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Myrcene", 
			 		"value": 0.18
			 	},
			 	{ 
			 		"name": "Caryophyllene", 
			 		"value": 0.27
			 	},
			 	{ 
			 		"name": "Limonene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Linalool", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Eucalyptol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pinene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol-4", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cymene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Apigenin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Quercetin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cannflavin A", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Beta-sitosterol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBL", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Humulene", 
			 		"value": 0.22
				},
				{ 
			 		"name": "Terpinolene", 
			 		"value": 0.43
				}	
		 	], 
		 	"taste": ["Sweet", "Earthy", "Pine"],
		 	 "conditions": ["Fibromyalgia", "Pain", "Stress", "Inflammation", "Depression", "Muscle Spasms"],
			 "positiveEffects": ["Relaxed", "Happy", "Euphoric", "Energetic", "Uplifted"],
			 "negativeEffects": ["Dry Mouth", "Dry Eyes", "Dizzy", "Headache", "Paranoid"],
			 "descriptionDetailed": "The aroma is likened to a sweet skunk smell with a light touch of strawberry and orange. The effects are both cerebral and physical with a THC content up to 16% and a CBD of 0.18%",
			 "descriptionAbbrev": "The aroma is likened to a sweet skunk smell with a light touch of strawberry and orange. The effects are both cerebral and physical with a THC content up to 16% and a CBD of 0.18%",
			 "tags": [""],
			 "imageUrl": "images/strains/power-kush_100x100.jpg"
			},
			{"strainId": 241,
			 "strainName": "Panama Red",
			 "strainType": "Sativa",
			 "components": [
			 	{ 
			 		"name": "THC9",  
			 		"value": 27.52
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 0.30
			 	},
			 	{ 
			 		"name": "CBN", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBG", 
			 		"value": 0.19	
			 	},
			 	{ 
			 		"name": "CBC", 
			 		"value": 0.00 
			 	},
			 	{ 
			 		"name": "THCV", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCA", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THC8", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pulegone", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Myrcene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Caryophyllene", 
			 		"value": 0.89
			 	},
			 	{ 
			 		"name": "Limonene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Linalool", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Eucalyptol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pinene", 
			 		"value": 0.45
			 	},
			 	{ 
			 		"name": "Terpineol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol-4", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cymene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Apigenin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Quercetin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cannflavin A", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Beta-sitosterol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBL", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Humulene", 
			 		"value": 0.30
				},
				{ 
			 		"name": "Terpinolene", 
			 		"value": 0.15
				}	
		 	], 
		 	"taste": ["Earthy", "Tropical", "Mint"],
		 	 "conditions": ["Depression", "Stress", "Pain", "Fibromyalgia", "Fatigue", "Nausea"],
			 "positiveEffects": ["Happy","Energetic", "Uplifted", "Euphoric", "Creative"],
			 "negativeEffects": ["Dry Mouth", "Headache", "Dry Eyes", "Anxious", "Dizzy"],
			 "descriptionDetailed": "Originating from Panama, this pure sativa rose to stardom in the late 1960's thanks to its typical sativa effects: speedy and intense, bordering on psychedelic. Those who fondly recall days of its prominence love its smooth medicating experience and loftily contemplate its revival.",
			 "descriptionAbbrev": "Originating from Panama, this pure sativa rose to stardom in the late 1960's thanks to its typical sativa effects: speedy and intense, bordering on psychedelic. Those who fondly recall days of its prominence love its smooth medicating experience and loftily contemplate its revival.",
			 "tags": [""],
			 "imageUrl": "images/strains/panama-red_100x100.jpg"
			},
			{"strainId": 242,
			 "strainName": "Purple Dragon",
			 "strainType": "Indica",
			 "components": [
			 	{ 
			 		"name": "THC9",  
			 		"value": 14.18
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 0.11
			 	},
			 	{ 
			 		"name": "CBN", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBG", 
			 		"value": 0.05	
			 	},
			 	{ 
			 		"name": "CBC", 
			 		"value": 0.00 
			 	},
			 	{ 
			 		"name": "THCV", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCA", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THC8", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pulegone", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Myrcene", 
			 		"value": 0.08
			 	},
			 	{ 
			 		"name": "Caryophyllene", 
			 		"value": 0.47
			 	},
			 	{ 
			 		"name": "Limonene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Linalool", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Eucalyptol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pinene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol-4", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cymene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Apigenin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Quercetin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cannflavin A", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Beta-sitosterol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBL", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Humulene", 
			 		"value": 0.89
				},
				{ 
			 		"name": "Terpinolene", 
			 		"value": 0.00
				}	
		 	], 
		 	"taste": ["Grape", "Sweet", "Pungent"],
		 	 "conditions": ["Stress", "Insomnia", "Pain", "Fibromyalgia", "Fatigue", "Nausea"],
			 "positiveEffects": ["Relaxed", "Euphoric", "Drowsiness", "Happy", "Creative"],
			 "negativeEffects": ["Dry Mouth", "Dry Eyes", "Paranoid", "Dizzy", "Anxious"],
			 "descriptionDetailed": "While initially uplifting, Purple Dragon shows its full range of effects over time. Relaxing muscles and relieving pain, this strain provides a gentle and effective body buzz. Purple Dragon is a must-try strain for those looking for a truly different cannabis experience.",
			 "descriptionAbbrev": "While initially uplifting, Purple Dragon shows its full range of effects over time. Relaxing muscles and relieving pain, this strain provides a gentle and effective body buzz. Purple Dragon is a must-try strain for those looking for a truly different cannabis experience.",
			 "tags": [""],
			 "imageUrl": "images/strains/purple-dragon_100x100.jpg"
			},
			{"strainId": 243,
			 "strainName": "King Kong",
			 "strainType": "Hybrid",
			 "components": [
			 	{ 
			 		"name": "THC9",  
			 		"value": 17.14
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 0.34
			 	},
			 	{ 
			 		"name": "CBN", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBG", 
			 		"value": 0.80	
			 	},
			 	{ 
			 		"name": "CBC", 
			 		"value": 0.12 
			 	},
			 	{ 
			 		"name": "THCV", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCA", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THC8", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pulegone", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Myrcene", 
			 		"value": 1.74
			 	},
			 	{ 
			 		"name": "Caryophyllene", 
			 		"value": 0.37
			 	},
			 	{ 
			 		"name": "Limonene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Linalool", 
			 		"value": 2.62
			 	},
			 	{ 
			 		"name": "Eucalyptol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pinene", 
			 		"value": 0.77
			 	},
			 	{ 
			 		"name": "Terpineol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol-4", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cymene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Apigenin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Quercetin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cannflavin A", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Beta-sitosterol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBL", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Humulene", 
			 		"value": 0.43
				},
				{ 
			 		"name": "Terpinolene", 
			 		"value": 0.00
				}	
		 	], 
		 	"taste": ["Pungent", "Earthy", "Skunk"],
		 	 "conditions": ["Stress", "Pain", "Fibromyalgia", "Appetite Loss", "Insomnia", "Nausea"],
			 "positiveEffects": ["Relaxed", "Happy", "Euphoric", "Hungry", "Giggly", "Long Lasting"],
			 "negativeEffects": ["Dry Mouth", "Dry Eyes", "Dizzy", "Headache", "Anxious", "Munchies"],
			 "descriptionDetailed": "King Kong is known to have a pungent sour, skunky smell with long-lasting effects that target pain, nausea, anxiety, and the appetite. Even though its genetics tip toward the indica side, King Kong has an uplifting and focused effect enjoyed by indica and sativa lovers alike.",
			 "descriptionAbbrev": "King Kong is known to have a pungent sour, skunky smell with long-lasting effects that target pain, nausea, anxiety, and the appetite. Even though its genetics tip toward the indica side, King Kong has an uplifting and focused effect enjoyed by indica and sativa lovers alike.",
			 "tags": [""],
			 "imageUrl": "images/strains/king-kong_100x100.jpg"
			},
			{"strainId": 244,
			 "strainName": "Church OG",
			 "strainType": "Indica",
			 "components": [
			 	{ 
			 		"name": "THC9",  
			 		"value": 18.48
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 0.16
			 	},
			 	{ 
			 		"name": "CBN", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBG", 
			 		"value": 0.07	
			 	},
			 	{ 
			 		"name": "CBC", 
			 		"value": 0.00 
			 	},
			 	{ 
			 		"name": "THCV", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCA", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THC8", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pulegone", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Myrcene", 
			 		"value": 0.11
			 	},
			 	{ 
			 		"name": "Caryophyllene", 
			 		"value": 0.35
			 	},
			 	{ 
			 		"name": "Limonene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Linalool", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Eucalyptol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pinene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol-4", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cymene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Apigenin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Quercetin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cannflavin A", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Beta-sitosterol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBL", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Humulene", 
			 		"value": 0.13
				},
				{ 
			 		"name": "Terpinolene", 
			 		"value": 0.00
				}	
		 	], 
		 	"taste": ["Earthy", "Spicy", "Herbal"],
		 	 "conditions": ["Pain", "Fibromyalgia", "Insomnia", "Fatigue", "Stress", "Depression"],
			 "positiveEffects": ["Relaxed", "Hungry", "Happy", "Dry Mouth", "Tingly", "Pain Relief"],
			 "negativeEffects": ["Dry Mouth", "Dry Eyes", "Paranoid", "Anxious", "Dizzy", "Munchies"],
			 "descriptionDetailed": "Church OG is an indica marijuana strain that provides strong body sensations that may evolve to a lasting cerebral effect.",
			 "descriptionAbbrev": "Church OG is an indica marijuana strain that provides strong body sensations that may evolve to a lasting cerebral effect.",
			 "tags": [""],
			 "imageUrl": "images/strains/church-og_100x100.jpg"
			}, 
			{"strainId": 245,
			 "strainName": "Purple Arrow",
			 "strainType": "Hybrid",
			 "components": [
			 	{ 
			 		"name": "THC9",  
			 		"value": 18.60
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 0.19
			 	},
			 	{ 
			 		"name": "CBN", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBG", 
			 		"value": 0.80	
			 	},
			 	{ 
			 		"name": "CBC", 
			 		"value": 0.03 
			 	},
			 	{ 
			 		"name": "THCV", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCA", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THC8", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pulegone", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Myrcene", 
			 		"value": 0.10
			 	},
			 	{ 
			 		"name": "Caryophyllene", 
			 		"value": 1.26
			 	},
			 	{ 
			 		"name": "Limonene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Linalool", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Eucalyptol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pinene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol-4", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cymene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Apigenin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Quercetin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cannflavin A", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Beta-sitosterol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBL", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Humulene", 
			 		"value": 0.36
				},
				{ 
			 		"name": "Terpinolene", 
			 		"value": 0.00
				}	
		 	], 
		 	"taste": ["Earthy", "Pungent", "Spicy", "Herbal"],
		 	 "conditions": ["Pain", "Fibromyalgia", "Stress", "Depression", "Headache", "Nausea"],
			 "positiveEffects": ["Relaxed", "Euphoric", "Uplifted", "Drowsiness", "Focused"],
			 "negativeEffects": ["Dry Mouth", "Dry Eyes", "Headache", "Dizzy", "Paranoid"],
			 "descriptionDetailed": "This hybrid provides effective relief for severe pain while simultaneously inducing a sense of uplift and euphoria. When you need immediate relief and would like to stay off the couch, Purple Arrow is a fantastic choice.",
			 "descriptionAbbrev": "This hybrid provides effective relief for severe pain while simultaneously inducing a sense of uplift and euphoria. When you need immediate relief and would like to stay off the couch, Purple Arrow is a fantastic choice.",
			 "tags": [""],
			 "imageUrl": "images/strains/purple-arrow_100x100.jpg"
			},
			{"strainId": 246,
			 "strainName": "Pandora's Box",
			 "strainType": "Sativa",
			 "components": [
			 	{ 
			 		"name": "THC9",  
			 		"value": 25.87
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 0.23
			 	},
			 	{ 
			 		"name": "CBN", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBG", 
			 		"value": 1.59	
			 	},
			 	{ 
			 		"name": "CBC", 
			 		"value": 0.03 
			 	},
			 	{ 
			 		"name": "THCV", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCA", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THC8", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pulegone", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Myrcene", 
			 		"value": 0.42
			 	},
			 	{ 
			 		"name": "Caryophyllene", 
			 		"value": 0.61
			 	},
			 	{ 
			 		"name": "Limonene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Linalool", 
			 		"value": 1.68
			 	},
			 	{ 
			 		"name": "Eucalyptol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pinene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol-4", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cymene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Apigenin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Quercetin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cannflavin A", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Beta-sitosterol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBL", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Humulene", 
			 		"value": 0.34
				},
				{ 
			 		"name": "Terpinolene", 
			 		"value": 0.82
				}	
		 	], 
		 	"taste": ["Earthy", "Chemical", "Sweet", "Citrus"],
		 	 "conditions": ["Depression", "Appetite Loss", "Pain", "Fibromyalgia"],
			 "positiveEffects": ["Balanced", "Tingly", "Giggly", "Relaxed", "Uplifted", "Hungry", "Pain relief", "Euphoric"],
			 "negativeEffects": ["Munchies"],
			 "descriptionDetailed": "This strain has high THC levels and a citrus flavor.",
			 "descriptionAbbrev": "This strain has high THC levels and a citrus flavor.",
			 "tags": [""],
			 "imageUrl": "images/strains/pandora-s-box_100x100.jpg"
			},
			{"strainId": 247,
			 "strainName": "Abusive OG",
			 "strainType": "Indica",
			 "components": [
			 	{ 
			 		"name": "THC9",  
			 		"value": 16.83
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 0.10
			 	},
			 	{ 
			 		"name": "CBN", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBG", 
			 		"value": 0.72	
			 	},
			 	{ 
			 		"name": "CBC", 
			 		"value": 0.00 
			 	},
			 	{ 
			 		"name": "THCV", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCA", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THC8", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pulegone", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Myrcene", 
			 		"value": 0.06
			 	},
			 	{ 
			 		"name": "Caryophyllene", 
			 		"value": 0.53
			 	},
			 	{ 
			 		"name": "Limonene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Linalool", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Eucalyptol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pinene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol-4", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cymene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Apigenin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Quercetin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cannflavin A", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Beta-sitosterol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBL", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Humulene", 
			 		"value": 0.70
				},
				{ 
			 		"name": "Terpinolene", 
			 		"value": 0.20
				}	
		 	], 
		 	"taste": ["Spicy", "Herbal", "Earthy", "Pungent"],
		 	 "conditions": ["Pain", "Fibromyalgia", "Anxiety", "Appetite Loss", "Insomnia"],
			 "positiveEffects": ["Pain relief", "Drowsiness", "Relaxed", "Hungry"],
			 "negativeEffects": ["Drowsiness", "Munchies"],
			 "descriptionDetailed": "Despite its violent name, Abusive OG will ease you into in a peaceful state of mind that fades over time to a full-body relaxation.",
			 "descriptionAbbrev": "Despite its violent name, Abusive OG will ease you into in a peaceful state of mind that fades over time to a full-body relaxation.",
			 "tags": [""],
			 "imageUrl": "images/strains/abusive-og_100x100.jpg"
			},
			{"strainId": 248,
			 "strainName": "Platinum Purple Kush",
			 "strainType": "Indica",
			 "components": [
			 	{ 
			 		"name": "THC9",  
			 		"value": 13.25
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 0.01
			 	},
			 	{ 
			 		"name": "CBN", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBG", 
			 		"value": 0.09	
			 	},
			 	{ 
			 		"name": "CBC", 
			 		"value": 0.00 
			 	},
			 	{ 
			 		"name": "THCV", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCA", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THC8", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pulegone", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Myrcene", 
			 		"value": 0.03
			 	},
			 	{ 
			 		"name": "Caryophyllene", 
			 		"value": 0.42
			 	},
			 	{ 
			 		"name": "Limonene", 
			 		"value": 0.55
			 	},
			 	{ 
			 		"name": "Linalool", 
			 		"value": 0.18
			 	},
			 	{ 
			 		"name": "Eucalyptol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pinene", 
			 		"value": 0.12
			 	},
			 	{ 
			 		"name": "Terpineol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol-4", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cymene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Apigenin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Quercetin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cannflavin A", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Beta-sitosterol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBL", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Humulene", 
			 		"value": 0.13
				},
				{ 
			 		"name": "Terpinolene", 
			 		"value": 0.00
				}	
		 	], 
		 	"taste": [""],
		 	 "conditions": ["Stress", "Insomnia", "Appetite Loss", "Pain", "Fibromyalgia", "Depression"],
			 "positiveEffects": ["Drowsiness", "Relaxed", "Euphoric", "Happy", "Hungry", "Pain relief", "Focused"],
			 "negativeEffects": ["Dry Eyes", "Dry Mouth", "Dizzy", "Anxious", "Paranoid",  "Drowsiness", "Couch Lock", "Munchies"],
			 "descriptionDetailed": "A great nighttime cannabis strain. If you suffer from insomnia or would like to wind down after a busy workday, this strain may be a good one to try.",
			 "descriptionAbbrev": "A great nighttime cannabis strain. If you suffer from insomnia or would like to wind down after a busy workday, this strain may be a good one to try.",
			 "tags": [""],
			 "imageUrl": "images/strains/Platinum-Purple-Kush_100x100.jpg"
			},
			{"strainId": 249,
			 "strainName": "Black Tuna",
			 "strainType": "Hybrid",
			 "components": [
			 	{ 
			 		"name": "THC9",  
			 		"value": 23.00
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBN", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBG", 
			 		"value": 0.00	
			 	},
			 	{ 
			 		"name": "CBC", 
			 		"value": 0.00 
			 	},
			 	{ 
			 		"name": "THCV", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCA", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THC8", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pulegone", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Myrcene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Caryophyllene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Limonene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Linalool", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Eucalyptol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pinene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol-4", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cymene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Apigenin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Quercetin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cannflavin A", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Beta-sitosterol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBL", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Humulene", 
			 		"value": 0.00
				},
				{ 
			 		"name": "Terpinolene", 
			 		"value": 0.00
				}	
		 	], 
		 	"taste": ["Earthy", "Pungent", "Skunk", "Spicy"],
		 	 "conditions": ["Pain", "Fibromyalgia", "Chronic Inflammation", "Eye Pressure", "Stress", "Insomnia", "Nausea", "Depression", "Appetite Loss"],
			 "positiveEffects": ["Happy", "Pain relief", "Euphoric", "Relaxed", "Drowsiness", "Hungry",  "Uplifted"],
			 "negativeEffects": ["Couch Lock", "Munchies", "Dry Mouth", "Dizzy", "Dry Eyes", "Anxious"],
			 "descriptionDetailed": "Top strain for medical users and those that are looking for that extra punch which they havent found in the past years. With Black Tuna, you will be off your sleeping pills in record time. Note that this smoke can be too strong for some users.",
			 "descriptionAbbrev": "Top strain for medical users and those that are looking for that extra punch which they havent found in the past years.  With Black Tuna, you will be off your sleeping pills in record time. Note that this smoke can be too strong for some users.",
			 "tags": [""],
			 "imageUrl": "images/strains/black-tuna_100x100.jpg"
			},
			{"strainId": 250,
			 "strainName": "Charlie Sheen",
			 "strainType": "Hybrid",
			 "components": [
			 	{ 
			 		"name": "THC9",  
			 		"value": 15.34
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 0.27
			 	},
			 	{ 
			 		"name": "CBN", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBG", 
			 		"value": 0.45	
			 	},
			 	{ 
			 		"name": "CBC", 
			 		"value": 0.09 
			 	},
			 	{ 
			 		"name": "THCV", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCA", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THC8", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pulegone", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Myrcene", 
			 		"value": 1.27
			 	},
			 	{ 
			 		"name": "Caryophyllene", 
			 		"value": 0.58
			 	},
			 	{ 
			 		"name": "Limonene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Linalool", 
			 		"value": 3.87
			 	},
			 	{ 
			 		"name": "Eucalyptol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pinene", 
			 		"value": 0.59
			 	},
			 	{ 
			 		"name": "Terpineol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol-4", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cymene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Apigenin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Quercetin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cannflavin A", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Beta-sitosterol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBL", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Humulene", 
			 		"value": 0.35
				},
				{ 
			 		"name": "Terpinolene", 
			 		"value": 0.00
				}	
		 	], 
		 	"taste": ["Earthy", "Sweet", "Citrus"],
		 	 "conditions": ["Insomnia", "Pain", "Fibromyalgia", "Depression"],
			 "positiveEffects": ["Relaxed", "Euphoric", "Uplifted", "Long Lasting", "Drowsiness", "Pain relief"],
			 "negativeEffects": ["Drowsiness", "Couch Lock"],
			 "descriptionDetailed": "The effects are relaxing and uplifted, with a lengthy, sleepy come-down great for pain relief and insomnia.",
			 "descriptionAbbrev": "The effects are relaxing and uplifted, with a lengthy, sleepy come-down great for pain relief and insomnia.",
			 "tags": [""],
			 "imageUrl": "images/strains/charlie-sheen_100x100.jpg"
			}, 
			{"strainId": 251,
			 "strainName": "Rainbow",
			 "strainType": "Hybrid",
			 "components": [
			 	{ 
			 		"name": "THC9",  
			 		"value": 19.40
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 0.04
			 	},
			 	{ 
			 		"name": "CBN", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBG", 
			 		"value": 0.25	
			 	},
			 	{ 
			 		"name": "CBC", 
			 		"value": 0.07 
			 	},
			 	{ 
			 		"name": "THCV", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCA", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THC8", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pulegone", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Myrcene", 
			 		"value": 0.47
			 	},
			 	{ 
			 		"name": "Caryophyllene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Limonene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Linalool", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Eucalyptol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pinene", 
			 		"value": 1.29
			 	},
			 	{ 
			 		"name": "Terpineol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol-4", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cymene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Apigenin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Quercetin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cannflavin A", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Beta-sitosterol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBL", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Humulene", 
			 		"value": 0.79
				},
				{ 
			 		"name": "Terpinolene", 
			 		"value": 0.00
				}	
		 	], 
		 	"taste": ["Tropical", "Citrus", "Grapefruit"],
		 	 "conditions": ["Pain", "Fibromyalgia", "Stress", "Muscle Spasms", "Appetite Loss", "Nausea"],
			 "positiveEffects": ["Happy", "Relaxed", "Euphoric", "Mellow", "Uplifted", "Creative", "Hungry", "Pain relief"],
			 "negativeEffects": ["Hungry", "Dry Mouth", "Dry Eyes", "Dizzy", "Headache", "Paranoid", "Munchies"],
			 "descriptionDetailed": "Tastes similar to tropical Starburst with small dense purple, orange and green colored buds.",
			 "descriptionAbbrev": "Tastes similar to tropical Starburst with small dense purple, orange and green colored buds.",
			 "tags": [""],
			 "imageUrl": "images/strains/rainbow_100x100.jpg"
			},
			{"strainId": 252,
			 "strainName": "Caramelicious",
			 "strainType": "Hybrid",
			 "components": [
			 	{ 
			 		"name": "THC9",  
			 		"value": 21.00
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBN", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBG", 
			 		"value": 0.00	
			 	},
			 	{ 
			 		"name": "CBC", 
			 		"value": 0.00 
			 	},
			 	{ 
			 		"name": "THCV", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCA", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THC8", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pulegone", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Myrcene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Caryophyllene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Limonene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Linalool", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Eucalyptol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pinene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol-4", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cymene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Apigenin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Quercetin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cannflavin A", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Beta-sitosterol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBL", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Humulene", 
			 		"value": 0.00
				},
				{ 
			 		"name": "Terpinolene", 
			 		"value": 0.00
				}	
		 	], 
		 	"taste": ["Sweet"],
		 	 "conditions": ["Depression", "Stress", "Pain", "Fibromyalgia", "Nausea", "Inflammation", "Fatigue"],
			 "positiveEffects": ["Happy", "Uplifted", "Euphoric", "Relaxed", "Mellow"],
			 "negativeEffects": ["Dry Mouth", "Dry Eyes", "Dizzy", "Headache", "Paranoid"],
			 "descriptionDetailed": "The effect is a steady buzz, but not too strong. It lives up to its name as its' name as its' buds are sticky, and it tastes like caramel. Recommended for those who have depression.",
			 "descriptionAbbrev": "The effect is a steady buzz, but not too strong. It lives up to its name as its' name as its' buds are sticky, and it tastes like caramel. Recommended for those who have depression.",
			 "tags": [""],
			 "imageUrl": "images/strains/caramelicious_100x100.jpg"
			},
			{"strainId": 253,
			 "strainName": "Sour Cream",
			 "strainType": "Hybrid",
			 "components": [
			 	{ 
			 		"name": "THC9",  
			 		"value": 17.30
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 0.07
			 	},
			 	{ 
			 		"name": "CBN", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBG", 
			 		"value": 0.09	
			 	},
			 	{ 
			 		"name": "CBC", 
			 		"value": 0.00 
			 	},
			 	{ 
			 		"name": "THCV", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCA", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THC8", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pulegone", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Myrcene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Caryophyllene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Limonene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Linalool", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Eucalyptol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pinene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol-4", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cymene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Apigenin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Quercetin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cannflavin A", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Beta-sitosterol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBL", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Humulene", 
			 		"value": 0.00
				},
				{ 
			 		"name": "Terpinolene", 
			 		"value": 0.00
				}	
		 	], 
		 	"taste": ["Sweet", "Earthy", "Berry"],
		 	 "conditions": ["Depression", "Anxiety", "Stress", "Pain", "Fibromyalgia"],
			 "positiveEffects": ["Uplifted", "Happy", "Relaxed", "Drowsiness", "Balanced"],
			 "negativeEffects": ["Drowsiness", "Dizzy"],
			 "descriptionDetailed": "This strain is perfect for a relaxing night in, and anyone looking for instant stress relief will find it in Sour Cream. ",
			 "descriptionAbbrev": "This strain is perfect for a relaxing night in, and anyone looking for instant stress relief will find it in Sour Cream.",
			 "tags": [""],
			 "imageUrl": "images/strains/sour-cream_100x100.jpg"
			},
			{"strainId": 254,
			 "strainName": "Apollo 11",
			 "strainType": "Hybrid",
			 "components": [
			 	{ 
			 		"name": "THC9",  
			 		"value": 14.61
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 0.06
			 	},
			 	{ 
			 		"name": "CBN", 
			 		"value": 0.15
			 	},
			 	{ 
			 		"name": "CBG", 
			 		"value": 0.00	
			 	},
			 	{ 
			 		"name": "CBC", 
			 		"value": 0.00 
			 	},
			 	{ 
			 		"name": "THCV", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCA", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THC8", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pulegone", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Myrcene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Caryophyllene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Limonene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Linalool", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Eucalyptol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pinene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol-4", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cymene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Apigenin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Quercetin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cannflavin A", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Beta-sitosterol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBL", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Humulene", 
			 		"value": 0.00
				},
				{ 
			 		"name": "Terpinolene", 
			 		"value": 0.00
				}	
		 	], 
		 	"taste": ["Citrus", "Sweet", "Pungent"],
		 	 "conditions": ["Fibromyalgia", "Stress", "Depression", "Headache", "Pain", "Fatigue"],
			 "positiveEffects": ["Uplifted", "Energetic", "Euphoric", "Creative", "Focused"],
			 "negativeEffects": ["Dry Mouth", "Dry Eyes", "Paranoid", "Dizzy", "Headache"],
			 "descriptionDetailed": "Effective for treating stress and moderate pain, for a few hours this strain will give you a first-class trip out of this world.",
			 "descriptionAbbrev": "Effective for treating stress and moderate pain, for a few hours this strain will give you a first-class trip out of this world.",
			 "tags": [""],
			 "imageUrl": "images/strains/apollo-11_100x100.jpg"
			},
			{"strainId": 255,
			 "strainName": "Green Crack Extreme",
			 "strainType": "Sativa",
			 "components": [
			 	{ 
			 		"name": "THC9",  
			 		"value": 17.42
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 0.29
			 	},
			 	{ 
			 		"name": "CBN", 
			 		"value": 0.49
			 	},
			 	{ 
			 		"name": "CBG", 
			 		"value": 0.00	
			 	},
			 	{ 
			 		"name": "CBC", 
			 		"value": 0.00 
			 	},
			 	{ 
			 		"name": "THCV", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCA", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THC8", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pulegone", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Myrcene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Caryophyllene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Limonene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Linalool", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Eucalyptol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pinene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol-4", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cymene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Apigenin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Quercetin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cannflavin A", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Beta-sitosterol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBL", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Humulene", 
			 		"value": 0.00
				},
				{ 
			 		"name": "Terpinolene", 
			 		"value": 0.00
				}	
		 	], 
		 	"taste": ["Sweet", "Earthy", "Skunk"],
		 	 "conditions": ["Fibromyalgia", "Depression", "Fatigue", "Appetite Loss", "Headache", "Stress"],
			 "positiveEffects": ["Happy", "Energetic", "Uplifted", "Euphoric", "Creative", "Hungry"],
			 "negativeEffects": ["Dry Mouth", "Dry Eyes", "Paranoid", "Dizzy", "Headache", "Munchies"],
			 "descriptionDetailed": "This is the more extreme sister of the original Green Crack that will leave you with the same creative mental effects but may not leave you quite as focused. Contrary to its extreme name, this strain is helpful in reducing stress and getting inspired.",
			 "descriptionAbbrev": "This is the more extreme sister of the original Green Crack that will leave you with the same creative mental effects but may not leave you quite as focused. Contrary to its extreme name, this strain is helpful in reducing stress and getting inspired.",
			 "tags": [""],
			 "imageUrl": "images/strains/green-crack-extreme_100x100.jpg"
			},
			{"strainId": 256,
			 "strainName": "Sour Cheese",
			 "strainType": "Hybrid",
			 "components": [
			 	{ 
			 		"name": "THC9",  
			 		"value": 20.50
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 0.20
			 	},
			 	{ 
			 		"name": "CBN", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBG", 
			 		"value": 0.90	
			 	},
			 	{ 
			 		"name": "CBC", 
			 		"value": 0.50 
			 	},
			 	{ 
			 		"name": "THCV", 
			 		"value": 1.00
			 	},
			 	{ 
			 		"name": "THCA", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THC8", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pulegone", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Myrcene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Caryophyllene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Limonene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Linalool", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Eucalyptol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pinene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol-4", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cymene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Apigenin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Quercetin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cannflavin A", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Beta-sitosterol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBL", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Humulene", 
			 		"value": 0.00
				},
				{ 
			 		"name": "Terpinolene", 
			 		"value": 0.00
				}	
		 	], 
		 	"taste": ["Cheese", "Diesel", "Earthy"],
		 	 "conditions": ["Pain", "Fibromyalgia", "Depression", "Stress", "Muscle Spasms", "Insomnia"],
			 "positiveEffects": ["Relaxed", "Creative", "Uplifted", "Euphoric", "Happy", "Pain relief", "Drowsiness"],
			 "negativeEffects": ["Drowsiness", "Dry Mouth", "Paranoid", "Dizzy", "Headache", "Dry Eyes"],
			 "descriptionDetailed": "Want pungent, tangy tasty weed that isn't a chore to grow? Sour Cheese is the perfect combination of the original Exodus Cheese and Strawberry genetics. Due to the tried-and-true classic quality of both these strains the Sour Cheese delivers the perfect blend of Cheesy sweet and sour taste and potent Kush body hit.",
			 "descriptionAbbrev": "Want pungent, tangy tasty weed that isn't a chore to grow? Sour Cheese is the perfect combination of the original Exodus Cheese and Strawberry genetics. Due to the tried-and-true classic quality of both these strains the Sour Cheese delivers the perfect blend of Cheesy sweet and sour taste and potent Kush body hit.",
			 "tags": [""],
			 "imageUrl": "images/strains/sour-cheese_100x100.jpg"
			},
			{"strainId": 257,
			 "strainName": "Venom OG",
			 "strainType": "Hybrid",
			 "components": [
			 	{ 
			 		"name": "THC9",  
			 		"value": 19.14
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 0.32
			 	},
			 	{ 
			 		"name": "CBN", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBG", 
			 		"value": 0.61	
			 	},
			 	{ 
			 		"name": "CBC", 
			 		"value": 0.10 
			 	},
			 	{ 
			 		"name": "THCV", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCA", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THC8", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pulegone", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Myrcene", 
			 		"value": 1.60
			 	},
			 	{ 
			 		"name": "Caryophyllene", 
			 		"value": 0.81
			 	},
			 	{ 
			 		"name": "Limonene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Linalool", 
			 		"value": 2.70
			 	},
			 	{ 
			 		"name": "Eucalyptol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pinene", 
			 		"value": 0.58
			 	},
			 	{ 
			 		"name": "Terpineol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol-4", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cymene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Apigenin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Quercetin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cannflavin A", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Beta-sitosterol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBL", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Humulene", 
			 		"value": 1.31
				},
				{ 
			 		"name": "Terpinolene", 
			 		"value": 0.11
				}	
		 	], 
		 	"taste": ["Sweet", "Earthy", "Pine"],
		 	 "conditions": ["Pain", "Fibromyalgia", "Stress", "Insomnia"],
			 "positiveEffects": ["Relaxed", "Pain relief", "Drowsiness"],
			 "negativeEffects": ["Drowsiness", "Munchies"],
			 "descriptionDetailed": "This strain is recommended for nighttime use as its effects tend toward full-body relaxation, but it also provides some sensory elevation that is enjoyable for lazy activities. Patients have found Venom OG a potent remedy for pain, arthritis, anxiety, and sleep disorders. ",
			 "descriptionAbbrev": "This strain is recommended for nighttime use as its effects tend toward full-body relaxation, but it also provides some sensory elevation that is enjoyable for lazy activities. Patients have found Venom OG a potent remedy for pain, arthritis, anxiety, and sleep disorders.",
			 "tags": [""],
			 "imageUrl": "images/strains/venom-og_100x100.jpg"
			},
			{"strainId": 258,
			 "strainName": "Platinum Wreck",
			 "strainType": "Hybrid",
			 "components": [
			 	{ 
			 		"name": "THC9",  
			 		"value": 17.53
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 0.23
			 	},
			 	{ 
			 		"name": "CBN", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBG", 
			 		"value": 0.44	
			 	},
			 	{ 
			 		"name": "CBC", 
			 		"value": 0.05 
			 	},
			 	{ 
			 		"name": "THCV", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCA", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THC8", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pulegone", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Myrcene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Caryophyllene", 
			 		"value": 0.42
			 	},
			 	{ 
			 		"name": "Limonene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Linalool", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Eucalyptol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pinene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol-4", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cymene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Apigenin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Quercetin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cannflavin A", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Beta-sitosterol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBL", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Humulene", 
			 		"value": 0.00
				},
				{ 
			 		"name": "Terpinolene", 
			 		"value": 0.54
				}	
		 	], 
		 	"taste": ["Sweet", "Citrus", "Honey", "Lemon", "Sour"],
		 	 "conditions": ["Fibromyalgia", "Anxiety", "Arthritis", "Anorexia", "Chronic Pain", "Depression", "Migraines", "Nausea", "Stress" ],
			 "positiveEffects": ["Relaxed", "Focused", "Pain relief", "Euphoric", "Uplifted",  "Hungry", "Energetic"],
			 "negativeEffects": ["Munchies"],
			 "descriptionDetailed": "Platinum Wreck is a sativa-dominant cannabis strain that's a hard hitter with thick smoke and is a good pain reliever which also helps with stress and anxiety.",
			 "descriptionAbbrev": "Platinum Wreck is a sativa-dominant cannabis strain that's a hard hitter with thick smoke and is a good pain reliever which also helps with stress and anxiety.",
			 "tags": [""],
			 "imageUrl": "images/strains/platinum_kush_indica.jpg"
			},
			{"strainId": 259,
			 "strainName": "Deep Purple",
			 "strainType": "Indica",
			 "components": [
			 	{ 
			 		"name": "THC9",  
			 		"value": 15.13
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 0.10
			 	},
			 	{ 
			 		"name": "CBN", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBG", 
			 		"value": 0.19	
			 	},
			 	{ 
			 		"name": "CBC", 
			 		"value": 0.00 
			 	},
			 	{ 
			 		"name": "THCV", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCA", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THC8", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pulegone", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Myrcene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Caryophyllene", 
			 		"value": 0.85
			 	},
			 	{ 
			 		"name": "Limonene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Linalool", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Eucalyptol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pinene", 
			 		"value": 0.54
			 	},
			 	{ 
			 		"name": "Terpineol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol-4", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cymene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Apigenin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Quercetin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cannflavin A", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Beta-sitosterol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBL", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Humulene", 
			 		"value": 0.61
				},
				{ 
			 		"name": "Terpinolene", 
			 		"value": 0.00
				}	
		 	], 
		 	"taste": ["Grape", "Spicy", "Herbal", "Earthy", "Sweet"],
		 	 "conditions": ["Stress", "Pain", "Fibromyalgia", "Depression", "Insomnia", "Appetite Loss"],
			 "positiveEffects": ["Long Lasting", "Pain relief", "Drowsiness", "Hungry"],
			 "negativeEffects": ["Drowsiness", "Munchies", "Dry Mouth", "Dry Eyes", "Dizzy", "Anxious", "Headache"],
			 "descriptionDetailed": "When you cross Purple Urkle with Querkle, you get a highly potent strain of medical marijuana called Deep Purple. And much like the band, it truly has the power to rock your world. A strong indica high, Deep Purple is calming and relaxing.",
			 "descriptionAbbrev": "When you cross Purple Urkle with Querkle, you get a highly potent strain of medical marijuana called Deep Purple. And much like the band, it truly has the power to rock your world. A strong indica high, Deep Purple is calming and relaxing.",
			 "tags": [""],
			 "imageUrl": "images/strains/deep-purple_100x100.jpg"
			},
			{"strainId": 260,
			 "strainName": "Purple AK-47",
			 "strainType": "Hybrid",
			 "components": [
			 	{ 
			 		"name": "THC9",  
			 		"value": 20.00
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBN", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBG", 
			 		"value": 0.00	
			 	},
			 	{ 
			 		"name": "CBC", 
			 		"value": 0.00 
			 	},
			 	{ 
			 		"name": "THCV", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCA", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THC8", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pulegone", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Myrcene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Caryophyllene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Limonene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Linalool", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Eucalyptol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pinene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol-4", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cymene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Apigenin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Quercetin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cannflavin A", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Beta-sitosterol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBL", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Humulene", 
			 		"value": 0.00
				},
				{ 
			 		"name": "Terpinolene", 
			 		"value": 0.00
				}	
		 	], 
		 	"taste": ["Grape", "Dank", "Pungent", "Earthy", "Woody"],
		 	 "conditions": ["Pain", "Fibromyalgia", "Stress", "Depression", "Muscle Spasms", "Fatigue"],
			 "positiveEffects": ["Relaxed", "Euphoric", "Drowsiness", "Happy", "Uplifted", "Tingly", "Energetic", "Balanced", "Productive", "Pain relief"],
			 "negativeEffects": ["Drowsiness", "Dry Mouth", "Dry Eyes", "Dizzy", "Paranoid"],
			 "descriptionDetailed": "After the sweet, danky, grape flavor hits your taste buds, an extremely mellow, relaxing high follows, leaving you with extreme munchies and wanting to fall asleep after about 45 minutes. Purple AK-47 is not likely to give you couch-lock however, as the Sativa AK-47 in this hybrid delivers noticeable heady effects.",
			 "descriptionAbbrev": "After the sweet, danky, grape flavor hits your taste buds, an extremely mellow, relaxing high follows, leaving you with extreme munchies and wanting to fall asleep after about 45 minutes. Purple AK-47 is not likely to give you couch-lock however, as the Sativa AK-47 in this hybrid delivers noticeable heady effects.",
			 "tags": [""],
			 "imageUrl": "images/strains/Purple-AK-47_100x100.jpg"
			}, 
			{"strainId": 261,
			 "strainName": "Purple Afghani",
			 "strainType": "Hybrid",
			 "components": [
			 	{ 
			 		"name": "THC9",  
			 		"value": 19.05
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 0.24
			 	},
			 	{ 
			 		"name": "CBN", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBG", 
			 		"value": 0.69	
			 	},
			 	{ 
			 		"name": "CBC", 
			 		"value": 0.15 
			 	},
			 	{ 
			 		"name": "THCV", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCA", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THC8", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pulegone", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Myrcene", 
			 		"value": 0.39
			 	},
			 	{ 
			 		"name": "Caryophyllene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Limonene", 
			 		"value": 0.83
			 	},
			 	{ 
			 		"name": "Linalool", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Eucalyptol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pinene", 
			 		"value": 0.39
			 	},
			 	{ 
			 		"name": "Terpineol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol-4", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cymene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Apigenin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Quercetin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cannflavin A", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Beta-sitosterol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBL", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Humulene", 
			 		"value": 1.20
				},
				{ 
			 		"name": "Terpinolene", 
			 		"value": 0.00
				}	
		 	], 
		 	"taste": ["Earthy", "Woody", "Sweet"],
		 	 "conditions": ["Insomnia", "Pain", "Fibromyalgia", "Nausea", "Appetite Loss", "Depression"],
			 "positiveEffects": ["Drowsiness", "Hungry", "Relaxed", "Uplifted", "Happy", "Dry Mouth" ],
			 "negativeEffects": ["Munchies", "Couch Lock", "Dry Eyes", "Dry Mouth", "Headache", "Anxious", "Paranoid"],
			 "descriptionDetailed": "Will cause couchlock and extremely laziness..and of course you will get a huge case of the munchies.",
			 "descriptionAbbrev": "Will cause couchlock and extremely laziness..and of course you will get a huge case of the munchies.",
			 "tags": [""],
			 "imageUrl": "images/strains/purple-afghani_100x100.jpg"
			}, 
			{"strainId": 262,
			 "strainName": "Heavy Duty Fruity",
			 "strainType": "Hybrid",
			 "components": [
			 	{ 
			 		"name": "THC9",  
			 		"value": 16.22
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 0.10
			 	},
			 	{ 
			 		"name": "CBN", 
			 		"value": 0.23
			 	},
			 	{ 
			 		"name": "CBG", 
			 		"value": 0.00	
			 	},
			 	{ 
			 		"name": "CBC", 
			 		"value": 0.00 
			 	},
			 	{ 
			 		"name": "THCV", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCA", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THC8", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pulegone", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Myrcene", 
			 		"value": 0.09
			 	},
			 	{ 
			 		"name": "Caryophyllene", 
			 		"value": 0.20
			 	},
			 	{ 
			 		"name": "Limonene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Linalool", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Eucalyptol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pinene", 
			 		"value": 0.04
			 	},
			 	{ 
			 		"name": "Terpineol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol-4", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cymene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Apigenin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Quercetin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cannflavin A", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Beta-sitosterol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBL", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Humulene", 
			 		"value": 1.27
				},
				{ 
			 		"name": "Terpinolene", 
			 		"value": 0.00
				}	
		 	], 
		 	"taste": ["Sweet", "Berry", "Citrus"],
		 	 "conditions": ["Depression", "Stress", "Pain", "Fibromyalgia", "Insomnia", "Headache"],
			 "positiveEffects": ["Uplifted", "Happy", "Giggly", "Euphoric", "Creative", "Psychoactive", "Drowsiness"],
			 "negativeEffects": ["Couch Lock", "Dry Mouth", "Dry Eyes", "Dizzy", "Headache"],
			 "descriptionDetailed": "Depending on when this plant is harvested, her effects range from psychedelic and spacey to mellow relaxation.",
			 "descriptionAbbrev": "Depending on when this plant is harvested, her effects range from psychedelic and spacey to mellow relaxation.",
			 "tags": [""],
			 "imageUrl": "images/strains/heavy-duty-fruity_100x100.jpg"
			}, 
			{"strainId": 263,
			 "strainName": "The Truth",
			 "strainType": "Hybrid",
			 "components": [
			 	{ 
			 		"name": "THC9",  
			 		"value": 14.41
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 0.26
			 	},
			 	{ 
			 		"name": "CBN", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBG", 
			 		"value": 0.33	
			 	},
			 	{ 
			 		"name": "CBC", 
			 		"value": 0.06 
			 	},
			 	{ 
			 		"name": "THCV", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCA", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THC8", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pulegone", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Myrcene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Caryophyllene", 
			 		"value": 0.84
			 	},
			 	{ 
			 		"name": "Limonene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Linalool", 
			 		"value": 1.47
			 	},
			 	{ 
			 		"name": "Eucalyptol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pinene", 
			 		"value": 0.72
			 	},
			 	{ 
			 		"name": "Terpineol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol-4", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cymene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Apigenin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Quercetin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cannflavin A", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Beta-sitosterol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBL", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Humulene", 
			 		"value": 0.81
				},
				{ 
			 		"name": "Terpinolene", 
			 		"value": 0.00
				}	
		 	], 
		 	"taste": ["Earthy", "Woody", "Pine"],
		 	 "conditions": ["Fibromyalgia", "Pain", "Chronic Pain", "Headache", "Insomnia", "Anxious"],
			 "positiveEffects": ["Conversational", "Pain relief", "Uplifted", "Happy", "Mellow", "Relaxed", "Focused"],
			 "negativeEffects": ["Couch Lock"],
			 "descriptionDetailed": "Its heavy painkilling properties are accented by an earthy, spicy aroma characteristic of Kush varieties.",
			 "descriptionAbbrev": "Its heavy painkilling properties are accented by an earthy, spicy aroma characteristic of Kush varieties.",
			 "tags": [""],
			 "imageUrl": "images/strains/the-truth_100x100.jpg"
			},
			{"strainId": 264,
			 "strainName": "Triple Diesel",
			 "strainType": "Hybrid",
			 "components": [
			 	{ 
			 		"name": "THC9",  
			 		"value": 22.00
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBN", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBG", 
			 		"value": 0.00	
			 	},
			 	{ 
			 		"name": "CBC", 
			 		"value": 0.00 
			 	},
			 	{ 
			 		"name": "THCV", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCA", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THC8", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pulegone", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Myrcene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Caryophyllene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Limonene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Linalool", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Eucalyptol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pinene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol-4", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cymene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Apigenin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Quercetin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cannflavin A", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Beta-sitosterol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBL", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Humulene", 
			 		"value": 0.00
				},
				{ 
			 		"name": "Terpinolene", 
			 		"value": 0.00
				}	
		 	], 
		 	"taste": ["Diesel", "Earthy", "Tropical", "Chemical", "Pungent"],
		 	 "conditions": ["Stress", "Pain", "Anxiety", "Fatigue", "Muscle Spasms", "Fibromyalgia", "Nausea"],
			 "positiveEffects": ["Relaxed", "Uplifted", "Happy", "Euphoric", "Tingly"],
			 "negativeEffects": ["Dry Mouth", "Anxious", "Dry Eyes", "Paranoid", "Dizzy"],
			 "descriptionDetailed": "A focused head high at small doses and a deeply relaxing head high at larger doses. The THC content of this workhorse can reach 22%, making it easily one of the strongest strains out there.",
			 "descriptionAbbrev": "A focused head high at small doses and a deeply relaxing head high at larger doses. The THC content of this workhorse can reach 22%, making it easily one of the strongest strains out there.",
			 "tags": [""],
			 "imageUrl": "images/strains/triple-diesel_100x100.jpg"
			},
			{"strainId": 265,
			 "strainName": "Grape Crush",
			 "strainType": "Hybrid",
			 "components": [
			 	{ 
			 		"name": "THC9",  
			 		"value": 12.73
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 0.28
			 	},
			 	{ 
			 		"name": "CBN", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBG", 
			 		"value": 0.46	
			 	},
			 	{ 
			 		"name": "CBC", 
			 		"value": 0.06 
			 	},
			 	{ 
			 		"name": "THCV", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCA", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THC8", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pulegone", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Myrcene", 
			 		"value": 0.71
			 	},
			 	{ 
			 		"name": "Caryophyllene", 
			 		"value": 1.16
			 	},
			 	{ 
			 		"name": "Limonene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Linalool", 
			 		"value": 1.37
			 	},
			 	{ 
			 		"name": "Eucalyptol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pinene", 
			 		"value": 0.86
			 	},
			 	{ 
			 		"name": "Terpineol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol-4", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cymene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Apigenin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Quercetin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cannflavin A", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Beta-sitosterol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBL", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Humulene", 
			 		"value": 0.36
				},
				{ 
			 		"name": "Terpinolene", 
			 		"value": 0.00
				}	
		 	], 
		 	"taste": ["Grape", "Berry", "Sweet"],
		 	 "conditions": ["Pain", "Fibromyalgia", "Insomnia", "Muscle Spasms", "Cramps", "Stress"],
			 "positiveEffects": ["Relaxed", "Happy", "Euphoric", "Pain relief", "Hungry", "Conversational" ],
			 "negativeEffects": ["Couch Lock", "Munchies", "Dry Mouth", "Dry Eyes", "Dizzy", "Headache"],
			 "descriptionDetailed": "Intended to produce a slow-moving high that relaxes the body and inspires the mind.",
			 "descriptionAbbrev": "Intended to produce a slow-moving high that relaxes the body and inspires the mind.",
			 "tags": [""],
			 "imageUrl": "images/strains/grape-crush_100x100.jpg"
			},
			{"strainId": 266,
			 "strainName": "Holland's Hope",
			 "strainType": "Indica",
			 "components": [
			 	{ 
			 		"name": "THC9",  
			 		"value": 13.22
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 0.33
			 	},
			 	{ 
			 		"name": "CBN", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBG", 
			 		"value": 1.09	
			 	},
			 	{ 
			 		"name": "CBC", 
			 		"value": 0.00 
			 	},
			 	{ 
			 		"name": "THCV", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCA", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THC8", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pulegone", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Myrcene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Caryophyllene", 
			 		"value": 0.44
			 	},
			 	{ 
			 		"name": "Limonene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Linalool", 
			 		"value": 3.13
			 	},
			 	{ 
			 		"name": "Eucalyptol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pinene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol-4", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cymene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Apigenin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Quercetin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cannflavin A", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Beta-sitosterol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBL", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Humulene", 
			 		"value": 0.53
				},
				{ 
			 		"name": "Terpinolene", 
			 		"value": 0.00
				}	
		 	], 
		 	"taste": ["Sweet", "Grape", "Berry"],
		 	 "conditions": ["Stress", "Headache", "Pain", "Fibromyalgia", "Depression", "Insomnia"],
			 "positiveEffects": ["Happy", "Relaxed", "Euphoric", "Mellow", "Long Lasting", "Drowsiness", "Pain relief"],
			 "negativeEffects": ["Couch Lock", "Munchies", "Dry Mouth", "Dry Eyes", "Paranoid", "Dizzy", "Headache"],
			 "descriptionDetailed": "Great indica with a long lasting high, perfect for a nice mellow night of chilling with friends or watching movies.",
			 "descriptionAbbrev": "Great indica with a long lasting high, perfect for a nice mellow night of chilling with friends or watching movies.",
			 "tags": [""],
			 "imageUrl": "images/strains/hollands-hope_100x100.jpg"
			},
			{"strainId": 267,
			 "strainName": "Black Cherry OG",
			 "strainType": "Indica",
			 "components": [
			 	{ 
			 		"name": "THC9",  
			 		"value": 17.55
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 0.07
			 	},
			 	{ 
			 		"name": "CBN", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBG", 
			 		"value": 0.29	
			 	},
			 	{ 
			 		"name": "CBC", 
			 		"value": 0.05 
			 	},
			 	{ 
			 		"name": "THCV", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCA", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THC8", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pulegone", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Myrcene", 
			 		"value": 0.17
			 	},
			 	{ 
			 		"name": "Caryophyllene", 
			 		"value": 0.48
			 	},
			 	{ 
			 		"name": "Limonene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Linalool", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Eucalyptol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pinene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol-4", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cymene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Apigenin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Quercetin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cannflavin A", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Beta-sitosterol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBL", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Humulene", 
			 		"value": 0.57
				},
				{ 
			 		"name": "Terpinolene", 
			 		"value": 0.00
				}	
		 	], 
		 	"taste": ["Sweet", "Berry", "Citrus"],
		 	 "conditions": ["Depression", "Stress", "Pain", "Fibromyalgia", "Insomnia", "PMS"],
			 "positiveEffects": ["Uplifted", "Relaxed", "Giggly", "Drowsiness", "Mellow", "Pain relief"],
			 "negativeEffects": ["Couch Lock", "Dizzy"],
			 "descriptionDetailed": "Relaxing full-body effects take over, ridding you of pain and insomnia while lifting the mood. Tastes like black cherry syrup before it's mixed with carbonation to make soda.",
			 "descriptionAbbrev": "Relaxing full-body effects take over, ridding you of pain and insomnia while lifting the mood. Tastes like black cherry syrup before it's mixed with carbonation to make soda.",
			 "tags": [""],
			 "imageUrl": "images/strains/black-cherry-og_100x100.jpg"
			},
			{"strainId": 268,
			 "strainName": "Blue Frost",
			 "strainType": "Hybrid",
			 "components": [
			 	{ 
			 		"name": "THC9",  
			 		"value": 18.70
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 0.02
			 	},
			 	{ 
			 		"name": "CBN", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBG", 
			 		"value": 0.00	
			 	},
			 	{ 
			 		"name": "CBC", 
			 		"value": 0.00 
			 	},
			 	{ 
			 		"name": "THCV", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCA", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THC8", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pulegone", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Myrcene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Caryophyllene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Limonene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Linalool", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Eucalyptol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pinene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol-4", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cymene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Apigenin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Quercetin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cannflavin A", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Beta-sitosterol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBL", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Humulene", 
			 		"value": 0.00
				},
				{ 
			 		"name": "Terpinolene", 
			 		"value": 0.00
				}	
		 	], 
		 	"taste": ["Berry", "Pungent", "Blueberry", "Sweet", "Fruity", "Cheese"],
		 	 "conditions": ["PMS", "Depression", "Stress", "Headache", "Chronic Pain"],
			 "positiveEffects": ["Uplifted", "Pain relief", "Relaxed", "Drowsiness", "Hungry", "Tingly"],
			 "negativeEffects": ["Paranoid", "Munchies"],
			 "descriptionDetailed": "This hybrid is sure to lift your mood and replace any stress you may have with smile on your face. Patients with menstrual disorders have reported instant decreases in pain and stress.",
			 "descriptionAbbrev": "This hybrid is sure to lift your mood and replace any stress you may have with smile on your face. Patients with menstrual disorders have reported instant decreases in pain and stress.",
			 "tags": [""],
			 "imageUrl": "images/strains/blue-frost_100x100.jpg"
			},
			{"strainId": 269,
			 "strainName": "BC Sweet Tooth",
			 "strainType": "Hybrid",
			 "components": [
			 	{ 
			 		"name": "THC9",  
			 		"value": 19.90
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 0.13
			 	},
			 	{ 
			 		"name": "CBN", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBG", 
			 		"value": 0.30	
			 	},
			 	{ 
			 		"name": "CBC", 
			 		"value": 0.02 
			 	},
			 	{ 
			 		"name": "THCV", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCA", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THC8", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pulegone", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Myrcene", 
			 		"value": 0.12
			 	},
			 	{ 
			 		"name": "Caryophyllene", 
			 		"value": 0.48
			 	},
			 	{ 
			 		"name": "Limonene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Linalool", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Eucalyptol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pinene", 
			 		"value": 0.70
			 	},
			 	{ 
			 		"name": "Terpineol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol-4", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cymene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Apigenin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Quercetin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cannflavin A", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Beta-sitosterol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBL", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Humulene", 
			 		"value": 0.67
				},
				{ 
			 		"name": "Terpinolene", 
			 		"value": 0.00
				}	
		 	], 
		 	"taste": ["Honey", "Sweet", "Vanilla"],
		 	 "conditions": ["Insomnia", "Nausea", "Pain", "Stress", "Depression"],
			 "positiveEffects": ["Drowsiness", "Happy", "Hungry", "Relaxed", "Pain relief"],
			 "negativeEffects": ["Dry Mouth", "Munchies", "Couch Lock", "Headache", "Dizzy", "Dry Eyes", "Paranoid"],
			 "descriptionDetailed": "This treat satisfies with a long-lasting, potent feeling that hits fast.",
			 "descriptionAbbrev": "This treat satisfies with a long-lasting, potent feeling that hits fast.",
			 "tags": [""],
			 "imageUrl": "images/strains/bc-sweet-tooth_100x100.jpg"
			},
			{"strainId": 270,
			 "strainName": "Pink Panther",
			 "strainType": "Hybrid",
			 "components": [
			 	{ 
			 		"name": "THC9",  
			 		"value": 10.87
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 0.26
			 	},
			 	{ 
			 		"name": "CBN", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBG", 
			 		"value": 0.53	
			 	},
			 	{ 
			 		"name": "CBC", 
			 		"value": 0.07 
			 	},
			 	{ 
			 		"name": "THCV", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCA", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THC8", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pulegone", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Myrcene", 
			 		"value": 0.29
			 	},
			 	{ 
			 		"name": "Caryophyllene", 
			 		"value": 0.67
			 	},
			 	{ 
			 		"name": "Limonene", 
			 		"value": 0.33
			 	},
			 	{ 
			 		"name": "Linalool", 
			 		"value": 2.05
			 	},
			 	{ 
			 		"name": "Eucalyptol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pinene", 
			 		"value": 0.68
			 	},
			 	{ 
			 		"name": "Terpineol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol-4", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cymene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Apigenin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Quercetin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cannflavin A", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Beta-sitosterol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBL", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Humulene", 
			 		"value": 0.63
				},
				{ 
			 		"name": "Terpinolene", 
			 		"value": 0.04
				}	
		 	], 
		 	"taste": ["Sweet", "Berry", "Diesel"],
		 	 "conditions": ["Depression", "Anxiety", "Stress", "Social Anxiety"],
			 "positiveEffects": ["Happy", "Euphoric", "Giggly", "Conversational", "Focused", "Relaxed", "Uplifted", "Drowsiness", "Creative"],
			 "negativeEffects": ["Drowsiness", "Dry Mouth"],
			 "descriptionDetailed": "Pink Panther has an energized effect on your system, making you feel creative and euphoric. It makes you happy and clear-headed at the same time.",
			 "descriptionAbbrev": "Pink Panther has an energized effect on your system, making you feel creative and euphoric. It makes you happy and clear-headed at the same time.",
			 "tags": [""],
			 "imageUrl": "images/strains/pink-panther_100x100.jpg"
			},
			{"strainId": 271,
			 "strainName": "Orange Diesel",
			 "strainType": "Hybrid",
			 "components": [
			 	{ 
			 		"name": "THC9",  
			 		"value": 20.60
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 0.19
			 	},
			 	{ 
			 		"name": "CBN", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBG", 
			 		"value": 0.84	
			 	},
			 	{ 
			 		"name": "CBC", 
			 		"value": 0.04 
			 	},
			 	{ 
			 		"name": "THCV", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCA", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THC8", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pulegone", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Myrcene", 
			 		"value": 0.16
			 	},
			 	{ 
			 		"name": "Caryophyllene", 
			 		"value": 0.44
			 	},
			 	{ 
			 		"name": "Limonene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Linalool", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Eucalyptol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pinene", 
			 		"value": 0.54
			 	},
			 	{ 
			 		"name": "Terpineol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol-4", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cymene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Apigenin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Quercetin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cannflavin A", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Beta-sitosterol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBL", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Humulene", 
			 		"value": 0.25
				},
				{ 
			 		"name": "Terpinolene", 
			 		"value": 0.68
				}	
		 	], 
		 	"taste": ["Sweet", "Orange", "Diesel", "Chemical"],
		 	 "conditions": ["ADHD", "PTSD", "Fatigue", "Stress","Fibromyalgia", "Depression"],
			 "positiveEffects": ["Energetic", "Focused", "Relaxed", "Creative", "Euphoric", "Potent"],
			 "negativeEffects": [""],
			 "descriptionDetailed": "Sativa-lovers will appreciate the sharp sense of energy and focus that Orange Diesel delivers, and these effects may be helpful for patients treating ADD/ADHD, fatigue, and stress.",
			 "descriptionAbbrev": "Sativa-lovers will appreciate the sharp sense of energy and focus that Orange Diesel delivers, and these effects may be helpful for patients treating ADD/ADHD, fatigue, and stress.",
			 "tags": [""],
			 "imageUrl": "images/strains/orange-diesel_100x100.jpg"
			},
			{"strainId": 272,
			 "strainName": "Watermelon",
			 "strainType": "Indica",
			 "components": [
			 	{ 
			 		"name": "THC9",  
			 		"value": 19.06
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 0.17
			 	},
			 	{ 
			 		"name": "CBN", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBG", 
			 		"value": 0.48	
			 	},
			 	{ 
			 		"name": "CBC", 
			 		"value": 0.02 
			 	},
			 	{ 
			 		"name": "THCV", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCA", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THC8", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pulegone", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Myrcene", 
			 		"value": 0.05
			 	},
			 	{ 
			 		"name": "Caryophyllene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Limonene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Linalool", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Eucalyptol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pinene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol-4", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cymene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Apigenin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Quercetin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cannflavin A", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Beta-sitosterol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBL", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Humulene", 
			 		"value": 0.00
				},
				{ 
			 		"name": "Terpinolene", 
			 		"value": 0.00
				}	
		 	], 
		 	"taste": ["Sweet", "Strawberry", "Spicy", "Herbal", "Hash"],
		 	 "conditions": ["Insomnia","Stress", "Appetite Loss", "Pain"],
			 "positiveEffects": ["Drowsiness", "Hungry", "Relaxed", "Pain relief", "Mind + Body"],
			 "negativeEffects": ["Couch Lock", "Munchies"],
			 "descriptionDetailed": "As the name suggests, this strain has a distinct fruity watermelon flavor profile, reminiscent of grape with hashy undertones.",
			 "descriptionAbbrev": "As the name suggests, this strain has a distinct fruity watermelon flavor profile, reminiscent of grape with hashy undertones.",
			 "tags": [""],
			 "imageUrl": "images/strains/watermelon_100x100.jpg"
			},
			{"strainId": 273,
			 "strainName": "OG Wreck",
			 "strainType": "Hybrid",
			 "components": [
			 	{ 
			 		"name": "THC9",  
			 		"value": 26.38
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 3.77
			 	},
			 	{ 
			 		"name": "CBN", 
			 		"value": 1.01
			 	},
			 	{ 
			 		"name": "CBG", 
			 		"value": 0.00	
			 	},
			 	{ 
			 		"name": "CBC", 
			 		"value": 0.00 
			 	},
			 	{ 
			 		"name": "THCV", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCA", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THC8", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pulegone", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Myrcene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Caryophyllene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Limonene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Linalool", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Eucalyptol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pinene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol-4", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cymene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Apigenin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Quercetin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cannflavin A", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Beta-sitosterol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBL", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Humulene", 
			 		"value": 0.00
				},
				{ 
			 		"name": "Terpinolene", 
			 		"value": 0.00
				}	
		 	], 
		 	"taste": ["Skunk", "Earthy", "Sweet"],
		 	 "conditions": ["Nausea", "Appetite Loss", "Pain", "Headache", "Insomnia", "Stress", "Fibromyalgia"],
			 "positiveEffects": ["Euphoric", "Hungry", "Creative", "Happy", "Energetic"],
			 "negativeEffects": ["Dry Eyes", "Dry Mouth", "Paranoid"],
			 "descriptionDetailed": "This high-THC strain ushers in a variety of therapeutic effects suitable for patients treating pain, nausea, appetite loss, fatigue, depression, headaches, and stress.",
			 "descriptionAbbrev": "This high-THC strain ushers in a variety of therapeutic effects suitable for patients treating pain, nausea, appetite loss, fatigue, depression, headaches, and stress.",
			 "tags": [""],
			 "imageUrl": "images/strains/og-wreck_100x100.jpg"
			},
			{"strainId": 274,
			 "strainName": "Green Hornet",
			 "strainType": "Hybrid",
			 "components": [
			 	{ 
			 		"name": "THC9",  
			 		"value": 11.55
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 0.05
			 	},
			 	{ 
			 		"name": "CBN", 
			 		"value": 0.19
			 	},
			 	{ 
			 		"name": "CBG", 
			 		"value": 0.00	
			 	},
			 	{ 
			 		"name": "CBC", 
			 		"value": 0.00 
			 	},
			 	{ 
			 		"name": "THCV", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCA", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THC8", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pulegone", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Myrcene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Caryophyllene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Limonene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Linalool", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Eucalyptol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pinene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol-4", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cymene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Apigenin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Quercetin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cannflavin A", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Beta-sitosterol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBL", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Humulene", 
			 		"value": 0.00
				},
				{ 
			 		"name": "Terpinolene", 
			 		"value": 0.00
				}	
		 	], 
		 	"taste": ["Citrus", "Flowery", "Sweet", "Herbal"],
		 	 "conditions": ["Depression", "Fatigue", "Fibromyalgia", "Headache", "Stress", "Appetite Loss"],
			 "positiveEffects": ["Euphoric", "Happy", "Uplifted", "Focused", "Tingly"],
			 "negativeEffects": ["Dry Mouth", "Paranoid", "Dry Eyes", "Dizzy", "Headache"],
			 "descriptionDetailed": "Nice calm high, that doesn't make you tired and gets your mind right.",
			 "descriptionAbbrev": "Nice calm high, that doesn't make you tired and gets your mind right.",
			 "tags": [""],
			 "imageUrl": "images/strains/green-hornet_100x100.jpg"
			},
			{"strainId": 275,
			 "strainName": "Purple Ice",
			 "strainType": "Hybrid",
			 "components": [
			 	{ 
			 		"name": "THC9",  
			 		"value": 18.00
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 0.09
			 	},
			 	{ 
			 		"name": "CBN", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBG", 
			 		"value": 0.00	
			 	},
			 	{ 
			 		"name": "CBC", 
			 		"value": 0.00 
			 	},
			 	{ 
			 		"name": "THCV", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCA", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THC8", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pulegone", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Myrcene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Caryophyllene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Limonene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Linalool", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Eucalyptol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pinene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol-4", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cymene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Apigenin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Quercetin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cannflavin A", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Beta-sitosterol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBL", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Humulene", 
			 		"value": 0.00
				},
				{ 
			 		"name": "Terpinolene", 
			 		"value": 0.00
				}	
		 	], 
		 	"taste": ["Berry", "Sweet", "Grapefruit", "Flowery"],
		 	 "conditions": ["Anxiety", "Depression", "Insomnia", "Fibromyalgia", "Bipolar", "Migraines", "Nausea", "Chronic Pain"],
			 "positiveEffects": ["Euphoric", "Happy", "Energetic", "Conversational", "Uplifted", "Pain relief", "Creative", "Tingly"],
			 "negativeEffects": ["Dry Mouth"],
			 "descriptionDetailed": "This strain is known for creating a calming, tingly sensation that begins in the head before traveling to the rest of your body.",
			 "descriptionAbbrev": "This strain is known for creating a calming, tingly sensation that begins in the head before traveling to the rest of your body.",
			 "tags": [""],
			 "imageUrl": "images/strains/purple-ice_100x100.jpg"
			},
			{"strainId": 276,
			 "strainName": "Blue Knight",
			 "strainType": "Indica",
			 "components": [
			 	{ 
			 		"name": "THC9",  
			 		"value": 26.44
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 1.13
			 	},
			 	{ 
			 		"name": "CBN", 
			 		"value": 3.93
			 	},
			 	{ 
			 		"name": "CBG", 
			 		"value": 0.00	
			 	},
			 	{ 
			 		"name": "CBC", 
			 		"value": 0.00 
			 	},
			 	{ 
			 		"name": "THCV", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCA", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THC8", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pulegone", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Myrcene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Caryophyllene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Limonene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Linalool", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Eucalyptol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pinene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol-4", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cymene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Apigenin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Quercetin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cannflavin A", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Beta-sitosterol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBL", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Humulene", 
			 		"value": 0.00
				},
				{ 
			 		"name": "Terpinolene", 
			 		"value": 0.00
				}	
		 	], 
		 	"taste": ["Earthy", "Sweet", "Herbal", "Woody", "Blueberry"],
		 	 "conditions": ["Stress", "Anxiety", "Insomnia", "Depression", "Appetite Loss", "Fibromyalgia"],
			 "positiveEffects": ["Relaxed", "Pain relief", "Hungry", "Drowsiness", "Psychoactive"],
			 "negativeEffects": ["Munchies", "Couch Lock"],
			 "descriptionDetailed": " Earthy, woody, and blueberry flavors are unleashed on the exhale, and the relaxing full-body effects that follow are often enough to soothe pain and stimulate the appetite.",
			 "descriptionAbbrev": " Earthy, woody, and blueberry flavors are unleashed on the exhale, and the relaxing full-body effects that follow are often enough to soothe pain and stimulate the appetite.",
			 "tags": [""],
			 "imageUrl": "images/strains/blue-knight_100x100.jpg"
			},
			{"strainId": 277,
			 "strainName": "Scooby Snacks",
			 "strainType": "Hybrid",
			 "components": [
			 	{ 
			 		"name": "THC9",  
			 		"value": 22.00
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 0.09
			 	},
			 	{ 
			 		"name": "CBN", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBG", 
			 		"value": 0.00	
			 	},
			 	{ 
			 		"name": "CBC", 
			 		"value": 0.00 
			 	},
			 	{ 
			 		"name": "THCV", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCA", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THC8", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pulegone", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Myrcene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Caryophyllene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Limonene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Linalool", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Eucalyptol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pinene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol-4", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cymene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Apigenin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Quercetin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cannflavin A", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Beta-sitosterol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBL", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Humulene", 
			 		"value": 0.00
				},
				{ 
			 		"name": "Terpinolene", 
			 		"value": 0.00
				}	
		 	], 
		 	"taste": ["Fruity", "Tea", "Flowery"],
		 	 "conditions": ["Insomnia", "Stress", "Anxiety", "Depression"],
			 "positiveEffects": ["Relaxed", "Calm", "Drowsiness", "Balanced"],
			 "negativeEffects": ["Couch Lock"],
			 "descriptionDetailed": "The combination of popular West Coast genetics brings on stimulating cerebral effects that weigh heavy on your eyes and slowly relax the body.",
			 "descriptionAbbrev": "The combination of popular West Coast genetics brings on stimulating cerebral effects that weigh heavy on your eyes and slowly relax the body.",
			 "tags": ["Drui"],
			 "imageUrl": "images/strains/scooby-snacks_100x100.jpg"
			},
			{"strainId": 278,
			 "strainName": "Afghan Diesel",
			 "strainType": "Hybrid",
			 "components": [
			 	{ 
			 		"name": "THC9",  
			 		"value": 16.80
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBN", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBG", 
			 		"value": 0.00	
			 	},
			 	{ 
			 		"name": "CBC", 
			 		"value": 0.00 
			 	},
			 	{ 
			 		"name": "THCV", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCA", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THC8", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pulegone", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Myrcene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Caryophyllene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Limonene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Linalool", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Eucalyptol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pinene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol-4", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cymene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Apigenin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Quercetin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cannflavin A", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Beta-sitosterol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBL", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Humulene", 
			 		"value": 0.00
				},
				{ 
			 		"name": "Terpinolene", 
			 		"value": 0.00
				}	
		 	], 
		 	"taste": ["Grapefruit"],
		 	 "conditions": ["Anxiety", "Stress", "Depression", "Appetite Loss", "Insomnia", "Nausea", "Pain"],
			 "positiveEffects": ["Creative", "Energetic",  "Euphoric", "Happy", "Relaxed", "Pain relief"],
			 "negativeEffects": ["Munchies", "Drowsiness"],
			 "descriptionDetailed": "The taste has been described as light and sweet. This strain will have a more cerebral effect rather than body. ",
			 "descriptionAbbrev": "The taste has been described as light and sweet. This strain will have a more cerebral effect rather than body. ",
			 "tags": [""],
			 "imageUrl": "images/strains/afghan-diesel_100x100.jpg"
			},
			{"strainId": 279,
			 "strainName": "Tigers Milk",
			 "strainType": "Indica",
			 "components": [
			 	{ 
			 		"name": "THC9",  
			 		"value": 16.74
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 0.30
			 	},
			 	{ 
			 		"name": "CBN", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBG", 
			 		"value": 0.65	
			 	},
			 	{ 
			 		"name": "CBC", 
			 		"value": 0.06 
			 	},
			 	{ 
			 		"name": "THCV", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCA", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THC8", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pulegone", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Myrcene", 
			 		"value": 0.10
			 	},
			 	{ 
			 		"name": "Caryophyllene", 
			 		"value": 1.03
			 	},
			 	{ 
			 		"name": "Limonene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Linalool", 
			 		"value": 2.45
			 	},
			 	{ 
			 		"name": "Eucalyptol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pinene", 
			 		"value": 1.21
			 	},
			 	{ 
			 		"name": "Terpineol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol-4", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cymene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Apigenin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Quercetin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cannflavin A", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Beta-sitosterol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBL", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Humulene", 
			 		"value": 1.82
				},
				{ 
			 		"name": "Terpinolene", 
			 		"value": 0.00
				}	
		 	], 
		 	"taste": ["Skunk", "Cheese", "Pungent"],
		 	 "conditions": ["Pain", "Insomnia", "Depression", "Anxiety"],
			 "positiveEffects": ["Euphoric", "Intense", "Potent", "Psychoactive", "Pain relief", "Drowsiness", "Relaxed"],
			 "negativeEffects": ["Couch Lock", "Drowsiness"],
			 "descriptionDetailed": "Tigers Milk hits with intense cerebral euphoria, an experience described by its breeders as being borderline psychedelic. Tapering down to restful relaxation over time, this indica is commonly looked to for its pain-relieving and sleepy qualities.",
			 "descriptionAbbrev": "Tigers Milk hits with intense cerebral euphoria, an experience described by its breeders as being borderline psychedelic. Tapering down to restful relaxation over time, this indica is commonly looked to for its pain-relieving and sleepy qualities.",
			 "tags": [""],
			 "imageUrl": "images/strains/tiger-s-milk_100x100.jpg"
			},
			{"strainId": 280,
			 "strainName": "Mexican",
			 "strainType": "Sativa",
			 "components": [
			 	{ 
			 		"name": "THC9",  
			 		"value": 18.00
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 1.30
			 	},
			 	{ 
			 		"name": "CBN", 
			 		"value": 0.24
			 	},
			 	{ 
			 		"name": "CBG", 
			 		"value": 0.00	
			 	},
			 	{ 
			 		"name": "CBC", 
			 		"value": 0.00 
			 	},
			 	{ 
			 		"name": "THCV", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCA", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THC8", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pulegone", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Myrcene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Caryophyllene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Limonene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Linalool", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Eucalyptol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pinene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol-4", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cymene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Apigenin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Quercetin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cannflavin A", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Beta-sitosterol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBL", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Humulene", 
			 		"value": 0.00
				},
				{ 
			 		"name": "Terpinolene", 
			 		"value": 0.00
				}	
		 	], 
		 	"taste": ["Earthy", "Woody", "Tea"],
		 	 "conditions": ["Depression", "Fatigue","Stress", "Appetite Loss", "Nausea"],
			 "positiveEffects": ["Balanced", "Energetic", "Relaxed", "Euphoric", "Conversational", "Hungry"],
			 "negativeEffects": ["Paranoid", "Headache", "Munchies"],
			 "descriptionDetailed": "The high is the perfect mix of relaxing and energetic with extreme heavenly euphoria and absolutely no paranoia whatsoever. Amazing visual crispness and clarity that makes you just want to stare at your shiny cell phone app or go out and explore nature.",
			 "descriptionAbbrev": "The high is the perfect mix of relaxing and energetic with extreme heavenly euphoria and absolutely no paranoia whatsoever. Amazing visual crispness and clarity that makes you just want to stare at your shiny cell phone app or go out and explore nature.",
			 "tags": [""],
			 "imageUrl": "images/strains/mexican_100x100.jpg"
			},
			{"strainId": 281,
			 "strainName": "Lifesaver",
			 "strainType": "Hybrid",
			 "components": [
			 	{ 
			 		"name": "THC9",  
			 		"value": 21.33
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 0.16
			 	},
			 	{ 
			 		"name": "CBN", 
			 		"value": 0.01
			 	},
			 	{ 
			 		"name": "CBG", 
			 		"value": 0.07	
			 	},
			 	{ 
			 		"name": "CBC", 
			 		"value": 0.04 
			 	},
			 	{ 
			 		"name": "THCV", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCA", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THC8", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pulegone", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Myrcene", 
			 		"value": 0.63
			 	},
			 	{ 
			 		"name": "Caryophyllene", 
			 		"value": 0.46
			 	},
			 	{ 
			 		"name": "Limonene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Linalool", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Eucalyptol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pinene", 
			 		"value": 0.53
			 	},
			 	{ 
			 		"name": "Terpineol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol-4", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cymene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Apigenin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Quercetin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cannflavin A", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Beta-sitosterol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBL", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Humulene", 
			 		"value": 0.21
				},
				{ 
			 		"name": "Terpinolene", 
			 		"value": 0.00
				}	
		 	], 
		 	"taste": ["Sweet", "Grapefruit", "Berry"],
		 	 "conditions": ["Fatigue", "Depression", "Stress", "Pain", "Fibromyalgia", "Insomnia"],
			 "positiveEffects": ["Relaxed", "Giggly", "Happy", "Euphoric", "Uplifted"],
			 "negativeEffects": ["Dry Mouth", "Dry Eyes", "Dizzy", "Paranoid"],
			 "descriptionDetailed": "Relaxing with a grape and bubble gum aroma, this strain is worth a try for those looking for a stronger, medicated feeling.",
			 "descriptionAbbrev": "Relaxing with a grape and bubble gum aroma, this strain is worth a try for those looking for a stronger, medicated feeling.",
			 "tags": [""],
			 "imageUrl": "images/strains/lifesaver_100x100.jpg"
			},
			{"strainId": 282,
			 "strainName": "Freezeland",
			 "strainType": "Indica",
			 "components": [
			 	{ 
			 		"name": "THC9",  
			 		"value": 17.04
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 0.16
			 	},
			 	{ 
			 		"name": "CBN", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBG", 
			 		"value": 0.19	
			 	},
			 	{ 
			 		"name": "CBC", 
			 		"value": 0.03 
			 	},
			 	{ 
			 		"name": "THCV", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCA", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THC8", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pulegone", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Myrcene", 
			 		"value": 0.16
			 	},
			 	{ 
			 		"name": "Caryophyllene", 
			 		"value": 0.27
			 	},
			 	{ 
			 		"name": "Limonene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Linalool", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Eucalyptol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pinene", 
			 		"value": 0.43
			 	},
			 	{ 
			 		"name": "Terpineol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol-4", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cymene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Apigenin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Quercetin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cannflavin A", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Beta-sitosterol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBL", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Humulene", 
			 		"value": 0.35
				},
				{ 
			 		"name": "Terpinolene", 
			 		"value": 0.00
				}	
		 	], 
		 	"taste": ["Pine", "Woody", "Flowery"],
		 	 "conditions": ["Chronic Back Pain", "Pain", "Fibromyalgia", "Muscle Spasms", "Insomnia"],
			 "positiveEffects": ["Drowsiness", "Pain relief", "Relaxed", "Calmness"],
			 "negativeEffects": ["Paranoid", "Couch Lock", "Anxious"],
			 "descriptionDetailed": "Chronic pain and insomnia are the most common symptoms treated with this strain, and anyone looking for relaxation or rest will find it in Freezeland.",
			 "descriptionAbbrev": "Chronic pain and insomnia are the most common symptoms treated with this strain, and anyone looking for relaxation or rest will find it in Freezeland.",
			 "tags": [""],
			 "imageUrl": "images/strains/freezeland_100x100.jpg"
			},
			{"strainId": 283,
			 "strainName": "Critical Sensi Star",
			 "strainType": "Indica",
			 "components": [
			 	{ 
			 		"name": "THC9",  
			 		"value": 12.81
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 0.07
			 	},
			 	{ 
			 		"name": "CBN", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBG", 
			 		"value": 0.23	
			 	},
			 	{ 
			 		"name": "CBC", 
			 		"value": 0.07 
			 	},
			 	{ 
			 		"name": "THCV", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCA", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THC8", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pulegone", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Myrcene", 
			 		"value": 0.54
			 	},
			 	{ 
			 		"name": "Caryophyllene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Limonene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Linalool", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Eucalyptol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pinene", 
			 		"value": 0.22
			 	},
			 	{ 
			 		"name": "Terpineol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol-4", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cymene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Apigenin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Quercetin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cannflavin A", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Beta-sitosterol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBL", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Humulene", 
			 		"value": 1.39
				},
				{ 
			 		"name": "Terpinolene", 
			 		"value": 0.00
				}	
		 	], 
		 	"taste": ["Berry", "Citrus", "Earthy"],
		 	 "conditions": ["Insomnia", "Muscle Spasms", "Fibromyalgia", "Stress", "Appetite Loss", "Chronic Back Pain"],
			 "positiveEffects": ["Relaxed", "Happy", "Pain relief", "Drowsiness", "Conversational", "Calmness"],
			 "negativeEffects": ["Couch Lock", "Drowsiness", "Munchies"],
			 "descriptionDetailed": "The relaxing effects will help any consumer find their happy place, even when coping with insomnia, muscle spasms, or high stress levels.",
			 "descriptionAbbrev": "The relaxing effects will help any consumer find their happy place, even when coping with insomnia, muscle spasms, or high stress levels.",
			 "tags": [""],
			 "imageUrl": "images/strains/critical-sensi-star_100x100.jpg"
			},
			{"strainId": 284,
			 "strainName": "Rugburn OG",
			 "strainType": "Hybrid",
			 "components": [
			 	{ 
			 		"name": "THC9",  
			 		"value": 25.38
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 0.21
			 	},
			 	{ 
			 		"name": "CBN", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBG", 
			 		"value": 0.37	
			 	},
			 	{ 
			 		"name": "CBC", 
			 		"value": 0.00 
			 	},
			 	{ 
			 		"name": "THCV", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCA", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THC8", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pulegone", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Myrcene", 
			 		"value": 0.23
			 	},
			 	{ 
			 		"name": "Caryophyllene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Limonene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Linalool", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Eucalyptol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pinene", 
			 		"value": 0.65
			 	},
			 	{ 
			 		"name": "Terpineol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol-4", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cymene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Apigenin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Quercetin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cannflavin A", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Beta-sitosterol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBL", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Humulene", 
			 		"value": 0.33
				},
				{ 
			 		"name": "Terpinolene", 
			 		"value": 0.00
				}	
		 	], 
		 	"taste": ["Pungent", "Diesel", "Sweet", "Citrus"],
		 	 "conditions": ["Chronic Pain", "Depression", "Fibromyalgia", "Nausea", "Appetite Loss", "Insomnia", "Anxiety", "Stress"],
			 "positiveEffects": ["Relaxed", "Euphoric", "Uplifted", "Pain relief"],
			 "negativeEffects": ["Paranoid", "Dry Eyes", "Dry Mouth"],
			 "descriptionDetailed": "Most certainly Indica dominant, Rugburn OG has a body buzz that would be narcotic if not for the fact that it is accompanied by a happy mental high. This means it may be used to burn away fatigue, anxiety and stress.",
			 "descriptionAbbrev": "Most certainly Indica dominant, Rugburn OG has a body buzz that would be narcotic if not for the fact that it is accompanied by a happy mental high. This means it may be used to burn away fatigue, anxiety and stress.",
			 "tags": [""],
			 "imageUrl": "images/strains/rug-burn-og_100x100.jpg"
			},
			{"strainId": 285,
			 "strainName": "White Lightning",
			 "strainType": "Hybrid",
			 "components": [
			 	{ 
			 		"name": "THC9",  
			 		"value": 14.42
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 0.07
			 	},
			 	{ 
			 		"name": "CBN", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBG", 
			 		"value": 0.31	
			 	},
			 	{ 
			 		"name": "CBC", 
			 		"value": 0.00 
			 	},
			 	{ 
			 		"name": "THCV", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCA", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THC8", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pulegone", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Myrcene", 
			 		"value": 0.34
			 	},
			 	{ 
			 		"name": "Caryophyllene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Limonene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Linalool", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Eucalyptol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pinene", 
			 		"value": 0.43
			 	},
			 	{ 
			 		"name": "Terpineol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol-4", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cymene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Apigenin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Quercetin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cannflavin A", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Beta-sitosterol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBL", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Humulene", 
			 		"value": 1.28
				},
				{ 
			 		"name": "Terpinolene", 
			 		"value": 0.00
				}	
		 	], 
		 	"taste": ["Sweet", "Skunk", "Earthy"],
		 	 "conditions": ["Multiple Sclerosis", "Insomnia", "Anorexia", "Parkinsons", "Nausea", "Pain", "Anxiety"],
			 "positiveEffects": ["Pain relief", "Drowsiness", "Calmness", "Hungry", "Relaxed"],
			 "negativeEffects": ["Munchies", "Drowsiness"],
			 "descriptionDetailed": "White Lightning induces a deep indica calm that relieves pain, nausea, and anxiety. ",
			 "descriptionAbbrev": "White Lightning induces a deep indica calm that relieves pain, nausea, and anxiety. ",
			 "tags": [""],
			 "imageUrl": "images/strains/white-lightning_100x100.jpg"
			},
			{"strainId": 286,
			 "strainName": "Black Betty",
			 "strainType": "Hybrid",
			 "components": [
			 	{ 
			 		"name": "THC9",  
			 		"value": 23.27
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 0.15
			 	},
			 	{ 
			 		"name": "CBN", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBG", 
			 		"value": 0.00	
			 	},
			 	{ 
			 		"name": "CBC", 
			 		"value": 0.04 
			 	},
			 	{ 
			 		"name": "THCV", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCA", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THC8", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pulegone", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Myrcene", 
			 		"value": 0.08
			 	},
			 	{ 
			 		"name": "Caryophyllene", 
			 		"value": 1.12
			 	},
			 	{ 
			 		"name": "Limonene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Linalool", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Eucalyptol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pinene", 
			 		"value": 0.53
			 	},
			 	{ 
			 		"name": "Terpineol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol-4", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cymene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Apigenin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Quercetin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cannflavin A", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Beta-sitosterol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBL", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Humulene", 
			 		"value": 0.61
				},
				{ 
			 		"name": "Terpinolene", 
			 		"value": 0.00
				}	
		 	], 
		 	"taste": ["Sweet", "Skunk", "Pine", "Citrus"],
		 	 "conditions": ["Nausea", "Appetite Loss", "Fibromyalgia"],
			 "positiveEffects": ["Long Lasting", "Euphoric", "Potent", "Hungry", "Intense", "Mind + Body", "Relaxed" ],
			 "negativeEffects": ["Munchies"],
			 "descriptionDetailed": "With a rich but subtle aroma, Black Betty launches you into soaring euphoria that may be considered too lofty for the novice consumer. Though certainly good for a lazy day, Black Betty is known to induce a forgetfulness so fierce that concentration and productivity can seem impossible for some.",
			 "descriptionAbbrev": "With a rich but subtle aroma, Black Betty launches you into soaring euphoria that may be considered too lofty for the novice consumer. Though certainly good for a lazy day, Black Betty is known to induce a forgetfulness so fierce that concentration and productivity can seem impossible for some.",
			 "tags": [""],
			 "imageUrl": "images/strains/black-betty_100x100.jpg"
			},
			{"strainId": 287,
			 "strainName": "The Black",
			 "strainType": "Indica",
			 "components": [
			 	{ 
			 		"name": "THC9",  
			 		"value": 21.46
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 0.25
			 	},
			 	{ 
			 		"name": "CBN", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBG", 
			 		"value": 0.35	
			 	},
			 	{ 
			 		"name": "CBC", 
			 		"value": 0.03 
			 	},
			 	{ 
			 		"name": "THCV", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCA", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THC8", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pulegone", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Myrcene", 
			 		"value": 0.26
			 	},
			 	{ 
			 		"name": "Caryophyllene", 
			 		"value": 0.24
			 	},
			 	{ 
			 		"name": "Limonene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Linalool", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Eucalyptol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pinene", 
			 		"value": 0.46
			 	},
			 	{ 
			 		"name": "Terpineol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol-4", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cymene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Apigenin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Quercetin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cannflavin A", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Beta-sitosterol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBL", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Humulene", 
			 		"value": 0.78
				},
				{ 
			 		"name": "Terpinolene", 
			 		"value": 0.00
				}	
		 	], 
		 	"taste": ["Tea", "Earthy", "Sweet", "Hash", "Spicy"],
		 	 "conditions": ["Insomnia", "Pain", "Chronic Pain", "Anxiety"],
			 "positiveEffects": ["Pain relief", "Drowsiness", "Relaxed", "Potent"],
			 "negativeEffects": ["Couch Lock", "Anxious"],
			 "descriptionDetailed": "The Black is a strong 90% indica. As characteristic of many indicas, this strain is optimally used for pain relief and as a sleeping aid.",
			 "descriptionAbbrev": "The Black is a strong 90% indica. As characteristic of many indicas, this strain is optimally used for pain relief and as a sleeping aid.",
			 "tags": [""],
			 "imageUrl": "images/strains/the-black_100x100.jpg"
			},
			{"strainId": 288,
			 "strainName": "Pineapple Jack",
			 "strainType": "Hybrid",
			 "components": [
			 	{ 
			 		"name": "THC9",  
			 		"value": 21.70
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 0.09
			 	},
			 	{ 
			 		"name": "CBN", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBG", 
			 		"value": 0.00	
			 	},
			 	{ 
			 		"name": "CBC", 
			 		"value": 0.00 
			 	},
			 	{ 
			 		"name": "THCV", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCA", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THC8", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pulegone", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Myrcene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Caryophyllene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Limonene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Linalool", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Eucalyptol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pinene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol-4", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cymene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Apigenin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Quercetin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cannflavin A", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Beta-sitosterol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBL", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Humulene", 
			 		"value": 0.00
				},
				{ 
			 		"name": "Terpinolene", 
			 		"value": 0.00
				}	
		 	], 
		 	"taste": ["Pineapple", "Pine", "Nutty", "Citrus", "Spicy"],
		 	 "conditions": ["Anxiety", "Depression", "Irritability", "Migraines", "Fibromyalgia", "Stress"],
			 "positiveEffects": ["Clear headed", "Creative", "Sexual", "Happy", "Productive", "Euphoric", "Energetic", "Conversational"],
			 "negativeEffects": ["Dry Mouth", "Dry Eyes"],
			 "descriptionDetailed": "Helps you keep your chin held high amidst stress and depression while still leaving you feeling active and productive.",
			 "descriptionAbbrev": "Helps you keep your chin held high amidst stress and depression while still leaving you feeling active and productive.",
			 "tags": [""],
			 "imageUrl": "images/strains/pineapple-jack_100x100.jpg"
			},
			{"strainId": 289,
			 "strainName": "Barbara Bud",
			 "strainType": "Indica",
			 "components": [
			 	{ 
			 		"name": "THC9",  
			 		"value": 11.75
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 0.12
			 	},
			 	{ 
			 		"name": "CBN", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBG", 
			 		"value": 0.00	
			 	},
			 	{ 
			 		"name": "CBC", 
			 		"value": 0.00 
			 	},
			 	{ 
			 		"name": "THCV", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCA", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THC8", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pulegone", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Myrcene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Caryophyllene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Limonene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Linalool", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Eucalyptol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pinene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol-4", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cymene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Apigenin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Quercetin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cannflavin A", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Beta-sitosterol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBL", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Humulene", 
			 		"value": 0.00
				},
				{ 
			 		"name": "Terpinolene", 
			 		"value": 0.00
				}	
		 	], 
		 	"taste": ["Sweet", "Citrus", "Earthy"],
		 	 "conditions": ["Muscle Spasms", "Pain", "Fibromyalgia", "Stress", "Insomnia"],
			 "positiveEffects": ["Pain relief", "Drowsiness", "Relaxed", "Mellow"],
			 "negativeEffects": ["Anxious", "Drowsiness"],
			 "descriptionDetailed": "Has a fruity, citrus aroma with sweet undertones of bubblegum, and many patients have found Barbara Bud to help with pain, stress, and muscle spasms.",
			 "descriptionAbbrev": "Has a fruity, citrus aroma with sweet undertones of bubblegum, and many patients have found Barbara Bud to help with pain, stress, and muscle spasms.",
			 "tags": [""],
			 "imageUrl": "images/strains/barbara-bud_100x100.jpg"
			},
			{"strainId": 290,
			 "strainName": "Wappa",
			 "strainType": "Hybrid",
			 "components": [
			 	{ 
			 		"name": "THC9",  
			 		"value": 17.19
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 0.09
			 	},
			 	{ 
			 		"name": "CBN", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBG", 
			 		"value": 0.45	
			 	},
			 	{ 
			 		"name": "CBC", 
			 		"value": 0.02 
			 	},
			 	{ 
			 		"name": "THCV", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCA", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THC8", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pulegone", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Myrcene", 
			 		"value": 0.13
			 	},
			 	{ 
			 		"name": "Caryophyllene", 
			 		"value": 0.48
			 	},
			 	{ 
			 		"name": "Limonene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Linalool", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Eucalyptol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pinene", 
			 		"value": 0.46
			 	},
			 	{ 
			 		"name": "Terpineol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol-4", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cymene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Apigenin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Quercetin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cannflavin A", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Beta-sitosterol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBL", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Humulene", 
			 		"value": 0.30
				},
				{ 
			 		"name": "Terpinolene", 
			 		"value": 0.00
				}	
		 	], 
		 	"taste": ["Lemon", "Sweet", "Lime"],
		 	 "conditions": ["Insomnia", "Chronic Pain"],
			 "positiveEffects": ["Drowsiness", "Mellow", "Pain relief", "Relaxed", "Happy"],
			 "negativeEffects": ["Drowsiness", "Couch Lock"],
			 "descriptionDetailed": "Delivers happy, uplifting effects alongside an intense fruity flavor.",
			 "descriptionAbbrev": "Delivers happy, uplifting effects alongside an intense fruity flavor.",
			 "tags": [""],
			 "imageUrl": "images/strains/wappa_100x100.jpg"
			}

		];
		
		var conditions = [
			{"conditionId": 1,
			 "conditionName": "Insomnia", 
			 "treatment": "Insomnia Treatment description here.",
			 "strains": ["Trainwreck", "White Widow", "Sage", "Skywalker OG", "Permafrost", "Querkle", "Papaya", "Pennywise", "OG #18", "OG Kush", "Canna-Tsu", "Nebula", "Blackwater", "Bull Rider"],
			 "descriptionDetailed": "When you're having trouble sleeping on a regular basis the condition is referred to as insomnia. If it continues for a period of time the lack of REM sleep will cause problems with memory and the ability to focus. Both physical and emotional stress also accompanies prplonged sleep depravation.",
			 "descriptionAbbrev":  "Insomnia patients have trouble falling asleep at night.",
			 "tags": ["Insomnia","Sleep","Indica", "Sedative", "Trainwreck", "White Widow", "Sage", "Skywalker OG", "Permafrost", "Querkle", "Papaya", "Pennywise", "OG #18", "OG Kush", "Canna-Tsu", "Nebula"],
			 "imageUrl": "images/strains/acapulco-gold_100x100.jpg"
			},
			{"conditionId": 2,
			 "conditionName": "Arthritis", 
			 "treatment": "Arthritis Treatment description here.",
			 "strains": ["White Walker OG", "White Fire OG", "Super Lemno Haze", "Super Grandaddy", "Sugar Plum", "Sour Tsunami", "Silver Surfer", "Pennywise", "Pineapple", "Pineapple Hogsbreath", "Private Reserve", "Purple Haze", "Purple Kush", "Purple Urkle", "Querkle", "Ramona OG", "Sherbet Cookies", "Lemon Haze", "Lemon Larry OG", "Lemon OG Kush", "Lulu", "Mad Max", "May Weather Kush", "Neptune OG", "Northern Lights", "OG Cheese", "Ogre", "Diablo", "El Alquimista", "Fire Bomb", "God's Gift", "Gorilla Glue #4", "Grape Kool Aid", "Green Thailand", "Harle-Tsu", "Harlequin", "Jack Frost", "Black Cherry Soda", "Blackwater", "Brutus OG", "Bull Rider", "Canna-Tsu", "Cannatonic", "Charlotte's Web", "Chemdawg", "Cinderella 99", "Confidential Cheese", "Bull Rider"],
			 "descriptionDetailed": "Arthritis Detailed description here. Detailed description here.Detailed description here.Detailed description here. Detailed description here.",
			 "descriptionAbbrev":  "Arthritis Short description here.",
			 "tags": ["Arthritis","Pain","Indica", "White Walker OG", "White Fire OG", "Super Lemno Haze", "Super Grandaddy", "Sugar Plum", "Sour Tsunami", "Silver Surfer", "Pennywise", "Pineapple", "Pineapple Hogsbreath", "Private Reserve", "Purple Haze", "Purple Kush", "Purple Urkle", "Querkle", "Ramona OG", "Sherbet Cookies", "Lemon Haze", "Lemon Larry OG", "Lemon OG Kush", "Lulu", "Mad Max", "May Weather Kush", "Neptune OG", "Northern Lights", "OG Cheese", "Ogre", "Diablo", "El Alquimista", "Fire Bomb", "God's Gift", "Gorilla Glue #4", "Grape Kool Aid", "Green Thailand", "Harle-Tsu", "Harlequin", "Jack Frost", "Black Cherry Soda", "Blackwater", "Brutus OG", "Bullrider", "Canna-Tsu", "Cannatonic", "Charlotte's Web", "Chemdawg", "Cinderella 99", "Confidential Cheese"],
			 "imageUrl": "images/strains/acapulco-gold_100x100.jpg"
			},
			{"conditionId": 3,
			 "conditionName": "Anxiety", 
			 "treatment": "Anxiety Treatment description here.",
			 "strains": ["XJ-13", "Yumbodlt", "Vortex", "Warlock", "Strawberry Cough", "Trainwreck", "Stardawg", "Strawberry", "Skywalker OG", "Sour Dielsel", "Shipwreck", "Skywalker", "Romulan", "Sage", "Purple Wreck", "Querkle", "Pennywise", "Permafrost", "Pineapple", "Papaya", "OGiesel", "Ogre", "OG #18", "OG Kush", "Nebula", "Nothern Lights", "Killing Fields", "LVPK", "God's Gift", "Grapefruit", "Double Purple Doja", "El-Jeffe", "Church OG", "Critical Mass", "Canna-Tsu", "Chiesel", "ACDC", "Blue Dream", "Blackwater", "Bullrider"],
			 "descriptionDetailed": "Anxiety Detailed description here. Detailed description here.Detailed description here.Detailed description here. Detailed description here.",
			 "descriptionAbbrev":  "Anxiety Short description here.",
			 "tags": ["Anxiety","Stress", "Relaxation", "XJ-13", "Yumbodlt", "Vortex", "Warlock", "Strawberry Cough", "Trainwreck", "Stardawg", "Strawberry", "Skywalker OG", "Sour Dielsel", "Shipwreck", "Skywalker", "Romulan", "Sage", "Purple Wreck", "Querkle", "Pennywise", "Permafrost", "Pineapple", "Papaya", "OGiesel", "Ogre", "OG #18", "OG Kush", "Nebula", "Nothern Lights", "Killing Fields", "LVPK", "God's Gift", "Grapefruit", "Double Purple Doja", "El-Jeffe", "Church OG", "Critical Mass", "Canna-Tsu", "Chiesel", "ACDC", "Blue Dream"],
			 "imageUrl": "images/strains/acapulco-gold_100x100.jpg"
			},
			{"conditionId": 4,
			 "conditionName": "Anorexia", 
			 "treatment": "Anorexia Treatment description here.",
			 "strains": ["Yumbodlt", "Zen", "Strawberry Cough", "Warlock", "Shipwreck", "Sour Diesel", "Pineapple", "Sage N Sour", "OG #18", "Ogre", "LVPK", "Mango", "Ice", "Jasmin", "Hashberry", "HOG", "Harle-Tsu", "Harlequin", "Edelweiss", "Goo", "Chiesel", "Critical Kush", "Cheese", "Chemo", "Bubba Kush", "Charlotte's Web", "Ak-48", "Amnesia", "Banana Diesel", "Fire Bomb", "Gooey Wreck", "Green Dream", "Hawaiian Hulk", "Jack Herer", "Lamb's Bread", "Lemon Haze", "Lemon Head OG", "Moonshine Diesel", "Pineapple Express", "Purple Haze", "Great White Shark", "Acapulco Gold", "Amnesia Haze", "Berry Queen", "Godfather OG", "Afghani Bullrider", "Afgoo", "AK-47", "Cinderella 99", "Jack Frost", "Kali Mist", "NY Sour Diesel", "Skunk #1", "Bay Cookies", "Blackberry Kush", "Blue Haze", "Candy Jack", "Candy OG", "Cataract Kush", "Chemdawg", "Cherry Bomb", "Confidential Cheese", "DJ Short Blueberry", "Dubtech", "Dutch Passion", "Forum Cookies/GSC", "Gorilla Glue #4", "Grandaddy Purple", "Grape Cookies", "Grape Kool Aid", "Kandy Kush", "King Louis XIII", "Kosher Kush", "Kryptonite", "L.A. Confidential", "Legend", "Lemon Diesel", "Lemon Kush", "Magic Jack", "May Weather Kush", "Mecury OG"],
			 "descriptionDetailed": "Anorexia Detailed description here. Detailed description here.Detailed description here.Detailed description here. Detailed description here.",
			 "descriptionAbbrev":  "Anorexia nervosa is a serious, potentially life-threatening eating disorder characterized by self-starvation and excessive weight loss.",
			 "tags": ["Anorexia","Appetite","Munchies", "Yumbodlt", "Zen", "Strawberry Cough", "Warlock", "Shipwreck", "Sour Diesel", "Pineapple", "Sage N Sour", "OG #18", "Ogre", "LVPK", "Mango", "Ice", "Jasmin", "Hashberry", "HOG", "Harle-Tsu", "Harlequin", "Edelweiss", "Goo", "Chiesel", "Critical Kush", "Cheese", "Chemo", "Bubba Kush", "Charlotte's Web", "Ak-48", "Amnesia"],
			 "imageUrl": "images/strains/acapulco-gold_100x100.jpg"
			},
			{"conditionId": 5,
			 "conditionName": "ADD/ADHD", 
			 "treatment": "ADD/ADHD Treatment description here.",
			 "strains": ["Zen", "White Widow", "XJ-13", "Vortex", "Warlock", "Strawberry Cough", "Trainwreck", "Sour Diesel", "Strawberry", "Skywalker", "Skywalker OG", "Sage N Sour", "Shipwreck", "Plushberry", "Querkle", "Pineapple", "OG Kush", "Permafrost", "Northern Lights #5", "OG #18", "Harle-Tsu", "Nebula", "Blue Dream", "Canna-Tsu", "El-Jeffe", "Banana Diesel", "Forum Cookies/GSC", "Gooey Wreck", "Grapefruit Haze", "Green Crack", "Jack Chemdawg", "Jillybean", "Lamb's Bread", "Lemon Haze", "Lemon Head OG", "Pineapple Express", "Purple Haze", "Alien Rock Candy", "Blueberry Trainwreck", "Lemon Jack", "Pineapple Hogsbreath", "Purple Coma", "J1", "Cinderella 99", "Jack Frost", "Kali Mist", "Skunk #1", "Candy OG", "Confidential Cheese", "Deadhead OG", "Gorrilla Glue #4", "Grape Cookies", "Grape Kool Aid", "H-Train Wreck", "Lemon Jack", "Mercury OG", "Mike Tyson", "Moon Candy", "Neptune OG", "Northern Lights", "OG Cheese", "Organic OG", "Platinum Trinity Kush", "Private Reserve OG", "Purple Cheese", "Saturn OG", "Silver Surfer", "Stratosphere", "Strawbery Mist", "Sugar Plum", "Super Grandaddy", "Super Lemon Haze", "Superman OG", "Tangerine", "Thin Mint", "Valentine X"],
			 "descriptionDetailed": "ADD/ADHD Detailed description here. Detailed description here.Detailed description here.Detailed description here. Detailed description here.",
			 "descriptionAbbrev":  "ADD/ADHD Short description here.",
			 "tags": ["ADD","ADHD","Relaxing", "Zen", "White Widow", "XJ-13", "Vortex", "Warlock", "Strawberry Cough", "Trainwreck", "Sour Diesel", "Strawberry", "Skywalker", "Skywalker OG", "Sage N Sour", "Shipwreck", "Plushberry", "Querkle", "Pineapple", "OG Kush", "Permafrost", "Northern Lights #5", "OG #18", "Harle-Tsu", "Nebula", "Blue Dream", "Canna-Tsu", "El-Jeffe"],
			 "imageUrl": "images/strains/acapulco-gold_100x100.jpg"
			},
			{"conditionId": 6,
			 "conditionName": "Pain", 
			 "treatment": "Pain Treatment description here.",
			 "strains": ["Black Buddah", "Black Cherry Soda", "Berry Queen", "Berry White", "Banana Diesel", "Bay Cookies", "ATF", "Avi-Dekel", "Alien Rock Candy", "Amnesia Haze", "AK-48", "Alien OG", "Afgooey", "AK-47", "Afgani Bullrider", "Afgoo", "Afghani", "707 Headband", "Acapulco Gold", "Blackwater", "Bull Rider"],
			 "descriptionDetailed": "Pain Detailed description here. Detailed description here.Detailed description here.Detailed description here. Detailed description here.",
			 "descriptionAbbrev":  "Pain Short description here.",
			 "tags": ["Pain","Black Buddah", "Black Cherry Soda", "Berry Queen", "Berry White", "Banana Diesel", "Bay Cookies", "ATF", "Avi-Dekel", "Alien Rock Candy", "Amnesia Haze", "AK-48", "Alien OG", "Afgooey", "AK-47", "Afgani Bullrider", "Afgoo", "Afghani", "707 Headband", "Acapulco Gold" ],
			 "imageUrl": "images/strains/acapulco-gold_100x100.jpg"
			},
			{"conditionId": 7,
			 "conditionName": "Nausea", 
			 "treatment": "Nausea Treatment description here.",
			 "strains": ["White Fire OG", "White Walker OG", "Sugar Plum", "Thin Mint", "Sour Dub", "Strawberry Mist", "Shark Shock", "Sour Bubble", "Querkle", "Raskal OG", "Purple Coma", "Puple Passion", "Moonshine Diesel", "Pineapple Hogsbreath", "Mango Maui", "Moon Candy", "Lavender", "Mafia OG", "Harlequin", "Herojuana", "Grape Kool Aid", "Green Thailand", "El Alquimista", "Grape Cookies", "Dubtech", "Eden OG", "Confidential Cheese", "DJ Shortberry", "Canna-Tsu", "Cherry Bomb", "Blue Dream", "Candy OG", "Berry Queen", "ACDC", "Bay Cookies"],
			 "descriptionDetailed": "Nausea Detailed description here. Detailed description here.Detailed description here.Detailed description here. Detailed description here.",
			 "descriptionAbbrev":  "Nausea Short description here.",
			 "tags": ["Nausea", "White Fire OG", "White Walker OG", "Sugar Plum", "Thin Mint", "Sour Dub", "Strawberry Mist", "Shark Shock", "Sour Bubble", "Querkle", "Raskal OG", "Purple Coma", "Puple Passion", "Moonshine Diesel", "Pineapple Hogsbreath", "Mango Maui", "Moon Candy", "Lavender", "Mafia OG", "Harlequin", "Herojuana", "Grape Kool Aid", "Green Thailand", "El Alquimista", "Grape Cookies", "Dubtech", "Eden OG", "Confidential Cheese", "DJ Shortberry", "Canna-Tsu", "Cherry Bomb", "Blue Dream", "Candy OG", "Berry Queen", "ACDC", "Bay Cookies"],
			 "imageUrl": "images/strains/acapulco-gold_100x100.jpg"
			},
			{"conditionId": 8,
			 "conditionName": "Migraines", 
			 "treatment": "Migraines Treatment description here.",
			 "strains": ["White Fire OG", "White Walker OG", "Super Lemon Haze", "The White", "Stratoshpere", "Sugar Plum", "Silverback Gorilla", "Sour Tsunami", "Regulator OG", "Sherbet Cookies", "Platinum Trinity Kush", "Purple Urkle", "Phantom OG", "Pineapple Hogsbreath", "Northern Lights", "Pennywise", "May Weather Kush", "Moonshine Diesel", "Magic Jack", "Mango Maui", "Mad Max", "Mafia OG", "Lemon OG Kush", "Lulu", "Lemon Head OG", "Lemon Jack", "Jupiter Kush", "L.A. Confidential", "Hog", "Jack Chemdawg", "Jupiter Kush", "Harle-Tsu", "Hawaiian Hulk", "Green Thailand", "H-Trainwreck", "Grape Kool Aid", "Grapefruit Haze", "Gooey Wreck", "Grape Cookies", "Forum Cookies/GSC", "Ghost OG", "Eden OG", "Fire Bomb", "Diablo", "Dubtech", "Clear Lake", "Deadhead OG", "Canelope Haze", "Chocolate Thai", "Blue Dream", "Candyland", "Black Magic Kush", "Alien OG", "Banana Diesel", "Afghani", "Afgooey"],
			 "descriptionDetailed": "Migraines Detailed description here. Detailed description here.Detailed description here.Detailed description here. Detailed description here.",
			 "descriptionAbbrev":  "Migraines Short description here.",
			 "tags": ["Migraines", "Headache", "White Fire OG", "White Walker OG", "Super Lemon Haze", "The White", "Stratoshpere", "Sugar Plum", "Silverback Gorilla", "Sour Tsunami", "Regulator OG", "Sherbet Cookies", "Platinum Trinity Kush", "Purple Urkle", "Phantom OG", "Pineapple Hogsbreath", "Northern Lights", "Pennywise", "May Weather Kush", "Moonshine Diesel", "Magic Jack", "Mango Maui", "Mad Max", "Mafia OG", "Lemon OG Kush", "Lulu", "Lemon Head OG", "Lemon Jack", "Jupiter Kush", "L.A. Confidential", "Hog", "Jack Chemdawg", "Jupiter Kush", "Harle-Tsu", "Hawaiian Hulk", "Green Thailand", "H-Trainwreck", "Grape Kool Aid", "Grapefruit Haze", "Gooey Wreck", "Grape Cookies", "Forum Cookies/GSC", "Ghost OG", "Eden OG", "Fire Bomb", "Diablo", "Dubtech", "Clear Lake", "Deadhead OG", "Canelope Haze", "Chocolate Thai", "Blue Dream", "Candyland", "Black Magic Kush", "Alien OG", "Banana Diesel", "Afghani", "Afgooey"],
			 "imageUrl": "images/strains/acapulco-gold_100x100.jpg"
			},
			{"conditionId": 9,
			 "conditionName": "Hypertension", 
			 "treatment": "Treat Hypertension.",
			 "strains": ["Saturn OG", "Super Grandaddy", "Pennywise", "Phantom OG", "Mike Tyson", "OG Cheese", "Lulu", "Mercury OG", "ACDC", "Gooey Wreck", "Blackwater"],
			 "descriptionDetailed": "Hypertension Detailed description here. Detailed description here.Detailed description here.Detailed description here. Detailed description here.",
			 "descriptionAbbrev":  "Treat Hypertension.",
			 "tags": ["Hypertension", "Saturn OG", "Super Grandaddy", "Pennywise", "Phantom OG", "Mike Tyson", "OG Cheese", "Lulu", "Mercury OG", "ACDC", "Gooey Wreck"],
			 "imageUrl": "images/strains/acapulco-gold_100x100.jpg"
			},
			{"conditionId": 10,
			 "conditionName": "HIV/AIDS", 
			 "treatment": "HIV/AIDS Treatment description here.",
			 "strains": ["ACDC"],
			 "descriptionDetailed": "HIV/AIDS Detailed description here. Detailed description here.Detailed description here.Detailed description here. Detailed description here.",
			 "descriptionAbbrev":  "HIV/AIDS Short description here.",
			 "tags": ["HIV", "AIDS", "ACDC"],
			 "imageUrl": "images/strains/acapulco-gold_100x100.jpg"
			},
			{"conditionId": 11,
			 "conditionName": "Glaucoma", 
			 "treatment": "Glaucoma Treatment description here.",
			 "strains": ["Silver Surfer", "Sugar Plum", "Mafia OG", "Grape Cookies", "Green Thailand", "ACDC", "Gooey Wreck"],
			 "descriptionDetailed": "Glaucoma Detailed description here. Detailed description here.Detailed description here.Detailed description here. Detailed description here.",
			 "descriptionAbbrev":  "Glaucoma Short description here.",
			 "tags": ["Glaucoma", "Silver Surfer", "Sugar Plum", "Mafia OG", "Grape Cookies", "Green Thailand", "ACDC", "Gooey Wreck" ],
			 "imageUrl": "images/strains/acapulco-gold_100x100.jpg"
			},
			{"conditionId": 12,
			 "conditionName": "Epilepsy", 
			 "treatment": "Epilepsy Treatment description here.",
			 "strains": ["Sour Tsunami", "Valentine X", "Sour OG", "Lemon Larry OG", "Mars OG", "Harlequin", "Jupiter Kush", "G13 Haze", "Harle-Tsu", "Cannatonic", "Charlotte's Web", "Cannatonic #4", "Canna-Tsu", "Banana Diesel", "Bull Rider", "Avi-Dekel"],
			 "descriptionDetailed": "Epilepsy Detailed description here. Detailed description here.Detailed description here.Detailed description here. Detailed description here.",
			 "descriptionAbbrev":  "Epilepsy Short description here.",
			 "tags": ["Epilepsy", "Sour Tsunami", "Valentine X", "Sour OG", "Lemon Larry OG", "Mars OG", "Harlequin", "Jupiter Kush", "G13 Haze", "Harle-Tsu", "Cannatonic", "Charlotte's Web", "Cannatonic #4", "Canna-Tsu", "Banana Diesel", "Bull Rider", "Avi-Dekel" ],
			 "imageUrl": "images/strains/acapulco-gold_100x100.jpg"
			},
			{"conditionId": 13,
			 "conditionName": "Depression", 
			 "treatment": "Depression Treatment description here.",
			 "strains": ["WiFi OG", "Willy's Wonder", "XJ-13", "White Walker OG", "White Widow", "White Fire OG", "White Skunk", "Tropical OG", "True OG", "Trainwreck", "Trinity OG", "The Flav", "Thin Mint", "Tahoe OG", "Tangilope", "Super Silver Haze", "Superman OG", "Super Grandaddy", "Super Lemon Haze", "Sugar Plum", "Sour OG", "Stratosphere", "Strawberry Mist", "Sour Cherry", "Sour Diesel", "Skywalker", "Snowcap", "Sherbet Cookies", "Skunk #1", "SFV OG", "Shark Shock", "Raskal OG", "Regulator OG", "Querkle", "Ramona OG", "Purple Nepal", "Purple Passion", "Purple Haze", "Purple Kush", "Private Reserve OG", "Purple Cheese", "Pineapple Thai", "Platnum Trinity Kush", "Pineapple Express", "Pineapple Hogsbreath", "Phantom OG", "Pineapple", "Paris OG", "Pennywise", "OG Cheese", "Organic OG", "Northern Lights", "NY Sour Diesel", "Moonshine Diesel", "Mr. Nice", "Mike Tyson", "Moon Candy", "May Weather Kush", "Mercury OG", "Master Bubba", "Magic Jack", "Mango Maui", "Lulu", "Mad Max", "Lemon Kush", "Lemon Larry OG", "Lemon Head OG", "Lemon Jack", "Lemon Diesel", "Lemon Haze", "Larry OG", "Kosher Kush", "Lamb's Bread", "Jupiter Kush", "Kali Mist", "Jack Herer", "Jillybean", "Jack Chemdawg", "Jack Frost", "Headband", "J1", "Harle-Tsu", "Hawaiian Hulk", "Green Thailand", "H-Train Wreck", "Green Cross", "Green Dream", "Great White Shark", "Green Crack", "Grape Kool Aid", "Grapefruit Haze", "Gorilla Glue #4", "Grape Cookies", "Gooey Wreck", "Gorilla Glue", "Girl Scout Cookies", "God's Gift", "G13 Haze", "Ghost OG", "Fire OG", "Forum Cookies/GSC", "Euphoria", "Fire Bomb", "Eden OG", "El Alquimista", "Euphoria", "Dubtech", "Dutch Passion", "Deadhead OG", "Diamond OG", "Cinderella 99", "Confidential Cheese", "Cherry Pie", "Chocolate Thai", "Cataract Kush", "Chemdawg", "Cannalope Haze", "Cannatonic", "Candy OG", "Candyland", "Cannatonic #4", "Blue Moonshine", "Blueberry Trainwreck", "Blue Dream", "Berry White", "Black Cherry Soda", "Bay Cookies", "Berry Queen", "Amnesia Haze", "ATF", "Alien OG", "Alien Rock Candy", "ACDC", "AK-48", "707 Headband", "Acapulco Gold"],
			 "descriptionDetailed": "Depression Detailed description here. Detailed description here.Detailed description here.Detailed description here. Detailed description here.",
			 "descriptionAbbrev":  "Depression Short description here.",
			 "tags": ["Depression", "WiFi OG", "Willy's Wonder", "XJ-13", "White Walker OG", "White Widow", "White Fire OG", "White Skunk", "Tropical OG", "True OG", "Trainwreck", "Trinity OG", "The Flav", "Thin Mint", "Tahoe OG", "Tangilope", "Super Silver Haze", "Superman OG", "Super Grandaddy", "Super Lemon Haze", "Sugar Plum", "Sour OG", "Stratosphere", "Strawberry Mist", "Sour Cherry", "Sour Diesel", "Skywalker", "Snowcap", "Sherbet Cookies", "Skunk #1", "SFV OG", "Shark Shock", "Raskal OG", "Regulator OG", "Querkle", "Ramona OG", "Purple Nepal", "Purple Passion", "Purple Haze", "Purple Kush", "Private Reserve OG", "Purple Cheese", "Pineapple Thai", "Platnum Trinity Kush", "Pineapple Express", "Pineapple Hogsbreath", "Phantom OG", "Pineapple", "Paris OG", "Pennywise", "OG Cheese", "Organic OG", "Northern Lights", "NY Sour Diesel", "Moonshine Diesel", "Mr. Nice", "Mike Tyson", "Moon Candy", "May Weather Kush", "Mercury OG", "Master Bubba", "Magic Jack", "Mango Maui", "Lulu", "Mad Max", "Lemon Kush", "Lemon Larry OG", "Lemon Head OG", "Lemon Jack", "Lemon Diesel", "Lemon Haze", "Larry OG", "Kosher Kush", "Lamb's Bread", "Jupiter Kush", "Kali Mist", "Jack Herer", "Jillybean", "Jack Chemdawg", "Jack Frost", "Headband", "J1", "Harle-Tsu", "Hawaiian Hulk", "Green Thailand", "H-Train Wreck", "Green Cross", "Green Dream", "Great White Shark", "Green Crack", "Grape Kool Aid", "Grapefruit Haze", "Gorilla Glue #4", "Grape Cookies", "Gooey Wreck", "Gorilla Glue", "Girl Scout Cookies", "God's Gift", "G13 Haze", "Ghost OG", "Fire OG", "Forum Cookies/GSC", "Euphoria", "Fire Bomb", "Eden OG", "El Alquimista", "Euphoria", "Dubtech", "Dutch Passion", "Deadhead OG", "Diamond OG", "Cinderella 99", "Confidential Cheese", "Cherry Pie", "Chocolate Thai", "Cataract Kush", "Chemdawg", "Cannalope Haze", "Cannatonic", "Candy OG", "Candyland", "Cannatonic #4", "Blue Moonshine", "Blueberry Trainwreck", "Blue Dream", "Berry White", "Black Cherry Soda", "Bay Cookies", "Berry Queen", "Amnesia Haze", "ATF", "Alien OG", "Alien Rock Candy", "ACDC", "AK-48", "707 Headband", "Acapulco Gold"],
			 "imageUrl": "images/strains/acapulco-gold_100x100.jpg"
			},
			{"conditionId": 14,
			 "conditionName": "Cancer", 
			 "treatment": "Cancer Treatment description here.",
			 "strains": ["White Fire Alien OG", "Yoda OG", "The White", "Valenine X", "Pineapple Thai", "Sour Tsunami", "Lemon Larry OG", "Master Bubba", "King's Kush", "Kosher Kush", "Harlequin", "Hog", "Great White Shark", "Harle-Tsu", "Charlotte's Web", "G13 Haze", "Canna-Tsu", "Cannatonic", "Avi-Dekel", "Bull Rider", "Afghani"],
			 "descriptionDetailed": "Cancer Detailed description here. Detailed description here.Detailed description here.Detailed description here. Detailed description here.",
			 "descriptionAbbrev":  "Cancer Short description here.",
			 "tags": ["Cancer", "White Fire Alien OG", "Yoda OG", "The White", "Valenine X", "Pineapple Thai", "Sour Tsunami", "Lemon Larry OG", "Master Bubba", "King's Kush", "Kosher Kush", "Harlequin", "Hog", "Great White Shark", "Harle-Tsu", "Charlotte's Web", "G13 Haze", "Canna-Tsu", "Cannatonic", "Avi-Dekel", "Bull Rider", "Afghani"],
			 "imageUrl": "images/strains/acapulco-gold_100x100.jpg"
			},
			{"conditionId": 15,
			 "conditionName": "Bipolar Disorder", 
			 "treatment": "Bipolar Treatment description here.",
		 	 "strains": ["Trainwreck", "Tropical OG", "Tangilope", "Thin Mint", "Super Grandaddy", "Tangerine", "Sour Cherry", "Stratosphere", "Saturn OG", "Sherbet Cookies", "Regulator OG", "Purple Urkle", "Raskal OG", "Private Reserve OG", "Purple Haze", "Platnum Trinity Kush", "Northern Lights", "Pineapple Express", "Moon Candy", "Moonshine Diesel", "Magic Jack", "Mike Tyson", "Lemon Head OG", "Lulu", "Lamb's Bread", "Lemon Haze", "Jack Herer", "Jillybean", "Hawaiian Hulk", "Jack Chemdawg", "Green Thailand", "H-Train Wreck", "Green Crack", "Green Dream", "Gooey Wreck", "Grapefruit Haze", "Fire Bomb", "Forum Cookies/GSC", "Eden OG", "Euphoria", "Diablo", "Dutch Passion", "Confidential Cheese", "Deadhead OG", "Candy OG", "Chem Valley Kush", "ACDC", "Banana Diesel"],
			 "descriptionDetailed": "Bipolar Detailed description here. Detailed description here.Detailed description here.Detailed description here. Detailed description here.",
			 "descriptionAbbrev":  "Bipolar Short description here.",
			 "tags": ["Bipolar", "Disorder", "Trainwreck", "Tropical OG", "Tangilope", "Thin Mint", "Super Grandaddy", "Tangerine", "Sour Cherry", "Stratosphere", "Saturn OG", "Sherbet Cookies", "Regulator OG", "Purple Urkle", "Raskal OG", "Private Reserve OG", "Purple Haze", "Platnum Trinity Kush", "Northern Lights", "Pineapple Express", "Moon Candy", "Moonshine Diesel", "Magic Jack", "Mike Tyson", "Lemon Head OG", "Lulu", "Lamb's Bread", "Lemon Haze", "Jack Herer", "Jillybean", "Hawaiian Hulk", "Jack Chemdawg", "Green Thailand", "H-Train Wreck", "Green Crack", "Green Dream", "Gooey Wreck", "Grapefruit Haze", "Fire Bomb", "Forum Cookies/GSC", "Eden OG", "Euphoria", "Diablo", "Dutch Passion", "Confidential Cheese", "Deadhead OG", "Candy OG", "Chem Valley Kush", "ACDC", "Banana Diesel"],
			 "imageUrl": "images/strains/acapulco-gold_100x100.jpg"
			},
			{"conditionId": 16,
			 "conditionName": "Asthma", 
			 "treatment": "Asthma Treatment description here.",
			 "strains": ["Superman OG", "Thin Mint", "Purple Cheese", "Shark Shock", " NY Sour Diesel", "Lemon Haze", "Lemon Head OG", "Green Dream", "Harle-Tsu", "Jack Frost", "Clear Lake", "Euphoria", "Permafrost", "Purple Cheese", "Superman OG"],
			 "descriptionDetailed": "Asthma Detailed description here. Detailed description here.Detailed description here.Detailed description here. Detailed description here.",
			 "descriptionAbbrev":  "Asthma Short description here.",
			 "tags": ["Asthma", "Bronchodilator", "Breathing", "Superman OG", "Thin Mint", "Purple Cheese", "Shark Shock", " NY Sour Diesel", "Lemon Haze", "Lemon Head OG", "Green Dream", "Harle-Tsu", "Jack Frost", "Clear Lake", "Euphoria"],
			 "imageUrl": "images/strains/acapulco-gold_100x100.jpg"
			},
			{"conditionId": 17,
			 "conditionName": "PTSD", 
			 "treatment": "PTSD Treatment description here.",
			 "strains": ["Trainwreck", "Pennywise", "ACDC", "Bay Cookies"],
			 "descriptionDetailed": "Researchers think marijuana pharmaceuticals might bring PTSD patients relief from their memories.",
			 "descriptionAbbrev":  "Relieve PTSD",
			 "tags": ["Trainwreck", "PTSD", "Snxiety", "Depression"],
			 "imageUrl": "images/strains/acapulco-gold_100x100.jpg"
			},
			{"conditionId": 18,
			 "conditionName": "Fibromyalgia", 
			 "treatment": "Relief from pain due to muscle soreness of the connective tissues associated with Fibromyalgia.",
			 "strains": ["Kali Mist", "Lulu", "Moonshine Diesel", "Purple Coma", "Skunk #1", "Tangerine"],
			 "descriptionDetailed": "Relief from pain due to muscle soreness of the connective tissues associated with Fibromyalgia.",
			 "descriptionAbbrev":  "Relieve Fibromyalgia",
			 "tags": ["Fibromyalgia"],
			 "imageUrl": "images/strains/acapulco-gold_100x100.jpg"
			},
			{"conditionId": 19,
			 "conditionName": "Muscle Spasms", 
			 "treatment": "Calm muscle spasms.",
			 "strains": ["Sage","Romulan", "ACDC", "Superman OG", "Gooey Wreck", "Grapefruit Haze", "Purple Haze", "Avi-Dekel", "L.A. Confidential", "Pineapple Hogsbreath", "Gorilla Glue #4", "Brutus OG", "Bull Rider"],
			 "descriptionDetailed": "Relief from muscle spasms.",
			 "descriptionAbbrev":  "Muscle Spasms",
			 "tags": ["Trainwreck", "Fibromyalgia", "Snxiety", "Depression"],
			 "imageUrl": "images/strains/acapulco-gold_100x100.jpg"
			},
			{"conditionId": 20,
			 "conditionName": "Impotence", 
			 "treatment": "Treat impotence.",
			 "strains": ["Green Thailand", "Hawaiian Hulk", "Stratosphere", "Tangerine", "Valentine X", "Strawberry Mist"],
			 "descriptionDetailed": "Relief from symptoms associated with impotence and sexual dysfunction.",
			 "descriptionAbbrev":  "Relief from Impotence",
			 "tags": ["Trainwreck", "Impotence", "Snxiety", "Depression"],
			 "imageUrl": "images/strains/acapulco-gold_100x100.jpg"
			},
			{"conditionId": 21,
			 "conditionName": "Fatigue", 
			 "treatment": "Become energized when you feel fatigued.",
			 "strains": ["Green Thailand", "Jillybean", "Lamb's Bread", "Purple Haze", "Great White Shark", "707 Headband", "Acapulco Gold", "ATF", "CandyLand", "Cannalope Haze", "Lemon Jack", "Super Lemon Haze", "J1", "Cinderella 99", "Island Sweet Skunk", "LA Kush", "Sage", "Strawberry Cough", "Stardawg", "Green Crack", "Jack Herer", "Tangerine", "Candy Jack", "Gorilla Glue #4", "Super Silver Haze"],
			 "descriptionDetailed": "Relief from symptoms associated with fatigue.",
			 "descriptionAbbrev":  "Relief from fatigue",
			 "tags": ["Fatigue"],
			 "imageUrl": "images/strains/acapulco-gold_100x100.jpg"
			},
			{"conditionId": 22,
			 "conditionName": "Appetite Loss", 
			 "treatment": "Treat appetite loss.",
			 "strains": ["Strawberry Cough","Sour Diesel", "Thin Mint", "Banana Diesel", "Chem Valley Kush", "Confidential Cheese", "Fire Bomb", "Forum Cookies/GSC", "Gooey Wreck", "Green Dream", "Green Thailand", "Hawaiian Hulk", "Jack Herer", "Lamb's Bread", "Pineapple Express", "Tangerine", "Tangilope", "Great White Shark", "Acapulco Gold", "Amnesia Haze", "Cannalope Haze", "Pineapple Hogsbreath", "Super Lemon Haze", "Afghani Bullrider", "Afgoo", "AK-47", "AK-48", "Cinderella 99", "Lemon Haze", "Sugar Plum", "Kali Mist", "NY Sour Diesel", "Snowcap", "Super Silver Haze", "Superman OG", "Green Crack", "H-Train Wreck", "Mike Tyson", "Platinum Trinity Kush", "Private Reserve OG", "Candy Jack", "Cataract Kush", "Chemdawg", "Grape Cookies", "Cherry Bomb", "DJ SHort Blueberry", "Mercury OG", "Blue Haze", "Bubba Kush", "Cheese", "LA Kush", "Neptune OG", "Organic OG Kush"],
			 "descriptionDetailed": "Relief from symptoms associated with appetite loss.",
			 "descriptionAbbrev":  "Relief from appetite loss.",
			 "tags": ["Appetite Loss"],
			 "imageUrl": "images/strains/acapulco-gold_100x100.jpg"
			},
			{"conditionId": 23,
			 "conditionName": "Chronic Aches", 
			 "treatment": "Treat chronic aches.",
			 "strains": ["Brutus OG"],
			 "descriptionDetailed": "Relief from symptoms associated with chronic aches and pains.",
			 "descriptionAbbrev":  "Relief from chronic pain.",
			 "tags": ["Chronic aches"],
			 "imageUrl": "images/strains/acapulco-gold_100x100.jpg"
			},
			{"conditionId": 24,
			 "conditionName": "Stress", 
			 "treatment": "Relieve stress.",
			 "strains": ["Bull Rider", "Blackwater", "Trainwreck", "White Widow", "Sage", "Skywalker OG", "Qwerkle", "OG Kush", "Canna-Tsu", "Warlock", "Strawberry Cough", "Stardawg", "Strawberry", "Sour Diesel", "Pineapple", "Purple Cheese", "ACDC", "Superman OG", "Thin Mint", "Candy OG", "Chem Valley Kush", "Banana Diesel", "Confidential Cheese", "Deadhead OG", "Diablo", "Dutch Passion", "Fire Bomb", "Forum Cookies", "Gooey Wreck", "Grapefruit Haze", "Green Crack", "Green Dream", "Thai", "H-trainwreck", "Bruce Banner", "Chemdawg", "Jack Herer", "Jillybean", "Lambs Bread", "Lemon Haze", "Super Lemon OG", "Lulu"],
			 "descriptionDetailed": "Hypertension Detailed description here. Detailed description here.Detailed description here.Detailed description here. Detailed description here.",
			 "descriptionAbbrev":  "Relieve stress.",
			 "tags": ["Stress"],
			 "imageUrl": "images/strains/acapulco-gold_100x100.jpg"
			},
			{"conditionId": 25,
			 "conditionName": "Coronary Heart Disease", 
			 "treatment": "Treat or prevent conditions associated with heart disease.",
			 "strains": ["Valentine X", "ACDC", "Bull Rider", "Avi-Dekel", "Cannatonic #4", "Green Dream", "Harlequin", "Cannatonic", "Harle-Tsu", "Canna-Tsu", "Lemon Larry OG", "Master Bubba", "Sour Cherry", "Sour Tsunami", "Charlotte's Web", "Pineapple Thai", "Lamb's Bread", "Afgoo", "Cannalope Haze", "Kali Mist", "Warlock", "Strawberry Cough", "Skunk #1", "Kosher Kush", "Super Lemon Haze", "Permafrost", "Cataract Kush", "Purple Cheese", "Deadhead OG", "ATF", "Nebula", "Pineapple", "Sour OG", "Purple Haze", "Lemon Haze", "Querkle", "Vortex", "Stardawg", "Cheese", "Bubba Kush", "Super Silver Haze", "Trainwreck", "Pineapple Express", "Blue Dream", "OG Kush", "White Widow", "Confidential Cheese", "Skywalker OG", "Strawberry", "Superman OG",  "Green Crack", "Jillybean", "Girl Scout Cookies", "Sour Diesel", "Alien OG", "Berry White", "The White", "Chemdawg", "Grandaddy Purple", "Jack Herer", "Island Sweet Skunk", "LA Kush", "Cherry Pie", "Fire OG", "Headband"],
			 "descriptionDetailed": "Recent resarch indicates chronic inflammation is a leading contributor to conditions like cornonary heart disease. In addition, anti-oxidants have also been proven to help prevent conditions associated wiht heart diease. .",
			 "descriptionAbbrev":  "Treat heart disease.",
			 "tags": ["Coronary Heart Disease"],
			 "imageUrl": "images/strains/acapulco-gold_100x100.jpg"
			}    	
		];

		var taste = [
			{
				"tasteId": 1,
				"tasteName": "Pulegone",
				"tasteDescription": "Peppermint"
			},
			{
				"tasteId": 2,
				"tasteName": "Delta9-THC",
				"tasteDescription": "None"
			},
			{
				"tasteId": 3,
				"tasteName": "CBD",
				"tasteDescription": "None"
			},
			{
				"tasteId": 4,
				"tasteName": "CBN",
				"tasteDescription": "None"
			},
			{
				"tasteId": 5,
				"tasteName": "CBC",
				"tasteDescription": "None"
			},
			{
				"tasteId": 6,
				"tasteName": "CBG",
				"tasteDescription": "None"
			},
			{
				"tasteId": 7,
				"tasteName": "Delta8-THC",
				"tasteDescription": "None"
			},
			{
				"tasteId": 8,
				"tasteName": "THCA",
				"tasteDescription": "None"
			},	
			{
				"tasteId": 9,
				"tasteName": "THCV",
				"tasteDescription": "None"
			},
			{
				"tasteId": 10,
				"tasteName": "Myrcene",
				"tasteDescription": "Mango"
			},
			{
				"tasteId": 11,
				"tasteName": "Caryophyllene",
				"tasteDescription": "None"
			},
			{
				"tasteId": 12,
				"tasteName": "Limonene",
				"tasteDescription": "Citrus"
			},
			{
				"tasteId": 13,
				"tasteName": "Linalool",
				"tasteDescription": "Floral"
			},
			{
				"tasteId": 14,
				"tasteName": "Eucalyptol",
				"tasteDescription": "Spicy camphor"
			},
			{
				"tasteId": 15,
				"tasteName": "a-pinene",
				"tasteDescription": "Pine"
			},
			{
				"tasteId": 16,
				"tasteName": "a-terpineol",
				"tasteDescription": "Lilac"
			},
			{
				"tasteId": 17,
				"tasteName": "terpineol-4-ol",
				"tasteDescription": "Tea Tree"
			},
			{
				"tasteId": 18,
				"tasteName": "p-cymene",
				"tasteDescription": "Cumin, Thyme"
			},
			{
				"tasteId": 19,
				"tasteName": "apigenin",
				"tasteDescription": "Chamomile, Celery"
			},
			{
				"tasteId": 20,
				"tasteName": "Quercetin",
				"tasteDescription": "Earthy, Forest"
			},
			{
				"tasteId": 21,
				"tasteName": "cannflavin A",
				"tasteDescription": "None"
			},
			{
				"tasteId": 22,
				"tasteName": "Beta-sitosterol",
				"tasteDescription": "None"
			},
			{
				"tasteId": 23,
				"tasteName": "",
				"tasteDescription": "None"
			}
		];

		var products = [
			{"productId": 1,
			 "productName": "Pulegone", //compName
			 "Property": ["Memory booster", "AChE inhibitor", "Sedative", "Antipyretic"],
			 "lowTemp": 0,
			 "highTemp": 435,
			 "lowTempC": 0,
			 "highTempC": 224,
			 "temp": "435",
			 "tempC": "224",
			 "descriptionDetailed": "Pulegone is a naturally occurring organic compound obtained from the essential oils of a variety of plants such as catnip, Mentha piperita, and pennyroyal. It is classified as a monoterpene. Pulegone is a clear colorless oily liquid and has a pleasant odor similar to pennyroyal, peppermint and camphor. It is used in flavoring agents, in perfumery, and in aromatherapy.",
			 "descriptionAbbrev":  "Pulegone has a pleasant odor similar to peppermint.",
			 "tags": ["Terpene","Terpinoid","peppermint", "sedative", "memory"],
			 "imageUrl": "images/strains/acapulco-gold_100x100.jpg"
			},
			{"productId": 2,
			 "productName": "THC9", //compName
			 "Property": ["Euphoriant", "Analgesic", "Neuropathic Analgesic", "Antiinflammatory", "Antioxidant", "Antiemetic", "Neuroprotective", "Reduces Neuroinflammation", "Neurogenesis"],
			 "lowTemp": 0,
			 "highTemp": 315,
			 "lowTempC": 0,
			 "highTempC": 157,
			 "temp": "315",
			 "tempC": "157",
			 "descriptionDetailed": "THC is the principal psychoactive constituent or cannabinoid of the Cannabis plant. THC appears to ease moderate pain (analgesic) and to be neuroprotective, while also offering the potential to reduce neuroinflammation and to stimulate neurogenesis. First isolated in 1964 by Israeli scientists Raphael Mechoulam and Yechiel Gaoni at the Weizmann Institute of Science. It is a water-clear glassy solid when cold, which becomes viscous and sticky if warmed.",
			 "descriptionAbbrev":  "The principal psychoactive constituent or cannabinoid of the Cannabis plant.",
			 "tags": ["Phytocannabinoid", "Euphoriant", "Analgesic", "Antiinflammatory", "Antioxidant", "Antiemetic"],
			 "imageUrl": "images/220px-Tetrahydrocannabinol.svg.png"
			},
			{"productId": 3,
			 "productName": "CBD", //compName
			 "Property": ["Anxiolytic", "Analgesic", "Neuropathic Analgesic", "Antipsychotic", "Antiinflammatory", "Antioxidant", "Antispasmodic", "Antiepileptic", "Antiischemic"],
			 "lowTemp": 320,
			 "highTemp": 356,
			 "lowTempC": 160,
			 "highTempC": 180,
			 "temp": "320-356",
			 "tempC": "160-180",
			 "descriptionDetailed": "CBD is a major phytocannabinoid, accounting for up to 40% of the plant's extract. CBD is considered to have a wider scope of medical applications than THC.",
			 "descriptionAbbrev":  "CBD is considered to have a wider scope of medical applications than THC.",
			 "tags": ["Phytocannabinoid", "Euphoriant", "Analgesic", "Antiinflammatory", "Antioxidant", "Antiemetic"],
			 "imageUrl": "images/230px-Cannabidiol.svg.png"
			},
			{"productId": 4,
			 "productName": "CBN", //compName
			 "Property": ["Oxidation", "Sedative", "Antibiotic", "Immunosuppressant"],
			 "lowTemp": 0,
			 "highTemp": 365,
			 "lowTempC": 0,
			 "highTempC": 185,
			 "temp": "365",
			 "tempC": "185",
			 "descriptionDetailed": "CBN is a weak psychoactive cannabinoid found only in trace amounts in Cannabis sativa and Cannabis indica. It is used experimentally as an immunosuppressant.",
			 "descriptionAbbrev":  "Used experimentally as an immunosuppressant.",
			 "tags": ["Phytocannabinoid", "Oxidation", "Sedative", "Antibiotic", "Immunosuppressant"],
			 "imageUrl": "images/220px-Cannabinol.svg.png"
			},
			{"productId": 5,
			 "productName": "CBC", //compName
			 "Property": ["Antiinflammatory", "Antibiotic", "Antifungal", "Antiviral"],
			 "lowTemp": 0,
			 "highTemp": 428,
			 "lowTempC": 0,
			 "highTempC": 220,
			 "temp": "428",
			 "tempC": "220",
			 "descriptionDetailed": "Evidence has suggested that CBC may play a role in the anti-inflammatory and anti-viral effects of cannabis, and may contribute to the overall analgesic effects of medical cannabis.",
			 "descriptionAbbrev":  "May contribute to the overall analgesic effects of medical cannabis.",
			 "tags": ["Phytocannabinoid", "Antiinflammatory", "Antibiotic", "Antifungal"],
			 "imageUrl": "images/200px-Cannabichromene-skeletal.svg.png"
			},
			{"productId": 6,
			 "productName": "CBG", //compName
			 "Property": ["Stimulates Bone Growth", "Antibacterial", "Anti-tumor", "Sedative", "Neurogenesis", "Relieves Intraocular Pressure", "Treats IBS"],
			 "lowTemp": 0,
			 "highTemp": 126,
			 "lowTempC": 0,
			 "highTempC": 52,
			 "temp": "125",
			 "tempC": "52",
			 "descriptionDetailed": "Cannabigerol is non psychoactive, and has been shown to stimulate the growth of new brain cells, including in the elderly; it should be noted that genuinely neurogenic compounds are extremely rare. CBG also stimulates bone growth, is antibacterial and anti-tumor, and combats insomnia.",
			 "descriptionAbbrev":  "Cannabigerol is non psychoactive, and has been shown to stimulate the growth of new brain cells.",
			 "tags": ["Phytocannabinoid", "Cannabinoid", "Antiemetic", "Antibacterial", "Anti-tumor", "Sedative",   ],
			 "imageUrl": "images/220px-Cannabigerol-skeletal.svg.png"
			},
			{"productId": 7,
			 "productName": "THC8", //compName
			 "Property": ["antiemetic", "anxiolytic", "appetite-stimulating", "analgesic", "neuroprotective"],
			 "lowTemp": 347,
			 "highTemp": 352,
			 "lowTempC": 175,
			 "highTempC": 178,
			 "temp": "347-352F",
			 "tempC": "175-178C",
			 "descriptionDetailed": "Evidence has suggested that CBC may play a role in the anti-inflammatory and anti-viral effects of cannabis, and may contribute to the overall analgesic effects of medical cannabis.",
			 "descriptionAbbrev":  "May contribute to the overall analgesic effects of medical cannabis.",
			 "tags": ["Phytocannabinoid", "Cannabinoid", "Antiemetic"],
			 "imageUrl": "images/200px-Cannabichromene-skeletal.svg.png"
			},
			{"productId": 8,
			 "productName": "THCA", //compName
			 "Property": ["Antiinflammatory", "Encourages appetite", "Anti-tumor", "Sedative", "Antispasmodic", "Anti-prostate cancer", "Antiepileptic"],
			 "lowTemp": 0,
			 "highTemp": 428,
			 "lowTempC": 0,
			 "highTempC": 220,
			 "temp": "428",
			 "tempC": "220",
			 "descriptionDetailed": "THCA is found in variable quantities in fresh, undried cannabis, but is progressively decarboxylated to THC with drying, and especially under intense heating such as when cannabis is smoked. THCA does not have any known psychoactive effects on humans in its own right. It does have antiinflammatory, neuroprotective, anti-vomitting and anti-prostate cancer effects. It is believed to be important in less-psychoactive preparations of cannabis used for medical use, such as cannabis tea.",
			 "descriptionAbbrev":  "THCA is progressively decarboxylated to THC with drying, and especially under intense heating such as when cannabis is smoked.",
			 "tags": ["Phytocannabinoid", "Cannabinoid", "Anti-inflammatory", "Euphoriant", "Anti-tumor", "Sedative", "Antispasmodic", "Anti-prostate cancer"],
			 "imageUrl": "images/220px-Tetrahydrocannabinolicacid.svg.png"
			},
			{"productId": 9,
			 "productName": "THCV", //compName
			 "Property": ["Analgesic", "Euphoriant"],
			 "lowTemp": 0,
			 "highTemp": 428,
			 "lowTempC": 0,
			 "highTempC": 220,
			 "temp": "428",
			 "tempC": "220",
			 "descriptionDetailed": "This terpeno-phenolic compound is found naturally in Cannabis, sometimes in significant amounts. Plants with elevated levels of propyl cannabinoids including THCV have been found in populations of Cannabis from China, India, Nepal, Thailand, Afghanistan, and Pakistan, as well as southern and western Africa.",
			 "descriptionAbbrev":  "Progressively decarboxylated to THC with drying, and especially under intense heating such as when cannabis is smoked.",
			 "tags": ["Phytocannabinoid", "Cannabinoid", "Analgesic", "Encourages appetite"],
			 "imageUrl": "images/220px-Thcv.svg.png"
			},
			{"productId": 10,
			 "productName": "Myrcene", //compName
			 "Property": ["Analgesic", "Antiinflammatory", "Antibiotic", "Antimutagenic"],
			 "lowTemp": 0,
			 "highTemp": 334,
			 "lowTempC": 0,
			 "highTempC": 168,
			 "temp": "334",
			 "tempC": "167",
			 "descriptionDetailed": "Beta-Myrcene is found in fresh mango fruit, hops, bay leaves, eucalyptus, lemongrass and many other plants. Beta-Myrcene is known to be anti-tumor, anti-inflammatory, and used in the treatment of spasms. It is also used to treat insomnia, and pain. High Beta-Myrcene levels in cannabis result in the well known couch lock effect of classic Indica strains of cannabis.",
			 "descriptionAbbrev":  "High Beta-Myrcene levels in cannabis result in the well known couch lock effect of classic Indica strains of cannabis.",
			 "tags": ["Terpene","Terpinoid","Analgesic", "Antiinflammatory", "Antibiotic", "Antimutagenic"],
			 "imageUrl": "images/220px-Myrcene_beta_straight_acsv.svg.png"
			},
			{"productId": 11,
			 "productName": "Caryophyllene", //compName
			 "Property": ["Antiinflammatory", "Cytoprotective", "Antimalarial"],
			 "lowTemp": 0,
			 "highTemp": 246,
			 "lowTempC": 0,
			 "highTempC": 119,
			 "temp": "246",
			 "tempC": "119",
			 "descriptionDetailed": "β-Myrcene is found fresh mango fruit, hops, bay leaves, eucalyptus, lemongrass and many other plants. β-Myrcene is known to be anti-tumor, anti-inflammatory, and used in the treatment of spasms. It is also used to treat insomnia, and pain. High β-Myrcene levels in cannabis result in the well known couch lock effect of classic Indica strains of cannabis.",
			 "descriptionAbbrev":  "High β-Myrcene levels in cannabis result in the well known couch lock effect of classic Indica strains of cannabis.",
			 "tags": ["Terpene","Terpinoid","Antiinflammatory", "Cytoprotective", "Antimalarial"],
			 "imageUrl": "images/200px-Beta-Caryophyllen.svg.png"
			},
			{"productId": 12,
			 "productName": "Limonene", //compName
			 "Property": ["Anti gastric reflux", "Anti-fungal", "Anti-depression", "Anti-anxiety", "Anti-tumor", "Immunostimulant"],
			 "lowTemp": 0,
			 "highTemp": 351,
			 "lowTempC": 0,
			 "highTempC": 177,
			 "temp": "351",
			 "tempC": "177",
			 "descriptionDetailed": "Limonene takes its name from the lemon, as the rind of the lemon, like other citrus fruits, contains considerable amounts of this compound, which contributes to their odor. In natural and alternative medicine, d-limonene is marketed to relieve gastroesophageal reflux disease and heartburn.",
			 "descriptionAbbrev":  "Limonene takes its name from the lemon, as the rind of the lemon, like other citrus fruits, contains considerable amounts of this compound, which contributes to their odor.",
			 "tags": ["Terpene","Terpinoid","Anti gastric reflux", "Anti-fungal", "Anti-depression", "Anti-anxiety", "Anti-tumor", "Immunostimulant"],
			 "imageUrl": "images/70px-Limonene-2D-skeletal.svg.png"
			},
			{"productId": 13,
			 "productName": "Linalool", //compName
			 "Property": ["Sedative", "Antidepressant", "Anxiolytic", "Immune potentiator"],
			 "lowTemp": 0,
			 "highTemp": 388,
			 "lowTempC": 0,
			 "highTempC": 198,
			 "temp": "388",
			 "tempC": "198",
			 "descriptionDetailed": "Linalool is a naturally occurring terpene alcohol chemical found in many flowers and spice plants with many commercial applications, the majority of which based on its pleasant scent which is floral, with a touch of spiciness.",
			 "descriptionAbbrev":  "A naturally occurring terpene alcohol chemical found in many flowers and spice plants.",
			 "tags": ["Terpene","Terpinoid","Sedative", "Antidepressant", "Anxiolytic", "Immune potentiator"],
			 "imageUrl": "images/240px-Linalool-skeletal.png"
			},
			{"productId": 14,
			 "productName": "Eucalyptol", //compName
			 "Property": ["AChE inhibitor", "Increases cerebral blood flow", "Stimulant", "Antibiotic", "Antiviral", "Antiinflammatory", "Antinociceptive"],
			 "lowTemp": 0,
			 "highTemp": 349,
			 "lowTempC": 0,
			 "highTempC": 176,
			 "temp": "349",
			 "tempC": "176",
			 "descriptionDetailed": "Eucalyptol has a fresh camphor-like smell and a spicy, cooling taste. It is an ingredient in many brands of mouthwash and cough suppressant. Eucalyptol is also used as an insecticide and insect repellent.",
			 "descriptionAbbrev":  "Eucalyptol has a fresh camphor-like smell and a spicy, cooling taste.",
			 "tags": ["Terpene","Terpinoid","AChE inhibitor", "Increases cerebral blood flow", "Stimulant", "Antibiotic", "Antiviral", "Antiinflammatory", "Antinociceptive"],
			 "imageUrl": "images/200px-Eucalyptol.png"
			},
			{"productId": 15,
			 "productName": "Pinene", //compName
			 "Property": ["Antiinflammatory", "Bronchodilator", "Stimulant", "Antibiotic", "Antineoplastic", "AChE inhibitor"],
			 "lowTemp": 0,
			 "highTemp": 313,
			 "lowTempC": 0,
			 "highTempC": 156,
			 "temp": "312",
			 "tempC": "156",
			 "descriptionDetailed": "At low exposure levels, alpha-Pinene is a bronchodilator in humans. It is found in the oils of many species of coniferous trees, notably the pine. It is also found in the essential oil of rosemary.",
			 "descriptionAbbrev":  "At low exposure levels, alpha-Pinene is a bronchodilator in humans.",
			 "tags": ["Terpene","Terpinoid","Antiinflammatory", "Bronchodilator", "Stimulant", "Antibiotic", "Antineoplastic", "AChE inhibitor"],
			 "imageUrl": "images/220px-Alpha-Pinene_Isomers.svg.png"
			},
			{"productId": 16,
			 "productName": "Terpineol", //compName
			 "Property": ["Sedative", "Antibiotic", "AChE inhibitor", "Antioxidant", "Antimalarial"],
			 "lowTemp": 0,
			 "highTemp": 423,
			 "lowTempC": 0,
			 "highTempC": 217,
			 "temp": "423",
			 "tempC": "217",
			 "descriptionDetailed": "Terpineol has a pleasant odor similar to lilac and is a common ingredient in perfumes, cosmetics, and flavors. Alpha-Terpineol is one of the two most abundant aroma constituents of lapsang souchong tea, the A-terpineol originates in the pine smoke used to dry the tea.",
			 "descriptionAbbrev":  "Terpineol has a pleasant odor similar to lilac.",
			 "tags": ["Terpene","Terpinoid","Sedative", "Antibiotic", "AChE inhibitor", "Antioxidant", "Antimalarial"],
			 "imageUrl": "images/100px-Terpineol_alpha.svg.png"
			},
			{"productId": 17,
			 "productName": "Terpineol-4", //compName
			 "Property": ["AChE inhibitor", "Antibiotic"],
			 "lowTemp": 0,
			 "highTemp": 408,
			 "lowTempC": 0,
			 "highTempC": 209,
			 "temp": "408",
			 "tempC": "209",
			 "descriptionDetailed": "Terpineol-4-ol considered the primary active ingredient of tea tree oil.",
			 "descriptionAbbrev":  "Terpineol-4-ol considered the primary active ingredient of tea tree oil.",
			 "tags": ["Terpene", "Terpinoid","AChE inhibitor", "Antibiotic"],
			 "imageUrl": "images/100px-Terpinen-4-ol.svg.png"
			},
			{"productId": 18,
			 "productName": "Cymene", //compName
			 "Property": ["Antibiotic", "Anticandidal", "AChE inhibitor"],
			 "lowTemp": 0,
			 "highTemp": 351,
			 "lowTempC": 0,
			 "highTempC": 177,
			 "temp": "351",
			 "tempC": "177",
			 "descriptionDetailed": "It is a constituent of a number of essential oils, most commonly the oil of cumin and thyme. Significant amounts are formed in sulfite pulping process from the wood terpenes.",
			 "descriptionAbbrev":  "It is a constituent of a number of essential oils, most commonly the oil of cumin and thyme.",
			 "tags": ["Terpene", "Terpinoid", "AChE inhibitor", "Anticandidal"],
			 "imageUrl": "images/100px-P-Cymol.svg.png"
			}, 
			{"productId": 19,
			 "productName": "Apigenin", //compName
			 "Property": ["Anxiolytic", "Antiinflammatory", "Estrogenic"],
			 "lowTemp": 0,
			 "highTemp": 352,
			 "lowTempC": 0,
			 "highTempC": 178,
			 "temp": "352",
			 "tempC": "178",
			 "descriptionDetailed": "Apigenin is found in many fruits and vegetables, but parsley, celery, celeriac, and chamomile tea are the most common sources. Apigenin induces autophagy (a kind of cellular waste-recycling system) in leukemia cells, which may support a possible chemopreventive role.",
			 "descriptionAbbrev":  "Apigenin is found in many fruits and vegetables, but parsley, celery, celeriac, and chamomile tea are the most common sources.",
			 "tags": ["Flavonoid","Anxiolytic", "Antiinflammatory", "Estrogenic"],
			 "imageUrl": "images/200px-Apigenin.svg.png"
			},
			{"productId": 20,
			 "productName": "Quercetin", //compName
			 "Property": ["Antioxidant", "Antimutagenic", "Antiviral", "Antineoplastic"],
			 "lowTemp": 0,
			 "highTemp": 482,
			 "lowTempC": 0,
			 "highTempC": 250,
			 "temp": "482",
			 "tempC": "250",
			 "descriptionDetailed": "Quercetin is a flavonoid widely distributed in nature. The name has been used since 1857, and is derived from quercetum meaning oak forest. It is a flavonol found in many fruits, vegetables, leaves and grains and can be used as an ingredient in supplements, beverages, or foods. Quercetin may also induce insulin secretion by activation of L-type calcium channels in the pancreatic β-cells.",
			 "descriptionAbbrev":  "Quercetin is a flavonoid widely distributed in nature.",
			 "tags": ["Flavonoid","Antioxidant", "Antimutagenic", "Antiviral", "Antineoplastic"],
			 "imageUrl": "images/250px-Quercetin.svg.png"
			},
			{"productId": 21,
			 "productName": "Cannflavin A", //compName
			 "Property": ["COX inhibitor", "LO inhibitor"],
			 "lowTemp": 0,
			 "highTemp": 360,
			 "lowTempC": 0,
			 "highTempC": 182,
			 "temp": "360",
			 "tempC": "182",
			 "descriptionDetailed": "A non-cannabinoid constituent isolated from a high potency Cannabis sativa displaying antimicrobial, antileishmanial, antimalarial and anti-oxidant activities.",
			 "descriptionAbbrev":  "A non-cannabinoid constituent isolated from a high potency Cannabis sativa.",
			 "tags": ["Flavonoid","COX inhibitor", "LO inhibitor", "Antimicrobial", "Antileishmanial", "Antimalarial", "Anti-oxidant" ],
			 "imageUrl": "images/no-image-yet.png"
			},
			{"productId": 22,
			 "productName": "Beta-sitosterol", //compName
			 "Property": ["Antiinflammatory", "5-a-reductase inhibitor"],
			 "lowTemp": 0,
			 "highTemp": 273,
			 "lowTempC": 0,
			 "highTempC": 134,
			 "temp": "273",
			 "tempC": "134",
			 "descriptionDetailed": "β-sitosterol is being studied for its potential to reduce benign prostatic hyperplasia and blood cholesterol levels. β-Sitosterol supplements or enriched foods should be avoided during pregnancy and breast-feeding, since not enough is known about its effects on unborn and newborn children. High levels of β-sitosterol concentrations in blood have been correlated with increased severity of heart disease in men having previously suffered from heart attacks. It is found in pecans, avocados, pumpkin seeds, cashew fruit, rice bran, wheat germ, corn oils, soybeans and dandelion coffee.",
			 "descriptionAbbrev":  "β-sitosterol is being studied for its potential to reduce benign prostatic hyperplasia and blood cholesterol levels.",
			 "tags": ["Flavonoid","Antiinflammatory", "5-a-reductase inhibitor"],
			 "imageUrl": "images/200px-Sitosterol_structure.svg.png"
			}			
		];

		var effects = [
			{"effectId": 1,
			 "effectName": "Neuroprotective", //compName
			 "conditionsTreated": ["ADHD"],
 			 "descriptionDetailed": "Medical Cannabis has been shown to actually protect against nerve damage",
			 "descriptionAbbrev":  "Protect against nervous system degeneration",
			 "tags": ["Neuroprotective", "nerves"],
			 "imageUrl": "images/strains/acapulco-gold_100x100.jpg"
			},
			{"effectId": 2,
			 "effectName": "Antispasmodic", //compName
			 "conditionsTreated": ["Epilepsy", "Spasms"],
 			 "descriptionDetailed": "Medical cannabis strains high in CBD have been shown to relieve spasms and convulsions associated with Epilepsy and other nerve related conditions.",
			 "descriptionAbbrev":  "Suppress muscle spasms",
			 "tags": ["Antispasmodic", "spasms", "convulsions"],
			 "imageUrl": "images/strains/acapulco-gold_100x100.jpg"
			},
			{"effectId": 3,
			 "effectName": "Antiemetic", //compName
			 "conditionsTreated": ["Cancer", "Nausea"],
 			 "descriptionDetailed": "Reduces vomiting and nausea",
			 "descriptionAbbrev":  "Reduce vomiting and nausea",
			 "tags": ["Antiemetic", "vomiting", "nausea"],
			 "imageUrl": "images/strains/acapulco-gold_100x100.jpg"
			},
			{"effectId": 4,
			 "effectName": "Analgesic", //compName
			 "conditionsTreated": ["Pain", "Chronic Pain", "Fibromyalgia"],
 			 "descriptionDetailed": "An analgesic, or painkiller, is any member of the group of drugs used to achieve analgesia — relief from pain.",
			 "descriptionAbbrev":  "Relieve pain",
			 "tags": ["Analgesic", "pain", "painkiller" ],
			 "imageUrl": "images/strains/acapulco-gold_100x100.jpg"
			},
			{"effectId": 5,
			 "effectName": "Antioxidant", //compName
			 "conditionsTreated": ["Stroke", "Coronary Heart Disease", "ALS", "Parkinsons", "Alzheimers", "Huntingtons", "Cancer"],
 			 "descriptionDetailed": "Antioxidants are widely used in dietary supplements and have been investigated for the prevention of diseases such as cancer, coronary heart disease and even altitude sickness among others.",
			 "descriptionAbbrev":  "Fight free radicals",
			 "tags": ["Antioxidant"],
			 "imageUrl": "images/strains/acapulco-gold_100x100.jpg"
			},
			{"effectId": 6,
			 "effectName": "Neuropathic Analgesic", //compName
			 "conditionsTreated": ["Chronic Back Pain", "Spinal Injuries"],
 			 "descriptionDetailed": "Reduces pain associated with nerve damage including spinal injuries",
			 "descriptionAbbrev":  "Reduce nerve pain", 
			 "tags": ["nerve damage", "Neuropathic analgesic", "Neuropathic", "Analgesic"],
			 "imageUrl": "images/strains/acapulco-gold_100x100.jpg"
			},
			{"effectId": 7,
			 "effectName": "Treats IBS", //compName
			 "conditionsTreated": ["IBS"],
 			 "descriptionDetailed": "Irritable bowel syndrome commonly causes cramping, abdominal pain, bloating, gas, diarrhea and constipation. IBS is a chronic condition that you will need to manage long term.",
			 "descriptionAbbrev":  "Treat IBS",
			 "tags": ["Antineoplastic", "Glaucoma"],
			 "imageUrl": "images/strains/acapulco-gold_100x100.jpg"
			},
			{"effectId": 8,
			 "effectName": "Antiinflammatory", //compName
			 "conditionsTreated": ["Inflammation", "Chronic Inflammation Syndrome", "Coronary Heart Disease", "Type II Diabetes", "Fibromyalgia"],
 			 "descriptionDetailed": "Reducing inflammation can result in prevention of various conditions including heart disease and type II diabetes and stroke",
			 "descriptionAbbrev":  "Reduce inflammation",
			 "tags": [""],
			 "imageUrl": "images/strains/acapulco-gold_100x100.jpg"
			},
			{"effectId": 9,
			 "effectName": "Neurogenesis", //compName
			 "conditionsTreated": ["Chronic Depression", "ADHD"],
 			 "descriptionDetailed": "Neurogenesis is the process by which neurons are generated from neural stem cells and progenitor cells. Recent studies suggest that stress-induced atrophy and loss of hippocampal neurons may contribute to the pathophysiology of depression.",
			 "descriptionAbbrev":  "Grow new nerve tissue",
			 "tags": ["Neurogenesis", "nerve tissue growth", "Chronic Depression", "ADHD"],
			 "imageUrl": "images/strains/acapulco-gold_100x100.jpg"
			},
			{"effectId": 10,
			 "effectName": "Anxiolytic", //compName
			 "conditionsTreated": ["Anxiety", "Bipolar", "Social Anxiety", "Separation Anxiety", "Stress"],
 			 "descriptionDetailed": "Anxiolytic medications have been used for the treatment of anxiety and its related psychological and physical symptoms. Anxiolytics have been shown to be useful in the treatment of anxiety disorders.",
			 "descriptionAbbrev":  "Reduce anxiety",
			 "tags": ["Anxiolytic", "Anxiety", "Tranquilizer", "Bipolar", "Social Anxiety", "Separation Anxiety"],
			 "imageUrl": "images/strains/acapulco-gold_100x100.jpg"
			},
			{"effectId": 11,
			 "effectName": "Antiepileptic", //compName
			 "conditionsTreated": ["Epilepsy", "Seizures", "Convulsions"],
 			 "descriptionDetailed": "Anti-epileptic drugs or AEDs are the main form of treatment for people with epilepsy. Certain compnonents in medical cannabis are being used as an effectve treatment for some forms of Epilepsy based on the relative strengths of components such as CBD and THC-A.",
			 "descriptionAbbrev":  "Reduce seizures and convulsion",
			 "tags": ["Antiepileptic", "Seizures", "Convulsions"],
			 "imageUrl": "images/strains/acapulco-gold_100x100.jpg"
			},
			{"effectId": 12,
			 "effectName": "Vasorelaxant", //compName
			 "conditionsTreated": ["High Blood Pressure", "Hypertension", "Coronary Heart Disease"],
 			 "descriptionDetailed": "Reduces tension in blood vessel walls resultig in lower blood pressure and enhanced bloodflow in arteries, capillaries and blood vessels.",
			 "descriptionAbbrev":  "Lower Blood Pressure",
			 "tags": ["Vasorelaxant", "blood vessel", "High Blood Pressure", "Hypertension"],
			 "imageUrl": "images/strains/acapulco-gold_100x100.jpg"
			},
			{"effectId": 13,
			 "effectName": "Antiischemic", //compName
			 "conditionsTreated": ["Artery Blockage"],
 			 "descriptionDetailed": "Reduces risk of artery blockage which could help prevent the conditions leading to coronary artery disease.",
			 "descriptionAbbrev":  "Reduce risk of artery blockage",
			 "tags": ["Anti ischemic", "artery blockage", "coronary", "heart", "Coronary artery disease"],
			 "imageUrl": "images/strains/acapulco-gold_100x100.jpg"
			},
			{"effectId": 14,
			 "effectName": "Antibacterial", //compName
			 "conditionsTreated": ["Infection"],
 			 "descriptionDetailed": "Kills surface bacteria. Destroys bacteria or suppresses their growth or their ability to reproduce.",
			 "descriptionAbbrev":  "Kill or slow bacteria growth",
			 "tags": ["Antibacterial", "Bacteria", "Antibacterial"],
			 "imageUrl": "images/strains/acapulco-gold_100x100.jpg"
			},
			{"effectId": 15,
			 "effectName": "Antidiabetic", //compName
			 "conditionsTreated": ["Diabetes", "Type II Diabetes", "Pre-Diabetes"],
 			 "descriptionDetailed": "Helps reduce blood sugar levels.",
			 "descriptionAbbrev":  "Lower blood sugar",
			 "tags": ["Antidiabetic", "blood sugar", "diabetes"],
			 "imageUrl": "images/strains/acapulco-gold_100x100.jpg"
			},
			{"effectId": 16,
			 "effectName": "Antipsoriatic", //compName
			 "conditionsTreated": ["Psoriasis"],
 			 "descriptionDetailed": "Helps relieve the symptoms of psoriasis.",
			 "descriptionAbbrev":  "Treat psoriasis",
			 "tags": ["Antipsoriatic", "psoriasis"],
			 "imageUrl": "images/strains/acapulco-gold_100x100.jpg"
			},
			{"effectId": 17,
			 "effectName": "Antipsychotic", //compName
			 "conditionsTreated": ["Psychosis"],
 			 "descriptionDetailed": "Helps reduce psychosis including delusions or hallucinations",
			 "descriptionAbbrev":  "Tranquilizing effect",
			 "tags": ["Antipsychotic", "psychosis", "delusions", "hallucinations"],
			 "imageUrl": "images/strains/acapulco-gold_100x100.jpg"
			},
			{"effectId": 18,
			 "effectName": "Stimulates Bone Growth", //compName
			 "conditionsTreated": ["Ostiopererosis"],
 			 "descriptionDetailed": "promotes bone growth",
			 "descriptionAbbrev":  "Promote bone growth",
			 "tags": ["Bone-stimulant", "Bones", "Ostiopererosis"],
			 "imageUrl": "images/strains/acapulco-gold_100x100.jpg"
			},
			{"effectId": 19,
			 "effectName": "Intestinal anti-prokinetic", //compName
			 "conditionsTreated": ["GI Motility Disorders"],
 			 "descriptionDetailed": "reduces contractions in the small intestine",
			 "descriptionAbbrev":  "Reduce contractions in the small intestine",
			 "tags": ["Intestinal anti-prokinetic", "contractions", "Intestinal"],
			 "imageUrl": "images/strains/acapulco-gold_100x100.jpg"
			},
			{"effectId": 20,
			 "effectName": "Immunosuppressant", //compName
			 "conditionsTreated": ["Psoriasis", "Rheumatoid Arthritis", "Crohns Disease", "Cancer"],
 			 "descriptionDetailed": "Immunosuppressants are used to prevent rejection of a transplanted organ and to treat autoimmune diseases such as psoriasis, rheumatoid arthritis, and Crohn's disease. Some treatments for cancer act as immunosuppressants.",
			 "descriptionAbbrev":  "Prevent the immune response",
			 "tags": ["Immunosuppressant", "immune system"],
			 "imageUrl": "images/strains/acapulco-gold_100x100.jpg"
			}, 
			{"effectId": 21,
			 "effectName": "Antiproliferative", //compName
			 "conditionsTreated": ["Cancer"],
 			 "descriptionDetailed": "Inhibits cancer cell growth",
			 "descriptionAbbrev":  "Slow cancer cell growth",
			 "tags": ["Antiproliferative", "cell growth", "cancer"],
			 "imageUrl": "images/strains/acapulco-gold_100x100.jpg"
			},
			{"effectId": 22,
			 "effectName": "Vasoconstriction", //compName
			 "conditionsTreated": ["Low Blood Pressure", "Hypotension"],
 			 "descriptionDetailed": "Vasoconstriction is the narrowing of the blood vessels resulting from contraction of the muscular wall of the vessels, in particular the large arteries and small arterioles. The process is particularly important in staunching hemorrhage and acute blood loss.",
			 "descriptionAbbrev":  "Raise blood pressure",
			 "tags": ["Vasoconstriction", "blood vessels"],
			 "imageUrl": "images/strains/acapulco-gold_100x100.jpg"
			},
			{"effectId": 23,
			 "effectName": "Memory booster", //compName
			 "conditionsTreated": ["Memory", "Alzheimers"],
 			 "descriptionDetailed": "helps memory conditions",
			 "descriptionAbbrev":  "Help boost memory",
			 "tags": ["Memory booster", "memory", "Memory booster", "Alzheimers"],
			 "imageUrl": "images/strains/acapulco-gold_100x100.jpg"
			}, 
			{"effectId": 24,
			 "effectName": "AChE inhibitor", //compName
			 "conditionsTreated": ["Glaucoma", "Postural Tachycardia Syndrome", "Anticholinergic Poisoning", "Alzheimers", "Apathy", "Dementia", "Parkinsons disease", "Schizophrenia", "Autism"],
 			 "descriptionDetailed": "Typically used to increase neuromuscular transmission",
			 "descriptionAbbrev":  "Treat Glaucoma and Alzheimers",
			 "tags": ["AChE inhibitor", "AChE", "glaucoma", "tachycardia", "anticholinergic poisoning", "Alzheimers", "Apathy", "Dementia", "Parkinsons", "schizophrenia", "autism"],
			 "imageUrl": "images/strains/acapulco-gold_100x100.jpg"
			}, 
			{"effectId": 25,
			 "effectName": "Sedative", //compName
			 "conditionsTreated": ["Insomnia", "Hyperactivity", "Irritability"],
 			 "descriptionDetailed": "Helps you sleep as it induces sedation by reducing irritability or excitement.",
			 "descriptionAbbrev":  "Sleep aid",
			 "tags": ["Sedative", "Insomnia"],
			 "imageUrl": "images/strains/acapulco-gold_100x100.jpg"
			}, 
			{"effectId": 26,
			 "effectName": "Antipyretic", //compName
			 "conditionsTreated": ["Fever"],
 			 "descriptionDetailed": "Some components in medical cannabis can be effectve in reducing or preventing fever. The most common antipyretics in the United States are ibuprofen and aspirin, which are used primarily as pain relievers.",
			 "descriptionAbbrev":  "Reduce or prevent fever",
			 "tags": ["Antipyretic", "fever"],
			 "imageUrl": "images/strains/acapulco-gold_100x100.jpg"
			}, 
			{"effectId": 27,
			 "effectName": "Euphoriant", //compName
			 "conditionsTreated": ["Depression", "Chronic Depression", "Stress"],
 			 "descriptionDetailed": "Many strains of medical cannabis produce a sense of well-being commonly called Euphoria. This produces the happy, peaceful effect associated with cannabis.  ",
			 "descriptionAbbrev":  "Treat depression",
			 "tags": ["Euphoriant", "Depression", "Anti-Depression"],
			 "imageUrl": "images/strains/acapulco-gold_100x100.jpg"
			}, 
			{"effectId": 28,
			 "effectName": "Antimalarial", //compName
			 "conditionsTreated": ["Malaria"],
 			 "descriptionDetailed": "Medical canabis has been used to prevent and treat malaria",
			 "descriptionAbbrev":  "Treat Malaria",
			 "tags": ["Antimalarial", "Malaria"],
			 "imageUrl": "images/strains/acapulco-gold_100x100.jpg"
			}, 
			{"effectId": 29,
			 "effectName": "Antifungal", //compName
			 "conditionsTreated": ["Athletes Foot", "Ringworm", "Thrush", "Cryptococcal Meningitis"],
 			 "descriptionDetailed": "Medical cannabis has been used to treat and prevent fungal mycoses.",
			 "descriptionAbbrev":  "Prevent fungal growth",
			 "tags": ["Antifungal", "athletes foot", "ringworm", "thrush", "meningitis"],
			 "imageUrl": "images/strains/acapulco-gold_100x100.jpg"
			}, 
			{"effectId": 30,
			 "effectName": "Anti-tumor", //compName
			 "conditionsTreated": ["Cancer"],
 			 "descriptionDetailed": "High CBD strains of medical cannabis have been successfully used to stop abnormal tumor cell growth associated with some skin, brain and prostate cancers.",
			 "descriptionAbbrev":  "Stop or slow tumor growth",
			 "tags": ["Anti-tumor", "cancer", "chemo"],
			 "imageUrl": "images/strains/acapulco-gold_100x100.jpg"
			}, 
			{"effectId": 31,
			 "effectName": "Stimulates brain cell growth", //compName
			 "conditionsTreated": ["Alzheimers"],
 			 "descriptionDetailed": "helps stimulate brain cell growth and memory functions",
			 "descriptionAbbrev":  "Stimulate brain cell growth and memory function",
			 "tags": ["Alzheimers", "cancer", "chemo"],
			 "imageUrl": "images/strains/acapulco-gold_100x100.jpg"
			}, 
			{"effectId": 32,
			 "effectName": "Anti-prostate cancer", //compName
			 "conditionsTreated": ["Prostate Cancer"],
 			 "descriptionDetailed": "Helps treat and prevent prostate cancer",
			 "descriptionAbbrev":  "Treat prostate cancer",
			 "tags": ["Anti-tumor", "Prostate cancer", "Prostate"],
			 "imageUrl": "images/strains/acapulco-gold_100x100.jpg"
			}, 
			{"effectId": 33,
			 "effectName": "Antinociceptive", //compName
			 "conditionsTreated": ["Pain", "Chronic Pain"],
 			 "descriptionDetailed": "helps prevent the sensation of pain",
			 "descriptionAbbrev":  "Increase pain tolerance",
			 "tags": ["Chronic Pain", "Pain"],
			 "imageUrl": "images/strains/acapulco-gold_100x100.jpg"
			}, 
			{"effectId": 34,
			 "effectName": "Antibiotic", //compName
			 "conditionsTreated": ["Infection"],
 			 "descriptionDetailed": "destroys or slow down the growth of bacteria",
			 "descriptionAbbrev":  "Destroy bacteria",
			 "tags": ["Antibiotic", "Infection"],
			 "imageUrl": "images/strains/acapulco-gold_100x100.jpg"
			}, 
			{"effectId": 35,
			 "effectName": "Antimutagenic", //compName
			 "conditionsTreated": ["Cancer"],
 			 "descriptionDetailed": "Reduces or inhibits the rate of cell mutation",
			 "descriptionAbbrev":  "Reduce cell mutation",
			 "tags": ["Antimutagenic", "cancer"],
			 "imageUrl": "images/strains/acapulco-gold_100x100.jpg"
			}, 
			{"effectId": 36,
			 "effectName": "Bronchodilator", //compName
			 "conditionsTreated": ["Asthma", "COPD"],
 			 "descriptionDetailed": "decreases resistance in the respiratory airway and increases airflow to the lungs",
			 "descriptionAbbrev":  "Decrease resistance in the respiratory airway",
			 "tags": ["Bronchodilator", "Asthma", "COPD"],
			 "imageUrl": "images/strains/acapulco-gold_100x100.jpg"
			}, 
			{"effectId": 37,
			 "effectName": "Antineoplastic", //compName
			 "conditionsTreated": ["Cancer"],
 			 "descriptionDetailed": "prevents, inhibits or halts the development of tumors",
			 "descriptionAbbrev":  "Slow down or inhibit tumors",
			 "tags": ["Antineoplastic", "cancer", "tumors"],
			 "imageUrl": "images/strains/acapulco-gold_100x100.jpg"
			}, 
			{"effectId": 38,
			 "effectName": "Relieves Intraocular Pressure", //compName
			 "conditionsTreated": ["Glaucoma"],
 			 "descriptionDetailed": "Left untreated, high eye pressure can cause glaucoma and permanent vision loss in some individuals.",
			 "descriptionAbbrev":  "Treat Glaucoma by reducing eye pressure",
			 "tags": ["Antineoplastic", "Glaucoma"],
			 "imageUrl": "images/strains/acapulco-gold_100x100.jpg"
			}, 
			{"effectId": 39,
			 "effectName": "Antileishmanial", //compName
			 "conditionsTreated": ["leishmaniasis", "tropical leishmaniasis"],
 			 "descriptionDetailed": "Every year, more than 2 million people worldwide suffer from leishmaniasis, a neglected tropical disease present in 88 countries. The disease is caused by the single-celled protozoan parasite species of the genus Leishmania, which is transmitted to humans by the bite of the sandfly.",
			 "descriptionAbbrev":  "Treat sand flea infection",
			 "tags": ["Antileishmanial", "Sand flea Bites", "Tropical disease"],
			 "imageUrl": "images/strains/acapulco-gold_100x100.jpg"
			},
			{"effectId": 40,
			 "effectName": "AntiViral", //compName
			 "conditionsTreated": ["HCV"],
 			 "descriptionDetailed": "Results suggest that modest cannabis use may offer symptomatic and virological benefit to some patients undergoing HCV treatment by helping them maintain adherence to the challenging medication regimen.",
			 "descriptionAbbrev":  "Destroy viruses associated with HCV",
			 "tags": ["HCV", "Antiviral"],
			 "imageUrl": "images/strains/acapulco-gold_100x100.jpg"
			},
			{"effectId": 41,
			 "effectName": "Cytoprotective", //compName
			 "conditionsTreated": ["Ulcers"],
 			 "descriptionDetailed": "Fights ulcers by increasing mucosal protection.",
			 "descriptionAbbrev":  "Treat ulcers by increasing mucosal protection",
			 "tags": ["HCV", "Antiviral"],
			 "imageUrl": "images/strains/acapulco-gold_100x100.jpg"
			}, 
			{"effectId": 42,
			 "effectName": "LO inhibitor", //compName
			 "conditionsTreated": ["Asthma"],
 			 "descriptionDetailed": "Inhibits lipoxygenase enzyme, can help asthma.",
			 "descriptionAbbrev":  "Treat asthma conditions",
			 "tags": ["HCV", "Antiviral"],
			 "imageUrl": "images/strains/acapulco-gold_100x100.jpg"
			}, 
			{"effectId": 43,
			 "effectName": "5-a-reductase inhibitor", //compName
			 "conditionsTreated": ["Prostate"],
 			 "descriptionDetailed": "Surpresses dihydrotestosterone, treats benign prostatic hyperplasia - prostate.",
			 "descriptionAbbrev":  "Treat benign prostate conditions",
			 "tags": ["Prostate"],
			 "imageUrl": "images/strains/acapulco-gold_100x100.jpg"
			}
		];


		var conditionsUrl = "/api/conditions";
		var productUrl = "/api/products";
		var effectUrl = "/api/effects";
		var temperatureUrl = "/api/temperatures";
		var modeUrl = "/api/modes";
		var strainUrl = "/api/strains";
		var strainNameUrl = "/api/strainNames";
		var tasteUrl = "/api/tastes";
		var recEffectUrl = "/api/recEffects";

		//for strain details
		var detailsUrl = "/api/details";
		var detailModeUrl = "/api/detailModes";
		var vapeTempUrl = "/api/vapeTemps";
		var vTipUrl = "/api/vTips";

		$httpBackend.whenGET(productUrl).respond(products);
		$httpBackend.whenGET(temperatureUrl).respond(temperatures);
		$httpBackend.whenGET(modeUrl).respond(modes);
		$httpBackend.whenGET(effectUrl).respond(effects);
		$httpBackend.whenGET(conditionsUrl).respond(conditions);
		$httpBackend.whenGET(strainUrl).respond(strains);
		$httpBackend.whenGET(strainNameUrl).respond(strainNames);
		$httpBackend.whenGET(tasteUrl).respond(tastes);
		$httpBackend.whenGET(recEffectUrl).respond(recEffects);

		//for strain details
		$httpBackend.whenGET(detailsUrl).respond(strains);
		$httpBackend.whenGET(detailModeUrl).respond(detailModes);
		$httpBackend.whenGET(vapeTempUrl).respond(vapeTemps);
		$httpBackend.whenGET(vTipUrl).respond(vTips);

		var editingRegex = new RegExp(strainUrl + "/[0-9][0-9]*", '');

		$httpBackend.whenGET(editingRegex).respond(function (method, url, data){
			var strain = {"strainId": 0};
			var parameters = url.split('/');
			var length = parameters.length;
			var id = parameters[length - 1];

			if (id > 0){
				for (var i = 0; i < strains.length; i++){
					if(strains[i].strainId == id) {
						strain = strains[i];
						break;
					}
				};
			}
			return [200, strain, {}];
		}); 
		
		/*
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
*/
		//Pass through any requests for application files
		$httpBackend.whenGET(/app/).passThrough();




	})
}());