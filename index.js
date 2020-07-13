/**
 * project JSDoc description
 * @module {Object} index
 * @version 1.0.0
 * @author Thotino GOBIN-GANSOU
 * @requires ./lib/mini-schema
 * @requires ./lib/order-schema
 * @requires ./lib/user-schema
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

//================================================================================
// aliases
//================================================================================

//================================================================================
// module
//================================================================================
module.exports = {
  miniModel,
  orderModel,
  userModel,
};
