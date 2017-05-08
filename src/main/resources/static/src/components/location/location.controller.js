/**
 * http://usejsdoc.org/
 */

export default class Location {
	constructor($scope){
		
		this.$scope = $scope; 
		this.initMap(); 
		
		
		// Used to populate the about us section
		this.address = 'Where we are'; 
		this.locations = 'View all of our locations above'; 
		this.contact = 'Get in touch'; 
		this.cities = 'Multiple Cities'; 
		this.email = 'imranhabib14@gmail.com'; 
		this.phone = '+1 778 847 7869'; 
		
		
		
	}
	
	/* 
	 Initialize the Google Map with a marker on store location
	 */
	initMap() {
		const mapProp = {
		    center:new google.maps.LatLng(49.2820, -123.1171),
		    zoom:5,
		};
		let map = new google.maps.Map(document.getElementById("googleMap"), mapProp);
		
		let marker = new google.maps.Marker({
			    position: new google.maps.LatLng(49.2820, -123.1171),
			    map: map
		});
		
		let marker2 = new google.maps.Marker({
		    position: new google.maps.LatLng(47.78415,-121.7900966),
		    map: map
		});
		
		let marker3 = new google.maps.Marker({
		    position: new google.maps.LatLng(51.0458619,-113.7080515),
		    map: map
		});
		
		let marker4 = new google.maps.Marker({
		    position: new google.maps.LatLng(45.5584249,-121.5009677),
		    map: map
	});
	}
}