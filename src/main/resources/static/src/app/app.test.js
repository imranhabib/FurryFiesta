import app from './app';

describe('app', () => {

  describe('AppCtrl', () => {
    let ctrl;

    beforeEach(() => {
      angular.mock.module(app);

      angular.mock.inject(($controller) => {
        ctrl = $controller('AppCtrl', {});
      });
    });

    it('should contain the starter url', () => {
      expect(ctrl.url).toBe('https://github.com/preboot/angular-webpack');
    });
  });
  
  describe('carousel', () => {
	    let ctrl;

	    beforeEach(() => {
	      angular.mock.module(app);

	      angular.mock.inject(($controller) => {
	        ctrl = $controller('carousel', {});
	      });
	    });

	    it('should contain the starter url', () => {
	      expect(ctrl.url).toBe('https://github.com/preboot/angular-webpack');
	    });
	  });
  
  
});