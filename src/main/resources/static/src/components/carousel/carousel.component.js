/**
 * http://usejsdoc.org/
 */
import carouselController from './carousel.controller';
import carouselTemplate from './carousel.template.html';

const carousel = {
		bindings: {
			
		},
	template: carouselTemplate, 
	controller: ['$scope', carouselController]
}; 

export default carousel; 
