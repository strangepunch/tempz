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
			 "VTempsF": ["356", "383"],
			 "VTempsC": ["180", "195"],
			 "VColors": ["L", "M"],
			 "descriptionDetailed1": "The Crafty vaporizer packs the power of Storz & Bickels' German engineered heating technology into an uber portable vaping unit that can be controlled from your smartphone. Now you can enjoy the efficient herbal vaporizing experience the Volcano and Plenty are known for, on the go.", 
			 "VImageUrl": "images/vapes/crafty1.png"
			},
			{"VId": 2,
			 "VName": "Mighty", 
			 "VManufacturer" : "Storz & Bickels",
			 "VType": "Portable",
			 "VTempType": "N",
			 "VTempsF": ["104", "410"],
			 "VTempsC": ["40", "210"],
			 "VColors": ["L", "H"],
			 "descriptionAbbrev": "The Mighty Vaporizer is the first of the portable vaporizers from German vaping masterminds Storz & Bickel, the same creators of the Volcano and Plenty vaporizers. Their German engineered heaters are the most efficient in the game, and that power is now available in the palm of your hand.",
			 "VImageUrl": "images/vapes/mighty1.png"
			},
			{"VId": 3,
			 "VName": "Arizer Solo", 
			 "VManufacturer" : "Arizer",
			 "VType": "Portable",
			 "VTempType": "Y",
			 "VTempsF": ["122", "365", "374", "383", "393", "401", "410"],
			 "VTempsC": ["50", "185", "190", "195", "200", "205", "210"],
			 "VColors": ["L", "M", "M", "M", "H", "H", "H"],
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
			 "VColors": ["L", "M", "H", "H", "H"],
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
			 "VColors": ["M", "H", "H", "H", "H"],
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
			 "VColors": ["L", "M", "H"],
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
			 "VColors": ["L", "M", "H"],
			 "descriptionAbbrev":  "Featuring the same superior craftsmanship found in the Silver Surfer, every Da Buddha vaporizer is designed and assembled in the USA.",
			 "VImageUrl": "images/vapes/dabuddah2.png"
			},
			{"VId": 8,
			 "VName": "LSV", 
			 "VManufacturer" : "7th Floor",
			 "VType": "Desktop",
			 "VTempType": "N",
			 "VTempsF": ["0", "370", "900"],
			 "VTempsC": ["0", "187", "482"],
			 "VColors": ["L", "M", "H"],
			 "descriptionAbbrev": "This vape has been designed to within an inch of its life, and it shows. This is a thing of beauty which you will enjoy using and probably enjoy showing off to your friends even more.",
			 "VImageUrl": "images/vapes/dabuddah1.png"
			},
			{"VId": 9,
			 "VName": "Magic Flight Launch Box", 
			 "VManufacturer" : "Magic Flight",
			 "VType": "Portable",
			 "VTempType": "N",
			 "VTempsF": ["0", "370", "400"],
			 "VTempsC": ["0", "187", "204"],
			 "VColors": ["L", "M", "H"],
			 "descriptionAbbrev": "Beautifully crafted and intuitively designed, the Magic-Flight Launch Box, is powered by a rechargeable AA NiMH battery and holds the title of the world's smallest electronic vaporizer, making it the perfect option for low-profile vaporizing on-the-go.",
			 "VImageUrl": "images/vapes/mflb1.png"
			},
			{"VId": 10,
			 "VName": "Extreme Q", 
			 "VManufacturer" : "Arizer",
			 "VType": "Desktop",
			 "VTempType": "N",
			 "VTempsF": ["122", "370", "500"],
			 "VTempsC": ["50", "187", "260"],
			 "VColors": ["L", "M", "H"],
			 "descriptionAbbrev":  "This is the Extreme-Q Vaporizer by Arizer. It is a dual purpose vaporizer or a combo vape because it can be used with a whip and it can also be used with a balloon.",
			 "VImageUrl": "images/vapes/extremeq1.png"
			},
			{"VId": 11,
			 "VName": "V Tower", 
			 "VManufacturer" : "Arizer",
			 "VType": "Desktop",
			 "VTempType": "N",
			 "VTempsF": ["122", "370", "500"],
			 "VTempsC": ["50", "187", "260"],
			 "VColors": ["L", "M", "H"],
			 "descriptionAbbrev":  "The V-Tower, by Canadian manufacturer Arizer, is a direct draw, simple to use, tabletop vaporizer. For efficient and user-friendly functionality, few vaporizers can compete with its high quality vapor production.",
			 "VImageUrl": "images/vapes/vtower.gif"
			},
			{"VId": 12,
			 "VName": "Volcano Digit", 
			 "VManufacturer" : "Storz & Bickel",
			 "VType": "Desktop",
			 "VTempType": "N",
			 "VTempsF": ["104", "370", "446"],
			 "VTempsC": ["40", "187", "230"],
			 "VColors": ["L", "M", "H"],
			 "descriptionAbbrev":  "The Volcano Digit vaporizer's reputation precedes it in most cases and is equally respected by vaporizing newbies and pro vaporizer users alike.",
			 "VImageUrl": "images/vapes/volcano2.png"
			},
			{"VId": 13,
			 "VName": "Volcano Classic", 
			 "VManufacturer" : "Storz & Bickel",
			 "VType": "Desktop",
			 "VTempType": "N",
			 "VTempsF": ["266", "370", "446"],
			 "VTempsC": ["130", "187", "230"],
			 "VColors": ["L", "M", "H"],
			 "descriptionAbbrev":  "The Volcano Digit vaporizer's reputation precedes it in most cases and is equally respected by vaporizing newbies and pro vaporizer users alike.",
			 "VImageUrl": "images/vapes/volcano1.png"
			},
			{"VId": 14,
			 "VName": "Plenty", 
			 "VManufacturer" : "Storz & Bickel",
			 "VType": "Desktop",
			 "VTempType": "N",
			 "VTempsF": ["100", "370", "420"],
			 "VTempsC": ["37", "187", "215"],
			 "VColors": ["L", "M", "H"],
			 "descriptionAbbrev":  "This is Storz & Bickel's very first whip vaporizer and judging from their only other vaporizer, the Volcano vaporizer, you can expect a top of the line product when you buy the Plenty Vaporizer.",
			 "VImageUrl": "images/vapes/plenty1.png"
			},
			{"VId": 15,
			 "VName": "Ascent", 
			 "VManufacturer" : "DaVinci  Vaporizers",
			 "VType": "Portable",
			 "VTempType": "Y",
			 "VTempsF": ["0", "370", "430"],
			 "VTempsC": ["0", "187", "221"],
			 "VColors": ["L", "M", "H"],
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
			 "VColors": ["L", "H"],
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
			 "VColors": ["M", "M", "H", "H"],
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
			 "VColors": ["L", "M", "H"],
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
			 "VColors": ["L", "M", "H"],
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
			 "VColors": ["L", "M", "H"],
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
			 "VColors": ["M", "H", "H"],
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
			 "VColors": ["M", "M", "H", "H"],
			 "descriptionAbbrev": "PAX 2 has four temperature settings with lip-sensing, motion-sensing, and auto-cooling technologies that intelligently self-optimize power and temperature during use. With a one-button operation and minimal maintenance required, PAX 2's interface is simple and efficient.",
			 "VImageUrl": "images/vapes/pax2black.jpg",
			},
			{"VId": 23,
			 "VName": "Phantom", 
			 "VManufacturer" : "Cloud V",
			 "VType": "Pen",
			 "VTempType": "N",
			 "VTempsF": ["428"],
			 "VTempsC": ["220"],
			 "VColors": ["H"],
			 "descriptionAbbrev": "Known for their essential oil vaporizers such as the Cloud and the second generation Cloud Platinum, Cloud V Enterprises now introduces a powerful vape pen to the industry, specifically for dry herbs.",
			 "VImageUrl": "images/vapes/pax2black.jpg",
			},
			{"VId": 24,
			 "VName": "Alfa", 
			 "VManufacturer" : "Goboof",
			 "VType": "Portable",
			 "VTempType": "Y",
			 "VTempsF": ["374", "410", "446"],
			 "VTempsC": ["190", "210", "230"],
			 "VColors": ["M", "H", "H"],
			 "descriptionAbbrev": "Want nice vapor from a short draw? The Alfa is one to consider. This mid-priced portable vape is made by a new company that goes by the name of Goboof, and it has a few unique features that make it stand out.",
			 "VImageUrl": "images/vapes/alfa.jpg",
			},
			{"VId": 25,
			 "VName": "Summit", 
			 "VManufacturer" : "Vapium",
			 "VType": "Portable",
			 "VTempType": "Y",
			 "VTempsF": ["320", "338", "356", "374", "392", "410", "428", "450"],
			 "VTempsC": ["160", "170", "180", "190", "200", "210", "220", "230"],
			 "VColors": ["L", "L", "M", "M", "H", "H", "H", "H"],
			 "descriptionAbbrev": "With innovative technology, high-quality construction and materials and intuitive functionality crafted specifically for on-the-go use, the Summit redefines industry standards of both utility and style that performs wherever the trail may lead, and beyond.",
			 "VImageUrl": "images/vapes/summit-green-600x600.jpg",
			},
			{"VId": 26,
			 "VName": "Cloud Evo", 
			 "VManufacturer" : "VapeXhale",
			 "VType": "Desktop",
			 "VTempType": "N",
			 "VTempsF": ["0", "370", "450"],
			 "VTempsC": ["0", "187", "230"],
			 "VColors": ["L", "M", "H"],
			 "descriptionAbbrev": "A top-tier desktop unit with an all-glass air path that produces excellent quality vapor. A huge advantage this model has is that the performance is superb with both dry herbs and concentrates.",
			 "VImageUrl": "images/vapes/cloud-evo.png",
			},
			{"VId": 27,
			 "VName": "Herbal Aire", 
			 "VManufacturer" : "VapeXhale",
			 "VType": "Desktop",
			 "VTempType": "N",
			 "VTempsF": ["250", "370", "400"],
			 "VTempsC": ["121", "187", "204"],
			 "VColors": ["L", "M", "H"],
			 "descriptionAbbrev": "The Aire allows users the option of three different settings, whip style, balloon bag and direct draw. The temperature control on this unit is also great as it allows you to vape at anywhere between 250 F and 400F.",
			 "VImageUrl": "images/vapes/Herbal-Aire-1.jpg",
			},
			{"VId": 28,
			 "VName": "Herbalizer", 
			 "VManufacturer" : "Herbalizer",
			 "VType": "Desktop",
			 "VTempType": "N",
			 "VTempsF": ["0", "370", "445"],
			 "VTempsC": ["0", "187", "229"],
			 "VColors": ["L", "M", "H"],
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
			 "VColors": ["L"],
			 "descriptionAbbrev": "For dry herb, the Series 3 uses conduction heating with a temp range from 350-375 degrees Fahrenheit. The temperature is regulated based on a number of things to include your herbs, grind time and draw speed.",
			 "VImageUrl": "images/vapes/v2pro_series3.jpg",
			}, 
			{"VId": 30,
			 "VName": "V2 Pro Series 7", 
			 "VManufacturer" : "V2 Cigs",
			 "VType": "Pen",
			 "VTempType": "Y",
			 "VTempsF": ["392", "419", "437"],
			 "VTempsC": ["200", "215", "225"],
			 "VColors": ["H", "H", "H"],
			 "descriptionAbbrev": "The Series 7 is capable of vaporizing three, different mediums: e-liquid, loose leaf and wax. Allow the smart technology of your device to warm your chosen cartridge automatically, or use the variable voltage and temperature settings to tailor a custom vapor experience.",
			 "VImageUrl": "images/vapes/v2pro7_thumb.jpg",
			},
			{"VId": 31,
			 "VName": "G-Pro", 
			 "VManufacturer" : "Grenco Science",
			 "VType": "Portable",
			 "VTempType": "Y",
			 "VTempsF": ["320", "380", "420"],
			 "VTempsC": ["160", "193", "215"],
			 "VColors": ["L", "M", "H"],
			 "descriptionAbbrev": "Founded on the principles of performance and user-preference, the G Pro Vaporizer features three variable temperature settings, enabling a uniquely-fitted vaping experience.",
			 "VImageUrl": "images/vapes/GPro-Pen-Solo.jpg",
			},
			{"VId": 32,
			 "VName": "K-Vape Micro DX", 
			 "VManufacturer" : "KandyPens",
			 "VType": "Pen",
			 "VTempType": "Y",
			 "VTempsF": ["350", "370", "430"],
			 "VTempsC": ["177", "187", "221"],
			 "VColors": ["L", "M", "H"],
			 "descriptionAbbrev": "The K-Vape Micro-DX is an extension of the K-Vape line, which is currently one of the top-selling vaporizer brands in the world. It has over 80 possible tempertaure settings and a 3 - 4 hr battery life.",
			 "VImageUrl": "images/vapes/kvape_microDx.jpg",
			},
			{"VId": 33,
			 "VName": "E-Nano", 
			 "VManufacturer" : "Epic Vapes",
			 "VType": "Desktop",
			 "VTempType": "N",
			 "VTempsF": ["350", "370", "430"],
			 "VTempsC": ["177", "187", "221"],
			 "VColors": ["L", "M", "H"],
			 "descriptionAbbrev": "The Epic Vape E-Nano is a super efficient log vaporizer. Log vapes look just like a piece of wood and look great on any living room table.. Unlike most vapes which try to mimic spacecrafts and Apple products. It also heats up instantly and delivers milky clouds.",
			 "VImageUrl": "images/vapes/Epic-Vape-E-Nano-Vape.jpg",
			},
			{"VId": 34,
			 "VName": "Underdog", 
			 "VManufacturer" : "Underdog Aromatherapy",
			 "VType": "Desktop",
			 "VTempType": "N",
			 "VTempsF": ["350", "370", "430"],
			 "VTempsC": ["177", "187", "221"],
			 "VColors": ["L", "M", "H"],
			 "descriptionAbbrev": "The Underdog has a stainless steel heating core. Air is drawn into the Underdog, around the heating core, and up through the herbs in the stem. You should use a voltage regulator is you would like control over a wide range of temperatures.",
			 "VImageUrl": "images/vapes/Underdog-001-225x300.jpg",
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
				 		"TipImg" : "images/vapes/herbalizer.png"
				 	},
				 	{ 
				 		"tipNum": "2", 
				 		"tipTxt": "Although the Solo vaporizer is very easy to master, start with a higher temperature and work your way down as you gain experience. This will result in an optimal vaporizing experience.",
				 		"TipImg" : "images/vapes/herbalizer.png"
				 	},
				 	{ 
				 		"tipNum": "3", 
				 		"tipTxt": "Even when you find your favorite temperature, remember it may be necessary to adjust as needed when using fresher material that contains moisture (higher temp) or extra dry herbs (lower temp). Generally speaking, temperature levels 3 and 4 will consistently yield the best results for Sativas and temperature levels 5 and 6 for Indicas.",
				 		"TipImg" : "images/vapes/herbalizer.png"
				 	},
				 	{ 
				 		"tipNum": "4", 
				 		"tipTxt": "It sometimes may be easy to forget, but be sure to hold your Solo upside down while removing the glass stem to reload. Doing this when right side up may cause some material to fall onto the heating element and create residue or clog the small holes the air needs to pass through when using.",
				 		"TipImg" : "images/vapes/herbalizer.png"
				 	},
				 	{ 
				 		"tipNum": "5", 
				 		"tipTxt": "Although it is not a requirement to grind your herb finely, it will improve the performance and efficiency of your Solo vaporizer. Increased grinding means increased surface area of the cannabis, which allows more hot air to interact with and vaporize the cannabis (remember to hold it upside down when emptying).",
				 		"TipImg" : "images/vapes/herbalizer.png"
				 	},
				 	{ 
				 		"tipNum": "6", 
				 		"tipTxt": "Whenever possible try to let your Solo charge to full capacity in between use. A full battery will go much further than one that is periodically recharged for short periods of time. A battery charge might last 3-4 hours. The charger that comes with the Solo can’t charge while the Solo is in use, so plan accordingly. There are chargers sold separately that allowing charging during use, and there are also car charging adapters available.",
				 		"TipImg" : "images/vapes/herbalizer.png"
				 	},
				 	{ 
				 		"tipNum": "7", 
				 		"tipTxt": "Use an old school pipe cleaner to clean the Solo’s glass stems. Simply fold the pipe cleaner over on itself once to make it a bit thicker (more surface area) and insert. If done frequently you can almost completely avoid using any type of cleaner or solvent. Neglecting to clean your stems frequently will quickly result in slightly diminished performance due to clogging of the air holes. Soaking the stems overnight in rubbing alcohol then rinsing out with water is also very effective.",
				 		"TipImg" : "images/vapes/herbalizer.png"
				 	},
				 	{ 
				 		"tipNum": "8", 
				 		"tipTxt": "Be sure to turn off your Solo vaporizer right away if taking a break “mid-bowl”. Even though the Solo has an automatic shut-off safety feature, it will continue to vaporize some of your material and cause it to taste stale when you resume use. Despite what many self-professed “vaporizer experts” online may claim, no quality vaporizer will ever result in a “burnt popcorn” type taste when used correctly.",
				 		"TipImg" : "images/vapes/herbalizer.png"
				 	},
				 	{ 
				 		"tipNum": "9", 
				 		"tipTxt": "To disable the beeping noises on the Arizer Solo, hold the “up” button on the vaporizer until you hear it beep. This disables all further beeping from occurring.",
				 		"TipImg" : "images/vapes/herbalizer.png"
				 	},
				 	{ 
				 		"tipNum": "10", 
				 		"tipTxt": "After you turn your Solo back on, if you hold the “down” button for a second it will go to last temperature setting you used before turning it off.",
				 		"TipImg" : "images/vapes/herbalizer.png"
				 	},
				 	{ 
				 		"tipNum": "11", 
				 		"tipTxt": "Make sure you get any leftover material stuck to the bowl-end of the mouthpiece out of there so it doesn’t slowly build up and become a nuisance to clean later on. Also try to find something around the house, such as a toothpick, to poke the air holes in the bowl end of the mouthpiece. The last thing you need is those air holes getting clogged up.",
				 		"TipImg" : "images/vapes/herbalizer.png"
				 	},
				 	{ 
				 		"tipNum": "12", 
				 		"tipTxt": "Always take a look in the hole at the top of the Arizer Solo where the heating element is to make sure no material is in there. It doesn’t happen often but sometimes there will be a small amount of vaporized material in there. It is really easy to get out using either a small brush, your finger (if it is not heated up), or blowing in it.",
				 		"TipImg" : "images/vapes/herbalizer.png"
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
				 		"tipTxt": "To maximize your taste experience use low temps. The best way to do this is to insert your mouthpiece, turn the Air on to the lowest setting and begin using it as it warms up to the first temperature. This ensures you get all the low temp effects which typically is where the tastesin your strain are best experienced.",
				 		"TipImg" : "images/vapes/arizer_air2.png"
				 	},
				 	{ 
				 		"tipNum": "3", 
				 		"tipTxt": "Carry an extra prepacked mouthpiece or two with you in the travel case for quick changes when you're on the go and would like to be discreet. This works great for hikes, picnics, sunset cruises etc.",
				 		"TipImg" : "images/vapes/arizer_air2.png"
				 	},
				 	{ 
				 		"tipNum": "4", 
				 		"tipTxt": "To reach temps that are not specifically at one of the preset levels on the Air, try vaping between levels by while the Air is heating up to the next highest level.",
				 		"TipImg" : "images/vapes/arizer_air2.png"
				 	},
				 	{ 
				 		"tipNum": "5", 
				 		"tipTxt": "Remember the ghost hit. There is one hit typically still present when you turn the Air off.",
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
				 		"tipTxt": "Heating your well used mouthpiece in hot milk and then making hot chocolate can make a long lasting boost to your day. Just be sure to wathc the milk so it doesn't boil and stir often.",
				 		"TipImg" : "images/vapes/arizer_air2.png"
				 	},
				 	{ 
				 		"tipNum": "9", 
				 		"tipTxt": "A Tip goes here",
				 		"TipImg" : "images/vapes/arizer_air2.png"
				 	},
				 	{ 
				 		"tipNum": "10", 
				 		"tipTxt": "A Tip goes here",
				 		"TipImg" : "images/vapes/arizer_air2.png"
				 	},
				 	{ 
				 		"tipNum": "11", 
				 		"tipTxt": "A Tip goes here",
				 		"TipImg" : "images/vapes/arizer_air2.png"
				 	},
				 	{ 
				 		"tipNum": "12", 
				 		"tipTxt": "A Tip goes here",
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
				"VTipId": 4,
				"VName": "Mighty",
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
				"VTipId": 5,
				"VName": "Pinnacle Pro",
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
				"VTipId": 6,
				"VName": "Silver Surfer",
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
				"VTipId": 7,
				"VName": "Da Buddah",
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
				"VTipId": 8,
				"VName": "LSV",
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
				"VTipId": 9,
				"VName": "Magic Flight Launch Box",
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
				"VTipId": 10,
				"VName": "Extreme Q",
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
				"VTipId": 11,
				"VName": "V Tower",
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
				"VTipId": 12,
				"VName": "Volcano Digit",
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
				"VTipId": 13,
				"VName": "Volcano Classic",
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
				"VTipId": 14,
				"VName": "Plenty",
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
				"VTipId": 15,
				"VName": "Ascent",
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
				"VTipId": 16,
				"VName": "PUFFiT 2",
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
				"VTipId": 17,
				"VName": "Haze",
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
				"VTipId": 18,
				"VName": "Firefly",
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
				"VTipId": 19,
				"VName": "Hot Box",
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
				"VTipId": 20,
				"VName": "Vapir Rise 2.0",
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
				"VTipId": 21,
				"VName": "Pax",
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
				"VTipId": 22,
				"VName": "Pax 2",
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
				"VTipId": 23,
				"VName": "Phantom",
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
				"VTipId": 24,
				"VName": "Alfa",
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
				"VTipId": 25,
				"VName": "Summit",
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
				"VTipId": 26,
				"VName": "Cloud Evo",
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
				"VTipId": 27,
				"VName": "Herbal Aire",
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
				"VTipId": 30,
				"VName": "V2 Pro Series 7",
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
				"VTipId": 31,
				"VName": "G-Pro",
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
				"VTipId": 32,
				"VName": "K-Vape Micro DX",
				"VTipList": [
				 	{ 
				 		"tipNum": "1", 
				 		"tipTxt": "For the best performance and most vapor production you should grind up your dry herbs fine and pack the chamber full, then tamp it down a tiny bit.",
				 		"TipImg" : "images/vapes/herbalizer.png"
				 	},
				 	{ 
				 		"tipNum": "2", 
				 		"tipTxt": "For the best low temp flavors and effects, set your vape on the lowest temperature setting and begin inhaling as it heats up to the selected setting.",
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
				"VTipId": 33,
				"VName": "E-Nano",
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
				"VTipId": 34,
				"VName": "Underdog",
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

		];  

		/**var temperatures = [126, 246, 273, 313, 315, 334, 349, 351, 352, 356, 360, 365, 388, 408, 423, 428, 435, 482]**/

		/** temp ranges are L= 0-330F, M= 331-390F H= 391-445F**/
		var recEffects = [
			{"recEffectId": 1,
			 "recEffectName": "Euphoric",  
			 "recEffectType": "P",
			 "recEffectTempRange" : "M",
			 "imageUrl": "Euphoric.png"
			}, 
			{"recEffectId": 2,
			 "recEffectName": "Happy",  
			 "recEffectType": "P",
			 "recEffectTempRange" : "M",
			 "imageUrl": "Happy.png"
			},
			{"recEffectId": 3,
			 "recEffectName": "Uplifted",  
			 "recEffectType": "P",
			 "recEffectTempRange" : "H",
			 "imageUrl": "Uplifted.png"
			},
			{"recEffectId": 4,
			 "recEffectName": "Relaxed",  
			 "recEffectType": "P",
			 "recEffectTempRange" : "H",
			 "imageUrl": "Relaxed.png"
			},
			{"recEffectId": 5,
			 "recEffectName": "Creative",  
			 "recEffectType": "P",
			 "recEffectTempRange" : "M",
			 "imageUrl": "Creative.png"
			},
			{"recEffectId": 6,
			 "recEffectName": "Energetic",  
			 "recEffectType": "P",
			 "recEffectTempRange" : "L",
			 "imageUrl": "Energetic.png"
			},
			{"recEffectId": 7,
			 "recEffectName": "Long Lasting",  
			 "recEffectType": "P",
			 "recEffectTempRange" : "H",
			 "imageUrl": "LongLasting.png"
			},
			{"recEffectId": 8,
			 "recEffectName": "Very potent",  
			 "recEffectType": "P",
			 "recEffectTempRange" : "H",
			 "imageUrl": "VeryPotent.png"
			},
			{"recEffectId": 9,
			 "recEffectName": "Balanced",  
			 "recEffectType": "P",
			 "recEffectTempRange" : "L",
			 "imageUrl": "Balanced.png"
			},
			{"recEffectId": 10,
			 "recEffectName": "Mental calmness",  
			 "recEffectType": "P",
			 "recEffectTempRange" : "L",
			 "imageUrl": "MentalCalmness.png"
			},
			{"recEffectId": 11,
			 "recEffectName": "Productive",  
			 "recEffectType": "P",
			 "recEffectTempRange" : "L",
			 "imageUrl": "Productive.png"
			}, 
			{"recEffectId": 12,
			 "recEffectName": "Pain relief",  
			 "recEffectType": "P",
			 "recEffectTempRange" : "H",
			 "imageUrl": "PainRelief.png"
			},
			{"recEffectId": 13,
			 "recEffectName": "Mildly psychoactive",  
			 "recEffectType": "P",
			 "recEffectTempRange" : "M",
			 "imageUrl": "MildlyPsyc.png"
			},
			{"recEffectId": 14,
			 "recEffectName": "Mellow",  
			 "recEffectType": "P",
			 "recEffectTempRange" : "L",
			 "imageUrl": "Mellow.png"
			},
			{"recEffectId": 15,
			 "recEffectName": "Intense",  
			 "recEffectType": "P",
			 "recEffectTempRange" : "H",
			 "imageUrl": "IntenseEff.png"
			},
			{"recEffectId": 16,
			 "recEffectName": "Mind and Body Buzz",  
			 "recEffectType": "P",
			 "recEffectTempRange" : "H",
			 "imageUrl": "MindAndBodyBuzz.png"
			},
			{"recEffectId": 17,
			 "recEffectName": "Conversational",  
			 "recEffectType": "P",
			 "recEffectTempRange" : "M",
			 "imageUrl": "EnhanceConv.png"
			},
			{"recEffectId": 18,
			 "recEffectName": "Therapeutic",  
			 "recEffectType": "P",
			 "recEffectTempRange" : "H",
			 "imageUrl": "Therapeutic.png"
			},
			{"recEffectId": 19,
			 "recEffectName": "Tingly",  
			 "recEffectType": "P",
			 "recEffectTempRange" : "M",
			 "imageUrl": "Tingly.png"
			},
			{"recEffectId": 20,
			 "recEffectName": "Enhanced Hunger",  
			 "recEffectType": "P",
			 "recEffectTempRange" : "M",
			 "imageUrl": "EnhanceHung.png"
			},
			{"recEffectId": 21,
			 "recEffectName": "Dry Mouth",  
			 "recEffectType": "N",
			 "recEffectTempRange" : "H",
			 "imageUrl": "DryMouth.png"
			},
			{"recEffectId": 22,
			 "recEffectName": "Dry Eyes",  
			 "recEffectType": "N",
			 "recEffectTempRange" : "H",
			 "imageUrl": "DryEyes.png"
			},
			{"recEffectId": 23,
			 "recEffectName": "Paranoid",  
			 "recEffectType": "N",
			 "recEffectTempRange" : "H",
			 "imageUrl": "Paranoid.png"
			},
			{"recEffectId": 24,
			 "recEffectName": "Dizzy",  
			 "recEffectType": "N",
			 "recEffectTempRange" : "H",
			 "imageUrl": "Dizzy.png"
			},
			{"recEffectId": 25,
			 "recEffectName": "Anxious",  
			 "recEffectType": "N",
			 "recEffectTempRange" : "H",
			 "imageUrl": "Anxious.png"
			},
			{"recEffectId": 26,
			 "recEffectName": "Munchies",  
			 "recEffectType": "N",
			 "recEffectTempRange" : "M",
			 "imageUrl": "Munchies.png"
			},
			{"recEffectId": 27,
			 "recEffectName": "Headache",  
			 "recEffectType": "N",
			 "recEffectTempRange" : "H",
			 "imageUrl": "Headache.png"
			},
			{"recEffectId": 28,
			 "recEffectName": "Enhanced Drowsiness",  
			 "recEffectType": "N",
			 "recEffectTempRange" : "H",
			 "imageUrl": "EnhanceDrow.png"
			},
			{"recEffectId": 29,
			 "recEffectName": "Couch Lock",  
			 "recEffectType": "N",
			 "recEffectTempRange" : "H",
			 "imageUrl": "CouchLocked.png"
			},
			{"recEffectId": 30,
			 "recEffectName": "Clear-headed",  
			 "recEffectType": "N",
			 "recEffectTempRange" : "L",
			 "imageUrl": "ClearHeaded.png"
			},
			{"recEffectId": 31,
			 "recEffectName": "Enhanced Sexual Desire",  
			 "recEffectType": "P",
			 "recEffectTempRange" : "M",
			 "imageUrl": "EnhanceSexu.png"
			},
			{"recEffectId": 32,
			 "recEffectName": "Giggly",  
			 "recEffectType": "P",
			 "recEffectTempRange" : "M",
			 "imageUrl": "Giggly.png"
			},
			{"recEffectId": 33,
			 "recEffectName": "Less Social",  
			 "recEffectType": "N",
			 "recEffectTempRange" : "H",
			 "imageUrl": "LessSocial.png"
			},
			{"recEffectId": 34,
			 "recEffectName": "Focused",  
			 "recEffectType": "P",
			 "recEffectTempRange" : "L",
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
			 "imageUrl": "images/strains/acapulco-gold_100x100.jpg"

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
			 "imageUrl": "images/strains/acapulco-gold_100x100.jpg"

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
			 "imageUrl": "images/strains/acapulco-gold_100x100.jpg"

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
			 "imageUrl": "images/strains/acapulco-gold_100x100.jpg"

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
			 "imageUrl": "images/strains/acapulco-gold_100x100.jpg"

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
			 "imageUrl": "images/strains/acapulco-gold_100x100.jpg"

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
			 "imageUrl": "images/strains/acapulco-gold_100x100.jpg"

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
			 "imageUrl": "images/strains/acapulco-gold_100x100.jpg"

			},
			{"strainId": 126,
			 "strainName": "Mafia OG", 
			 "strainType": "Indica",
			 "imageUrl": "images/strains/acapulco-gold_100x100.jpg"

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
			 "imageUrl": "images/strains/acapulco-gold_100x100.jpg"

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
			 "imageUrl": "images/strains/la-chocolat_100x100.jpg"

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
			 "imageUrl": "images/strains/acapulco-gold_100x100.jpg"

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
			 "imageUrl": "images/strains/acapulco-gold_100x100.jpg"

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
			{"strainId": 251                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          ,
			 	"strainName": "Rainbow",
			 	"strainType": "Hybrid",
			 	"imageUrl": "images/strains/rainbow_100x100.jpg"
			 	
			},
			{"strainId": 252                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          ,
			 	"strainName": "Caramelicious",
			 	"strainType": "Hybrid",
			 	"imageUrl": "images/strains/caramelicious_100x100.jpg"
			 	
			}, 
			{"strainId": 253                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          ,
			 	"strainName": "Sour Cream",
			 	"strainType": "Hybrid",
			 	"imageUrl": "images/strains/sour-cream_100x100.jpg"
			 	
			},
			{"strainId": 254                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          ,
			 	"strainName": "Apollo 11",
			 	"strainType": "Hybrid",
			 	"imageUrl": "images/strains/apollo-11_100x100.jpg"
			 	
			}, 
			{"strainId": 255                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          ,
			 	"strainName": "Green Crack Extreme",
			 	"strainType": "Sativa",
			 	"imageUrl": "images/strains/green-crack-extreme_100x100.jpg"
			 	
			},
			{"strainId": 256                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          ,
			 	"strainName": "Sour Cheese",
			 	"strainType": "Hybrid",
			 	"imageUrl": "images/strains/sour-cheese_100x100.jpg"
			 	
			}, 
			{"strainId": 257                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          ,
			 	"strainName": "Venom OG",
			 	"strainType": "Hybrid",
			 	"imageUrl": "images/strains/venom-og_100x100.jpg"
			 	
			}, 
			{"strainId": 258                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          ,
			 	"strainName": "Platinum Wreck",
			 	"strainType": "Hybrid",
			 	"imageUrl": "images/strains/platinum_kush_indica.jpg"
			 	
			}, 
			{"strainId": 259                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          ,
			 	"strainName": "Deep Purple",
			 	"strainType": "Indica",
			 	"imageUrl": "images/strains/deep-purple_100x100.jpg"
			 	
			},
			{"strainId": 261                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          ,
			 	"strainName": "Purple Afghani",
			 	"strainType": "Indica",
			 	"imageUrl": "images/strains/purple-afghani_100x100.jpg"
			 	
			},
			{"strainId": 262                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          ,
			 	"strainName": "Heavy Duty Fruity",
			 	"strainType": "Hybrid",
			 	"imageUrl": "images/strains/heavy-duty-fruity_100x100.jpg"
			 	
			}, 
			{"strainId": 263                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          ,
			 	"strainName": "The Truth",
			 	"strainType": "Hybrid",
			 	"imageUrl": "images/strains/the-truth_100x100.jpg"
			 	
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
			 "positiveEffects": ["Long Lasting", "Uplifting", "Happy"],
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
			 "positiveEffects": ["Happy", "Relaxed", "Uplifted", "Creative", "Euphoric", "Very potent", "Balanced", "Pain relief"],
			 "negativeEffects": ["Dry Mouth", "Dry Eyes", "Dizzy", "Paranoid", "Headache", "Enhanced Drowsiness"],
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
			 "positiveEffects": ["Relaxed", "Happy", "Euphoric", "Creative", "Uplifted", "Mental calmness", "Mellow", "Energetic", "Productive"],
			 "negativeEffects": ["Dry Mouth", "Paranoid", "Dry Eyes", "Dizzy", "Headache"],
			 "descriptionDetailed": "The indica element of this strain does provide a mental calmness, but many consumers also find that this strain makes them energetic and productive.",
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
			 "positiveEffects": ["Pain relief", "Mildly psychoactive", "Therapeutic", "Relaxed", "Mellow", "Clear-headed", "Euphoric"],
			 "negativeEffects": ["Enhanced Drowsiness"],
			 "descriptionDetailed": "Rich in the therapeutic compound CBD. Pennywise is especially effective in treating arthritis, PTSD, epilepsy, neurological disorders, and cancer symptoms. It contains a 1:1 ratio of CBD and THC, so the psychoactive effects are milder and more relaxing.",
			 "descriptionAbbrev":  "Rich in the therapeutic compound CBD. Pennywise is especially effective in treating arthritis, PTSD, epilepsy, neurological disorders, and cancer symptoms. It contains a 1:1 ratio of CBD and THC, so the psychoactive effects are milder and more relaxing.",
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
			 "negativeEffects": ["Enhanced Drowsiness"],
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
			 "positiveEffects": ["Potent", "Clear-headed", "Euphoric", "Enhanced Drowsiness", "Pain relief", "Relaxed", "Mellow", "Enhanced Hunger"],
			 "negativeEffects": ["Enhanced Drowsiness", "Munchies"],
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
			 "positiveEffects": ["Intense", "Mind and Body Buzz", "Euphoric", "Happy", "Uplifted", "Relaxed", "Mellow",  "Creative"],
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
			 "positiveEffects": ["Enhanced Drowsiness", "Euphoric", "Relaxed", "Mellow",  "Uplifted", "Enhanced Hunger"],
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
			 "positiveEffects": ["Relaxed", "Mental Calmness", "Mellow", "Enhanced Drowsiness", "Uplifted"],
			 "negativeEffects": ["Enhanced Drowsiness"],
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
			 "positiveEffects": ["Relaxed", "Happy", "Euphoric", "Uplifted", "Enhanced Drowsiness", "Focused"],
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
			 "positiveEffects": ["Relaxed", "Enhanced Drowsiness", "Happy", "Euphoric", "Enhanced Hunger"],
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
			 "positiveEffects": ["Relaxed", "Happy", "Euphoric", "Productive", "Enhanced Drowsiness", "Enhanced Hunger"],
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
			 "negativeEffects": ["Dry Mouth", "Anxious", "Dizzy", "Dry eyes", "Paranoid"],
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
			 "positiveEffects": ["Relaxed", "Happy", "Pain relief", "Enhanced Drowsiness", "Enhanced Hunger", "Euphoric"],
			 "negativeEffects": ["Enhanced Drowsiness", "Munchies", "Dry Mouth", "Dry Eyes", "Anxious", "Headache", "Dizzy"],
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
			 "positiveEffects": ["Happy", "Focused", "Relaxed", "Enhanced Drowsiness", "Euphoric", "Stimulate Hunger"],
			 "negativeEffects": ["Munchies", "Couch lock", "Dry Eyes", "Dry Mouth", "Dizzy", "Paranoid", "Headache"],
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
			 "positiveEffects": ["Focused", "Happy", "Euphoric", "Uplifted", "Enhanced Drowsiness"],
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
			 "negativeEffects": ["Anxious", "Cotton Mouth", "Dry Eyes", "Dizzy", "Munchies"],
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
			 "positiveEffects": ["Happy", "Energetic", "Focused", "Relaxed", "Enhanced Hunger"],
			 "negativeEffects": ["Munchies"],
			 "descriptionDetailed": "This beauty has an almost immediate freight train-like effect to the head with the heavy body sink kinda sneaking up on you a little later.",
			 "descriptionAbbrev":  "This beauty has an almost immediate freight train-like effect to the head with the heavy body sink kinda sneaking up on you a little later.",
			 "tags": ["Hybrid", "Eden OG", "OG", "Bipolar", "Migraines", "Headache", "Nausea"],
			 "imageUrl": "images/strains/acapulco-gold_100x100.jpg"
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
		 	 "conditions": ["Bipolar", "Social Anxiety"],
			 "positiveEffects": ["Euphoric", "Happy", "Uplifted", "Energetic", "Creative", "Conversational"],
			 "negativeEffects": ["Dry Mouth", "Dry Eyes", "Headache"],
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
			 "positiveEffects": ["Happy", "Energetic", "Focused", "Relaxed", "Enhanced Hunger", "Potent", "Enhanced Drowsiness"],
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
		 	 "conditions": ["ADD/ADHD", "Anxiety", "Bipolar", "Depression", "Insomnia", "Migraines", "PMS", "Stress", "Muscle Spasms"],
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
			 "positiveEffects": ["Happy", "Energetic", "Focused", "Creative", "Enhanced Sexual Desire"],
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
			 "positiveEffects": ["Happy", "Energetic", "Focused", "Relaxed", "Conversational", "Creative", "Enhanced Sexual Desire"],
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
			 "descriptionAbbrev":  "Consumers typically describe this 55% sativa hybrid as blissful, clear-headed, and creative.",
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
			 "positiveEffects": ["Happy", "Energetic", "Focused", "Relaxed", "Conversational", "Enhanced Sexual Desire"],
			 "negativeEffects": [""],
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
		 	"taste": ["Earthy", "Chocloate", "Lemon"],
		 	 "conditions": ["Stress", "PMS", "Pain", "Migraines", "Insomnia", "Hypertension", "Fibromyalgia", "Depression", "Bipolar", "Arthritis", "Anxiety"],
			 "positiveEffects": ["Happy", "Energetic", "Focused", "Relaxed", "Conversational", "Creative", "Motivated"],
			 "negativeEffects": ["Conversational"],
			 "descriptionDetailed": "The result of a Mikado daddy and a clone-only Green Crack mother that came from British Columbia.",
			 "descriptionAbbrev":  "The result of a Mikado daddy and a clone-only Green Crack mother that came from British Columbia.",
			 "tags": [""],
			 "imageUrl": "images/strains/acapulco-gold_100x100.jpg"
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
			 "positiveEffects": ["Happy", "Energetic", "Focused", "Relaxed", "Creative", "Enhanced Hunger", "Pain relief"],
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
			 "negativeEffects": ["Enhanced Drowsiness"],
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
			 "positiveEffects": ["Happy", "Long Lasting", "Focused", "Enhanced Drowsiness", "Enhanced Hunger"],
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
			 "positiveEffects": ["Happy", "Focused", "Relaxed", "Conversational", "Enhanced Drowsiness", "Uplifted", "Euphoric"],
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
			 "descriptionDetailed": "A clear-headed, happy high develops into a mellow contentment.",
			 "descriptionAbbrev":  "A clear-headed, happy high develops into a mellow contentment.",
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
			 "positiveEffects": ["Happy", "Focused", "Relaxed", "Euphoric", "Uplifted", "Enhanced Drowsiness"],
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
			 "positiveEffects": ["Relaxed", "Enhanced Drowsiness", "Euphoric", "Happy", "Enhanced Hunger"],
			 "negativeEffects": ["Couch Lock", "Enhanced Drowsiness", "Dry Mouth", "Dry Eyes", "Dizzy", "Paranoid", "Headache", "Munchies"],
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
			 "imageUrl": "images/strains/acapulco-gold_100x100.jpg"
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
			 "positiveEffects": ["Happy", "Energetic", "Focused", "Relaxed", "Enhanced Hunger", "Giggly"],
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
			 "positiveEffects": ["Happy", "Energetic", "Focused", "Relaxed", "Enhanced Hunger"],
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
			 "positiveEffects": ["Happy", "Energetic", "Focused", "Relaxed", "Creative", "Enhanced Sexual Desire"],
			 "negativeEffects": [""],
			 "descriptionDetailed": "Another rock hard resin machine that will sit on the top shelf all day.",
			 "descriptionAbbrev":  "Indica dominant phenotypes are perfect for relaxation and healing.",
			 "tags": ["Hybrid", "Stratosphere", "Bipolar", "Migraines", "Headache", "PMS"],
			 "imageUrl": "images/strains/acapulco-gold_100x100.jpg"
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
			 "positiveEffects": ["Happy","Relaxed","Energetic", "Focused", "Conversational", "Creative", "Enhanced Sexual Desire", "Fatigue"],
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
			 "positiveEffects": ["Happy", "Relaxed", "Enhanced Drowsiness", "Enhanced Hunger"],
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
			 "positiveEffects": ["Relaxed", "Enhanced Drowsiness", "Happy", "Euphoric", "Enhanced Hunger"],
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
			 "positiveEffects": ["Relaxed", "Enhanced Drowsiness", "Enhanced Hunger"],
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
			 "imageUrl": "images/strains/acapulco-gold_100x100.jpg"
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
			 "positiveEffects": ["Relaxed", "Enhanced Drowsiness", "Euphoric", "Happy", "Uplifted"],
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
			 "positiveEffects": ["Euphoric", "Relaxed", "Happy", "Enhanced Drowsiness", "Uplifted"],
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
			 "positiveEffects": ["Happy", "Relaxed", "Enhanced Drowsiness", "Euphoric", "Uplifted"],
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
			 "positiveEffects": ["Relaxed", "Euphoric", "Enhanced Drowsiness", "Enhanced Hunger", "Happy"],
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
			 "positiveEffects": ["Relaxed", "Happy", "Euphoric", "Uplifted", "Enhanced Drowsiness"],
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
			 "positiveEffects": ["Happy", "Relaxed", "Creative", "Tingly", "Euphoric", "Enhanced Drowsiness", "Aroused"],
			 "negativeEffects": ["Enhanced Drowsiness"],
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
			 "positiveEffects": ["Relaxed", "Enhanced Drowsiness", "Happy", "Euphoric", "Enhanced Hunger"],
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
			 "positiveEffects": ["Happy", "Euphoric", "Uplifted", "Relaxed", "Creative", "Enhanced Hunger"],
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
			 "positiveEffects": ["Happy", "Energetic", "Relaxed", "Enhanced Hunger", "Pain relief"],
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
			 "positiveEffects": ["Relaxed", "Enhanced Drowsiness", "Happy", "Euphoric", "Creative"],
			 "negativeEffects": ["Dry Mouth", "Dry Eyes", "Headache", "Anxious", "Paranoid"],
			 "descriptionDetailed": "Almost entirely indica, this strain’s powerful high is sedative and popular for pain relief and insomnia.",
			 "descriptionAbbrev":  "Almost entirely indica, this strain’s powerful high is sedative and popular for pain relief and insomnia.",
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
			 "positiveEffects": ["Relaxed", "Euphoric", "Happy", "Giggly", "Focused", "Enhanced Sexual Desire"],
			 "negativeEffects": ["Dry Mouth", "Dry Eyes", "Headache", "Dizzy", "Paranoid"],
			 "descriptionDetailed": "While growing and after it's harvested, these plants have a sharp and fruity smell that brings to mind fermentation.",
			 "descriptionAbbrev":  "Blue Moonshine is a very potent blueberry indica strain that provides a nice body high.",
			 "tags": ["Indica", "Blue Moonshine", "Depression", "Stress"],
			 "imageUrl": "images/strains/blue-moonshine_100x100.jpg"
			},
			{"strainId": 109,
			 "strainName": "Blueberry Trainwreck", 
			 "strainType": "Hybrid",
			 "components": [
			 	{ 
			 		"name": "THC9", 
			 		"value": 15.50
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 0.18
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
		 	"taste": ["Blueberry", "Pungent", "Sweet"],
		 	 "conditions": ["ADD/ADHD", "Anxiety", "Depression", "Pain", "Stress"],
			 "positiveEffects": ["Happy", "Energetic", "Relaxed", "Conversational", "Creative"],
			 "negativeEffects": [""],
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
			 "positiveEffects": ["Happy", "Relaxed", "Euphoric", "Enhanced Drowsiness", "Enhanced Hunger"],
			 "negativeEffects": ["Dry Mouth", "Dry Eyes", "Paranoid", "Anxious", "Dizzy", "Enhanced Drowsiness", "Munchies"],
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
			 "negativeEffects": ["Couch lock", "Enhanced Drowsiness"],
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
		 	"taste": [""],
		 	 "conditions": ["Anorexia", "Anxiety", "Depression", "Insomnia", "Appetite Loss", "Migraines", "Muscle Spasms",  "Nausea", "Pain", "Seizures", "Stress"],
			 "positiveEffects": ["Happy", "Focused", "Relaxed", "Creative"],
			 "negativeEffects": ["Munchies", "Enhanced Drowsiness"],
			 "descriptionDetailed": "Detailed description here. Detailed description here.Detailed description here.Detailed description here. Detailed description here.",
			 "descriptionAbbrev":  "Dubtech is known to be effective in treating a number of medical conditions including Anorexia, Migraines and Muscle Spasms.",
			 "tags": ["Indica", "Dubtech", "Migraines", "Headache", "Nausea"],
			 "imageUrl": "images/strains/acapulco-gold_100x100.jpg"
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
			 "positiveEffects": ["Happy", "Relaxed", "Euphoric", "Enhanced Drowsiness", "Uplifted"],
			 "negativeEffects": ["Dry Mouth", "Dry Eyes", "Dizzy", "Paranoid", "Anxious", "Munchies", "Enhanced Drowsiness"],
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
			 "positiveEffects": ["Relaxed", "Euphoric", "Happy", "Uplifted", "Enhanced Hunger"],
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
			 "imageUrl": "images/strains/acapulco-gold_100x100.jpg"
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
			 "imageUrl": "images/strains/acapulco-gold_100x100.jpg"
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
			 "descriptionDetailed": "Sweet, with some sour aftertaste.",
			 "descriptionAbbrev":  "Sweet, with some sour aftertaste.",
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
			 "negativeEffects": ["Enhanced Drowsiness", "Munchies"],
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
			 "positiveEffects": ["Relaxed", "Euphoric", "Happy", "Enhanced Drowsiness", "Tingly"],
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
			 "imageUrl": "images/strains/acapulco-gold_100x100.jpg"
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
			 "positiveEffects": ["Happy", "Relaxed", "Euphoric", "Uplifted", "Enhanced Drowsiness"],
			 "negativeEffects": ["Enhanced Drowsiness", "Dry Mouth", "Dry Eyes", "Headache", "Dizzy", "Anxious", "Munchies"],
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
			 "positiveEffects": ["Relaxed", "Happy", "Enhanced Drowsiness", "Euphoric", "Enhanced Hunger" ],
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
			 "positiveEffects": ["Relaxed", "Enhanced Drowsiness","Euphoric", "Happy", "Tingly"],
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
			 "positiveEffects": ["Relaxed", "Happy", "Euphoric", "Uplifted", "Enhanced Drowsiness"],
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
			 "positiveEffects": ["Relaxed", "Enhanced Drowsiness", "Headache", "Euphoric", "Happy", "Creative"],
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
			 "negativeEffects": ["Enhanced Drowsiness"],
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
			 "positiveEffects": ["Happy", "Energetic", "Focused", "Conversational", "Creative", "Enhanced Sexual Desire"],
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
			 "positiveEffects": ["Soothing", "Relaxed", "Enhanced Hunger", "Long Lasting", "Very potent"],
			 "negativeEffects": ["Enhanced Drowsiness", "Munchies"],
			 "descriptionDetailed": "LA Chocolat has an intense aroma and flavor, with notes of chocolate, ground, and fruit. Its effect is powerful and relaxing, ideal to rest peacefully",
			 "descriptionAbbrev":  "LA Chocolat has an intense aroma and flavor, with notes of chocolate, ground, and fruit. Its effect is powerful and relaxing, ideal to rest peacefully",
			 "tags": [""],
			 "imageUrl": "images/strains/la-chocolat_100x100.jpg"
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
			 "positiveEffects": ["Relaxed", "Enhanced Drowsiness", "Euphoric", "Happy", "Enhanced Hunger" ],
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
			 "positiveEffects": ["Relaxed", "Happy", "Euphoric", "Enhanced Hunger", "Enhanced Drowsiness"],
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
			 "positiveEffects": ["Happy", "Relaxed", "Creative", "Uplifted", "Euphoric", "Enhanced Hunger", "Conversational"],
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
			 "positiveEffects": ["Relaxed", "Happy", "Euphoric", "Uplifted", "Enhanced Drowsiness"],
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
			 "positiveEffects": ["Clear-headed", "Long Lasting", "Relaxed", "Creative", "Conversational"],
			 "negativeEffects": ["Enhanced Drowsiness", "Munchies", "Couch lock"],
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
			 "positiveEffects": ["Happy", "Focused", "Relaxed", "Creative", "Enhanced Hunger", "Euphoric", "Uplifted"],
			 "negativeEffects": ["Dry Mouth", "Dry Eyes", "Dizzy", "Munchies"],
			 "descriptionDetailed": "A powerfully euphoric strain with a funky aroma somewhat similar to that of cheese. OG Cheese's dreamy, intoxicating buzz makes it a popular strain for recreational consumers.",
			 "descriptionAbbrev":  "OG Cheese's dreamy, intoxicating buzz makes it a popular strain for recreational consumers.",
			 "tags": ["Hybrid", "OG Cheese", "OG", "Hypertension", "PMS"],
			 "imageUrl": "images/strains/acapulco-gold_100x100.jpg"
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
			 "positiveEffects": ["Happy", "Focused", "Relaxed", "Conversational", "Enhanced Drowsiness", "Tingly", "Euphoric"],
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
			 "positiveEffects": ["Relaxed", "Uplifted", "Anxious", "Enhanced Drowsiness", "Enhanced Hunger"],
			 "negativeEffects": ["Headache", "Dry Mouth", "Dry Eyes", "Dizzy", "Paranoid", "Munchies"],
			 "descriptionDetailed": "With a hearty, thick taste and pungent smell, Mars OG will take away your pains and easily put you to sleep.",
			 "descriptionAbbrev":  "With a hearty, thick taste and pungent smell, Mars OG will take away your pains and easily put you to sleep.",
			 "tags": ["Indica", "Mars OG", "Epilepsy"],
			 "imageUrl": "images/strains/acapulco-gold_100x100.jpg"
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
			 "positiveEffects": ["Relaxed", "Happy", "Enhanced Drowsiness", "Euphoric", "Uplifted", "Enhanced Drowsiness"],
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
			 "positiveEffects": ["Happy", "Energetic", "Uplifted", "Conversational", "Euphoric", "Enhanced Drowsiness"],
			 "negativeEffects": ["Dry Mouth", "Dry Eyes", "Anxious", "Headache", "Dizzy", "Enhanced Drowsiness"],
			 "descriptionDetailed": "Green Queen is gold and yellow in color and known to provide a strong body buzz.",
			 "descriptionAbbrev":  "Green Queen is gold and yellow in color and known to provide a strong body buzz",
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
			 "positiveEffects": ["Relaxed", "Happy", "Euphoric", "Enhanced Drowsiness", "Enhanced Hunger"],
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
			 "descriptionAbbrev":  "Best known for its strong, uplifting, clear-headed buzz that allows for mobility.",
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
			 "positiveEffects": ["Relaxed", "Happy", "Enhanced Drowsiness", "Euphoric", "Enhanced Hunger"],
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
			 "positiveEffects": ["Relaxed", "Euphoric", "Happy", "Enhanced Drowsiness", "Uplifted"],
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
			 "positiveEffects": ["Relaxed", "Enhanced Drowsiness"],
			 "negativeEffects": ["Enhanced Drowsiness"],
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
			 "positiveEffects": ["Happy", "Relaxed", "Creative", "Enhanced Drowsiness", "Euphoric", "Uplifted"],
			 "negativeEffects": ["Dry Mouth", "Dry Eyes", "Headache", "Dizzy", "Paranoid", "Enhanced Drowsiness"],
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
			 "negativeEffects": ["Enhanced Drowsiness"],
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
			 "positiveEffects": ["Happy", "Relaxed", "Enhanced Drowsiness", "Enhanced Hunger", "Euphoric"],
			 "negativeEffects": ["Munchies", "Enhanced Drowsiness", "Dry Mouth", "Dry Eyes", "Dizzy", "Paranoid", "Headache"],
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
			 "positiveEffects": ["Happy", "Relaxed", "Euphoric", "Uplifted", "Enhanced Hunger"],
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
			 "positiveEffects": ["Relaxed", "Happy", "Euphoric", "Enhanced Drowsiness", "Tingly"],
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
			 "positiveEffects": ["Enhanced Drowsiness", "Relaxed", "Happy", "Euphoric", "Giggly"],
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
			 "positiveEffects": ["Happy", "Relaxed", "Enhanced Drowsiness", "Euphoric", "Enhanced Hunger"],
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
			 "positiveEffects": ["Relaxed", "Happy", "Enhanced Drowsiness", "Euphoric", "Enhanced Hunger"],
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
		 	"descriptionAbbrev":  "Known to deliver clear-headed, energetic effects that can verge on psychedelic at times",
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
			 "positiveEffects": ["Happy", "Energetic", "Relaxed", "Enhanced Sexual Desire", "Uplifted", "Enhanced Hunger"],
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
			 "positiveEffects": ["Happy", "Focused", "Relaxed", "Creative", "Enhanced Drowsiness", "Enhanced Hunger", "Euphoric"],
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
			 "positiveEffects": ["Happy", "Relaxed", "Creative", "Euphoric", "Uplifted", "Enhanced Drowsiness"],
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
			 "positiveEffects": ["Happy", "Relaxed", "Enhanced Drowsiness", "Euphoric", "Enhanced Hunger"],
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
			 "positiveEffects": ["Happy", "Relaxed", "Enhanced Drowsiness"],
			 "negativeEffects": ["Munchies", "Enhanced Drowsiness"],
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
			 "positiveEffects": ["Happy", "Relaxed", "Euphoric", "Enhanced Drowsiness", "Enhanced Hunger"],
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
			 "positiveEffects": ["Euphoric", "Dreamy", "Enhanced Drowsiness"],
			 "negativeEffects": ["Enhanced Drowsiness"],
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
			 "positiveEffects": ["Euphoric", "Dreamy", "Enhanced Drowsiness", "Peaceful"],
			 "negativeEffects": ["Enhanced Drowsiness"],
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
			 "negativeEffects": ["Enhanced Drowsiness"],
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
			 "descriptionDetailed": "Citrix entices the senses before drawing you into its active, clear-headed euphoria.",
			 "descriptionAbbrev": "Citrix entices the senses before drawing you into its active, clear-headed euphoria.",
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
			 "positiveEffects": ["Relaxed", "Euphoric", "Happy", "Enhanced Hunger", "Uplifted"],
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
		 	"taste": ["Chocolate", "Earthy", "Pungent", "Coffee"],
		 	 "conditions": ["Stress", "Insomnia", "Depression", "Nausea", "Pain"],
			 "positiveEffects": ["Relaxed", "Happy", "Enhanced Drowsiness", "Euphoric", "Uplifted"],
			 "negativeEffects": ["Dry Mouth", "Dry Eyes", "Headache", "Dizzy", "Paranoid"],
			 "descriptionDetailed": "Chocolate Chunk gives a quick and heavy hit which will leave you relaxed and even a little bit sleepy. It has a hashy flavor reminiscent of the slightly bitter taste of top quality dark chocolate and the smell combines sweet and earthy notes.",
			 "descriptionAbbrev": "Chocolate Chunk gives a quick and heavy hit which will leave you relaxed and even a little bit sleepy. It has a hashy flavor reminiscent of the slightly bitter taste of top quality dark chocolate and the smell combines sweet and earthy notes.",
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
			 "descriptionDetailed": "The effects are clear-headed and uplifting, perfect for building a positive mindset and stimulating creative energy.",
			 "descriptionAbbrev": "The effects are clear-headed and uplifting, perfect for building a positive mindset and stimulating creative energy.",
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
			 "positiveEffects": ["Relaxed", "Happy", "Euphoric", "Enhanced Drowsiness", "Uplifted", "Conversational"],
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
			 		"value": 26.23
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
		 	 "conditions": ["Epilepsy", "Nausea", "Pain"],
			 "positiveEffects": ["Clear-headed", "Pain relief"],
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
			 "positiveEffects": ["Pain relief", "Enhanced Hunger", "Enhanced Drowsiness"],
			 "negativeEffects": ["Dry Mouth", "Anxious", "Munchies", "Enhanced Drowsiness"],
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
			 "positiveEffects": ["Relaxed", "Happy", "Uplifted", "Euphoric", "Dizzy", "Headache",  "Enhanced Drowsiness", "Pain relief", "Enhanced Hunger"],
			 "negativeEffects": ["Dry Mouth", "Anxious", "Enhanced Drowsiness", "Munchies"],
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
			 "positiveEffects": ["Happy", "Relaxed", "Uplifted", "Euphoric", "Enhanced Hunger"],
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
			 "positiveEffects": ["Happy", "Uplifted", "Relaxed", "Euphoric", "Energetic", "Clear-headed", "Creative"],
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
			 "positiveEffects": ["Relaxed", "Euphoric", "Happy", "Uplifted", "Enhanced Drowsiness", "Balanced"],
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
			 "positiveEffects": ["Intense", "Relaxed", "Euphoric", "Pain", "Enhanced Hunger", "Enhanced Drowsiness", "Enhanced Sexual Desire"],
			 "negativeEffects": ["Dry Eyes", "Munchies", "Enhanced Drowsiness", "Couch Lock"],
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
			 "positiveEffects": ["Euphoric", "Relaxed", "Happy", "Uplifted", "Enhanced Hunger"],
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
			 "positiveEffects": ["Relaxed", "Uplifted", "Euphoric", "Happy", "Enhanced Drowsiness"],
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
			 "positiveEffects": ["Relaxed", "Euphoric", "Happy", "Tingly", "Enhanced Drowsiness"],
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
			 "positiveEffects": ["Energetic", "Uplifted", "Intense", "Pain relief", "Relaxed", "Enhanced Sexual Desire", "Euphoric"],
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
			 "positiveEffects": ["Happy", "Euphoric", "Uplifted", "Relaxed", "Creative", "Enhanced Hunger", "Intense"],
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
			 "positiveEffects": ["Relaxed", "Happy", "Euphoric", "Uplifted", "Enhanced Sexual Desire"],
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
			 "positiveEffects": ["Relaxed", "Enhanced Drowsiness", "Enhanced Hunger", "Happy", "Euphoric"],
			 "negativeEffects": ["Dry Mouth", "Dry Eyes", "Dizzy", "Paranoid", "Enhanced Drowsiness", "Munchies"],
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
			 "negativeEffects": ["Dry Mouth", "Dry Eyes", "Dizzy", "Headache", "Paranoid", "Enhanced Drowsiness"],
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
			 "positiveEffects": ["Pain relief", "Relaxed", "Uplifted", "Enhanced Hunger", "Peaceful", "Productive"],
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
			 "positiveEffects": ["Happy", "Relaxed", "Uplifted", "Euphoric", "Pain relief", "Enhanced Hunger"],
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
			 "positiveEffects": ["Happy", "Relaxed", "Uplifted", "Euphoric", "Energetic", "Enhanced Drowsiness", "Pain relief"],
			 "negativeEffects": ["Dry Mouth", "Dry Eyes", "Headache", "Paranoid", "Dizzy", "Enhanced Drowsiness"],
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
		 	 "conditions": ["Fibromyalgia", "Pain"],
			 "positiveEffects": ["Energetic", "Pain relief", "Long Lasting", "Clear-headed"],
			 "negativeEffects": [""],
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
			 "positiveEffects": ["Euphoric", "Enhanced Drowsiness", "Relaxed", "Happy", "Uplifted"],
			 "negativeEffects": ["Enhanced Drowsiness", "Dry Mouth", "Dry Eyes", "Dizzy", "Paranoid", "Anxious"],
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
			 "positiveEffects": ["Relaxed", "Happy", "Uplifted", "Enhanced Drowsiness", "Euphoric", "Enhanced Hunger"],
			 "negativeEffects": ["Enhanced Drowsiness", "Munchies", "Dry Mouth", "Dry Eyes", "Headache", "Paranoid", "Dizzy"],
			 "descriptionDetailed": "Strong coffee,blueberry,sweet flavors and a smooth smoke with a heavy throat hit.",
			 "descriptionAbbrev": "Strong coffee,blueberry,sweet flavors and a smooth smoke with a heavy throat hit.",
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
			 "positiveEffects": ["Relaxed", "Euphoric", "Enhanced Drowsiness", "Happy", "Creative"],
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
			 "positiveEffects": ["Relaxed", "Happy", "Euphoric", "Enhanced Hunger", "Giggly", "Long Lasting"],
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
			 "positiveEffects": ["Relaxed", "Enhanced Hunger", "Happy", "Dry Mouth", "Tingly", "Pain Relief"],
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
			 "positiveEffects": ["Relaxed", "Euphoric", "Uplifted", "Enhanced Drowsiness", "Focused"],
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
			 "positiveEffects": ["Balanced", "Tingly", "Giggly", "Relaxed", "Uplifted", "Enhanced Hunger", "Pain relief", "Euphoric"],
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
			 "positiveEffects": ["Pain relief", "Enhanced Drowsiness", "Relaxed", "Enhanced Hunger"],
			 "negativeEffects": ["Enhanced Drowsiness", "Munchies"],
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
			 "positiveEffects": ["Enhanced Drowsiness", "Relaxed", "Euphoric", "Happy", "Enhanced Hunger", "Pain relief", "Focused"],
			 "negativeEffects": ["Dry Eyes", "Dry Mouth", "Dizzy", "Anxious", "Paranoid",  "Enhanced Drowsiness", "Couch Lock", "Munchies"],
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
			 "positiveEffects": ["Happy", "Pain relief", "Euphoric", "Relaxed", "Enhanced Drowsiness", "Enhanced Hunger",  "Uplifted"],
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
			 "positiveEffects": ["Relaxed", "Euphoric", "Uplifted", "Long Lasting", "Enhanced Drowsiness", "Pain relief"],
			 "negativeEffects": ["Enhanced Drowsiness", "Couch Lock"],
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
			 "positiveEffects": ["Happy", "Relaxed", "Euphoric", "Mellow", "Uplifted", "Creative", "Enhanced Hunger", "Pain relief"],
			 "negativeEffects": ["Enhanced Hunger", "Dry Mouth", "Dry Eyes", "Dizzy", "Headache", "Paranoid", "Munchies"],
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
			 "positiveEffects": ["Uplifted", "Happy", "Relaxed", "Enhanced Drowsiness", "Balanced"],
			 "negativeEffects": ["Enhanced Drowsiness", "Dizzy"],
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
			 "positiveEffects": ["Happy", "Energetic", "Uplifted", "Euphoric", "Creative", "Enhanced Hunger"],
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
			 "positiveEffects": ["Relaxed", "Creative", "Uplifted", "Euphoric", "Happy", "Pain relief", "Enhanced Drowsiness"],
			 "negativeEffects": ["Enhanced Drowsiness", "Dry Mouth", "Paranoid", "Dizzy", "Headache", "Dry Eyes"],
			 "descriptionDetailed": "Want pungent, tangy tasty weed that isn’t a chore to grow? Sour Cheese is the perfect combination of the original Exodus Cheese and Strawberry genetics. Due to the tried-and-true classic quality of both these strains the Sour Cheese delivers the perfect blend of Cheesy sweet and sour taste and potent Kush body hit.",
			 "descriptionAbbrev": "Want pungent, tangy tasty weed that isn’t a chore to grow? Sour Cheese is the perfect combination of the original Exodus Cheese and Strawberry genetics. Due to the tried-and-true classic quality of both these strains the Sour Cheese delivers the perfect blend of Cheesy sweet and sour taste and potent Kush body hit.",
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
			 "positiveEffects": ["Relaxed", "Pain relief", "Enhanced Drowsiness"],
			 "negativeEffects": ["Enhanced Drowsiness", "Munchies"],
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
			 "positiveEffects": ["Relaxed", "Focused", "Pain relief", "Euphoric", "Uplifted",  "Enhanced Hunger", "Energetic"],
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
			 "positiveEffects": ["Long Lasting", "Pain relief", "Enhanced Drowsiness", "Enhanced Hunger"],
			 "negativeEffects": ["Enhanced Drowsiness", "Munchies", "Dry Mouth", "Dry Eyes", "Dizzy", "Anxious", "Headache"],
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
			 "positiveEffects": ["Relaxed", "Euphoric", "Enhanced Drowsiness", "Happy", "Uplifted", "Tingly", "Energetic", "Balanced", "Productive", "Pain relief"],
			 "negativeEffects": ["Enhanced Drowsiness", "Dry Mouth", "Dry Eyes", "Dizzy", "Paranoid"],
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
			 "positiveEffects": ["Enhanced Drowsiness", "Enhanced Hunger", "Relaxed", "Uplifted", "Happy", "Dry Mouth" ],
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
			 "positiveEffects": ["Uplifted", "Happy", "Giggly", "Euphoric", "Creative", "Mildly psychoactive", "Enhanced Drowsiness"],
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
			 "strains": ["White Fire OG", "White Walker OG", "Super Lemon Haze", "The White", "Stratoshpere", "Sugar Plum", "Silverback Gorilla", "Sour Tsunami", "Regulator OG", "Sherbet Cookies", "Platinum Trinity Kush", "Purple Urkle", "Phantom OG", "Pineapple Hogsbreath", "Northern Lights", "Pennywise", "May Weather Kush", "Moonshine Diesel", "Magic Jack", "Mango Maui", "Mad Max", "Mafia OG", "Lemon OG Kush", "Lulu", "Lemon Head OG", "Lemon Jack", "Jupiter Kush", "L.A. Confidential", "Hog", "Jack Chemdawg", "Jupiter Kush", "Harle-Tsu", "Hawaiian Hulk", "Green Thailand", "H-Trainwreck", "Grape Kool Aid", "Grapefruit Haze", "Gooey Wreck", "Grape Cookies", "Forum Cookies/GSC", "Ghost OG", "Eden OG", "Fire Bomb", "Diablo", "Dubtech", "Clear Lake", "Deadhead OG", "Canelope Haze", "Chocloate Thai", "Blue Dream", "Candyland", "Black Magic Kush", "Alien OG", "Banana Diesel", "Afghani", "Afgooey"],
			 "descriptionDetailed": "Migraines Detailed description here. Detailed description here.Detailed description here.Detailed description here. Detailed description here.",
			 "descriptionAbbrev":  "Migraines Short description here.",
			 "tags": ["Migraines", "Headache", "White Fire OG", "White Walker OG", "Super Lemon Haze", "The White", "Stratoshpere", "Sugar Plum", "Silverback Gorilla", "Sour Tsunami", "Regulator OG", "Sherbet Cookies", "Platinum Trinity Kush", "Purple Urkle", "Phantom OG", "Pineapple Hogsbreath", "Northern Lights", "Pennywise", "May Weather Kush", "Moonshine Diesel", "Magic Jack", "Mango Maui", "Mad Max", "Mafia OG", "Lemon OG Kush", "Lulu", "Lemon Head OG", "Lemon Jack", "Jupiter Kush", "L.A. Confidential", "Hog", "Jack Chemdawg", "Jupiter Kush", "Harle-Tsu", "Hawaiian Hulk", "Green Thailand", "H-Trainwreck", "Grape Kool Aid", "Grapefruit Haze", "Gooey Wreck", "Grape Cookies", "Forum Cookies/GSC", "Ghost OG", "Eden OG", "Fire Bomb", "Diablo", "Dubtech", "Clear Lake", "Deadhead OG", "Canelope Haze", "Chocloate Thai", "Blue Dream", "Candyland", "Black Magic Kush", "Alien OG", "Banana Diesel", "Afghani", "Afgooey"],
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

/**
		var vapes = [
			{"productId": 1,
			 "productName": "The Crafty", 
			 "manufacturer" : "Storz & Bickels",
			 "price": 399.00,
			 "weight": "",
			 "type": "Portable",
			 "manufacturersWarranty": "3 year warranty restricted to normal use.",
			 "temps": ["370 F", "395 F", "420 F", "445 F", "470 F"],
			 "descriptionDetailed1": "The Crafty vaporizer packs the power of Storz & Bickels' German engineered heating technology into an uber portable vaping unit that can be controlled from your smartphone. Now you can enjoy the efficient herbal vaporizing experience the Volcano and Plenty are known for, on the go.", 
			 "descriptionDetailed2": "At less than 4.5 inches tall, 2.25 inches wide, and 1.3 inches thick, the Crafty can fit discreetly in your pocket for travel and fit firmly in the hand when in use making it the perfect portable vaping companion.",
			 "descriptionDetailed3": "With just one button and 2 temperature settings, the Crafty vaporizer is extremely easy to use and can reach vaporization temperatures of 356 degrees F with the press of a button. Double clicking the button will activate the boost level of 383 degrees F, for those looking for a little more kick to their vapor quality.",
			 "descriptionDetailed4": "An LED on the bottom of the Crafty will switch from red to green and a quick double vibration will let you know when you have reached your desired temperature setting, so you know when you're ready to vaporize.",
			 "descriptionDetailed5": "The Crafty Remote Control app can be downloaded to both Android and iPhone devices and will connect to your Crafty via Bluetooth connection. The app will allow you to adjust the temperature settings, as well as the LED brightness and vibration settings.",
			 "descriptionDetailed6": "The top of the Crafty vaporizer can be removed to load your herbs and makes cleaning the heating chamber a breeze. The swivel style mouthpiece can be turned in for compact storage and twisted outward when you're ready to vape, making the Crafty that much easier to use on the move.", 
			 "descriptionDetailed7": "Enjoy the power of the world's most renowned vaporizer company in the palm of your hand with the Crafty vaporizer.",
			 "descriptionAbbrev":  "Enjoy the power of the world's most renowned vaporizer company in the palm of your hand with the Crafty vaporizer.",
			 "included" : "1 x Crafty Vaporizer, 1 x Storz & Bickel Custom Grinder, 1 x Storz & Bickel Custom Filling Tool, 1 x Power Adapter with USB Cable, 1 x Liquid Pad, 3 x Spare Screens, 1 x Cleaning Brush, 1 x Set of Spare Seal Rings, 1 x Instructions for Use",	
			 "tags": ["crafty","portable","handheld","storz-bickel"],
			 "imageUrl1": "images/vapes/crafty1.png",
 		 	 "imageUrl2": "images/vapes/crafty2.png",
		 	 "imageUrl3": "images/vapes/crafty3.png",
		 	 "imageUrl4": "images/vapes/crafty1.png",
 		 	 "imageUrl5": "images/vapes/crafty_app2.png",
		 	 "imageUrl6": "images/vapes/crafty_apart.png",
		 	 "imageUrl7": "images/vapes/crafty_ipad.png"
			},
			{"productId": 2,
			 "productName": "Mighty", //compName
			 "manufacturer" : "Storz & Bickels",
			 "price": 469.00,
			 "weight": "",
			 "type": "Portable",
			 "manufacturersWarranty": "2 year warranty restricted to normal use, with a lifetime warranty on the heater.",
			 "temps": ["370 F", "395 F", "420 F", "445 F", "470 F"],
			 "descriptionDetailed1": "The Mighty Vaporizer is the first of the portable vaporizers from German vaping masterminds Storz & Bickel, the same creators of the Volcano and Plenty vaporizers. Their German engineered heaters are the most efficient in the game, and that power is now available in the palm of your hand.",
			 "descriptionDetailed2": "The Mighty vape provides a user friendly interface with the classic orange power button and simple plus and minus controls which raise or lower the temperature to your preference. Just set your desired temperature and the Mighty vape will begin to heat up to your preferred vaping temperature. ",
			 "descriptionDetailed3": "The digital LED display will show the current temperature, destination temperature, and battery level. Once the Mighty reaches vaping temperatures the display screen will let you know and the unit will emit a vibration so that you know it is ready for use. ",
			 "descriptionDetailed4": "A swivel mouthpiece easily pulls out for vaping and tucks away neatly when not in use, making it perfect fro throwing in your pocket. ",
			 "descriptionDetailed5": "The top of the Mighty can easily be removed for loading your herbs and makes cleaning and upkeep extremely easy. The heater can reach temperatures ranging from 104 - 410 degrees F to efficiently vaporize your dry herbs. ",
			 "descriptionDetailed6": "The ribbed design of the body creates a cool feel in the hand while making the vaporizer extremely light and comfortable to use.", 
			 "descriptionDetailed7": "The Mighty vaporizer is powered by 2 internal lithium ion batteries which provide a long use time. The batteries are separated from the heater to ensure a safe environment and longer overall lifespan of the Mighty vaporizer itself. The Mighty vape can easily be recharged by connecting to any standard wall outlet using the included charging adapter. Shrink the power of the world's most popular and efficient vaporizers and enjoy pure vapor in the palm of your hand with the Mighty vaporizer.",			 
			 "descriptionAbbrev":  "The Mighty Vaporizer is the first of the portable vaporizers from German vaping masterminds Storz & Bickel, the same creators of the Volcano and Plenty vaporizers.",
			 "included" : "1 x Mighty Vaporizer, 1 x Storz & Bickel Custom Grinder, 1 x Storz & Bickel Custom Filling Tool, 1 x Power Adapter with USB Cable, 1 x Liquid Pad, 3 x Spare Screens, 1 x Cleaning Brush, 1 x Set of Spare Seal Rings, 1 x Instructions for Use",	
			 "tags": ["Terpene","Terpinoid","peppermint", "sedative", "memory"],
			 "imageUrl1": "images/vapes/mighty1.png",
			 "imageUrl2": "images/vapes/mighty2.png",
		 	 "imageUrl3": "images/vapes/mighty3.png",
		 	 "imageUrl4": "images/vapes/mighty1.png",
 		 	 "imageUrl5": "images/vapes/mighty2.png",
		 	 "imageUrl6": "images/vapes/mighty3.png",
		 	 "imageUrl7": "images/vapes/mighty1.png"
			},			
			{"productId": 3,
			 "productName": "Solo", //compName
			 "manufacturer" : "Arizer ",
			 "price": 224.00,
			 "weight": "",
			 "type": "Portable",
			 "manufacturersWarranty": "",
			 "temps": ["122 F", "365 F", "374 F", "383 F", "393 F", "401 F", "410 F"],
			 "descriptionDetailed1": "The Arizer Solo is a super efficient hand held portable vaporizer by Arizer Tech, the brilliant minds behind the Arizer Extreme Q.",
			 "descriptionDetailed2": "Arizer has improved everything you might think you know about portable vaporizing. ",
			 "descriptionDetailed3": "It is built of a sturdy aluminum that is highly resistant to scratches and other wear and tear, making it the ideal vaporizer for those who are out and about often and need something that can keep up with them. ",
			 "descriptionDetailed4": "Its heating element gives it the ability to deliver a vapor quality that is right next to any table top vaporizer, but is extremely easy to use at the same time. ",
			 "descriptionDetailed5": "The heat level is set by simply selecting 1 of 7 different temperature settings, making vaporizing right out of the box as simple as can be. ",
			 "descriptionDetailed6": "Also, the Arizer Solo's lithium-ion battery is unmatched, taking only about 2 hours to charge but lasts through an astonishing 4+ hours of vaporization. ",
			 "descriptionDetailed7": "The newest version allows you to heat-up and vaporize with the unit while it's charging, so you no longer need the A/C power adapter to turn the Solo into a table top vaporizer with unlimited power. Add in the fact that this vape uses an all glass mouthpiece to connect to the heating element and you have one amazing portable vape. The Arizer Solo is one of the newest portable vaporizers on the market and has totally changed the game. Available in Black or Silver.",
			 "descriptionAbbrev":  "The Arizer Solo is one of the newest portable vaporizers on the market and has totally changed the game.",
			 "included" : "Arizer Solo Portable Vaporizer, 2 Glass Mouthpieces (1 Straight and 1 Angled), Aromatherapy Bowl with Potpourri Sample, AC Adapter / Charger, Instruction Manual",	
			 "tags": ["Terpene","Terpinoid","peppermint", "sedative", "memory"],
			 "imageUrl1": "images/vapes/solo1.png",
			 "imageUrl2": "images/vapes/solo2.png",
			 "imageUrl3": "images/vapes/solo3.png",
			 "imageUrl4": "images/vapes/solo4.png",
			 "imageUrl5": "images/vapes/solo5.png",
			 "imageUrl6": "images/vapes/solo1.png",
			 "imageUrl7": "images/vapes/solo2.png"
			},
			{"productId": 4,
			 "productName": "Arizer Air", //compName
			 "manufacturer" : "Arizer",
			 "price": 259.95,
			 "weight": "",
			 "type": "Portable",
			 "manufacturersWarranty": "",
			 "temps": ["365 F", "383 F", "392 F", "401 F", "410 F"],
			 "descriptionDetailed1": "The Arizer Air vaporizer uses an all glass vapor path and stainless steel heating element to produce desktop quality vapor in a small 5 Inch tall by 1 inch wide travel friendly size. ",
			 "descriptionDetailed2": "Made by vapor veterans Arizer, this pocket size powerhouse answers all of the fans requests and then some. ",
			 "descriptionDetailed3": "Use while plugged in, check. Intuitive and easy to use design, check. Small and travel friendly design, check. Replaceable battery, check. ",
			 "descriptionDetailed4": "The Arizer Air uses a rechargeable and replaceable 18650 battery that can be changed by simply unscrewing the bottom of the Arizer Air. This means a longer overall life of the unit.",
			 "descriptionDetailed5": "Charging the Arizer Air battery is as simple as plugging the wall adapter into the side of the vaporizer. You can get about an an hour's worth of power out of a full charge, but The Arizer Air can also be used while plugged in for those must have home sessions.",
			 "descriptionDetailed6": "The Air features a 10 minute shutoff time to prevent wasted power and material. This means you won't burn through herbs or battery life if you forget to shut it off before throwing it back in the included travel case.",
			 "descriptionDetailed7": "This soft case has enough room to hold your vaporizer and a small glass mouthpiece. The Air features a 10 minute shutoff time to prevent wasted power and material. This means you won't burn through herbs or battery life if you forget to shut it off before throwing it back in the included travel case. Termperature controls as follows: Blue 356F, White 374F, Green 392F, Orange 401F, Red 410F. There's only a 1 minute heat-up time to the lowest heat setting and 2 minutes to the highest setting. With this small size and fast heat up time you can be ready to vape almost anywhere at any time.",
			 "descriptionAbbrev":  "With this small size and fast heat up time you can be ready to vape almost anywhere at any time.",
			 "included" : "1 x Arizer Air Vaporizer, 1 x Small Straight Glass Stems w/ Black Mouthpiece, 1 x Medium Straight Glass Stems, 1 x 18650 mAh battery, 1 x Carrying Case, 1 x Protective, Silicone Skin",	
			 "tags": ["Terpene","Terpinoid","peppermint", "sedative", "memory"],
			 "imageUrl1": "images/vapes/arizer_air1.png",
			 "imageUrl2": "images/vapes/arizer_air2.png",
			 "imageUrl3": "images/vapes/arizer_air3.png",
			 "imageUrl4": "images/vapes/arizer_air1.png",
			 "imageUrl5": "images/vapes/arizer_air2.png",
			 "imageUrl6": "images/vapes/arizer_air3.png",
			 "imageUrl7": "images/vapes/arizer_air1.png"
			},
			{"productId": 5,
			 "productName": "Pinnacle Pro", //compName
			 "manufacturer" : "VaporBlunt",
			 "price": 188.00,
			 "weight": "",
			 "type": "Portable",
			 "manufacturersWarranty": "The Pinnacle Pro DLX has a 1 year limited product warranty which covers your vaporizer against defects in manufacturing, parts and labor. 90 day limited warranty on the battery.",
			 "temps": ["370 F", "395 F", "420 F", "445 F", "470 F"],
			 "descriptionDetailed1": "The Pinnacle quickly became one of the most popular portable vaporizers for first time users and vape veterans alike because of its easy to use functionality, superb portability, and excellent vapor quality.",
			 "descriptionDetailed2": "The creators, VaporBLUNT, have now taken this tiny tower of power and made vast improvements that are taking the Pinnacle to the next level. ",
			 "descriptionDetailed3": "VaporBLUNT's Pinnacle Pro vaporizer is still the same small size, measuring about 5 inches tall and less than an inch wide, making it a great fit in the hand, pocket, purse or bag. ",
			 "descriptionDetailed4": "The Pinnacle Pro vaporizer even keeps the same 1 button design which turns the unit on, toggles between its temperature settings, and then turns the unit off. ",
			 "descriptionDetailed5": "What has changed with the upgraded Pinnacle, however, is that it now has 5 temperature settings, which is 3 more than the original version. These temperatures range from 370 degrees to 470 degrees F in 25 degree increments providing ultimate control over your personal vaporization settings. ",
			 "descriptionDetailed6": "The temperature setting is indicated using a color coding system displayed by the 5 LED lights on the front of the Pinnacle Pro. The first 4 temperatures are so that you can find the perfect temperature for your dry herbal blend, while the 5th and highest temperature is intended for oil and concentrate vaporization. ",
			 "descriptionDetailed7": "That's right, the Pinnacle Pro has the ability to vaporize dry herbs and concentrates right out of the box by simply changing the included bullet in the chamber. Another small, yet very efficient change is the Pro's new battery level indicator. By pressing the button just once the LED lights will light up to display how much battery level the Pinnacle has left. This pint size power house is an excellent choice as a first vaporizer or as an upgrade or addition to your current vaporizer collection. Reach the pinnacle of portable vaporization like a pro with VaporBLUNT's Pinnacle Pro vaporizer.",
			 "descriptionAbbrev":  "The Pinnacle quickly became one of the most popular portable vaporizers for first time users and vape veterans alike.",
			 "included" : "1 x Pinnacle Pro Portable Vaporizer, 1 x Chamber Cap, 1 x PonG Adapter w/ Glass Vapor Path, 2 x Dry Herb Filling Chambers, 1 x Wax/Oil Filling Chamber, 1 x Charger, 1 x Cleaning Brush, 1 x Wire Pipe Cleaner, 1 x Bamboo Cleaning Stick, 1 x Standard Mouthpiece, 1 x Quick Start Guide",
			 "tags": ["Terpene","Terpinoid","peppermint", "sedative", "memory"],
			 "imageUrl1": "images/vapes/pinnaclepro1.png",
			 "imageUrl2": "images/vapes/pinnaclepro2.png",
			 "imageUrl3": "images/vapes/pinnaclepro3.png",
			 "imageUrl4": "images/vapes/pinnaclepro4.png",
			 "imageUrl5": "images/vapes/pinnaclepro5.png",
			 "imageUrl6": "images/vapes/pinnaclepro6.png",
			 "imageUrl7": "images/vapes/pinnaclepro7.png"
			},
			{"productId": 6,
			 "productName": "Pinnacle Pro Deluxe", //compName
			 "manufacturer" : "VaporBlunt",
			 "price": 237.00,
			 "weight": "",
			 "type": "Portable",
			 "manufacturersWarranty": "The Pinnacle Pro DLX has a 1 year limited product warranty which covers your vaporizer against defects in manufacturing, parts and labor. 90 day limited warranty on the battery.",
			 "temps": ["370 F", "395 F", "420 F", "445 F", "470 F"],
			 "descriptionDetailed1": "The Pinnacle Pro DLX is the newest version and now comes with glass screen housing and vapor tube in the PonG adapter! ",
			 "descriptionDetailed2": "The Pinnacle Pro DLX set includes everything you need to vape dry herbs and concentrates with water filtration at home or on the go. With the Pinnacle's dual functionality and the included Micro Shower Water Tool, you are sure to get the coolest and smoothest vapor puffs possible from the Pinnacle Pro from your favorite materials without having to sacrifice size or quality. ",
			 "descriptionDetailed3": "VaporBLUNT's Pinnacle Pro vaporizer is about 5 inches tall and less than an inch wide, allowing it to travel easily and be used virtually anywhere. Toss the Pinnacle Pro in your pocket, bag, or purse and be ready to vape wherever you may go. ",
			 "descriptionDetailed4": "What really takes the Pinnacle Pro to the next level is the Micro Shower Tool. The water filtration tool cleans your vapor of any small particles that may sneak past the screen while cooling the vapor, putting the Pinnacle Pro at the head of the class for both portability and vapor quality. ",
			 "descriptionDetailed5": "The Pinnacle Pro vaporizer has a simple 1 button design which turns the unit on, toggles between its temperature settings, and then turns the unit off. This design has been proven to be the easiest to use, making this vape a must have for newbies and vapor veterans alike. ",
			 "descriptionDetailed6": "The vaporizing heat settings range from 370° to 470° F in 25° increments, providing ultimate control over your vapor quality. The temperature setting is indicated using a color coding system displayed by the 5 LED lights on the front of the Pinnacle Pro: WHITE 370 F, TURQUOISE 395 F, GREEN 420 F, ORANGE 445 F,  PURPLE 470 F. The first 4 temperatures are so that you can find the perfect temperature for your dry herbal blend, while the 5th and highest temperature is intended for oil and concentrate vaporization. ",
			 "descriptionDetailed7": "The Bullet baskets are used to hold and vaporize your dry herbs, while the Full Metal Jacket concentrate basket can withstand the higher temperatures required to vape waxes and concentrates. The baskets easily slide out when it comes time to change or clean them. This means your material never comes in contact with your vaporizer making the Pinnacle Pro very easy to keep clean for continuous optimum use.Get everything you need to have the ultimate in travel friendly vaporization and top level vapor quality with the Pinnacle Pro DLX vaporizer kit.",
			 "descriptionAbbrev":  "The Pinnacle Pro DLX is the newest version and now comes with glass screen housing and vapor tube in the PonG adapter.",
			 "included" : "1 x Pinnacle Pro Portable Vaporizer, 1 x Micro Shower Water Tool, 1 x Chamber Cap, 1 x PonG Adapter w/ Glass Vapor Path, 2 x Dry Herb Filling Chambers, 1 x Wax/Oil Filling Chamber, 1 x Charger, 1 x Cleaning Brush, 1 x Wire Pipe Cleaner, 1 x Bamboo Cleaning Stick, 1 x Standard Mouthpiece, 1 x Quick Start Guide",	
			 "tags": ["Terpene","Terpinoid","peppermint", "sedative", "memory"],
			 "imageUrl1": "images/vapes/pinnacleprodlx1.png",
			 "imageUrl2": "images/vapes/pinnacleprodlx2.png",
			 "imageUrl3": "images/vapes/pinnacleprodlx3.png",
			 "imageUrl4": "images/vapes/pinnacleprodlx4.png",
			 "imageUrl5": "images/vapes/pinnacleprodlx5.png",
			 "imageUrl6": "images/vapes/pinnacleprodlx6.png",
			 "imageUrl7": "images/vapes/pinnacleprodlx7.png"
			},
			{"productId": 7,
			 "productName": "Ascent", //compName
			 "manufacturer" : "DaVinci  Vaporizers",
			 "price": 249.95,
			 "weight": "2 lbs",
			 "type": "Portable",
			 "manufacturersWarranty": "",
			 "temps": ["370 F", "395 F", "420 F", "445 F", "470 F"],
			 "descriptionDetailed1": "The Ascent Vaporizer takes what barriers you think portable vaporizers might be restricted by and smashes through them with ease. ",
			 "descriptionDetailed2": "Smaller than an iPhone, the Ascent vape still sports a bright OLED temperature and battery level display for a user-friendly experience despite its small size. ",
			 "descriptionDetailed3": "The Ascent's all glass vapor path and glass tube is the first of its kind, ditching silicone or plastic pathways for a cleaner, smoother experience using a glass on glass connection. ",
			 "descriptionDetailed4": "The lithium-ion battery has a very long battery life, giving you plenty of time to use the Ascent handheld vape away from home without having to bother with charging.",
			 "descriptionDetailed5": "No matter what the material, dry herbs or tobacco, essential oils and concentrates, the Ascent vaporizes them all with ease.",
			 "descriptionDetailed6": "Choose from three stylish designs including a stealth black finish for those who need to be discreet, or the exotic burl wood and croc skin designs for those who want a little flare. The DaVinci vaporizer showed us what a truly versatile portable vaporizer is capable of, now the Ascent is taking what we've learned and schooling us once more.",
			 "descriptionDetailed7": "DaVinci Vaporizers first hit the scene with the super popular DaVinci vape that, just like the man it was named after, was far from a one trick pony. After continued success with the their name-sake vape, DaVinci vaporizers has now unleashed their newest game-changer, the Ascent portable vaporizer.",
			 "descriptionAbbrev":  "The Ascent Vaporizer takes what barriers you think portable vaporizers might be restricted by and smashes through them with ease.",
			 "included" : "1 x Ascent Portable Vaporizer, 2 x Inner Glass Tubes, 2 x Glass Mouthpieces, 2 x Glass Oil Jars with Silicone Caps, 2 x Stir Tools, 2 x Mouthpiece Caps, 3 x Replacement Screens, 1 x Carrying Pouch, 1 x Battery Charger, 1 x Instruction Manual",	
			 "tags": ["Terpene","Terpinoid","peppermint", "sedative", "memory"],
			 "imageUrl1": "images/vapes/ascent1.png",
			 "imageUrl2": "images/vapes/ascent2.png",
			 "imageUrl3": "images/vapes/ascent3.png",
			 "imageUrl4": "images/vapes/ascent4.png",
			 "imageUrl5": "images/vapes/ascent5.png",
			 "imageUrl6": "images/vapes/ascent1.png",
			 "imageUrl7": "images/vapes/ascent2.png"
			},
			{"productId": 8,
			 "productName": "DaVinci", //compName
			 "manufacturer" : "DaVinci Vaporizers",
			 "price": 169.00,
			 "weight": "2 lbs",
			 "type": "Portable",
			 "manufacturersWarranty": "2 year warranty covering the heating element.",
			 "temps": ["370 F", "395 F", "420 F", "445 F", "470 F"],
			 "descriptionDetailed1": "The DaVinci Vaporizer was designed with a few goals in mind - portability, efficiency, ease of use, and a discreet vaporizing experience. Not only were these goals met, but they were exceeded. ",
			 "descriptionDetailed2": "The DaVinci Vape features an ergonomic hand held design for easy transportation. The herb chamber is revealed by snapping open the cap, which also gives you access to the tiny cleaning brush and stealth storage compartment. ",
			 "descriptionDetailed3": "The brush is great for cleaning the chamber and the storage area holds 3x the amount needed for a single use, virtually giving you an entire portable vaporizing station. ",
			 "descriptionDetailed4": "The lithium-ion rechargeable battery is yet another addition that adds to the DaVincis long list of features. The DaVincis battery life can last anywhere up to 1 hour of vaporization and is good for well over 1000 charge cycles! ",
			 "descriptionDetailed5": "On the face of the DaVinci portable vaporizer are 3 very simple buttons - power, temperature up and temperature down complete with LED digital temperature display for accurate vaporization. ",
			 "descriptionDetailed6": "The flexi-straw mouthpiece easily screws off of the DaVinci vape to make storing it in your pocket even more comfortable. The removable mouthpiece is made of a durable and flexible material so you can adjust the angle of the mouthpiece at will, further finding your comfort zone with the DaVinci vape. ",
			 "descriptionDetailed7": "The DaVinci truly has it all to make vaporizing on the go a fast, easy and hassle free experience anywhere you go.",
			 "descriptionAbbrev":  "The DaVinci Vaporizer was designed with a few goals in mind - portability, efficiency, ease of use, and a discreet vaporizing experience.",
			 "included" : "DaVinci Portable Vaporizer, Battery Charger, Cleaning Accessories, 3 Replacement Screens, Instruction Manual",	
			 "tags": ["Terpene","Terpinoid","peppermint", "sedative", "memory"],
			 "imageUrl1": "images/vapes/davinci1.png",
			 "imageUrl2": "images/vapes/davinci2.png",
			 "imageUrl3": "images/vapes/davinci3.png",
			 "imageUrl4": "images/vapes/davinci4.png",
			 "imageUrl5": "images/vapes/davinci1.png",
			 "imageUrl6": "images/vapes/davinci2.png",
			 "imageUrl7": "images/vapes/davinci3.png"
			},
			{"productId": 9,
			 "productName": "Plenty", //compName
			 "manufacturer" : "Storz & Bickel",
			 "price": 349.00,
			 "weight": "2 lbs",
			 "type": "Desktop",
			 "manufacturersWarranty": "3 year warranty restricted to normal use.",
			 "temps": ["370 F", "395 F", "420 F", "445 F", "470 F"],
			 "descriptionDetailed1": "The time has come, vaporizer powerhouses Storz & Bickel, creators of the hugely popular Volcano vaporizer, have released their newest vape called the Plenty Vaporizer. ",
			 "descriptionDetailed2": "The Plenty Vaporizer uses a double helix heat exchanger that not only heats up extremely fast, but also evenly vaporizes your material maximizing what you get out of even the smallest amount of material. ",
			 "descriptionDetailed3": "The Plenty Vape is hand held, although not portable, and features silent operation and a very lightweight yet extremely durable design. ",
			 "descriptionDetailed4": "The temperature gauge on the front of the Plenty is both accurate and extremely convenient without being digital, keeping the Plenty Vaporizer reasonably priced but just as easy to use as other digital vaporizers. ",
			 "descriptionDetailed5": "The coil that wraps around the whip tubing actually acts as a heat sink to stop your vapor from being overly hot. The vapor will cool as it travels through the whip tubing, delivering an extremely smooth and cool vapor. ",
			 "descriptionDetailed6": "This is Storz & Bickel's very first whip vaporizer and judging from their only other vaporizer, the Volcano vaporizer, you can expect a top of the line product when you buy the Plenty Vaporizer.",
			 "descriptionDetailed7": "The Plenty Vaporizer has a solid polycarbonate build with stainless steel cooling coil.",
			 "descriptionAbbrev":  "This is Storz & Bickel's very first whip vaporizer and judging from their only other vaporizer, the Volcano vaporizer, you can expect a top of the line product when you buy the Plenty Vaporizer.",
			 "included" : "Plenty Vaporizer, Storz & Bickel Custom Grinder, Filling Chamber, Mouthpiece, Cooling Coil, 3 Screens, Liquid Pad, 2 Whip Tubing Short, 2 Whip Tubing Long, Cleaning Brush, Herb Mill, Instruction Manual",	
			 "tags": ["Terpene","Terpinoid","peppermint", "sedative", "memory"],
			 "imageUrl1": "images/vapes/plenty1.png",
			 "imageUrl2": "images/vapes/plenty2.png",
			 "imageUrl3": "images/vapes/plenty3.png",
			 "imageUrl4": "images/vapes/plenty4.png",
			 "imageUrl5": "images/vapes/plenty5.png",
			 "imageUrl6": "images/vapes/plenty1.png",
			 "imageUrl7": "images/vapes/plenty2.png"
			},
			{"productId": 10,
			 "productName": "PUFFiT 2", //compName
			 "manufacturer" : "Discreet Vape",
			 "price": 97.00,
			 "weight": "",
			 "type": "Portable",
			 "manufacturersWarranty": "The PUFFiT 2 has a 1 year limited product warranty with a 90 day warranty on the battery.",
			 "temps": ["370 F", "395 F", "420 F", "445 F", "470 F"],
			 "descriptionDetailed1": "The PUFFiT 2 vaporizer looks just like an inhaler to provide quick and discreet vapor sessions without drawing any attention. ",
			 "descriptionDetailed2": "Now you can puff in public while remaining completely discreet. At just about 3.7 inches tall and just under 2 inches wide, the PUFFiT 2 is the same size as a regular inhaler. ",
			 "descriptionDetailed3": "This fits easily in your hand while vaping as well as your pocket or bag when traveling for ultimate discretion and portability. ",
			 "descriptionDetailed4": "To keep things discreet, the PUFFiT 2 contains no lighting indicators while heating up. Instead, Haptic Feedback technology lets you know when the PUFFiT 2 is hot and ready for vaping by vibrating. Just press the power button and subtle vibrations will let you know that the PUFFiT 2 is heating up and give a quiet buzz when it's ready to use. ",
			 "descriptionDetailed5": "The heating chamber is made of a high quality nickel plated copper for ultra conductivity. Load your favorite herbs or concentrated essential oils into the chamber with the appropriate screen and press the bower button to begin heating. ",
			 "descriptionDetailed6": "Automatic shutdown will turn the PUFFiT 2 off after 3 minutes to prevent over heating, just in case you forget. 4 temperatures ranging from 320 to 415 degrees Fahrenheit can be selected by pressing the power button to cycle through the settings. ",
			 "descriptionDetailed7": "A small LED on the back of the unit will indicate your selected temperature setting, while holding the power button down will turn the 4 bar LED into a battery life indicator. 4 bars means your fully charged and 1 bar means it's time to find your charger. A 2200mAh lithium ion battery provides long vape sessions and is easily recharged using the included USB cord. The PUFFiT 2's battery can be removed for replacement, so having a backup will keep your sessions going even longer. Draw true vapor quickly and easily without drawing attention with a little help from the PUFFiT 2 inhaler vaporizer.",
			 "descriptionAbbrev":  "Draw true vapor quickly and easily without drawing attention with a little help from the PUFFiT 2 inhaler vaporizer.",
			 "included" : "1 x PUFFiT 2 Portable Vaporizer, 1 x Silicone Heat Shield, 1 x USB Charger, 1 x Packing Tool, 1 x Concentrate Screens, 4 x Replacement Screens, 1 x User Manual",	
			 "tags": ["Portable","Puffit", "Discreet", "Herbs", "Oils", "Concentrates"],
			 "imageUrl1": "images/vapes/puffit1.png",
			 "imageUrl2": "images/vapes/puffit2.png",
			 "imageUrl3": "images/vapes/puffit3.png",
			 "imageUrl4": "images/vapes/puffit4.png",
			 "imageUrl5": "images/vapes/puffit5.png",
			 "imageUrl6": "images/vapes/puffit6.png",
			 "imageUrl7": "images/vapes/puffit1.png"
			},
			{"productId": 11,
			 "productName": "Vapir Rise 2.0", //compName
			 "manufacturer" : "Vapir Inc.",
			 "price": 249.95,
			 "weight": "",
			 "type": "Desktop",
			 "manufacturersWarranty": "Register for Full 1 Year Warranty covering defects in manufacturing, parts, and labor.",
			 "temps": ["370 F", "395 F", "420 F", "445 F", "470 F"],
			 "descriptionDetailed1": "The Vapir Rise 2.0 was developed to change the game in the world of table top herbal vaporizers.",
			 "descriptionDetailed2": "Vapir listened to the feedback from customers and spent the necessary time to painstakingly create a vaporizer that would truly raise the bar and set a new industry standard.",
			 "descriptionDetailed3": "For starters, the Vapir Rise is the first to incorporate HEPA air filtration into a vaporizer. A HEPA filter is a type of mechanical air filter; it works by forcing air through a fine mesh that traps harmful particles. This basically means that only pure, clean air is used to produce your vapor, assuring the absolute best vapor quality possible. ",
			 "descriptionDetailed4": "The Rise takes a step past other dual-functionality vaporizers. With the Rise you can inflate balloons, directly inhale using the whip or have a group session with the multi-user attachment. That's right, Vapir is the first company to make a multiple hose attachment which allows up to 4 users to draw from the Vapir Rise at once. ",
			 "descriptionDetailed5": "You get both a dry herb chamber and an essential oil chamber giving you the option of what materials to put inside. ",
			 "descriptionDetailed6": "The Vapir Rise sits on your table top and plugs directly into a standard wall outlet for power. Turning the unit on will illuminate the digital display and back-light the touch pad buttons, which is pretty helpful when using the Rise in low or dim lighting. ",
			 "descriptionDetailed7": "A multi-speed fan causes purified air to flow over the ceramic heating element and through a stainless steel vapor path to your materials. Set the temperature or fan speed to your personal preference using the seamless touchpad buttons on either side of the digital display. A clear display window shows your temperature setting and current fan speed which takes the guess work out of your session. Vapir has already laid the path for many of today's vaporizers with their revolutionary systems developed years ago. The new Vapir Rise carries this legacy into the future and is sure to impress even the most discriminating vapor enthusiast.",
			 "descriptionAbbrev":  "Vapir has already laid the path for many of today's vaporizers with their revolutionary systems developed years ago. The new Vapir Rise carries this legacy into the future and is sure to impress even the most discriminating vapor enthusiast.",
			 "included" : "1 x Vapir Rise Vaporizer, 1 x Power Cord, 1 x Herb Chamber, 1 x Aromatherapy Oil Chamber, 1 x Chamber Adapter with Plunger, 1 x Balloon Adapter with ON/OFF Valve, 1 x Inhalation Adapter, 1 x Multi-user Adapter, 1 x Hot Chamber Grabber, 3 x Inflation Balloons, 1 x Balloon Clamp, 2 x HEPA Air Filters, 2 x Large Mesh Screens (1 x installed), 2 x Small Mesh Screens (1 x installed), 1 x Silicone Tube (3.25 ft), 1 x X-Tip Mouthpiece, 1 x User Guide",	
			 "tags": ["Portable","Puffit", "Discreet", "Herbs", "Oils", "Concentrates"],
			 "imageUrl1": "images/vapes/vapirrise1.png",
			 "imageUrl2": "images/vapes/vapirrise2.png",
			 "imageUrl3": "images/vapes/vapirrise3.png",
			 "imageUrl4": "images/vapes/vapirrise4.png",
			 "imageUrl5": "images/vapes/vapirrise5.png",
			 "imageUrl6": "images/vapes/vapirrise1.png",
			 "imageUrl7": "images/vapes/vapirrise2.png"
			},
			{"productId": 12,
			 "productName": "Volcano Digit", //compName
			 "manufacturer" : "Storz & Bickel",
			 "price": 669.00,
			 "weight": "",
			 "type": "Desktop",
			 "manufacturersWarranty": "3 year warranty restricted to normal use.",
			 "temps": ["370 F", "395 F", "420 F", "445 F", "470 F"],
			 "descriptionDetailed1": "The Volcano Digit vaporizer's reputation precedes it in most cases and is equally respected by vaporizing newbies and pro vaporizer users alike. ",
			 "descriptionDetailed2": "The Digit is everything you loved about the Classic Volcano vaporizer, with the added convenience and stye of a precise digital temperature control and display. ",
			 "descriptionDetailed3": "The LED temperature read out accurately shows both the current temperature of the vaporizer and the temperature level you have it set to reach, so you always know exactly when the Volcano Digit is ready to go. ",
			 "descriptionDetailed4": "The Volcano's patented balloon delivery system is unmatched in terms of efficiency and ease of use, with both the Easy Valve and Solid Valve systems providing dependable and consistent vaporization of herbs or essential oils at a moment's notice.",
			 "descriptionDetailed5": "The Volcano is made of aluminum with an aluminum heating element.",
			 "descriptionDetailed6": "The Volcano has a 3 year warranty restricted to normal use.",
			 "descriptionDetailed7": "",
			 "descriptionAbbrev":  "The Volcano Digit vaporizer's reputation precedes it in most cases and is equally respected by vaporizing newbies and pro vaporizer users alike.",
			 "included" : "Volcano Digit Vaporizer, Storz & Bickel Custom Grinder, 5 Vapor Balloons with Mouthpiece, Volcano Air Filter Set, Easy Valve Filling Chamber with Cap, Easy Valve Screen Set, Cleaning Brush, 1 Liquid Pad and 3 Clips, Instruction Manual",	
			 "tags": ["Desktop","Volcano", "Herbs", "Oils", "Concentrates"],
			 "imageUrl1": "images/vapes/volcano2.png",
			 "imageUrl2": "images/vapes/volcano3.png",
			 "imageUrl3": "images/vapes/volcano1.png",
			 "imageUrl4": "images/vapes/volcano4.png",
			 "imageUrl5": "images/vapes/volcano5.png",
			 "imageUrl6": "images/vapes/volcano6.png",
			 "imageUrl7": "images/vapes/volcano7.png"
			},
			{"productId": 13,
			 "productName": "Silver Surfer Vaporizer", //compName
			 "manufacturer" : "7th Floor",
			 "price": 269.99,
			 "weight": "",
			 "type": "Desktop",
			 "manufacturersWarranty": "3 year warranty restricted to normal use.",
			 "temps": ["370 F", "395 F", "420 F", "445 F", "470 F"],
			 "descriptionDetailed1": "Silver Surfer is a highly customizable, top performing desktop vaporizer. Choose from a wide array of colors, designs, and heater cover options to create your perfect vaporizer.",
			 "descriptionDetailed2": "Every Silver Surfer features a hand blown glass temperature dial, heater cover, and wand, each individually crafted in Colorado Springs, Colorado.",
			 "descriptionDetailed3": "The Silver Surfer Vaporizer utilizes a high quality ceramic heating element and glass-on-glass components for high quality vapor.",
			 "descriptionDetailed4": "Standard Glass heater cover and wand allow you to manipulate where hot air passes through your blends. Simply angle the wand in various positions for thorough vaporization without the need to stir your blends.",
			 "descriptionDetailed5": "Ground glass heater cover and wand allow for hands free vaporization. No need to hold your wand up to the heater cover! This wand fits directly into the heater cover for a perfect seal every time.",
			 "descriptionDetailed6": "Spherical ground glass heater cover and wand allow for a perfect ground glass seal with the ability to angle the wand in various positions. This option provides thorough vaporization without the need to stir your blends.",
			 "descriptionDetailed7": "Turn on Silver Surfer and set to your desired temperature. Once temperature has been reached, load finely ground blends into the glass wand and connect to the glass heater cover. Begin to draw at a medium to fast pace for best results.",
			 "descriptionAbbrev":  "The Volcano Digit vaporizer's reputation precedes it in most cases and is equally respected by vaporizing newbies and pro vaporizer users alike.",
			 "included" : "Silver Surfer Vaporizer, Whip / Wand Assembly, Glass Mouthpiece, 3 ft Whip Tubing, Glass Wand, 3x Replacement Screens, Stir Tool, Padded Travel Bag, User Manual",	
			 "tags": ["Desktop","Volcano", "Herbs", "Oils", "Concentrates"],
			 "imageUrl1": "images/vapes/ssv_colors.png",
			 "imageUrl2": "images/vapes/ssv2.png",
			 "imageUrl3": "images/vapes/ssv_ceramic_element.png",
			 "imageUrl4": "images/vapes/SSVStdglass2.png",
			 "imageUrl5": "images/vapes/SSV_groundglass2.png",
			 "imageUrl6": "images/vapes/ssv4.png",
			 "imageUrl7": "images/vapes/ssv_complete_set.png"
			},
			{"productId": 14,
			 "productName": "The Da Buddah Vaporizer", //compName
			 "manufacturer" : "7th Floor",
			 "price": 190.00,
			 "weight": "",
			 "type": "Desktop",
			 "manufacturersWarranty": "3 year warranty restricted to normal use.",
			 "temps": ["370 F", "395 F", "420 F", "445 F", "470 F"],
			 "descriptionDetailed1": "Featuring the same superior craftsmanship found in the Silver Surfer, every Da Buddha vaporizer is designed and assembled in the USA. ",
			 "descriptionDetailed2": "Turn on Da Buddha and set to your desired temperature. Once temperature has been reached, load finely ground blends into glass wand and connect to the glass heater cover. Begin to draw at a medium to fast pace for best results.",
			 "descriptionDetailed3": "For best functionality, be sure to clean and maintain Da Buddha regularly. ",
			 "descriptionDetailed4": "All glass components can be soaked in isopropyl alcohol.",
			 "descriptionDetailed5": "Replace stainless steel screens and whip tubing often for best vapor.",
			 "descriptionDetailed6": "Da Buddha utilizes a high quality ceramic heating element and glass-on-glass components for high quality vapor production.",
			 "descriptionDetailed7": "For Aromatic Blends, Ceramic Heating Element, Glass-on-Glass Components, Hands Free Whip Delivery System, Analog Temperature Dial, Carrying Case Included.",
			 "descriptionAbbrev":  "",
			 "included" : "Da Buddha Vaporizer, Whip / Wand Assembly, Glass Mouthpiece, 3ft Whip Tubing, Glass Wand, 3x Replacement Screens, Stir Tool, Padded Hemp Travel Bag, User Manual",	
			 "tags": ["Desktop","Volcano", "Herbs", "Oils", "Concentrates"],
			 "imageUrl1": "images/vapes/dabuddah1.png",
			 "imageUrl2": "images/vapes/dabuddah2.png",
			 "imageUrl3": "images/vapes/dabuddah3.png",
			 "imageUrl4": "images/vapes/dabuddah4.png",
			 "imageUrl5": "images/vapes/dabuddah5.png",
			 "imageUrl6": "images/vapes/dabuddah1.png",
			 "imageUrl7": "images/vapes/dabuddah2.png"
			},
			{"productId": 15,
			 "productName": "The Magic flight Launch Box", //compName
			 "manufacturer" : "",
			 "price": 119.00,
			 "weight": "",
			 "type": "Portable",
			 "manufacturersWarranty": "3 year warranty restricted to normal use.",
			 "temps": ["370 F", "395 F", "420 F", "445 F", "470 F"],
			 "descriptionDetailed1": "Beautifully crafted and intuitively designed, the Magic-Flight Launch Box, is powered by a rechargeable AA NiMH battery and holds the title of the world's smallest electronic vaporizer, making it the perfect option for low-profile vaporizing on-the-go.",
			 "descriptionDetailed2": "Each Launch Box vaporizer represents the effort of many skilled craftsman. Three wood choices are available, along with five different Laser Etch models.",
			 "descriptionDetailed3": "The Launch Box has many accessories to choose from such as the Power Adapter 2.0 for extra power at home or in your vehicle, Water Piece Whip for water cooled vapor, and Concentrate Tray for using solid concentrates or liquids.",
			 "descriptionDetailed4": "To begin vaporization, slide back the Launch Box lid and load blends loosely into the trench. Close the lid and press the charged battery into the box to activate the stainless steel heating rod. An orange indicator light under the lid will light to show you the conduction process is taking place and will be ready-to-use in 3 to 5 seconds.",
			 "descriptionDetailed5": "A unique vapor channel flow system delivers vapor directly to the user minimizing condensation. Draw slowly from the glass steam for best results. Release pressure on battery two-thirds through draw to prevent overheating.",
			 "descriptionDetailed6": "After cooling, simply empty the trench and brush gently using the cleaning brush. Gently blow into trench to remove any remaining dust. The screen may discolor after use.",
			 "descriptionDetailed7": "To clean, gently wipe screen with a 91% Isopropyl Alcohol. Avoid contact of Isopropyl alcohol with trench.",
			 "descriptionAbbrev":  "The Volcano Digit vaporizer's reputation precedes it in most cases and is equally respected by vaporizing newbies and pro vaporizer users alike.",
			 "included" : "Magic-Flight Launch Box, 2x Rechargeable NiMH Glyph Batteries With Caps, Battery Charger, Felt-lined Decorative Tin, Glass Draw Stem, Cleaning Brush, User Manual",	
			 "tags": ["Desktop","Volcano", "Herbs", "Oils", "Concentrates"],
			 "imageUrl1": "images/vapes/mflb1.png",
			 "imageUrl2": "images/vapes/mflb2.png",
			 "imageUrl3": "images/vapes/mflb3.png",
			 "imageUrl4": "images/vapes/mflb4.png",
			 "imageUrl5": "images/vapes/mflb1.png",
			 "imageUrl6": "images/vapes/mflb2.png",
			 "imageUrl7": "images/vapes/mflb3.png"
			},
			{"productId": 16,
			 "productName": "The Extreme Q", //compName
			 "manufacturer" : "Arizer",
			 "price": 239.00,
			 "weight": "",
			 "construction": "Desktop",
			 "manufacturersWarranty": "3 year warranty restricted to normal use.",
			 "temps": ["370 F", "395 F", "420 F", "445 F", "470 F"],
			 "descriptionDetailed1": "The Extreme Q, by Canadian manufacturer Arizer, is a multi-functional, feature-rich, desktop vaporizer. For efficient and user-friendly functionality, few vaporizers can compete with the Extreme Q. This “jack-of-all-trades” vaporizer produces superior vapor quality, delivered via your choice of balloon (forced air) or whip (direct draw).",
			 "descriptionDetailed2": "Choose your vapor experience! The Extreme Q is able to deliver vapor in a multitude of ways.",
			 "descriptionDetailed3": "Direct Draw via Whip: Draw in vapor through the included 3' Long Whip.",
			 "descriptionDetailed4": "Forced Air Assisted Whip: Give your lungs a break! Let the EQ's fan create and deliver vapor for you through the included 3' Long Whip.",
			 "descriptionDetailed5": "Forced Air Balloon Delivery: Attach the Balloon Assembly and watch as the Extreme Q's fan fills your balloon with vapor. Detach the balloon when full, draw and enjoy!",
			 "descriptionDetailed6": "All functions can be performed via the included remote control, or on the unit itself through the digital display. It's fully adjustable temperature can be set in one degree increments, from 122 degrees F – 500 degrees F (50 degrees C – 260 degrees C). The user-set automatic shut-off feature allows you to set and forget; your Extreme Q will automatically shut down at a user defined time.",
			 "descriptionDetailed7": "The Extreme Q offers a powerful yet energy efficient ceramic heating element and glass-on-glass components for clean vapor",
			 "descriptionAbbrev":  "The Extreme Q offers a powerful yet energy efficient ceramic heating element and glass-on-glass components for clean vapor",
			 "included" : "Extreme Q Vaporizer, Remote Control, 2x Glass Cyclone Bowls with Flat Screens, 3 foot Whip Tubing, Glass Whip Mouthpiece, Glass Elbow Adapter with Dome Screen, Pre-Attached Mini Whip for Balloon, Balloon Assembly, 2x Balloons, 2x Glass Balloon Mouthpieces, 2x O-Rings, Glass Stir Tool, Flat Screen, Dome Screen, Glass Potpourri Dish with Potpourri Sample, 110/220V Power Supply, User Manual ",	
			 "tags": ["Desktop","Volcano", "Herbs", "Oils", "Concentrates"],
			 "imageUrl1": "images/vapes/extremeq1.png",
			 "imageUrl2": "images/vapes/extremeq2.png",
			 "imageUrl3": "images/vapes/extremeq3.png",
			 "imageUrl4": "images/vapes/extremeq4.png",
			 "imageUrl5": "images/vapes/extremeq5.png",
			 "imageUrl6": "images/vapes/extremeq6.png",
			 "imageUrl7": "images/vapes/extremeq7.png"
			},
			{"productId": 17,
			 "productName": "The Haze", //compName
			 "manufacturer" : "",
			 "price": 249.99,
			 "weight": "",
			 "type": "Portable",
			 "manufacturersWarranty": "3 year warranty restricted to normal use.",
			 "temps": ["370 F", "395 F", "420 F", "445 F", "470 F"],
			 "descriptionDetailed1": "Haze is the first portable vaporizer with dual chambers, allowing vaporization of dried blends, solid concentrates, and liquids interchangeably and simultaneously.",
			 "descriptionDetailed2": "Every Haze Vaporizer is crafted with advanced, patented heating technology for rapid heat up time and features a long-lasting, rechargeable, user-replaceable Lithium-ion battery.",
			 "descriptionDetailed3": "Haze features both stainless steel convection screen and conduction screens, allowing for a more personal vaporizing experience. The conduction screen allows dry materials to have controlled exposure to the heating chamber; the convection screen is surrounded by four walls of stainless steel, but allows no direct contact between materials and the heating chamber.",
			 "descriptionDetailed4": "Insert preferred screen and materials into one or both heating chambers. Use the top switch to power on and select either chamber A or chamber B.",
			 "descriptionDetailed5": "Use the temperature selection button on the top of Haze to switch between 4 temperature options.",
			 "descriptionDetailed6": "When powered on, the LED light will blink several times to indicate that the device is in the process of heating.",
			 "descriptionDetailed7": "When the oven is at the selected temperature, the LED lights will remain solid, letting you know Haze is ready for use.",
			 "descriptionAbbrev":  "Haze is the first portable vaporizer with dual chambers, allowing vaporization of dried blends, solid concentrates, and liquids interchangeably and simultaneously.",
			 "included" : "Haze Vaporizer, Stainless Steel Mouthpiece, Glass Mouthpiece, 2x All-Purpose Cans, 2x Conduction Screens, 2x Convection Screens, 2x Haze Batteries, Wall Charger, Cleaning Tool, Material Tool, User Manual",	
			 "tags": ["Desktop","Volcano", "Herbs", "Oils", "Concentrates"],
			 "imageUrl1": "images/vapes/haze1.png",
			 "imageUrl2": "images/vapes/haze2.png",
			 "imageUrl3": "images/vapes/haze3.png",
			 "imageUrl4": "images/vapes/haze4.png",
			 "imageUrl5": "images/vapes/haze5.png",
			 "imageUrl6": "images/vapes/haze6.png",
			 "imageUrl7": "images/vapes/haze7.png"
			},
			{"productId": 18,
			 "productName": "The Firefly", //compName
			 "manufacturer" : "",
			 "price": 269.95,
			 "weight": "",
			 "construction": "Portable",
			 "manufacturersWarranty": "3 year warranty restricted to normal use.",
			 "temps": ["370 F", "395 F", "420 F", "445 F", "470 F"],
			 "descriptionDetailed1": "The revolutionary Firefly is the fastest, easiest, most satisfying way to enjoy aromatic blends. Firefly heats instantly at the touch of a button, so it's always ready. There's nothing faster.",
			 "descriptionDetailed2": "The Firefly features the most advanced vaporization technology available. The Firefly's dynamic convection heating technology utilizes sophisticated software that raises the vapor temperature from 100 °F to 400 °F over the course of a smooth 10 seconds. Enjoy aromas the moment they are vaporized. If you prefer lighter vapor, simply draw for a shorter time; if you prefer richer vapor, draw longer. You are in complete control. Enjoy a perfect draw every time.",
			 "descriptionDetailed3": "The Firefly is easy to load and clean, due to its magnetic lid and borosilicate glass heating chamber. The heating chamber's outer walls are innwardly-sloped for easy loading and unloading.",
			 "descriptionDetailed4": "The magnetic lid features an open vapor path that is fully exposed when the lid is removed, so it can be quickly brushed clean or wiped with a damp cloth.The high-power Lithium-ion battery recharges in less than 45 minutes and delivers over 40 rich draws per charge. ",
			 "descriptionDetailed5": "The battery can be charged directly in the Firefly or in the optional external charger.",
			 "descriptionDetailed6": "The borosilicate glass heating chamber and stainless metal vapor path keeps aromas completely pure. Sleek and compact, Firefly fits beautifully in your hand. The elegant metal and glass chassis feels like a warm river stone, creating a feeling of luxury and quality.",
			 "descriptionDetailed7": "The battery can be easily swapped in a few seconds, allowing you to insert a fresh battery from the external charger with no downtime.",
			 "descriptionAbbrev":  "The Volcano Digit vaporizer's reputation precedes it in most cases and is equally respected by vaporizing newbies and pro vaporizer users alike.",
			 "included" : "Firefly Vaporizer, High Power Rechargeable Lithium-ion Battery, Cleaning Kit, Soft Case, User Manual",	
			 "tags": ["Desktop","Volcano", "Herbs", "Oils", "Concentrates"],
			 "imageUrl1": "images/vapes/firefly1.png",
			 "imageUrl2": "images/vapes/firefly2.png",
			 "imageUrl3": "images/vapes/firefly3.png",
			 "imageUrl4": "images/vapes/firefly4.png",
			 "imageUrl5": "images/vapes/firefly1.png",
			 "imageUrl6": "images/vapes/firefly2.png",
			 "imageUrl7": "images/vapes/firefly3.png"
			},
			{"productId": 19,
			 "productName": "The Hot Box", //compName
			 "manufacturer" : "",
			 "price": 109.99,
			 "weight": "",
			 "type": "Desktop",
			 "manufacturersWarranty": "5 year warranty",
			 "temps": ["370 F", "395 F", "420 F", "445 F", "470 F"],
			 "descriptionDetailed1": "The Hot Box is a simple, yet effective desktop vaporizer with an array color and design options. Hand made in the USA, the Hot Box is reliable, durable, and comes standard with a 5 year warranty.",
			 "descriptionDetailed2": " Hot Box utilizes a special ceramic nichrome heating element that is ready for use in just minutes.",
			 "descriptionDetailed3": "Choose between Standard, Ground Glass (hands free), and many colors and designs options, including Stone, Tile, Artist Series, and many more.",
			 "descriptionDetailed4": "Turn on Hot Box and allow it to heat for 10 minutes, ensuring optimal vaporization temperatures. Finely grind your blends and load them into the glass wand. Make sure to fill your wand no more than 1/3 capacity for best results. Insert the wand onto the glass heater cover and begin to draw.",
			 "descriptionDetailed5": "Your rate of draw will affect the temperature. A slower draw speed will raise the temperature; a faster draw speed will lower the temperature.",
			 "descriptionDetailed6": "For optimal performance, be sure to clean your Hot Box regularly. Replace screens and whip tubing as needed.",
			 "descriptionDetailed7": "Glass components can be cleaned with isopropyl alcohol (91% or higher recommended). Never clean the device while it is still plugged in.",
			 "descriptionAbbrev":  "The Volcano Digit vaporizer's reputation precedes it in most cases and is equally respected by vaporizing newbies and pro vaporizer users alike.",
			 "included" : "Hot Box Vaporizer, Whip / Wand Assembly, Glass 2-Piece Wand, .5' Whip Tubing, Glass Mouthpiece, User Manual",	
			 "tags": ["Desktop","Volcano", "Herbs", "Oils", "Concentrates"],
			 "imageUrl1": "images/vapes/hotbox1.png",
			 "imageUrl2": "images/vapes/hotbox2.png",
			 "imageUrl3": "images/vapes/hotbox3.png",
			 "imageUrl4": "images/vapes/hotbox4.png",
			 "imageUrl5": "images/vapes/hotbox5.png",
			 "imageUrl6": "images/vapes/hotbox1.png",
			 "imageUrl7": "images/vapes/hotbox2.png"
			},
			{"productId": 20,
			 "productName": "The Pax", //compName
			 "manufacturer" : "Ploom",
			 "price": 199.99,
			 "weight": "",
			 "type": "Portable",
			 "manufacturersWarranty": "3 year warranty restricted to normal use.",
			 "temps": ["370 F", "395 F", "420 F", "445 F", "470 F"],
			 "descriptionDetailed1": "Pax by Ploom is a premium portable vaporizer that conveniently fits in your pocket and delivers pure, clean vapor. Small and lightweight, Pax is easily taken out and about and heats in under a minute. Its refined design is sleek, stylish, and durable, making Pax the ultimate choice for on-the-go vaporization.",
			 "descriptionDetailed2": "Load aromatic blends into the Pax oven and lightly tamp down. Power on Pax by pressing in the retractable mouthpiece and allowing it to spring in to the on position. Pax indicator light will turn green once fully heated and ready for use.",
			 "descriptionDetailed3": "Remove mouthpiece to reveal temperature button to cycle through presets as needed. ",
			 "descriptionDetailed4": "Pax features 3 temperature presets for optimal vaporization. Yellow...370F (188C), Orange...390F (199C), Red...410F (210C)",
			 "descriptionDetailed5": "Pax utilizes a Lithium-ion rechargeable internal battery that charges in under 2 hours and lasts for up to 2 hours of continuous use. Drop Pax onto the included charging dock for easy charging. While powered on, shake Pax to reveal battery life indicators - Green...Full Battery, Yellow...Partially Charged, Red...Low Battery.",
			 "descriptionDetailed6": "Pax is a precision device and should be cleaned on a regular basis. While Pax is powered on, remove mouthpiece and soak in soap and water. Let mouthpiece dry before replacing. To clean Pax body, remove mouthpiece and oven lid. Moisten cleaning tool with supplied alcohol wipe.",
			 "descriptionDetailed7": "Starting from the mouthpiece end, insert moistened cleaning tool into the vapor pathway, pushing out the oven screen. Floss Pax with cleaning tool. To clean Pax oven, oven lid, and screen, use a moistened bent cleaning tool or moistened cotton swab to remove residue. Screens will need to be replaced as necessary. Apply lubricant after every cleaning session.",
			 "descriptionAbbrev":  "Pax by Ploom is a premium portable vaporizer that conveniently fits in your pocket and delivers pure, clean vapor.",
			 "included" : "Pax Vaporizer, Screen, Mouthpiece, Oven Lid, Charging Dock, Charging Cord, 5x Cleaning Tools, 5x Cleaning Wipes, 2x Lubricant Packet, User Manual",	
			 "tags": ["Desktop","Volcano", "Herbs", "Oils", "Concentrates"],
			 "imageUrl1": "images/vapes/pax1.png",
			 "imageUrl2": "images/vapes/pax2.png",
			 "imageUrl3": "images/vapes/pax3.png",
			 "imageUrl4": "images/vapes/pax4.png",
			 "imageUrl5": "images/vapes/pax1.png",
			 "imageUrl6": "images/vapes/pax2.png",
			 "imageUrl7": "images/vapes/pax3.png"
			}			
		];

		//temporary setup for vape list using tips array used by tipresource to be read by tipView and tipListView
		var tips = [
			{"tipId": 1,
			 "tipCatagory":"Portable", 
			 "tipName": "The Crafty",
			 "manufacturer" : "Storz & Bickels",
			 "price": 399.00,
			 "weight": "N.A.",
			 "manufacturersWarranty": "3 year warranty restricted to normal use.",
			 "temps": ["370 F", "395 F", "420 F", "445 F", "470 F",
			 		   "370 C", "395 C", "420 C", "445 C", "470 C"],
			 "included":["1 x Crafty Vaporizer", 
			 			  "1 x Storz & Bickel Custom Grinder", 
			 			  "1 x Storz & Bickel Custom Filling Tool", 
			 			  "1 x Power Adapter with USB Cable", 
			 			  "1 x Liquid Pad", 
			 			  "3 x Spare Screens, 1 x Cleaning Brush", 
			 			  "1 x Set of Spare Seal Rings", 
			 			  "1 x Instructions for Use"],
			 "tipDescriptionAbbrev": "Enjoy the power of the world's most renowned vaporizer company in the palm of your hand with the Crafty vaporizer.",
			 "tipDescriptionDetailed":["The Crafty vaporizer packs the power of Storz & Bickels' German engineered heating technology into an uber portable vaping unit that can be controlled from your smartphone. Now you can enjoy the efficient herbal vaporizing experience the Volcano and Plenty are known for, on the go.", 
			 						   "At less than 4.5 inches tall, 2.25 inches wide, and 1.3 inches thick, the Crafty can fit discreetly in your pocket for travel and fit firmly in the hand when in use making it the perfect portable vaping companion.",
			 						   "With just one button and 2 temperature settings, the Crafty vaporizer is extremely easy to use and can reach vaporization temperatures of 356 degrees F with the press of a button. Double clicking the button will activate the boost level of 383 degrees F, for those looking for a little more kick to their vapor quality.",
			 						   "An LED on the bottom of the Crafty will switch from red to green and a quick double vibration will let you know when you have reached your desired temperature setting, so you know when you're ready to vaporize.",
			 						   "The Crafty Remote Control app can be downloaded to both Android and iPhone devices and will connect to your Crafty via Bluetooth connection. The app will allow you to adjust the temperature settings, as well as the LED brightness and vibration settings.",
			 						   "The top of the Crafty vaporizer can be removed to load your herbs and makes cleaning the heating chamber a breeze. The swivel style mouthpiece can be turned in for compact storage and twisted outward when you're ready to vape, making the Crafty that much easier to use on the move.", 
			 						   "Enjoy the power of the world's most renowned vaporizer company in the palm of your hand with the Crafty vaporizer."],
			 "tags": ["crafty","portable","handheld","storz-bickel"],
			 "imageUrl": ["images/vapes/crafty1.png",
 		 	 			  "images/vapes/crafty2.png",
		 	  			  "images/vapes/crafty3.png",
		 	 			  "images/vapes/crafty1.png",
 		 	 			  "images/vapes/crafty_app2.png",
		 	  			  "images/vapes/crafty_apart.png",
		 	  			  "images/vapes/crafty_ipad.png"]
			},
			{"tipId": 2,
			 "tipCatagory":"Portable", 
			 "tipName": "Mighty",
			 "manufacturer" : "Storz & Bickels",
			 "price": 469.00,
			 "weight": "",
			 "manufacturersWarranty": "2 year warranty restricted to normal use, with a lifetime warranty on the heater.",
			 "temps": ["370 F", "395 F", "420 F", "445 F", "470 F",
			 		   "370 C", "395 C", "420 C", "445 C", "470 C"],
			 "included":["1 x Mighty Vaporizer", 
			 			  "1 x Storz & Bickel Custom Grinder", 
			 			  "1 x Storz & Bickel Custom Filling Tool", 
			 			  "1 x Power Adapter with USB Cable", 
			 			  "1 x Liquid Pad", 
			 			  "3 x Spare Screens, 1 x Cleaning Brush", 
			 			  "1 x Set of Spare Seal Rings", 
			 			  "1 x Instructions for Use"],
			"tipDescriptionAbbrev": "The Mighty Vaporizer is the first of the portable vaporizers from German vaping masterminds Storz & Bickel, the same creators of the Volcano and Plenty vaporizers.",
			 "tipDescriptionDetailed":["The Mighty Vaporizer is the first of the portable vaporizers from German vaping masterminds Storz & Bickel, the same creators of the Volcano and Plenty vaporizers. Their German engineered heaters are the most efficient in the game, and that power is now available in the palm of your hand.",
			 						   "The Mighty vape provides a user friendly interface with the classic orange power button and simple plus and minus controls which raise or lower the temperature to your preference. Just set your desired temperature and the Mighty vape will begin to heat up to your preferred vaping temperature. ",
			 						   "The digital LED display will show the current temperature, destination temperature, and battery level. Once the Mighty reaches vaping temperatures the display screen will let you know and the unit will emit a vibration so that you know it is ready for use. ",
			 						   "A swivel mouthpiece easily pulls out for vaping and tucks away neatly when not in use, making it perfect fro throwing in your pocket. ",
			 						   "The top of the Mighty can easily be removed for loading your herbs and makes cleaning and upkeep extremely easy. The heater can reach temperatures ranging from 104 - 410 degrees F to efficiently vaporize your dry herbs. ",
			 						   "The ribbed design of the body creates a cool feel in the hand while making the vaporizer extremely light and comfortable to use.", 
			 						   "The Mighty vaporizer is powered by 2 internal lithium ion batteries which provide a long use time. The batteries are separated from the heater to ensure a safe environment and longer overall lifespan of the Mighty vaporizer itself. The Mighty vape can easily be recharged by connecting to any standard wall outlet using the included charging adapter. Shrink the power of the world's most popular and efficient vaporizers and enjoy pure vapor in the palm of your hand with the Mighty vaporizer."],			 
			 "tags": ["Mighty","portable","handheld","storz-bickel"],
			 "imageUrl": ["images/vapes/mighty1.png",
			 			  "images/vapes/mighty2.png",
		 	 			  "images/vapes/mighty3.png",
		 	 			  "images/vapes/mighty1.png",
 		 	 			  "images/vapes/mighty2.png",
		 	 			  "images/vapes/mighty3.png",
		 	 			  "images/vapes/mighty1.png"]
			},
			{"tipId": 3,
			 "tipCatagory":"Desktop", 
			 "tipName": "Plenty",
			 "manufacturer" : "Storz & Bickels",
			 "price": 349.00,
			 "weight": "",
			 "manufacturersWarranty": "3 year warranty restricted to normal use.",
			 "temps": ["0-480 F"],
			 "included":["Plenty Vaporizer", 
			 			  "Custom Grinder", 
			 			  "Custom Filling Tool", 
			 			  "Power Adapter with USB Cable", 
			 			  "Liquid Pad", 
			 			  "3 Spare Screens", 
			 			  "1 Cleaning Brush", 
			 			  "1 Set of Spare Seal Rings", 
			 			  "Instructions for Use"],
			 "tipDescriptionAbbrev": "This is Storz & Bickel's very first whip vaporizer and judging from their only other vaporizer, the Volcano vaporizer, you can expect a top of the line product when you buy the Plenty Vaporizer.",
			 "tipDescriptionDetailed":["The time has come, vaporizer powerhouses Storz & Bickel, creators of the hugely popular Volcano vaporizer, have released their newest vape called the Plenty Vaporizer. ",
			 						   "The Plenty Vaporizer uses a double helix heat exchanger that not only heats up extremely fast, but also evenly vaporizes your material maximizing what you get out of even the smallest amount of material. ",
			 						   "The Plenty Vape is hand held, although not portable, and features silent operation and a very lightweight yet extremely durable design. ",
			 						   "The temperature gauge on the front of the Plenty is both accurate and extremely convenient without being digital, keeping the Plenty Vaporizer reasonably priced but just as easy to use as other digital vaporizers. ",
			 						   "The coil that wraps around the whip tubing actually acts as a heat sink to stop your vapor from being overly hot. The vapor will cool as it travels through the whip tubing, delivering an extremely smooth and cool vapor. ",
			 						   "This is Storz & Bickel's very first whip vaporizer and judging from their only other vaporizer, the Volcano vaporizer, you can expect a top of the line product when you buy the Plenty Vaporizer.",
			 						   "The Plenty Vaporizer has a solid polycarbonate build with stainless steel cooling coil."],
			 "tags": ["plenty","desktop","handheld","storz-bickel"],
			 "imageUrl": ["images/vapes/plenty1.png",
						  "images/vapes/plenty2.png",
						  "images/vapes/plenty3.png",
						  "images/vapes/plenty4.png",
						  "images/vapes/plenty5.png",
						  "images/vapes/plenty1.png",
						  "images/vapes/plenty2.png"]
			},
			{"tipId": 4,
			 "tipCatagory":"Portable", 
			 "tipName": "Pinnacle Pro",
			 "manufacturer" : "VaporBlunt",
			 "price": 188.00,
			 "weight": "",
			 "manufacturersWarranty": "The Pinnacle Pro DLX has a 1 year limited product warranty which covers your vaporizer against defects in manufacturing, parts and labor. 90 day limited warranty on the battery.",
			 "temps": ["370 F", "395 F", "420 F", "445 F", "470 F"],
			 "included" : ["Pinnacle Pro Portable Vaporizer",
			 			   "Chamber Cap", 
			 			   "PonG Adapter w/ Glass Vapor Path", 
			 			   "2 Dry Herb Filling Chambers", 
			 			   "1 Wax/Oil Filling Chamber", 
			 			   "Charger", 
			 			   "Cleaning Brush", 
			 			   "Wire Pipe Cleaner", 
			 			   "Bamboo Cleaning Stick", 
			 			   "Standard Mouthpiece", 
			 			   "Quick Start Guide"],
			 "tipDescriptionAbbrev": "The Pinnacle quickly became one of the most popular portable vaporizers for first time users and vape veterans alike.",
			 "tipDescriptionDetailed":["The Pinnacle quickly became one of the most popular portable vaporizers for first time users and vape veterans alike because of its easy to use functionality, superb portability, and excellent vapor quality.",
			 						   "The creators, VaporBLUNT, have now taken this tiny tower of power and made vast improvements that are taking the Pinnacle to the next level. ",
			 						   "VaporBLUNT's Pinnacle Pro vaporizer is still the same small size, measuring about 5 inches tall and less than an inch wide, making it a great fit in the hand, pocket, purse or bag. ",
			 						   "The Pinnacle Pro vaporizer even keeps the same 1 button design which turns the unit on, toggles between its temperature settings, and then turns the unit off. ",
			 						   "What has changed with the upgraded Pinnacle, however, is that it now has 5 temperature settings, which is 3 more than the original version. These temperatures range from 370 degrees to 470 degrees F in 25 degree increments providing ultimate control over your personal vaporization settings. ",
			 						   "The temperature setting is indicated using a color coding system displayed by the 5 LED lights on the front of the Pinnacle Pro. The first 4 temperatures are so that you can find the perfect temperature for your dry herbal blend, while the 5th and highest temperature is intended for oil and concentrate vaporization. ",
			 						   "That's right, the Pinnacle Pro has the ability to vaporize dry herbs and concentrates right out of the box by simply changing the included bullet in the chamber. Another small, yet very efficient change is the Pro's new battery level indicator. By pressing the button just once the LED lights will light up to display how much battery level the Pinnacle has left. This pint size power house is an excellent choice as a first vaporizer or as an upgrade or addition to your current vaporizer collection. Reach the pinnacle of portable vaporization like a pro with VaporBLUNT's Pinnacle Pro vaporizer."],
			 "tags": ["Terpene","Terpinoid","peppermint", "sedative", "memory"],
			 "imageUrl": ["images/vapes/pinnaclepro1.png",
			  			  "images/vapes/pinnaclepro2.png",
			  			  "images/vapes/pinnaclepro3.png",
			  			  "images/vapes/pinnaclepro4.png",
			  			  "images/vapes/pinnaclepro5.png",
			  			  "images/vapes/pinnaclepro6.png",
			  			  "images/vapes/pinnaclepro7.png"]
			},
			{"tipId": 5,
			 "tipCatagory":"Pen", 
			 "tipName": "V2Pro Series 3",
			 "manufacturer" : "V2",
			 "price": 59.99,
			 "weight": "",
			 "manufacturersWarranty": "We warrant that your V2 Pro product will be free from defects in material and workmanship under normal use and service for six months.",
			 "temps": ["350 F", "375 F"],
			 "included" : ["E-Liquid cartridge",
			 			   "V2Pro Vaporizer", 
			 			   "USB Charger", 
			 			   "User Manual" 
			 			   ],
			 "tipDescriptionAbbrev": "The first pen that can actually vape dry herbs.",
			 "tipDescriptionDetailed":["If you want a small, easily portable vape with good battery life, and one that can do e-liquids and concentrates as well as dry herbs, this is the vaporizer for you.",
			 						   "As far as the unit itself goes, there isn't any other unit in this size that can actually vaporize herbs.",
			 						   "The vapor is actually very flavorful, although it is not very dense. ",
			 						   "The chamber holds roughly 0.1-0.2 grams, so it is highly efficient for how little it uses.",
			 						   "A normal load is done after around four minutes, which is reactivating the heating function only one time.",
			 						   "The herbs are a golden brown color once it is vaped, and we will have a picture of some vaped herbs in our video review of this unit."
			 						   ],
			 "tags": ["Terpene","Terpinoid","peppermint", "sedative", "memory"],
			 "imageUrl": ["images/vapes/series-3-personal-vaporizer-300x207.png",
			  			  "images/vapes/series-3-personal-vaporizer-usb-charger-300x202.png",
			  			  "images/vapes/series-3-LED.png",
			  			  "images/vapes/series-3-personal-vaporizer-liquid-cartridge-139x300.png",
			  			  "images/vapes/series-3-personal-vaporizer-loose-leaf-cartridge-123x300.png"]
			},
			{"tipId": 6,
			 "tipCatagory":"Portable", 
			 "tipName": "The Solo",
			 "manufacturer" : "Arizer",
			 "price": 349.00,
			 "weight": "2 lbs",
			 "manufacturersWarranty": "",
			 "temps": ["122 F", "365 F", "374 F", "383 F", "393 F", "401 F", "410 F"],
			 "included":[
			 		"Arizer Solo Portable Vaporizer", 
			 		"2 Glass Mouthpieces - 1 Straight and 1 Angled", 
			 		"Aromatherapy Bowl with Potpourri Sample", 
			 		"AC Adapter / Charger", 
			 		"Instruction Manual"],
			 "tipDescriptionAbbrev": "The Arizer Solo is one of the newest portable vaporizers on the market and has totally changed the game.",
			 "tipDescriptionDetailed":["The Arizer Solo is a super efficient hand held portable vaporizer by Arizer Tech, the brilliant minds behind the Arizer Extreme Q.",
			 						   "Arizer has improved everything you might think you know about portable vaporizing.",
			 						   "It is built of a sturdy aluminum that is highly resistant to scratches and other wear and tear, making it the ideal vaporizer for those who are out and about often and need something that can keep up with them. ",
			 						   "Its heating element gives it the ability to deliver a vapor quality that is right next to any table top vaporizer, but is extremely easy to use at the same time.",
			 						   "The heat level is set by simply selecting 1 of 7 different temperature settings, making vaporizing right out of the box as simple as can be.",
			 						   "Also, the Arizer Solo's lithium-ion battery is unmatched, taking only about 2 hours to charge but lasts through an astonishing 4+ hours of vaporization.",
			 						   "The newest version allows you to heat-up and vaporize with the unit while it's charging, so you no longer need the A/C power adapter to turn the Solo into a table top vaporizer with unlimited power. Add in the fact that this vape uses an all glass mouthpiece to connect to the heating element and you have one amazing portable vape. The Arizer Solo is one of the newest portable vaporizers on the market and has totally changed the game. Available in Black or Silver."],
			 "tags": ["plenty","desktop","handheld","storz-bickel"],
			 "imageUrl": ["images/vapes/solo1.png",
						  "images/vapes/solo2.png",
						  "images/vapes/plenty3.png",
						  "images/vapes/solo4.png",
						  "images/vapes/solo5.png"
						  ]
			},
			{"tipId": 7,
			 "tipCatagory":"Desktop", 
			 "tipName": "The Silver Surfer",
			 "manufacturer" : "7th Floor",
			 "price": 269.99,
			 "weight": "",
			 "manufacturersWarranty": "3 years on electronics",
			 "temps": ["0-900 F"],
			 "included":[
			 		"Silver Surfer Vaporizer", 
			 		"Whip / Wand Assembly", 
			 		"Glass Mouthpiece", 
			 		"3 ft Whip Tubing", 
			 		"Glass Wand", 
			 		"3x Replacement Screens", 
			 		"Stir Tool", 
			 		"Padded Travel Bag", 
			 		"User Manual"
			 		],
			 "tipDescriptionAbbrev": "The Silver Surfer is a highly customizable, top performing desktop vaporizer. Choose from a wide array of colors, designs, and heater cover options to create your perfect vaporizer.",
			 "tipDescriptionDetailed":["Every Silver Surfer features a hand blown glass temperature dial, heater cover, and wand, each individually crafted in Colorado Springs, Colorado.",
			 						   "The Silver Surfer Vaporizer utilizes a high quality ceramic heating element and glass-on-glass components for high quality vapor.",
			 						   "Standard Glass heater cover and wand allow you to manipulate where hot air passes through your blends. Simply angle the wand in various positions for thorough vaporization without the need to stir your blends.",
			 						   "Ground glass heater cover and wand allow for hands free vaporization. No need to hold your wand up to the heater cover! This wand fits directly into the heater cover for a perfect seal every time.",
			 						   "Spherical ground glass heater cover and wand allow for a perfect ground glass seal with the ability to angle the wand in various positions. This option provides thorough vaporization without the need to stir your blends.",
			 						   "Turn on Silver Surfer and set to your desired temperature. Once temperature has been reached, load finely ground blends into the glass wand and connect to the glass heater cover. Begin to draw at a medium to fast pace for best results.",
			 						   "The Volcano Digit vaporizer's reputation precedes it in most cases and is equally respected by vaporizing newbies and pro vaporizer users alike."],
			 "tags": ["plenty","desktop","handheld","storz-bickel"],
			 "imageUrl": ["images/vapes/ssv2.png",
						  "images/vapes/ssv_ceramic_element.png",
						  "images/vapes/SSVStdglass2.png",
						  "images/vapes/SV_groundglass2.png",
						  "images/vapes/ssv4.png"
						  ]
			},
			{"tipId": 8,
			 "tipCatagory":"Portable", 
			 "tipName": "Ascent",
			 "manufacturer" : "DaVinci Vaporizers",
			 "price": 199.00,
			 "weight": "",
			 "manufacturersWarranty": "3 years on electronics",
			 "temps": ["38-430 F"],
			 "included":[
			 		"1 x Ascent Portable Vaporizer", 
			 		"2 x Inner Glass Tubes", "2 x Glass Mouthpieces", 
			 		"2 x Glass Oil Jars with Silicone Caps", 
			 		"2 x Stir Tools", 
			 		"2 x Mouthpiece Caps", 
			 		"3 x Replacement Screens", 
			 		"1 x Carrying Pouch", 
			 		"1 x Battery Charger", 
			 		"1 x Instruction Manual"
			 		],
			 "tipDescriptionAbbrev": "The Ascent Vaporizer takes what barriers you think portable vaporizers might be restricted by and smashes through them with ease.",
			 "tipDescriptionDetailed":["The Ascent's all glass vapor path and glass tube is the first of its kind, ditching silicone or plastic pathways for a cleaner, smoother experience using a glass on glass connection.",
			 						   "Smaller than an iPhone, the Ascent vape still sports a bright OLED temperature and battery level display for a user-friendly experience despite its small size.",
			 						   "The lithium-ion battery has a very long battery life, giving you plenty of time to use the Ascent handheld vape away from home without having to bother with charging.",
			 						   "No matter what the material, dry herbs or tobacco, essential oils and concentrates, the Ascent vaporizes them all with ease.",
			 						   "Choose from three stylish designs including a stealth black finish for those who need to be discreet, or the exotic burl wood and croc skin designs for those who want a little flare. The DaVinci vaporizer showed us what a truly versatile portable vaporizer is capable of, now the Ascent is taking what we've learned and schooling us once more.",
			 						   "DaVinci Vaporizers first hit the scene with the super popular DaVinci vape that, just like the man it was named after, was far from a one trick pony. After continued success with the their name-sake vape, DaVinci vaporizers has now unleashed their newest game-changer, the Ascent portable vaporizer."
			 						   ],
			 "tags": ["plenty","desktop","handheld","storz-bickel"],
			 "imageUrl":[
			 	"images/vapes/ascent1.png",
				"images/vapes/ascent2.png",
				"images/vapes/ascent3.png",
				"images/vapes/ascent4.png",
				"images/vapes/ascent5.png" 
				]
			},
			{"tipId": 9,
			 "tipCatagory":"Portable", 
			 "tipName": "Arizer Air",
			 "manufacturer" : "Arizer",
			 "price": 259.95,
			 "weight": "",
			 "manufacturersWarranty": "Lifetime warranty on the heating element",
			 "temps": ["356 F", "374 F", "392 F", "401 F", "410 F"],
			 "included":[
			 		"1 x Arizer Air Vaporizer", 
			 		"1 x Small Straight Glass Stems w/ Black Mouthpiece", 
			 		"1 x Medium Straight Glass Stems", 
			 		"1 x 18650 mAh battery", 
			 		"1 x Carrying Case", 
			 		"1 x Protective, Silicone Skin"
			 		],
			 "tipDescriptionAbbrev": "With this small size and fast heat up time you can be ready to vape almost anywhere at any time.",
			 "tipDescriptionDetailed":["The Arizer Air vaporizer uses an all glass vapor path and stainless steel heating element to produce desktop quality vapor in a small 5 Inch tall by 1 inch wide travel friendly size.",
			 						   "Made by vapor veterans Arizer, this pocket size powerhouse answers all of the fans requests and then some.",
			 						   "Use while plugged in, check. Intuitive and easy to use design, check. Small and travel friendly design, check. Replaceable battery, check.",
			 						   "The Arizer Air uses a rechargeable and replaceable 18650 battery that can be changed by simply unscrewing the bottom of the Arizer Air. This means a longer overall life of the unit.",
			 						   "Charging the Arizer Air battery is as simple as plugging the wall adapter into the side of the vaporizer. You can get about an an hour's worth of power out of a full charge, but The Arizer Air can also be used while plugged in for those must have home sessions.",
			 						   "The Air features a 10 minute shutoff time to prevent wasted power and material. This means you won't burn through herbs or battery life if you forget to shut it off before throwing it back in the included travel case.",
			 						   "This soft case has enough room to hold your vaporizer and a small glass mouthpiece. The Air features a 10 minute shutoff time to prevent wasted power and material. This means you won't burn through herbs or battery life if you forget to shut it off before throwing it back in the included travel case. Termperature controls as follows: Blue 356F, White 374F, Green 392F, Orange 401F, Red 410F. There's only a 1 minute heat-up time to the lowest heat setting and 2 minutes to the highest setting. With this small size and fast heat up time you can be ready to vape almost anywhere at any time."
			 						   ],
			 "tags": ["plenty","desktop","handheld","storz-bickel"],
			 "imageUrl":[
			 	"images/vapes/arizer_air1.png",
				"images/vapes/arizer_air2.png",
				"images/vapes/arizer_air3.png" 
				]
			},
			{"tipId": 10,
			 "tipCatagory":"Desktop", 
			 "tipName": "Volcano Digit",
			 "manufacturer" : "Storz-bickel",
			 "price": 669.00,
			 "weight": "",
			 "manufacturersWarranty": "3 year warranty restricted to normal use.",
			 "temps": ["0-439 F"],
			 "included":[
			 		"Volcano Digit Vaporizer", 
			 		"Storz & Bickel Grinder", 
			 		"5 Vapor Balloons", 
			 		"Volcano Air Filter Set", 
			 		"Easy Valve Filling Chamber with Cap", 
			 		"Easy Valve Screen Set", 
			 		"Cleaning Brush", 
			 		"1 Liquid Pad and 3 Clips", 
			 		"Instruction Manual"
			 		],
			 "tipDescriptionAbbrev": "The Volcano Digit vaporizer's reputation precedes it in most cases and is equally respected by vaporizing newbies and pro vaporizer users alike.",
			 "tipDescriptionDetailed":["The Digit is everything you loved about the Classic Volcano vaporizer, with the added convenience and stye of a precise digital temperature control and display.",
			 						   "The LED temperature read out accurately shows both the current temperature of the vaporizer and the temperature level you have it set to reach, so you always know exactly when the Volcano Digit is ready to go.",
			 						   "The Volcano's patented balloon delivery system is unmatched in terms of efficiency and ease of use, with both the Easy Valve and Solid Valve systems providing dependable and consistent vaporization of herbs or essential oils at a moment's notice.",
			 						   "The Volcano is made of aluminum with an aluminum heating element."
			 						   ],
			 "tags": ["plenty","desktop","handheld","storz-bickel"],
			 "imageUrl":[
			 	"images/vapes/volcano2.png",
				"images/vapes/volcano3.png",
				"images/vapes/volcano1.png",
				"images/vapes/volcano7.png",
				"images/vapes/volcano5.png",
				"images/vapes/volcano6.png" 
				]
			},
			{"tipId": 11,
			 "tipCatagory":"Desktop", 
			 "tipName": "Vapir Rise 2.0",
			 "manufacturer" : "Vapir Inc.",
			 "price": 249.95,
			 "weight": "",
			 "manufacturersWarranty": "1 Year Warranty covering defects in manufacturing, parts, and labor.",
			 "temps": ["150-400 F"],
			 "included":[
			 		"1 x Vapir Rise Vaporizer", 
			 		"1 x Power Cord", 
			 		"1 x Herb Chamber", 
			 		"1 x Aromatherapy Oil Chamber", 
			 		"1 x Chamber Adapter with Plunger", 
			 		"1 x Balloon Adapter with ON/OFF Valve", 
			 		"1 x Inhalation Adapter", 
			 		"1 x Multi-user Adapter", 
			 		"1 x Hot Chamber Grabber", 
			 		"3 x Inflation Balloons", 
			 		"1 x Balloon Clamp", 
			 		"2 x HEPA Air Filters", 
			 		"2 x Large Mesh Screens", 
			 		"2 x Small Mesh Screens", 
			 		"1 x Silicone Tube (3.25 ft)", 
			 		"1 x X-Tip Mouthpiece", 
			 		"1 x User Guide"
			 		],
			 "tipDescriptionAbbrev": "Vapir has already laid the path for many of today's vaporizers with their revolutionary systems developed years ago. The new Vapir Rise carries this legacy into the future and is sure to impress even the most discriminating vapor enthusiast.",
			 "tipDescriptionDetailed":["The Vapir Rise 2.0 was developed to change the game in the world of table top herbal vaporizers.",
			 						   "Vapir listened to the feedback from customers and spent the necessary time to painstakingly create a vaporizer that would truly raise the bar and set a new industry standard.",
			 						   "For starters, the Vapir Rise is the first to incorporate HEPA air filtration into a vaporizer. A HEPA filter is a type of mechanical air filter; it works by forcing air through a fine mesh that traps harmful particles. This basically means that only pure, clean air is used to produce your vapor, assuring the absolute best vapor quality possible.",
			 						   "The Rise takes a step past other dual-functionality vaporizers. With the Rise you can inflate balloons, directly inhale using the whip or have a group session with the multi-user attachment. That's right, Vapir is the first company to make a multiple hose attachment which allows up to 4 users to draw from the Vapir Rise at once.",
			 						   "You get both a dry herb chamber and an essential oil chamber giving you the option of what materials to put inside.",
			 						   "The Vapir Rise sits on your table top and plugs directly into a standard wall outlet for power. Turning the unit on will illuminate the digital display and back-light the touch pad buttons, which is pretty helpful when using the Rise in low or dim lighting.",
			 						   "A multi-speed fan causes purified air to flow over the ceramic heating element and through a stainless steel vapor path to your materials. Set the temperature or fan speed to your personal preference using the seamless touchpad buttons on either side of the digital display. A clear display window shows your temperature setting and current fan speed which takes the guess work out of your session. Vapir has already laid the path for many of today's vaporizers with their revolutionary systems developed years ago. The new Vapir Rise carries this legacy into the future and is sure to impress even the most discriminating vapor enthusiast."
			 						   ],
			 "tags": ["plenty","desktop","handheld","storz-bickel"],
			 "imageUrl":[
			 	"images/vapes/vapirrise1.png",
				"images/vapes/vapirrise2.png",
				"images/vapes/vapirrise3.png",
				"images/vapes/vapirrise4.png",
				"images/vapes/vapirrise5.png" 
				]
			},
			{"tipId": 12,
			 "tipCatagory":"Desktop", 
			 "tipName": "The Da Buddah Vaporizer",
			 "manufacturer" : "7th Floor",
			 "price": 190.00,
			 "weight": "",
			 "manufacturersWarranty": "3 year warranty restricted to normal use.",
			 "temps": ["0-900 F"],
			 "included":[
			 		"Da Buddha Vaporizer", 
			 		"Whip / Wand Assembly", 
			 		"Glass Mouthpiece", 
			 		"3ft Whip Tubing", 
			 		"Glass Wand", 
			 		"3x Replacement Screens", 
			 		"Stir Tool", 
			 		"Padded Hemp Travel Bag", 
			 		"User Manual"
			 		],
			 "tipDescriptionAbbrev": "Featuring the same superior craftsmanship found in the Silver Surfer, every Da Buddha vaporizer is designed and assembled in the USA.",
			 "tipDescriptionDetailed":["Turn on Da Buddha and set to your desired temperature. Once temperature has been reached, load finely ground blends into glass wand and connect to the glass heater cover. Begin to draw at a medium to fast pace for best results.",
			 						   "For best functionality, be sure to clean and maintain Da Buddha regularly.",
			 						   "All glass components can be soaked in isopropyl alcohol.",
			 						   "Replace stainless steel screens and whip tubing often for best vapor.",
			 						   "Da Buddha utilizes a high quality ceramic heating element and glass-on-glass components for high quality vapor production.",
			 						   "For Aromatic Blends, Ceramic Heating Element, Glass-on-Glass Components, Hands Free Whip Delivery System, Analog Temperature Dial, Carrying Case Included."
			 						   ],
			 "tags": ["plenty","desktop","handheld","storz-bickel"],
			 "imageUrl":[
			 	"images/vapes/dabuddah1.png",
				"images/vapes/dabuddah2.png",
				"images/vapes/dabuddah3.png",
				"images/vapes/dabuddah4.png",
				"images/vapes/dabuddah5.png" 
				]
			},
			{"tipId": 13,
			 "tipCatagory":"Desktop", 
			 "tipName": "The Extreme Q",
			 "manufacturer" : "Arizer",
			 "price": 239.00,
			 "weight": "",
			 "manufacturersWarranty": "3 Year Waranty",
			 "temps": ["0-450 F"],
			 "included":[
			 		"Extreme Q Vaporizer", 
			 		"Remote Control", 
			 		"2x Glass Cyclone Bowls with Flat Screens", 
			 		"3 foot Whip Tubing", 
			 		"Glass Whip Mouthpiece", 
			 		"Glass Elbow Adapter with Dome Screen", 
			 		"Pre-Attached Mini Whip for Balloon", 
			 		"Balloon Assembly", 
			 		"2x Balloons", 
			 		"2x Glass Balloon Mouthpieces", 
			 		"2x O-Rings", 
			 		"Glass Stir Tool", 
			 		"Flat Screen", 
			 		"Dome Screen", 
			 		"Glass Potpourri Dish with Potpourri Sample", 
			 		"110/220V Power Supply", 
			 		"User Manual"
			 		],
			 "tipDescriptionAbbrev": "The Extreme Q offers a powerful yet energy efficient ceramic heating element and glass-on-glass components for clean vapor",
			 "tipDescriptionDetailed":["The Extreme Q, by Canadian manufacturer Arizer, is a multi-functional, feature-rich, desktop vaporizer. For efficient and user-friendly functionality, few vaporizers can compete with the Extreme Q. This “jack-of-all-trades” vaporizer produces superior vapor quality, delivered via your choice of balloon (forced air) or whip (direct draw).",
			 						   "Choose your vapor experience! The Extreme Q is able to deliver vapor in a multitude of ways.",
			 						   "Direct Draw via Whip: Draw in vapor through the included 3' Long Whip.",
			 						   "Forced Air Assisted Whip: Give your lungs a break! Let the EQ's fan create and deliver vapor for you through the included 3' Long Whip.",
			 						   "Forced Air Balloon Delivery: Attach the Balloon Assembly and watch as the Extreme Q's fan fills your balloon with vapor. Detach the balloon when full, draw and enjoy!",
			 						   "All functions can be performed via the included remote control, or on the unit itself through the digital display. It's fully adjustable temperature can be set in one degree increments, from 122 degrees F – 500 degrees F (50 degrees C – 260 degrees C). The user-set automatic shut-off feature allows you to set and forget; your Extreme Q will automatically shut down at a user defined time.",
			 						   "The Extreme Q offers a powerful yet energy efficient ceramic heating element and glass-on-glass components for clean vapor"
			 						   ],
			 "tags": ["plenty","desktop","handheld","storz-bickel"],
			 "imageUrl":[
			 	"images/vapes/extremeq1.png",
				"images/vapes/extremeq2.png",
				"images/vapes/extremeq3.png",
				"images/vapes/extremeq4.png",
				"images/vapes/extremeq5.png",
				"images/vapes/extremeq6.png",
				"images/vapes/extremeq7.png" 
				]
			},
			{"tipId": 14,
			 "tipCatagory":"Portable", 
			 "tipName": "The Haze",
			 "manufacturer" : "Haze Vaporizers",
			 "price": 249.99,
			 "weight": "",
			 "manufacturersWarranty": "10 year warranty",
			 "temps": ["0-450 F", "0-232 C"],
			 "included":[
			 		"Haze Vaporizer", 
			 		"Stainless Steel Mouthpiece", 
			 		"Glass Mouthpiece", 
			 		"2x All-Purpose Cans", 
			 		"2x Conduction Screens", 
			 		"2x Convection Screens", "2x Haze Batteries", 
			 		"Wall Charger", 
			 		"Cleaning Tool", 
			 		"Material Tool", 
			 		"User Manual"
			 		],
			 "tipDescriptionAbbrev": "Haze is the first portable vaporizer with dual chambers, allowing vaporization of dried blends, solid concentrates, and liquids interchangeably and simultaneously.",
			 "tipDescriptionDetailed":["Every Haze Vaporizer is crafted with advanced, patented heating technology for rapid heat up time and features a long-lasting, rechargeable, user-replaceable Lithium-ion battery.",
			 						   "Haze features both stainless steel convection screen and conduction screens, allowing for a more personal vaporizing experience. The conduction screen allows dry materials to have controlled exposure to the heating chamber; the convection screen is surrounded by four walls of stainless steel, but allows no direct contact between materials and the heating chamber.",
			 						   "Use the temperature selection button on the top of Haze to switch between 4 temperature options.",
			 						   "When powered on, the LED light will blink several times to indicate that the device is in the process of heating.",
			 						   "When the oven is at the selected temperature, the LED lights will remain solid, letting you know Haze is ready for use."
			 						   ],
			 "tags": ["plenty","desktop","handheld","storz-bickel"],
			 "imageUrl":[
			 	"images/vapes/haze1.png",
				"images/vapes/haze2.png",
				"images/vapes/haze3.png",
				"images/vapes/haze4.png",
				"images/vapes/haze5.png",
				"images/vapes/haze6.png",
				"images/vapes/haze7.png" 
				]
			},
			{"tipId": 15,
			 "tipCatagory":"Pen", 
			 "tipName": "The SOURCE Orb V2",
			 "manufacturer" : "Haze Vaporizers",
			 "price": 79.95,
			 "weight": "",
			 "manufacturersWarranty": "Lifetime warranty",
			 "temps": ["0-450 F", "0-232 C"],
			 "included":[
			 		"1x SOURCE orb Attachment v2 Model", 
			 		"7x SOURCE orb Atomizers", 
			 		"1x SOURCE 10cig Attachment", 
			 		"1x SOURCE orb Variable Voltage eGo Twist Battery", 
			 		"1x eGo Charging Cable", 
			 		"1x USB Wall Charger", 
			 		"1x Dabbing Tool", 
			 		"1x ﻿SOURCE﻿vapes﻿﻿Silicone Container for Concentrates"
			 		],
			 "tipDescriptionAbbrev": "The SOURCE Orb is a great new concentrate pen from Source Vapes. It comes with a variable voltage battery, a charger, the SOURCE orb attachment, and 7 different atomizers.",
			 "tipDescriptionDetailed":["Seven completely different atomizers, each of which allows you to customize your vape experience how you want it to be.",
			 						   "SOURCE orb is the most advanced portable vaporizer with superior airflow, build, and multi-functional atomizers.",
			 						   "Its indestructible solid steel body means you'll never have to worry about broken glass, while its open airflow chamber will give you the perfect hit, every time.",
			 						   "SOURCE terra, developed exclusively by SOURCEvapes, is the most advanced way to enjoy concentrates and essential oils.",
			 						   "SOURCE terra is a completely ceramic heating element that gives you the most flavorful and pure clouds of vapor, rather than heating through exposed coils."
			 						   ],
			 "tags": ["plenty","desktop","handheld","storz-bickel"],
			 "imageUrl":[
			 	"images/vapes/Source-3.png",
				"images/vapes/Source-3-8-2137.png",
				"images/vapes/Source-3-8-2278_grande.jpeg",
				"images/vapes/Source-3-8-2167.png",
				"images/vapes/Source-3-8-2298_small.png"
				]
			},
			{"tipId": 16,
			 "tipCatagory":"Pen", 
			 "tipName": "The Ambassador Kit V4",
			 "manufacturer" : "Gentleman's Brand",
			 "price": 79.95,
			 "weight": "",
			 "manufacturersWarranty": "Lifetime warranty",
			 "temps": ["0-450 F", "0-232 C"],
			 "included":[
			 		"Double Agent Pen", 
			 		"V2 Cartridge", 
			 		"Mega V2 Cartridge", 
			 		"Stainless Steel Filling Tool",
			 		"Non-stick Silicone Container for Concentrates",
			 		"Rapid USB Charger",
			 		"Wall Adapter",
			 		"Silicone Mouth Tip",
			 		"Stainless Steel Mouth Tip",
			 		"User Guide"	
			 		],
			 "tipDescriptionAbbrev": "Includes everything you need to vape waxes, concentrates, shatter, and e-liquids with purchase of the Saboteur Tank add-on. ",
			 "tipDescriptionDetailed":["The Ambassador Kit works with Waxes, Shatter, Crumble, Full melt concentrates, Dry Herbs - with dry herb attachment, E-liquids - with purchase of the Saboteur Tank add-on"
			 						   ],
			 "tags": ["plenty","desktop","handheld","storz-bickel"],
			 "imageUrl":[
			 	"images/vapes/ambassador_1024x1024.png",
				"images/vapes/ambassador-maxresdefault.png",
				"images/vapes/ambassador2.png",
				"images/vapes/Source-3-8-2167.png",
				"images/vapes/Source-3-8-2298_small.png"
				]
			},
			{"tipId": 17,
			 "tipCatagory":"Pen", 
			 "tipName": "Dr. Dabber Ghost",
			 "manufacturer" : "Dr. Dabber",
			 "price": 84.95,
			 "weight": "",
			 "manufacturersWarranty": "Lifetime warranty",
			 "temps": ["0-450 F", "0-232 C"],
			 "included":[
			 		"Dr. Dabber Ghost Vaporizer", 
			 		"USB Charger", 
			 		"silicone storage ball", 
			 		"loading tool",
			 		"extra replacement titanium atomizer"	
			 		],
			 "tipDescriptionAbbrev": "The Dr. Dabber Ghost is the original low-heat vaporizer pen for oils and waxes. ",
			 "tipDescriptionDetailed":["Our Titanium Technology heats to the ideal temperature slowly, instead of burning red hot on contact.",
			 							"This eliminates the burned, electric taste synonymous with vaporizer pens, ensuring you can enjoy the flavor of your oils or waxes."
			 						   ],
			 "tags": ["plenty","desktop","handheld","storz-bickel"],
			 "imageUrl":[
			 	"images/vapes/dr-dabber-ghost-all.png",
				"images/vapes/drdabberNEWSLIDE5.png",
				"images/vapes/dr-dabber-ghost-pen_1.png",
				"images/vapes/dr-dabber-ghost-pen_1.png",
				"images/vapes/drdabberghostsmlthumbpickeno_3_1024x1024.png"
				]
			},
			{"tipId": 18,
			 "tipCatagory":"Portable", 
			 "tipName": "DaVinci",
			 "manufacturer" : "DaVinci Vaporizers",
			 "price": 169.00,
			 "weight": "2 lbs",
			 "manufacturersWarranty": "2 year warranty covering the heating element.",
			 "temps": ["370 F", "395 F", "420 F", "445 F", "470 F", "NA C"],
			 "included":["DaVinci Portable Vaporizer", 
			 		     "Battery Charger", 
			 		     "Cleaning Accessories", 
			 		     "3 Replacement Screens", 
			 		     "Instruction Manual"	
			 			],
			 "tipDescriptionAbbrev":"The DaVinci Vaporizer was designed with a few goals in mind - portability, efficiency, ease of use, and a discreet vaporizing experience.",
			 "tipDescriptionDetailed":["The DaVinci Vaporizer was designed with a few goals in mind - portability, efficiency, ease of use, and a discreet vaporizing experience. Not only were these goals met, but they were exceeded. ",
			  						   "The DaVinci Vape features an ergonomic hand held design for easy transportation. The herb chamber is revealed by snapping open the cap, which also gives you access to the tiny cleaning brush and stealth storage compartment. ",
			  						   "The brush is great for cleaning the chamber and the storage area holds 3x the amount needed for a single use, virtually giving you an entire portable vaporizing station. ",
			  						   "The lithium-ion rechargeable battery is yet another addition that adds to the DaVincis long list of features. The DaVincis battery life can last anywhere up to 1 hour of vaporization and is good for well over 1000 charge cycles! ",
			  						   "On the face of the DaVinci portable vaporizer are 3 very simple buttons - power, temperature up and temperature down complete with LED digital temperature display for accurate vaporization. ",
			  						   "The flexi-straw mouthpiece easily screws off of the DaVinci vape to make storing it in your pocket even more comfortable. The removable mouthpiece is made of a durable and flexible material so you can adjust the angle of the mouthpiece at will, further finding your comfort zone with the DaVinci vape. ",
			  						   "The DaVinci truly has it all to make vaporizing on the go a fast, easy and hassle free experience anywhere you go."
			 						  ],
			 "tags": ["Terpene","Terpinoid","peppermint", "sedative", "memory"],
			 "imageUrl":["images/vapes/davinci1.png",
			 			 "images/vapes/davinci2.png",
			 			 "images/vapes/davinci3.png",
			 			 "images/vapes/davinci4.png",
			 			 "images/vapes/davinci1.png",
			 			 "images/vapes/davinci2.png",
			 			 "images/vapes/davinci3.png"]
			},
			{"tipId": 19,
			 "tipCatagory":"Portable", 
			 "tipName": "PUFFiT 2",
			 "manufacturer" : "Discreet Vape",
			 "price": 97.00,
			 "weight": "",
			 "manufacturersWarranty": "The PUFFiT 2 has a 1 year limited product warranty with a 90 day warranty on the battery.",
			 "temps": ["370 F", "395 F", "420 F", "445 F", "470 F", "NA C"],
			 "included":["1 x PUFFiT 2 Portable Vaporizer", 
			 			 "1 x Silicone Heat Shield", 
						 "1 x USB Charger", 
						 "1 x Packing Tool", 
						 "1 x Concentrate Screens", 
						 "4 x Replacement Screens", 
						 "1 x User Manual"	
						 ],
			 "tipDescriptionAbbrev": "Draw true vapor quickly and easily without drawing attention with a little help from the PUFFiT 2 inhaler vaporizer.",
			 "tipDescriptionDetailed":["The PUFFiT 2 vaporizer looks just like an inhaler to provide quick and discreet vapor sessions without drawing any attention. ",
			  						   "Now you can puff in public while remaining completely discreet. At just about 3.7 inches tall and just under 2 inches wide, the PUFFiT 2 is the same size as a regular inhaler. ",
			  						   "This fits easily in your hand while vaping as well as your pocket or bag when traveling for ultimate discretion and portability. ",
			  						   "To keep things discreet, the PUFFiT 2 contains no lighting indicators while heating up. Instead, Haptic Feedback technology lets you know when the PUFFiT 2 is hot and ready for vaping by vibrating. Just press the power button and subtle vibrations will let you know that the PUFFiT 2 is heating up and give a quiet buzz when it's ready to use. ",
			  						   "The heating chamber is made of a high quality nickel plated copper for ultra conductivity. Load your favorite herbs or concentrated essential oils into the chamber with the appropriate screen and press the bower button to begin heating. ",
			  						   "Automatic shutdown will turn the PUFFiT 2 off after 3 minutes to prevent over heating, just in case you forget. 4 temperatures ranging from 320 to 415 degrees Fahrenheit can be selected by pressing the power button to cycle through the settings. ",
			  						   "A small LED on the back of the unit will indicate your selected temperature setting, while holding the power button down will turn the 4 bar LED into a battery life indicator. 4 bars means your fully charged and 1 bar means it's time to find your charger. A 2200mAh lithium ion battery provides long vape sessions and is easily recharged using the included USB cord. The PUFFiT 2's battery can be removed for replacement, so having a backup will keep your sessions going even longer. Draw true vapor quickly and easily without drawing attention with a little help from the PUFFiT 2 inhaler vaporizer."
			 						  ],
			 "tags": ["Portable","Puffit", "Discreet", "Herbs", "Oils", "Concentrates"],
			 "imageUrl":["images/vapes/puffit1.png",
			 			 "images/vapes/puffit2.png",
			 			 "images/vapes/puffit3.png",
			 			 "images/vapes/puffit4.png",
			 			 "images/vapes/puffit5.png",
			 			 "images/vapes/puffit6.png",
			 			 "images/vapes/puffit1.png"]
			},
			{"tipId": 20,
			 "tipCatagory":"Portable", 
			 "tipName": "The Magic flight Launch Box",
			 "manufacturer" : "",
			 "price": 119.00,
			 "weight": "",
			 "manufacturersWarranty": "3 year warranty restricted to normal use.",
			 "temps": ["NA F", "NA C"],
			 "included":["Magic-Flight Launch Box", 
			 			 "2x Rechargeable NiMH Glyph Batteries With Caps", 
			 			 "Battery Charger", 
			 			 "Felt-lined Decorative Tin", 
			 			 "Glass Draw Stem", 
			 			 "Cleaning Brush", 
			 			 "User Manual"	
			 			],
			 "tipDescriptionAbbrev": "The Volcano Digit vaporizer's reputation precedes it in most cases and is equally respected by vaporizing newbies and pro vaporizer users alike.",
			 "tipDescriptionDetailed":["Beautifully crafted and intuitively designed, the Magic-Flight Launch Box, is powered by a rechargeable AA NiMH battery and holds the title of the world's smallest electronic vaporizer, making it the perfect option for low-profile vaporizing on-the-go.",
			  						   "Each Launch Box vaporizer represents the effort of many skilled craftsman. Three wood choices are available, along with five different Laser Etch models.",
			  						   "The Launch Box has many accessories to choose from such as the Power Adapter 2.0 for extra power at home or in your vehicle, Water Piece Whip for water cooled vapor, and Concentrate Tray for using solid concentrates or liquids.",
			  						   "To begin vaporization, slide back the Launch Box lid and load blends loosely into the trench. Close the lid and press the charged battery into the box to activate the stainless steel heating rod. An orange indicator light under the lid will light to show you the conduction process is taking place and will be ready-to-use in 3 to 5 seconds.",
			  						   "A unique vapor channel flow system delivers vapor directly to the user minimizing condensation. Draw slowly from the glass steam for best results. Release pressure on battery two-thirds through draw to prevent overheating.",
			  						   "After cooling, simply empty the trench and brush gently using the cleaning brush. Gently blow into trench to remove any remaining dust. The screen may discolor after use.",
			  						   "To clean, gently wipe screen with a 91% Isopropyl Alcohol. Avoid contact of Isopropyl alcohol with trench."
			 						  ],
			 "tags": ["Desktop","Volcano", "Herbs", "Oils", "Concentrates"],
			 "imageUrl":["images/vapes/mflb1.png",
			  			 "images/vapes/mflb2.png",
			  			 "images/vapes/mflb3.png",
			  			 "images/vapes/mflb4.png",
			  			 "images/vapes/mflb1.png",
			  			 "images/vapes/mflb2.png",
			  			 "images/vapes/mflb3.png"]
			},
			{"tipId": 21,
			 "tipCatagory":"Portable", 
			 "tipName": "The Firefly",
			 "manufacturer" : "",
			 "price": 269.95,
			 "weight": "",
			 "manufacturersWarranty": "3 year warranty restricted to normal use.",
			 "temps": ["NA F", "NA C"],
			 "included":["Firefly Vaporizer", 
			 			 "High Power Rechargeable Lithium-ion Battery", 
			 			 "Cleaning Kit", 
			 			 "Soft Case", 
			 			 "User Manual"	
			 			],
			 "tipDescriptionAbbrev": "The Volcano Digit vaporizer's reputation precedes it in most cases and is equally respected by vaporizing newbies and pro vaporizer users alike.",
			 "tipDescriptionDetailed":["The revolutionary Firefly is the fastest, easiest, most satisfying way to enjoy aromatic blends. Firefly heats instantly at the touch of a button, so it's always ready. There's nothing faster.",
			 						   "The Firefly features the most advanced vaporization technology available. The Firefly's dynamic convection heating technology utilizes sophisticated software that raises the vapor temperature from 100 °F to 400 °F over the course of a smooth 10 seconds. Enjoy aromas the moment they are vaporized. If you prefer lighter vapor, simply draw for a shorter time; if you prefer richer vapor, draw longer. You are in complete control. Enjoy a perfect draw every time.",
			 						   "The Firefly is easy to load and clean, due to its magnetic lid and borosilicate glass heating chamber. The heating chamber's outer walls are innwardly-sloped for easy loading and unloading.",
			 						   "The magnetic lid features an open vapor path that is fully exposed when the lid is removed, so it can be quickly brushed clean or wiped with a damp cloth.The high-power Lithium-ion battery recharges in less than 45 minutes and delivers over 40 rich draws per charge. ",
			 						   "The battery can be charged directly in the Firefly or in the optional external charger.",
			 						   "The borosilicate glass heating chamber and stainless metal vapor path keeps aromas completely pure. Sleek and compact, Firefly fits beautifully in your hand. The elegant metal and glass chassis feels like a warm river stone, creating a feeling of luxury and quality.",
			 						   "The battery can be easily swapped in a few seconds, allowing you to insert a fresh battery from the external charger with no downtime.",
			 						  ],
			 "tags": ["Desktop","Volcano", "Herbs", "Oils", "Concentrates"],
			 "imageUrl":["images/vapes/firefly1.png",
			  			 "images/vapes/firefly2.png",
			  			 "images/vapes/firefly3.png",
			  			 "images/vapes/firefly4.png",
			  			 "images/vapes/firefly1.png",
			  			 "images/vapes/firefly2.png",
			  			 "images/vapes/firefly3.png"]
			},
			{"tipId": 22,
			 "tipCatagory":"Desktop", 
			 "tipName": "The Hot Box",
			 "manufacturer" : "",
			 "price": 109.99,
			 "weight": "",
			 "manufacturersWarranty": "5 year warranty",
			 "temps": ["NA F", "NA C"],
			 "included":["Hot Box Vaporizer", 
			 			 "Whip / Wand Assembly", 
			 			 "Glass 2-Piece Wand", 
			 			 ".5' Whip Tubing", 
			 			 "Glass Mouthpiece", 
			 			 "User Manual"	
			 ],
			 "tipDescriptionAbbrev": "The Volcano Digit vaporizer's reputation precedes it in most cases and is equally respected by vaporizing newbies and pro vaporizer users alike.",
			 "tipDescriptionDetailed":["The Hot Box is a simple, yet effective desktop vaporizer with an array color and design options. Hand made in the USA, the Hot Box is reliable, durable, and comes standard with a 5 year warranty.",
			        				   " Hot Box utilizes a special ceramic nichrome heating element that is ready for use in just minutes.",
			        				   "Choose between Standard, Ground Glass (hands free), and many colors and designs options, including Stone, Tile, Artist Series, and many more.",
			        				   "Turn on Hot Box and allow it to heat for 10 minutes, ensuring optimal vaporization temperatures. Finely grind your blends and load them into the glass wand. Make sure to fill your wand no more than 1/3 capacity for best results. Insert the wand onto the glass heater cover and begin to draw.",
			        				   "Your rate of draw will affect the temperature. A slower draw speed will raise the temperature; a faster draw speed will lower the temperature.",
			        				   "For optimal performance, be sure to clean your Hot Box regularly. Replace screens and whip tubing as needed.",
			        				   "Glass components can be cleaned with isopropyl alcohol (91% or higher recommended). Never clean the device while it is still plugged in."
			 						  ],
			 "tags": ["Desktop","Volcano", "Herbs", "Oils", "Concentrates"],
			 "imageUrl":["images/vapes/hotbox1.png",
			  			 "images/vapes/hotbox2.png",
			  			 "images/vapes/hotbox3.png",
			  			 "images/vapes/hotbox4.png",
			  			 "images/vapes/hotbox5.png",
			  			 "images/vapes/hotbox1.png",
			  			 "images/vapes/hotbox2.png"]
			},
			{"tipId": 23,
			 "tipCatagory":"Portable", 
			 "tipName": "The Pax",
			 "manufacturer" : "Ploom",
			 "price": 199.99,
			 "weight": "",
			 "manufacturersWarranty": "3 year warranty restricted to normal use.",
			 "temps": ["NA F", "NA C"],
			 "included":["Pax Vaporizer", 
			 		  	 "Screen", 
			 		  	 "Mouthpiece", 
			 		  	 "Oven Lid", 
			 		  	 "Charging Dock", 
			 		  	 "Charging Cord", 
			 		  	 "5x Cleaning Tools", 
			 		  	 "5x Cleaning Wipes", 
			 		  	 "2x Lubricant Packet", 
			 		  	 "User Manual"	
			 			],
			 "tipDescriptionAbbrev": "Pax by Ploom is a premium portable vaporizer that conveniently fits in your pocket and delivers pure, clean vapor.",
			 "tipDescriptionDetailed":[ "Pax by Ploom is a premium portable vaporizer that conveniently fits in your pocket and delivers pure, clean vapor. Small and lightweight, Pax is easily taken out and about and heats in under a minute. Its refined design is sleek, stylish, and durable, making Pax the ultimate choice for on-the-go vaporization.",
			  						    "Load aromatic blends into the Pax oven and lightly tamp down. Power on Pax by pressing in the retractable mouthpiece and allowing it to spring in to the on position. Pax indicator light will turn green once fully heated and ready for use.",
			  						    "Remove mouthpiece to reveal temperature button to cycle through presets as needed. ",
			  						    "Pax features 3 temperature presets for optimal vaporization. Yellow...370F (188C), Orange...390F (199C), Red...410F (210C)",
			  						    "Pax utilizes a Lithium-ion rechargeable internal battery that charges in under 2 hours and lasts for up to 2 hours of continuous use. Drop Pax onto the included charging dock for easy charging. While powered on, shake Pax to reveal battery life indicators - Green...Full Battery, Yellow...Partially Charged, Red...Low Battery.",
			  						    "Pax is a precision device and should be cleaned on a regular basis. While Pax is powered on, remove mouthpiece and soak in soap and water. Let mouthpiece dry before replacing. To clean Pax body, remove mouthpiece and oven lid. Moisten cleaning tool with supplied alcohol wipe.",
			  						    "Starting from the mouthpiece end, insert moistened cleaning tool into the vapor pathway, pushing out the oven screen. Floss Pax with cleaning tool. To clean Pax oven, oven lid, and screen, use a moistened bent cleaning tool or moistened cotton swab to remove residue. Screens will need to be replaced as necessary. Apply lubricant after every cleaning session."
			 						  ],
			 "tags": ["Desktop","Volcano", "Herbs", "Oils", "Concentrates"],
			 "imageUrl":[ "images/vapes/pax1.png",
			  			  "images/vapes/pax2.png",
			  			  "images/vapes/pax3.png",
			  			  "images/vapes/pax4.png",
			  			  "images/vapes/pax1.png",
			  			  "images/vapes/pax2.png",
			  			  "images/vapes/pax3.png"]
			},
			{"tipId": 24,
			 "tipCatagory":"Portable", 
			 "tipName": "Pinnacle Pro Deluxe",
			 "manufacturer" : "VaporBlunt",
			 "price": 237.00,
			 "weight": "",
			 "manufacturersWarranty": "The Pinnacle Pro DLX has a 1 year limited product warranty which covers your vaporizer against defects in manufacturing, parts and labor. 90 day limited warranty on the battery.",
			 "temps": ["NA F", "NA F", "NA C", "NA C"],
			 "included":["1 x Pinnacle Pro Portable Vaporizer", 
			 			 "1 x Micro Shower Water Tool", 
			 			 "1 x Chamber Cap", 
			 			 "1 x PonG Adapter w/ Glass Vapor Path", 
			 			 "2 x Dry Herb Filling Chambers", 
			 			 "1 x Wax/Oil Filling Chamber", 
			 			 "1 x Charger", 
			 			 "1 x Cleaning Brush", 
			 			 "1 x Wire Pipe Cleaner", 
			 			 "1 x Bamboo Cleaning Stick", 
			 			 "1 x Standard Mouthpiece", 
			 			 "1 x Quick Start Guide"	
			 			],
			 "tipDescriptionAbbrev": "The Pinnacle Pro DLX is the newest version and now comes with glass screen housing and vapor tube in the PonG adapter.",
			 "tipDescriptionDetailed":["The Pinnacle Pro DLX is the newest version and now comes with glass screen housing and vapor tube in the PonG adapter! ",
			 						   "The Pinnacle Pro DLX set includes everything you need to vape dry herbs and concentrates with water filtration at home or on the go. With the Pinnacle's dual functionality and the included Micro Shower Water Tool, you are sure to get the coolest and smoothest vapor puffs possible from the Pinnacle Pro from your favorite materials without having to sacrifice size or quality. ",
			 						   "VaporBLUNT's Pinnacle Pro vaporizer is about 5 inches tall and less than an inch wide, allowing it to travel easily and be used virtually anywhere. Toss the Pinnacle Pro in your pocket, bag, or purse and be ready to vape wherever you may go. ",
			 						   "What really takes the Pinnacle Pro to the next level is the Micro Shower Tool. The water filtration tool cleans your vapor of any small particles that may sneak past the screen while cooling the vapor, putting the Pinnacle Pro at the head of the class for both portability and vapor quality. ",
			 						   "The Pinnacle Pro vaporizer has a simple 1 button design which turns the unit on, toggles between its temperature settings, and then turns the unit off. This design has been proven to be the easiest to use, making this vape a must have for newbies and vapor veterans alike. ",
			 						   "The vaporizing heat settings range from 370° to 470° F in 25° increments, providing ultimate control over your vapor quality. The temperature setting is indicated using a color coding system displayed by the 5 LED lights on the front of the Pinnacle Pro: WHITE 370 F, TURQUOISE 395 F, GREEN 420 F, ORANGE 445 F,  PURPLE 470 F. The first 4 temperatures are so that you can find the perfect temperature for your dry herbal blend, while the 5th and highest temperature is intended for oil and concentrate vaporization. ",
			 						   "The Bullet baskets are used to hold and vaporize your dry herbs, while the Full Metal Jacket concentrate basket can withstand the higher temperatures required to vape waxes and concentrates. The baskets easily slide out when it comes time to change or clean them. This means your material never comes in contact with your vaporizer making the Pinnacle Pro very easy to keep clean for continuous optimum use.Get everything you need to have the ultimate in travel friendly vaporization and top level vapor quality with the Pinnacle Pro DLX vaporizer kit."
			 						  ],
			 "tags": ["Terpene","Terpinoid","peppermint", "sedative", "memory"],
			 "imageUrl":[ "images/vapes/pinnacleprodlx1.png",
			  			  "images/vapes/pinnacleprodlx2.png",
			  			  "images/vapes/pinnacleprodlx3.png",
			  			  "images/vapes/pinnacleprodlx4.png",
			  			  "images/vapes/pinnacleprodlx5.png",
			  			  "images/vapes/pinnacleprodlx6.png",
			  			  "images/vapes/pinnacleprodlx7.png"]
			},
			{"tipId": 25,
			 "tipCatagory":"", 
			 "tipName": "",
			 "manufacturer" : "",
			 "price": "",
			 "weight": "",
			 "manufacturersWarranty": "",
			 "temps": ["NA F", "NA F", "NA C", "NA C"],
			 "included":[],
			 "tipDescriptionAbbrev": "",
			 "tipDescriptionDetailed":[],
			 "tags": [],
			 "imageUrl":[]
			}
		]; 
**/
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