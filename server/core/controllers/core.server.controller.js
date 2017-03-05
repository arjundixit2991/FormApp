/**
 * Created by arjundixit on 1/31/17.
 */
'use strict';

/**
 * Module dependencies.
 */

var path = require('path'),
    defaults = require(path.resolve('./server/util/defaults')),
    request = require('request');


exports.showIndex = function(req, res) {
    res.sendFile(path.resolve('./www/core/views/core.client.view.html'));
};

exports.upload = function(req, res) {
    request.post({url:defaults.dbServer+'/api/write', form: req.body}, function(err,httpResponse,body){
        if(err){
            res.status(500).send("Internal server error.");
        }else{
            res.status(200).send(body);
        }
    });
};

exports.getAllRecords = function(req, res) {
    request(defaults.dbServer+'/api/get', function(err,httpResponse,body){
        if(err){
            res.status(500).send("Internal server error.");
        }else{
            res.status(200).send(body);
        }
    });
};
