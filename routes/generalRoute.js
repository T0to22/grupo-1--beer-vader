const express = require('express');
const router = express.Router();

const generalController = require("../controllers/generalController")

router.get('/index', generalController.index)  
router.get('/landing', generalController.landing)  
router.get('*', generalController.error404)

module.exports = router 
