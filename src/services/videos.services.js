const Videos = require('../models/videos.models');

class videoServices {
    static async videoCreated(video) {
        try {
            const result = await Videos.create(video);
            return result
        } catch (error) {
            throw error
        }
    }

    static async videoDeleted(id) {
        try {
            const result = await Videos.destroy({ where: { id } });
            return result
        } catch (error) {
            throw error
        }
    }
}

module.exports = videoServices
