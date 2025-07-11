import { RENDER_DATABASE_URL } from "./data";
import { Sequelize } from "sequelize";

let db: Sequelize | undefined;

if(RENDER_DATABASE_URL){
    db = new Sequelize(RENDER_DATABASE_URL);
}

export default db;