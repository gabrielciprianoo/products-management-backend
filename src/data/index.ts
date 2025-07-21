import { exit } from "node:process";
import db from "../config/db";
import colors from "colors";

const clearBD = async () => {
  try {
    await db.sync({ force: true });
    console.log(colors.bgGreen.white("Database Has Been Cleaned"));
    exit();
  } catch (error) {
    console.log(colors.bgRed.white("Error to clear database"), error);
    exit(1);
  }
};

if (process.argv[2] == "--clear") {
  clearBD();
}
