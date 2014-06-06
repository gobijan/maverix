'use strict';

/* Controllers */

angular.module('myApp.controllers', [])
    .controller('MaverixCtrl', ['$scope', function ($scope) {
        $scope.$parent.title = "Maverix Theme Guide";
        $scope.$parent.img = "img/iconset-addictive-flavour-set/png/screen_rulers_glossy.png";
        $scope.$parent.showTopToggle = false;
    }])
    .controller('ChartCtrl', ['$scope', function ($scope) {
        $scope.$parent.title = "Charts";
        $scope.$parent.img = "img/iconset-addictive-flavour-set/png/chart.png";
        $scope.$parent.showTopToggle = false;
    }])
    .controller('TypeCtrl', ['$scope', function ($scope) {
        $scope.$parent.title = "Typography";
        $scope.$parent.img = "img/iconset-addictive-flavour-set/png/cutting_pad.png";
        $scope.$parent.showTopToggle = false;
    }])
    .controller('IconsCtrl', ['$scope', function ($scope) {
        $scope.$parent.title = "Icons";
        $scope.$parent.img = "img/iconset-addictive-flavour-set/png/box_address.png";
        $scope.$parent.showTopToggle = false;
    }])
    .controller('TablesCtrl', ['$scope', function ($scope) {
        $scope.$parent.title = "Tables";
        $scope.$parent.img = "img/iconset-addictive-flavour-set/png/document-plaid-pen.png";
        $scope.$parent.showTopToggle = false;
    }])
    .controller('ModalsCtrl', ['$scope', function ($scope) {
        $scope.$parent.title = "Modals";
        $scope.$parent.img = "img/iconset-addictive-flavour-set/png/fullscreen.png";
        $scope.$parent.showTopToggle = false;
    }])
    .controller('ControlsCtrl', ['$scope', function ($scope) {
        $scope.$parent.title = "Controls";
        $scope.$parent.img = "img/iconset-addictive-flavour-set/png/button_blue_add.png";
        $scope.$parent.showTopToggle = false;
    }])
    .controller('FormsCtrl', ['$scope', function ($scope) {
        $scope.$parent.title = "Forms";
        $scope.$parent.img = "img/iconset-addictive-flavour-set/png/tablet.png";
        $scope.$parent.showTopToggle = false;

    }])
    .controller('MyCtrl1', ['$scope', function ($scope) {
        $scope.$parent.title = "Maverix Theme";
        $scope.$parent.img = "img/iconset-addictive-flavour-set/png/screen_aqua_glossy.png";
        $scope.$parent.showTopToggle = true;

    }])
    .controller('MyCtrl2', ['$scope', function ($scope) {
        $scope.$parent.title = "Warnings";
        $scope.$parent.img = "img/iconset-addictive-flavour-set/png/moleskine_black.png";
        $scope.$parent.showTopToggle = false;
    }])
    .controller('AppCtrl', ['$scope', '$location', function ($scope, $location) {
        $scope.isActive = function (viewLocation) {
            return viewLocation === $location.path();
        };

        $scope.title = "Maverix Theme";
        $scope.subNav1 = 0;
        $scope.img = "img/iconset-addictive-flavour-set/png/screen_aqua_glossy.png";
        $scope.showTopToggle = false;
    }]);
