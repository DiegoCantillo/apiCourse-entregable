const coursesServices = require('../services/courses.services');

const getAllCourses = async (req, res) => {
    try {
        const result = await coursesServices.allCourses();
        res.json(result);
    } catch (error) {
        res.status(400).json(error.messaje)
    };
};

const createCourses = async (req, res) => {
    try {
        const newCourse = req.body;
        const result = await coursesServices.coursesCreated(newCourse);
        res.status(201).json(result);
    } catch (error) {
        res.status(400).json(error.messaje);
    }
};

const updateCourses = async (req, res) => {
    try {
        const { id } = req.params;
        const field = req.body;
        const result = await coursesServices.coursesUpdated(id, field);
        res.json(result)
    } catch (error) {
        res.status(400).json(error.messaje);
    }
};

module.exports = {
    getAllCourses,
    createCourses,
    updateCourses
}