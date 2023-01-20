const videoServices = require('../services/videos.services');

const createVideos = async (req, res) => {
    try {
        const newVideo = req.body;
        const result = await videoServices.videoCreated(newVideo);
        res.status(201).json(result);
    } catch (error) {
        res.status(400).json(error.message)
    }
}

const deleteVideos = async (req, res) => {
    try {
        const { id } = req.params;
        const result = await videoServices.videoDeleted(id)
        res.json(result)
    } catch (error) {
        res.status(400).json(error.message)
    }
}

module.exports = {
    createVideos,
    deleteVideos,
}