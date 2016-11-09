
// Wrap angular components in an IIFE (Immediately Invoked Function Expression).
// IIFE removes variables from the global scope. Help avoid variable collisions.
(function() {
    'use strict';
    
    angular
        .module('app', [
        // Angular modules.
        'ngRoute',

        // Third party modules.
        'firebase',

        // Custom modules.
        'app.landing',
        'app.waitList'
    ]);
    
})();
