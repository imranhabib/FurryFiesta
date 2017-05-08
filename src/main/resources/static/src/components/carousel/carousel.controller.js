/**
 * http://usejsdoc.org/
 */

import bunny from '../../public/img/bunny.jpeg';
import pug from '../../public/img/pug.jpg';
import puppies from '../../public/img/puppies.jpg';

export default class Carousel {
	constructor($scope){	
		this.$scope = $scope; 
		this.bunny = bunny; 
		this.pug = pug; 
		this.puppies = puppies; 
	 
		this.aboutUsOne = 'We love pets! We have served many pet lovers across the globe';
		this.aboutUsTwo = 'With several locations, you can rest assured that your pet will find a good home';
		this.aboutUsThree = 'If you want to buy a pet. We have a great selection available online and in-store';
	}
}
	