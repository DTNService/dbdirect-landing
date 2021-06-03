import express, {Request, Response, NextFunction} from 'express';
import createError from 'http-errors';
import path from 'path';
import config from "./config/vars";
import app from "./config/express";

console.log("PROCESS.ENV.PORT : ", config.port);

app.listen(config.port || 3000, async () => {
  console.log('server on!')
});

module.exports = app;