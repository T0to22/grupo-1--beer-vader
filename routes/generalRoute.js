const express = require('express');
const router = express.Router();

const generalController = require("../controllers/generalController")

router.get('/', generalController.landing)  
router.get('/inicio', generalController.index)
router.get('*', generalController.error404)

module.exports = router 
