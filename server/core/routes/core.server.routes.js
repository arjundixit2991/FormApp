/**
 * Created by arjundixit on 1/31/17.
 */
'use strict';

/**
 * Module dependencies
 */

var passport = require('passport');
var core = require('../controllers/core.server.controller');

module.exports = function(app) {
    
    app.route('/')
        .get(core.showIndex);

    app.route('/api/upload')
        .post(core.upload);

    app.route('/api/getAllRecords')
        .get(core.getAllRecords);

};
