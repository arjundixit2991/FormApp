/**
 * Created by arjundixit on 1/31/17.
 */

var express = require('express'),
    app = express(),
    bodyParser = require('body-parser'),
    //mongoController = require(__dirname+'/server/util/mongoDB'),
    defaults = require(__dirname+'/server/util/defaults'),
    //passport = require('passport'),
    path = require('path'),
    morgan = require('morgan');

app.use(express.static(__dirname));
app.use(express.static(__dirname + '/public'));  
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
//app.use(passport.initialize());
app.use(morgan('dev'));

//require(path.resolve('./server/util/passport'))(passport);
require(path.resolve('./server/core/routes/core.server.routes'))(app);
//require(path.resolve('./server/authentication/routes/authentication.server.routes'))(app,passport);

// mongoController.connect(defaults.dbURL, function(err) {
//   if (err) {
//     console.log('Unable to connect to Mongo.');
//     process.exit(1)
//   } else {
    app.listen(5000, function() {
      console.log('Parking app running on port: ', 5000);
    });
//   }
// });
