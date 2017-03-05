// /**
//  * Created by arjundixit on 1/31/17.
//  */
// 'use strict';
//
// /**
//  * Module dependencies
//  */
//
// var auth = require(__dirname+'/../controllers/authentication.server.controller');
//
// module.exports = function(app,passport) {
//
//     app.route('/api/register')
//         .post(auth.register);
//
//     app.route('/api/authenticate')
//         .post(auth.authenticate);
//
//     app.route('/api/call')
//         .post(auth.call);
//
//     app.route('/api/validate')
//         .get(passport.authenticate('jwt',{session:false}),auth.valiadate);
//
// };
