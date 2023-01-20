const db = require("../utils/database");
const { DataTypes } = require("sequelize");

const Videos = db.define("videos", {
  id: {
    primaryKey: true,
    type: DataTypes.INTEGER,
    allowNull: false,
    autoIncrement: true,
  },
  title: {
    type: DataTypes.STRING,
  },
  url: {
    type: DataTypes.STRING,
  },
  courseId: {
    type: DataTypes.INTEGER,
    field: "course_id",
  },
});

module.exports = Videos;
