/**
 * http://usejsdoc.org/
 */
import splashController from './splash.controller';
import splashTemplate from './splash.template.html';

const splash = {
		bindings: {
			
		},
	template: splashTemplate, 
	controller: ['$scope', splashController]
}; 

export default splash; 