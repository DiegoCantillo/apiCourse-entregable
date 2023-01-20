const { Router } = require('express');
const { getAllCourses, createCourses, updateCourses } = require('../controllers/courses.conrollers')

const router = Router();

router.get('/courses', getAllCourses);

router.post('/courses', createCourses);

router.put('/courses/:id', updateCourses)

module.exports = router;

