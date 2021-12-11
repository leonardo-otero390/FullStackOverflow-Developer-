"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
/* eslint-disable no-console */
var app_1 = __importDefault(require("./app"));
app_1["default"].listen(4000, function () {
    console.log("Server is listening on port ".concat(process.env.PORT));
    console.log("Server running at ".concat(process.env.NODE_ENV, " mode"));
});
