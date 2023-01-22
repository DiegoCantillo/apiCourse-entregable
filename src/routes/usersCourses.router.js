const { Router } = require('express');
const { createUserC } = require('../controllers/usersCourses.controller');

const router = Router();

router.post('/createUserC', createUserC);

module.exports = router;