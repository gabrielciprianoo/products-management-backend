import express from "express";
import router from "./router";
import db from "./config/db";
import swaggerUI from "swagger-ui-express";
import swaggerSpec from "./config/swagger";

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

server.use(
  "/docs",
  swaggerUI.serve,
  swaggerUI.setup(swaggerSpec, {
    explorer: true,
  })
);

export default server;
