import express from "express";
import router from "./router";
import db from "./config/db";
import colors from 'colors';

async function conecctDB() {
  try {
    await db.authenticate();
    db.sync();
    console.log( colors.bgGreen.white("conecction successful") );
  } catch (error) {
    console.log( colors.bgRed.white("connecction error to database"), error );
  }
}

const server = express();
conecctDB();

server.use("/", router);

export default server;
