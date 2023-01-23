const coursesServices = require('../services/courses.services');

const getAllCourses = async (req, res) => {
    try {
        const result = await coursesServices.allCourses();
        res.json(result);
    } catch (error) {
        res.status(400).json(error.message)
    };
};

const getCategoriesAndVideos = async (req, res) => {
    try {
        const { id } = req.params;
        const result = await coursesServices.getCategoriesAndVideos(id);
        res.json(result);
    } catch (error) {
        res.status(400).json(error.message)
    }
}

const createCourses = async (req, res) => {
    try {
        const newCourse = req.body;
        const result = await coursesServices.coursesCreated(newCourse);
        res.status(201).json(result);
    } catch (error) {
        res.status(400).json(error.message);
    }
};

const updateCourses = async (req, res) => {
    try {
        const { id } = req.params;
        const { description } = req.body;
        const field = { description };
        const result = await coursesServices.coursesUpdated(id, field);
        res.json(result)
    } catch (error) {
        res.status(400).json(error.message);
    }
};

module.exports = {
    getAllCourses,
    createCourses,
    updateCourses,
    getCategoriesAndVideos
}