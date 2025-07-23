import Product from "../models/Product.model";
import { Sequelize } from "sequelize-typescript";
import dotenv from 'dotenv';

dotenv.config({
  debug: false,
  quiet: true 
});


const db = new Sequelize(process.env.RENDER_DATABASE_URL!, {
    models:  [ __dirname + '../models/**/*.ts' ],
    logging: false
});

db.addModels([Product])

export default db;
