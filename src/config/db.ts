import { RENDER_DATABASE_URL } from "./data";
import { Sequelize } from "sequelize";

const db = new Sequelize(RENDER_DATABASE_URL!);

export default db;
