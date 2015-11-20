var StrangePunch = StrangePunch || {};
StrangePunch.Bootstrap = {};

StrangePunch.Bootstrap.AddButton = function() {
	return {
		restrict : "E",
		scope : {
			action : "&",
			text : "@"
		},
		template : "<button class='btn btn-success' ng-click='action()'><i class='icon icon-white icon-plus-sign'</i>{{text}}</button> "
	}

}

StrangePunch.Bootstrap.DeleteButton = function() {
	return {
		restrict : "E",
		replace : true,
		scope : {
			action : "&",
			text : "@"
		},
		template : "<button class='btn btn-danger' ng-click='action()'><i class='icon icon-remove icon-white'</i>{{text}}</button>"
	}

}