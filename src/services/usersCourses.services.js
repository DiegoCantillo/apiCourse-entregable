const UsersCourses = require('../models/users.courses.models');

class UsersCoursesServices {
    static async create(usersC) {
        try {
            const result = await UsersCourses.create(usersC);
            return result;
        } catch (error) {
            throw error
        }
    }
}

module.exports = UsersCoursesServices;