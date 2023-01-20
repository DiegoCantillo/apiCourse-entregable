const { Router } = require('express')
const { createVideos, deleteVideos } = require('../controllers/videos.controllers');


const router = Router();

router.post('/video', createVideos);

router.delete('/video/:id', deleteVideos);

module.exports = router