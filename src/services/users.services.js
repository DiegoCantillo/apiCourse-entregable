const Users = require("../models/users.models");
const UsersCourse = require("../models/users.courses.models");
const Courses = require("../models/courses.models");
const { where } = require("sequelize");

class userServices {
  static async getAll() {
    try {
      const result = await Users.findAll({ attributes: ['firstName', 'lastName', 'email'] });
      return result;
    } catch (error) {
      throw error;
    }
  }

  static async userById(id) {
    try {
      const result = await Users.findOne({
        where: { id },
        attributes: ['firstName', 'lastName', 'email']
      });
      return result;
    } catch (error) {
      throw error;
    }
  }

  static async userWithTasks(id) {
    try {
      const result = await Users.findOne({
        where: { id },
        attributes: ['firstName', 'lastName', 'email'],
        include: {
          model: UsersCourse,
          as: 'course',
          attributes: ['courseId'],
          include: {
            model: Courses,
            as: 'course',
            attributes: ['title', 'description', 'instructor']
          }
        }
      });
      return result;
    } catch (error) {
      throw error
    }
  }

  static async userCreate(user) {
    try {
      const result = await Users.create(user);
      return result;
    } catch (error) {
      throw error;
    }
  }

  static async updateUser(id, field) {
    try {
      const result = await Users.update(field, { where: { id } });
      return result;
    } catch (error) {
      throw error;
    }
  }

  static async userDeleted(id) {
    try {
      const result = await Users.destroy({ where: { id } });
      return result;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = userServices;
