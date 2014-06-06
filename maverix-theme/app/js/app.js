'use strict';


// Declare app level module which depends on filters, and services
angular.module('myApp', [
    'ngRoute',
    'myApp.filters',
    'myApp.services',
    'myApp.directives',
    'myApp.controllers'
]).
    config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/maverix', {templateUrl: 'app/partials/maverix.html', controller: 'MaverixCtrl'});
        $routeProvider.when('/tables', {templateUrl: 'app/partials/tables.html', controller: 'TablesCtrl'});
        $routeProvider.when('/modals', {templateUrl: 'app/partials/modals.html', controller: 'ModalsCtrl'});
        $routeProvider.when('/controls', {templateUrl: 'app/partials/controls.html', controller: 'ControlsCtrl'});
        $routeProvider.when('/icons', {templateUrl: 'app/partials/icons.html', controller: 'IconsCtrl'});
        $routeProvider.when('/type', {templateUrl: 'app/partials/type.html', controller: 'TypeCtrl'});
        $routeProvider.when('/charts', {templateUrl: 'app/partials/charts.html', controller: 'ChartCtrl'});
        $routeProvider.when('/forms', {templateUrl: 'app/partials/forms.html', controller: 'FormsCtrl'});
        $routeProvider.when('/view1', {templateUrl: 'app/partials/partial1.html', controller: 'MyCtrl1'});
        $routeProvider.when('/view2', {templateUrl: 'app/partials/partial2.html', controller: 'MyCtrl2'});
        $routeProvider.otherwise({redirectTo: '/view1'});
    }]);
