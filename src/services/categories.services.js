const Categories = require('../models/categories.models');

class categoriesServices {

    static async categoryCreated(category) {
        try {
            const result = Categories.create(category);
            return result
        } catch (error) {
            throw error
        }
    };

    static async categoryDeleted(id) {
        try {
            const result = await Categories.destroy({ where: { id } });
            return result
        } catch (error) {
            throw error;
        }
    };

};

module.exports = categoriesServices;