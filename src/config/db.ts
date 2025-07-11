import Product from "../models/Product.model";
import { RENDER_DATABASE_URL } from "./data";
import { Sequelize } from "sequelize-typescript";

const db = new Sequelize(RENDER_DATABASE_URL!, {
    models:  [ __dirname + '../models/**/*.ts' ]
});

db.addModels([Product])

export default db;
