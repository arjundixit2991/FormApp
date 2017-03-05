// /**
//  * Created by arjundixit on 1/31/17.
//  */
// 'use strict';
//
// /**
//  * Module dependencies.
//  */
//
// var path = require('path'),
//     UserSchema = require(path.resolve('./server/authentication/models/authentication.server.model.user')),
//     jwt = require('jsonwebtoken'),
//     defaults = require(path.resolve('./server/util/defaults')),
//     fs = require('fs'),
//     request = require('request');
//
// exports.register = function(req, res) {
//     if(!req.body.email || !req.body.password) {
//         res.json({ success: false, message: 'Please enter email and password.' });
//     } else {
//         var newUser = new UserSchema({
//             email: req.body.email,
//             password: req.body.password,
//             name: req.body.name
//         });
//
//         // Attempt to save the user
//         newUser.save(function(err) {
//             if (err) {
//                 return res.json({ success: false, message: 'Something went wrong! please goto: http://localhost:5000 to see the documentation.'});
//             }
//             res.json({ success: true, message: 'Successfully created new user.' });
//         });
//     }
// };
//
// exports.authenticate = function(req, res) {
//     UserSchema.findOne({
//         email: req.body.email
//     }, function(err, user) {
//         if (err) throw err;
//
//         if (!user) {
//             res.send({ success: false, message: 'Authentication failed. User not found.' });
//         } else {
//             user.comparePassword(req.body.password, function(err, isMatch) {
//                 if (isMatch && !err) {
//                     var token = jwt.sign(user, defaults.secret, {
//                         expiresIn: 10080
//                     });
//                     res.json({ success: true, token: 'JWT ' + token });
//                 } else {
//                     res.send({ success: false, message: 'Authentication failed. Passwords did not match.' });
//                 }
//             });
//         }
//     });
// };
//
// exports.call = function(req, res) {
//
// };
//
// exports.valiadate = function(req, res) {
//     res.send(req.user._id);
// };
