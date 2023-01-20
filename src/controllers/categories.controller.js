const categoriesServices = require('../services/categories.services');

const createCategories = async (req, res) => {
    try {
        const newCategory = req.body;
        const result = await categoriesServices.categoryCreated(newCategory)
        res.status(201).json(result);
    } catch (error) {
        req.status(400).json(error.message)
    };
};

const deleteCategories = async (req, res) => {
    try {
        const { id } = req.params;
        const result = await categoriesServices.categoryDeleted(id);
        res.json(result);
    } catch (error) {
        res.status(400).json(error.message);
    };
};

module.exports = {
    createCategories,
    deleteCategories,
}