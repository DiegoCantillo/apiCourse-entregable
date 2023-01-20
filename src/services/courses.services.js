const Courses = require('../models/courses.models');

class coursesServices {

    static async allCourses() {
        try {
            const result = await Courses.findAll();
            return result;
        } catch (error) {
            throw error;
        }
    };

    static async coursesCreated(course) {
        try {
            const result = await Courses.create(course);
            return result;
        } catch (error) {
            throw error
        }
    }

    static async coursesUpdated(id, field) {
        try {
            const result = Courses.update(field, { where: { id } })
            return result
        } catch (error) {
            throw error
        }
    }
};

module.exports = coursesServices