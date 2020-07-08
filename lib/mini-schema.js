/**
 * project JSDoc description
 * @module {Object} module name
 * @version 1.0.0
 * @author author name
 * @requires dependency 1
 * @requires dependency 2
 * ...
 */

"use strict";

//================================================================================
// dependencies
//================================================================================
const Promise = global.Promise = require("bluebird");
const mongoose = require("mongoose");

mongoose.Promise = global.Promise;
//================================================================================
// config
//================================================================================
/** import here configurations */

//================================================================================
// aliases
//================================================================================
const Schema = mongoose.Schema;
//================================================================================
// module
//================================================================================
const miniSchema = new Schema({
  serialNumber: {
    type: Schema.Types.ObjectId,
    unique: true,
  },
  ownerId: {
    type: Schema.Types.ObjectId,
    ref: "customers",
    required: true,
  },
  price: {
    type: Number,
    "default": 15.00,
  },
  vat: Number,
}, {
  collection: "figures",
  timestamps: true,
});

module.exports = mongoose.model("mini", miniSchema);
