'use strict';

/**
 * Module dependencies.
 */
var mongoose  = require('mongoose'),
  Schema    = mongoose.Schema;  

/**
 * Location Schema
 */

var LocationSchema = new Schema({
    name : {
        type : String,
        required : true,
        unique : true
    },
    parentId : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'Location'
    }
});
mongoose.model('Location', LocationSchema);
