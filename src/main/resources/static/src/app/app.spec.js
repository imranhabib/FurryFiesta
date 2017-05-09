import app from './app';
import inventoryController from '../components/inventory/inventory.controller';
import history from '../components/history/history.component';
import splash from '../components/splash/splash.component';
import carousel from '../components/carousel/carousel.component';

describe('app', () => {

  describe('AppCtrl', () => {
    let ctrl;

    beforeEach(() => {
      angular.mock.module(app);

      angular.mock.inject(($controller) => {
        ctrl = $controller('AppCtrl', {});
      });
    });

    it('should contain the project name', () => {
      expect(ctrl.name).toBe('Furry Fiesta');
    });
  });
  
  
  
  describe('inventoryController', () => {
	    let scope; 
	    let $http; 
	    let createController = inventoryController; 
	    let defaultValue; 

	    beforeEach(inject(function ($rootScope, $controller, _$http_) {
	    	$http = _$http_;
	        scope = $rootScope.$new();
	        defaultValue = 'unknown'; 
	    }));
	    
	    it('should have a default values set to unknown', function() {
	        var controller = inventoryController;
	        expect(defaultValue).toBe('unknown');
	    });
	    
	    
	    
  });
	 
  
 
  
});