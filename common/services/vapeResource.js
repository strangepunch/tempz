(function () {
	"use strict";

	angular
		.module("common.services")
		.factory("vapeResource", 
			["$resource",
			 vapeResource]);

	function vapeResource($resource){
		return $resource("/api/vapes/:productId")
	}

}());