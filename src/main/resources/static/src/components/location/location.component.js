/**
 * http://usejsdoc.org/
 */
import locationController from './location.controller';
import locationTemplate from './location.template.html';

const location = {
		bindings: {
			
		},
	template: locationTemplate, 
	controller: ['$scope', locationController]
}; 

export default location; 