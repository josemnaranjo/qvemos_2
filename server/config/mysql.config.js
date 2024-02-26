import { Sequelize } from "sequelize";

export const sequelize = new Sequelize("q_vemos", "root", "josemnaranjoc", {
  host: "localhost",
  dialect: "mysql",
});
