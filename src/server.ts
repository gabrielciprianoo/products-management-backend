import express from "express";
import router from "./router";
import db from "./config/db";
import cors, { CorsOptions} from 'cors';
import morgan from 'morgan';
import swaggerUI from "swagger-ui-express";
import swaggerSpec from "./config/swagger";

async function conecctDB() {
  await db.authenticate();
  db.sync();
}

const server = express();
const corsOptions : CorsOptions = {
  origin: (origin, callback) => {
    if(origin !== process.env.FRONTEND_URL){
      callback(new Error('Connection Denied'),false);
      return;
    }
    callback(null, true);
  }
}

server.use(cors(corsOptions));

server.use(express.json());
server.use(morgan('dev'))
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
