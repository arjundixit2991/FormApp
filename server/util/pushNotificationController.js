// /**
//  * Created by arjundixit on 2/5/17.
//  */
//
// var fs = require('fs'),
//     path = require('path'),
//     defaults = require(path.resolve('./server/util/defaults')),
//     apn = require('apn'),
//     gcm = require('node-gcm');
//
// exports.sendNotificationAPN = function(data, done) {
//     var options = {
//         token: {
//             key: path.resolve('./public/APNS/key.p8'),
//             keyId: defaults.apnkeyId,
//             teamId: defaults.apnteamId
//         },
//         production: true
//     };
//
//     var apnProvider = new apn.Provider(options);
//
//     var note = new apn.Notification();
//
//     note.expiry = Math.floor(Date.now() / 1000) + 3600; // Expires 1 hour from now.
//     note.badge = 3;
//     note.sound = "ping.aiff";
//     note.alert = "You have a new notification.";
//     note.payload = {'messageFrom': 'test'};
//     note.topic = 'com.block8.mystake';
//
//
//     var deviceToken = data.dt;
//     apnProvider.send(note, deviceToken).then(function(result) {
//         console.log(result);
//         done(result);
//     });
// };
//
// exports.sendNotificationGCM = function(data, done) {
//     var sender = new gcm.Sender(defaults.gcmAPIKey);
//
//     var message = new gcm.Message({
//         data: {
//             key1: 'You have a new notification.'
//         },
//         notification: {
//             title: "You have a new notification.",
//             icon: "ic_launcher",
//             body: "You have a new notification."
//         }
//     });
//
//     sender.send(message, { registrationTokens: data.dt }, function (err, response) {
//         if (err){
//             console.error(err);
//             done(err);
//         } else{
//             console.log(response);
//             done(response);
//         }
//     });
// };