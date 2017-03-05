/**
 * Created by chicmic on 02/03/17.
 */

angular.module('core').config(['$stateProvider','$locationProvider',function($stateProvider){

    $stateProvider
        .state('add_data', {
            url: '/register',
            templateUrl: '/www/core/views/authentication/core.client.adddata.html',
            controller : 'CoreController'
        })
        .state('view_data', {
            url : '/signin',
            templateUrl : '/www/core/views/authentication/core.client.viewdata.html',
            controller : 'CoreController'
        })
        .state('map', {
            url : '/map',
            templateUrl : '/www/core/views/authentication/core.client.map.html',
            controller : 'CoreController'
        });

}]);
