"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var dotenv_1 = __importDefault(require("dotenv"));
var envFile = '.env.test';
if (process.env.NODE_ENV === 'prod')
    envFile = '.env';
if (process.env.NODE_ENV === 'dev')
    envFile = '.env.dev';
dotenv_1["default"].config({
    path: envFile
});
