// # Place all the behaviors and hooks related to the matching controller here.
// # All this logic will automatically be available in application.js.
// # You can use CoffeeScript in this file: http://coffeescript.org/


$(document).ready(function() {
	function initialize() {

		var centerPoint = new google.maps.LatLng(latitude, longitude);

		var mapOptions = { 
			center: centerPoint,
			zoom: 12,
			scrollwheel: false
		}

		var map = new google.maps.Map(document.getElementById('destination-map'), mapOptions);

		var marker = new google.maps.Marker({
			position: centerPoint,
			map: map, 
			animation: google.maps.Animation.DROP
		})
	}	
		google.maps.event.addDomListener(window, 'load', initialize);
});
