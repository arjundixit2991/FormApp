// /**
//  * Created by adixit on 08/02/17.
//  */
//
// var JwtStrategy = require('passport-jwt').Strategy;
// var ExtractJwt = require('passport-jwt').ExtractJwt;
// var path = require('path');
// var User = require(path.resolve('./FormApp/server/authentication/models/authentication.server.model.user'));
// var defaults = require(path.resolve('./FormApp/server/util/defaults'));
//
// // Setup work and export for the JWT passport strategy
// module.exports = function(passport) {
//     var opts = {};
//     opts.jwtFromRequest = ExtractJwt.fromAuthHeader();
//     opts.secretOrKey = defaults.secret;
//     passport.use(new JwtStrategy(opts, function(jwt_payload, done) {
//         User.findOne({id: jwt_payload.id}, function(err, user) {
//             if (err) {
//                 return done(err, false);
//             }
//             if (user) {
//                 done(null, user);
//             } else {
//                 done(null, false);
//             }
//         });
//     }));
// };
