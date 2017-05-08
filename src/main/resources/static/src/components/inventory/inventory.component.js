/**
 * http://usejsdoc.org/
 */
import inventoryController from './inventory.controller';
import inventoryTemplate from './inventory.template.html';

const inventory = {
		bindings: {
			
		},
	template: inventoryTemplate,  	
	controller: ['$scope', '$http', inventoryController]
}; 

export default inventory; 
