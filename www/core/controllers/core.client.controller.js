/**
 * Created by arjundixit on 1/31/17.
 */

'use strict';
angular.module('core').controller('CoreController', ['$scope', '$timeout','$location','HTTPService', 'uiGmapGoogleMapApi', '$state', 'AuthService', '$http', function ($scope, $timeout, $location, HTTPService, uiGmapGoogleMapApi, $state, AuthService, $http) {

    $scope.url = 'http://' + $location.host() + ':' + $location.port();
    
    // AuthService.isUserLoggedIn(function (result) {
    //     if(result){
    //         $scope.signUpHide = true;
    //         $scope.signInHide = true;
    //     }else{
    //         $scope.signUpHide = false;
    //         $scope.signInHide = false;
    //     }
    // });

    $state.go('add_data');

    $scope.submitForm = function(){
        HTTPService.submit({'data':$scope.fields},function(response){
            alert('From Server: '+response);
            $scope.records = HTTPService.getAll();
        });
    };

    $scope.signUp = function(){
        HTTPService.signUp({
            email:$scope.email,
            password:$scope.password,
            name:$scope.name
        },function(response){
            if(response.success == true) {
                $state.go('signin');
            } else {
                alert('Error signing up, try again!');
            }
        });
    };

    $scope.login = function(){
        HTTPService.signIn({
            email:$scope.loginemail,
            password:$scope.loginpassword
        },function(response){
            if(response.success == true) {
                $state.go('map');
                AuthService.putToken(response.token);
            }else {
                alert('Error signing in, try again!')
            }
        });
    };

    $scope.map = {
        zoom: 18,
        center: {
            latitude: 27.949,
            longitude: -81.958
        },
        control:{},
        circles: [],
        circlesEvents: {
            // click: function(marker, eventName, model) {
            //     console.log('circle was clicked (' + marker + ',' + eventName+ ')');
            //     $scope.map.window.model = model;
            //     $scope.map.window.title = model.title;
            //     $scope.map.window.show = true;
            // }
        },
        markers: [
            {
                id: 1,
                latitude: 27.949,
                longitude: -81.958,
                title: 'Airport'
            }
        ],
        markersEvents: {
            click: function(marker, eventName, model) {
                console.log('Marker was clicked (' + marker + ',' + eventName+ ')');
                $scope.map.window.model = model;
                $scope.map.window.title = model.title;
                $scope.map.window.show = true;
            }
        },
        events: {
            click: function(mapModel, eventName, originalEventArgs) {
                console.log("user defined event: " + eventName, mapModel, originalEventArgs);
                var e = originalEventArgs[0].latLng;

                var circle = {
                    id: Date.now(),
                    center: { latitude: e.lat(), longitude: e.lng() },
                    radius: 20,
                    stroke: { color: '#08B21F', opacity: 1, weight: 2 },
                    fill: { color: '#08B21F', opacity: 0.5 },
                    draggable: true,
                    clickable: true,
                    editable: true
                };
                $scope.map.circles.push(circle);
                $scope.$apply();
            }
        },
        window: {
            marker: {},
            show: false,
            closeClick: function() {
                this.show = false;
            },
            options: {},
            title: ''
        }
    };

    uiGmapGoogleMapApi.then(function(maps) {
        console.log("MAP loaded");
        getLocation();
    });

    function getLocation() {
        if(navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function(position) {
                // $scope.map.center.latitude = position.coords.latitude;
                // $scope.map.center.longitude = position.coords.longitude;
                // $scope.map.control.refresh({latitude: $scope.map.center.latitude, longitude: $scope.map.center.longitude});
            }, function(error) {
                switch(error.code) {
                    case error.PERMISSION_DENIED:
                        console.log("User denied the request for Geolocation.");
                        break;
                    case error.POSITION_UNAVAILABLE:
                        console.log("Location information is unavailable.");
                        break;
                    case error.TIMEOUT:
                        console.log("The request to get user location timed out.");
                        break;
                    default:
                        console.log("An unknown error occurred.");
                        break;
                }
            }, {enableHighAccuracy: true, timeout: 10000});
        }
    }

}]);