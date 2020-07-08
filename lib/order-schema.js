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
const orderSchema = new Schema({
  userId: {
    type: Schema.Types.ObjectId,
    ref: "customers",
    required: true,
  },
  orderDate: {
    type: Date,
    "default": Date.now,
  },
  invoiceDate: {type: Date},
  orderStatus: {
    type: String,
    "enum": [
      "being processed",
      "out for delivery",
      "delivered",
    ],
  },
  familyPack: {
    type: Boolean,
    "default": false,
  },
  figuresQuantity: {type: Number},
  serialNumbersList: {
    type: [Schema.Types.ObjectId],
    ref: "figures",
  },
  totalPrice: {type: Number},
}, {collection: "customers"});

module.exports = mongoose.model("order", orderSchema);
