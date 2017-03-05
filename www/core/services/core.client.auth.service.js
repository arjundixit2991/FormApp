/**
 * Created by adixit on 03/03/17.
 */

(function () {
    'use strict';

    angular
        .module('core')
        .factory('AuthService', AuthService);

    AuthService.$inject = ['$cookies','$http'];

    function AuthService($cookies,$http) {
        return {
            isUserLoggedIn: function(next){
                $http({
                    method: 'GET',
                    url: '/api/validate',
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": $cookies.get("authToken")
                    }
                }).then(function(response) {
                    if (response == 'Unauthorized') {
                        next(false);
                    } else {
                        next(true);
                    }
                });
            },
            putToken: function(token){
                $cookies.put("authToken",token);
            },
            getToken: function(){
                return $cookies.get("authToken");
            }
        };
    }
})();