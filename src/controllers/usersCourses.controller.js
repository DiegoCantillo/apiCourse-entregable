const UsersCoursesServices = require('../services/usersCourses.services');

const createUserC = async (req, res) => {
    try {
        const usersC = req.body;
        const result = await UsersCoursesServices.create(usersC);
        res.status(201).json(result);
    } catch (error) {
        res.status(400).json(error.message);
    }
}



module.exports = {
    createUserC
}