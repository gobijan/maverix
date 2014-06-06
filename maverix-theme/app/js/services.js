'use strict';

/* Services */


// Demonstrate how to register services
// In this case it is a simple value service.
var myModule = angular.module('myApp.services', []).
    value('version', '0.1');