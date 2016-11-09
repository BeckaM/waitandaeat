(function() {
    'use strict';
    
    angular
        .module('app.landing')
        .config(configFunction)
    
    // Add an inject property. 
    // Anguilar will look at the array and the dependencies mentioned here.
    // Inject -> means that we want to make anything in this array available for this function.
    configFunction.$inject = ['$routeProvider'];
        
    function configFunction($routeProvider) {
        $routeProvider.when('/', {
           templateUrl: 'app/landing/landing.html' 
        });
    };
    
})();