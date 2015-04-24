 /** mock **/
(function(){
	"use strict";

	var app = angular
				.module("productResourceMock",
						["ngMockE2E"]);
	
	app.run(function ($httpBackend){
		var temperatures = [126, 246, 273, 313, 315, 334, 349, 351, 352, 356, 360, 365, 388, 408, 423, 428, 435, 482]
		
		var strains = [
			{"strainId": 1,
			 "strainName": "Trainwreck", 
			 "strainType": "Hybrid",
			 "components": [
				 	{ 
				 		"name": "THC9", 
				 		"value": 21.30
				 	},
				 	{ 
				 		"name": "CBD", 
				 		"value": 1.81
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
				 	} 	
		 	],
		 	 "conditions": ["Bipolar", "Stress", "Depression", "Pain", "Insomnia", "Headache"],
			 "positiveEffects": ["Euphoric", "Happy", "Uplifted", "Relaxed", "Creative"],
			 "negativeEffects": ["Dry Mouth", "Dry Eyes", "Paranoid", "Dizzy", "Anxious"],
			 "descriptionDetailed": "Detailed description here. Detailed description here.Detailed description here.Detailed description here. Detailed description here.",
			 "descriptionAbbrev":  "Short description here.",
			 "tags": ["Hybrid", "Trainwreck", "Bipolar", "Bipolar", "Stress", "Depression", "Pain", "Insomnia", "Headache", "Euphoric", "Happy", "Uplifted", "Relaxed", "Creative"],
			 "imageUrl": "images/strains/acapulcoGold.jpg"
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
			 	}
			 ],	 	
		 	 "conditions": [""],
			 "positiveEffects": [""],
			 "negativeEffects": [""],
			 "descriptionDetailed": "Detailed description here. Detailed description here.Detailed description here.Detailed description here. Detailed description here.",
			 "descriptionAbbrev":  "Short description here.",
			 "tags": ["Hybrid", "White Widow"],
			 "imageUrl": "images/strains/acapulcoGold.jpg"
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
			 	} 	
		 	],  
		 	 "conditions": [""],
			 "positiveEffects": [""],
			 "negativeEffects": [""],
			 "descriptionDetailed": "Detailed description here. Detailed description here.Detailed description here.Detailed description here. Detailed description here.",
			 "descriptionAbbrev":  "Short description here.",
			 "tags": ["Hybrid", "Sage"],
			 "imageUrl": "images/strains/acapulcoGold.jpg"
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
			 		"value": 0.40
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
			 	} 	
		 	],  
		 	 "conditions": [""],
			 "positiveEffects": [""],
			 "negativeEffects": [""],
			 "descriptionDetailed": "Detailed description here. Detailed description here.Detailed description here.Detailed description here. Detailed description here.",
			 "descriptionAbbrev":  "Short description here.",
			 "tags": ["Hybrid", "Skywalker OG", "OG"],
			 "imageUrl": "images/strains/acapulcoGold.jpg"
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
			 	} 	
		 	],  
			"conditions": [""],
			 "positiveEffects": [""],
			 "negativeEffects": [""],
			 "descriptionDetailed": "Detailed description here. Detailed description here.Detailed description here.Detailed description here. Detailed description here.",
			 "descriptionAbbrev":  "Short description here.",
			 "tags": ["Hybrid", "Permafrost"],
			 "imageUrl": "images/strains/acapulcoGold.jpg"
			},
			{"strainId": 6,
			 "strainName": "Querkle", 
			 "strainType": "Indica",
			 "components": [
			 	{ 
			 		"name": "THC9", 
			 		"value": 15.38
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
			 	} 	
		 	], 
		 	 "conditions": ["Nausea"],
			 "positiveEffects": [""],
			 "negativeEffects": [""],
			 "descriptionDetailed": "Detailed description here. Detailed description here.Detailed description here.Detailed description here. Detailed description here.",
			 "descriptionAbbrev":  "Short description here.",
			 "tags": ["Indica", "Querkle", "Nausea"],
			 "imageUrl": "images/strains/acapulcoGold.jpg"
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
			 	} 	
		 	],  
		 	 "conditions": [""],
			 "positiveEffects": [""],
			 "negativeEffects": [""],
			 "descriptionDetailed": "Detailed description here. Detailed description here.Detailed description here.Detailed description here. Detailed description here.",
			 "descriptionAbbrev":  "Short description here.",
			 "tags": ["Hybrid", "Papaya"],
			 "imageUrl": "images/strains/acapulcoGold.jpg"
			},
			{"strainId": 8,
			 "strainName": "Pennywise", 
			 "strainType": "Indica",
			 "components": [
			 	{ 
			 		"name": "THC9", 
			 		"value": 8.12
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 0.03
			 	},
			 	{ 
			 		"name": "CBN", 
			 		"value": 0.03
			 	},
			 	{ 
			 		"name": "CBG", 
			 		"value": 0.0
			 	},
			 	{ 
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
			 	} 	
		 	],
		 	 "conditions": ["Migraines", "Headache", "Hypertension"],
			 "positiveEffects": [""],
			 "negativeEffects": [""],
			 "descriptionDetailed": "Detailed description here. Detailed description here.Detailed description here.Detailed description here. Detailed description here.",
			 "descriptionAbbrev":  "Short description here.",
			 "tags": ["Indica", "Pennywise", "Migraines", "Headache", "Hypertension"],
			 "imageUrl": "images/strains/acapulcoGold.jpg"
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
			 	} 	
		 	],  
		 	 "conditions": [""],
			 "positiveEffects": [""],
			 "negativeEffects": [""],
			 "descriptionDetailed": "Detailed description here. Detailed description here.Detailed description here.Detailed description here. Detailed description here.",
			 "descriptionAbbrev":  "Short description here.",
			 "tags": ["Hybrid", "OG #18", "OG"],
			 "imageUrl": "images/strains/acapulcoGold.jpg"
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
			 	} 	
		 	],  
		 	 "conditions": [""],
			 "positiveEffects": [""],
			 "negativeEffects": [""],
			 "descriptionDetailed": "Detailed description here. Detailed description here.Detailed description here.Detailed description here. Detailed description here.",
			 "descriptionAbbrev":  "Short description here.",
			 "tags": ["Hybrid", "OG Kush", "OG", "Kush"],
			 "imageUrl": "images/strains/acapulcoGold.jpg"
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
			 	} 	
		 	],  
		 	 "conditions": ["Cancer", "Nausea", "Epilepsy", "Stress"],
			 "positiveEffects": [""],
			 "negativeEffects": [""],
			 "descriptionDetailed": "Detailed description here. Detailed description here.Detailed description here.Detailed description here. Detailed description here.",
			 "descriptionAbbrev":  "Short description here.",
			 "tags": ["Hybrid", "Canna-Tsu", "Cancer", "Nausea", "Epilepsy", "Stress"],
			 "imageUrl": "images/strains/acapulcoGold.jpg"
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
			 	} 	
		 	], 
		 	 "conditions": [""],
			 "positiveEffects": [""],
			 "negativeEffects": [""],
			 "descriptionDetailed": "Detailed description here. Detailed description here.Detailed description here.Detailed description here. Detailed description here.",
			 "descriptionAbbrev":  "Short description here.",
			 "tags": ["Hybrid", "Nebula"],
			 "imageUrl": "images/strains/acapulcoGold.jpg"
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
			 	} 	
		 	], 
		 	 "conditions": [""],
			 "positiveEffects": [""],
			 "negativeEffects": [""],
			 "descriptionDetailed": "Detailed description here. Detailed description here.Detailed description here.Detailed description here. Detailed description here.",
			 "descriptionAbbrev":  "Short description here.",
			 "tags": ["Hybrid", "XJ-13"],
			 "imageUrl": "images/strains/acapulcoGold.jpg"
			},
			{"strainId": 14,
			 "strainName": "Yumbodlt", 
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
			 	} 	
		 	],
		 	 "conditions": [""],
			 "positiveEffects": [""],
			 "negativeEffects": [""],
			 "descriptionDetailed": "Detailed description here. Detailed description here.Detailed description here.Detailed description here. Detailed description here.",
			 "descriptionAbbrev":  "Short description here.",
			 "tags": ["Indica", "Yumbodlt"],
			 "imageUrl": "images/strains/acapulcoGold.jpg"
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
			 	} 	
		 	], 
		 	 "conditions": [""],
			 "positiveEffects": [""],
			 "negativeEffects": [""],
			 "descriptionDetailed": "Detailed description here. Detailed description here.Detailed description here.Detailed description here. Detailed description here.",
			 "descriptionAbbrev":  "Short description here.",
			 "tags": ["Sativa", "Vortex"],
			 "imageUrl": "images/strains/acapulcoGold.jpg"
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
			 	} 	
		 	],
		 	 "conditions": [""],
			 "positiveEffects": [""],
			 "negativeEffects": [""],
			 "descriptionDetailed": "Detailed description here. Detailed description here.Detailed description here.Detailed description here. Detailed description here.",
			 "descriptionAbbrev":  "Short description here.",
			 "tags": ["Hybrid", "Warlock"],
			 "imageUrl": "images/strains/acapulcoGold.jpg"
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
			 	} 	
		 	], 
		 	 "conditions": [""],
			 "positiveEffects": [""],
			 "negativeEffects": [""],
			 "descriptionDetailed": "Detailed description here. Detailed description here.Detailed description here.Detailed description here. Detailed description here.",
			 "descriptionAbbrev":  "Short description here.",
			 "tags": ["Sativa", "Strawberry Cough"],
			 "imageUrl": "images/strains/acapulcoGold.jpg"
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
			 	} 	
		 	], 
		 	 "conditions": [""],
			 "positiveEffects": [""],
			 "negativeEffects": [""],
			 "descriptionDetailed": "Detailed description here. Detailed description here.Detailed description here.Detailed description here. Detailed description here.",
			 "descriptionAbbrev":  "Short description here.",
			 "tags": ["Hybrid", "Stardawg"],
			 "imageUrl": "images/strains/acapulcoGold.jpg"
			},
			{"strainId": 19,
			 "strainName": "Strawberry", 
			 "strainType": "",
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
			 	} 	
		 	],  
		 	 "conditions": [""],
			 "positiveEffects": [""],
			 "negativeEffects": [""],
			 "descriptionDetailed": "Detailed description here. Detailed description here.Detailed description here.Detailed description here. Detailed description here.",
			 "descriptionAbbrev":  "Short description here.",
			 "tags": ["Strawberry"],
			 "imageUrl": "images/strains/acapulcoGold.jpg"
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
			 	} 	
		 	], 
		 	 "conditions": ["Stress", "Depression", "Pain", "Lack of Appetite", "Headache"],
			 "positiveEffects": ["Happy", "Uplifted", "Euphoric", "Energetic", "Creative"],
			 "negativeEffects": ["Dry Mouth", "Dry Eyes", "Paranoid", "Dizzy", "Anxious"],
			 "descriptionDetailed": "Detailed description here. Detailed description here.Detailed description here.Detailed description here. Detailed description here.",
			 "descriptionAbbrev":  "Short description here.",
			 "tags": ["Sativa", "Sour Diesel", "Stress", "Depression", "Pain", "Lack of Appetite", "Headache", "Happy", "Uplifted", "Euphoric", "Energetic", "Creative"],
			 "imageUrl": "images/strains/acapulcoGold.jpg"
			},
			{"strainId": 21,
			 "strainName": "Shipwreck", 
			 "strainType": "",
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
			 	} 	
		 	], 
		 	 "conditions": [""],
			 "positiveEffects": [""],
			 "negativeEffects": [""],
			 "descriptionDetailed": "Detailed description here. Detailed description here.Detailed description here.Detailed description here. Detailed description here.",
			 "descriptionAbbrev":  "Short description here.",
			 "tags": ["Shipwreck"],
			 "imageUrl": "images/strains/acapulcoGold.jpg"
			},
			{"strainId": 22,
			 "strainName": "Skywalker", 
			 "strainType": "",
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
			 	} 	
		 	], 
		 	 "conditions": [""],
			 "positiveEffects": [""],
			 "negativeEffects": [""],
			 "descriptionDetailed": "Detailed description here. Detailed description here.Detailed description here.Detailed description here. Detailed description here.",
			 "descriptionAbbrev":  "Short description here.",
			 "tags": ["Skywalker"],
			 "imageUrl": "images/strains/acapulcoGold.jpg"
			},
			{"strainId": 23,
			 "strainName": "Romulan", 
			 "strainType": "",
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
			 	} 	
		 	], 
		 	 "conditions": [""],
			 "positiveEffects": [""],
			 "negativeEffects": [""],
			 "descriptionDetailed": "Detailed description here. Detailed description here.Detailed description here.Detailed description here. Detailed description here.",
			 "descriptionAbbrev":  "Short description here.",
			 "tags": ["Romulan"],
			 "imageUrl": "images/strains/acapulcoGold.jpg"
			},
			{"strainId": 24,
			 "strainName": "Purple Wreck", 
			 "strainType": "",
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
			 	} 	
		 	], 
		 	 "conditions": [""],
			 "positiveEffects": [""],
			 "negativeEffects": [""],
			 "descriptionDetailed": "Detailed description here. Detailed description here.Detailed description here.Detailed description here. Detailed description here.",
			 "descriptionAbbrev":  "Short description here.",
			 "tags": ["Purple Wreck"],
			 "imageUrl": "images/strains/acapulcoGold.jpg"
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
			 	} 	
		 	], 
		 	 "conditions": ["PMS"],
			 "positiveEffects": [""],
			 "negativeEffects": [""],
			 "descriptionDetailed": "Detailed description here. Detailed description here.Detailed description here.Detailed description here. Detailed description here.",
			 "descriptionAbbrev":  "Short description here.",
			 "tags": ["Hybrid", "Pineapple", "PMS"],
			 "imageUrl": "images/strains/acapulcoGold.jpg"
			},
			{"strainId": 26,
			 "strainName": "Purple Cheese", 
			 "strainType": "Hybrid",
			 "components": [
			 	{ 
			 		"name": "THC9", 
			 		"value": 24.40
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 0.64
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
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Caryophyllene", 
			 		"value": 0.00
			 	},
			 	{ 
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
			 	} 	
		 	], 
		 	 "conditions": ["PMS"],
			 "positiveEffects": [""],
			 "negativeEffects": [""],
			 "descriptionDetailed": "Detailed description here. Detailed description here.Detailed description here.Detailed description here. Detailed description here.",
			 "descriptionAbbrev":  "Short description here.",
			 "tags": ["Hybrid", "Cheese", "Purple", "Purple Cheese", "PMS"],
			 "imageUrl": "images/strains/acapulcoGold.jpg"
			},
			{"strainId": 27,
			 "strainName": "ACDC", 
			 "strainType": "Hybrid",
			 "components": [
			 	{ 
			 		"name": "THC9", 
			 		"value": 0.80
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 20.00
			 	},
			 	{ 
			 		"name": "CBN", 
			 		"value": 0.05
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
			 	} 	
		 	],  
		 	 "conditions": ["Bipolar", "Depression", "Nausea", "Hypertension", "HIV/AIDS", "Glaucoma", "PTSD", "Stress"],
			 "positiveEffects": [""],
			 "negativeEffects": [""],
			 "descriptionDetailed": "Detailed description here. Detailed description here.Detailed description here.Detailed description here. Detailed description here.",
			 "descriptionAbbrev":  "Short description here.",
			 "tags": ["Hybrid", "ACDC", "Bipolar", "Depression", "Nausea", "Hypertension", "HIV/AIDS", "Glaucoma", "PTSD", "Stress"],
			 "imageUrl": "images/strains/acapulcoGold.jpg"
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
			 	} 	
		 	],  
		 	 "conditions": ["Asthma", "Nausea"],
			 "positiveEffects": [""],
			 "negativeEffects": [""],
			 "descriptionDetailed": "Detailed description here. Detailed description here.Detailed description here.Detailed description here. Detailed description here.",
			 "descriptionAbbrev":  "Short description here.",
			 "tags": ["Indica", "Shark Shock", "Asthma", "Nausea"],
			 "imageUrl": "images/strains/acapulcoGold.jpg"
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
			 	} 	
		 	],  
		 	 "conditions": ["Asthma", "PMS"],
			 "positiveEffects": [""],
			 "negativeEffects": [""],
			 "descriptionDetailed": "Detailed description here. Detailed description here.Detailed description here.Detailed description here. Detailed description here.",
			 "descriptionAbbrev":  "Short description here.",
			 "tags": ["Indica", "OG", "Superman OG", "Asthma", "PMS"],
			 "imageUrl": "images/strains/acapulcoGold.jpg"
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
			 	} 	
		 	], 
		 	 "conditions": ["Asthma", "Bipolar", "Nausea", "PMS"],
			 "positiveEffects": [""],
			 "negativeEffects": [""],
			 "descriptionDetailed": "Detailed description here. Detailed description here.Detailed description here.Detailed description here. Detailed description here.",
			 "descriptionAbbrev":  "Short description here.",
			 "tags": ["Hybrid", "Thin Mint", "Asthma", "Bipolar", "Nausea", "PMS"],
			 "imageUrl": "images/strains/acapulcoGold.jpg"
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
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Caryophyllene", 
			 		"value": 0.00
			 	},
			 	{ 
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
			 	} 	
		 	],  
		 	 "conditions": ["Diesel", "Bipolar", "Pain", "Stress"],
			 "positiveEffects": [""],
			 "negativeEffects": [""],
			 "descriptionDetailed": "Detailed description here. Detailed description here.Detailed description here.Detailed description here. Detailed description here.",
			 "descriptionAbbrev":  "Short description here.",
			 "tags": ["Hybrid", "Banana Diesel", "Diesel", "Bipolar", "Pain", "Stress"],
			 "imageUrl": "images/strains/acapulcoGold.jpg"
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
			 	} 	
		 	],  
		 	 "conditions": ["Bipolar", "Depression", "Nausea", "Stress"],
			 "positiveEffects": [""],
			 "negativeEffects": [""],
			 "descriptionDetailed": "Detailed description here. Detailed description here.Detailed description here.Detailed description here. Detailed description here.",
			 "descriptionAbbrev":  "Short description here.",
			 "tags": ["Indica", "Candy OG", "OG", "Bipolar", "Depression", "Nausea", "Stress"],
			 "imageUrl": "images/strains/acapulcoGold.jpg"
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
			 	} 	
		 	],  
		 	 "conditions": ["Bipolar", "Stress"],
			 "positiveEffects": [""],
			 "negativeEffects": [""],
			 "descriptionDetailed": "Detailed description here. Detailed description here.Detailed description here.Detailed description here. Detailed description here.",
			 "descriptionAbbrev":  "Short description here.",
			 "tags": ["Hybrid", "Chem Valley Kush", "Kush", "Bipolar", "Stress"],
			 "imageUrl": "images/strains/acapulcoGold.jpg"
			},
			{"strainId": 34,
			 "strainName": "Confidential Cheese", 
			 "strainType": "Indica",
			 "components": [
			 	{ 
			 		"name": "THC9", 
			 		"value": 22.90
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 0.39
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
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Caryophyllene", 
			 		"value": 0.00
			 	},
			 	{ 
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
			 	} 	
		 	],  
		 	 "conditions": ["Bipolar", "Nausea", "Stress"],
			 "positiveEffects": [""],
			 "negativeEffects": [""],
			 "descriptionDetailed": "Detailed description here. Detailed description here.Detailed description here.Detailed description here. Detailed description here.",
			 "descriptionAbbrev":  "Short description here.",
			 "tags": ["Indica", "Confidential Cheese", "Cheese", "Bipolar", "Nausea", "Stress"],
			 "imageUrl": "images/strains/acapulcoGold.jpg"
			},
			{"strainId": 35,
			 "strainName": "Deadhead OG", 
			 "strainType": "Hybrid",
			 "components": [
			 	{ 
			 		"name": "THC9", 
			 		"value": 22.90
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 0.39
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
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Caryophyllene", 
			 		"value": 0.00
			 	},
			 	{ 
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
			 	} 	
		 	],  
		 	 "conditions": ["Bipolar", "Depression", "Migraines", "Headache", "Stress"],
			 "positiveEffects": [""],
			 "negativeEffects": [""],
			 "descriptionDetailed": "Detailed description here. Detailed description here.Detailed description here.Detailed description here. Detailed description here.",
			 "descriptionAbbrev":  "Short description here.",
			 "tags": ["Hybrid", "Deadhead OG", "OG", "Bipolar", "Depression", "Migraines", "Headache", "Stress"],
			 "imageUrl": "images/strains/acapulcoGold.jpg"
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
			 	} 	
		 	],  
		 	 "conditions": ["Bipolar", "Migraines", "Headache", "Stress"],
			 "positiveEffects": [""],
			 "negativeEffects": [""],
			 "descriptionDetailed": "Detailed description here. Detailed description here.Detailed description here.Detailed description here. Detailed description here.",
			 "descriptionAbbrev":  "Short description here.",
			 "tags": ["Indica", "Diablo", "Bipolar", "Migraines", "Headache", "Stress"],
			 "imageUrl": "images/strains/acapulcoGold.jpg"
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
			 		"value": 0.28
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
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Caryophyllene", 
			 		"value": 0.00
			 	},
			 	{ 
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
			 	} 	
		 	],  
		 	 "conditions": ["Bipolar"],
			 "positiveEffects": [""],
			 "negativeEffects": [""],
			 "descriptionDetailed": "Detailed description here. Detailed description here.Detailed description here.Detailed description here. Detailed description here.",
			 "descriptionAbbrev":  "Short description here.",
			 "tags": ["Hybrid", "Dutch Passion", "Bipolar"],
			 "imageUrl": "images/strains/acapulcoGold.jpg"
			},
			{"strainId": 38,
			 "strainName": "Eden OG", 
			 "strainType": "Hybrid",
			 "components": [
			 	{ 
			 		"name": "THC9", 
			 		"value": 17.70
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 0.23
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
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Caryophyllene", 
			 		"value": 0.00
			 	},
			 	{ 
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
			 	} 	
		 	],  
		 	 "conditions": ["Bipolar", "Migraines", "Headache", "Nausea"],
			 "positiveEffects": [""],
			 "negativeEffects": [""],
			 "descriptionDetailed": "Detailed description here. Detailed description here.Detailed description here.Detailed description here. Detailed description here.",
			 "descriptionAbbrev":  "Short description here.",
			 "tags": ["Hybrid", "Eden OG", "OG", "Bipolar", "Migraines", "Headache", "Nausea"],
			 "imageUrl": "images/strains/acapulcoGold.jpg"
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
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Caryophyllene", 
			 		"value": 0.00
			 	},
			 	{ 
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
			 	} 	
		 	],  
		 	 "conditions": ["Bipolar"],
			 "positiveEffects": [""],
			 "negativeEffects": [""],
			 "descriptionDetailed": "Detailed description here. Detailed description here.Detailed description here.Detailed description here. Detailed description here.",
			 "descriptionAbbrev":  "Short description here.",
			 "tags": ["Sativa", "Euphoria", "Bipolar"],
			 "imageUrl": "images/strains/acapulcoGold.jpg"
			},
			{"strainId": 40,
			 "strainName": "Fire Bomb", 
			 "strainType": "Hybrid",
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
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Caryophyllene", 
			 		"value": 0.00
			 	},
			 	{ 
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
			 	} 	
		 	],  
		 	 "conditions": ["Bipolar", "Migraines", "Headache"],
			 "positiveEffects": [""],
			 "negativeEffects": [""],
			 "descriptionDetailed": "Detailed description here. Detailed description here.Detailed description here.Detailed description here. Detailed description here.",
			 "descriptionAbbrev":  "Short description here.",
			 "tags": ["Hybrid", "Fire Bomb", "Bipolar", "Migraines", "Headache"],
			 "imageUrl": "images/strains/acapulcoGold.jpg"
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
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Caryophyllene", 
			 		"value": 0.00
			 	},
			 	{ 
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
			 	} 	
		 	],  
		 	 "conditions": ["Bipolar", "Migraines", "Headache"],
			 "positiveEffects": [""],
			 "negativeEffects": [""],
			 "descriptionDetailed": "Detailed description here. Detailed description here.Detailed description here.Detailed description here. Detailed description here.",
			 "descriptionAbbrev":  "Short description here.",
			 "tags": ["Hybrid", "Forum Cookies/GSC", "Bipolar", "Migraines", "Headache"],
			 "imageUrl": "images/strains/acapulcoGold.jpg"
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
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Caryophyllene", 
			 		"value": 0.00
			 	},
			 	{ 
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
			 	} 	
		 	],  
		 	 "conditions": ["Bipolar", "Migraines", "Headache", "Hypertension", "Glaucoma"],
			 "positiveEffects": [""],
			 "negativeEffects": [""],
			 "descriptionDetailed": "Detailed description here. Detailed description here.Detailed description here.Detailed description here. Detailed description here.",
			 "descriptionAbbrev":  "Short description here.",
			 "tags": ["Hybrid", "Gooey Wreck", "Wreck", "Bipolar", "Migraines", "Headache", "Hypertension", "Glaucoma"],
			 "imageUrl": "images/strains/acapulcoGold.jpg"
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
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Caryophyllene", 
			 		"value": 0.00
			 	},
			 	{ 
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
			 	} 	
		 	],  
		 	 "conditions": ["Bipolar", "Migraines", "Headache", "PMS"],
			 "positiveEffects": [""],
			 "negativeEffects": [""],
			 "descriptionDetailed": "Detailed description here. Detailed description here.Detailed description here.Detailed description here. Detailed description here.",
			 "descriptionAbbrev":  "Short description here.",
			 "tags": ["Hybrid", "Grapefruit Haze", "Haze", "Bipolar", "Migraines", "Headache", "PMS"],
			 "imageUrl": "images/strains/acapulcoGold.jpg"
			},
			{"strainId": 44,
			 "strainName": "Green Crack", 
			 "strainType": "Sativa",
			 "components": [
			 	{ 
			 		"name": "THC9", 
			 		"value": 24.70
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 0.50
			 	},
			 	{ 
			 		"name": "CBN", 
			 		"value": 0.04
			 	},
			 	{ 
			 		"name": "CBG", 
			 		"value": 1.7
			 	},
			 	{ 
			 		"name": "CBC", 
			 		"value": 0.12
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
			 		"value": 0.70
			 	},
			 	{ 
			 		"name": "Caryophyllene", 
			 		"value": 0.40
			 	},
			 	{ 
			 		"name": "Limonene", 
			 		"value": 0.20
			 	},
			 	{ 
			 		"name": "Linalool", 
			 		"value": 0.04
			 	},
			 	{ 
			 		"name": "Eucalyptol", 
			 		"value": 0.0
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
			 	} 	
		 	],  
		 	 "conditions": ["Bipolar"],
			 "positiveEffects": [""],
			 "negativeEffects": [""],
			 "descriptionDetailed": "Detailed description here. Detailed description here.Detailed description here.Detailed description here. Detailed description here.",
			 "descriptionAbbrev":  "Short description here.",
			 "tags": ["Sativa", "Green Crack", "Bipolar"],
			 "imageUrl": "images/strains/acapulcoGold.jpg"
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
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Caryophyllene", 
			 		"value": 0.00
			 	},
			 	{ 
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
			 	} 	
		 	],  
		 	 "conditions": ["Bipolar", "PMS"],
			 "positiveEffects": [""],
			 "negativeEffects": [""],
			 "descriptionDetailed": "Detailed description here. Detailed description here.Detailed description here.Detailed description here. Detailed description here.",
			 "descriptionAbbrev":  "Short description here.",
			 "tags": ["Hybrid", "Green Dream", "Bipolar"],
			 "imageUrl": "images/strains/acapulcoGold.jpg"
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
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Caryophyllene", 
			 		"value": 0.00
			 	},
			 	{ 
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
			 	} 	
		 	],  
		 	 "conditions": ["Bipolar", "Migraines", "Headache", "Nausea", "Glaucoma"],
			 "positiveEffects": [""],
			 "negativeEffects": [""],
			 "descriptionDetailed": "Detailed description here. Detailed description here.Detailed description here.Detailed description here. Detailed description here.",
			 "descriptionAbbrev":  "Short description here.",
			 "tags": ["Sativa", "Green Thailand", "Bipolar", "Migraines", "Headache", "Nausea", "Glaucoma"],
			 "imageUrl": "images/strains/acapulcoGold.jpg"
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
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Caryophyllene", 
			 		"value": 0.00
			 	},
			 	{ 
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
			 	} 	
		 	],  
		 	 "conditions": ["Bipolar", "Migraines", "Headache"],
			 "positiveEffects": [""],
			 "negativeEffects": [""],
			 "descriptionDetailed": "Detailed description here. Detailed description here.Detailed description here.Detailed description here. Detailed description here.",
			 "descriptionAbbrev":  "Short description here.",
			 "tags": ["Hybrid", "H-Train Wreck", "Bipolar", "Migraines", "Headache"],
			 "imageUrl": "images/strains/acapulcoGold.jpg"
			},
			{"strainId": 48,
			 "strainName": "Hawaiian Hulk", 
			 "strainType": "Sativa",
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
			 		"value": 0.00
			 	},
			 	{ 
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
			 	} 	
		 	],  
		 	 "conditions": ["Bipolar", "Migraines", "Headache"],
			 "positiveEffects": [""],
			 "negativeEffects": [""],
			 "descriptionDetailed": "Detailed description here. Detailed description here.Detailed description here.Detailed description here. Detailed description here.",
			 "descriptionAbbrev":  "Short description here.",
			 "tags": ["Sativa", "Hawaiian Hulk", "Hawaiian","Bipolar", "Migraines", "Headache"],
			 "imageUrl": "images/strains/acapulcoGold.jpg"
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
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Caryophyllene", 
			 		"value": 0.00
			 	},
			 	{ 
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
			 	} 	
		 	],  
		 	 "conditions": ["Bipolar", "Migraines", "Headache", "PMS"],
			 "positiveEffects": [""],
			 "negativeEffects": [""],
			 "descriptionDetailed": "Detailed description here. Detailed description here.Detailed description here.Detailed description here. Detailed description here.",
			 "descriptionAbbrev":  "Short description here.",
			 "tags": ["Sativa", "Jack Chemdawg", "Chemdawg", "Jack", "Bipolar", "Migraines", "Headache", "PMS"],
			 "imageUrl": "images/strains/acapulcoGold.jpg"
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
			 	} 	
		 	],  
		 	 "conditions": ["Bipolar", "Stress", "Depression", "Pain", "Fatigue", "Lack of Appetite"],
			 "positiveEffects": ["Happy", "Uplifted", "Euphoric", "Energetic", "Creative"],
			 "negativeEffects": ["Dry Mouth", "Dry Eyes", "Dizzy", "Paranoid", "Anxious"],
			 "descriptionDetailed": "Detailed description here. Detailed description here.Detailed description here.Detailed description here. Detailed description here.",
			 "descriptionAbbrev":  "Short description here.",
			 "tags": ["Sativa", "Jack Herer", "Jack", "Bipolar", "Stress", "Depression", "Pain", "Fatigue", "Lack of Appetite", "Happy", "Uplifted", "Euphoric", "Energetic", "Creative"],
			 "imageUrl": "images/strains/acapulcoGold.jpg"
			},
			{"strainId": 51,
			 "strainName": "Jillybean", 
			 "strainType": "Hybrid",
			 "components": [
			 	{ 
			 		"name": "THC9", 
			 		"value": 21.30
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 1.81
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
			 	} 	
		 	], "THC": 18.70,
			 	"CBD": 0.31,
			 	"CBN": 0.07,
			 	"CBG": 0.00,
			 	"THCV": 0.00,
			 	"THCA": 0.00,
			 	"THC8": 0.00,
			 	"Pulegone": 0.00,
			 	"Myrcene": 0.00,
			 	"Caryophyllene": 0.00,
			 	"Limonene": 0.00,
			 	"Linalool": 0.00,
			 	"Eucalyptol": 0.00,
			 	"Pinene": 0.00,
			 	"Terpineol": 0.00,
			 	"Terpineol-4": 0.00,
			 	"Cymene": 0.00,
			 	"Apigenin": 0.00,
			 	"Quercetin": 0.00,
			 	"Cannflavin A": 0.00,
			 	"Beta-sitosterol": 0.00,
			 	"CBC": 0.00,
			 	"CBL": 0.00
			 	, 
		 	 "conditions": ["Bipolar", "PMS"],
			 "positiveEffects": [""],
			 "negativeEffects": [""],
			 "descriptionDetailed": "Detailed description here. Detailed description here.Detailed description here.Detailed description here. Detailed description here.",
			 "descriptionAbbrev":  "Short description here.",
			 "tags": ["Hybrid", "Jillybean", "Bipolar", "PMS"],
			 "imageUrl": "images/strains/acapulcoGold.jpg"
			},
			{"strainId": 52,
			 "strainName": "Lamb's Bread", 
			 "strainType": "Sativa",
			 "components": [
			 	{ 
			 		"name": "THC9", 
			 		"value": 21.30
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 1.81
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
			 	} 	
		 	], "THC": 18.50,
			 	"CBD": 0.35,
			 	"CBN": 0.07,
			 	"CBG": 0.00,
			 	"THCV": 0.00,
			 	"THCA": 0.00,
			 	"THC8": 0.00,
			 	"Pulegone": 0.00,
			 	"Myrcene": 0.00,
			 	"Caryophyllene": 0.00,
			 	"Limonene": 0.00,
			 	"Linalool": 0.00,
			 	"Eucalyptol": 0.00,
			 	"Pinene": 0.00,
			 	"Terpineol": 0.00,
			 	"Terpineol-4": 0.00,
			 	"Cymene": 0.00,
			 	"Apigenin": 0.00,
			 	"Quercetin": 0.00,
			 	"Cannflavin A": 0.00,
			 	"Beta-sitosterol": 0.00,
			 	"CBC": 0.00,
			 	"CBL": 0.00
			 	, 
		 	 "conditions": ["Bipolar"],
			 "positiveEffects": [""],
			 "negativeEffects": [""],
			 "descriptionDetailed": "Detailed description here. Detailed description here.Detailed description here.Detailed description here. Detailed description here.",
			 "descriptionAbbrev":  "Short description here.",
			 "tags": ["Sativa", "Lamb's Bread", "Bipolar"],
			 "imageUrl": "images/strains/acapulcoGold.jpg"
			},
			{"strainId": 53,
			 "strainName": "Lemon Haze", 
			 "strainType": "Sativa",
			 "components": [
			 	{ 
			 		"name": "THC9", 
			 		"value": 21.30
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 1.81
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
			 	} 	
		 	], "THC": 23.20,
			 	"CBD": 0.63,
			 	"CBN": 0.70,
			 	"CBG": 0.00,
			 	"THCV": 0.00,
			 	"THCA": 0.00,
			 	"THC8": 0.00,
			 	"Pulegone": 0.00,
			 	"Myrcene": 0.00,
			 	"Caryophyllene": 0.00,
			 	"Limonene": 0.00,
			 	"Linalool": 0.00,
			 	"Eucalyptol": 0.00,
			 	"Pinene": 0.00,
			 	"Terpineol": 0.00,
			 	"Terpineol-4": 0.00,
			 	"Cymene": 0.00,
			 	"Apigenin": 0.00,
			 	"Quercetin": 0.00,
			 	"Cannflavin A": 0.00,
			 	"Beta-sitosterol": 0.00,
			 	"CBC": 0.00,
			 	"CBL": 0.00
			 	, 
		 	 "conditions": ["Bipolar"],
			 "positiveEffects": [""],
			 "negativeEffects": [""],
			 "descriptionDetailed": "Detailed description here. Detailed description here.Detailed description here.Detailed description here. Detailed description here.",
			 "descriptionAbbrev":  "Short description here.",
			 "tags": ["Sativa", "Lemon Haze", "Haze",  "Bipolar"],
			 "imageUrl": "images/strains/acapulcoGold.jpg"
			},
			{"strainId": 54,
			 "strainName": "Lemon Head OG", 
			 "strainType": "Sativa",
			 "components": [
			 	{ 
			 		"name": "THC9", 
			 		"value": 21.30
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 1.81
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
			 	} 	
		 	], "THC": 15.70,
			 	"CBD": 0.39,
			 	"CBN": 0.25,
			 	"CBG": 0.00,
			 	"THCV": 0.00,
			 	"THCA": 0.00,
			 	"THC8": 0.00,
			 	"Pulegone": 0.00,
			 	"Myrcene": 0.00,
			 	"Caryophyllene": 0.00,
			 	"Limonene": 0.00,
			 	"Linalool": 0.00,
			 	"Eucalyptol": 0.00,
			 	"Pinene": 0.00,
			 	"Terpineol": 0.00,
			 	"Terpineol-4": 0.00,
			 	"Cymene": 0.00,
			 	"Apigenin": 0.00,
			 	"Quercetin": 0.00,
			 	"Cannflavin A": 0.00,
			 	"Beta-sitosterol": 0.00,
			 	"CBC": 0.00,
			 	"CBL": 0.00
			 	, 
		 	 "conditions": ["Bipolar", "Migraines", "Headache"],
			 "positiveEffects": [""],
			 "negativeEffects": [""],
			 "descriptionDetailed": "Detailed description here. Detailed description here.Detailed description here.Detailed description here. Detailed description here.",
			 "descriptionAbbrev":  "Short description here.",
			 "tags": ["Sativa", "Lemon Head OG", "OG",  "Bipolar", "Migraines", "Headache"],
			 "imageUrl": "images/strains/acapulcoGold.jpg"
			},
			{"strainId": 55,
			 "strainName": "Lulu", 
			 "strainType": "Sativa",
			 "components": [
			 	{ 
			 		"name": "THC9", 
			 		"value": 21.30
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 1.81
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
			 	} 	
		 	], "THC": 28.20,
			 	"CBD": 0.29,
			 	"CBN": 0.03,
			 	"CBG": 0.00,
			 	"THCV": 0.00,
			 	"THCA": 0.00,
			 	"THC8": 0.00,
			 	"Pulegone": 0.00,
			 	"Myrcene": 0.00,
			 	"Caryophyllene": 0.00,
			 	"Limonene": 0.00,
			 	"Linalool": 0.00,
			 	"Eucalyptol": 0.00,
			 	"Pinene": 0.00,
			 	"Terpineol": 0.00,
			 	"Terpineol-4": 0.00,
			 	"Cymene": 0.00,
			 	"Apigenin": 0.00,
			 	"Quercetin": 0.00,
			 	"Cannflavin A": 0.00,
			 	"Beta-sitosterol": 0.00,
			 	"CBC": 0.00,
			 	"CBL": 0.00
			 	, 
		 	 "conditions": ["Bipolar", "Migraines", "Headache", "Hypertension", "PMS"],
			 "positiveEffects": [""],
			 "negativeEffects": [""],
			 "descriptionDetailed": "Detailed description here. Detailed description here.Detailed description here.Detailed description here. Detailed description here.",
			 "descriptionAbbrev":  "Short description here.",
			 "tags": ["Sativa", "Lulu", "Bipolar", "Migraines", "Headache", "Hypertension", "PMS"],
			 "imageUrl": "images/strains/acapulcoGold.jpg"
			},
			{"strainId": 56,
			 "strainName": "Magic Jack", 
			 "strainType": "Sativa",
			 "components": [
			 	{ 
			 		"name": "THC9", 
			 		"value": 21.30
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 1.81
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
			 	} 	
		 	], "THC": 19.70,
			 	"CBD": 0.36,
			 	"CBN": 0.28,
			 	"CBG": 0.00,
			 	"THCV": 0.00,
			 	"THCA": 0.00,
			 	"THC8": 0.00,
			 	"Pulegone": 0.00,
			 	"Myrcene": 0.00,
			 	"Caryophyllene": 0.00,
			 	"Limonene": 0.00,
			 	"Linalool": 0.00,
			 	"Eucalyptol": 0.00,
			 	"Pinene": 0.00,
			 	"Terpineol": 0.00,
			 	"Terpineol-4": 0.00,
			 	"Cymene": 0.00,
			 	"Apigenin": 0.00,
			 	"Quercetin": 0.00,
			 	"Cannflavin A": 0.00,
			 	"Beta-sitosterol": 0.00,
			 	"CBC": 0.00,
			 	"CBL": 0.00
			 	, 
		 	 "conditions": ["Bipolar", "Migraines", "Headache", "PMS"],
			 "positiveEffects": [""],
			 "negativeEffects": [""],
			 "descriptionDetailed": "Detailed description here. Detailed description here.Detailed description here.Detailed description here. Detailed description here.",
			 "descriptionAbbrev":  "Short description here.",
			 "tags": ["Sativa", "Magic Jack", "Jack", "Bipolar", "Migraines", "Headache", "PMS"],
			 "imageUrl": "images/strains/acapulcoGold.jpg"
			},
			{"strainId": 57,
			 "strainName": "Mike Tyson", 
			 "strainType": "Indica",
			 "components": [
			 	{ 
			 		"name": "THC9", 
			 		"value": 21.30
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 1.81
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
			 	} 	
		 	], "THC": 24.90,
			 	"CBD": 0.31,
			 	"CBN": 0.07,
			 	"CBG": 0.00,
			 	"THCV": 0.00,
			 	"THCA": 0.00,
			 	"THC8": 0.00,
			 	"Pulegone": 0.00,
			 	"Myrcene": 0.00,
			 	"Caryophyllene": 0.00,
			 	"Limonene": 0.00,
			 	"Linalool": 0.00,
			 	"Eucalyptol": 0.00,
			 	"Pinene": 0.00,
			 	"Terpineol": 0.00,
			 	"Terpineol-4": 0.00,
			 	"Cymene": 0.00,
			 	"Apigenin": 0.00,
			 	"Quercetin": 0.00,
			 	"Cannflavin A": 0.00,
			 	"Beta-sitosterol": 0.00,
			 	"CBC": 0.00,
			 	"CBL": 0.00
			 	, 
		 	 "conditions": ["Bipolar", "Hypertension", "PMS"],
			 "positiveEffects": [""],
			 "negativeEffects": [""],
			 "descriptionDetailed": "Detailed description here. Detailed description here.Detailed description here.Detailed description here. Detailed description here.",
			 "descriptionAbbrev":  "Short description here.",
			 "tags": ["Indica", "Mike Tyson", "Bipolar", "Hypertension", "PMS"],
			 "imageUrl": "images/strains/acapulcoGold.jpg"
			},
			{"strainId": 58,
			 "strainName": "Moon Candy", 
			 "strainType": "Sativa",
			 "components": [
			 	{ 
			 		"name": "THC9", 
			 		"value": 21.30
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 1.81
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
			 	} 	
		 	], "THC": 20.40,
			 	"CBD": 0.51,
			 	"CBN": 0.04,
			 	"CBG": 0.00,
			 	"THCV": 0.00,
			 	"THCA": 0.00,
			 	"THC8": 0.00,
			 	"Pulegone": 0.00,
			 	"Myrcene": 0.00,
			 	"Caryophyllene": 0.00,
			 	"Limonene": 0.00,
			 	"Linalool": 0.00,
			 	"Eucalyptol": 0.00,
			 	"Pinene": 0.00,
			 	"Terpineol": 0.00,
			 	"Terpineol-4": 0.00,
			 	"Cymene": 0.00,
			 	"Apigenin": 0.00,
			 	"Quercetin": 0.00,
			 	"Cannflavin A": 0.00,
			 	"Beta-sitosterol": 0.00,
			 	"CBC": 0.00,
			 	"CBL": 0.00
			 	, 
		 	 "conditions": ["Bipolar"],
			 "positiveEffects": [""],
			 "negativeEffects": [""],
			 "descriptionDetailed": "Detailed description here. Detailed description here.Detailed description here.Detailed description here. Detailed description here.",
			 "descriptionAbbrev":  "Short description here.",
			 "tags": ["Sativa", "Moon Candy", "Bipolar"],
			 "imageUrl": "images/strains/acapulcoGold.jpg"
			},
			{"strainId": 59,
			 "strainName": "Moonshine Diesel", 
			 "strainType": "Sativa",
			 "components": [
			 	{ 
			 		"name": "THC9", 
			 		"value": 21.30
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 1.81
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
			 	} 	
		 	], "THC": 22.90,
			 	"CBD": 0.31,
			 	"CBN": 0.08,
			 	"CBG": 0.00,
			 	"THCV": 0.00,
			 	"THCA": 0.00,
			 	"THC8": 0.00,
			 	"Pulegone": 0.00,
			 	"Myrcene": 0.00,
			 	"Caryophyllene": 0.00,
			 	"Limonene": 0.00,
			 	"Linalool": 0.00,
			 	"Eucalyptol": 0.00,
			 	"Pinene": 0.00,
			 	"Terpineol": 0.00,
			 	"Terpineol-4": 0.00,
			 	"Cymene": 0.00,
			 	"Apigenin": 0.00,
			 	"Quercetin": 0.00,
			 	"Cannflavin A": 0.00,
			 	"Beta-sitosterol": 0.00,
			 	"CBC": 0.00,
			 	"CBL": 0.00
			 	, 
		 	 "conditions": ["Bipolar", "Migraines", "Headache", "Nausea", "PMS"],
			 "positiveEffects": [""],
			 "negativeEffects": [""],
			 "descriptionDetailed": "Detailed description here. Detailed description here.Detailed description here.Detailed description here. Detailed description here.",
			 "descriptionAbbrev":  "Short description here.",
			 "tags": ["Sativa", "Moonshine Diesel", "Diesel", "Bipolar", "Migraines", "Headache", "Nausea", "PMS"],
			 "imageUrl": "images/strains/acapulcoGold.jpg"
			},
			{"strainId": 60,
			 "strainName": "Northern Lights", 
			 "strainType": "Indica",
			 "components": [
			 	{ 
			 		"name": "THC9", 
			 		"value": 21.30
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 1.81
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
			 	} 	
		 	], "THC": 30.90,
			 	"CBD": 0.34,
			 	"CBN": 0.02,
			 	"CBG": 0.00,
			 	"THCV": 0.00,
			 	"THCA": 0.00,
			 	"THC8": 0.00,
			 	"Pulegone": 0.00,
			 	"Myrcene": 0.00,
			 	"Caryophyllene": 0.00,
			 	"Limonene": 0.00,
			 	"Linalool": 0.00,
			 	"Eucalyptol": 0.00,
			 	"Pinene": 0.00,
			 	"Terpineol": 0.00,
			 	"Terpineol-4": 0.00,
			 	"Cymene": 0.00,
			 	"Apigenin": 0.00,
			 	"Quercetin": 0.00,
			 	"Cannflavin A": 0.00,
			 	"Beta-sitosterol": 0.00,
			 	"CBC": 0.00,
			 	"CBL": 0.00
			 	, 
		 	 "conditions": ["Bipolar", "Migraines", "Headache"],
			 "positiveEffects": [""],
			 "negativeEffects": [""],
			 "descriptionDetailed": "Detailed description here. Detailed description here.Detailed description here.Detailed description here. Detailed description here.",
			 "descriptionAbbrev":  "Short description here.",
			 "tags": ["Indica", "Northern Lights", "Bipolar", "Migraines", "Headache"],
			 "imageUrl": "images/strains/acapulcoGold.jpg"
			},
			{"strainId": 61,
			 "strainName": "Pineapple Express", 
			 "strainType": "Hybrid",
			 "components": [
			 	{ 
			 		"name": "THC9", 
			 		"value": 21.30
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 1.81
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
			 	} 	
		 	], "THC": 15.50,
			 	"CBD": 0.24,
			 	"CBN": 0.02,
			 	"CBG": 0.00,
			 	"THCV": 0.00,
			 	"THCA": 0.00,
			 	"THC8": 0.00,
			 	"Pulegone": 0.00,
			 	"Myrcene": 0.00,
			 	"Caryophyllene": 0.00,
			 	"Limonene": 0.00,
			 	"Linalool": 0.00,
			 	"Eucalyptol": 0.00,
			 	"Pinene": 0.00,
			 	"Terpineol": 0.00,
			 	"Terpineol-4": 0.00,
			 	"Cymene": 0.00,
			 	"Apigenin": 0.00,
			 	"Quercetin": 0.00,
			 	"Cannflavin A": 0.00,
			 	"Beta-sitosterol": 0.00,
			 	"CBC": 0.00,
			 	"CBL": 0.00
			 	, 
		 	 "conditions": ["Bipolar", "PMS"],
			 "positiveEffects": [""],
			 "negativeEffects": [""],
			 "descriptionDetailed": "Detailed description here. Detailed description here.Detailed description here.Detailed description here. Detailed description here.",
			 "descriptionAbbrev":  "Short description here.",
			 "tags": ["Hybrid", "Pineapple Express", "Bipolar", "PMS"],
			 "imageUrl": "images/strains/acapulcoGold.jpg"
			},
			{"strainId": 62,
			 "strainName": "Platinum Trinity Kush", 
			 "strainType": "Sativa",
			 "components": [
			 	{ 
			 		"name": "THC9", 
			 		"value": 21.30
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 1.81
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
			 	} 	
		 	], "THC": 17.20,
			 	"CBD": 0.52,
			 	"CBN": 0.02,
			 	"CBG": 0.00,
			 	"THCV": 0.00,
			 	"THCA": 0.00,
			 	"THC8": 0.00,
			 	"Pulegone": 0.00,
			 	"Myrcene": 0.00,
			 	"Caryophyllene": 0.00,
			 	"Limonene": 0.00,
			 	"Linalool": 0.00,
			 	"Eucalyptol": 0.00,
			 	"Pinene": 0.00,
			 	"Terpineol": 0.00,
			 	"Terpineol-4": 0.00,
			 	"Cymene": 0.00,
			 	"Apigenin": 0.00,
			 	"Quercetin": 0.00,
			 	"Cannflavin A": 0.00,
			 	"Beta-sitosterol": 0.00,
			 	"CBC": 0.00,
			 	"CBL": 0.00
			 	, 
		 	 "conditions": ["Bipolar", "Migraines", "Headache", "PMS"],
			 "positiveEffects": [""],
			 "negativeEffects": [""],
			 "descriptionDetailed": "Detailed description here. Detailed description here.Detailed description here.Detailed description here. Detailed description here.",
			 "descriptionAbbrev":  "Short description here.",
			 "tags": ["Sativa", "Platnum Trinity Kush", "Kush", "Bipolar", "Migraines", "Headache", "PMS"],
			 "imageUrl": "images/strains/acapulcoGold.jpg"
			},
			{"strainId": 63,
			 "strainName": "Private Reserve OG", 
			 "strainType": "Indica",
			 "components": [
			 	{ 
			 		"name": "THC9", 
			 		"value": 21.30
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 1.81
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
			 	} 	
		 	], "THC": 27.00,
			 	"CBD": 0.38,
			 	"CBN": 0.05,
			 	"CBG": 0.00,
			 	"THCV": 0.00,
			 	"THCA": 0.00,
			 	"THC8": 0.00,
			 	"Pulegone": 0.00,
			 	"Myrcene": 0.00,
			 	"Caryophyllene": 0.00,
			 	"Limonene": 0.00,
			 	"Linalool": 0.00,
			 	"Eucalyptol": 0.00,
			 	"Pinene": 0.00,
			 	"Terpineol": 0.00,
			 	"Terpineol-4": 0.00,
			 	"Cymene": 0.00,
			 	"Apigenin": 0.00,
			 	"Quercetin": 0.00,
			 	"Cannflavin A": 0.00,
			 	"Beta-sitosterol": 0.00,
			 	"CBC": 0.00,
			 	"CBL": 0.00
			 	, 
		 	 "conditions": ["Bipolar"],
			 "positiveEffects": [""],
			 "negativeEffects": [""],
			 "descriptionDetailed": "Detailed description here. Detailed description here.Detailed description here.Detailed description here. Detailed description here.",
			 "descriptionAbbrev":  "Short description here.",
			 "tags": ["Indica", "Private Reserve OG", "OG", "Bipolar"],
			 "imageUrl": "images/strains/acapulcoGold.jpg"
			},
			{"strainId": 64,
			 "strainName": "Purple Haze", 
			 "strainType": "Sativa",
			 "components": [
			 	{ 
			 		"name": "THC9", 
			 		"value": 21.30
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 1.81
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
			 	} 	
		 	], "THC": 16.90,
			 	"CBD": 0.38,
			 	"CBN": 0.08,
			 	"CBG": 0.00,
			 	"THCV": 0.00,
			 	"THCA": 0.00,
			 	"THC8": 0.00,
			 	"Pulegone": 0.00,
			 	"Myrcene": 0.00,
			 	"Caryophyllene": 0.00,
			 	"Limonene": 0.00,
			 	"Linalool": 0.00,
			 	"Eucalyptol": 0.00,
			 	"Pinene": 0.00,
			 	"Terpineol": 0.00,
			 	"Terpineol-4": 0.00,
			 	"Cymene": 0.00,
			 	"Apigenin": 0.00,
			 	"Quercetin": 0.00,
			 	"Cannflavin A": 0.00,
			 	"Beta-sitosterol": 0.00,
			 	"CBC": 0.00,
			 	"CBL": 0.00
			 	, 
		 	 "conditions": ["Bipolar"],
			 "positiveEffects": [""],
			 "negativeEffects": [""],
			 "descriptionDetailed": "Detailed description here. Detailed description here.Detailed description here.Detailed description here. Detailed description here.",
			 "descriptionAbbrev":  "Short description here.",
			 "tags": ["Sativa", "Purple Haze", "Haze", "Bipolar"],
			 "imageUrl": "images/strains/acapulcoGold.jpg"
			},
			{"strainId": 65,
			 "strainName": "Purple Urkle", 
			 "strainType": "Indica",
			 "components": [
			 	{ 
			 		"name": "THC9", 
			 		"value": 21.30
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 1.81
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
			 	} 	
		 	], "THC": 17.60,
			 	"CBD": 0.43,
			 	"CBN": 0.08,
			 	"CBG": 0.00,
			 	"THCV": 0.00,
			 	"THCA": 0.00,
			 	"THC8": 0.00,
			 	"Pulegone": 0.00,
			 	"Myrcene": 0.00,
			 	"Caryophyllene": 0.00,
			 	"Limonene": 0.00,
			 	"Linalool": 0.00,
			 	"Eucalyptol": 0.00,
			 	"Pinene": 0.00,
			 	"Terpineol": 0.00,
			 	"Terpineol-4": 0.00,
			 	"Cymene": 0.00,
			 	"Apigenin": 0.00,
			 	"Quercetin": 0.00,
			 	"Cannflavin A": 0.00,
			 	"Beta-sitosterol": 0.00,
			 	"CBC": 0.00,
			 	"CBL": 0.00
			 	, 
		 	 "conditions": ["Bipolar", "Migraines", "Headache", "PMS"],
			 "positiveEffects": [""],
			 "negativeEffects": [""],
			 "descriptionDetailed": "Detailed description here. Detailed description here.Detailed description here.Detailed description here. Detailed description here.",
			 "descriptionAbbrev":  "Short description here.",
			 "tags": ["Indica", "Purple Urkle", "Purple", "Bipolar", "Migraines", "Headache", "PMS"],
			 "imageUrl": "images/strains/acapulcoGold.jpg"
			},
			{"strainId": 66,
			 "strainName": "Raskal OG", 
			 "strainType": "Hybrid",
			 "components": [
			 	{ 
			 		"name": "THC9", 
			 		"value": 21.30
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 1.81
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
			 	} 	
		 	], "THC": 9.67,
			 	"CBD": 0.12,
			 	"CBN": 0.06,
			 	"CBG": 0.00,
			 	"THCV": 0.00,
			 	"THCA": 0.00,
			 	"THC8": 0.00,
			 	"Pulegone": 0.00,
			 	"Myrcene": 0.00,
			 	"Caryophyllene": 0.00,
			 	"Limonene": 0.00,
			 	"Linalool": 0.00,
			 	"Eucalyptol": 0.00,
			 	"Pinene": 0.00,
			 	"Terpineol": 0.00,
			 	"Terpineol-4": 0.00,
			 	"Cymene": 0.00,
			 	"Apigenin": 0.00,
			 	"Quercetin": 0.00,
			 	"Cannflavin A": 0.00,
			 	"Beta-sitosterol": 0.00,
			 	"CBC": 0.00,
			 	"CBL": 0.00
			 	, 
		 	 "conditions": ["Bipolar", "Nausea", "PMS"],
			 "positiveEffects": [""],
			 "negativeEffects": [""],
			 "descriptionDetailed": "Detailed description here. Detailed description here.Detailed description here.Detailed description here. Detailed description here.",
			 "descriptionAbbrev":  "Short description here.",
			 "tags": ["Hybrid", "Raskal OG", "OG", "Bipolar", "Nausea", "PMS"],
			 "imageUrl": "images/strains/acapulcoGold.jpg"
			},
			{"strainId": 67,
			 "strainName": "Regulator OG", 
			 "strainType": "Indica",
			 "components": [
			 	{ 
			 		"name": "THC9", 
			 		"value": 21.30
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 1.81
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
			 	} 	
		 	], "THC": 23.30,
			 	"CBD": 0.31,
			 	"CBN": 0.19,
			 	"CBG": 0.00,
			 	"THCV": 0.00,
			 	"THCA": 0.00,
			 	"THC8": 0.00,
			 	"Pulegone": 0.00,
			 	"Myrcene": 0.00,
			 	"Caryophyllene": 0.00,
			 	"Limonene": 0.00,
			 	"Linalool": 0.00,
			 	"Eucalyptol": 0.00,
			 	"Pinene": 0.00,
			 	"Terpineol": 0.00,
			 	"Terpineol-4": 0.00,
			 	"Cymene": 0.00,
			 	"Apigenin": 0.00,
			 	"Quercetin": 0.00,
			 	"Cannflavin A": 0.00,
			 	"Beta-sitosterol": 0.00,
			 	"CBC": 0.00,
			 	"CBL": 0.00
			 	, 
		 	 "conditions": ["Bipolar", "Migraines", "Headache"],
			 "positiveEffects": [""],
			 "negativeEffects": [""],
			 "descriptionDetailed": "Detailed description here. Detailed description here.Detailed description here.Detailed description here. Detailed description here.",
			 "descriptionAbbrev":  "Short description here.",
			 "tags": ["Indica", "Regulator OG", "OG", "Bipolar", "Migraines", "Headache"],
			 "imageUrl": "images/strains/acapulcoGold.jpg"
			},
			{"strainId": 68,
			 "strainName": "Saturn OG", 
			 "strainType": "Hybrid",
			 "components": [
			 	{ 
			 		"name": "THC9", 
			 		"value": 21.30
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 1.81
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
			 	} 	
		 	], "THC": 22.40,
			 	"CBD": 0.37,
			 	"CBN": 0.15,
			 	"CBG": 0.00,
			 	"THCV": 0.00,
			 	"THCA": 0.00,
			 	"THC8": 0.00,
			 	"Pulegone": 0.00,
			 	"Myrcene": 0.00,
			 	"Caryophyllene": 0.00,
			 	"Limonene": 0.00,
			 	"Linalool": 0.00,
			 	"Eucalyptol": 0.00,
			 	"Pinene": 0.00,
			 	"Terpineol": 0.00,
			 	"Terpineol-4": 0.00,
			 	"Cymene": 0.00,
			 	"Apigenin": 0.00,
			 	"Quercetin": 0.00,
			 	"Cannflavin A": 0.00,
			 	"Beta-sitosterol": 0.00,
			 	"CBC": 0.00,
			 	"CBL": 0.00
			 	, 
		 	 "conditions": ["Bipolar", "Hypertension", "PMS"],
			 "positiveEffects": [""],
			 "negativeEffects": [""],
			 "descriptionDetailed": "Detailed description here. Detailed description here.Detailed description here.Detailed description here. Detailed description here.",
			 "descriptionAbbrev":  "Short description here.",
			 "tags": ["Hybrid", "Saturn OG", "OG", "Bipolar", "Hypertension", "PMS"],
			 "imageUrl": "images/strains/acapulcoGold.jpg"
			},
			{"strainId": 69,
			 "strainName": "Sherbet Cookies", 
			 "strainType": "Hybrid",
			 "components": [
			 	{ 
			 		"name": "THC9", 
			 		"value": 21.30
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 1.81
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
			 	} 	
		 	], "THC": 15.20,
			 	"CBD": 0.23,
			 	"CBN": 0.25,
			 	"CBG": 0.00,
			 	"THCV": 0.00,
			 	"THCA": 0.00,
			 	"THC8": 0.00,
			 	"Pulegone": 0.00,
			 	"Myrcene": 0.00,
			 	"Caryophyllene": 0.00,
			 	"Limonene": 0.00,
			 	"Linalool": 0.00,
			 	"Eucalyptol": 0.00,
			 	"Pinene": 0.00,
			 	"Terpineol": 0.00,
			 	"Terpineol-4": 0.00,
			 	"Cymene": 0.00,
			 	"Apigenin": 0.00,
			 	"Quercetin": 0.00,
			 	"Cannflavin A": 0.00,
			 	"Beta-sitosterol": 0.00,
			 	"CBC": 0.00,
			 	"CBL": 0.00
			 	, 
		 	 "conditions": ["Bipolar", "Migraines", "Headache"],
			 "positiveEffects": [""],
			 "negativeEffects": [""],
			 "descriptionDetailed": "Detailed description here. Detailed description here.Detailed description here.Detailed description here. Detailed description here.",
			 "descriptionAbbrev":  "Short description here.",
			 "tags": ["Hybrid", "Sherbet Cookies", "Cookies", "Bipolar", "Migraines", "Headache"],
			 "imageUrl": "images/strains/acapulcoGold.jpg"
			},
			{"strainId": 70,
			 "strainName": "Sour Cherry", 
			 "strainType": "Hybrid",
			 "components": [
			 	{ 
			 		"name": "THC9", 
			 		"value": 21.30
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 1.81
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
			 	} 	
		 	], "THC": 14.20,
			 	"CBD": 9.28,
			 	"CBN": 0.08,
			 	"CBG": 0.00,
			 	"THCV": 0.00,
			 	"THCA": 0.00,
			 	"THC8": 0.00,
			 	"Pulegone": 0.00,
			 	"Myrcene": 0.00,
			 	"Caryophyllene": 0.00,
			 	"Limonene": 0.00,
			 	"Linalool": 0.00,
			 	"Eucalyptol": 0.00,
			 	"Pinene": 0.00,
			 	"Terpineol": 0.00,
			 	"Terpineol-4": 0.00,
			 	"Cymene": 0.00,
			 	"Apigenin": 0.00,
			 	"Quercetin": 0.00,
			 	"Cannflavin A": 0.00,
			 	"Beta-sitosterol": 0.00,
			 	"CBC": 0.00,
			 	"CBL": 0.00
			 	, 
		 	 "conditions": ["Bipolar"],
			 "positiveEffects": [""],
			 "negativeEffects": [""],
			 "descriptionDetailed": "Detailed description here. Detailed description here.Detailed description here.Detailed description here. Detailed description here.",
			 "descriptionAbbrev":  "Short description here.",
			 "tags": ["Hybrid", "Sour Cherry", "Bipolar"],
			 "imageUrl": "images/strains/acapulcoGold.jpg"
			},
			{"strainId": 71,
			 "strainName": "Stratosphere", 
			 "strainType": "Hybrid",
			 "components": [
			 	{ 
			 		"name": "THC9", 
			 		"value": 21.30
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 1.81
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
			 	} 	
		 	], "THC": 20.00,
			 	"CBD": 0.31,
			 	"CBN": 0.07,
			 	"CBG": 0.00,
			 	"THCV": 0.00,
			 	"THCA": 0.00,
			 	"THC8": 0.00,
			 	"Pulegone": 0.00,
			 	"Myrcene": 0.00,
			 	"Caryophyllene": 0.00,
			 	"Limonene": 0.00,
			 	"Linalool": 0.00,
			 	"Eucalyptol": 0.00,
			 	"Pinene": 0.00,
			 	"Terpineol": 0.00,
			 	"Terpineol-4": 0.00,
			 	"Cymene": 0.00,
			 	"Apigenin": 0.00,
			 	"Quercetin": 0.00,
			 	"Cannflavin A": 0.00,
			 	"Beta-sitosterol": 0.00,
			 	"CBC": 0.00,
			 	"CBL": 0.00
			 	, 
		 	 "conditions": ["Bipolar", "Migraines", "Headache", "PMS"],
			 "positiveEffects": [""],
			 "negativeEffects": [""],
			 "descriptionDetailed": "Detailed description here. Detailed description here.Detailed description here.Detailed description here. Detailed description here.",
			 "descriptionAbbrev":  "Short description here.",
			 "tags": ["Hybrid", "Stratosphere", "Bipolar", "Migraines", "Headache", "PMS"],
			 "imageUrl": "images/strains/acapulcoGold.jpg"
			},
			{"strainId": 72,
			 "strainName": "Super Grandaddy", 
			 "strainType": "Indica",
			 "components": [
			 	{ 
			 		"name": "THC9", 
			 		"value": 21.30
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 1.81
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
			 	} 	
		 	], "THC": 16.10,
			 	"CBD": 0.38,
			 	"CBN": 0.07,
			 	"CBG": 0.00,
			 	"THCV": 0.00,
			 	"THCA": 0.00,
			 	"THC8": 0.00,
			 	"Pulegone": 0.00,
			 	"Myrcene": 0.00,
			 	"Caryophyllene": 0.00,
			 	"Limonene": 0.00,
			 	"Linalool": 0.00,
			 	"Eucalyptol": 0.00,
			 	"Pinene": 0.00,
			 	"Terpineol": 0.00,
			 	"Terpineol-4": 0.00,
			 	"Cymene": 0.00,
			 	"Apigenin": 0.00,
			 	"Quercetin": 0.00,
			 	"Cannflavin A": 0.00,
			 	"Beta-sitosterol": 0.00,
			 	"CBC": 0.00,
			 	"CBL": 0.00
			 	, 
		 	 "conditions": ["Bipolar", "Hypertension", "PMS"],
			 "positiveEffects": [""],
			 "negativeEffects": [""],
			 "descriptionDetailed": "Detailed description here. Detailed description here.Detailed description here.Detailed description here. Detailed description here.",
			 "descriptionAbbrev":  "Short description here.",
			 "tags": ["Indica", "Super Grandaddy", "Bipolar", "Hypertension", "PMS"],
			 "imageUrl": "images/strains/acapulcoGold.jpg"
			},
			{"strainId": 73,
			 "strainName": "Tangerine", 
			 "strainType": "Hybrid",
			 "components": [
			 	{ 
			 		"name": "THC9", 
			 		"value": 21.30
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 1.81
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
			 	} 	
		 	], "THC": 22.10,
			 	"CBD": 0.49,
			 	"CBN": 0.12,
			 	"CBG": 0.00,
			 	"THCV": 0.00,
			 	"THCA": 0.00,
			 	"THC8": 0.00,
			 	"Pulegone": 0.00,
			 	"Myrcene": 0.00,
			 	"Caryophyllene": 0.00,
			 	"Limonene": 0.00,
			 	"Linalool": 0.00,
			 	"Eucalyptol": 0.00,
			 	"Pinene": 0.00,
			 	"Terpineol": 0.00,
			 	"Terpineol-4": 0.00,
			 	"Cymene": 0.00,
			 	"Apigenin": 0.00,
			 	"Quercetin": 0.00,
			 	"Cannflavin A": 0.00,
			 	"Beta-sitosterol": 0.00,
			 	"CBC": 0.00,
			 	"CBL": 0.00
			 	, 
		 	 "conditions": ["Bipolar", "PMS"],
			 "positiveEffects": [""],
			 "negativeEffects": [""],
			 "descriptionDetailed": "Detailed description here. Detailed description here.Detailed description here.Detailed description here. Detailed description here.",
			 "descriptionAbbrev":  "Short description here.",
			 "tags": ["Hybrid", "Tangerine", "Bipolar", "PMS"],
			 "imageUrl": "images/strains/acapulcoGold.jpg"
			},
			{"strainId": 74,
			 "strainName": "Tangilope", 
			 "strainType": "Sativa",
			 "components": [
			 	{ 
			 		"name": "THC9", 
			 		"value": 21.30
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 1.81
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
			 	} 	
		 	], "THC": 27.30,
			 	"CBD": 0.39,
			 	"CBN": 0.10,
			 	"CBG": 0.00,
			 	"THCV": 0.00,
			 	"THCA": 0.00,
			 	"THC8": 0.00,
			 	"Pulegone": 0.00,
			 	"Myrcene": 0.00,
			 	"Caryophyllene": 0.00,
			 	"Limonene": 0.00,
			 	"Linalool": 0.00,
			 	"Eucalyptol": 0.00,
			 	"Pinene": 0.00,
			 	"Terpineol": 0.00,
			 	"Terpineol-4": 0.00,
			 	"Cymene": 0.00,
			 	"Apigenin": 0.00,
			 	"Quercetin": 0.00,
			 	"Cannflavin A": 0.00,
			 	"Beta-sitosterol": 0.00,
			 	"CBC": 0.00,
			 	"CBL": 0.00
			 	, 
		 	 "conditions": ["Bipolar", "PMS"],
			 "positiveEffects": [""],
			 "negativeEffects": [""],
			 "descriptionDetailed": "Detailed description here. Detailed description here.Detailed description here.Detailed description here. Detailed description here.",
			 "descriptionAbbrev":  "Short description here.",
			 "tags": ["Sativa", "Tangelope", "Bipolar", "PMS"],
			 "imageUrl": "images/strains/acapulcoGold.jpg"
			},
			{"strainId": 75,
			 "strainName": "Tropical OG", 
			 "strainType": "Indica",
			 "components": [
			 	{ 
			 		"name": "THC9", 
			 		"value": 21.30
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 1.81
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
			 	} 	
		 	], "THC": 17.80,
			 	"CBD": 0.35,
			 	"CBN": 0.07,
			 	"CBG": 0.00,
			 	"THCV": 0.00,
			 	"THCA": 0.00,
			 	"THC8": 0.00,
			 	"Pulegone": 0.00,
			 	"Myrcene": 0.00,
			 	"Caryophyllene": 0.00,
			 	"Limonene": 0.00,
			 	"Linalool": 0.00,
			 	"Eucalyptol": 0.00,
			 	"Pinene": 0.00,
			 	"Terpineol": 0.00,
			 	"Terpineol-4": 0.00,
			 	"Cymene": 0.00,
			 	"Apigenin": 0.00,
			 	"Quercetin": 0.00,
			 	"Cannflavin A": 0.00,
			 	"Beta-sitosterol": 0.00,
			 	"CBC": 0.00,
			 	"CBL": 0.00
			 	, 
		 	 "conditions": ["Bipolar", "PMS"],
			 "positiveEffects": [""],
			 "negativeEffects": [""],
			 "descriptionDetailed": "Detailed description here. Detailed description here.Detailed description here.Detailed description here. Detailed description here.",
			 "descriptionAbbrev":  "Short description here.",
			 "tags": ["Indica", "Tropical OG", "OG", "Bipolar", "PMS"],
			 "imageUrl": "images/strains/acapulcoGold.jpg"
			},
			{"strainId": 76,
			 "strainName": "ACDC Super CBD Oil", 
			 "strainType": "Hybrid",
			 "components": [
			 	{ 
			 		"name": "THC9", 
			 		"value": 21.30
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 1.81
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
			 	} 	
		 	], "THC": 9.32,
			 	"CBD": 61.45,
			 	"CBN": 0.00,
			 	"CBG": 0.00,
			 	"THCV": 0.00,
			 	"THCA": 0.00,
			 	"THC8": 0.00,
			 	"Pulegone": 0.00,
			 	"Myrcene": 0.00,
			 	"Caryophyllene": 0.00,
			 	"Limonene": 0.00,
			 	"Linalool": 0.00,
			 	"Eucalyptol": 0.00,
			 	"Pinene": 0.00,
			 	"Terpineol": 0.00,
			 	"Terpineol-4": 0.00,
			 	"Cymene": 0.00,
			 	"Apigenin": 0.00,
			 	"Quercetin": 0.00,
			 	"Cannflavin A": 0.00,
			 	"Beta-sitosterol": 0.00,
			 	"CBC": 0.00,
			 	"CBL": 0.00
			 	, 
		 	 "conditions": ["Cancer", "Pain", "Stress"],
			 "positiveEffects": [""],
			 "negativeEffects": [""],
			 "descriptionDetailed": "Detailed description here. Detailed description here.Detailed description here.Detailed description here. Detailed description here.",
			 "descriptionAbbrev":  "Short description here.",
			 "tags": ["Hybrid", "ACDC Super CBD Oil", "CBD", "Cancer", "Pain", "Stress"],
			 "imageUrl": "images/strains/acapulcoGold.jpg"
			},
			{"strainId": 77,
			 "strainName": "Afghani", 
			 "strainType": "Indica",
			 "components": [
			 	{ 
			 		"name": "THC9", 
			 		"value": 21.30
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 1.81
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
			 	} 	
		 	], "THC": 15.80,
			 	"CBD": 0.40,
			 	"CBN": 0.11,
			 	"CBG": 0.00,
			 	"THCV": 0.00,
			 	"THCA": 0.00,
			 	"THC8": 0.00,
			 	"Pulegone": 0.00,
			 	"Myrcene": 0.00,
			 	"Caryophyllene": 0.00,
			 	"Limonene": 0.00,
			 	"Linalool": 0.00,
			 	"Eucalyptol": 0.00,
			 	"Pinene": 0.00,
			 	"Terpineol": 0.00,
			 	"Terpineol-4": 0.00,
			 	"Cymene": 0.00,
			 	"Apigenin": 0.00,
			 	"Quercetin": 0.00,
			 	"Cannflavin A": 0.00,
			 	"Beta-sitosterol": 0.00,
			 	"CBC": 0.00,
			 	"CBL": 0.00
			 	, 
		 	 "conditions": ["Cancer", "Pain", "Stress"],
			 "positiveEffects": [""],
			 "negativeEffects": [""],
			 "descriptionDetailed": "Detailed description here. Detailed description here.Detailed description here.Detailed description here. Detailed description here.",
			 "descriptionAbbrev":  "Short description here.",
			 "tags": ["Indica", "Afghani", "Cancer", "Pain", "Stress"],
			 "imageUrl": "images/strains/acapulcoGold.jpg"
			},
			{"strainId": 78,
			 "strainName": "Avi-Dekel", 
			 "strainType": "Sativa",
			 "components": [
			 	{ 
			 		"name": "THC9", 
			 		"value": 21.30
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 1.81
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
			 	} 	
		 	], "THC": 0.87,
			 	"CBD": 15.36,
			 	"CBN": 0.16,
			 	"CBG": 0.00,
			 	"THCV": 0.00,
			 	"THCA": 0.00,
			 	"THC8": 0.00,
			 	"Pulegone": 0.00,
			 	"Myrcene": 0.00,
			 	"Caryophyllene": 0.00,
			 	"Limonene": 0.00,
			 	"Linalool": 0.00,
			 	"Eucalyptol": 0.00,
			 	"Pinene": 0.00,
			 	"Terpineol": 0.00,
			 	"Terpineol-4": 0.00,
			 	"Cymene": 0.00,
			 	"Apigenin": 0.00,
			 	"Quercetin": 0.00,
			 	"Cannflavin A": 0.00,
			 	"Beta-sitosterol": 0.00,
			 	"CBC": 0.00,
			 	"CBL": 0.00
			 	, 
		 	 "conditions": ["Cancer", "Pain", "Stress"],
			 "positiveEffects": [""],
			 "negativeEffects": [""],
			 "descriptionDetailed": "Detailed description here. Detailed description here.Detailed description here.Detailed description here. Detailed description here.",
			 "descriptionAbbrev":  "Short description here.",
			 "tags": ["Sativa", "Avi-Dekel", "Cancer", "Pain", "Stress"],
			 "imageUrl": "images/strains/acapulcoGold.jpg"
			},
			{"strainId": 79,
			 "strainName": "Bull Rider", 
			 "strainType": "Hybrid",
			 "components": [
			 	{ 
			 		"name": "THC9", 
			 		"value": 21.30
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 1.81
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
			 	} 	
		 	], "THC": 7.60,
			 	"CBD": 16.42,
			 	"CBN": 0.00,
			 	"CBG": 0.00,
			 	"THCV": 0.00,
			 	"THCA": 0.00,
			 	"THC8": 0.00,
			 	"Pulegone": 0.00,
			 	"Myrcene": 0.00,
			 	"Caryophyllene": 0.00,
			 	"Limonene": 0.00,
			 	"Linalool": 0.00,
			 	"Eucalyptol": 0.00,
			 	"Pinene": 0.00,
			 	"Terpineol": 0.00,
			 	"Terpineol-4": 0.00,
			 	"Cymene": 0.00,
			 	"Apigenin": 0.00,
			 	"Quercetin": 0.00,
			 	"Cannflavin A": 0.00,
			 	"Beta-sitosterol": 0.00,
			 	"CBC": 0.00,
			 	"CBL": 0.00
			 	, 
		 	 "conditions": ["Cancer", "Stress"],
			 "positiveEffects": [""],
			 "negativeEffects": [""],
			 "descriptionDetailed": "Detailed description here. Detailed description here.Detailed description here.Detailed description here. Detailed description here.",
			 "descriptionAbbrev":  "Short description here.",
			 "tags": ["Hybrid", "Bull Rider", "Cancer", "Stress"],
			 "imageUrl": "images/strains/acapulcoGold.jpg"
			},
			{"strainId": 80,
			 "strainName": "Cannatonic", 
			 "strainType": "Hybrid",
			 "components": [
			 	{ 
			 		"name": "THC9", 
			 		"value": 21.30
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 1.81
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
			 	} 	
		 	], "THC": 10.60,
			 	"CBD": 10.24,
			 	"CBN": 0.08,
			 	"CBG": 0.00,
			 	"THCV": 0.00,
			 	"THCA": 0.00,
			 	"THC8": 0.00,
			 	"Pulegone": 0.00,
			 	"Myrcene": 0.00,
			 	"Caryophyllene": 0.00,
			 	"Limonene": 0.00,
			 	"Linalool": 0.00,
			 	"Eucalyptol": 0.00,
			 	"Pinene": 0.00,
			 	"Terpineol": 0.00,
			 	"Terpineol-4": 0.00,
			 	"Cymene": 0.00,
			 	"Apigenin": 0.00,
			 	"Quercetin": 0.00,
			 	"Cannflavin A": 0.00,
			 	"Beta-sitosterol": 0.00,
			 	"CBC": 0.00,
			 	"CBL": 0.00
			 	, 
		 	 "conditions": ["Cancer", "Depression", "Epilepsy", "Stress"],
			 "positiveEffects": [""],
			 "negativeEffects": [""],
			 "descriptionDetailed": "Detailed description here. Detailed description here.Detailed description here.Detailed description here. Detailed description here.",
			 "descriptionAbbrev":  "Short description here.",
			 "tags": ["Hybrid", "Cannatonic", "Cancer", "Depression", "Epilepsy", "Stress"],
			 "imageUrl": "images/strains/acapulcoGold.jpg"
			},
			{"strainId": 81,
			 "strainName": "Charlotte's Web", 
			 "strainType": "Sativa",
			 "components": [
			 	{ 
			 		"name": "THC9", 
			 		"value": 21.30
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 1.81
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
			 	} 	
		 	], "THC": 10.46,
			 	"CBD": 8.40,
			 	"CBN": 0.10,
			 	"CBG": 0.00,
			 	"THCV": 0.00,
			 	"THCA": 0.00,
			 	"THC8": 0.00,
			 	"Pulegone": 0.00,
			 	"Myrcene": 0.00,
			 	"Caryophyllene": 0.00,
			 	"Limonene": 0.00,
			 	"Linalool": 0.00,
			 	"Eucalyptol": 0.00,
			 	"Pinene": 0.00,
			 	"Terpineol": 0.00,
			 	"Terpineol-4": 0.00,
			 	"Cymene": 0.00,
			 	"Apigenin": 0.00,
			 	"Quercetin": 0.00,
			 	"Cannflavin A": 0.00,
			 	"Beta-sitosterol": 0.00,
			 	"CBC": 0.00,
			 	"CBL": 0.00
			 	, 
		 	 "conditions": ["Cancer", "Epilepsy", "Stress"],
			 "positiveEffects": [""],
			 "negativeEffects": [""],
			 "descriptionDetailed": "Detailed description here. Detailed description here.Detailed description here.Detailed description here. Detailed description here.",
			 "descriptionAbbrev":  "Short description here.",
			 "tags": ["Sativa", "Charlotte's Web", "Cancer", "Epilepsy", "Stress"],
			 "imageUrl": "images/strains/acapulcoGold.jpg"
			},
			{"strainId": 82,
			 "strainName": "G13 Haze", 
			 "strainType": "Indica",
			 "components": [
			 	{ 
			 		"name": "THC9", 
			 		"value": 21.30
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 1.81
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
			 	} 	
		 	], "THC": 20.8,
			 	"CBD": 0.37,
			 	"CBN": 0.06,
			 	"CBG": 0.00,
			 	"THCV": 0.00,
			 	"THCA": 0.00,
			 	"THC8": 0.00,
			 	"Pulegone": 0.00,
			 	"Myrcene": 0.00,
			 	"Caryophyllene": 0.00,
			 	"Limonene": 0.00,
			 	"Linalool": 0.00,
			 	"Eucalyptol": 0.00,
			 	"Pinene": 0.00,
			 	"Terpineol": 0.00,
			 	"Terpineol-4": 0.00,
			 	"Cymene": 0.00,
			 	"Apigenin": 0.00,
			 	"Quercetin": 0.00,
			 	"Cannflavin A": 0.00,
			 	"Beta-sitosterol": 0.00,
			 	"CBC": 0.00,
			 	"CBL": 0.00
			 	, 
		 	 "conditions": ["Cancer", "Epilepsy"],
			 "positiveEffects": [""],
			 "negativeEffects": [""],
			 "descriptionDetailed": "Detailed description here. Detailed description here.Detailed description here.Detailed description here. Detailed description here.",
			 "descriptionAbbrev":  "Short description here.",
			 "tags": ["Indica", "G13 Haze", "Cancer", "Epilepsy"],
			 "imageUrl": "images/strains/acapulcoGold.jpg"
			},
			{"strainId": 83,
			 "strainName": "Great White Shark", 
			 "strainType": "Sativa",
			 "components": [
			 	{ 
			 		"name": "THC9", 
			 		"value": 21.30
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 1.81
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
			 	} 	
		 	], "THC": 20.73,
			 	"CBD": 0.28,
			 	"CBN": 0.40,
			 	"CBG": 0.00,
			 	"THCV": 0.00,
			 	"THCA": 0.00,
			 	"THC8": 0.00,
			 	"Pulegone": 0.00,
			 	"Myrcene": 0.00,
			 	"Caryophyllene": 0.00,
			 	"Limonene": 0.00,
			 	"Linalool": 0.00,
			 	"Eucalyptol": 0.00,
			 	"Pinene": 0.00,
			 	"Terpineol": 0.00,
			 	"Terpineol-4": 0.00,
			 	"Cymene": 0.00,
			 	"Apigenin": 0.00,
			 	"Quercetin": 0.00,
			 	"Cannflavin A": 0.00,
			 	"Beta-sitosterol": 0.00,
			 	"CBC": 0.00,
			 	"CBL": 0.00
			 	, 
		 	 "conditions": ["Cancer"],
			 "positiveEffects": [""],
			 "negativeEffects": [""],
			 "descriptionDetailed": "Detailed description here. Detailed description here.Detailed description here.Detailed description here. Detailed description here.",
			 "descriptionAbbrev":  "Short description here.",
			 "tags": ["Sativa", "Great White Shark", "Cancer"],
			 "imageUrl": "images/strains/acapulcoGold.jpg"
			},
			{"strainId": 84,
			 "strainName": "Harle-Tsu", 
			 "strainType": "Hybrid",
			 "components": [
			 	{ 
			 		"name": "THC9", 
			 		"value": 21.30
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 1.81
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
			 	} 	
		 	], "THC": 5.11,
			 	"CBD": 9.85,
			 	"CBN": 0.05,
			 	"CBG": 0.00,
			 	"THCV": 0.00,
			 	"THCA": 0.00,
			 	"THC8": 0.00,
			 	"Pulegone": 0.00,
			 	"Myrcene": 0.00,
			 	"Caryophyllene": 0.00,
			 	"Limonene": 0.00,
			 	"Linalool": 0.00,
			 	"Eucalyptol": 0.00,
			 	"Pinene": 0.00,
			 	"Terpineol": 0.00,
			 	"Terpineol-4": 0.00,
			 	"Cymene": 0.00,
			 	"Apigenin": 0.00,
			 	"Quercetin": 0.00,
			 	"Cannflavin A": 0.00,
			 	"Beta-sitosterol": 0.00,
			 	"CBC": 0.00,
			 	"CBL": 0.00
			 	, 
		 	 "conditions": ["Cancer", "Migraines", "Headache", "Epilepsy"],
			 "positiveEffects": [""],
			 "negativeEffects": [""],
			 "descriptionDetailed": "Detailed description here. Detailed description here.Detailed description here.Detailed description here. Detailed description here.",
			 "descriptionAbbrev":  "Short description here.",
			 "tags": ["Hybrid", "Harle-Tsu", "Cancer", "Migraines", "Headache", "Epilepsy"],
			 "imageUrl": "images/strains/acapulcoGold.jpg"
			},
			{"strainId": 85,
			 "strainName": "Harlequin", 
			 "strainType": "Sativa",
			 "components": [
			 	{ 
			 		"name": "THC9", 
			 		"value": 21.30
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 1.81
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
			 	} 	
		 	], "THC": 6.98,
			 	"CBD": 14.00,
			 	"CBN": 0.01,
			 	"CBG": 0.50,
			 	"THCV": 0.13,
			 	"THCA": 0.00,
			 	"THC8": 0.00,
			 	"Pulegone": 0.00,
			 	"Myrcene": 0.50,
			 	"Caryophyllene": 0.06,
			 	"Limonene": 0.08,
			 	"Linalool": 0.01,
			 	"Eucalyptol": 0.00,
			 	"Pinene": 0.07,
			 	"Terpineol": 0.00,
			 	"Terpineol-4": 0.00,
			 	"Cymene": 0.00,
			 	"Apigenin": 0.00,
			 	"Quercetin": 0.00,
			 	"Cannflavin A": 0.00,
			 	"Beta-sitosterol": 0.00,
			 	"CBC": 0.20,
			 	"CBL": 0.00
			 	, 
		 	 "conditions": ["Cancer", "Nausea", "Epilepsy"],
			 "positiveEffects": [""],
			 "negativeEffects": [""],
			 "descriptionDetailed": "Detailed description here. Detailed description here.Detailed description here.Detailed description here. Detailed description here.",
			 "descriptionAbbrev":  "Short description here.",
			 "tags": ["Sativa", "Harlequin", "Cancer", "Nausea", "Epilepsy"],
			 "imageUrl": "images/strains/acapulcoGold.jpg"
			},
			{"strainId": 86,
			 "strainName": "Hog", 
			 "strainType": "Indica",
			 "components": [
			 	{ 
			 		"name": "THC9", 
			 		"value": 21.30
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 1.81
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
			 	} 	
		 	], "THC": 14.80,
			 	"CBD": 0.43,
			 	"CBN": 0.19,
			 	"CBG": 0.00,
			 	"THCV": 0.00,
			 	"THCA": 0.00,
			 	"THC8": 0.00,
			 	"Pulegone": 0.00,
			 	"Myrcene": 0.00,
			 	"Caryophyllene": 0.00,
			 	"Limonene": 0.00,
			 	"Linalool": 0.00,
			 	"Eucalyptol": 0.00,
			 	"Pinene": 0.00,
			 	"Terpineol": 0.00,
			 	"Terpineol-4": 0.00,
			 	"Cymene": 0.00,
			 	"Apigenin": 0.00,
			 	"Quercetin": 0.00,
			 	"Cannflavin A": 0.00,
			 	"Beta-sitosterol": 0.00,
			 	"CBC": 0.00,
			 	"CBL": 0.00
			 	, 
		 	 "conditions": ["Cancer", "Migraines", "Headache"],
			 "positiveEffects": [""],
			 "negativeEffects": [""],
			 "descriptionDetailed": "Detailed description here. Detailed description here.Detailed description here.Detailed description here. Detailed description here.",
			 "descriptionAbbrev":  "Short description here.",
			 "tags": ["Indica", "Hog", "Cancer", "Migraines", "Headache"],
			 "imageUrl": "images/strains/acapulcoGold.jpg"
			},
			{"strainId": 87,
			 "strainName": "King's Kush", 
			 "strainType": "Indica",
			 "components": [
			 	{ 
			 		"name": "THC9", 
			 		"value": 21.30
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 1.81
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
			 	} 	
		 	], "THC": 24.75,
			 	"CBD": 0.84,
			 	"CBN": 0.03,
			 	"CBG": 0.00,
			 	"THCV": 0.00,
			 	"THCA": 0.00,
			 	"THC8": 0.00,
			 	"Pulegone": 0.00,
			 	"Myrcene": 0.00,
			 	"Caryophyllene": 0.00,
			 	"Limonene": 0.00,
			 	"Linalool": 0.00,
			 	"Eucalyptol": 0.00,
			 	"Pinene": 0.00,
			 	"Terpineol": 0.00,
			 	"Terpineol-4": 0.00,
			 	"Cymene": 0.00,
			 	"Apigenin": 0.00,
			 	"Quercetin": 0.00,
			 	"Cannflavin A": 0.00,
			 	"Beta-sitosterol": 0.00,
			 	"CBC": 0.00,
			 	"CBL": 0.00
			 	, 
		 	 "conditions": ["Cancer"],
			 "positiveEffects": [""],
			 "negativeEffects": [""],
			 "descriptionDetailed": "Detailed description here. Detailed description here.Detailed description here.Detailed description here. Detailed description here.",
			 "descriptionAbbrev":  "Short description here.",
			 "tags": ["Indica", "King's Kush", "Kush","Cancer"],
			 "imageUrl": "images/strains/acapulcoGold.jpg"
			},
			{"strainId": 88,
			 "strainName": "Kosher Kush", 
			 "strainType": "Indica",
			 "components": [
			 	{ 
			 		"name": "THC9", 
			 		"value": 21.30
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 1.81
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
			 	} 	
		 	], "THC": 20.92,
			 	"CBD": 0.36,
			 	"CBN": 0.06,
			 	"CBG": 0.00,
			 	"THCV": 0.00,
			 	"THCA": 0.00,
			 	"THC8": 0.00,
			 	"Pulegone": 0.00,
			 	"Myrcene": 0.00,
			 	"Caryophyllene": 0.00,
			 	"Limonene": 0.00,
			 	"Linalool": 0.00,
			 	"Eucalyptol": 0.00,
			 	"Pinene": 0.00,
			 	"Terpineol": 0.00,
			 	"Terpineol-4": 0.00,
			 	"Cymene": 0.00,
			 	"Apigenin": 0.00,
			 	"Quercetin": 0.00,
			 	"Cannflavin A": 0.00,
			 	"Beta-sitosterol": 0.00,
			 	"CBC": 0.00,
			 	"CBL": 0.00
			 	, 
		 	 "conditions": ["Cancer"],
			 "positiveEffects": [""],
			 "negativeEffects": [""],
			 "descriptionDetailed": "Detailed description here. Detailed description here.Detailed description here.Detailed description here. Detailed description here.",
			 "descriptionAbbrev":  "Short description here.",
			 "tags": ["Indica", "Kosher Kush", "Cancer"],
			 "imageUrl": "images/strains/acapulcoGold.jpg"
			},
			{"strainId": 89,
			 "strainName": "Lemon Larry OG", 
			 "strainType": "Hybrid",
			 "components": [
			 	{ 
			 		"name": "THC9", 
			 		"value": 21.30
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 1.81
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
			 	} 	
		 	], "THC": 9.48,
			 	"CBD": 9.70,
			 	"CBN": 0.03,
			 	"CBG": 0.00,
			 	"THCV": 0.00,
			 	"THCA": 0.00,
			 	"THC8": 0.00,
			 	"Pulegone": 0.00,
			 	"Myrcene": 0.00,
			 	"Caryophyllene": 0.00,
			 	"Limonene": 0.00,
			 	"Linalool": 0.00,
			 	"Eucalyptol": 0.00,
			 	"Pinene": 0.00,
			 	"Terpineol": 0.00,
			 	"Terpineol-4": 0.00,
			 	"Cymene": 0.00,
			 	"Apigenin": 0.00,
			 	"Quercetin": 0.00,
			 	"Cannflavin A": 0.00,
			 	"Beta-sitosterol": 0.00,
			 	"CBC": 0.00,
			 	"CBL": 0.00
			 	, 
		 	 "conditions": ["Cancer", "Epilepsy"],
			 "positiveEffects": [""],
			 "negativeEffects": [""],
			 "descriptionDetailed": "Detailed description here. Detailed description here.Detailed description here.Detailed description here. Detailed description here.",
			 "descriptionAbbrev":  "Short description here.",
			 "tags": ["Hybrid", "Lemon Larry OG","OG", "Cancer", "Epilepsy"],
			 "imageUrl": "images/strains/acapulcoGold.jpg"
			},
			{"strainId": 90,
			 "strainName": "Master Bubba", 
			 "strainType": "Hybrid",
			 "components": [
			 	{ 
			 		"name": "THC9", 
			 		"value": 21.30
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 1.81
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
			 	} 	
		 	], "THC": 9.48,
			 	"CBD": 9.70,
			 	"CBN": 0.03,
			 	"CBG": 0.00,
			 	"THCV": 0.00,
			 	"THCA": 0.00,
			 	"THC8": 0.00,
			 	"Pulegone": 0.00,
			 	"Myrcene": 0.00,
			 	"Caryophyllene": 0.00,
			 	"Limonene": 0.00,
			 	"Linalool": 0.00,
			 	"Eucalyptol": 0.00,
			 	"Pinene": 0.00,
			 	"Terpineol": 0.00,
			 	"Terpineol-4": 0.00,
			 	"Cymene": 0.00,
			 	"Apigenin": 0.00,
			 	"Quercetin": 0.00,
			 	"Cannflavin A": 0.00,
			 	"Beta-sitosterol": 0.00,
			 	"CBC": 0.00,
			 	"CBL": 0.00
			 	, 
		 	 "conditions": ["Cancer"],
			 "positiveEffects": [""],
			 "negativeEffects": [""],
			 "descriptionDetailed": "Detailed description here. Detailed description here.Detailed description here.Detailed description here. Detailed description here.",
			 "descriptionAbbrev":  "Short description here.",
			 "tags": ["Hybrid", "Lemon Larry OG","OG", "Cancer"],
			 "imageUrl": "images/strains/acapulcoGold.jpg"
			},
			{"strainId": 91,
			 "strainName": "Pineapple Thai", 
			 "strainType": "Sativa",
			 "components": [
			 	{ 
			 		"name": "THC9", 
			 		"value": 21.30
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 1.81
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
			 	} 	
		 	], "THC": 16.10,
			 	"CBD": 5.46,
			 	"CBN": 0.07,
			 	"CBG": 0.00,
			 	"THCV": 0.00,
			 	"THCA": 0.00,
			 	"THC8": 0.00,
			 	"Pulegone": 0.00,
			 	"Myrcene": 0.00,
			 	"Caryophyllene": 0.00,
			 	"Limonene": 0.00,
			 	"Linalool": 0.00,
			 	"Eucalyptol": 0.00,
			 	"Pinene": 0.00,
			 	"Terpineol": 0.00,
			 	"Terpineol-4": 0.00,
			 	"Cymene": 0.00,
			 	"Apigenin": 0.00,
			 	"Quercetin": 0.00,
			 	"Cannflavin A": 0.00,
			 	"Beta-sitosterol": 0.00,
			 	"CBC": 0.00,
			 	"CBL": 0.00
			 	, 
		 	 "conditions": ["Cancer"],
			 "positiveEffects": [""],
			 "negativeEffects": [""],
			 "descriptionDetailed": "Detailed description here. Detailed description here.Detailed description here.Detailed description here. Detailed description here.",
			 "descriptionAbbrev":  "Short description here.",
			 "tags": ["Sativa", "Pineapple Thai", "Cancer"],
			 "imageUrl": "images/strains/acapulcoGold.jpg"
			},
			{"strainId": 92,
			 "strainName": "Sour Tsunami", 
			 "strainType": "Hybrid",
			 "components": [
			 	{ 
			 		"name": "THC9", 
			 		"value": 21.30
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 1.81
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
			 	} 	
		 	], "THC": 4.20,
			 	"CBD": 8.43,
			 	"CBN": 0.06,
			 	"CBG": 0.00,
			 	"THCV": 0.00,
			 	"THCA": 0.00,
			 	"THC8": 0.00,
			 	"Pulegone": 0.00,
			 	"Myrcene": 0.00,
			 	"Caryophyllene": 0.00,
			 	"Limonene": 0.00,
			 	"Linalool": 0.00,
			 	"Eucalyptol": 0.00,
			 	"Pinene": 0.00,
			 	"Terpineol": 0.00,
			 	"Terpineol-4": 0.00,
			 	"Cymene": 0.00,
			 	"Apigenin": 0.00,
			 	"Quercetin": 0.00,
			 	"Cannflavin A": 0.00,
			 	"Beta-sitosterol": 0.00,
			 	"CBC": 0.00,
			 	"CBL": 0.00
			 	, 
		 	 "conditions": ["Cancer", "Migraines", "Headache", "Epilepsy"],
			 "positiveEffects": [""],
			 "negativeEffects": [""],
			 "descriptionDetailed": "Detailed description here. Detailed description here.Detailed description here.Detailed description here. Detailed description here.",
			 "descriptionAbbrev":  "Short description here.",
			 "tags": ["Hybrid", "Sour Tsunami", "Sour", "Cancer", "Migraines", "Headache", "Epilepsy"],
			 "imageUrl": "images/strains/acapulcoGold.jpg"
			},
			{"strainId": 93,
			 "strainName": "The White", 
			 "strainType": "Hybrid",
			 "components": [
			 	{ 
			 		"name": "THC9", 
			 		"value": 21.30
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 1.81
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
			 	} 	
		 	], "THC": 24.50,
			 	"CBD": 0.09,
			 	"CBN": 0.01,
			 	"CBG": 1.10,
			 	"THCV": 0.20,
			 	"THCA": 0.00,
			 	"THC8": 0.00,
			 	"Pulegone": 0.00,
			 	"Myrcene": 0.30,
			 	"Caryophyllene": 0.30,
			 	"Limonene": 0.50,
			 	"Linalool": 0.09,
			 	"Eucalyptol": 0.00,
			 	"Pinene": 0.09,
			 	"Terpineol": 0.00,
			 	"Terpineol-4": 0.00,
			 	"Cymene": 0.00,
			 	"Apigenin": 0.00,
			 	"Quercetin": 0.00,
			 	"Cannflavin A": 0.00,
			 	"Beta-sitosterol": 0.00,
			 	"CBC": 0.03,
			 	"CBL": 0.20
			 	, 
		 	 "conditions": ["Cancer"],
			 "positiveEffects": [""],
			 "negativeEffects": [""],
			 "descriptionDetailed": "Detailed description here. Detailed description here.Detailed description here.Detailed description here. Detailed description here.",
			 "descriptionAbbrev":  "Short description here.",
			 "tags": ["Hybrid", "The White", "Cancer"],
			 "imageUrl": "images/strains/acapulcoGold.jpg"
			},
			{"strainId": 94,
			 "strainName": "Valentine X", 
			 "strainType": "Hybrid",
			 "components": [
			 	{ 
			 		"name": "THC9", 
			 		"value": 21.30
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 1.81
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
			 	} 	
		 	], "THC": 1.80,
			 	"CBD": 24.60,
			 	"CBN": 0.06,
			 	"CBG": 0.00,
			 	"THCV": 0.00,
			 	"THCA": 0.00,
			 	"THC8": 0.00,
			 	"Pulegone": 0.00,
			 	"Myrcene": 0.00,
			 	"Caryophyllene": 0.00,
			 	"Limonene": 0.00,
			 	"Linalool": 0.00,
			 	"Eucalyptol": 0.00,
			 	"Pinene": 0.00,
			 	"Terpineol": 0.00,
			 	"Terpineol-4": 0.00,
			 	"Cymene": 0.00,
			 	"Apigenin": 0.00,
			 	"Quercetin": 0.00,
			 	"Cannflavin A": 0.00,
			 	"Beta-sitosterol": 0.00,
			 	"CBC": 0.00,
			 	"CBL": 0.00
			 	, 
		 	 "conditions": ["Cancer", "Epilepsy"],
			 "positiveEffects": [""],
			 "negativeEffects": [""],
			 "descriptionDetailed": "Detailed description here. Detailed description here.Detailed description here.Detailed description here. Detailed description here.",
			 "descriptionAbbrev":  "Short description here.",
			 "tags": ["Hybrid", "The White", "Cancer", "Epilepsy"],
			 "imageUrl": "images/strains/acapulcoGold.jpg"
			},
			{"strainId": 95,
			 "strainName": "White Fire Alien OG", 
			 "strainType": "Hybrid",
			 "components": [
			 	{ 
			 		"name": "THC9", 
			 		"value": 21.30
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 1.81
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
			 	} 	
		 	], "THC": 23.80,
			 	"CBD": 0.32,
			 	"CBN": 0.05,
			 	"CBG": 0.00,
			 	"THCV": 0.00,
			 	"THCA": 0.00,
			 	"THC8": 0.00,
			 	"Pulegone": 0.00,
			 	"Myrcene": 0.00,
			 	"Caryophyllene": 0.00,
			 	"Limonene": 0.00,
			 	"Linalool": 0.00,
			 	"Eucalyptol": 0.00,
			 	"Pinene": 0.00,
			 	"Terpineol": 0.00,
			 	"Terpineol-4": 0.00,
			 	"Cymene": 0.00,
			 	"Apigenin": 0.00,
			 	"Quercetin": 0.00,
			 	"Cannflavin A": 0.00,
			 	"Beta-sitosterol": 0.00,
			 	"CBC": 0.00,
			 	"CBL": 0.00
			 	, 
		 	 "conditions": ["Cancer"],
			 "positiveEffects": [""],
			 "negativeEffects": [""],
			 "descriptionDetailed": "Detailed description here. Detailed description here.Detailed description here.Detailed description here. Detailed description here.",
			 "descriptionAbbrev":  "Short description here.",
			 "tags": ["Hybrid", "White Fire Alien OG", "OG", "Cancer"],
			 "imageUrl": "images/strains/acapulcoGold.jpg"
			},
			{"strainId": 96,
			 "strainName": "Yoda OG", 
			 "strainType": "Hybrid",
			 "components": [
			 	{ 
			 		"name": "THC9", 
			 		"value": 21.30
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 1.81
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
			 	} 	
		 	], "THC": 22.00,
			 	"CBD": 0.28,
			 	"CBN": 0.24,
			 	"CBG": 0.00,
			 	"THCV": 0.00,
			 	"THCA": 0.00,
			 	"THC8": 0.00,
			 	"Pulegone": 0.00,
			 	"Myrcene": 0.00,
			 	"Caryophyllene": 0.00,
			 	"Limonene": 0.00,
			 	"Linalool": 0.00,
			 	"Eucalyptol": 0.00,
			 	"Pinene": 0.00,
			 	"Terpineol": 0.00,
			 	"Terpineol-4": 0.00,
			 	"Cymene": 0.00,
			 	"Apigenin": 0.00,
			 	"Quercetin": 0.00,
			 	"Cannflavin A": 0.00,
			 	"Beta-sitosterol": 0.00,
			 	"CBC": 0.00,
			 	"CBL": 0.00
			 	, 
		 	 "conditions": ["Cancer"],
			 "positiveEffects": [""],
			 "negativeEffects": [""],
			 "descriptionDetailed": "Detailed description here. Detailed description here.Detailed description here.Detailed description here. Detailed description here.",
			 "descriptionAbbrev":  "Short description here.",
			 "tags": ["Hybrid", "Yoda OG", "OG", "Cancer"],
			 "imageUrl": "images/strains/acapulcoGold.jpg"
			},
			{"strainId": 96,
			 "strainName": "707 Headband", 
			 "strainType": "Hybrid",
			 "components": [
			 	{ 
			 		"name": "THC9", 
			 		"value": 21.30
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 1.81
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
			 	} 	
		 	], "THC": 23.10,
			 	"CBD": 0.39,
			 	"CBN": 0.08,
			 	"CBG": 0.00,
			 	"THCV": 0.00,
			 	"THCA": 0.00,
			 	"THC8": 0.00,
			 	"Pulegone": 0.00,
			 	"Myrcene": 0.00,
			 	"Caryophyllene": 0.00,
			 	"Limonene": 0.00,
			 	"Linalool": 0.00,
			 	"Eucalyptol": 0.00,
			 	"Pinene": 0.00,
			 	"Terpineol": 0.00,
			 	"Terpineol-4": 0.00,
			 	"Cymene": 0.00,
			 	"Apigenin": 0.00,
			 	"Quercetin": 0.00,
			 	"Cannflavin A": 0.00,
			 	"Beta-sitosterol": 0.00,
			 	"CBC": 0.00,
			 	"CBL": 0.00
			 	, 
		 	 "conditions": ["Depression", "Pain", "Stress"],
			 "positiveEffects": [""],
			 "negativeEffects": [""],
			 "descriptionDetailed": "Detailed description here. Detailed description here.Detailed description here.Detailed description here. Detailed description here.",
			 "descriptionAbbrev":  "Short description here.",
			 "tags": ["Hybrid", "707 Headband", "Depression", "Pain", "Stress"],
			 "imageUrl": "images/strains/acapulcoGold.jpg"
			},
			{"strainId": 97,
			 "strainName": "Acapulco Gold", 
			 "strainType": "Sativa",
			 "components": [
			 	{ 
			 		"name": "THC9", 
			 		"value": 21.30
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 1.81
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
			 	} 	
		 	], "THC": 23.10,
			 	"CBD": 0.39,
			 	"CBN": 0.08,
			 	"CBG": 0.00,
			 	"THCV": 0.00,
			 	"THCA": 0.00,
			 	"THC8": 0.00,
			 	"Pulegone": 0.00,
			 	"Myrcene": 0.00,
			 	"Caryophyllene": 0.00,
			 	"Limonene": 0.00,
			 	"Linalool": 0.00,
			 	"Eucalyptol": 0.00,
			 	"Pinene": 0.00,
			 	"Terpineol": 0.00,
			 	"Terpineol-4": 0.00,
			 	"Cymene": 0.00,
			 	"Apigenin": 0.00,
			 	"Quercetin": 0.00,
			 	"Cannflavin A": 0.00,
			 	"Beta-sitosterol": 0.00,
			 	"CBC": 0.00,
			 	"CBL": 0.00
			 	, 
		 	 "conditions": ["Depression", "Pain", "Stress"],
			 "positiveEffects": [""],
			 "negativeEffects": [""],
			 "descriptionDetailed": "Detailed description here. Detailed description here.Detailed description here.Detailed description here. Detailed description here.",
			 "descriptionAbbrev":  "Short description here.",
			 "tags": ["Sativa", "Acapulco Gold", "Depression", "Pain", "Stress"],
			 "imageUrl": "images/strains/acapulcoGold.jpg"
			},
			{"strainId": 98,
			 "strainName": "Alien OG", 
			 "strainType": "Hybrid",
			 "components": [
			 	{ 
			 		"name": "THC9", 
			 		"value": 21.30
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 1.81
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
			 	} 	
		 	], "THC": 25.60,
			 	"CBD": 0.29,
			 	"CBN": 0.07,
			 	"CBG": 0.90,
			 	"THCV": 0.20,
			 	"THCA": 0.00,
			 	"THC8": 0.00,
			 	"Pulegone": 0.00,
			 	"Myrcene": 0.30,
			 	"Caryophyllene": 0.08,
			 	"Limonene": 0.40,
			 	"Linalool": 0.09,
			 	"Eucalyptol": 0.00,
			 	"Pinene": 0.09,
			 	"Terpineol": 0.00,
			 	"Terpineol-4": 0.00,
			 	"Cymene": 0.00,
			 	"Apigenin": 0.00,
			 	"Quercetin": 0.00,
			 	"Cannflavin A": 0.00,
			 	"Beta-sitosterol": 0.00,
			 	"CBC": 0.20,
			 	"CBL": 0.20
			 	, 
		 	 "conditions": ["Migraines", "Headache", "Pain", "Stress"],
			 "positiveEffects": [""],
			 "negativeEffects": [""],
			 "descriptionDetailed": "Detailed description here. Detailed description here.Detailed description here.Detailed description here. Detailed description here.",
			 "descriptionAbbrev":  "Short description here.",
			 "tags": ["Sativa", "Alien OG", "OG", "Migraines", "Headache", "Pain", "Stress"],
			 "imageUrl": "images/strains/acapulcoGold.jpg"
			},
			{"strainId": 99,
			 "strainName": "Alien Rock Candy", 
			 "strainType": "Hybrid",
			 "components": [
			 	{ 
			 		"name": "THC9", 
			 		"value": 21.30
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 1.81
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
			 	} 	
		 	], "THC": 23.80,
			 	"CBD": 0.35,
			 	"CBN": 0.24,
			 	"CBG": 0.00,
			 	"THCV": 0.00,
			 	"THCA": 0.00,
			 	"THC8": 0.00,
			 	"Pulegone": 0.00,
			 	"Myrcene": 0.00,
			 	"Caryophyllene": 0.00,
			 	"Limonene": 0.00,
			 	"Linalool": 0.00,
			 	"Eucalyptol": 0.00,
			 	"Pinene": 0.00,
			 	"Terpineol": 0.00,
			 	"Terpineol-4": 0.00,
			 	"Cymene": 0.00,
			 	"Apigenin": 0.00,
			 	"Quercetin": 0.00,
			 	"Cannflavin A": 0.00,
			 	"Beta-sitosterol": 0.00,
			 	"CBC": 0.00,
			 	"CBL": 0.00
			 	, 
		 	 "conditions": ["Depression", "Stress"],
			 "positiveEffects": [""],
			 "negativeEffects": [""],
			 "descriptionDetailed": "Detailed description here. Detailed description here.Detailed description here.Detailed description here. Detailed description here.",
			 "descriptionAbbrev":  "Short description here.",
			 "tags": ["Sativa", "Alien Rock Candy", "Depression" ,"Stress"],
			 "imageUrl": "images/strains/acapulcoGold.jpg"
			},
			{"strainId": 100,
			 "strainName": "Amnesia Haze", 
			 "strainType": "Sativa",
			 "components": [
			 	{ 
			 		"name": "THC9", 
			 		"value": 21.30
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 1.81
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
			 	} 	
		 	], "THC": 23.20,
			 	"CBD": 0.44,
			 	"CBN": 0.12,
			 	"CBG": 0.00,
			 	"THCV": 0.00,
			 	"THCA": 0.00,
			 	"THC8": 0.00,
			 	"Pulegone": 0.00,
			 	"Myrcene": 0.00,
			 	"Caryophyllene": 0.00,
			 	"Limonene": 0.00,
			 	"Linalool": 0.00,
			 	"Eucalyptol": 0.00,
			 	"Pinene": 0.00,
			 	"Terpineol": 0.00,
			 	"Terpineol-4": 0.00,
			 	"Cymene": 0.00,
			 	"Apigenin": 0.00,
			 	"Quercetin": 0.00,
			 	"Cannflavin A": 0.00,
			 	"Beta-sitosterol": 0.00,
			 	"CBC": 0.00,
			 	"CBL": 0.00
			 	, 
		 	 "conditions": ["Depression", "Stress"],
			 "positiveEffects": [""],
			 "negativeEffects": [""],
			 "descriptionDetailed": "Detailed description here. Detailed description here.Detailed description here.Detailed description here. Detailed description here.",
			 "descriptionAbbrev":  "Short description here.",
			 "tags": ["Sativa", "Amnesia Haze", "Depression", "Stress"],
			 "imageUrl": "images/strains/acapulcoGold.jpg"
			},
			{"strainId": 101,
			 "strainName": "ATF", 
			 "strainType": "Sativa",
			 "components": [
			 	{ 
			 		"name": "THC9", 
			 		"value": 21.30
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 1.81
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
			 	} 	
		 	], "THC": 10.50,
			 	"CBD": 0.23,
			 	"CBN": 0.03,
			 	"CBG": 0.00,
			 	"THCV": 0.00,
			 	"THCA": 0.00,
			 	"THC8": 0.00,
			 	"Pulegone": 0.00,
			 	"Myrcene": 0.00,
			 	"Caryophyllene": 0.00,
			 	"Limonene": 0.00,
			 	"Linalool": 0.00,
			 	"Eucalyptol": 0.00,
			 	"Pinene": 0.00,
			 	"Terpineol": 0.00,
			 	"Terpineol-4": 0.00,
			 	"Cymene": 0.00,
			 	"Apigenin": 0.00,
			 	"Quercetin": 0.00,
			 	"Cannflavin A": 0.00,
			 	"Beta-sitosterol": 0.00,
			 	"CBC": 0.00,
			 	"CBL": 0.00
			 	, 
		 	 "conditions": ["Depression", "Pain", "Stress"],
			 "positiveEffects": [""],
			 "negativeEffects": [""],
			 "descriptionDetailed": "Detailed description here. Detailed description here.Detailed description here.Detailed description here. Detailed description here.",
			 "descriptionAbbrev":  "Short description here.",
			 "tags": ["Sativa", "ATF", "Depression", "Pain", "Stress"],
			 "imageUrl": "images/strains/acapulcoGold.jpg"
			},
			{"strainId": 102,
			 "strainName": "Bay Cookies", 
			 "strainType": "Sativa",
			 "components": [
			 	{ 
			 		"name": "THC9", 
			 		"value": 21.30
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 1.81
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
			 	} 	
		 	], "THC": 21.04,
			 	"CBD": 0.39,
			 	"CBN": 0.06,
			 	"CBG": 0.00,
			 	"THCV": 0.00,
			 	"THCA": 0.00,
			 	"THC8": 0.00,
			 	"Pulegone": 0.00,
			 	"Myrcene": 0.00,
			 	"Caryophyllene": 0.00,
			 	"Limonene": 0.00,
			 	"Linalool": 0.00,
			 	"Eucalyptol": 0.00,
			 	"Pinene": 0.00,
			 	"Terpineol": 0.00,
			 	"Terpineol-4": 0.00,
			 	"Cymene": 0.00,
			 	"Apigenin": 0.00,
			 	"Quercetin": 0.00,
			 	"Cannflavin A": 0.00,
			 	"Beta-sitosterol": 0.00,
			 	"CBC": 0.00,
			 	"CBL": 0.00
			 	, 
		 	 "conditions": ["Depression", "Nausea", "Pain", "Stress"],
			 "positiveEffects": [""],
			 "negativeEffects": [""],
			 "descriptionDetailed": "Detailed description here. Detailed description here.Detailed description here.Detailed description here. Detailed description here.",
			 "descriptionAbbrev":  "Short description here.",
			 "tags": ["Sativa", "Bay Cookies", "Depression", "Nausea", "Pain", "Stress"],
			 "imageUrl": "images/strains/acapulcoGold.jpg"
			},
			{"strainId": 103,
			 "strainName": "Berry Queen", 
			 "strainType": "Hybrid",
			 "components": [
			 	{ 
			 		"name": "THC9", 
			 		"value": 21.30
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 1.81
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
			 	} 	
		 	], "THC": 27.10,
			 	"CBD": 0.36,
			 	"CBN": 0.02,
			 	"CBG": 0.00,
			 	"THCV": 0.00,
			 	"THCA": 0.00,
			 	"THC8": 0.00,
			 	"Pulegone": 0.00,
			 	"Myrcene": 0.00,
			 	"Caryophyllene": 0.00,
			 	"Limonene": 0.00,
			 	"Linalool": 0.00,
			 	"Eucalyptol": 0.00,
			 	"Pinene": 0.00,
			 	"Terpineol": 0.00,
			 	"Terpineol-4": 0.00,
			 	"Cymene": 0.00,
			 	"Apigenin": 0.00,
			 	"Quercetin": 0.00,
			 	"Cannflavin A": 0.00,
			 	"Beta-sitosterol": 0.00,
			 	"CBC": 0.00,
			 	"CBL": 0.00
			 	, 
		 	 "conditions": ["Depression", "Nausea", "Pain", "Stress"],
			 "positiveEffects": [""],
			 "negativeEffects": [""],
			 "descriptionDetailed": "Detailed description here. Detailed description here.Detailed description here.Detailed description here. Detailed description here.",
			 "descriptionAbbrev":  "Short description here.",
			 "tags": ["Hybrid", "Berry Queen", "Berry", "Depression", "Nausea", "Pain", "Stress"],
			 "imageUrl": "images/strains/acapulcoGold.jpg"
			},
			{"strainId": 104,
			 "strainName": "Berry White", 
			 "strainType": "Hybrid",
			 "components": [
			 	{ 
			 		"name": "THC9", 
			 		"value": 21.30
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 1.81
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
			 	} 	
		 	], "THC": 23.10,
			 	"CBD": 0.11,
			 	"CBN": 0.04,
			 	"CBG": 1.10,
			 	"THCV": 0.14,
			 	"THCA": 0.00,
			 	"THC8": 0.00,
			 	"Pulegone": 0.00,
			 	"Myrcene": 0.40,
			 	"Caryophyllene": 0.11,
			 	"Limonene": 0.30,
			 	"Linalool": 0.08,
			 	"Eucalyptol": 0.00,
			 	"Pinene": 0.20,
			 	"Terpineol": 0.00,
			 	"Terpineol-4": 0.00,
			 	"Cymene": 0.00,
			 	"Apigenin": 0.00,
			 	"Quercetin": 0.00,
			 	"Cannflavin A": 0.00,
			 	"Beta-sitosterol": 0.00,
			 	"CBC": 0.20,
			 	"CBL": 0.00
			 	, 
		 	 "conditions": ["Depression", "Pain", "Stress"],
			 "positiveEffects": [""],
			 "negativeEffects": [""],
			 "descriptionDetailed": "Detailed description here. Detailed description here.Detailed description here.Detailed description here. Detailed description here.",
			 "descriptionAbbrev":  "Short description here.",
			 "tags": ["Hybrid", "Berry White", "Berry", "Depression", "Pain", "Stress"],
			 "imageUrl": "images/strains/acapulcoGold.jpg"
			},
			{"strainId": 105,
			 "strainName": "Black Cherry Soda", 
			 "strainType": "Hybrid",
			 "components": [
			 	{ 
			 		"name": "THC9", 
			 		"value": 21.30
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 1.81
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
			 	} 	
		 	], "THC": 12.00,
			 	"CBD": 0.34,
			 	"CBN": 0.07,
			 	"CBG": 0.00,
			 	"THCV": 0.00,
			 	"THCA": 0.00,
			 	"THC8": 0.00,
			 	"Pulegone": 0.00,
			 	"Myrcene": 0.00,
			 	"Caryophyllene": 0.00,
			 	"Limonene": 0.00,
			 	"Linalool": 0.00,
			 	"Eucalyptol": 0.00,
			 	"Pinene": 0.00,
			 	"Terpineol": 0.00,
			 	"Terpineol-4": 0.00,
			 	"Cymene": 0.00,
			 	"Apigenin": 0.00,
			 	"Quercetin": 0.00,
			 	"Cannflavin A": 0.00,
			 	"Beta-sitosterol": 0.00,
			 	"CBC": 0.00,
			 	"CBL": 0.00
			 	, 
		 	 "conditions": ["Depression", "Pain", "Stress"],
			 "positiveEffects": [""],
			 "negativeEffects": [""],
			 "descriptionDetailed": "Detailed description here. Detailed description here.Detailed description here.Detailed description here. Detailed description here.",
			 "descriptionAbbrev":  "Short description here.",
			 "tags": ["Hybrid", "Black Cherry Soda", "Depression", "Pain", "Stress"],
			 "imageUrl": "images/strains/acapulcoGold.jpg"
			},
			{"strainId": 106,
			 "strainName": "Blue Dream", 
			 "strainType": "Hybrid",
			 "components": [
			 	{ 
			 		"name": "THC9", 
			 		"value": 21.30
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 1.81
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
			 	} 	
		 	], "THC": 21.00,
			 	"CBD": 0.16,
			 	"CBN": 0.03,
			 	"CBG": 0.40,
			 	"THCV": 0.09,
			 	"THCA": 0.00,
			 	"THC8": 0.00,
			 	"Pulegone": 0.00,
			 	"Myrcene": 0.70,
			 	"Caryophyllene": 0.11,
			 	"Limonene": 0.13,
			 	"Linalool": 0.06,
			 	"Eucalyptol": 0.00,
			 	"Pinene": 0.30,
			 	"Terpineol": 0.00,
			 	"Terpineol-4": 0.00,
			 	"Cymene": 0.00,
			 	"Apigenin": 0.00,
			 	"Quercetin": 0.00,
			 	"Cannflavin A": 0.00,
			 	"Beta-sitosterol": 0.00,
			 	"CBC": 0.11,
			 	"CBL": 0.00
			 	, 
		 	 "conditions": ["Migraines", "Headache", "Nausea", "Stress"],
			 "positiveEffects": [""],
			 "negativeEffects": [""],
			 "descriptionDetailed": "Detailed description here. Detailed description here.Detailed description here.Detailed description here. Detailed description here.",
			 "descriptionAbbrev":  "Short description here.",
			 "tags": ["Hybrid", "Blue Dream", "Migraines", "Headache", "Nausea", "Stress"],
			 "imageUrl": "images/strains/acapulcoGold.jpg"
			},
			{"strainId": 107,
			 "strainName": "Blue Moonshine", 
			 "strainType": "Indica",
			 "components": [
			 	{ 
			 		"name": "THC9", 
			 		"value": 21.30
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 1.81
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
			 	} 	
		 	], "THC": 28.10,
			 	"CBD": 0.42,
			 	"CBN": 0.03,
			 	"CBG": 0.00,
			 	"THCV": 0.00,
			 	"THCA": 0.00,
			 	"THC8": 0.00,
			 	"Pulegone": 0.00,
			 	"Myrcene": 0.00,
			 	"Caryophyllene": 0.00,
			 	"Limonene": 0.00,
			 	"Linalool": 0.00,
			 	"Eucalyptol": 0.00,
			 	"Pinene": 0.00,
			 	"Terpineol": 0.00,
			 	"Terpineol-4": 0.00,
			 	"Cymene": 0.00,
			 	"Apigenin": 0.00,
			 	"Quercetin": 0.00,
			 	"Cannflavin A": 0.00,
			 	"Beta-sitosterol": 0.00,
			 	"CBC": 0.00,
			 	"CBL": 0.00
			 	, 
		 	 "conditions": ["Depression", "Stress"],
			 "positiveEffects": [""],
			 "negativeEffects": [""],
			 "descriptionDetailed": "Detailed description here. Detailed description here.Detailed description here.Detailed description here. Detailed description here.",
			 "descriptionAbbrev":  "Short description here.",
			 "tags": ["Indica", "Blue Moonshine", "Depression", "Stress"],
			 "imageUrl": "images/strains/acapulcoGold.jpg"
			},
			{"strainId": 108,
			 "strainName": "Blueberry Trainwreck", 
			 "strainType": "Hybrid",
			 "components": [
			 	{ 
			 		"name": "THC9", 
			 		"value": 21.30
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 1.81
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
			 	} 	
		 	], "THC": 15.50,
			 	"CBD": 0.18,
			 	"CBN": 0.13,
			 	"CBG": 0.00,
			 	"THCV": 0.00,
			 	"THCA": 0.00,
			 	"THC8": 0.00,
			 	"Pulegone": 0.00,
			 	"Myrcene": 0.00,
			 	"Caryophyllene": 0.00,
			 	"Limonene": 0.00,
			 	"Linalool": 0.00,
			 	"Eucalyptol": 0.00,
			 	"Pinene": 0.00,
			 	"Terpineol": 0.00,
			 	"Terpineol-4": 0.00,
			 	"Cymene": 0.00,
			 	"Apigenin": 0.00,
			 	"Quercetin": 0.00,
			 	"Cannflavin A": 0.00,
			 	"Beta-sitosterol": 0.00,
			 	"CBC": 0.00,
			 	"CBL": 0.00
			 	, 
		 	 "conditions": ["Depression", "Stress"],
			 "positiveEffects": [""],
			 "negativeEffects": [""],
			 "descriptionDetailed": "Detailed description here. Detailed description here.Detailed description here.Detailed description here. Detailed description here.",
			 "descriptionAbbrev":  "Short description here.",
			 "tags": ["Hybrid", "Blueberry Trainwreck", "Trainwreck", "Depression", "Stress"],
			 "imageUrl": "images/strains/acapulcoGold.jpg"
			},
			{"strainId": 109,
			 "strainName": "Canatonic #4", 
			 "strainType": "Hybrid",
			 "components": [
			 	{ 
			 		"name": "THC9", 
			 		"value": 21.30
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 1.81
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
			 	} 	
		 	], "THC": 0.50,
			 	"CBD": 15.00,
			 	"CBN": 0.07,
			 	"CBG": 0.00,
			 	"THCV": 0.00,
			 	"THCA": 0.00,
			 	"THC8": 0.00,
			 	"Pulegone": 0.00,
			 	"Myrcene": 0.00,
			 	"Caryophyllene": 0.00,
			 	"Limonene": 0.00,
			 	"Linalool": 0.00,
			 	"Eucalyptol": 0.00,
			 	"Pinene": 0.00,
			 	"Terpineol": 0.00,
			 	"Terpineol-4": 0.00,
			 	"Cymene": 0.00,
			 	"Apigenin": 0.00,
			 	"Quercetin": 0.00,
			 	"Cannflavin A": 0.00,
			 	"Beta-sitosterol": 0.00,
			 	"CBC": 0.00,
			 	"CBL": 0.00
			 	, 
		 	 "conditions": ["Depression"],
			 "positiveEffects": [""],
			 "negativeEffects": [""],
			 "descriptionDetailed": "Detailed description here. Detailed description here.Detailed description here.Detailed description here. Detailed description here.",
			 "descriptionAbbrev":  "Short description here.",
			 "tags": ["Hybrid", "Canatonic #4", "Depression"],
			 "imageUrl": "images/strains/acapulcoGold.jpg"
			},
			{"strainId": 110,
			 "strainName": "Candy Jack", 
			 "strainType": "Sativa",
			 "components": [
			 	{ 
			 		"name": "THC9", 
			 		"value": 21.30
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 1.81
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
			 	} 	
		 	], "THC": 23.40,
			 	"CBD": 0.25,
			 	"CBN": 0.07,
			 	"CBG": 0.00,
			 	"THCV": 0.00,
			 	"THCA": 0.00,
			 	"THC8": 0.00,
			 	"Pulegone": 0.00,
			 	"Myrcene": 0.00,
			 	"Caryophyllene": 0.00,
			 	"Limonene": 0.00,
			 	"Linalool": 0.00,
			 	"Eucalyptol": 0.00,
			 	"Pinene": 0.00,
			 	"Terpineol": 0.00,
			 	"Terpineol-4": 0.00,
			 	"Cymene": 0.00,
			 	"Apigenin": 0.00,
			 	"Quercetin": 0.00,
			 	"Cannflavin A": 0.00,
			 	"Beta-sitosterol": 0.00,
			 	"CBC": 0.00,
			 	"CBL": 0.00
			 	, 
		 	 "conditions": ["Depression", "Stress"],
			 "positiveEffects": [""],
			 "negativeEffects": [""],
			 "descriptionDetailed": "Detailed description here. Detailed description here.Detailed description here.Detailed description here. Detailed description here.",
			 "descriptionAbbrev":  "Short description here.",
			 "tags": ["Sativa", "Candy Jack", "Jack", "Depression", "Stress"],
			 "imageUrl": "images/strains/acapulcoGold.jpg"
			},
			{"strainId": 111,
			 "strainName": "CandyLand", 
			 "strainType": "Sativa",
			 "components": [
			 	{ 
			 		"name": "THC9", 
			 		"value": 21.30
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 1.81
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
			 	} 	
		 	], "THC": 27.30,
			 	"CBD": 0.44,
			 	"CBN": 0.08,
			 	"CBG": 0.00,
			 	"THCV": 0.00,
			 	"THCA": 0.00,
			 	"THC8": 0.00,
			 	"Pulegone": 0.00,
			 	"Myrcene": 0.00,
			 	"Caryophyllene": 0.00,
			 	"Limonene": 0.00,
			 	"Linalool": 0.00,
			 	"Eucalyptol": 0.00,
			 	"Pinene": 0.00,
			 	"Terpineol": 0.00,
			 	"Terpineol-4": 0.00,
			 	"Cymene": 0.00,
			 	"Apigenin": 0.00,
			 	"Quercetin": 0.00,
			 	"Cannflavin A": 0.00,
			 	"Beta-sitosterol": 0.00,
			 	"CBC": 0.00,
			 	"CBL": 0.00
			 	, 
		 	 "conditions": ["Migraines", "Headache", "Stress"],
			 "positiveEffects": [""],
			 "negativeEffects": [""],
			 "descriptionDetailed": "Detailed description here. Detailed description here.Detailed description here.Detailed description here. Detailed description here.",
			 "descriptionAbbrev":  "Short description here.",
			 "tags": ["Sativa", "CandyLand", "Migraines", "Headache", "Stress"],
			 "imageUrl": "images/strains/acapulcoGold.jpg"
			},
			{"strainId": 112,
			 "strainName": "Cannalope Haze", 
			 "strainType": "Sativa",
			 "components": [
			 	{ 
			 		"name": "THC9", 
			 		"value": 21.30
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 1.81
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
			 	} 	
		 	], "THC": 20.80,
			 	"CBD": 0.25,
			 	"CBN": 0.02,
			 	"CBG": 0.00,
			 	"THCV": 0.00,
			 	"THCA": 0.00,
			 	"THC8": 0.00,
			 	"Pulegone": 0.00,
			 	"Myrcene": 0.00,
			 	"Caryophyllene": 0.00,
			 	"Limonene": 0.00,
			 	"Linalool": 0.00,
			 	"Eucalyptol": 0.00,
			 	"Pinene": 0.00,
			 	"Terpineol": 0.00,
			 	"Terpineol-4": 0.00,
			 	"Cymene": 0.00,
			 	"Apigenin": 0.00,
			 	"Quercetin": 0.00,
			 	"Cannflavin A": 0.00,
			 	"Beta-sitosterol": 0.00,
			 	"CBC": 0.00,
			 	"CBL": 0.00
			 	, 
		 	 "conditions": ["Migraines", "Headache", "Stress"],
			 "positiveEffects": [""],
			 "negativeEffects": [""],
			 "descriptionDetailed": "Detailed description here. Detailed description here.Detailed description here.Detailed description here. Detailed description here.",
			 "descriptionAbbrev":  "Short description here.",
			 "tags": ["Sativa", "Cannalope Haze", "Haze", "Migraines", "Headache", "Stress"],
			 "imageUrl": "images/strains/acapulcoGold.jpg"
			},
			{"strainId": 113,
			 "strainName": "Cataract Kush", 
			 "strainType": "Hybrid",
			 "components": [
			 	{ 
			 		"name": "THC9", 
			 		"value": 21.30
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 1.81
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
			 	} 	
		 	], "THC": 15.10,
			 	"CBD": 0.35,
			 	"CBN": 0.02,
			 	"CBG": 0.00,
			 	"THCV": 0.00,
			 	"THCA": 0.00,
			 	"THC8": 0.00,
			 	"Pulegone": 0.00,
			 	"Myrcene": 0.00,
			 	"Caryophyllene": 0.00,
			 	"Limonene": 0.00,
			 	"Linalool": 0.00,
			 	"Eucalyptol": 0.00,
			 	"Pinene": 0.00,
			 	"Terpineol": 0.00,
			 	"Terpineol-4": 0.00,
			 	"Cymene": 0.00,
			 	"Apigenin": 0.00,
			 	"Quercetin": 0.00,
			 	"Cannflavin A": 0.00,
			 	"Beta-sitosterol": 0.00,
			 	"CBC": 0.00,
			 	"CBL": 0.00
			 	, 
		 	 "conditions": ["Depression", "Stress"],
			 "positiveEffects": [""],
			 "negativeEffects": [""],
			 "descriptionDetailed": "Detailed description here. Detailed description here.Detailed description here.Detailed description here. Detailed description here.",
			 "descriptionAbbrev":  "Short description here.",
			 "tags": ["Hybrid", "Cataract Kush", "Kush", "Depression", "Stress"],
			 "imageUrl": "images/strains/acapulcoGold.jpg"
			},
			{"strainId": 114,
			 "strainName": "Chemdawg", 
			 "strainType": "Hybrid",
			 "components": [
			 	{ 
			 		"name": "THC9", 
			 		"value": 21.30
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 1.81
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
			 	} 	
		 	], "THC": 23.60,
			 	"CBD": 0.07,
			 	"CBN": 0.02,
			 	"CBG": 0.70,
			 	"THCV": 0.20,
			 	"THCA": 0.00,
			 	"THC8": 0.00,
			 	"Pulegone": 0.00,
			 	"Myrcene": 0.30,
			 	"Caryophyllene": 0.40,
			 	"Limonene": 0.14,
			 	"Linalool": 0.06,
			 	"Eucalyptol": 0.00,
			 	"Pinene": 0.11,
			 	"Terpineol": 0.00,
			 	"Terpineol-4": 0.00,
			 	"Cymene": 0.00,
			 	"Apigenin": 0.00,
			 	"Quercetin": 0.00,
			 	"Cannflavin A": 0.00,
			 	"Beta-sitosterol": 0.00,
			 	"CBC": 0.03,
			 	"CBL": 0.20
			 	, 
		 	 "conditions": ["Depression", "Stress"],
			 "positiveEffects": [""],
			 "negativeEffects": [""],
			 "descriptionDetailed": "Detailed description here. Detailed description here.Detailed description here.Detailed description here. Detailed description here.",
			 "descriptionAbbrev":  "Short description here.",
			 "tags": ["Hybrid", "Chemdawg", "Depression", "Stress"],
			 "imageUrl": "images/strains/acapulcoGold.jpg"
			},
			{"strainId": 115,
			 "strainName": "Cherry Pie", 
			 "strainType": "Hybrid",
			 "components": [
			 	{ 
			 		"name": "THC9", 
			 		"value": 21.30
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 1.81
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
			 	} 	
		 	], "THC": 26.90,
			 	"CBD": 0.11,
			 	"CBN": 0.03,
			 	"CBG": 0.60,
			 	"THCV": 0.09,
			 	"THCA": 0.00,
			 	"THC8": 0.00,
			 	"Pulegone": 0.00,
			 	"Myrcene": 0.60,
			 	"Caryophyllene": 0.20,
			 	"Limonene": 0.16,
			 	"Linalool": 0.15,
			 	"Eucalyptol": 0.00,
			 	"Pinene": 0.08,
			 	"Terpineol": 0.00,
			 	"Terpineol-4": 0.00,
			 	"Cymene": 0.00,
			 	"Apigenin": 0.00,
			 	"Quercetin": 0.00,
			 	"Cannflavin A": 0.00,
			 	"Beta-sitosterol": 0.00,
			 	"CBC": 0.14,
			 	"CBL": 0.07
			 	, 
		 	 "conditions": ["Depression", "Stress"],
			 "positiveEffects": [""],
			 "negativeEffects": [""],
			 "descriptionDetailed": "Detailed description here. Detailed description here.Detailed description here.Detailed description here. Detailed description here.",
			 "descriptionAbbrev":  "Short description here.",
			 "tags": ["Hybrid", "Cherry Pie", "Depression", "Stress"],
			 "imageUrl": "images/strains/acapulcoGold.jpg"
			},
			{"strainId": 116,
			 "strainName": "Chocolate Thai", 
			 "strainType": "Sativa",
			 "components": [
			 	{ 
			 		"name": "THC9", 
			 		"value": 21.30
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 1.81
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
			 	} 	
		 	], "THC": 20.50,
			 	"CBD": 0.31,
			 	"CBN": 0.08,
			 	"CBG": 0.00,
			 	"THCV": 0.00,
			 	"THCA": 0.00,
			 	"THC8": 0.00,
			 	"Pulegone": 0.00,
			 	"Myrcene": 0.00,
			 	"Caryophyllene": 0.00,
			 	"Limonene": 0.00,
			 	"Linalool": 0.00,
			 	"Eucalyptol": 0.00,
			 	"Pinene": 0.00,
			 	"Terpineol": 0.00,
			 	"Terpineol-4": 0.00,
			 	"Cymene": 0.00,
			 	"Apigenin": 0.00,
			 	"Quercetin": 0.00,
			 	"Cannflavin A": 0.00,
			 	"Beta-sitosterol": 0.00,
			 	"CBC": 0.00,
			 	"CBL": 0.00
			 	, 
		 	 "conditions": ["Migraines", "Headache", "Stress"],
			 "positiveEffects": [""],
			 "negativeEffects": [""],
			 "descriptionDetailed": "Detailed description here. Detailed description here.Detailed description here.Detailed description here. Detailed description here.",
			 "descriptionAbbrev":  "Short description here.",
			 "tags": ["Sativa", "Chocolate Thai", "Migraines", "Headache", "Stress"],
			 "imageUrl": "images/strains/acapulcoGold.jpg"
			},
			{"strainId": 117,
			 "strainName": "Clear Lake", 
			 "strainType": "Hybrid",
			 "components": [
			 	{ 
			 		"name": "THC9", 
			 		"value": 21.30
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 1.81
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
			 	} 	
		 	], "THC": 22.10,
			 	"CBD": 0.23,
			 	"CBN": 0.05,
			 	"CBG": 0.00,
			 	"THCV": 0.00,
			 	"THCA": 0.00,
			 	"THC8": 0.00,
			 	"Pulegone": 0.00,
			 	"Myrcene": 0.00,
			 	"Caryophyllene": 0.00,
			 	"Limonene": 0.00,
			 	"Linalool": 0.00,
			 	"Eucalyptol": 0.00,
			 	"Pinene": 0.00,
			 	"Terpineol": 0.00,
			 	"Terpineol-4": 0.00,
			 	"Cymene": 0.00,
			 	"Apigenin": 0.00,
			 	"Quercetin": 0.00,
			 	"Cannflavin A": 0.00,
			 	"Beta-sitosterol": 0.00,
			 	"CBC": 0.00,
			 	"CBL": 0.00
			 	, 
		 	 "conditions": ["Migraines", "Headache", "Stress"],
			 "positiveEffects": [""],
			 "negativeEffects": [""],
			 "descriptionDetailed": "Detailed description here. Detailed description here.Detailed description here.Detailed description here. Detailed description here.",
			 "descriptionAbbrev":  "Short description here.",
			 "tags": ["Hybrid", "Clear Lake", "Migraines", "Headache", "Stress"],
			 "imageUrl": "images/strains/acapulcoGold.jpg"
			},
			{"strainId": 118,
			 "strainName": "Dubtech", 
			 "strainType": "Indica",
			 "components": [
			 	{ 
			 		"name": "THC9", 
			 		"value": 21.30
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 1.81
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
			 	} 	
		 	], "THC": 22.40,
			 	"CBD": 0.30,
			 	"CBN": 0.28,
			 	"CBG": 0.00,
			 	"THCV": 0.00,
			 	"THCA": 0.00,
			 	"THC8": 0.00,
			 	"Pulegone": 0.00,
			 	"Myrcene": 0.00,
			 	"Caryophyllene": 0.00,
			 	"Limonene": 0.00,
			 	"Linalool": 0.00,
			 	"Eucalyptol": 0.00,
			 	"Pinene": 0.00,
			 	"Terpineol": 0.00,
			 	"Terpineol-4": 0.00,
			 	"Cymene": 0.00,
			 	"Apigenin": 0.00,
			 	"Quercetin": 0.00,
			 	"Cannflavin A": 0.00,
			 	"Beta-sitosterol": 0.00,
			 	"CBC": 0.00,
			 	"CBL": 0.00
			 	, 
		 	 "conditions": ["Migraines", "Headache", "Nausea"],
			 "positiveEffects": [""],
			 "negativeEffects": [""],
			 "descriptionDetailed": "Detailed description here. Detailed description here.Detailed description here.Detailed description here. Detailed description here.",
			 "descriptionAbbrev":  "Short description here.",
			 "tags": ["Indica", "Dubtech", "Migraines", "Headache", "Nausea"],
			 "imageUrl": "images/strains/acapulcoGold.jpg"
			},
			{"strainId": 119,
			 "strainName": "Ghost OG", 
			 "strainType": "Indica",
			 "components": [
			 	{ 
			 		"name": "THC9", 
			 		"value": 21.30
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 1.81
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
			 	} 	
		 	], "THC": 22.00,
			 	"CBD": 0.33,
			 	"CBN": 0.14,
			 	"CBG": 0.00,
			 	"THCV": 0.00,
			 	"THCA": 0.00,
			 	"THC8": 0.00,
			 	"Pulegone": 0.00,
			 	"Myrcene": 0.00,
			 	"Caryophyllene": 0.00,
			 	"Limonene": 0.00,
			 	"Linalool": 0.00,
			 	"Eucalyptol": 0.00,
			 	"Pinene": 0.00,
			 	"Terpineol": 0.00,
			 	"Terpineol-4": 0.00,
			 	"Cymene": 0.00,
			 	"Apigenin": 0.00,
			 	"Quercetin": 0.00,
			 	"Cannflavin A": 0.00,
			 	"Beta-sitosterol": 0.00,
			 	"CBC": 0.00,
			 	"CBL": 0.00
			 	, 
		 	 "conditions": ["Migraines", "Headache"],
			 "positiveEffects": [""],
			 "negativeEffects": [""],
			 "descriptionDetailed": "Detailed description here. Detailed description here.Detailed description here.Detailed description here. Detailed description here.",
			 "descriptionAbbrev":  "Short description here.",
			 "tags": ["Indica", "Ghost OG", "OG", "Migraines", "Headache"],
			 "imageUrl": "images/strains/acapulcoGold.jpg"
			},
			{"strainId": 120,
			 "strainName": "Grape Cookies", 
			 "strainType": "Indica",
			 "components": [
			 	{ 
			 		"name": "THC9", 
			 		"value": 21.30
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 1.81
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
			 	} 	
		 	], "THC": 17.10,
			 	"CBD": 0.21,
			 	"CBN": 0.09,
			 	"CBG": 0.00,
			 	"THCV": 0.00,
			 	"THCA": 0.00,
			 	"THC8": 0.00,
			 	"Pulegone": 0.00,
			 	"Myrcene": 0.00,
			 	"Caryophyllene": 0.00,
			 	"Limonene": 0.00,
			 	"Linalool": 0.00,
			 	"Eucalyptol": 0.00,
			 	"Pinene": 0.00,
			 	"Terpineol": 0.00,
			 	"Terpineol-4": 0.00,
			 	"Cymene": 0.00,
			 	"Apigenin": 0.00,
			 	"Quercetin": 0.00,
			 	"Cannflavin A": 0.00,
			 	"Beta-sitosterol": 0.00,
			 	"CBC": 0.00,
			 	"CBL": 0.00
			 	, 
		 	 "conditions": ["Migraines", "Headache", "Nausea", "Glaucoma", "PMS"],
			 "positiveEffects": [""],
			 "negativeEffects": [""],
			 "descriptionDetailed": "Detailed description here. Detailed description here.Detailed description here.Detailed description here. Detailed description here.",
			 "descriptionAbbrev":  "Short description here.",
			 "tags": ["Indica", "Grape Cookies", "Cookies", "Migraines", "Headache", "Nausea", "Glaucoma", "PMS"],
			 "imageUrl": "images/strains/acapulcoGold.jpg"
			},
			{"strainId": 121,
			 "strainName": "Grape Kool Aid", 
			 "strainType": "Indica",
			 "components": [
			 	{ 
			 		"name": "THC9", 
			 		"value": 21.30
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 1.81
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
			 	} 	
		 	], "THC": 19.58,
			 	"CBD": 0.37,
			 	"CBN": 0.10,
			 	"CBG": 0.00,
			 	"THCV": 0.00,
			 	"THCA": 0.00,
			 	"THC8": 0.00,
			 	"Pulegone": 0.00,
			 	"Myrcene": 0.00,
			 	"Caryophyllene": 0.00,
			 	"Limonene": 0.00,
			 	"Linalool": 0.00,
			 	"Eucalyptol": 0.00,
			 	"Pinene": 0.00,
			 	"Terpineol": 0.00,
			 	"Terpineol-4": 0.00,
			 	"Cymene": 0.00,
			 	"Apigenin": 0.00,
			 	"Quercetin": 0.00,
			 	"Cannflavin A": 0.00,
			 	"Beta-sitosterol": 0.00,
			 	"CBC": 0.00,
			 	"CBL": 0.00
			 	, 
		 	 "conditions": ["Migraines", "Headache", "Nausea"],
			 "positiveEffects": [""],
			 "negativeEffects": [""],
			 "descriptionDetailed": "Detailed description here. Detailed description here.Detailed description here.Detailed description here. Detailed description here.",
			 "descriptionAbbrev":  "Short description here.",
			 "tags": ["Indica", "Grape Kool Aid", "Grape", "Migraines", "Headache", "Nausea"],
			 "imageUrl": "images/strains/acapulcoGold.jpg"
			},
			{"strainId": 122,
			 "strainName": "Jupiter Kush", 
			 "strainType": "Indica",
			 "components": [
			 	{ 
			 		"name": "THC9", 
			 		"value": 21.30
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 1.81
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
			 	} 	
		 	], "THC": 19.79,
			 	"CBD": 0.24,
			 	"CBN": 0.03,
			 	"CBG": 0.00,
			 	"THCV": 0.00,
			 	"THCA": 0.00,
			 	"THC8": 0.00,
			 	"Pulegone": 0.00,
			 	"Myrcene": 0.00,
			 	"Caryophyllene": 0.00,
			 	"Limonene": 0.00,
			 	"Linalool": 0.00,
			 	"Eucalyptol": 0.00,
			 	"Pinene": 0.00,
			 	"Terpineol": 0.00,
			 	"Terpineol-4": 0.00,
			 	"Cymene": 0.00,
			 	"Apigenin": 0.00,
			 	"Quercetin": 0.00,
			 	"Cannflavin A": 0.00,
			 	"Beta-sitosterol": 0.00,
			 	"CBC": 0.00,
			 	"CBL": 0.00
			 	, 
		 	 "conditions": ["Migraines", "Headache", "Epilepsy"],
			 "positiveEffects": [""],
			 "negativeEffects": [""],
			 "descriptionDetailed": "Detailed description here. Detailed description here.Detailed description here.Detailed description here. Detailed description here.",
			 "descriptionAbbrev":  "Short description here.",
			 "tags": ["Indica", "Jupiter Kush", "Kush", "Migraines", "Headache", "Epilepsy"],
			 "imageUrl": "images/strains/acapulcoGold.jpg"
			},
			{"strainId": 123,
			 "strainName": "L.A. Confidential", 
			 "strainType": "Indica",
			 "components": [
			 	{ 
			 		"name": "THC9", 
			 		"value": 21.30
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 1.81
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
			 	} 	
		 	], "THC": 22.00,
			 	"CBD": 0.11,
			 	"CBN": 0.02,
			 	"CBG": 0.06,
			 	"THCV": 0.07,
			 	"THCA": 0.00,
			 	"THC8": 0.00,
			 	"Pulegone": 0.00,
			 	"Myrcene": 0.00,
			 	"Caryophyllene": 0.00,
			 	"Limonene": 0.00,
			 	"Linalool": 0.12,
			 	"Eucalyptol": 0.00,
			 	"Pinene": 0.14,
			 	"Terpineol": 0.00,
			 	"Terpineol-4": 0.00,
			 	"Cymene": 0.00,
			 	"Apigenin": 0.00,
			 	"Quercetin": 0.00,
			 	"Cannflavin A": 0.00,
			 	"Beta-sitosterol": 0.00,
			 	"CBC": 0.13,
			 	"CBL": 0.05
			 	, 
		 	 "conditions": ["Migraines", "Headache", "Stress", "Pain", "Insomnia", "Depression", "Muscle Spasms"],
			 "positiveEffects": ["Relaxed", "Happy", "Euphoric", "Sleep", "Uplifted"],
			 "negativeEffects": ["Dry Mouth", "Dry Eyes", "Paranoid", "Dizzy", "Anxious"],
			 "descriptionDetailed": "Detailed description here. Detailed description here.Detailed description here.Detailed description here. Detailed description here.",
			 "descriptionAbbrev":  "Short description here.",
			 "tags": ["Indica", "L.A. Confidential", "Migraines", "Headache", "Stress", "Pain", "Insomnia", "Depression", "Muscle Spasms", "Relaxed", "Happy", "Euphoric", "Sleep", "Uplifted" ],
			 "imageUrl": "images/strains/acapulcoGold.jpg"
			},
			{"strainId": 124,
			 "strainName": "Lemon Jack", 
			 "strainType": "Sativa",
			 "components": [
			 	{ 
			 		"name": "THC9", 
			 		"value": 21.30
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 1.81
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
			 	} 	
		 	], "THC": 22.10,
			 	"CBD": 0.33,
			 	"CBN": 0.06,
			 	"CBG": 0.00,
			 	"THCV": 0.00,
			 	"THCA": 0.00,
			 	"THC8": 0.00,
			 	"Pulegone": 0.00,
			 	"Myrcene": 0.00,
			 	"Caryophyllene": 0.00,
			 	"Limonene": 0.00,
			 	"Linalool": 0.00,
			 	"Eucalyptol": 0.00,
			 	"Pinene": 0.00,
			 	"Terpineol": 0.00,
			 	"Terpineol-4": 0.00,
			 	"Cymene": 0.00,
			 	"Apigenin": 0.00,
			 	"Quercetin": 0.00,
			 	"Cannflavin A": 0.00,
			 	"Beta-sitosterol": 0.00,
			 	"CBC": 0.00,
			 	"CBL": 0.00
			 	, 
		 	 "conditions": ["Migraines", "Headache"],
			 "positiveEffects": [""],
			 "negativeEffects": [""],
			 "descriptionDetailed": "Detailed description here. Detailed description here.Detailed description here.Detailed description here. Detailed description here.",
			 "descriptionAbbrev":  "Short description here.",
			 "tags": ["Sativa", "Lemon Jack", "Migraines", "Headache"],
			 "imageUrl": "images/strains/acapulcoGold.jpg"
			},
			{"strainId": 125,
			 "strainName": "Lemon OG Kush", 
			 "strainType": "Hybrid",
			 "components": [
			 	{ 
			 		"name": "THC9", 
			 		"value": 21.30
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 1.81
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
			 	} 	
		 	], "THC": 25.10,
			 	"CBD": 0.45,
			 	"CBN": 0.06,
			 	"CBG": 0.00,
			 	"THCV": 0.00,
			 	"THCA": 0.00,
			 	"THC8": 0.00,
			 	"Pulegone": 0.00,
			 	"Myrcene": 0.00,
			 	"Caryophyllene": 0.00,
			 	"Limonene": 0.00,
			 	"Linalool": 0.00,
			 	"Eucalyptol": 0.00,
			 	"Pinene": 0.00,
			 	"Terpineol": 0.00,
			 	"Terpineol-4": 0.00,
			 	"Cymene": 0.00,
			 	"Apigenin": 0.00,
			 	"Quercetin": 0.00,
			 	"Cannflavin A": 0.00,
			 	"Beta-sitosterol": 0.00,
			 	"CBC": 0.00,
			 	"CBL": 0.00
			 	, 
		 	 "conditions": ["Migraines", "Headache"],
			 "positiveEffects": [""],
			 "negativeEffects": [""],
			 "descriptionDetailed": "Detailed description here. Detailed description here.Detailed description here.Detailed description here. Detailed description here.",
			 "descriptionAbbrev":  "Short description here.",
			 "tags": ["Sativa", "Lemon OG Kush", "OG", "Kush", "Migraines", "Headache"],
			 "imageUrl": "images/strains/acapulcoGold.jpg"
			},
			{"strainId": 126,
			 "strainName": "Mad Max", 
			 "strainType": "Hybrid",
			 "components": [
			 	{ 
			 		"name": "THC9", 
			 		"value": 21.30
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 1.81
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
			 	} 	
		 	], "THC": 18.80,
			 	"CBD": 0.31,
			 	"CBN": 0.02,
			 	"CBG": 0.00,
			 	"THCV": 0.00,
			 	"THCA": 0.00,
			 	"THC8": 0.00,
			 	"Pulegone": 0.00,
			 	"Myrcene": 0.00,
			 	"Caryophyllene": 0.00,
			 	"Limonene": 0.00,
			 	"Linalool": 0.00,
			 	"Eucalyptol": 0.00,
			 	"Pinene": 0.00,
			 	"Terpineol": 0.00,
			 	"Terpineol-4": 0.00,
			 	"Cymene": 0.00,
			 	"Apigenin": 0.00,
			 	"Quercetin": 0.00,
			 	"Cannflavin A": 0.00,
			 	"Beta-sitosterol": 0.00,
			 	"CBC": 0.00,
			 	"CBL": 0.00
			 	, 
		 	 "conditions": ["Migraines", "Headache"],
			 "positiveEffects": [""],
			 "negativeEffects": [""],
			 "descriptionDetailed": "Detailed description here. Detailed description here.Detailed description here.Detailed description here. Detailed description here.",
			 "descriptionAbbrev":  "Short description here.",
			 "tags": ["Hybrid", "Mad Max", "Migraines", "Headache"],
			 "imageUrl": "images/strains/acapulcoGold.jpg"
			},
			{"strainId": 127,
			 "strainName": "Mafia OG", 
			 "strainType": "Indica",
			 "components": [
			 	{ 
			 		"name": "THC9", 
			 		"value": 21.30
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 1.81
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
			 	} 	
		 	], "THC": 30.30,
			 	"CBD": 0.40,
			 	"CBN": 0.03,
			 	"CBG": 0.00,
			 	"THCV": 0.00,
			 	"THCA": 0.00,
			 	"THC8": 0.00,
			 	"Pulegone": 0.00,
			 	"Myrcene": 0.00,
			 	"Caryophyllene": 0.00,
			 	"Limonene": 0.00,
			 	"Linalool": 0.00,
			 	"Eucalyptol": 0.00,
			 	"Pinene": 0.00,
			 	"Terpineol": 0.00,
			 	"Terpineol-4": 0.00,
			 	"Cymene": 0.00,
			 	"Apigenin": 0.00,
			 	"Quercetin": 0.00,
			 	"Cannflavin A": 0.00,
			 	"Beta-sitosterol": 0.00,
			 	"CBC": 0.00,
			 	"CBL": 0.00
			 	, 
		 	 "conditions": ["Migraines", "Headache", "Nausea", "Glaucoma", "PMS"],
			 "positiveEffects": [""],
			 "negativeEffects": [""],
			 "descriptionDetailed": "Detailed description here. Detailed description here.Detailed description here.Detailed description here. Detailed description here.",
			 "descriptionAbbrev":  "Short description here.",
			 "tags": ["Indica", "Mafia OG", "Migraines", "Headache", "Nausea", "Glaucoma", "PMS"],
			 "imageUrl": "images/strains/acapulcoGold.jpg"
			},
			{"strainId": 128,
			 "strainName": "Mango Maui", 
			 "strainType": "Sativa",
			 "components": [
			 	{ 
			 		"name": "THC9", 
			 		"value": 21.30
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 1.81
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
			 	} 	
		 	], "THC": 18.80,
			 	"CBD": 0.30,
			 	"CBN": 0.02,
			 	"CBG": 0.00,
			 	"THCV": 0.00,
			 	"THCA": 0.00,
			 	"THC8": 0.00,
			 	"Pulegone": 0.00,
			 	"Myrcene": 0.00,
			 	"Caryophyllene": 0.00,
			 	"Limonene": 0.00,
			 	"Linalool": 0.00,
			 	"Eucalyptol": 0.00,
			 	"Pinene": 0.00,
			 	"Terpineol": 0.00,
			 	"Terpineol-4": 0.00,
			 	"Cymene": 0.00,
			 	"Apigenin": 0.00,
			 	"Quercetin": 0.00,
			 	"Cannflavin A": 0.00,
			 	"Beta-sitosterol": 0.00,
			 	"CBC": 0.00,
			 	"CBL": 0.00
			 	, 
		 	 "conditions": ["Migraines", "Headache", "Nausea"],
			 "positiveEffects": [""],
			 "negativeEffects": [""],
			 "descriptionDetailed": "Detailed description here. Detailed description here.Detailed description here.Detailed description here. Detailed description here.",
			 "descriptionAbbrev":  "Short description here.",
			 "tags": ["Sativa", "Mango Maui", "Migraines", "Headache", "Nausea"],
			 "imageUrl": "images/strains/acapulcoGold.jpg"
			},
			{"strainId": 130,
			 "strainName": "May Weather Kush", 
			 "strainType": "Indica",
			 "components": [
			 	{ 
			 		"name": "THC9", 
			 		"value": 21.30
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 1.81
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
			 	} 	
		 	], "THC": 29.50,
			 	"CBD": 0.33,
			 	"CBN": 0.03,
			 	"CBG": 0.00,
			 	"THCV": 0.00,
			 	"THCA": 0.00,
			 	"THC8": 0.00,
			 	"Pulegone": 0.00,
			 	"Myrcene": 0.00,
			 	"Caryophyllene": 0.00,
			 	"Limonene": 0.00,
			 	"Linalool": 0.00,
			 	"Eucalyptol": 0.00,
			 	"Pinene": 0.00,
			 	"Terpineol": 0.00,
			 	"Terpineol-4": 0.00,
			 	"Cymene": 0.00,
			 	"Apigenin": 0.00,
			 	"Quercetin": 0.00,
			 	"Cannflavin A": 0.00,
			 	"Beta-sitosterol": 0.00,
			 	"CBC": 0.00,
			 	"CBL": 0.00
			 	, 
		 	 "conditions": ["Migraines", "Headache", "PMS"],
			 "positiveEffects": [""],
			 "negativeEffects": [""],
			 "descriptionDetailed": "Detailed description here. Detailed description here.Detailed description here.Detailed description here. Detailed description here.",
			 "descriptionAbbrev":  "Short description here.",
			 "tags": ["Indica", "May Weather Kush", "Migraines", "Headache", "PMS"],
			 "imageUrl": "images/strains/acapulcoGold.jpg"
			},
			{"strainId": 131,
			 "strainName": "Phantom OG", 
			 "strainType": "Indica",
			 "components": [
			 	{ 
			 		"name": "THC9", 
			 		"value": 21.30
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 1.81
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
			 	} 	
		 	], "THC": 25.60,
			 	"CBD": 0.49,
			 	"CBN": 0.07,
			 	"CBG": 0.00,
			 	"THCV": 0.00,
			 	"THCA": 0.00,
			 	"THC8": 0.00,
			 	"Pulegone": 0.00,
			 	"Myrcene": 0.00,
			 	"Caryophyllene": 0.00,
			 	"Limonene": 0.00,
			 	"Linalool": 0.00,
			 	"Eucalyptol": 0.00,
			 	"Pinene": 0.00,
			 	"Terpineol": 0.00,
			 	"Terpineol-4": 0.00,
			 	"Cymene": 0.00,
			 	"Apigenin": 0.00,
			 	"Quercetin": 0.00,
			 	"Cannflavin A": 0.00,
			 	"Beta-sitosterol": 0.00,
			 	"CBC": 0.00,
			 	"CBL": 0.00
			 	, 
		 	 "conditions": ["Migraines", "Headache", "Hypertension"],
			 "positiveEffects": [""],
			 "negativeEffects": [""],
			 "descriptionDetailed": "Detailed description here. Detailed description here.Detailed description here.Detailed description here. Detailed description here.",
			 "descriptionAbbrev":  "Short description here.",
			 "tags": ["Indica", "Phantom OG", "OG", "Migraines", "Headache", "Hypertension"],
			 "imageUrl": "images/strains/acapulcoGold.jpg"
			},
			{"strainId": 132,
			 "strainName": "Pineapple Hogsbreath", 
			 "strainType": "Hybrid",
			 "components": [
			 	{ 
			 		"name": "THC9", 
			 		"value": 21.30
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 1.81
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
			 	} 	
		 	], "THC": 19.80,
			 	"CBD": 0.32,
			 	"CBN": 0.04,
			 	"CBG": 0.00,
			 	"THCV": 0.00,
			 	"THCA": 0.00,
			 	"THC8": 0.00,
			 	"Pulegone": 0.00,
			 	"Myrcene": 0.00,
			 	"Caryophyllene": 0.00,
			 	"Limonene": 0.00,
			 	"Linalool": 0.00,
			 	"Eucalyptol": 0.00,
			 	"Pinene": 0.00,
			 	"Terpineol": 0.00,
			 	"Terpineol-4": 0.00,
			 	"Cymene": 0.00,
			 	"Apigenin": 0.00,
			 	"Quercetin": 0.00,
			 	"Cannflavin A": 0.00,
			 	"Beta-sitosterol": 0.00,
			 	"CBC": 0.00,
			 	"CBL": 0.00
			 	, 
		 	 "conditions": ["Migraines", "Headache", "Nausea", "PMS"],
			 "positiveEffects": [""],
			 "negativeEffects": [""],
			 "descriptionDetailed": "Detailed description here. Detailed description here.Detailed description here.Detailed description here. Detailed description here.",
			 "descriptionAbbrev":  "Short description here.",
			 "tags": ["Hybrid", "Pineapple Hogsbreath", "Pineapple", "Migraines", "Headache", "Nausea", "PMS"],
			 "imageUrl": "images/strains/acapulcoGold.jpg"
			},
			{"strainId": 133,
			 "strainName": "Silverback Gorilla", 
			 "strainType": "Indica",
			 "components": [
			 	{ 
			 		"name": "THC9", 
			 		"value": 21.30
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 1.81
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
			 	} 	
		 	], "THC": 18.20,
			 	"CBD": 0.25,
			 	"CBN": 0.08,
			 	"CBG": 0.00,
			 	"THCV": 0.00,
			 	"THCA": 0.00,
			 	"THC8": 0.00,
			 	"Pulegone": 0.00,
			 	"Myrcene": 0.00,
			 	"Caryophyllene": 0.00,
			 	"Limonene": 0.00,
			 	"Linalool": 0.00,
			 	"Eucalyptol": 0.00,
			 	"Pinene": 0.00,
			 	"Terpineol": 0.00,
			 	"Terpineol-4": 0.00,
			 	"Cymene": 0.00,
			 	"Apigenin": 0.00,
			 	"Quercetin": 0.00,
			 	"Cannflavin A": 0.00,
			 	"Beta-sitosterol": 0.00,
			 	"CBC": 0.00,
			 	"CBL": 0.00
			 	, 
		 	 "conditions": ["Migraines", "Headache"],
			 "positiveEffects": [""],
			 "negativeEffects": [""],
			 "descriptionDetailed": "Detailed description here. Detailed description here.Detailed description here.Detailed description here. Detailed description here.",
			 "descriptionAbbrev":  "Short description here.",
			 "tags": ["Indica", "Silverback Gorilla", "Migraines", "Headache"],
			 "imageUrl": "images/strains/acapulcoGold.jpg"
			},
			{"strainId": 134,
			 "strainName": "Sugar Plum", 
			 "strainType": "Sativa",
			 "components": [
			 	{ 
			 		"name": "THC9", 
			 		"value": 21.30
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 1.81
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
			 	} 	
		 	], "THC": 23.80,
			 	"CBD": 0.46,
			 	"CBN": 0.07,
			 	"CBG": 0.00,
			 	"THCV": 0.00,
			 	"THCA": 0.00,
			 	"THC8": 0.00,
			 	"Pulegone": 0.00,
			 	"Myrcene": 0.00,
			 	"Caryophyllene": 0.00,
			 	"Limonene": 0.00,
			 	"Linalool": 0.00,
			 	"Eucalyptol": 0.00,
			 	"Pinene": 0.00,
			 	"Terpineol": 0.00,
			 	"Terpineol-4": 0.00,
			 	"Cymene": 0.00,
			 	"Apigenin": 0.00,
			 	"Quercetin": 0.00,
			 	"Cannflavin A": 0.00,
			 	"Beta-sitosterol": 0.00,
			 	"CBC": 0.00,
			 	"CBL": 0.00
			 	, 
		 	 "conditions": ["Headache", "Nausea", "Glaucoma", "PMS"],
			 "positiveEffects": [""],
			 "negativeEffects": [""],
			 "descriptionDetailed": "Detailed description here. Detailed description here.Detailed description here.Detailed description here. Detailed description here.",
			 "descriptionAbbrev":  "Short description here.",
			 "tags": ["Sativa", "Sugar Plum", "Migraines", "Headache", "Nausea", "Glaucoma", "PMS"],
			 "imageUrl": "images/strains/acapulcoGold.jpg"
			},
			{"strainId": 135,
			 "strainName": "Super Lemon Haze", 
			 "strainType": "Sativa",
			 "components": [
			 	{ 
			 		"name": "THC9", 
			 		"value": 21.30
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 1.81
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
			 	} 	
		 	], "THC": 24.60,
			 	"CBD": 0.40,
			 	"CBN": 0.01,
			 	"CBG": 1.20,
			 	"THCV": 0.20,
			 	"THCA": 0.00,
			 	"THC8": 0.00,
			 	"Pulegone": 0.00,
			 	"Myrcene": 0.30,
			 	"Caryophyllene": 0.20,
			 	"Limonene": 0.40,
			 	"Linalool": 0.01,
			 	"Eucalyptol": 0.00,
			 	"Pinene": 0.02,
			 	"Terpineol": 0.00,
			 	"Terpineol-4": 0.00,
			 	"Cymene": 0.00,
			 	"Apigenin": 0.00,
			 	"Quercetin": 0.00,
			 	"Cannflavin A": 0.00,
			 	"Beta-sitosterol": 0.00,
			 	"CBC": 0.02,
			 	"CBL": 0.00
			 	, 
		 	 "conditions": ["Migraines", "Headache"],
			 "positiveEffects": [""],
			 "negativeEffects": [""],
			 "descriptionDetailed": "Detailed description here. Detailed description here.Detailed description here.Detailed description here. Detailed description here.",
			 "descriptionAbbrev":  "Short description here.",
			 "tags": ["Sativa", "Super Lemon Haze", "Migraines", "Headache"],
			 "imageUrl": "images/strains/acapulcoGold.jpg"
			},
			{"strainId": 136,
			 "strainName": "The White", 
			 "strainType": "Hybrid",
			 "components": [
			 	{ 
			 		"name": "THC9", 
			 		"value": 21.30
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 1.81
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
			 	} 	
		 	], "THC": 24.50,
			 	"CBD": 0.43,
			 	"CBN": 0.05,
			 	"CBG": 0.00,
			 	"THCV": 0.00,
			 	"THCA": 0.00,
			 	"THC8": 0.00,
			 	"Pulegone": 0.00,
			 	"Myrcene": 0.00,
			 	"Caryophyllene": 0.00,
			 	"Limonene": 0.00,
			 	"Linalool": 0.00,
			 	"Eucalyptol": 0.00,
			 	"Pinene": 0.00,
			 	"Terpineol": 0.00,
			 	"Terpineol-4": 0.00,
			 	"Cymene": 0.00,
			 	"Apigenin": 0.00,
			 	"Quercetin": 0.00,
			 	"Cannflavin A": 0.00,
			 	"Beta-sitosterol": 0.00,
			 	"CBC": 0.00,
			 	"CBL": 0.00
			 	, 
		 	 "conditions": ["Migraines", "Headache"],
			 "positiveEffects": [""],
			 "negativeEffects": [""],
			 "descriptionDetailed": "Detailed description here. Detailed description here.Detailed description here.Detailed description here. Detailed description here.",
			 "descriptionAbbrev":  "Short description here.",
			 "tags": ["Hybrid", "The White", "Migraines", "Headache"],
			 "imageUrl": "images/strains/acapulcoGold.jpg"
			},
			{"strainId": 137,
			 "strainName": "White Fire OG", 
			 "strainType": "Hybrid",
			 "components": [
			 	{ 
			 		"name": "THC9", 
			 		"value": 21.30
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 1.81
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
			 	} 	
		 	], "THC": 23.20,
			 	"CBD": 0.36,
			 	"CBN": 0.06,
			 	"CBG": 0.00,
			 	"THCV": 0.00,
			 	"THCA": 0.00,
			 	"THC8": 0.00,
			 	"Pulegone": 0.00,
			 	"Myrcene": 0.00,
			 	"Caryophyllene": 0.00,
			 	"Limonene": 0.00,
			 	"Linalool": 0.00,
			 	"Eucalyptol": 0.00,
			 	"Pinene": 0.00,
			 	"Terpineol": 0.00,
			 	"Terpineol-4": 0.00,
			 	"Cymene": 0.00,
			 	"Apigenin": 0.00,
			 	"Quercetin": 0.00,
			 	"Cannflavin A": 0.00,
			 	"Beta-sitosterol": 0.00,
			 	"CBC": 0.00,
			 	"CBL": 0.00
			 	, 
		 	 "conditions": ["Migraines", "Headache", "Nausea"],
			 "positiveEffects": [""],
			 "negativeEffects": [""],
			 "descriptionDetailed": "Detailed description here. Detailed description here.Detailed description here.Detailed description here. Detailed description here.",
			 "descriptionAbbrev":  "Short description here.",
			 "tags": ["Hybrid", "White Fire OG", "OG", "Migraines", "Headache", "Nausea"],
			 "imageUrl": "images/strains/acapulcoGold.jpg"
			},
			{"strainId": 138,
			 "strainName": "White Walker OG", 
			 "strainType": "Hybrid",
			 "components": [
			 	{ 
			 		"name": "THC9", 
			 		"value": 21.30
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 1.81
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
			 	} 	
		 	], "THC": 16.20,
			 	"CBD": 0.30,
			 	"CBN": 0.04,
			 	"CBG": 0.00,
			 	"THCV": 0.00,
			 	"THCA": 0.00,
			 	"THC8": 0.00,
			 	"Pulegone": 0.00,
			 	"Myrcene": 0.00,
			 	"Caryophyllene": 0.00,
			 	"Limonene": 0.00,
			 	"Linalool": 0.00,
			 	"Eucalyptol": 0.00,
			 	"Pinene": 0.00,
			 	"Terpineol": 0.00,
			 	"Terpineol-4": 0.00,
			 	"Cymene": 0.00,
			 	"Apigenin": 0.00,
			 	"Quercetin": 0.00,
			 	"Cannflavin A": 0.00,
			 	"Beta-sitosterol": 0.00,
			 	"CBC": 0.00,
			 	"CBL": 0.00
			 	, 
		 	 "conditions": ["Migraines", "Headache", "Nausea"],
			 "positiveEffects": [""],
			 "negativeEffects": [""],
			 "descriptionDetailed": "Detailed description here. Detailed description here.Detailed description here.Detailed description here. Detailed description here.",
			 "descriptionAbbrev":  "Short description here.",
			 "tags": ["Hybrid", "White Walker OG", "OG", "Migraines", "Headache", "Nausea"],
			 "imageUrl": "images/strains/acapulcoGold.jpg"
			},
			{"strainId": 139,
			 "strainName": "Cherry Bomb", 
			 "strainType": "Hybrid",
			 "components": [
			 	{ 
			 		"name": "THC9", 
			 		"value": 21.30
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 1.81
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
			 	} 	
		 	], "THC": 19.00,
			 	"CBD": 0.30,
			 	"CBN": 0.06,
			 	"CBG": 0.00,
			 	"THCV": 0.00,
			 	"THCA": 0.00,
			 	"THC8": 0.00,
			 	"Pulegone": 0.00,
			 	"Myrcene": 0.00,
			 	"Caryophyllene": 0.00,
			 	"Limonene": 0.00,
			 	"Linalool": 0.00,
			 	"Eucalyptol": 0.00,
			 	"Pinene": 0.00,
			 	"Terpineol": 0.00,
			 	"Terpineol-4": 0.00,
			 	"Cymene": 0.00,
			 	"Apigenin": 0.00,
			 	"Quercetin": 0.00,
			 	"Cannflavin A": 0.00,
			 	"Beta-sitosterol": 0.00,
			 	"CBC": 0.00,
			 	"CBL": 0.00
			 	, 
		 	 "conditions": ["Nausea", "Stress"],
			 "positiveEffects": [""],
			 "negativeEffects": [""],
			 "descriptionDetailed": "Detailed description here. Detailed description here.Detailed description here.Detailed description here. Detailed description here.",
			 "descriptionAbbrev":  "Short description here.",
			 "tags": ["Hybrid", "Cherry Bomb", "Nausea", "Stress"],
			 "imageUrl": "images/strains/acapulcoGold.jpg"
			},
			{"strainId": 140,
			 "strainName": "DJ Short Blueberry",
			 "strainType": "Indica",
			 "components": [
			 	{ 
			 		"name": "THC9", 
			 		"value": 21.30
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 1.81
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
			 	} 	
		 	], "THC": 13.50,
			 	"CBD": 0.26,
			 	"CBN": 0.05,
			 	"CBG": 0.00,
			 	"THCV": 0.00,
			 	"THCA": 0.00,
			 	"THC8": 0.00,
			 	"Pulegone": 0.00,
			 	"Myrcene": 0.00,
			 	"Caryophyllene": 0.00,
			 	"Limonene": 0.00,
			 	"Linalool": 0.00,
			 	"Eucalyptol": 0.00,
			 	"Pinene": 0.00,
			 	"Terpineol": 0.00,
			 	"Terpineol-4": 0.00,
			 	"Cymene": 0.00,
			 	"Apigenin": 0.00,
			 	"Quercetin": 0.00,
			 	"Cannflavin A": 0.00,
			 	"Beta-sitosterol": 0.00,
			 	"CBC": 0.00,
			 	"CBL": 0.00
			 	, 
		 	 "conditions": ["Nausea"],
			 "positiveEffects": [""],
			 "negativeEffects": [""],
			 "descriptionDetailed": "Detailed description here. Detailed description here.Detailed description here.Detailed description here. Detailed description here.",
			 "descriptionAbbrev":  "Short description here.",
			 "tags": ["Hybrid", "Cherry Bomb", "Nausea"],
			 "imageUrl": "images/strains/acapulcoGold.jpg"
			},
			{"strainId": 141,
			 "strainName": "El Alquimista",
			 "strainType": "Hybrid",
			 "components": [
			 	{ 
			 		"name": "THC9", 
			 		"value": 21.30
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 1.81
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
			 	} 	
		 	], "THC": 24.40,
			 	"CBD": 0.27,
			 	"CBN": 0.05,
			 	"CBG": 0.00,
			 	"THCV": 0.00,
			 	"THCA": 0.00,
			 	"THC8": 0.00,
			 	"Pulegone": 0.00,
			 	"Myrcene": 0.00,
			 	"Caryophyllene": 0.00,
			 	"Limonene": 0.00,
			 	"Linalool": 0.00,
			 	"Eucalyptol": 0.00,
			 	"Pinene": 0.00,
			 	"Terpineol": 0.00,
			 	"Terpineol-4": 0.00,
			 	"Cymene": 0.00,
			 	"Apigenin": 0.00,
			 	"Quercetin": 0.00,
			 	"Cannflavin A": 0.00,
			 	"Beta-sitosterol": 0.00,
			 	"CBC": 0.00,
			 	"CBL": 0.00
			 	, 
		 	 "conditions": ["Nausea"],
			 "positiveEffects": [""],
			 "negativeEffects": [""],
			 "descriptionDetailed": "Detailed description here. Detailed description here.Detailed description here.Detailed description here. Detailed description here.",
			 "descriptionAbbrev":  "Short description here.",
			 "tags": ["Hybrid", "El Alquimista", "Nausea"],
			 "imageUrl": "images/strains/acapulcoGold.jpg"
			},
			{"strainId": 142,
			 "strainName": "Harlequin",
			 "strainType": "Sativa",
			 "components": [
			 	{ 
			 		"name": "THC9", 
			 		"value": 21.30
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 1.81
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
			 	} 	
		 	], "THC": 6.98,
			 	"CBD": 14.00,
			 	"CBN": 0.01,
			 	"CBG": 0.00,
			 	"THCV": 0.00,
			 	"THCA": 0.00,
			 	"THC8": 0.00,
			 	"Pulegone": 0.00,
			 	"Myrcene": 0.00,
			 	"Caryophyllene": 0.00,
			 	"Limonene": 0.00,
			 	"Linalool": 0.00,
			 	"Eucalyptol": 0.00,
			 	"Pinene": 0.00,
			 	"Terpineol": 0.00,
			 	"Terpineol-4": 0.00,
			 	"Cymene": 0.00,
			 	"Apigenin": 0.00,
			 	"Quercetin": 0.00,
			 	"Cannflavin A": 0.00,
			 	"Beta-sitosterol": 0.00,
			 	"CBC": 0.00,
			 	"CBL": 0.00
			 	, 
		 	 "conditions": ["Nausea", "Epilepsy"],
			 "positiveEffects": [""],
			 "negativeEffects": [""],
			 "descriptionDetailed": "Detailed description here. Detailed description here.Detailed description here.Detailed description here. Detailed description here.",
			 "descriptionAbbrev":  "Short description here.",
			 "tags": ["Sativa", "Harlequin", "Nausea", "Epilepsy"],
			 "imageUrl": "images/strains/acapulcoGold.jpg"
			},
			{"strainId": 143,
			 "strainName": "Herojuana",
			 "strainType": "Indica",
			 "components": [
			 	{ 
			 		"name": "THC9", 
			 		"value": 21.30
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 1.81
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
			 	} 	
		 	], "THC": 17.30,
			 	"CBD": 0.27,
			 	"CBN": 0.07,
			 	"CBG": 0.00,
			 	"THCV": 0.00,
			 	"THCA": 0.00,
			 	"THC8": 0.00,
			 	"Pulegone": 0.00,
			 	"Myrcene": 0.00,
			 	"Caryophyllene": 0.00,
			 	"Limonene": 0.00,
			 	"Linalool": 0.00,
			 	"Eucalyptol": 0.00,
			 	"Pinene": 0.00,
			 	"Terpineol": 0.00,
			 	"Terpineol-4": 0.00,
			 	"Cymene": 0.00,
			 	"Apigenin": 0.00,
			 	"Quercetin": 0.00,
			 	"Cannflavin A": 0.00,
			 	"Beta-sitosterol": 0.00,
			 	"CBC": 0.00,
			 	"CBL": 0.00
			 	, 
		 	 "conditions": ["Nausea"],
			 "positiveEffects": [""],
			 "negativeEffects": [""],
			 "descriptionDetailed": "Detailed description here. Detailed description here.Detailed description here.Detailed description here. Detailed description here.",
			 "descriptionAbbrev":  "Short description here.",
			 "tags": ["Indica", "Herojuana", "Nausea"],
			 "imageUrl": "images/strains/acapulcoGold.jpg"
			},
			{"strainId": 144,
			 "strainName": "Lavender",
			 "strainType": "Indica",
			 "components": [
			 	{ 
			 		"name": "THC9", 
			 		"value": 21.30
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 1.81
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
			 	} 	
		 	], "THC": 25.40,
			 	"CBD": 0.46,
			 	"CBN": 0.03,
			 	"CBG": 0.00,
			 	"THCV": 0.00,
			 	"THCA": 0.00,
			 	"THC8": 0.00,
			 	"Pulegone": 0.00,
			 	"Myrcene": 0.00,
			 	"Caryophyllene": 0.00,
			 	"Limonene": 0.00,
			 	"Linalool": 0.00,
			 	"Eucalyptol": 0.00,
			 	"Pinene": 0.00,
			 	"Terpineol": 0.00,
			 	"Terpineol-4": 0.00,
			 	"Cymene": 0.00,
			 	"Apigenin": 0.00,
			 	"Quercetin": 0.00,
			 	"Cannflavin A": 0.00,
			 	"Beta-sitosterol": 0.00,
			 	"CBC": 0.00,
			 	"CBL": 0.00
			 	, 
		 	 "conditions": ["Nausea"],
			 "positiveEffects": [""],
			 "negativeEffects": [""],
			 "descriptionDetailed": "Detailed description here. Detailed description here.Detailed description here.Detailed description here. Detailed description here.",
			 "descriptionAbbrev":  "Short description here.",
			 "tags": ["Indica", "Lavender", "Nausea"],
			 "imageUrl": "images/strains/acapulcoGold.jpg"
			},
			{"strainId": 145,
			 "strainName": "Purple Coma",
			 "strainType": "Sativa",
			 "components": [
			 	{ 
			 		"name": "THC9", 
			 		"value": 21.30
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 1.81
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
			 	} 	
		 	], "THC": 15.60,
			 	"CBD": 0.25,
			 	"CBN": 0.04,
			 	"CBG": 0.00,
			 	"THCV": 0.00,
			 	"THCA": 0.00,
			 	"THC8": 0.00,
			 	"Pulegone": 0.00,
			 	"Myrcene": 0.00,
			 	"Caryophyllene": 0.00,
			 	"Limonene": 0.00,
			 	"Linalool": 0.00,
			 	"Eucalyptol": 0.00,
			 	"Pinene": 0.00,
			 	"Terpineol": 0.00,
			 	"Terpineol-4": 0.00,
			 	"Cymene": 0.00,
			 	"Apigenin": 0.00,
			 	"Quercetin": 0.00,
			 	"Cannflavin A": 0.00,
			 	"Beta-sitosterol": 0.00,
			 	"CBC": 0.00,
			 	"CBL": 0.00
			 	, 
		 	 "conditions": ["Nausea"],
			 "positiveEffects": [""],
			 "negativeEffects": [""],
			 "descriptionDetailed": "Detailed description here. Detailed description here.Detailed description here.Detailed description here. Detailed description here.",
			 "descriptionAbbrev":  "Short description here.",
			 "tags": ["Sativa", "Purple Coma", "Nausea"],
			 "imageUrl": "images/strains/acapulcoGold.jpg"
			},
			{"strainId": 146,
			 "strainName": "Purple Passion",
			 "strainType": "Indica",
			 "components": [
			 	{ 
			 		"name": "THC9", 
			 		"value": 21.30
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 1.81
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
			 	} 	
		 	], "THC": 21.00,
			 	"CBD": 0.35,
			 	"CBN": 0.12,
			 	"CBG": 0.00,
			 	"THCV": 0.00,
			 	"THCA": 0.00,
			 	"THC8": 0.00,
			 	"Pulegone": 0.00,
			 	"Myrcene": 0.00,
			 	"Caryophyllene": 0.00,
			 	"Limonene": 0.00,
			 	"Linalool": 0.00,
			 	"Eucalyptol": 0.00,
			 	"Pinene": 0.00,
			 	"Terpineol": 0.00,
			 	"Terpineol-4": 0.00,
			 	"Cymene": 0.00,
			 	"Apigenin": 0.00,
			 	"Quercetin": 0.00,
			 	"Cannflavin A": 0.00,
			 	"Beta-sitosterol": 0.00,
			 	"CBC": 0.00,
			 	"CBL": 0.00
			 	, 
		 	 "conditions": ["Nausea"],
			 "positiveEffects": [""],
			 "negativeEffects": [""],
			 "descriptionDetailed": "Detailed description here. Detailed description here.Detailed description here.Detailed description here. Detailed description here.",
			 "descriptionAbbrev":  "Short description here.",
			 "tags": ["Indica", "Purple Passion", "Nausea"],
			 "imageUrl": "images/strains/acapulcoGold.jpg"
			},
			{"strainId": 147,
			 "strainName": "Sour Bubble",
			 "strainType": "Indica",
			 "components": [
			 	{ 
			 		"name": "THC9", 
			 		"value": 21.30
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 1.81
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
			 	} 	
		 	], "THC": 27.13,
			 	"CBD": 0.52,
			 	"CBN": 0.03,
			 	"CBG": 0.00,
			 	"THCV": 0.00,
			 	"THCA": 0.00,
			 	"THC8": 0.00,
			 	"Pulegone": 0.00,
			 	"Myrcene": 0.00,
			 	"Caryophyllene": 0.00,
			 	"Limonene": 0.00,
			 	"Linalool": 0.00,
			 	"Eucalyptol": 0.00,
			 	"Pinene": 0.00,
			 	"Terpineol": 0.00,
			 	"Terpineol-4": 0.00,
			 	"Cymene": 0.00,
			 	"Apigenin": 0.00,
			 	"Quercetin": 0.00,
			 	"Cannflavin A": 0.00,
			 	"Beta-sitosterol": 0.00,
			 	"CBC": 0.00,
			 	"CBL": 0.00
			 	, 
		 	 "conditions": ["Nausea"],
			 "positiveEffects": [""],
			 "negativeEffects": [""],
			 "descriptionDetailed": "Detailed description here. Detailed description here.Detailed description here.Detailed description here. Detailed description here.",
			 "descriptionAbbrev":  "Short description here.",
			 "tags": ["Indica", "Sour Bubble", "Nausea"],
			 "imageUrl": "images/strains/acapulcoGold.jpg"
			},
			{"strainId": 148,
			 "strainName": "Sour Dub",
			 "strainType": "Sativa",
			 "components": [
			 	{ 
			 		"name": "THC9", 
			 		"value": 21.30
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 1.81
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
			 	} 	
		 	], "THC": 21.20,
			 	"CBD": 0.22,
			 	"CBN": 0.12,
			 	"CBG": 0.00,
			 	"THCV": 0.00,
			 	"THCA": 0.00,
			 	"THC8": 0.00,
			 	"Pulegone": 0.00,
			 	"Myrcene": 0.00,
			 	"Caryophyllene": 0.00,
			 	"Limonene": 0.00,
			 	"Linalool": 0.00,
			 	"Eucalyptol": 0.00,
			 	"Pinene": 0.00,
			 	"Terpineol": 0.00,
			 	"Terpineol-4": 0.00,
			 	"Cymene": 0.00,
			 	"Apigenin": 0.00,
			 	"Quercetin": 0.00,
			 	"Cannflavin A": 0.00,
			 	"Beta-sitosterol": 0.00,
			 	"CBC": 0.00,
			 	"CBL": 0.00
			 	, 
		 	 "conditions": ["Nausea"],
			 "positiveEffects": [""],
			 "negativeEffects": [""],
			 "descriptionDetailed": "Detailed description here. Detailed description here.Detailed description here.Detailed description here. Detailed description here.",
			 "descriptionAbbrev":  "Short description here.",
			 "tags": ["Sativa", "Sour Dub", "Nausea"],
			 "imageUrl": "images/strains/acapulcoGold.jpg"
			},
			{"strainId": 149,
			 "strainName": "Strawberry Mist",
			 "strainType": "Sativa",
			 "components": [
			 	{ 
			 		"name": "THC9", 
			 		"value": 21.30
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 1.81
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
			 	} 	
		 	], "THC": 16.00,
			 	"CBD": 0.38,
			 	"CBN": 0.02,
			 	"CBG": 0.00,
			 	"THCV": 0.00,
			 	"THCA": 0.00,
			 	"THC8": 0.00,
			 	"Pulegone": 0.00,
			 	"Myrcene": 0.00,
			 	"Caryophyllene": 0.00,
			 	"Limonene": 0.00,
			 	"Linalool": 0.00,
			 	"Eucalyptol": 0.00,
			 	"Pinene": 0.00,
			 	"Terpineol": 0.00,
			 	"Terpineol-4": 0.00,
			 	"Cymene": 0.00,
			 	"Apigenin": 0.00,
			 	"Quercetin": 0.00,
			 	"Cannflavin A": 0.00,
			 	"Beta-sitosterol": 0.00,
			 	"CBC": 0.00,
			 	"CBL": 0.00
			 	, 
		 	 "conditions": ["Nausea", "PMS"],
			 "positiveEffects": [""],
			 "negativeEffects": [""],
			 "descriptionDetailed": "Detailed description here. Detailed description here.Detailed description here.Detailed description here. Detailed description here.",
			 "descriptionAbbrev":  "Short description here.",
			 "tags": ["Sativa", "Strawberry Mist", "Nausea", "PMS"],
			 "imageUrl": "images/strains/acapulcoGold.jpg"
			},
			{"strainId": 150,
			 "strainName": "Strawberry Mist",
			 "strainType": "Sativa",
			 "components": [
			 	{ 
			 		"name": "THC9", 
			 		"value": 21.30
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 1.81
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
			 	} 	
		 	], "THC": 16.00,
			 	"CBD": 0.38,
			 	"CBN": 0.02,
			 	"CBG": 0.00,
			 	"THCV": 0.00,
			 	"THCA": 0.00,
			 	"THC8": 0.00,
			 	"Pulegone": 0.00,
			 	"Myrcene": 0.00,
			 	"Caryophyllene": 0.00,
			 	"Limonene": 0.00,
			 	"Linalool": 0.00,
			 	"Eucalyptol": 0.00,
			 	"Pinene": 0.00,
			 	"Terpineol": 0.00,
			 	"Terpineol-4": 0.00,
			 	"Cymene": 0.00,
			 	"Apigenin": 0.00,
			 	"Quercetin": 0.00,
			 	"Cannflavin A": 0.00,
			 	"Beta-sitosterol": 0.00,
			 	"CBC": 0.00,
			 	"CBL": 0.00
			 	, 
		 	 "conditions": ["Nausea", "PMS"],
			 "positiveEffects": [""],
			 "negativeEffects": [""],
			 "descriptionDetailed": "Detailed description here. Detailed description here.Detailed description here.Detailed description here. Detailed description here.",
			 "descriptionAbbrev":  "Short description here.",
			 "tags": ["Sativa", "Strawberry Mist", "Nausea", "PMS"],
			 "imageUrl": "images/strains/acapulcoGold.jpg"
			},
			{"strainId": 151,
			 "strainName": "Afghani Bullrider",
			 "strainType": "Indica",
			 "components": [
			 	{ 
			 		"name": "THC9", 
			 		"value": 21.30
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 1.81
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
			 	} 	
		 	], "THC": 23.40,
			 	"CBD": 0.23,
			 	"CBN": 0.02,
			 	"CBG": 0.00,
			 	"THCV": 0.00,
			 	"THCA": 0.00,
			 	"THC8": 0.00,
			 	"Pulegone": 0.00,
			 	"Myrcene": 0.00,
			 	"Caryophyllene": 0.00,
			 	"Limonene": 0.00,
			 	"Linalool": 0.00,
			 	"Eucalyptol": 0.00,
			 	"Pinene": 0.00,
			 	"Terpineol": 0.00,
			 	"Terpineol-4": 0.00,
			 	"Cymene": 0.00,
			 	"Apigenin": 0.00,
			 	"Quercetin": 0.00,
			 	"Cannflavin A": 0.00,
			 	"Beta-sitosterol": 0.00,
			 	"CBC": 0.00,
			 	"CBL": 0.00
			 	, 
		 	 "conditions": ["Pain", "Stress"],
			 "positiveEffects": [""],
			 "negativeEffects": [""],
			 "descriptionDetailed": "Detailed description here. Detailed description here.Detailed description here.Detailed description here. Detailed description here.",
			 "descriptionAbbrev":  "Short description here.",
			 "tags": ["Indica", "Afghani Bullrider", "Pain", "Stress"],
			 "imageUrl": "images/strains/acapulcoGold.jpg"
			},
			{"strainId": 152,
			 "strainName": "Afgoo",
			 "strainType": "Indica",
			 "components": [
			 	{ 
			 		"name": "THC9", 
			 		"value": 21.30
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 1.81
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
			 	} 	
		 	], "THC": 25.10,
			 	"CBD": 0.76,
			 	"CBN": 0.39,
			 	"CBG": 0.00,
			 	"THCV": 0.00,
			 	"THCA": 0.00,
			 	"THC8": 0.00,
			 	"Pulegone": 0.00,
			 	"Myrcene": 0.00,
			 	"Caryophyllene": 0.00,
			 	"Limonene": 0.00,
			 	"Linalool": 0.00,
			 	"Eucalyptol": 0.00,
			 	"Pinene": 0.00,
			 	"Terpineol": 0.00,
			 	"Terpineol-4": 0.00,
			 	"Cymene": 0.00,
			 	"Apigenin": 0.00,
			 	"Quercetin": 0.00,
			 	"Cannflavin A": 0.00,
			 	"Beta-sitosterol": 0.00,
			 	"CBC": 0.00,
			 	"CBL": 0.00
			 	, 
		 	 "conditions": ["Pain", "Stress"],
			 "positiveEffects": [""],
			 "negativeEffects": [""],
			 "descriptionDetailed": "Detailed description here. Detailed description here.Detailed description here.Detailed description here. Detailed description here.",
			 "descriptionAbbrev":  "Short description here.",
			 "tags": ["Indica", "Afgoo", "Pain", "Stress"],
			 "imageUrl": "images/strains/acapulcoGold.jpg"
			},
			{"strainId": 153,
			 "strainName": "Afgooey",
			 "strainType": "Indica",
			 "components": [
			 	{ 
			 		"name": "THC9", 
			 		"value": 21.30
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 1.81
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
			 	} 	
		 	], "THC": 25.00,
			 	"CBD": 0.85,
			 	"CBN": 0.07,
			 	"CBG": 0.00,
			 	"THCV": 0.00,
			 	"THCA": 0.00,
			 	"THC8": 0.00,
			 	"Pulegone": 0.00,
			 	"Myrcene": 0.00,
			 	"Caryophyllene": 0.00,
			 	"Limonene": 0.00,
			 	"Linalool": 0.00,
			 	"Eucalyptol": 0.00,
			 	"Pinene": 0.00,
			 	"Terpineol": 0.00,
			 	"Terpineol-4": 0.00,
			 	"Cymene": 0.00,
			 	"Apigenin": 0.00,
			 	"Quercetin": 0.00,
			 	"Cannflavin A": 0.00,
			 	"Beta-sitosterol": 0.00,
			 	"CBC": 0.00,
			 	"CBL": 0.00
			 	, 
		 	 "conditions": ["Pain", "Stress"],
			 "positiveEffects": [""],
			 "negativeEffects": [""],
			 "descriptionDetailed": "Detailed description here. Detailed description here.Detailed description here.Detailed description here. Detailed description here.",
			 "descriptionAbbrev":  "Short description here.",
			 "tags": ["Indica", "Afgooey", "Pain", "Stress"],
			 "imageUrl": "images/strains/acapulcoGold.jpg"
			},
			{"strainId": 154,
			 "strainName": "AK-47",
			 "strainType": "Hybrid",
			 "components": [
			 	{ 
			 		"name": "THC9", 
			 		"value": 21.30
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 1.81
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
			 	} 	
		 	], "THC": 23.63,
			 	"CBD": 0.36,
			 	"CBN": 0.07,
			 	"CBG": 0.00,
			 	"THCV": 0.00,
			 	"THCA": 0.00,
			 	"THC8": 0.00,
			 	"Pulegone": 0.00,
			 	"Myrcene": 0.00,
			 	"Caryophyllene": 0.00,
			 	"Limonene": 0.00,
			 	"Linalool": 0.00,
			 	"Eucalyptol": 0.00,
			 	"Pinene": 0.00,
			 	"Terpineol": 0.00,
			 	"Terpineol-4": 0.00,
			 	"Cymene": 0.00,
			 	"Apigenin": 0.00,
			 	"Quercetin": 0.00,
			 	"Cannflavin A": 0.00,
			 	"Beta-sitosterol": 0.00,
			 	"CBC": 0.00,
			 	"CBL": 0.00
			 	, 
		 	 "conditions": ["Pain", "Stress"],
			 "positiveEffects": [""],
			 "negativeEffects": [""],
			 "descriptionDetailed": "Detailed description here. Detailed description here.Detailed description here.Detailed description here. Detailed description here.",
			 "descriptionAbbrev":  "Short description here.",
			 "tags": ["Hybrid", "AK-47", "Pain", "Stress"],
			 "imageUrl": "images/strains/acapulcoGold.jpg"
			},
			{"strainId": 155,
			 "strainName": "AK-48",
			 "strainType": "Hybrid",
			 "components": [
			 	{ 
			 		"name": "THC9", 
			 		"value": 21.30
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 1.81
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
			 	} 	
		 	], "THC": 19.90,
			 	"CBD": 0.54,
			 	"CBN": 0.05,
			 	"CBG": 0.00,
			 	"THCV": 0.00,
			 	"THCA": 0.00,
			 	"THC8": 0.00,
			 	"Pulegone": 0.00,
			 	"Myrcene": 0.00,
			 	"Caryophyllene": 0.00,
			 	"Limonene": 0.00,
			 	"Linalool": 0.00,
			 	"Eucalyptol": 0.00,
			 	"Pinene": 0.00,
			 	"Terpineol": 0.00,
			 	"Terpineol-4": 0.00,
			 	"Cymene": 0.00,
			 	"Apigenin": 0.00,
			 	"Quercetin": 0.00,
			 	"Cannflavin A": 0.00,
			 	"Beta-sitosterol": 0.00,
			 	"CBC": 0.00,
			 	"CBL": 0.00
			 	, 
		 	 "conditions": ["Pain", "Stress"],
			 "positiveEffects": [""],
			 "negativeEffects": [""],
			 "descriptionDetailed": "Detailed description here. Detailed description here.Detailed description here.Detailed description here. Detailed description here.",
			 "descriptionAbbrev":  "Short description here.",
			 "tags": ["Hybrid", "AK-48", "Pain", "Stress"],
			 "imageUrl": "images/strains/acapulcoGold.jpg"
			},
			{"strainId": 156,
			 "strainName": "Alien Rock Candy",
			 "strainType": "Hybrid",
			 "components": [
			 	{ 
			 		"name": "THC9", 
			 		"value": 21.30
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 1.81
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
			 	} 	
		 	], "THC": 23.80,
			 	"CBD": 0.35,
			 	"CBN": 0.24,
			 	"CBG": 0.00,
			 	"THCV": 0.00,
			 	"THCA": 0.00,
			 	"THC8": 0.00,
			 	"Pulegone": 0.00,
			 	"Myrcene": 0.00,
			 	"Caryophyllene": 0.00,
			 	"Limonene": 0.00,
			 	"Linalool": 0.00,
			 	"Eucalyptol": 0.00,
			 	"Pinene": 0.00,
			 	"Terpineol": 0.00,
			 	"Terpineol-4": 0.00,
			 	"Cymene": 0.00,
			 	"Apigenin": 0.00,
			 	"Quercetin": 0.00,
			 	"Cannflavin A": 0.00,
			 	"Beta-sitosterol": 0.00,
			 	"CBC": 0.00,
			 	"CBL": 0.00
			 	, 
		 	 "conditions": ["Pain"],
			 "positiveEffects": [""],
			 "negativeEffects": [""],
			 "descriptionDetailed": "Detailed description here. Detailed description here.Detailed description here.Detailed description here. Detailed description here.",
			 "descriptionAbbrev":  "Short description here.",
			 "tags": ["Hybrid", "Alien Rock Candy", "Pain"],
			 "imageUrl": "images/strains/acapulcoGold.jpg"
			},
			{"strainId": 157,
			 "strainName": "Black Buddah",
			 "strainType": "Indica",
			 "components": [
			 	{ 
			 		"name": "THC9", 
			 		"value": 21.30
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 1.81
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
			 	} 	
		 	], "THC": 20.90,
			 	"CBD": 0.47,
			 	"CBN": 0.12,
			 	"CBG": 0.00,
			 	"THCV": 0.00,
			 	"THCA": 0.00,
			 	"THC8": 0.00,
			 	"Pulegone": 0.00,
			 	"Myrcene": 0.00,
			 	"Caryophyllene": 0.00,
			 	"Limonene": 0.00,
			 	"Linalool": 0.00,
			 	"Eucalyptol": 0.00,
			 	"Pinene": 0.00,
			 	"Terpineol": 0.00,
			 	"Terpineol-4": 0.00,
			 	"Cymene": 0.00,
			 	"Apigenin": 0.00,
			 	"Quercetin": 0.00,
			 	"Cannflavin A": 0.00,
			 	"Beta-sitosterol": 0.00,
			 	"CBC": 0.00,
			 	"CBL": 0.00
			 	, 
		 	 "conditions": ["Pain", "Stress"],
			 "positiveEffects": [""],
			 "negativeEffects": [""],
			 "descriptionDetailed": "Detailed description here. Detailed description here.Detailed description here.Detailed description here. Detailed description here.",
			 "descriptionAbbrev":  "Short description here.",
			 "tags": ["Indica", "Black Buddah", "Pain", "Stress"],
			 "imageUrl": "images/strains/acapulcoGold.jpg"
			},
			{"strainId": 158,
			 "strainName": "OG Cheese",
			 "strainType": "Hybrid",
			 "components": [
			 	{ 
			 		"name": "THC9", 
			 		"value": 21.30
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 1.81
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
			 	} 	
		 	], "THC": 24.10,
			 	"CBD": 0.36,
			 	"CBN": 0.04,
			 	"CBG": 0.00,
			 	"THCV": 0.00,
			 	"THCA": 0.00,
			 	"THC8": 0.00,
			 	"Pulegone": 0.00,
			 	"Myrcene": 0.00,
			 	"Caryophyllene": 0.00,
			 	"Limonene": 0.00,
			 	"Linalool": 0.00,
			 	"Eucalyptol": 0.00,
			 	"Pinene": 0.00,
			 	"Terpineol": 0.00,
			 	"Terpineol-4": 0.00,
			 	"Cymene": 0.00,
			 	"Apigenin": 0.00,
			 	"Quercetin": 0.00,
			 	"Cannflavin A": 0.00,
			 	"Beta-sitosterol": 0.00,
			 	"CBC": 0.00,
			 	"CBL": 0.00
			 	, 
		 	 "conditions": ["Hypertension", "PMS"],
			 "positiveEffects": [""],
			 "negativeEffects": [""],
			 "descriptionDetailed": "Detailed description here. Detailed description here.Detailed description here.Detailed description here. Detailed description here.",
			 "descriptionAbbrev":  "Short description here.",
			 "tags": ["Hybrid", "OG Cheese", "OG", "Hypertension", "PMS"],
			 "imageUrl": "images/strains/acapulcoGold.jpg"
			},
			{"strainId": 159,
			 "strainName": "Mercury OG",
			 "strainType": "Indica",
			 "components": [
			 	{ 
			 		"name": "THC9", 
			 		"value": 21.30
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 1.81
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
			 	} 	
		 	], "THC": 27.00,
			 	"CBD": 0.35,
			 	"CBN": 0.03,
			 	"CBG": 0.00,
			 	"THCV": 0.00,
			 	"THCA": 0.00,
			 	"THC8": 0.00,
			 	"Pulegone": 0.00,
			 	"Myrcene": 0.00,
			 	"Caryophyllene": 0.00,
			 	"Limonene": 0.00,
			 	"Linalool": 0.00,
			 	"Eucalyptol": 0.00,
			 	"Pinene": 0.00,
			 	"Terpineol": 0.00,
			 	"Terpineol-4": 0.00,
			 	"Cymene": 0.00,
			 	"Apigenin": 0.00,
			 	"Quercetin": 0.00,
			 	"Cannflavin A": 0.00,
			 	"Beta-sitosterol": 0.00,
			 	"CBC": 0.00,
			 	"CBL": 0.00
			 	, 
		 	 "conditions": ["Hypertension", "PMS"],
			 "positiveEffects": [""],
			 "negativeEffects": [""],
			 "descriptionDetailed": "Detailed description here. Detailed description here.Detailed description here.Detailed description here. Detailed description here.",
			 "descriptionAbbrev":  "Short description here.",
			 "tags": ["Indica", "Mercury OG", "Hypertension", "PMS"],
			 "imageUrl": "images/strains/acapulcoGold.jpg"
			},
			{"strainId": 160,
			 "strainName": "Silver Surfer",
			 "strainType": "Hybrid",
			 "components": [
			 	{ 
			 		"name": "THC9", 
			 		"value": 21.30
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 1.81
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
			 	} 	
		 	], "THC": 24.86,
			 	"CBD": 0.52,
			 	"CBN": 0.15,
			 	"CBG": 0.00,
			 	"THCV": 0.00,
			 	"THCA": 0.00,
			 	"THC8": 0.00,
			 	"Pulegone": 0.00,
			 	"Myrcene": 0.00,
			 	"Caryophyllene": 0.00,
			 	"Limonene": 0.00,
			 	"Linalool": 0.00,
			 	"Eucalyptol": 0.00,
			 	"Pinene": 0.00,
			 	"Terpineol": 0.00,
			 	"Terpineol-4": 0.00,
			 	"Cymene": 0.00,
			 	"Apigenin": 0.00,
			 	"Quercetin": 0.00,
			 	"Cannflavin A": 0.00,
			 	"Beta-sitosterol": 0.00,
			 	"CBC": 0.00,
			 	"CBL": 0.00
			 	, 
		 	 "conditions": ["Glaucoma"],
			 "positiveEffects": [""],
			 "negativeEffects": [""],
			 "descriptionDetailed": "Detailed description here. Detailed description here.Detailed description here.Detailed description here. Detailed description here.",
			 "descriptionAbbrev":  "Short description here.",
			 "tags": ["Hybrid", "Silver Surfer", "Glaucoma"],
			 "imageUrl": "images/strains/acapulcoGold.jpg"
			},
			{"strainId": 161,
			 "strainName": "Sour OG",
			 "strainType": "Hybrid",
			 "components": [
			 	{ 
			 		"name": "THC9", 
			 		"value": 21.30
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 1.81
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
			 	} 	
		 	], "THC": 19.30,
			 	"CBD": 0.25,
			 	"CBN": 0.04,
			 	"CBG": 0.00,
			 	"THCV": 0.00,
			 	"THCA": 0.00,
			 	"THC8": 0.00,
			 	"Pulegone": 0.00,
			 	"Myrcene": 0.00,
			 	"Caryophyllene": 0.00,
			 	"Limonene": 0.00,
			 	"Linalool": 0.00,
			 	"Eucalyptol": 0.00,
			 	"Pinene": 0.00,
			 	"Terpineol": 0.00,
			 	"Terpineol-4": 0.00,
			 	"Cymene": 0.00,
			 	"Apigenin": 0.00,
			 	"Quercetin": 0.00,
			 	"Cannflavin A": 0.00,
			 	"Beta-sitosterol": 0.00,
			 	"CBC": 0.00,
			 	"CBL": 0.00
			 	, 
		 	 "conditions": ["Epilepsy"],
			 "positiveEffects": [""],
			 "negativeEffects": [""],
			 "descriptionDetailed": "Detailed description here. Detailed description here.Detailed description here.Detailed description here. Detailed description here.",
			 "descriptionAbbrev":  "Short description here.",
			 "tags": ["Hybrid", "Sour OG", "Epilepsy"],
			 "imageUrl": "images/strains/acapulcoGold.jpg"
			},
			{"strainId": 162,
			 "strainName": "Mars OG",
			 "strainType": "Indica",
			 "components": [
			 	{ 
			 		"name": "THC9", 
			 		"value": 21.30
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 1.81
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
			 	} 	
		 	], "THC": 22.90,
			 	"CBD": 0.46,
			 	"CBN": 0.07,
			 	"CBG": 0.00,
			 	"THCV": 0.00,
			 	"THCA": 0.00,
			 	"THC8": 0.00,
			 	"Pulegone": 0.00,
			 	"Myrcene": 0.00,
			 	"Caryophyllene": 0.00,
			 	"Limonene": 0.00,
			 	"Linalool": 0.00,
			 	"Eucalyptol": 0.00,
			 	"Pinene": 0.00,
			 	"Terpineol": 0.00,
			 	"Terpineol-4": 0.00,
			 	"Cymene": 0.00,
			 	"Apigenin": 0.00,
			 	"Quercetin": 0.00,
			 	"Cannflavin A": 0.00,
			 	"Beta-sitosterol": 0.00,
			 	"CBC": 0.00,
			 	"CBL": 0.00
			 	, 
		 	 "conditions": ["Epilepsy"],
			 "positiveEffects": [""],
			 "negativeEffects": [""],
			 "descriptionDetailed": "Detailed description here. Detailed description here.Detailed description here.Detailed description here. Detailed description here.",
			 "descriptionAbbrev":  "Short description here.",
			 "tags": ["Indica", "Mars OG", "Epilepsy"],
			 "imageUrl": "images/strains/acapulcoGold.jpg"
			},
			{"strainId": 163,
			 "strainName": "Cannatonic #4",
			 "strainType": "Hybrid",
			 "components": [
			 	{ 
			 		"name": "THC9", 
			 		"value": 21.30
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 1.81
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
			 	} 	
		 	], "THC": 0.50,
			 	"CBD": 15.00,
			 	"CBN": 0.07,
			 	"CBG": 0.00,
			 	"THCV": 0.00,
			 	"THCA": 0.00,
			 	"THC8": 0.00,
			 	"Pulegone": 0.00,
			 	"Myrcene": 0.00,
			 	"Caryophyllene": 0.00,
			 	"Limonene": 0.00,
			 	"Linalool": 0.00,
			 	"Eucalyptol": 0.00,
			 	"Pinene": 0.00,
			 	"Terpineol": 0.00,
			 	"Terpineol-4": 0.00,
			 	"Cymene": 0.00,
			 	"Apigenin": 0.00,
			 	"Quercetin": 0.00,
			 	"Cannflavin A": 0.00,
			 	"Beta-sitosterol": 0.00,
			 	"CBC": 0.00,
			 	"CBL": 0.00
			 	, 
		 	 "conditions": ["Epilepsy", "Stress"],
			 "positiveEffects": [""],
			 "negativeEffects": [""],
			 "descriptionDetailed": "Detailed description here. Detailed description here.Detailed description here.Detailed description here. Detailed description here.",
			 "descriptionAbbrev":  "Short description here.",
			 "tags": ["Hybrid", "Cannatonic #4", "Epilepsy", "Stress"],
			 "imageUrl": "images/strains/acapulcoGold.jpg"
			},
			{"strainId": 164,
			 "strainName": "Green Dream",
			 "strainType": "Hybrid",
			 "components": [
			 	{ 
			 		"name": "THC9", 
			 		"value": 21.30
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 1.81
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
			 	} 	
		 	], "THC": 0.50,
			 	"CBD": 15.00,
			 	"CBN": 0.07,
			 	"CBG": 0.00,
			 	"THCV": 0.00,
			 	"THCA": 0.00,
			 	"THC8": 0.00,
			 	"Pulegone": 0.00,
			 	"Myrcene": 0.00,
			 	"Caryophyllene": 0.00,
			 	"Limonene": 0.00,
			 	"Linalool": 0.00,
			 	"Eucalyptol": 0.00,
			 	"Pinene": 0.00,
			 	"Terpineol": 0.00,
			 	"Terpineol-4": 0.00,
			 	"Cymene": 0.00,
			 	"Apigenin": 0.00,
			 	"Quercetin": 0.00,
			 	"Cannflavin A": 0.00,
			 	"Beta-sitosterol": 0.00,
			 	"CBC": 0.00,
			 	"CBL": 0.00
			 	, 
		 	 "conditions": [""],
			 "positiveEffects": [""],
			 "negativeEffects": [""],
			 "descriptionDetailed": "Detailed description here. Detailed description here.Detailed description here.Detailed description here. Detailed description here.",
			 "descriptionAbbrev":  "Short description here.",
			 "tags": ["Hybrid", "Cannatonic #4", "Epilepsy"],
			 "imageUrl": "images/strains/acapulcoGold.jpg"
			},
			{"strainId": 165,
			 "strainName": "Green Dynamite",
			 "strainType": "Indica",
			 "components": [
			 	{ 
			 		"name": "THC9", 
			 		"value": 21.30
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 1.81
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
			 	} 	
		 	], "THC": 24.66,
			 	"CBD": 0.43,
			 	"CBN": 0.11,
			 	"CBG": 0.00,
			 	"THCV": 0.00,
			 	"THCA": 0.00,
			 	"THC8": 0.00,
			 	"Pulegone": 0.00,
			 	"Myrcene": 0.00,
			 	"Caryophyllene": 0.00,
			 	"Limonene": 0.00,
			 	"Linalool": 0.00,
			 	"Eucalyptol": 0.00,
			 	"Pinene": 0.00,
			 	"Terpineol": 0.00,
			 	"Terpineol-4": 0.00,
			 	"Cymene": 0.00,
			 	"Apigenin": 0.00,
			 	"Quercetin": 0.00,
			 	"Cannflavin A": 0.00,
			 	"Beta-sitosterol": 0.00,
			 	"CBC": 0.00,
			 	"CBL": 0.00
			 	, 
		 	 "conditions": ["PMS"],
			 "positiveEffects": [""],
			 "negativeEffects": [""],
			 "descriptionDetailed": "Detailed description here. Detailed description here.Detailed description here.Detailed description here. Detailed description here.",
			 "descriptionAbbrev":  "Short description here.",
			 "tags": ["Indica", "Green Dynamite", "PMS"],
			 "imageUrl": "images/strains/acapulcoGold.jpg"
			},
			{"strainId": 166,
			 "strainName": "J1",
			 "strainType": "Hybrid",
			 "components": [
			 	{ 
			 		"name": "THC9", 
			 		"value": 21.30
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 1.81
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
			 	} 	
		 	], "THC": 14.00,
			 	"CBD": 0.19,
			 	"CBN": 0.05,
			 	"CBG": 0.00,
			 	"THCV": 0.00,
			 	"THCA": 0.00,
			 	"THC8": 0.00,
			 	"Pulegone": 0.00,
			 	"Myrcene": 0.00,
			 	"Caryophyllene": 0.00,
			 	"Limonene": 0.00,
			 	"Linalool": 0.00,
			 	"Eucalyptol": 0.00,
			 	"Pinene": 0.00,
			 	"Terpineol": 0.00,
			 	"Terpineol-4": 0.00,
			 	"Cymene": 0.00,
			 	"Apigenin": 0.00,
			 	"Quercetin": 0.00,
			 	"Cannflavin A": 0.00,
			 	"Beta-sitosterol": 0.00,
			 	"CBC": 0.00,
			 	"CBL": 0.00
			 	, 
		 	 "conditions": ["PMS"],
			 "positiveEffects": [""],
			 "negativeEffects": [""],
			 "descriptionDetailed": "Detailed description here. Detailed description here.Detailed description here.Detailed description here. Detailed description here.",
			 "descriptionAbbrev":  "Short description here.",
			 "tags": ["Hybrid", "J1", "PMS"],
			 "imageUrl": "images/strains/acapulcoGold.jpg"
			},
			{"strainId": 167,
			 "strainName": "Krytonite",
			 "strainType": "Indica",
			 "components": [
			 	{ 
			 		"name": "THC9", 
			 		"value": 21.30
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 1.81
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
			 	} 	
		 	], "THC": 18.60,
			 	"CBD": 0.47,
			 	"CBN": 0.04,
			 	"CBG": 0.00,
			 	"THCV": 0.00,
			 	"THCA": 0.00,
			 	"THC8": 0.00,
			 	"Pulegone": 0.00,
			 	"Myrcene": 0.00,
			 	"Caryophyllene": 0.00,
			 	"Limonene": 0.00,
			 	"Linalool": 0.00,
			 	"Eucalyptol": 0.00,
			 	"Pinene": 0.00,
			 	"Terpineol": 0.00,
			 	"Terpineol-4": 0.00,
			 	"Cymene": 0.00,
			 	"Apigenin": 0.00,
			 	"Quercetin": 0.00,
			 	"Cannflavin A": 0.00,
			 	"Beta-sitosterol": 0.00,
			 	"CBC": 0.00,
			 	"CBL": 0.00
			 	, 
		 	 "conditions": ["PMS"],
			 "positiveEffects": [""],
			 "negativeEffects": [""],
			 "descriptionDetailed": "Detailed description here. Detailed description here.Detailed description here.Detailed description here. Detailed description here.",
			 "descriptionAbbrev":  "Short description here.",
			 "tags": ["Indica", "Krytonite", "PMS"],
			 "imageUrl": "images/strains/acapulcoGold.jpg"
			},
			{"strainId": 168,
			 "strainName": "Master Kush",
			 "strainType": "Indica",
			 "components": [
			 	{ 
			 		"name": "THC9", 
			 		"value": 21.30
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 1.81
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
			 	} 	
		 	], "THC": 21.20,
			 	"CBD": 0.27,
			 	"CBN": 0.04,
			 	"CBG": 0.08,
			 	"THCV": 0.00,
			 	"THCA": 0.00,
			 	"THC8": 0.00,
			 	"Pulegone": 0.00,
			 	"Myrcene": 0.00,
			 	"Caryophyllene": 0.00,
			 	"Limonene": 0.00,
			 	"Linalool": 0.00,
			 	"Eucalyptol": 0.00,
			 	"Pinene": 0.00,
			 	"Terpineol": 0.00,
			 	"Terpineol-4": 0.00,
			 	"Cymene": 0.00,
			 	"Apigenin": 0.00,
			 	"Quercetin": 0.00,
			 	"Cannflavin A": 0.00,
			 	"Beta-sitosterol": 0.00,
			 	"CBC": 0.00,
			 	"CBL": 0.00
			 	, 
		 	 "conditions": ["PMS"],
			 "positiveEffects": [""],
			 "negativeEffects": [""],
			 "descriptionDetailed": "Detailed description here. Detailed description here.Detailed description here.Detailed description here. Detailed description here.",
			 "descriptionAbbrev":  "Short description here.",
			 "tags": ["Indica", "Master Kush", "Kush", "PMS"],
			 "imageUrl": "images/strains/acapulcoGold.jpg"
			},
			{"strainId": 169,
			 "strainName": "Black Magic Kush",
			 "strainType": "Indica",
			 "components": [
			 	{ 
			 		"name": "THC9", 
			 		"value": 21.30
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 1.81
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
			 	} 	
		 	], "THC": 26.73,
			 	"CBD": 0.10,
			 	"CBN": 0.01,
			 	"CBG": 0.00,
			 	"THCV": 0.00,
			 	"THCA": 0.00,
			 	"THC8": 0.00,
			 	"Pulegone": 0.00,
			 	"Myrcene": 0.00,
			 	"Caryophyllene": 0.00,
			 	"Limonene": 0.00,
			 	"Linalool": 0.00,
			 	"Eucalyptol": 0.00,
			 	"Pinene": 0.00,
			 	"Terpineol": 0.00,
			 	"Terpineol-4": 0.00,
			 	"Cymene": 0.00,
			 	"Apigenin": 0.00,
			 	"Quercetin": 0.00,
			 	"Cannflavin A": 0.00,
			 	"Beta-sitosterol": 0.00,
			 	"CBC": 0.00,
			 	"CBL": 0.00
			 	, 
		 	 "conditions": ["Stress"],
			 "positiveEffects": [""],
			 "negativeEffects": [""],
			 "descriptionDetailed": "Detailed description here. Detailed description here.Detailed description here.Detailed description here. Detailed description here.",
			 "descriptionAbbrev":  "Short description here.",
			 "tags": ["Indica", "Black Magic Kush", "Kush", "Stress"],
			 "imageUrl": "images/strains/acapulcoGold.jpg"
			},
			{"strainId": 170,
			 "strainName": "Blackberry Kush",
			 "strainType": "Indica",
			 "components": [
			 	{ 
			 		"name": "THC9", 
			 		"value": 21.30
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 1.81
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
			 	} 	
		 	], "THC": 22.90,
			 	"CBD": 0.27,
			 	"CBN": 0.19,
			 	"CBG": 0.00,
			 	"THCV": 0.00,
			 	"THCA": 0.00,
			 	"THC8": 0.00,
			 	"Pulegone": 0.00,
			 	"Myrcene": 0.00,
			 	"Caryophyllene": 0.00,
			 	"Limonene": 0.00,
			 	"Linalool": 0.00,
			 	"Eucalyptol": 0.00,
			 	"Pinene": 0.00,
			 	"Terpineol": 0.00,
			 	"Terpineol-4": 0.00,
			 	"Cymene": 0.00,
			 	"Apigenin": 0.00,
			 	"Quercetin": 0.00,
			 	"Cannflavin A": 0.00,
			 	"Beta-sitosterol": 0.00,
			 	"CBC": 0.00,
			 	"CBL": 0.00
			 	, 
		 	 "conditions": ["Stress"],
			 "positiveEffects": [""],
			 "negativeEffects": [""],
			 "descriptionDetailed": "Detailed description here. Detailed description here.Detailed description here.Detailed description here. Detailed description here.",
			 "descriptionAbbrev":  "Short description here.",
			 "tags": ["Indica", "Blackberry Kush", "Kush", "Stress"],
			 "imageUrl": "images/strains/acapulcoGold.jpg"
			},
			{"strainId": 171,
			 "strainName": "Blue Diesel",
			 "strainType": "Hybrid",
			 "components": [
			 	{ 
			 		"name": "THC9", 
			 		"value": 21.30
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 1.81
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
			 	} 	
		 	], "THC": 22.14,
			 	"CBD": 0.41,
			 	"CBN": 0.03,
			 	"CBG": 0.00,
			 	"THCV": 0.00,
			 	"THCA": 0.00,
			 	"THC8": 0.00,
			 	"Pulegone": 0.00,
			 	"Myrcene": 0.00,
			 	"Caryophyllene": 0.00,
			 	"Limonene": 0.00,
			 	"Linalool": 0.00,
			 	"Eucalyptol": 0.00,
			 	"Pinene": 0.00,
			 	"Terpineol": 0.00,
			 	"Terpineol-4": 0.00,
			 	"Cymene": 0.00,
			 	"Apigenin": 0.00,
			 	"Quercetin": 0.00,
			 	"Cannflavin A": 0.00,
			 	"Beta-sitosterol": 0.00,
			 	"CBC": 0.00,
			 	"CBL": 0.00
			 	, 
		 	 "conditions": ["Stress"],
			 "positiveEffects": [""],
			 "negativeEffects": [""],
			 "descriptionDetailed": "Detailed description here. Detailed description here.Detailed description here.Detailed description here. Detailed description here.",
			 "descriptionAbbrev":  "Short description here.",
			 "tags": ["Hybrid", "Blue Diesel", "Stress"],
			 "imageUrl": "images/strains/acapulcoGold.jpg"
			}, 
			{"strainId": 172,
			 "strainName": "Blue Haze",
			 "strainType": "Hybrid",
			 "components": [
			 	{ 
			 		"name": "THC9", 
			 		"value": 21.30
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 1.81
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
			 	} 	
		 	], "THC": 23.90,
			 	"CBD": 0.37,
			 	"CBN": 0.12,
			 	"CBG": 0.00,
			 	"THCV": 0.00,
			 	"THCA": 0.00,
			 	"THC8": 0.00,
			 	"Pulegone": 0.00,
			 	"Myrcene": 0.00,
			 	"Caryophyllene": 0.00,
			 	"Limonene": 0.00,
			 	"Linalool": 0.00,
			 	"Eucalyptol": 0.00,
			 	"Pinene": 0.00,
			 	"Terpineol": 0.00,
			 	"Terpineol-4": 0.00,
			 	"Cymene": 0.00,
			 	"Apigenin": 0.00,
			 	"Quercetin": 0.00,
			 	"Cannflavin A": 0.00,
			 	"Beta-sitosterol": 0.00,
			 	"CBC": 0.00,
			 	"CBL": 0.00
			 	, 
		 	 "conditions": ["Stress"],
			 "positiveEffects": [""],
			 "negativeEffects": [""],
			 "descriptionDetailed": "Detailed description here. Detailed description here.Detailed description here.Detailed description here. Detailed description here.",
			 "descriptionAbbrev":  "Short description here.",
			 "tags": ["Hybrid", "Blue Haze", "Haze", "Stress"],
			 "imageUrl": "images/strains/acapulcoGold.jpg"
			},
			{"strainId": 173,
			 "strainName": "Brutus OG",
			 "strainType": "Indica",
			 "components": [
			 	{ 
			 		"name": "THC9", 
			 		"value": 21.30
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 1.81
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
			 	} 	
		 	], "THC": 25.50,
			 	"CBD": 0.32,
			 	"CBN": 0.04,
			 	"CBG": 0.00,
			 	"THCV": 0.00,
			 	"THCA": 0.00,
			 	"THC8": 0.00,
			 	"Pulegone": 0.00,
			 	"Myrcene": 0.00,
			 	"Caryophyllene": 0.00,
			 	"Limonene": 0.00,
			 	"Linalool": 0.00,
			 	"Eucalyptol": 0.00,
			 	"Pinene": 0.00,
			 	"Terpineol": 0.00,
			 	"Terpineol-4": 0.00,
			 	"Cymene": 0.00,
			 	"Apigenin": 0.00,
			 	"Quercetin": 0.00,
			 	"Cannflavin A": 0.00,
			 	"Beta-sitosterol": 0.00,
			 	"CBC": 0.00,
			 	"CBL": 0.00
			 	, 
		 	 "conditions": ["Stress"],
			 "positiveEffects": [""],
			 "negativeEffects": [""],
			 "descriptionDetailed": "Detailed description here. Detailed description here.Detailed description here.Detailed description here. Detailed description here.",
			 "descriptionAbbrev":  "Short description here.",
			 "tags": ["Indica", "Brutus OG", "OG", "Stress"],
			 "imageUrl": "images/strains/acapulcoGold.jpg"
			},
			{"strainId": 174,
			 "strainName": "Bubba Kush",
			 "strainType": "Indica",
			 "components": [
			 	{ 
			 		"name": "THC9", 
			 		"value": 21.30
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 1.81
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
			 	} 	
		 	], "THC": 21.90,
			 	"CBD": 0.09,
			 	"CBN": 0.02,
			 	"CBG": 0.50,
			 	"THCV": 0.09,
			 	"THCA": 0.00,
			 	"THC8": 0.00,
			 	"Pulegone": 0.00,
			 	"Myrcene": 0.11,
			 	"Caryophyllene": 0.17,
			 	"Limonene": 0.20,
			 	"Linalool": 0.13,
			 	"Eucalyptol": 0.00,
			 	"Pinene": 0.13,
			 	"Terpineol": 0.00,
			 	"Terpineol-4": 0.00,
			 	"Cymene": 0.00,
			 	"Apigenin": 0.00,
			 	"Quercetin": 0.00,
			 	"Cannflavin A": 0.00,
			 	"Beta-sitosterol": 0.00,
			 	"CBC": 0.05,
			 	"CBL": 0.01
			 	, 
		 	 "conditions": ["Stress"],
			 "positiveEffects": [""],
			 "negativeEffects": [""],
			 "descriptionDetailed": "Detailed description here. Detailed description here.Detailed description here.Detailed description here. Detailed description here.",
			 "descriptionAbbrev":  "Short description here.",
			 "tags": ["Indica", "Bubba Kush", "Kush", "Stress"],
			 "imageUrl": "images/strains/acapulcoGold.jpg"
			},
			{"strainId": 175,
			 "strainName": "Cheese",
			 "strainType": "Hybrid",
			 "components": [
			 	{ 
			 		"name": "THC9", 
			 		"value": 21.30
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 1.81
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
			 	} 	
		 	], "THC": 18.40,
			 	"CBD": 0.25,
			 	"CBN": 0.08,
			 	"CBG": 0.00,
			 	"THCV": 0.00,
			 	"THCA": 0.00,
			 	"THC8": 0.00,
			 	"Pulegone": 0.00,
			 	"Myrcene": 0.00,
			 	"Caryophyllene": 0.00,
			 	"Limonene": 0.00,
			 	"Linalool": 0.00,
			 	"Eucalyptol": 0.00,
			 	"Pinene": 0.00,
			 	"Terpineol": 0.00,
			 	"Terpineol-4": 0.00,
			 	"Cymene": 0.00,
			 	"Apigenin": 0.00,
			 	"Quercetin": 0.00,
			 	"Cannflavin A": 0.00,
			 	"Beta-sitosterol": 0.00,
			 	"CBC": 0.00,
			 	"CBL": 0.00
			 	, 
		 	 "conditions": ["Stress"],
			 "positiveEffects": [""],
			 "negativeEffects": [""],
			 "descriptionDetailed": "Detailed description here. Detailed description here.Detailed description here.Detailed description here. Detailed description here.",
			 "descriptionAbbrev":  "Short description here.",
			 "tags": ["Hybrid", "Cheese", "Stress"],
			 "imageUrl": "images/strains/acapulcoGold.jpg"
			}, 
			{"strainId": 176,
			 "strainName": "Cinderella 99",
			 "strainType": "Hybrid",
			 "components": [
			 	{ 
			 		"name": "THC9", 
			 		"value": 21.30
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 1.81
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
			 	} 	
		 	], "THC": 17.90,
			 	"CBD": 0.25,
			 	"CBN": 0.05,
			 	"CBG": 0.00,
			 	"THCV": 0.00,
			 	"THCA": 0.00,
			 	"THC8": 0.00,
			 	"Pulegone": 0.00,
			 	"Myrcene": 0.00,
			 	"Caryophyllene": 0.00,
			 	"Limonene": 0.00,
			 	"Linalool": 0.00,
			 	"Eucalyptol": 0.00,
			 	"Pinene": 0.00,
			 	"Terpineol": 0.00,
			 	"Terpineol-4": 0.00,
			 	"Cymene": 0.00,
			 	"Apigenin": 0.00,
			 	"Quercetin": 0.00,
			 	"Cannflavin A": 0.00,
			 	"Beta-sitosterol": 0.00,
			 	"CBC": 0.00,
			 	"CBL": 0.00
			 	, 
		 	 "conditions": ["Stress"],
			 "positiveEffects": [""],
			 "negativeEffects": [""],
			 "descriptionDetailed": "Detailed description here. Detailed description here.Detailed description here.Detailed description here. Detailed description here.",
			 "descriptionAbbrev":  "Short description here.",
			 "tags": ["Hybrid", "Cinderella 99", "Stress"],
			 "imageUrl": "images/strains/acapulcoGold.jpg"
			}, 
			{"strainId": 177,
			 "strainName": "Diablo Haze",
			 "strainType": "Indica",
			 "components": [
			 	{ 
			 		"name": "THC9", 
			 		"value": 21.30
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 1.81
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
			 	} 	
		 	], "THC": 27.29,
			 	"CBD": 0.43,
			 	"CBN": 0.02,
			 	"CBG": 0.00,
			 	"THCV": 0.00,
			 	"THCA": 0.00,
			 	"THC8": 0.00,
			 	"Pulegone": 0.00,
			 	"Myrcene": 0.00,
			 	"Caryophyllene": 0.00,
			 	"Limonene": 0.00,
			 	"Linalool": 0.00,
			 	"Eucalyptol": 0.00,
			 	"Pinene": 0.00,
			 	"Terpineol": 0.00,
			 	"Terpineol-4": 0.00,
			 	"Cymene": 0.00,
			 	"Apigenin": 0.00,
			 	"Quercetin": 0.00,
			 	"Cannflavin A": 0.00,
			 	"Beta-sitosterol": 0.00,
			 	"CBC": 0.00,
			 	"CBL": 0.00
			 	, 
		 	 "conditions": ["Stress"],
			 "positiveEffects": [""],
			 "negativeEffects": [""],
			 "descriptionDetailed": "Detailed description here. Detailed description here.Detailed description here.Detailed description here. Detailed description here.",
			 "descriptionAbbrev":  "Short description here.",
			 "tags": ["Indica", "Diablo Haze", "Haze", "Stress"],
			 "imageUrl": "images/strains/acapulcoGold.jpg"
			},
			{"strainId": 177,
			 "strainName": "Diamond OG",
			 "strainType": "Indica",
			 "components": [
			 	{ 
			 		"name": "THC9", 
			 		"value": 21.30
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 1.81
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
			 	} 	
		 	], "THC": 22.95,
			 	"CBD": 0.39,
			 	"CBN": 0.11,
			 	"CBG": 0.00,
			 	"THCV": 0.00,
			 	"THCA": 0.00,
			 	"THC8": 0.00,
			 	"Pulegone": 0.00,
			 	"Myrcene": 0.00,
			 	"Caryophyllene": 0.00,
			 	"Limonene": 0.00,
			 	"Linalool": 0.00,
			 	"Eucalyptol": 0.00,
			 	"Pinene": 0.00,
			 	"Terpineol": 0.00,
			 	"Terpineol-4": 0.00,
			 	"Cymene": 0.00,
			 	"Apigenin": 0.00,
			 	"Quercetin": 0.00,
			 	"Cannflavin A": 0.00,
			 	"Beta-sitosterol": 0.00,
			 	"CBC": 0.00,
			 	"CBL": 0.00
			 	, 
		 	 "conditions": ["Stress"],
			 "positiveEffects": [""],
			 "negativeEffects": [""],
			 "descriptionDetailed": "Detailed description here. Detailed description here.Detailed description here.Detailed description here. Detailed description here.",
			 "descriptionAbbrev":  "Short description here.",
			 "tags": ["Indica", "Diamond OG", "OG", "Stress"],
			 "imageUrl": "images/strains/acapulcoGold.jpg"
			},
			{"strainId": 178,
			 "strainName": "Grandaddy Purple",
			 "strainType": "Indica",
			 "components": [
			 	{ 
			 		"name": "THC9", 
			 		"value": 21.30
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 1.81
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
			 	} 	
		 	], "THC": 20.00,
			 	"CBD": 0.11,
			 	"CBN": 0.03,
			 	"CBG": 0.50,
			 	"THCV": 0.20,
			 	"THCA": 0.00,
			 	"THC8": 0.00,
			 	"Pulegone": 0.00,
			 	"Myrcene": 1.00,
			 	"Caryophyllene": 0.20,
			 	"Limonene": 0.12,
			 	"Linalool": 0.09,
			 	"Eucalyptol": 0.00,
			 	"Pinene": 0.30,
			 	"Terpineol": 0.00,
			 	"Terpineol-4": 0.00,
			 	"Cymene": 0.00,
			 	"Apigenin": 0.00,
			 	"Quercetin": 0.00,
			 	"Cannflavin A": 0.00,
			 	"Beta-sitosterol": 0.00,
			 	"CBC": 0.16,
			 	"CBL": 0.10
			 	, 
		 	 "conditions": ["Stress", "Pain", "Insomnia", "Depression"],
			 "positiveEffects": [""],
			 "negativeEffects": [""],
			 "descriptionDetailed": "Detailed description here. Detailed description here.Detailed description here.Detailed description here. Detailed description here.",
			 "descriptionAbbrev":  "Short description here.",
			 "tags": ["Indica", "Grandaddy Purple", "Purple", "Stress", "Pain", "Insomnia", "Depression"],
			 "imageUrl": "images/strains/acapulcoGold.jpg"
			},
			{"strainId": 179,
			 "strainName": "Fire OG",
			 "strainType": "Hybrid",
			 "components": [
			 	{ 
			 		"name": "THC9", 
			 		"value": 21.30
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 1.81
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
			 	} 	
		 	], "THC": 21.00,
			 	"CBD": 0.17,
			 	"CBN": 0.02,
			 	"CBG": 0.60,
			 	"THCV": 0.13,
			 	"THCA": 0.00,
			 	"THC8": 0.00,
			 	"Pulegone": 0.00,
			 	"Myrcene": 0.60,
			 	"Caryophyllene": 0.14,
			 	"Limonene": 0.20,
			 	"Linalool": 0.20,
			 	"Eucalyptol": 0.00,
			 	"Pinene": 0.14,
			 	"Terpineol": 0.00,
			 	"Terpineol-4": 0.00,
			 	"Cymene": 0.00,
			 	"Apigenin": 0.00,
			 	"Quercetin": 0.00,
			 	"Cannflavin A": 0.00,
			 	"Beta-sitosterol": 0.00,
			 	"CBC": 0.10,
			 	"CBL": 0.20
			 	, 
		 	 "conditions": ["Stress", "Depression", "Pain", "Insomnia", "Lack of Appetite"],
			 "positiveEffects": ["Happy", "Relaxed", "Euphoric", "Uplifted", "Creative"],
			 "negativeEffects": ["Dry Mouth", "Dry Eyes", "Paranoid", "Dizzy", "Headache"],
			 "descriptionDetailed": "Detailed description here. Detailed description here.Detailed description here.Detailed description here. Detailed description here.",
			 "descriptionAbbrev":  "Short description here.",
			 "tags": ["Hybrid", "Fire OG", "OG", "Stress", "Depression", "Pain", "Insomnia", "Lack of Appetite", "Happy", "Relaxed", "Euphoric", "Uplifted", "Creative"],
			 "imageUrl": "images/strains/acapulcoGold.jpg"
			}, 
			{"strainId": 180,
			 "strainName": "Girl Scout Cookies",
			 "strainType": "Hybrid",
			 "components": [
			 	{ 
			 		"name": "THC9", 
			 		"value": 21.30
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 1.81
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
			 	} 	
		 	], "THC": 22.00,
			 	"CBD": 0.12,
			 	"CBN": 0.03,
			 	"CBG": 1.30,
			 	"THCV": 0.20,
			 	"THCA": 0.00,
			 	"THC8": 0.00,
			 	"Pulegone": 0.00,
			 	"Myrcene": 0.20,
			 	"Caryophyllene": 0.40,
			 	"Limonene": 0.30,
			 	"Linalool": 0.20,
			 	"Eucalyptol": 0.00,
			 	"Pinene": 0.13,
			 	"Terpineol": 0.00,
			 	"Terpineol-4": 0.00,
			 	"Cymene": 0.00,
			 	"Apigenin": 0.00,
			 	"Quercetin": 0.00,
			 	"Cannflavin A": 0.00,
			 	"Beta-sitosterol": 0.00,
			 	"CBC": 0.30,
			 	"CBL": 0.13
			 	, 
		 	 "conditions": ["Stress", "Pain", "Depression", "Insomnia", "Lack of Appetite"],
			 "positiveEffects": ["Happy", "Euphoric", "Relaxed", "Uplifted", "Creative"],
			 "negativeEffects": ["Dry Mouth", "Dry Eyes", "Dizzy", "Paranoid",  "Headache"],
			 "descriptionDetailed": "Detailed description here. Detailed description here.Detailed description here.Detailed description here. Detailed description here.",
			 "descriptionAbbrev":  "Short description here.",
			 "tags": ["Hybrid", "Girl Scout Cookies", "Stress", "Pain", "Depression"],
			 "imageUrl": "images/strains/acapulcoGold.jpg"
			},
			{"strainId": 181,
			 "strainName": "Grape Ape",
			 "strainType": "Indica",
			 "components": [
			 	{ 
			 		"name": "THC9", 
			 		"value": 21.30
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 1.81
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
			 	} 	
		 	], "THC": 22.00,
			 	"CBD": 0.03,
			 	"CBN": 0.01,
			 	"CBG": 0.50,
			 	"THCV": 0.12,
			 	"THCA": 0.00,
			 	"THC8": 0.00,
			 	"Pulegone": 0.00,
			 	"Myrcene": 1.00,
			 	"Caryophyllene": 0.40,
			 	"Limonene": 0.06,
			 	"Linalool": 0.10,
			 	"Eucalyptol": 0.00,
			 	"Pinene": 0.20,
			 	"Terpineol": 0.00,
			 	"Terpineol-4": 0.00,
			 	"Cymene": 0.00,
			 	"Apigenin": 0.00,
			 	"Quercetin": 0.00,
			 	"Cannflavin A": 0.00,
			 	"Beta-sitosterol": 0.00,
			 	"CBC": 0.05,
			 	"CBL": 0.16
			 	, 
		 	 "conditions": ["Stress", "Pain", "Depression", "Insomnia", "Lack of Appetite"],
			 "positiveEffects": ["Relaxed", "Happy", "Sleepy", "Euphoric", "Hungry"],
			 "negativeEffects": ["Dry Mouth", "Dry Eyes", "Dizzy", "Paranoid",  "Headache"],
			 "descriptionDetailed": "Detailed description here. Detailed description here.Detailed description here.Detailed description here. Detailed description here.",
			 "descriptionAbbrev":  "Short description here.",
			 "tags": ["Indica", "Grape Ape", "Grape", "Pain", "Stress", "Insomnia", "Depression", "Nausea"],
			 "imageUrl": "images/strains/acapulcoGold.jpg"
			},
			{"strainId": 182,
			 "strainName": "Headband",
			 "strainType": "Hybrid",
			 "components": [
			 	{ 
			 		"name": "THC9", 
			 		"value": 21.30
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 1.81
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
			 	} 	
		 	], "THC": 22.00,
			 	"CBD": 0.03,
			 	"CBN": 0.01,
			 	"CBG": 0.50,
			 	"THCV": 0.12,
			 	"THCA": 0.00,
			 	"THC8": 0.00,
			 	"Pulegone": 0.00,
			 	"Myrcene": 1.00,
			 	"Caryophyllene": 0.40,
			 	"Limonene": 0.06,
			 	"Linalool": 0.10,
			 	"Eucalyptol": 0.00,
			 	"Pinene": 0.20,
			 	"Terpineol": 0.00,
			 	"Terpineol-4": 0.00,
			 	"Cymene": 0.00,
			 	"Apigenin": 0.00,
			 	"Quercetin": 0.00,
			 	"Cannflavin A": 0.00,
			 	"Beta-sitosterol": 0.00,
			 	"CBC": 0.05,
			 	"CBL": 0.16
			 	, 
		 	 "conditions": ["Stress", "Depression", "Pain", "Insomnia", "Headache"],
			 "positiveEffects": ["Happy", "Relaxed", "Euphoric", "Uplifted", "Creative"],
			 "negativeEffects": ["Dry Mouth", "Dry Eyes", "Dizzy",  "Headache",  "Paranoid"],
			 "descriptionDetailed": "Detailed description here. Detailed description here.Detailed description here.Detailed description here. Detailed description here.",
			 "descriptionAbbrev":  "Short description here.",
			 "tags": ["Hybrid", "Headband", "Stress", "Depression", "Pain", "Insomnia", "Headache", "Happy", "Relaxed", "Euphoric", "Uplifted", "Creative"],
			 "imageUrl": "images/strains/acapulcoGold.jpg"
			}, 
			{"strainId": 183,
			 "strainName": "Island Sweet Skunk",
			 "strainType": "Sativa",
			 "components": [
			 	{ 
			 		"name": "THC9", 
			 		"value": 21.30
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 1.81
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
			 	} 	
		 	], "THC": 18.00,
			 	"CBD": 0.05,
			 	"CBN": 0.01,
			 	"CBG": 0.70,
			 	"THCV": 0.15,
			 	"THCA": 0.00,
			 	"THC8": 0.00,
			 	"Pulegone": 0.00,
			 	"Myrcene": 0.60,
			 	"Caryophyllene": 0.16,
			 	"Limonene": 0.30,
			 	"Linalool": 0.03,
			 	"Eucalyptol": 0.00,
			 	"Pinene": 0.50,
			 	"Terpineol": 0.00,
			 	"Terpineol-4": 0.00,
			 	"Cymene": 0.00,
			 	"Apigenin": 0.00,
			 	"Quercetin": 0.00,
			 	"Cannflavin A": 0.00,
			 	"Beta-sitosterol": 0.00,
			 	"CBC": 0.04,
			 	"CBL": 0.12
			 	, 
		 	 "conditions": ["Pain", "Stress", "Depression", "Fatigue", "Nausea"],
			 "positiveEffects": ["Happy", "Uplifted", "Euphoric", "Energetic", "Creative"],
			 "negativeEffects": ["Dry Mouth", "Dry Eyes", "Paranoid", "Dizzy",  "Headache"],
			 "descriptionDetailed": "Detailed description here. Detailed description here.Detailed description here.Detailed description here. Detailed description here.",
			 "descriptionAbbrev":  "Short description here.",
			 "tags": ["Sativa", "Island Sweet Skunk", "Skunk", "Pain", "Stress", "Depression", "Fatigue", "Nausea", "Happy", "Uplifted", "Euphoric", "Energetic", "Creative"],
			 "imageUrl": "images/strains/acapulcoGold.jpg"
			},
			{"strainId": 184,
			 "strainName": "L.A. Kush",
			 "strainType": "Hybrid",
			 "components": [
			 	{ 
			 		"name": "THC9", 
			 		"value": 21.30
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 1.81
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
			 	} 	
		 	], "THC": 21.00,
			 	"CBD": 0.04,
			 	"CBN": 0.00,
			 	"CBG": 0.80,
			 	"THCV": 0.15,
			 	"THCA": 0.00,
			 	"THC8": 0.00,
			 	"Pulegone": 0.00,
			 	"Myrcene": 0.30,
			 	"Caryophyllene": 0.20,
			 	"Limonene": 0.16,
			 	"Linalool": 0.10,
			 	"Eucalyptol": 0.00,
			 	"Pinene": 0.04,
			 	"Terpineol": 0.00,
			 	"Terpineol-4": 0.00,
			 	"Cymene": 0.00,
			 	"Apigenin": 0.00,
			 	"Quercetin": 0.00,
			 	"Cannflavin A": 0.00,
			 	"Beta-sitosterol": 0.00,
			 	"CBC": 0.00,
			 	"CBL": 0.16
			 	, 
		 	 "conditions": ["Stress", "Fatigue", "Insomnia", "Lack Of Appetite", "Pain"],
			 "positiveEffects": ["Happy", "Relaxed", "Euphoric", "Creative", "Uplifted"],
			 "negativeEffects": ["Anxious", "Dry Mouth"],
			 "descriptionDetailed": "Detailed description here. Detailed description here.Detailed description here.Detailed description here. Detailed description here.",
			 "descriptionAbbrev":  "Short description here.",
			 "tags": ["Hybrid", "L.A. Kush", "Kush", "Stress", "Fatigue", "Insomnia", "Lack Of Appetite", "Pain", "Happy", "Relaxed", "Euphoric", "Creative", "Uplifted"],
			 "imageUrl": "images/strains/acapulcoGold.jpg"
			}
		]
		
		var conditions = [
			{"conditionId": 1,
			 "conditionName": "Insomnia", 
			 "treatment": "Insomnia Treatment description here.",
			 "strains": ["Trainwreck", "White Widow", "Sage", "Skywalker OG", "Permafrost", "Querkle", "Papaya", "Pennywise", "OG #18", "OG Kush", "Canna-Tsu", "Nebula"],
			 "descriptionDetailed": "When you're having trouble sleeping on a regular basis the condition is referred to as insomnia. If it continues for a period of time the lack of REM sleep will cause problems with memory and the ability to focus. Both physical and emotional stress also accompanies prplonged sleep depravation.",
			 "descriptionAbbrev":  "Insomnia patients have trouble falling asleep at night.",
			 "tags": ["Insomnia","Sleep","Indica", "Sedative", "Trainwreck", "White Widow", "Sage", "Skywalker OG", "Permafrost", "Querkle", "Papaya", "Pennywise", "OG #18", "OG Kush", "Canna-Tsu", "Nebula"],
			 "imageUrl": "images/strains/acapulcoGold.jpg"
			},
			{"conditionId": 2,
			 "conditionName": "Arthritis", 
			 "treatment": "Arthritis Treatment description here.",
			 "strains": ["White Walker OG", "White Fire OG", "Super Lemno Haze", "Super Grandaddy", "Sugar Plum", "Sour Tsunami", "Silver Surfer", "Pennywise", "Pineapple", "Pineapple Hogsbreath", "Private Reserve", "Purple Haze", "Purple Kush", "Purple Urkle", "Querkle", "Ramona OG", "Sherbet Cookies", "Lemon Haze", "Lemon Larry OG", "Lemon OG Kush", "Lulu", "Mad Max", "May Weather Kush", "Neptune OG", "Northern Lights", "OG Cheese", "Ogre", "Diablo", "El Alquimista", "Fire Bomb", "God's Gift", "Gorilla Glue #4", "Grape Kool Aid", "Green Thailand", "Harle-Tsu", "Harlequin", "Jack Frost", "Black Cherry Soda", "Blackwater", "Brutus OG", "Bullrider", "Canna-Tsu", "Cannatonic", "Charlotte's Web", "Chemdawg", "Cinderella 99", "Confidential Cheese"],
			 "descriptionDetailed": "Arthritis Detailed description here. Detailed description here.Detailed description here.Detailed description here. Detailed description here.",
			 "descriptionAbbrev":  "Arthritis Short description here.",
			 "tags": ["Arthritis","Pain","Indica", "White Walker OG", "White Fire OG", "Super Lemno Haze", "Super Grandaddy", "Sugar Plum", "Sour Tsunami", "Silver Surfer", "Pennywise", "Pineapple", "Pineapple Hogsbreath", "Private Reserve", "Purple Haze", "Purple Kush", "Purple Urkle", "Querkle", "Ramona OG", "Sherbet Cookies", "Lemon Haze", "Lemon Larry OG", "Lemon OG Kush", "Lulu", "Mad Max", "May Weather Kush", "Neptune OG", "Northern Lights", "OG Cheese", "Ogre", "Diablo", "El Alquimista", "Fire Bomb", "God's Gift", "Gorilla Glue #4", "Grape Kool Aid", "Green Thailand", "Harle-Tsu", "Harlequin", "Jack Frost", "Black Cherry Soda", "Blackwater", "Brutus OG", "Bullrider", "Canna-Tsu", "Cannatonic", "Charlotte's Web", "Chemdawg", "Cinderella 99", "Confidential Cheese"],
			 "imageUrl": "images/strains/acapulcoGold.jpg"
			},
			{"conditionId": 3,
			 "conditionName": "Anxiety", 
			 "treatment": "Anxiety Treatment description here.",
			 "strains": ["XJ-13", "Yumbodlt", "Vortex", "Warlock", "Strawberry Cough", "Trainwreck", "Stardawg", "Strawberry", "Skywalker OG", "Sour Dielsel", "Shipwreck", "Skywalker", "Romulan", "Sage", "Purple Wreck", "Querkle", "Pennywise", "Permafrost", "Pineapple", "Papaya", "OGiesel", "Ogre", "OG #18", "OG Kush", "Nebula", "Nothern Lights", "Killing Fields", "LVPK", "God's Gift", "Grapefruit", "Double Purple Doja", "El-Jeffe", "Church OG", "Critical Mass", "Canna-Tsu", "Chiesel", "ACDC", "Blue Dream"],
			 "descriptionDetailed": "Anxiety Detailed description here. Detailed description here.Detailed description here.Detailed description here. Detailed description here.",
			 "descriptionAbbrev":  "Anxiety Short description here.",
			 "tags": ["Anxiety","Stress", "Relaxation", "XJ-13", "Yumbodlt", "Vortex", "Warlock", "Strawberry Cough", "Trainwreck", "Stardawg", "Strawberry", "Skywalker OG", "Sour Dielsel", "Shipwreck", "Skywalker", "Romulan", "Sage", "Purple Wreck", "Querkle", "Pennywise", "Permafrost", "Pineapple", "Papaya", "OGiesel", "Ogre", "OG #18", "OG Kush", "Nebula", "Nothern Lights", "Killing Fields", "LVPK", "God's Gift", "Grapefruit", "Double Purple Doja", "El-Jeffe", "Church OG", "Critical Mass", "Canna-Tsu", "Chiesel", "ACDC", "Blue Dream"],
			 "imageUrl": "images/strains/acapulcoGold.jpg"
			},
			{"conditionId": 4,
			 "conditionName": "Anorexia", 
			 "treatment": "Anorexia Treatment description here.",
			 "strains": ["Yumbodlt", "Zen", "Strawberry Cough", "Warlock", "Shipwreck", "Sour Diesel", "Pineapple", "Sage N Sour", "OG #18", "Ogre", "LVPK", "Mango", "Ice", "Jasmin", "Hashberry", "HOG", "Harle-Tsu", "Harlequin", "Edelweiss", "Goo", "Chiesel", "Critical Kush", "Cheese", "Chemo", "Bubba Kush", "Charlotte's Web", "Ak-48", "Amnesia"],
			 "descriptionDetailed": "Anorexia Detailed description here. Detailed description here.Detailed description here.Detailed description here. Detailed description here.",
			 "descriptionAbbrev":  "Anorexia Short description here.",
			 "tags": ["Anorexia","Appetite","Munchies", "Yumbodlt", "Zen", "Strawberry Cough", "Warlock", "Shipwreck", "Sour Diesel", "Pineapple", "Sage N Sour", "OG #18", "Ogre", "LVPK", "Mango", "Ice", "Jasmin", "Hashberry", "HOG", "Harle-Tsu", "Harlequin", "Edelweiss", "Goo", "Chiesel", "Critical Kush", "Cheese", "Chemo", "Bubba Kush", "Charlotte's Web", "Ak-48", "Amnesia"],
			 "imageUrl": "images/strains/acapulcoGold.jpg"
			},
			{"conditionId": 5,
			 "conditionName": "ADD/ADHD", 
			 "treatment": "ADD/ADHD Treatment description here.",
			 "strains": ["Zen", "White Widow", "XJ-13", "Vortex", "Warlock", "Strawberry Cough", "Trainwreck", "Sour Diesel", "Strawberry", "Skywalker", "Skywalker OG", "Sage N Sour", "Shipwreck", "Plushberry", "Querkle", "Pineapple", "OG Kush", "Permafrost", "Northern Lights #5", "OG #18", "Harle-Tsu", "Nebula", "Blue Dream", "Canna-Tsu", "El-Jeffe"],
			 "descriptionDetailed": "ADD/ADHD Detailed description here. Detailed description here.Detailed description here.Detailed description here. Detailed description here.",
			 "descriptionAbbrev":  "ADD/ADHD Short description here.",
			 "tags": ["ADD","ADHD","Relaxing", "Zen", "White Widow", "XJ-13", "Vortex", "Warlock", "Strawberry Cough", "Trainwreck", "Sour Diesel", "Strawberry", "Skywalker", "Skywalker OG", "Sage N Sour", "Shipwreck", "Plushberry", "Querkle", "Pineapple", "OG Kush", "Permafrost", "Northern Lights #5", "OG #18", "Harle-Tsu", "Nebula", "Blue Dream", "Canna-Tsu", "El-Jeffe"],
			 "imageUrl": "images/strains/acapulcoGold.jpg"
			},
			{"conditionId": 6,
			 "conditionName": "Pain", 
			 "treatment": "Pain Treatment description here.",
			 "strains": ["Black Buddah", "Black Cherry Soda", "Berry Queen", "Berry White", "Banana Diesel", "Bay Cookies", "ATF", "Avi-Dekel", "Alien Rock Candy", "Amnesia Haze", "AK-48", "Alien OG", "Afgooey", "AK-47", "Afgani Bullrider", "Afgoo", "ACDC Super CBD Oil", "Afghani", "707 Headband", "Acapulco Gold"],
			 "descriptionDetailed": "Pain Detailed description here. Detailed description here.Detailed description here.Detailed description here. Detailed description here.",
			 "descriptionAbbrev":  "Pain Short description here.",
			 "tags": ["Pain","Black Buddah", "Black Cherry Soda", "Berry Queen", "Berry White", "Banana Diesel", "Bay Cookies", "ATF", "Avi-Dekel", "Alien Rock Candy", "Amnesia Haze", "AK-48", "Alien OG", "Afgooey", "AK-47", "Afgani Bullrider", "Afgoo", "ACDC Super CBD Oil", "Afghani", "707 Headband", "Acapulco Gold" ],
			 "imageUrl": "images/strains/acapulcoGold.jpg"
			},
			{"conditionId": 7,
			 "conditionName": "Nausea", 
			 "treatment": "Nausea Treatment description here.",
			 "strains": ["White Fire OG", "White Walker OG", "Sugar Plum", "Thin Mint", "Sour Dub", "Strawberry Mist", "Shark Shock", "Sour Bubble", "Querkle", "Raskal OG", "Purple Coma", "Puple Passion", "Moonshine Diesel", "Pineapple Hogsbreath", "Mango Maui", "Moon Candy", "Lavender", "Mafia OG", "Harlequin", "Herojuana", "Grape Kool Aid", "Green Thailand", "El Alquimista", "Grape Cookies", "Dubtech", "Eden OG", "Confidential Cheese", "DJ Shortberry", "Canna-Tsu", "Cherry Bomb", "Blue Dream", "Candy OG", "Berry Queen", "ACDC", "Bay Cookies"],
			 "descriptionDetailed": "Nausea Detailed description here. Detailed description here.Detailed description here.Detailed description here. Detailed description here.",
			 "descriptionAbbrev":  "Nausea Short description here.",
			 "tags": ["Nausea", "White Fire OG", "White Walker OG", "Sugar Plum", "Thin Mint", "Sour Dub", "Strawberry Mist", "Shark Shock", "Sour Bubble", "Querkle", "Raskal OG", "Purple Coma", "Puple Passion", "Moonshine Diesel", "Pineapple Hogsbreath", "Mango Maui", "Moon Candy", "Lavender", "Mafia OG", "Harlequin", "Herojuana", "Grape Kool Aid", "Green Thailand", "El Alquimista", "Grape Cookies", "Dubtech", "Eden OG", "Confidential Cheese", "DJ Shortberry", "Canna-Tsu", "Cherry Bomb", "Blue Dream", "Candy OG", "Berry Queen", "ACDC", "Bay Cookies"],
			 "imageUrl": "images/strains/acapulcoGold.jpg"
			},
			{"conditionId": 8,
			 "conditionName": "Migraines", 
			 "treatment": "Migraines Treatment description here.",
			 "strains": ["White Fire OG", "White Walker OG", "Super Lemon Haze", "The White", "Stratoshpere", "Sugar Plum", "Silverback Gorilla", "Sour Tsunami", "Regulator OG", "Sherbet Cookies", "Platinum Trinity Kush", "Purple Urkle", "Phantom OG", "Pineapple Hogsbreath", "Northern Lights", "Pennywise", "May Weather Kush", "Moonshine Diesel", "Magic Jack", "Mango Maui", "Mad Max", "Mafia OG", "Lemon OG Kush", "Lulu", "Lemon Head OG", "Lemon Jack", "Jupiter Kush", "L.A. Confidential", "Hog", "Jack Chemdawg", "Jupiter Kush", "Harle-Tsu", "Hawaiian Hulk", "Green Thailand", "H-Trainwreck", "Grape Kool Aid", "Grapefruit Haze", "Gooey Wreck", "Grape Cookies", "Forum Cookies/GSC", "Ghost OG", "Eden OG", "Fire Bomb", "Diablo", "Dubtech", "Clear Lake", "Deadhead OG", "Canelope Haze", "Chocloate Thai", "Blue Dream", "Candyland", "Black Magic Kush", "Alien OG", "Banana Diesel", "Afghani", "Afgooey"],
			 "descriptionDetailed": "Migraines Detailed description here. Detailed description here.Detailed description here.Detailed description here. Detailed description here.",
			 "descriptionAbbrev":  "Migraines Short description here.",
			 "tags": ["Migraines", "Headache", "White Fire OG", "White Walker OG", "Super Lemon Haze", "The White", "Stratoshpere", "Sugar Plum", "Silverback Gorilla", "Sour Tsunami", "Regulator OG", "Sherbet Cookies", "Platinum Trinity Kush", "Purple Urkle", "Phantom OG", "Pineapple Hogsbreath", "Northern Lights", "Pennywise", "May Weather Kush", "Moonshine Diesel", "Magic Jack", "Mango Maui", "Mad Max", "Mafia OG", "Lemon OG Kush", "Lulu", "Lemon Head OG", "Lemon Jack", "Jupiter Kush", "L.A. Confidential", "Hog", "Jack Chemdawg", "Jupiter Kush", "Harle-Tsu", "Hawaiian Hulk", "Green Thailand", "H-Trainwreck", "Grape Kool Aid", "Grapefruit Haze", "Gooey Wreck", "Grape Cookies", "Forum Cookies/GSC", "Ghost OG", "Eden OG", "Fire Bomb", "Diablo", "Dubtech", "Clear Lake", "Deadhead OG", "Canelope Haze", "Chocloate Thai", "Blue Dream", "Candyland", "Black Magic Kush", "Alien OG", "Banana Diesel", "Afghani", "Afgooey"],
			 "imageUrl": "images/strains/acapulcoGold.jpg"
			},
			{"conditionId": 9,
			 "conditionName": "Hypertension", 
			 "treatment": "Hypertension Treatment description here.",
			 "strains": ["Saturn OG", "Super Grandaddy", "Pennywise", "Phantom OG", "Mike Tyson", "OG Cheese", "Lulu", "Mercury OG", "ACDC", "Gooey Wreck"],
			 "descriptionDetailed": "Hypertension Detailed description here. Detailed description here.Detailed description here.Detailed description here. Detailed description here.",
			 "descriptionAbbrev":  "Hypertension Short description here.",
			 "tags": ["Hypertension", "Saturn OG", "Super Grandaddy", "Pennywise", "Phantom OG", "Mike Tyson", "OG Cheese", "Lulu", "Mercury OG", "ACDC", "Gooey Wreck"],
			 "imageUrl": "images/strains/acapulcoGold.jpg"
			},
			{"conditionId": 10,
			 "conditionName": "HIV/AIDS", 
			 "treatment": "HIV/AIDS Treatment description here.",
			 "strains": ["ACDC"],
			 "descriptionDetailed": "HIV/AIDS Detailed description here. Detailed description here.Detailed description here.Detailed description here. Detailed description here.",
			 "descriptionAbbrev":  "HIV/AIDS Short description here.",
			 "tags": ["HIV", "AIDS", "ACDC"],
			 "imageUrl": "images/strains/acapulcoGold.jpg"
			},
			{"conditionId": 11,
			 "conditionName": "Glaucoma", 
			 "treatment": "Glaucoma Treatment description here.",
			 "strains": ["Silver Surfer", "Sugar Plum", "Mafia OG", "Grape Cookies", "Green Thailand", "ACDC", "Gooey Wreck"],
			 "descriptionDetailed": "Glaucoma Detailed description here. Detailed description here.Detailed description here.Detailed description here. Detailed description here.",
			 "descriptionAbbrev":  "Glaucoma Short description here.",
			 "tags": ["Glaucoma", "Silver Surfer", "Sugar Plum", "Mafia OG", "Grape Cookies", "Green Thailand", "ACDC", "Gooey Wreck" ],
			 "imageUrl": "images/strains/acapulcoGold.jpg"
			},
			{"conditionId": 12,
			 "conditionName": "Epilepsy", 
			 "treatment": "Epilepsy Treatment description here.",
			 "strains": ["Sour Tsunami", "Valentine X", "Sour OG", "Lemon Larry OG", "Mars OG", "Harlequin", "Jupiter Kush", "G13 Haze", "Harle-Tsu", "Cannatonic", "Charlotte's Web", "Cannatonic #4", "Canna-Tsu", "Banana Diesel", "Bull Rider", "ACDC Super CBD Oil", "Avi-Dekel"],
			 "descriptionDetailed": "Epilepsy Detailed description here. Detailed description here.Detailed description here.Detailed description here. Detailed description here.",
			 "descriptionAbbrev":  "Epilepsy Short description here.",
			 "tags": ["Epilepsy", "Sour Tsunami", "Valentine X", "Sour OG", "Lemon Larry OG", "Mars OG", "Harlequin", "Jupiter Kush", "G13 Haze", "Harle-Tsu", "Cannatonic", "Charlotte's Web", "Cannatonic #4", "Canna-Tsu", "Banana Diesel", "Bull Rider", "ACDC Super CBD Oil", "Avi-Dekel" ],
			 "imageUrl": "images/strains/acapulcoGold.jpg"
			},
			{"conditionId": 13,
			 "conditionName": "Depression", 
			 "treatment": "Depression Treatment description here.",
			 "strains": ["WiFi OG", "Willy's Wonder", "XJ-13", "White Walker OG", "White Widow", "White Fire OG", "White Skunk", "Tropical OG", "True OG", "Trainwreck", "Trinity OG", "The Flav", "Thin Mint", "Tahoe OG", "Tangilope", "Super Silver Haze", "Superman OG", "Super Grandaddy", "Super Lemon Haze", "Sugar Plum", "Sour OG", "Stratosphere", "Strawberry Mist", "Sour Cherry", "Sour Diesel", "Skywalker", "Snowcap", "Sherbet Cookies", "Skunk #1", "SFV OG", "Shark Shock", "Raskal OG", "Regulator OG", "Querkle", "Ramona OG", "Purple Nepal", "Purple Passion", "Purple Haze", "Purple Kush", "Private Reserve OG", "Purple Cheese", "Pineapple Thai", "Platnum Trinity Kush", "Pineapple Express", "Pineapple Hogsbreath", "Phantom OG", "Pineapple", "Paris OG", "Pennywise", "OG Cheese", "Organic OG", "Northern Lights", "NY Sour Diesel", "Moonshine Diesel", "Mr. Nice", "Mike Tyson", "Moon Candy", "May Weather Kush", "Mercury OG", "Master Bubba", "Magic Jack", "Mango Maui", "Lulu", "Mad Max", "Lemon Kush", "Lemon Larry OG", "Lemon Head OG", "Lemon Jack", "Lemon Diesel", "Lemon Haze", "Larry OG", "Kosher Kush", "Lamb's Bread", "Jupiter Kush", "Kali Mist", "Jack Herer", "Jillybean", "Jack Chemdawg", "Jack Frost", "Headband", "J1", "Harle-Tsu", "Hawaiian Hulk", "Green Thailand", "H-Train Wreck", "Green Cross", "Green Dream", "Great White Shark", "Green Crack", "Grape Kool Aid", "Grapefruit Haze", "Gorilla Glue #4", "Grape Cookies", "Gooey Wreck", "Gorilla Glue", "Girl Scout Cookies", "God's Gift", "G13 Haze", "Ghost OG", "Fire OG", "Forum Cookies/GSC", "Euphoria", "Fire Bomb", "Eden OG", "El Alquimista", "Euphoria", "Dubtech", "Dutch Passion", "Deadhead OG", "Diamond OG", "Cinderella 99", "Confidential Cheese", "Cherry Pie", "Chocolate Thai", "Cataract Kush", "Chemdawg", "Cannalope Haze", "Cannatonic", "Candy OG", "Candyland", "Cannatonic #4", "Blue Moonshine", "Blueberry Trainwreck", "Blue Dream", "Berry White", "Black Cherry Soda", "Bay Cookies", "Berry Queen", "Amnesia Haze", "ATF", "Alien OG", "Alien Rock Candy", "ACDC", "AK-48", "707 Headband", "Acapulco Gold"],
			 "descriptionDetailed": "Depression Detailed description here. Detailed description here.Detailed description here.Detailed description here. Detailed description here.",
			 "descriptionAbbrev":  "Depression Short description here.",
			 "tags": ["Depression", "WiFi OG", "Willy's Wonder", "XJ-13", "White Walker OG", "White Widow", "White Fire OG", "White Skunk", "Tropical OG", "True OG", "Trainwreck", "Trinity OG", "The Flav", "Thin Mint", "Tahoe OG", "Tangilope", "Super Silver Haze", "Superman OG", "Super Grandaddy", "Super Lemon Haze", "Sugar Plum", "Sour OG", "Stratosphere", "Strawberry Mist", "Sour Cherry", "Sour Diesel", "Skywalker", "Snowcap", "Sherbet Cookies", "Skunk #1", "SFV OG", "Shark Shock", "Raskal OG", "Regulator OG", "Querkle", "Ramona OG", "Purple Nepal", "Purple Passion", "Purple Haze", "Purple Kush", "Private Reserve OG", "Purple Cheese", "Pineapple Thai", "Platnum Trinity Kush", "Pineapple Express", "Pineapple Hogsbreath", "Phantom OG", "Pineapple", "Paris OG", "Pennywise", "OG Cheese", "Organic OG", "Northern Lights", "NY Sour Diesel", "Moonshine Diesel", "Mr. Nice", "Mike Tyson", "Moon Candy", "May Weather Kush", "Mercury OG", "Master Bubba", "Magic Jack", "Mango Maui", "Lulu", "Mad Max", "Lemon Kush", "Lemon Larry OG", "Lemon Head OG", "Lemon Jack", "Lemon Diesel", "Lemon Haze", "Larry OG", "Kosher Kush", "Lamb's Bread", "Jupiter Kush", "Kali Mist", "Jack Herer", "Jillybean", "Jack Chemdawg", "Jack Frost", "Headband", "J1", "Harle-Tsu", "Hawaiian Hulk", "Green Thailand", "H-Train Wreck", "Green Cross", "Green Dream", "Great White Shark", "Green Crack", "Grape Kool Aid", "Grapefruit Haze", "Gorilla Glue #4", "Grape Cookies", "Gooey Wreck", "Gorilla Glue", "Girl Scout Cookies", "God's Gift", "G13 Haze", "Ghost OG", "Fire OG", "Forum Cookies/GSC", "Euphoria", "Fire Bomb", "Eden OG", "El Alquimista", "Euphoria", "Dubtech", "Dutch Passion", "Deadhead OG", "Diamond OG", "Cinderella 99", "Confidential Cheese", "Cherry Pie", "Chocolate Thai", "Cataract Kush", "Chemdawg", "Cannalope Haze", "Cannatonic", "Candy OG", "Candyland", "Cannatonic #4", "Blue Moonshine", "Blueberry Trainwreck", "Blue Dream", "Berry White", "Black Cherry Soda", "Bay Cookies", "Berry Queen", "Amnesia Haze", "ATF", "Alien OG", "Alien Rock Candy", "ACDC", "AK-48", "707 Headband", "Acapulco Gold"],
			 "imageUrl": "images/strains/acapulcoGold.jpg"
			},
			{"conditionId": 14,
			 "conditionName": "Cancer", 
			 "treatment": "Cancer Treatment description here.",
			 "strains": ["White Fire Alien OG", "Yoda OG", "The White", "Valenine X", "Pineapple Thai", "Sour Tsunami", "Lemon Larry OG", "Master Bubba", "King's Kush", "Kosher Kush", "Harlequin", "Hog", "Great White Shark", "Harle-Tsu", "Charlotte's Web", "G13 Haze", "Canna-Tsu", "Cannatonic", "Avi-Dekel", "Bull Rider", "ACDC Super CBD Oil", "Afghani"],
			 "descriptionDetailed": "Cancer Detailed description here. Detailed description here.Detailed description here.Detailed description here. Detailed description here.",
			 "descriptionAbbrev":  "Cancer Short description here.",
			 "tags": ["Cancer", "White Fire Alien OG", "Yoda OG", "The White", "Valenine X", "Pineapple Thai", "Sour Tsunami", "Lemon Larry OG", "Master Bubba", "King's Kush", "Kosher Kush", "Harlequin", "Hog", "Great White Shark", "Harle-Tsu", "Charlotte's Web", "G13 Haze", "Canna-Tsu", "Cannatonic", "Avi-Dekel", "Bull Rider", "ACDC Super CBD Oil", "Afghani"],
			 "imageUrl": "images/strains/acapulcoGold.jpg"
			},
			{"conditionId": 15,
			 "conditionName": "Bipolar Disorder", 
			 "treatment": "Bipolar Treatment description here.",
		 	 "strains": ["Trainwreck", "Tropical OG", "Tangilope", "Thin Mint", "Super Grandaddy", "Tangerine", "Sour Cherry", "Stratosphere", "Saturn OG", "Sherbet Cookies", "Regulator OG", "Purple Urkle", "Raskal OG", "Private Reserve OG", "Purple Haze", "Platnum Trinity Kush", "Northern Lights", "Pineapple Express", "Moon Candy", "Moonshine Diesel", "Magic Jack", "Mike Tyson", "Lemon Head OG", "Lulu", "Lamb's Bread", "Lemon Haze", "Jack Herer", "Jillybean", "Hawaiian Hulk", "Jack Chemdawg", "Green Thailand", "H-Train Wreck", "Green Crack", "Green Dream", "Gooey Wreck", "Grapefruit Haze", "Fire Bomb", "Forum Cookies/GSC", "Eden OG", "Euphoria", "Diablo", "Dutch Passion", "Confidential Cheese", "Deadhead OG", "Candy OG", "Chem Valley Kush", "ACDC", "Banana Diesel"],
			 "descriptionDetailed": "Bipolar Detailed description here. Detailed description here.Detailed description here.Detailed description here. Detailed description here.",
			 "descriptionAbbrev":  "Bipolar Short description here.",
			 "tags": ["Bipolar", "Disorder", "Trainwreck", "Tropical OG", "Tangilope", "Thin Mint", "Super Grandaddy", "Tangerine", "Sour Cherry", "Stratosphere", "Saturn OG", "Sherbet Cookies", "Regulator OG", "Purple Urkle", "Raskal OG", "Private Reserve OG", "Purple Haze", "Platnum Trinity Kush", "Northern Lights", "Pineapple Express", "Moon Candy", "Moonshine Diesel", "Magic Jack", "Mike Tyson", "Lemon Head OG", "Lulu", "Lamb's Bread", "Lemon Haze", "Jack Herer", "Jillybean", "Hawaiian Hulk", "Jack Chemdawg", "Green Thailand", "H-Train Wreck", "Green Crack", "Green Dream", "Gooey Wreck", "Grapefruit Haze", "Fire Bomb", "Forum Cookies/GSC", "Eden OG", "Euphoria", "Diablo", "Dutch Passion", "Confidential Cheese", "Deadhead OG", "Candy OG", "Chem Valley Kush", "ACDC", "Banana Diesel"],
			 "imageUrl": "images/strains/acapulcoGold.jpg"
			},
			{"conditionId": 16,
			 "conditionName": "Asthma", 
			 "treatment": "Asthma Treatment description here.",
			 "strains": ["Superman OG", "Thin Mint", "Purple Cheese", "Shark Shock", " NY Sour Diesel", "Lemon Haze", "Lemon Head OG", "Green Dream", "Harle-Tsu", "Jack Frost", "Clear Lake", "Euphoria"],
			 "descriptionDetailed": "Asthma Detailed description here. Detailed description here.Detailed description here.Detailed description here. Detailed description here.",
			 "descriptionAbbrev":  "Asthma Short description here.",
			 "tags": ["Asthma", "Bronchodilator", "Breathing", "Superman OG", "Thin Mint", "Purple Cheese", "Shark Shock", " NY Sour Diesel", "Lemon Haze", "Lemon Head OG", "Green Dream", "Harle-Tsu", "Jack Frost", "Clear Lake", "Euphoria"],
			 "imageUrl": "images/strains/acapulcoGold.jpg"
			},
			{"conditionId": 17,
			 "conditionName": "PTSD", 
			 "treatment": "PTSD Treatment description here.",
			 "strains": ["Trainwreck"],
			 "descriptionDetailed": "Researchers think marijuana pharmaceuticals might bring PTSD patients relief from their memories.",
			 "descriptionAbbrev":  "Relieve PTSD",
			 "tags": ["Trainwreck", "PTSD", "Snxiety", "Depression"],
			 "imageUrl": "images/strains/acapulcoGold.jpg"
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
		"tasteName": "Beta-myrcene",
		"tasteDescription": "None"
	},
	{
		"tasteId": 11,
		"tasteName": "Beta-caryophyllene",
		"tasteDescription": "None"
	},
	{
		"tasteId": 12,
		"tasteName": "d-limonene",
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
		"tasteName": "quercetin",
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
			 "imageUrl": "images/strains/acapulcoGold.jpg"
			},
			{"productId": 2,
			 "productName": "THC9", //compName
			 "Property": ["Euphoriant", "Analgesic", "Antiinflammatory", "Antioxidant", "Antiemetic", "Neuroprotective", "Reduces Neuroinflammation", "Neurogenesis"],
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
			 "Property": ["Anxiolytic", "Analgesic", "Antipsychotic", "Antiinflammatory", "Antioxidant", "Antispasmodic", "Antiepileptic"],
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
			 "Property": ["Antiinflammatory", "Antibiotic", "Antifungal"],
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
			 "descriptionDetailed": "Beta-Myrcene is found fresh mango fruit, hops, bay leaves, eucalyptus, lemongrass and many other plants. Beta-Myrcene is known to be anti-tumor, anti-inflammatory, and used in the treatment of spasms. It is also used to treat insomnia, and pain. High Beta-Myrcene levels in cannabis result in the well known couch lock effect of classic Indica strains of cannabis.",
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
			 "descriptionDetailed": "At low exposure levels, alpha-Pinene is a bronchodilator in humans. It is found in the oils of many species of many coniferous trees, notably the pine. It is also found in the essential oil of rosemary",
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
			 "descriptionAbbrev":  "Prevent nerve damage",
			 "tags": ["Neuroprotective", "nerves"],
			 "imageUrl": "images/strains/acapulcoGold.jpg"
			},
			{"effectId": 2,
			 "effectName": "Antispasmodic", //compName
			 "conditionsTreated": ["Epilepsy", "Spasms"],
 			 "descriptionDetailed": "Medical cannabis strains high in CBD have been shown to relieve spasms and convulsions associated with Epilepsy and other nerve related conditions.",
			 "descriptionAbbrev":  "Relieve spasms",
			 "tags": ["Antispasmodic", "spasms", "convulsions"],
			 "imageUrl": "images/strains/acapulcoGold.jpg"
			},
			{"effectId": 3,
			 "effectName": "Antiemetic", //compName
			 "conditionsTreated": ["Cancer treament", "Nausea"],
 			 "descriptionDetailed": "Reduces vomiting and nausea",
			 "descriptionAbbrev":  "Anti-nausea",
			 "tags": ["Antiemetic", "vomiting", "nausea"],
			 "imageUrl": "images/strains/acapulcoGold.jpg"
			},
			{"effectId": 4,
			 "effectName": "Analgesic", //compName
			 "conditionsTreated": ["Pain", "Chronic Pain"],
 			 "descriptionDetailed": "An analgesic, or painkiller, is any member of the group of drugs used to achieve analgesia — relief from pain.",
			 "descriptionAbbrev":  "Reduce pain",
			 "tags": ["Analgesic", "pain", "painkiller" ],
			 "imageUrl": "images/strains/acapulcoGold.jpg"
			},
			{"effectId": 5,
			 "effectName": "Antioxidant", //compName
			 "conditionsTreated": ["Stroke", "Coronary Heart Disease", "ALS", "Parkinsons", "Alzheimers", "Huntingtons", "Cancer", "Altitude Sickness"],
 			 "descriptionDetailed": "Antioxidants are widely used in dietary supplements and have been investigated for the prevention of diseases such as cancer, coronary heart disease and even altitude sickness among others.",
			 "descriptionAbbrev":  "Fight free radicals",
			 "tags": ["Antioxidant"],
			 "imageUrl": "images/strains/acapulcoGold.jpg"
			},
			{"effectId": 6,
			 "effectName": "Neuropathic Analgesic", //compName
			 "conditionsTreated": ["Chronic Back Pain", "Spinal Injuries"],
 			 "descriptionDetailed": "Reduces pain associated with nerve damage including spinal injuries",
			 "descriptionAbbrev":  "Reduce nerve pain", 
			 "tags": ["nerve damage", "Neuropathic analgesic", "Neuropathic", "Analgesic"],
			 "imageUrl": "images/strains/acapulcoGold.jpg"
			},
			{"effectId": 7,
			 "effectName": "Treats IBS", //compName
			 "conditionsTreated": ["IBS"],
 			 "descriptionDetailed": "Irritable bowel syndrome commonly causes cramping, abdominal pain, bloating, gas, diarrhea and constipation. IBS is a chronic condition that you will need to manage long term.",
			 "descriptionAbbrev":  "Treat IBS",
			 "tags": ["Antineoplastic", "Glaucoma"],
			 "imageUrl": "images/strains/acapulcoGold.jpg"
			},
			{"effectId": 8,
			 "effectName": "Antiinflammatory", //compName
			 "conditionsTreated": ["Inflammation", "Chronic Inflammation Syndrome"],
 			 "descriptionDetailed": "Reducing inflammation can result in prevention of various conditions including heart disease and type II diabetes and stroke",
			 "descriptionAbbrev":  "Reduce inflammation",
			 "tags": [""],
			 "imageUrl": "images/strains/acapulcoGold.jpg"
			},
			{"effectId": 9,
			 "effectName": "Neurogenesis", //compName
			 "conditionsTreated": ["Chronic Depression", "ADHD"],
 			 "descriptionDetailed": "Neurogenesis is the process by which neurons are generated from neural stem cells and progenitor cells. Recent studies suggest that stress-induced atrophy and loss of hippocampal neurons may contribute to the pathophysiology of depression.",
			 "descriptionAbbrev":  "Grow new nerves",
			 "tags": ["Neurogenesis", "nerve tissue growth", "Chronic Depression", "ADHD"],
			 "imageUrl": "images/strains/acapulcoGold.jpg"
			},
			{"effectId": 10,
			 "effectName": "Anxiolytic", //compName
			 "conditionsTreated": ["Anxiety", "Bipolar", "Social Anxiety", "Separation Anxiety"],
 			 "descriptionDetailed": "Anxiolytic medications have been used for the treatment of anxiety and its related psychological and physical symptoms. Anxiolytics have been shown to be useful in the treatment of anxiety disorders.",
			 "descriptionAbbrev":  "Reduce anxiety",
			 "tags": ["Anxiolytic", "Anxiety", "Tranquilizer", "Bipolar", "Social Anxiety", "Separation Anxiety"],
			 "imageUrl": "images/strains/acapulcoGold.jpg"
			},
			{"effectId": 11,
			 "effectName": "Antiepileptic", //compName
			 "conditionsTreated": ["Epilepsy", "Seizures", "Convulsions"],
 			 "descriptionDetailed": "Anti-epileptic drugs or AEDs are the main form of treatment for people with epilepsy. Certain compnonents in medical cannabis are being used as an effectve treatment for some forms of Epilepsy based on the relative strengths of components such as CBD and THC-A.",
			 "descriptionAbbrev":  "Anti-seizure",
			 "tags": ["Antiepileptic", "Seizures", "Convulsions"],
			 "imageUrl": "images/strains/acapulcoGold.jpg"
			},
			{"effectId": 12,
			 "effectName": "Vasorelaxant", //compName
			 "conditionsTreated": ["High Blood Pressure", "Hypertension"],
 			 "descriptionDetailed": "Reduces tension in blood vessel walls resultig in lower blood pressure and enhanced bloodflow in arteries, capillaries and blood vessels.",
			 "descriptionAbbrev":  "Lower Blood Pressure",
			 "tags": ["Vasorelaxant", "blood vessel", "High Blood Pressure", "Hypertension"],
			 "imageUrl": "images/strains/acapulcoGold.jpg"
			},
			{"effectId": 13,
			 "effectName": "Anti-ischemic", //compName
			 "conditionsTreated": ["Coronary Heart disease"],
 			 "descriptionDetailed": "Reduces risk of artery blockage whcih could help prevent the conditions leading to coronary artery disease.",
			 "descriptionAbbrev":  "Prevent blocked arteries",
			 "tags": ["Anti-ischemic", "artery blockage", "coronary", "heart", "Coronary artery disease"],
			 "imageUrl": "images/strains/acapulcoGold.jpg"
			},
			{"effectId": 14,
			 "effectName": "Antibacterial", //compName
			 "conditionsTreated": [""],
 			 "descriptionDetailed": "Kills surface bacteria. Destroys bacteria or suppresses their growth or their ability to reproduce.",
			 "descriptionAbbrev":  "Kill bacteria",
			 "tags": ["Antibacterial", "Bacteria", "Antibacterial"],
			 "imageUrl": "images/strains/acapulcoGold.jpg"
			},
			{"effectId": 15,
			 "effectName": "Antidiabetic", //compName
			 "conditionsTreated": ["Diabetes", "Type II Diabetes", "Pre-Diabetes"],
 			 "descriptionDetailed": "Helps reduce blood sugar levels.",
			 "descriptionAbbrev":  "Lower blood sugar",
			 "tags": ["Antidiabetic", "blood sugar", "diabetes"],
			 "imageUrl": "images/strains/acapulcoGold.jpg"
			},
			{"effectId": 16,
			 "effectName": "Antipsoriatic", //compName
			 "conditionsTreated": ["Psoriasis"],
 			 "descriptionDetailed": "Helps relieve the symptoms of psoriasis.",
			 "descriptionAbbrev":  "Treat psoriasis",
			 "tags": ["Antipsoriatic", "psoriasis"],
			 "imageUrl": "images/strains/acapulcoGold.jpg"
			},
			{"effectId": 17,
			 "effectName": "Antipsychotic", //compName
			 "conditionsTreated": ["Ppsychosis"],
 			 "descriptionDetailed": "Helps reduce psychosis including delusions or hallucinations",
			 "descriptionAbbrev":  "Relieve psychosis",
			 "tags": ["Antipsychotic", "psychosis", "delusions", "hallucinations"],
			 "imageUrl": "images/strains/acapulcoGold.jpg"
			},
			{"effectId": 18,
			 "effectName": "Bone-stimulant", //compName
			 "conditionsTreated": ["Ostiopererosis"],
 			 "descriptionDetailed": "promotes bone growth",
			 "descriptionAbbrev":  "Strengthen bone cells",
			 "tags": ["Bone-stimulant", "Bones", "Ostiopererosis"],
			 "imageUrl": "images/strains/acapulcoGold.jpg"
			},
			{"effectId": 19,
			 "effectName": "Intestinal anti-prokinetic", //compName
			 "conditionsTreated": ["GI Motility Disorders"],
 			 "descriptionDetailed": "reduces contractions in the small intestine",
			 "descriptionAbbrev":  "Relieve intestinal contractions",
			 "tags": ["Intestinal anti-prokinetic", "contractions", "Intestinal"],
			 "imageUrl": "images/strains/acapulcoGold.jpg"
			},
			{"effectId": 20,
			 "effectName": "Immunosuppressant", //compName
			 "conditionsTreated": ["psoriasis", "rheumatoid arthritis", "crohns disease", "cancer"],
 			 "descriptionDetailed": "Immunosuppressants are used to prevent rejection of a transplanted organ and to treat autoimmune diseases such as psoriasis, rheumatoid arthritis, and Crohn's disease. Some treatments for cancer act as immunosuppressants.",
			 "descriptionAbbrev":  "Suppress immune system",
			 "tags": ["Immunosuppressant", "immune system"],
			 "imageUrl": "images/strains/acapulcoGold.jpg"
			}, 
			{"effectId": 21,
			 "effectName": "Antiproliferative", //compName
			 "conditionsTreated": ["Cancer"],
 			 "descriptionDetailed": "Inhibits cancer cell growth",
			 "descriptionAbbrev":  "Slows cancer",
			 "tags": ["Antiproliferative", "cell growth", "cancer"],
			 "imageUrl": "images/strains/acapulcoGold.jpg"
			},
			{"effectId": 22,
			 "effectName": "Vasoconstriction", //compName
			 "conditionsTreated": ["Low Blood Pressure", "Hypotension"],
 			 "descriptionDetailed": "Vasoconstriction is the narrowing of the blood vessels resulting from contraction of the muscular wall of the vessels, in particular the large arteries and small arterioles. The process is particularly important in staunching hemorrhage and acute blood loss.",
			 "descriptionAbbrev":  "Raise Blood Pressure",
			 "tags": ["Vasoconstriction", "blood vessels"],
			 "imageUrl": "images/strains/acapulcoGold.jpg"
			},
			{"effectId": 23,
			 "effectName": "Memory booster", //compName
			 "conditionsTreated": ["Memory", "Alzheimers"],
 			 "descriptionDetailed": "helps memory conditions",
			 "descriptionAbbrev":  "Help memory",
			 "tags": ["Memory booster", "memory", "Memory booster", "Alzheimers"],
			 "imageUrl": "images/strains/acapulcoGold.jpg"
			}, 
			{"effectId": 24,
			 "effectName": "AChE inhibitor", //compName
			 "conditionsTreated": ["Glaucoma", "Postural Tachycardia Syndrome", "Anticholinergic Poisoning", "Alzheimers", "Apathy", "Dementia", "Parkinsons disease", "schizophrenia", "autism"],
 			 "descriptionDetailed": "Typically used to increase neuromuscular transmission",
			 "descriptionAbbrev":  "Help nerves",
			 "tags": ["AChE inhibitor", "AChE", "glaucoma", "tachycardia", "anticholinergic poisoning", "Alzheimers", "Apathy", "Dementia", "Parkinsons", "schizophrenia", "autism"],
			 "imageUrl": "images/strains/acapulcoGold.jpg"
			}, 
			{"effectId": 25,
			 "effectName": "Sedative", //compName
			 "conditionsTreated": ["Insomnia", "Hyperactivity", "Irritability"],
 			 "descriptionDetailed": "Helps you sleep as it induces sedation by reducing irritability or excitement.",
			 "descriptionAbbrev":  "Sleep aid",
			 "tags": ["Sedative", "Insomnia"],
			 "imageUrl": "images/strains/acapulcoGold.jpg"
			}, 
			{"effectId": 26,
			 "effectName": "Antipyretic", //compName
			 "conditionsTreated": ["Fever"],
 			 "descriptionDetailed": "Some components in medical cannabis can be effectve in reducing or preventing fever. The most common antipyretics in the United States are ibuprofen and aspirin, which are used primarily as pain relievers.",
			 "descriptionAbbrev":  "reduces fever",
			 "tags": ["Antipyretic", "fever"],
			 "imageUrl": "images/strains/acapulcoGold.jpg"
			}, 
			{"effectId": 27,
			 "effectName": "Euphoriant", //compName
			 "conditionsTreated": ["Depression", "Chronic Depression"],
 			 "descriptionDetailed": "Many strains of medical cannabis produce a sense of well-being commonly called Euphoria. This produces the happy, peaceful effect associated with cannabis.  ",
			 "descriptionAbbrev":  "Anti-depression",
			 "tags": ["Euphoriant", "Depression", "Anti-Depression"],
			 "imageUrl": "images/strains/acapulcoGold.jpg"
			}, 
			{"effectId": 28,
			 "effectName": "Antimalarial", //compName
			 "conditionsTreated": ["Malaria"],
 			 "descriptionDetailed": "Medical canabis has been used to prevent and treat malaria",
			 "descriptionAbbrev":  "Treat Malaria",
			 "tags": ["Antimalarial", "Malaria"],
			 "imageUrl": "images/strains/acapulcoGold.jpg"
			}, 
			{"effectId": 29,
			 "effectName": "Antifungal", //compName
			 "conditionsTreated": ["athletes foot", "ringworm", "thrush", "cryptococcal meningitis"],
 			 "descriptionDetailed": "Medical cannabis has been used to treat and prevent fungal mycoses.",
			 "descriptionAbbrev":  "Prevent fungus",
			 "tags": ["Antifungal", "athletes foot", "ringworm", "thrush", "meningitis"],
			 "imageUrl": "images/strains/acapulcoGold.jpg"
			}, 
			{"effectId": 30,
			 "effectName": "Anti-tumor", //compName
			 "conditionsTreated": ["Cancer"],
 			 "descriptionDetailed": "High CBD strains of medical cannabis have been successfully used to stop abnormal tumor cell growth associated with some skin, brain and prostate cancers.",
			 "descriptionAbbrev":  "Stops tumors",
			 "tags": ["Anti-tumor", "cancer", "chemo"],
			 "imageUrl": "images/strains/acapulcoGold.jpg"
			}, 
			{"effectId": 31,
			 "effectName": "Stimulates brain cell growth", //compName
			 "conditionsTreated": ["Alzheimers"],
 			 "descriptionDetailed": "helps stimulate brain cell growth and memory functions",
			 "descriptionAbbrev":  "Treats Alzheimers",
			 "tags": ["Alzheimers", "cancer", "chemo"],
			 "imageUrl": "images/strains/acapulcoGold.jpg"
			}, 
			{"effectId": 32,
			 "effectName": "Anti-prostate cancer", //compName
			 "conditionsTreated": ["Prostate Cancer"],
 			 "descriptionDetailed": "Helps treat and prevent prostate cancer",
			 "descriptionAbbrev":  "Treats prostate cancer",
			 "tags": ["Anti-tumor", "Prostate cancer", "Prostate"],
			 "imageUrl": "images/strains/acapulcoGold.jpg"
			}, 
			{"effectId": 33,
			 "effectName": "Antinociceptive", //compName
			 "conditionsTreated": ["Pain", "Chronic Pain"],
 			 "descriptionDetailed": "helps prevent the sensation of pain",
			 "descriptionAbbrev":  "Pain relief",
			 "tags": ["Chronic Pain", "Pain"],
			 "imageUrl": "images/strains/acapulcoGold.jpg"
			}, 
			{"effectId": 34,
			 "effectName": "Antibiotic", //compName
			 "conditionsTreated": [""],
 			 "descriptionDetailed": "destroys or slow down the growth of bacteria",
			 "descriptionAbbrev":  "Destroys bacteria",
			 "tags": ["Antibiotic", "Infection"],
			 "imageUrl": "images/strains/acapulcoGold.jpg"
			}, 
			{"effectId": 35,
			 "effectName": "Antimutagenic", //compName
			 "conditionsTreated": ["Cancer"],
 			 "descriptionDetailed": "Reduces or inhibits the rate of cell mutation",
			 "descriptionAbbrev":  "Reduce cell mutation",
			 "tags": ["Antimutagenic", "cancer"],
			 "imageUrl": "images/strains/acapulcoGold.jpg"
			}, 
			{"effectId": 36,
			 "effectName": "Bronchodilator", //compName
			 "conditionsTreated": ["Asthma", "COPD"],
 			 "descriptionDetailed": "decreases resistance in the respiratory airway and increases airflow to the lungs",
			 "descriptionAbbrev":  "Help Breathing",
			 "tags": ["Bronchodilator", "Asthma", "COPD"],
			 "imageUrl": "images/strains/acapulcoGold.jpg"
			}, 
			{"effectId": 37,
			 "effectName": "Antineoplastic", //compName
			 "conditionsTreated": ["Cancer"],
 			 "descriptionDetailed": "prevents, inhibits or halts the development of tumors",
			 "descriptionAbbrev":  "Inhibit tumors",
			 "tags": ["Antineoplastic", "cancer", "tumors"],
			 "imageUrl": "images/strains/acapulcoGold.jpg"
			}, 
			{"effectId": 38,
			 "effectName": "Relieves Intraocular Pressure", //compName
			 "conditionsTreated": ["Glaucoma"],
 			 "descriptionDetailed": "Left untreated, high eye pressure can cause glaucoma and permanent vision loss in some individuals.",
			 "descriptionAbbrev":  "Treat Glaucoma",
			 "tags": ["Antineoplastic", "Glaucoma"],
			 "imageUrl": "images/strains/acapulcoGold.jpg"
			}, 
			{"effectId": 39,
			 "effectName": "Antileishmanial", //compName
			 "conditionsTreated": ["leishmaniasis", "tropical leishmaniasis", "Sand flea bite infection"],
 			 "descriptionDetailed": "Every year, more than 2 million people worldwide suffer from leishmaniasis, a neglected tropical disease present in 88 countries. The disease is caused by the single-celled protozoan parasite species of the genus Leishmania, which is transmitted to humans by the bite of the sandfly.",
			 "descriptionAbbrev":  "Treat Sand Flea Infection",
			 "tags": ["Antileishmanial", "Sand flea Bites", "Tropical disease"],
			 "imageUrl": "images/strains/acapulcoGold.jpg"
			}
		];


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
			 "imageUrl1": "images/vapes/crafty1.jpg",
 		 	 "imageUrl2": "images/vapes/crafty2.jpg",
		 	 "imageUrl3": "images/vapes/crafty3.jpg",
		 	 "imageUrl4": "images/vapes/crafty1.jpg",
 		 	 "imageUrl5": "images/vapes/crafty_app2.jpg",
		 	 "imageUrl6": "images/vapes/crafty_apart.png",
		 	 "imageUrl7": "images/vapes/crafty_ipad.jpg"
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
			 "imageUrl1": "images/vapes/mighty1.jpg",
			 "imageUrl2": "images/vapes/mighty2.jpg",
		 	 "imageUrl3": "images/vapes/mighty3.jpg",
		 	 "imageUrl4": "images/vapes/mighty1.jpg",
 		 	 "imageUrl5": "images/vapes/mighty2.jpg",
		 	 "imageUrl6": "images/vapes/mighty3.jpg",
		 	 "imageUrl7": "images/vapes/mighty1.jpg"
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
			 "imageUrl1": "images/vapes/solo1.jpg",
			 "imageUrl2": "images/vapes/solo2.jpg",
			 "imageUrl3": "images/vapes/solo3.jpg",
			 "imageUrl4": "images/vapes/solo4.jpg",
			 "imageUrl5": "images/vapes/solo5.jpg",
			 "imageUrl6": "images/vapes/solo1.jpg",
			 "imageUrl7": "images/vapes/solo2.jpg"
			},
			{"productId": 4,
			 "productName": "Arizer Air", //compName
			 "manufacturer" : "Arizer",
			 "price": 259.95,
			 "weight": "",
			 "type": "Portable",
			 "manufacturersWarranty": "",
			 "temps": ["356 F", "374 F", "392 F", "401 F", "410 F"],
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
			 "imageUrl1": "images/vapes/arizer_air1.jpg",
			 "imageUrl2": "images/vapes/arizer_air2.jpg",
			 "imageUrl3": "images/vapes/arizer_air3.jpg",
			 "imageUrl4": "images/vapes/arizer_air1.jpg",
			 "imageUrl5": "images/vapes/arizer_air2.jpg",
			 "imageUrl6": "images/vapes/arizer_air3.jpg",
			 "imageUrl7": "images/vapes/arizer_air1.jpg"
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
			 "imageUrl1": "images/vapes/pinnaclepro1.jpg",
			 "imageUrl2": "images/vapes/pinnaclepro2.jpg",
			 "imageUrl3": "images/vapes/pinnaclepro3.png",
			 "imageUrl4": "images/vapes/pinnaclepro4.jpg",
			 "imageUrl5": "images/vapes/pinnaclepro5.jpg",
			 "imageUrl6": "images/vapes/pinnaclepro6.jpg",
			 "imageUrl7": "images/vapes/pinnaclepro7.jpg"
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
			 "imageUrl1": "images/vapes/pinnacleprodlx1.jpg",
			 "imageUrl2": "images/vapes/pinnacleprodlx2.jpg",
			 "imageUrl3": "images/vapes/pinnacleprodlx3.jpg",
			 "imageUrl4": "images/vapes/pinnacleprodlx4.jpg",
			 "imageUrl5": "images/vapes/pinnacleprodlx5.png",
			 "imageUrl6": "images/vapes/pinnacleprodlx6.jpg",
			 "imageUrl7": "images/vapes/pinnacleprodlx7.jpg"
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
			 "imageUrl1": "images/vapes/ascent1.jpg",
			 "imageUrl2": "images/vapes/ascent2.jpg",
			 "imageUrl3": "images/vapes/ascent3.jpg",
			 "imageUrl4": "images/vapes/ascent4.jpg",
			 "imageUrl5": "images/vapes/ascent5.jpg",
			 "imageUrl6": "images/vapes/ascent1.jpg",
			 "imageUrl7": "images/vapes/ascent2.jpg"
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
			 "imageUrl1": "images/vapes/davinci1.jpg",
			 "imageUrl2": "images/vapes/davinci2.jpg",
			 "imageUrl3": "images/vapes/davinci3.jpg",
			 "imageUrl4": "images/vapes/davinci4.png",
			 "imageUrl5": "images/vapes/davinci1.jpg",
			 "imageUrl6": "images/vapes/davinci2.jpg",
			 "imageUrl7": "images/vapes/davinci3.jpg"
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
			 "imageUrl1": "images/vapes/plenty1.jpg",
			 "imageUrl2": "images/vapes/plenty2.jpg",
			 "imageUrl3": "images/vapes/plenty3.jpg",
			 "imageUrl4": "images/vapes/plenty4.jpg",
			 "imageUrl5": "images/vapes/plenty5.jpg",
			 "imageUrl6": "images/vapes/plenty1.jpg",
			 "imageUrl7": "images/vapes/plenty2.jpg"
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
			 "imageUrl1": "images/vapes/puffit1.jpg",
			 "imageUrl2": "images/vapes/puffit2.jpg",
			 "imageUrl3": "images/vapes/puffit3.jpg",
			 "imageUrl4": "images/vapes/puffit4.jpg",
			 "imageUrl5": "images/vapes/puffit5.jpg",
			 "imageUrl6": "images/vapes/puffit6.jpg",
			 "imageUrl7": "images/vapes/puffit1.jpg"
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
			 "imageUrl1": "images/vapes/vapirrise1.jpg",
			 "imageUrl2": "images/vapes/vapirrise2.jpg",
			 "imageUrl3": "images/vapes/vapirrise3.jpg",
			 "imageUrl4": "images/vapes/vapirrise4.jpg",
			 "imageUrl5": "images/vapes/vapirrise5.jpg",
			 "imageUrl6": "images/vapes/vapirrise1.jpg",
			 "imageUrl7": "images/vapes/vapirrise2.jpg"
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
			 "imageUrl1": "images/vapes/volcano2.jpg",
			 "imageUrl2": "images/vapes/volcano3.jpg",
			 "imageUrl3": "images/vapes/volcano1.jpg",
			 "imageUrl4": "images/vapes/volcano4.jpg",
			 "imageUrl5": "images/vapes/volcano5.jpg",
			 "imageUrl6": "images/vapes/volcano6.jpg",
			 "imageUrl7": "images/vapes/volcano7.jpg"
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
			 "imageUrl1": "images/vapes/ssv_colors.jpg",
			 "imageUrl2": "images/vapes/ssv2.jpg",
			 "imageUrl3": "images/vapes/ssv_ceramic_element.jpg",
			 "imageUrl4": "images/vapes/SSVStdglass2.png",
			 "imageUrl5": "images/vapes/SSV_groundglass2.png",
			 "imageUrl6": "images/vapes/ssv4.jpg",
			 "imageUrl7": "images/vapes/ssv_complete_set.jpg"
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
			 "descriptionDetailed1": "Beautifully crafted and intuitively designed, the Magic-Flight Launch Box, is powered by a rechargeable AA NiMH battery and holds the title of the world’s smallest electronic vaporizer, making it the perfect option for low-profile vaporizing on-the-go.",
			 "descriptionDetailed2": "Each Launch Box vaporizer represents the effort of many skilled craftsman. Three wood choices are available, along with five different Laser Etch models.",
			 "descriptionDetailed3": "The Launch Box has many accessories to choose from such as the Power Adapter 2.0 for extra power at home or in your vehicle, Water Piece Whip for water cooled vapor, and Concentrate Tray for using solid concentrates or liquids.",
			 "descriptionDetailed4": "To begin vaporization, slide back the Launch Box lid and load blends loosely into the trench. Close the lid and press the charged battery into the box to activate the stainless steel heating rod. An orange indicator light under the lid will light to show you the conduction process is taking place and will be ready-to-use in 3 to 5 seconds.",
			 "descriptionDetailed5": "A unique vapor channel flow system delivers vapor directly to the user minimizing condensation. Draw slowly from the glass steam for best results. Release pressure on battery two-thirds through draw to prevent overheating.",
			 "descriptionDetailed6": "After cooling, simply empty the trench and brush gently using the cleaning brush. Gently blow into trench to remove any remaining dust. The screen may discolor after use.",
			 "descriptionDetailed7": "To clean, gently wipe screen with a 91% Isopropyl Alcohol. Avoid contact of Isopropyl alcohol with trench.",
			 "descriptionAbbrev":  "The Volcano Digit vaporizer's reputation precedes it in most cases and is equally respected by vaporizing newbies and pro vaporizer users alike.",
			 "included" : "Magic-Flight Launch Box, 2x Rechargeable NiMH Glyph Batteries With Caps, Battery Charger, Felt-lined Decorative Tin, Glass Draw Stem, Cleaning Brush, User Manual",	
			 "tags": ["Desktop","Volcano", "Herbs", "Oils", "Concentrates"],
			 "imageUrl1": "images/vapes/mflb1.jpg",
			 "imageUrl2": "images/vapes/mflb2.jpg",
			 "imageUrl3": "images/vapes/mflb3.jpg",
			 "imageUrl4": "images/vapes/mflb4.jpg",
			 "imageUrl5": "images/vapes/mflb1.jpg",
			 "imageUrl6": "images/vapes/mflb2.jpg",
			 "imageUrl7": "images/vapes/mflb3.jpg"
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
			 "descriptionDetailed3": "Direct Draw via Whip: Draw in vapor through the included 3’ Long Whip.",
			 "descriptionDetailed4": "Forced Air Assisted Whip: Give your lungs a break! Let the EQ’s fan create and deliver vapor for you through the included 3’ Long Whip.",
			 "descriptionDetailed5": "Forced Air Balloon Delivery: Attach the Balloon Assembly and watch as the Extreme Q’s fan fills your balloon with vapor. Detach the balloon when full, draw and enjoy!",
			 "descriptionDetailed6": "All functions can be performed via the included remote control, or on the unit itself through the digital display. It’s fully adjustable temperature can be set in one degree increments, from 122 degrees F – 500 degrees F (50 degrees C – 260 degrees C). The user-set automatic shut-off feature allows you to set and forget; your Extreme Q will automatically shut down at a user defined time.",
			 "descriptionDetailed7": "The Extreme Q offers a powerful yet energy efficient ceramic heating element and glass-on-glass components for clean vapor",
			 "descriptionAbbrev":  "The Extreme Q offers a powerful yet energy efficient ceramic heating element and glass-on-glass components for clean vapor",
			 "included" : "Extreme Q Vaporizer, Remote Control, 2x Glass Cyclone Bowls with Flat Screens, 3 foot Whip Tubing, Glass Whip Mouthpiece, Glass Elbow Adapter with Dome Screen, Pre-Attached Mini Whip for Balloon, Balloon Assembly, 2x Balloons, 2x Glass Balloon Mouthpieces, 2x O-Rings, Glass Stir Tool, Flat Screen, Dome Screen, Glass Potpourri Dish with Potpourri Sample, 110/220V Power Supply, User Manual ",	
			 "tags": ["Desktop","Volcano", "Herbs", "Oils", "Concentrates"],
			 "imageUrl1": "images/vapes/extremeq1.jpg",
			 "imageUrl2": "images/vapes/extremeq2.jpg",
			 "imageUrl3": "images/vapes/extremeq3.jpg",
			 "imageUrl4": "images/vapes/extremeq4.jpg",
			 "imageUrl5": "images/vapes/extremeq5.jpg",
			 "imageUrl6": "images/vapes/extremeq6.jpg",
			 "imageUrl7": "images/vapes/extremeq7.jpg"
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
			 "imageUrl1": "images/vapes/haze1.jpg",
			 "imageUrl2": "images/vapes/haze2.jpg",
			 "imageUrl3": "images/vapes/haze3.jpg",
			 "imageUrl4": "images/vapes/haze4.jpg",
			 "imageUrl5": "images/vapes/haze5.jpg",
			 "imageUrl6": "images/vapes/haze6.jpg",
			 "imageUrl7": "images/vapes/haze7.jpg"
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
			 "imageUrl1": "images/vapes/firefly1.jpg",
			 "imageUrl2": "images/vapes/firefly2.jpg",
			 "imageUrl3": "images/vapes/firefly3.jpg",
			 "imageUrl4": "images/vapes/firefly4.jpg",
			 "imageUrl5": "images/vapes/firefly1.jpg",
			 "imageUrl6": "images/vapes/firefly2.jpg",
			 "imageUrl7": "images/vapes/firefly3.jpg"
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
			 "imageUrl1": "images/vapes/hotbox1.jpg",
			 "imageUrl2": "images/vapes/hotbox2.jpg",
			 "imageUrl3": "images/vapes/hotbox3.jpg",
			 "imageUrl4": "images/vapes/hotbox4.jpg",
			 "imageUrl5": "images/vapes/hotbox5.jpg",
			 "imageUrl6": "images/vapes/hotbox1.jpg",
			 "imageUrl7": "images/vapes/hotbox2.jpg"
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
			 "imageUrl1": "images/vapes/pax1.jpg",
			 "imageUrl2": "images/vapes/pax2.jpg",
			 "imageUrl3": "images/vapes/pax3.jpg",
			 "imageUrl4": "images/vapes/pax4.jpg",
			 "imageUrl5": "images/vapes/pax1.jpg",
			 "imageUrl6": "images/vapes/pax2.jpg",
			 "imageUrl7": "images/vapes/pax3.jpg"
			},			
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
			 "imageUrl": ["images/vapes/crafty1.jpg",
 		 	 			  "images/vapes/crafty2.jpg",
		 	  			  "images/vapes/crafty3.jpg",
		 	 			  "images/vapes/crafty1.jpg",
 		 	 			  "images/vapes/crafty_app2.jpg",
		 	  			  "images/vapes/crafty_apart.png",
		 	  			  "images/vapes/crafty_ipad.jpg"]
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
			 "imageUrl": ["images/vapes/mighty1.jpg",
			 			  "images/vapes/mighty2.jpg",
		 	 			  "images/vapes/mighty3.jpg",
		 	 			  "images/vapes/mighty1.jpg",
 		 	 			  "images/vapes/mighty2.jpg",
		 	 			  "images/vapes/mighty3.jpg",
		 	 			  "images/vapes/mighty1.jpg"]
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
			 "imageUrl": ["images/vapes/plenty1.jpg",
						  "images/vapes/plenty2.jpg",
						  "images/vapes/plenty3.jpg",
						  "images/vapes/plenty4.jpg",
						  "images/vapes/plenty5.jpg",
						  "images/vapes/plenty1.jpg",
						  "images/vapes/plenty2.jpg"]
			},
			{"tipId": 4,
			 "tipCatagory":"Pen", 
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
			 "imageUrl": ["images/vapes/pinnaclepro1.jpg",
			  			  "images/vapes/pinnaclepro2.jpg",
			  			  "images/vapes/pinnaclepro3.png",
			  			  "images/vapes/pinnaclepro4.jpg",
			  			  "images/vapes/pinnaclepro5.jpg",
			  			  "images/vapes/pinnaclepro6.jpg",
			  			  "images/vapes/pinnaclepro7.jpg"]
			},
			{"tipId": 5,
			 "tipCatagory":"Pen", 
			 "tipName": "Pinnacle Pro",
			 "manufacturer" : "VaporBlunt",
			 "price": 188.00,
			 "weight": "",
			 "manufacturersWarranty": "The Pinnacle Pro DLX has a 1 year limited product warranty which covers your vaporizer against defects in manufacturing, parts and labor. 90 day limited warranty on the battery.",
			 "temps": ["370 F", "395 F", "420 F", "445 F", "470 F"],
			 "included" : ["1 x Pinnacle Pro Portable Vaporizer",
			 			   "1 x Chamber Cap", 
			 			   "1 x PonG Adapter w/ Glass Vapor Path", 
			 			   "2 x Dry Herb Filling Chambers", 
			 			   "1 x Wax/Oil Filling Chamber", 
			 			   "1 x Charger, 1 x Cleaning Brush", 
			 			   "1 x Wire Pipe Cleaner", 
			 			   "1 x Bamboo Cleaning Stick", 
			 			   "1 x Standard Mouthpiece", "1 x Quick Start Guide"],
			 "tipDescriptionAbbrev": "The Pinnacle quickly became one of the most popular portable vaporizers for first time users and vape veterans alike.",
			 "tipDescriptionDetailed":["The Pinnacle quickly became one of the most popular portable vaporizers for first time users and vape veterans alike because of its easy to use functionality, superb portability, and excellent vapor quality.",
			 						   "The creators, VaporBLUNT, have now taken this tiny tower of power and made vast improvements that are taking the Pinnacle to the next level. ",
			 						   "VaporBLUNT's Pinnacle Pro vaporizer is still the same small size, measuring about 5 inches tall and less than an inch wide, making it a great fit in the hand, pocket, purse or bag. ",
			 						   "The Pinnacle Pro vaporizer even keeps the same 1 button design which turns the unit on, toggles between its temperature settings, and then turns the unit off. ",
			 						   "What has changed with the upgraded Pinnacle, however, is that it now has 5 temperature settings, which is 3 more than the original version. These temperatures range from 370 degrees to 470 degrees F in 25 degree increments providing ultimate control over your personal vaporization settings. ",
			 						   "The temperature setting is indicated using a color coding system displayed by the 5 LED lights on the front of the Pinnacle Pro. The first 4 temperatures are so that you can find the perfect temperature for your dry herbal blend, while the 5th and highest temperature is intended for oil and concentrate vaporization. ",
			 						   "That's right, the Pinnacle Pro has the ability to vaporize dry herbs and concentrates right out of the box by simply changing the included bullet in the chamber. Another small, yet very efficient change is the Pro's new battery level indicator. By pressing the button just once the LED lights will light up to display how much battery level the Pinnacle has left. This pint size power house is an excellent choice as a first vaporizer or as an upgrade or addition to your current vaporizer collection. Reach the pinnacle of portable vaporization like a pro with VaporBLUNT's Pinnacle Pro vaporizer."],
			 "tags": ["Terpene","Terpinoid","peppermint", "sedative", "memory"],
			 "imageUrl": ["images/vapes/pinnaclepro1.jpg",
			  			  "images/vapes/pinnaclepro2.jpg",
			  			  "images/vapes/pinnaclepro3.png",
			  			  "images/vapes/pinnaclepro4.jpg",
			  			  "images/vapes/pinnaclepro5.jpg",
			  			  "images/vapes/pinnaclepro6.jpg",
			  			  "images/vapes/pinnaclepro7.jpg"]
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
			 "imageUrl": ["images/vapes/solo1.jpg",
						  "images/vapes/solo2.jpg",
						  "images/vapes/plenty3.jpg",
						  "images/vapes/solo4.jpg",
						  "images/vapes/solo5.jpg"
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
			 "imageUrl": ["images/vapes/ssv2.jpg",
						  "images/vapes/ssv_ceramic_element.jpg",
						  "images/vapes/SSVStdglass2.png",
						  "images/vapes/SV_groundglass2.png",
						  "images/vapes/ssv4.jpg"
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
			 	"images/vapes/ascent1.jpg",
				"images/vapes/ascent2.jpg",
				"images/vapes/ascent3.png",
				"images/vapes/ascent4.png",
				"images/vapes/ascent5.jpg" 
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
			 	"images/vapes/arizer_air1.jpg",
				"images/vapes/arizer_air2.jpg",
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
			 	"images/vapes/volcano2.jpg",
				"images/vapes/volcano3.jpg",
				"images/vapes/volcano1.jpg",
				"images/vapes/volcano7.jpg",
				"images/vapes/volcano5.jpg",
				"images/vapes/volcano6.jpg" 
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
			 	"images/vapes/vapirrise1.jpg",
				"images/vapes/vapirrise2.jpg",
				"images/vapes/vapirrise3.jpg",
				"images/vapes/vapirrise4.jpg",
				"images/vapes/vapirrise5.jpg" 
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
			 						   "Direct Draw via Whip: Draw in vapor through the included 3’ Long Whip.",
			 						   "Forced Air Assisted Whip: Give your lungs a break! Let the EQ’s fan create and deliver vapor for you through the included 3’ Long Whip.",
			 						   "Forced Air Balloon Delivery: Attach the Balloon Assembly and watch as the Extreme Q’s fan fills your balloon with vapor. Detach the balloon when full, draw and enjoy!",
			 						   "All functions can be performed via the included remote control, or on the unit itself through the digital display. It’s fully adjustable temperature can be set in one degree increments, from 122 degrees F – 500 degrees F (50 degrees C – 260 degrees C). The user-set automatic shut-off feature allows you to set and forget; your Extreme Q will automatically shut down at a user defined time.",
			 						   "The Extreme Q offers a powerful yet energy efficient ceramic heating element and glass-on-glass components for clean vapor"
			 						   ],
			 "tags": ["plenty","desktop","handheld","storz-bickel"],
			 "imageUrl":[
			 	"images/vapes/extremeq1.jpg",
				"images/vapes/extremeq2.jpg",
				"images/vapes/extremeq3.jpg",
				"images/vapes/extremeq4.jpg",
				"images/vapes/extremeq5.jpg",
				"images/vapes/extremeq6.jpg",
				"images/vapes/extremeq7.jpg" 
				]
			},
			{"tipId": 14,
			 "tipCatagory":"Portable", 
			 "tipName": "The Haze",
			 "manufacturer" : "Haze Vaporizers",
			 "price": 249.99,
			 "weight": "",
			 "manufacturersWarranty": "10 year warranty",
			 "temps": ["0-450 F", "0-450 F", "0-450 F", "0-450 F"],
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
			 	"images/vapes/haze1.jpg",
				"images/vapes/haze2.jpg",
				"images/vapes/haze3.jpg",
				"images/vapes/haze4.jpg",
				"images/vapes/haze5.jpg",
				"images/vapes/haze6.jpg",
				"images/vapes/haze7.jpg" 
				]
			}
		];

		var conditionsUrl = "/api/conditions";
		var productUrl = "/api/products";
		var effectUrl = "/api/effects";
		var vapeUrl = "/api/vapes";
		var tipUrl = "/api/tips";
		var temperatureUrl = "/api/temperatures";
		var strainUrl = "/api/strains";
						
		$httpBackend.whenGET(productUrl).respond(products);
		$httpBackend.whenGET(temperatureUrl).respond(temperatures);
		$httpBackend.whenGET(effectUrl).respond(effects);
		$httpBackend.whenGET(conditionsUrl).respond(conditions);
		$httpBackend.whenGET(vapeUrl).respond(vapes);
		$httpBackend.whenGET(tipUrl).respond(tips);
		$httpBackend.whenGET(strainUrl).respond(strains);

		var editingRegex = new RegExp(tipUrl + "/[0-9][0-9]*", '');

		$httpBackend.whenGET(editingRegex).respond(function (method, url, data){
			var tip = {"tipId": 0};
			var parameters = url.split('/');
			var length = parameters.length;
			var id = parameters[length - 1];

			if (id > 0){
				for (var i = 0; i < tips.length; i++){
					if(tips[i].tipId == id) {
						tip = tips[i];
						break;
					}
				};
			}
			return [200, tip, {}];
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