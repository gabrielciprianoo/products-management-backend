import express from "express";
import router from "./router";
import db from "./config/db";

async function conecctDB() {
  await db.authenticate();
  db.sync();
}

const server = express();
server.use(express.json());
conecctDB();

server.use("/", router);

server.get("/api", (req, res) => {
  res.json({ msg: "Desde API" });
});

export default server;
