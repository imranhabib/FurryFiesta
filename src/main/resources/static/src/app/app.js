import angular from 'angular';

// Import primary style and all components
import '../style/app.css';
import inventory from '../components/inventory/inventory.component';
import location from '../components/location/location.component';
import history from '../components/history/history.component';
import splash from '../components/splash/splash.component';
import carousel from '../components/carousel/carousel.component';

// Initialize entry point
let app = () => {
  return {
    template: require('./app.html'),
    controller: 'AppCtrl',
    controllerAs: 'app'
  }
};

class AppCtrl {
  constructor() {
	  this.name = 'Furry Fiesta';
  }
}

// Register components to angular module
const MODULE_NAME = 'app';
const MODULE = angular.module(MODULE_NAME, []); 

MODULE.directive('app', app)
.controller('AppCtrl', AppCtrl);


MODULE.component('inventory', inventory);
MODULE.component('location', location);
MODULE.component('history', history);
MODULE.component('splash', splash);
MODULE.component('carousel', carousel);

export default MODULE_NAME;