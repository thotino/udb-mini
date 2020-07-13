/**
 * project JSDoc description
 * @module {Object} user-schema
 * @version 1.0.0
 * @author Thotino GOBIN-GANSOU
 * @requires bluebird
 * @requires mongoose
 * @requires fs-extra
 * @requires path
 */

"use strict";

//================================================================================
// dependencies
//================================================================================
const Promise = global.Promise = require("bluebird");
const mongoose = require("mongoose");

mongoose.Promise = global.Promise;
const fs = require("fs-extra");
const path = require("path");
//================================================================================
// config
//================================================================================
/** import here configurations */

//================================================================================
// aliases
//================================================================================
/** declare here local variables aliasing some of often used imports / conf options */

//================================================================================
// module
//================================================================================
const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  mailAdress: {
    type: String,
    required: true,
    unique: true,
  },
  registrationDate: {
    type: Date,
    "default": Date.now,
  },
}, {
  collection: "customers",
  timestamps: true,
});

userSchema.index({
  firstName: 1,
  lastName: 1,
  mailAdress: 1,
}, {unique: true});

userSchema.virtual("fullName").get(function () {
  return `${this.firstName} ${this.lastName}`;
});

userSchema.statics.customCreation = function customCreation(userObject) {
  return Promise.try(() => {
    return this.findOne({
      firstName: userObject.firstName,
      lastName: userObject.lastName,
      mailAdress: userObject.mailAdress,
    }).exec().then((existingUser) => {
      if (existingUser) { return existingUser; }
      return this.create(userObject);
    });
  });
};

module.exports = mongoose.model("user", userSchema);
