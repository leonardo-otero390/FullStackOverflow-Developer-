"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
require("../setup");
var pg_1 = __importDefault(require("pg"));
var Pool = pg_1["default"].Pool;
var config = {
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    port: Number(process.env.DB_PORT),
    host: process.env.DB_HOST,
    database: process.env.DB_NAME
};
if (process.env.NODE_ENV === 'prod') {
    config = {
        connectionString: process.env.DATABASE_URL,
        ssl: {
            rejectUnauthorized: false
        }
    };
}
var connection = new Pool(config);
exports["default"] = connection;
