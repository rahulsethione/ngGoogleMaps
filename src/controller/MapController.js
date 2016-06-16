angular.module('SimpleGoogleMaps').controller('MapController', ['$scope', 'GoogleMapsService', function($scope, GoogleMapsService) {
	
	$scope.map = {
		options: {
			center: {position: {lat: 43.9124, lng: 75.7873}},
			zoom: 8
		},
		markers: [{
			title: 'Marker',
			position: {lat: 45.5124, lng: -74.78643798828125}
		}]
	};
}]);