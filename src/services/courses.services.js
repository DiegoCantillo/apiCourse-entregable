const Categories = require('../models/categories.models');
const Courses = require('../models/courses.models');
const Videos = require('../models/videos.models');

class coursesServices {

    static async allCourses() {
        try {
            const result = await Courses.findAll();
            return result;
        } catch (error) {
            throw error;
        }
    };

    static async getCategoriesAndVideos(id) {
        try {
            const result = await Courses.findOne({
                where: { id },
                include: [{
                    model: Categories,
                    as: 'category',
                    attributes: ['name']
                }, {
                    model: Videos,
                    as: "video",
                    attributes: ['url']
                }],
            })
            return result
        } catch (error) {
            throw error
        }
    }

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