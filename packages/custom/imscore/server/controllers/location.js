'use strict';

exports.all = function(req, res, next) {
    var showActive = req.query.active || false;
    return res.json([{name:'kolkata'}, {name:'Pune'}]);
};

exports.get = function(req, res, next, _id) {
    
    return res.json({name:'kolkata'})
}