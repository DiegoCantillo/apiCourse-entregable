const Categories = require("./categories.models");
const Courses = require("./courses.models");
const UsersCourses = require("./users.courses.models");
const Users = require("./users.models");
const Videos = require("./videos.models");

const initModels = () => {
  UsersCourses.belongsTo(Users, { as: "author", foreignKey: "user_id" });
  Users.hasMany(UsersCourses, { as: "course", foreignKey: "user_id" });
  UsersCourses.belongsTo(Courses, { as: "course", foreignKey: "course_id" });
  Courses.hasMany(UsersCourses, { as: "author", foreignKey: "course_id" });

  Categories.belongsTo(Courses, { as: "category", foreignKey: "course_id" });
  Courses.hasMany(Categories, { as: "categories", foreignKey: "course_id" });

  Videos.belongsTo(Courses, { as: "courses", foreignKey: "course_id" });
  Courses.hasMany(Videos, { as: "videos", foreignKey: "course_id" });
};

module.exports = initModels;
