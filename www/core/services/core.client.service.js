/**
 * Created by arjundixit on 2/5/17.
 */

'use strict';
angular.module('core').factory('HTTPService', ['$resource', '$cookies', function($resource,$cookies) {
    return $resource('api/upload', { },{
        submit: {
            method: 'POST'
        },
        getAll:{
            method: 'GET',
            url: '/api/getAllRecords',
            isArray: true
        },
        signUp:{
            method: 'POST',
            url: '/api/register'
        },
        signIn:{
            method: 'POST',
            url: '/api/authenticate'
        }
    });
}]);
