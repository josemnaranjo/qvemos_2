import { Sequelize } from "sequelize";

export const sequelize = new Sequelize("qvemos", "root", "josemnaranjoc", {
  host: "localhost",
  dialect: "mysql",
});
