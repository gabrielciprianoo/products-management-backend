import express from "express";
import router from "./router";
import db from "./config/db";

async function conecctDB() {
  try {
    await db.authenticate();
    db.sync();
    console.log("conecction successful");
  } catch (error) {
    console.log("Error to connect database", error);
  }
}

const server = express();
conecctDB();

server.use("/", router);

export default server;
