const { Router } = require('express');
const { getAllCourses, createCourses, updateCourses, getCategoriesAndVideos } = require('../controllers/courses.conrollers')

const router = Router();

router.get('/courses', getAllCourses);

router.get('/courses/:id/categoryAndVideos', getCategoriesAndVideos);

router.post('/courses', createCourses);

router.put('/courses/:id', updateCourses);


module.exports = router;

