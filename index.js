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
const miniModel = require("./lib/mini-schema");
const orderModel = require("./lib/order-schema");
const userModel = require("./lib/user-schema");

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
module.exports = {
    miniModel,
    orderModel,
    userModel,
}