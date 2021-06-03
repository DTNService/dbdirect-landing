"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var path_1 = __importDefault(require("path"));
require("dotenv-safe").config({
    allowEmptyValues: true,
    path: path_1.default.join(__dirname, "../../.env"),
    sample: path_1.default.join(__dirname, "../../.env.example")
});
var config = {
    env: process.env.NODE_ENV,
    port: process.env.PORT,
};
exports.default = config;
