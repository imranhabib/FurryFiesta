/**
 * http://usejsdoc.org/
 */

import openSign from '../../public/img/openSign.jpg';
import icon from '../../public/img/favicon.png';

export default class Splash {
	constructor($scope){
	
		this.$scope = $scope;
		this.openSign = openSign;
		this.icon = icon;
		
		// Used for the navigation bar links
		this.storeName = "Furry Fiesta Inc."; 
		this.location = "Location"; 
		this.inventory = "Pets!";
		this.search = "Search"; 
		this.sell = "Sell"
		this.about = "About Us"; 	
		this.companyName = 'Furry Fiesta'; 
		this.companySlogan = 'est 2017'; 
		
	}
}