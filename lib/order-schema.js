/**
 * project JSDoc description
 * @module {Object} order-schema
 * @version 1.0.0
 * @author Thotino GOBIN-GANSOU
 * @requires bluebird
 * @requires mongoose
 */

"use strict";

//================================================================================
// dependencies
//================================================================================
const Promise = global.Promise = require("bluebird");
const mongoose = require("mongoose");
const lodash = require("lodash");

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
  invoiceDate: {
    type: Date,
  },
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
  figuresQuantity: {
    type: Number,
  },
  serialNumbersList: {
    type: [Schema.Types.ObjectId],
    ref: "figures",
  },

}, {
  collection: "orders",
  timestamps: true,
});

orderSchema.virtual("totalPrice").get(function () {
  let basePrice = 0;
  if (this.figuresQuantity < 50) {
    basePrice = this.figuresQuantity * 15;
  } else {
    basePrice = this.figuresQuantity * 9;
  }
  if (this.familyPack === true) {
    return basePrice * 0.2;
  }
  return basePrice;
});

orderSchema.statics.customCreation = function customCreation(orderData) {
  return Promise.try(() => {
    return this.find({userId: orderData.userId, orderDate: orderData.orderDate})
      .exec()
      .then((existingOrder) => {
        if (existingOrder && !lodash.isEmpty(existingOrder)) { return existingOrder; }
        return this.create(orderData);
      });
  });
};

orderSchema.statics.customUpdate = function customUpdate(orderId, orderData) {
  return Promise.try(() => {
    return this.findOneById(orderId)
      .exec()
      .then((existingOrder) => {
        if (!existingOrder || lodash.isEmpty(existingOrder)) { throw new Error(); }
        return this.findByIdAndUpdate(orderId, orderData, {"new": "true"})
          .exec()
          .then((data) => { return data; });
      });
  });
};
module.exports = mongoose.model("order", orderSchema);
