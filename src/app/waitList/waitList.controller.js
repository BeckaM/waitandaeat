(function() {
    'use strict';
    
    angular
        .module('app.waitList')
        .controller('WaitListController', WaitListController);
    
    function WaitListController() {
        // vm for view model
        // any data in your view model will be accessible in the view
        var vm = this;  
        
        vm.parties = [1, 2, 3, 4];        
    };
    
})();