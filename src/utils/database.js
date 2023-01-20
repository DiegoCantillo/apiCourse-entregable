const { Sequelize } = require("sequelize");

const db = new Sequelize({
  database: "apicourse",
  username: "postgres",
  host: "localhost",
  port: "5432",
  password: "ruut",
  dialect: "postgres",
  logging: false,
});

module.exports = db;
