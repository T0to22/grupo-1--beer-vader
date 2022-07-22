const express = require('express');
const router = express.Router();

const generalController = require("../controllers/generalController")

router.get('/', generalController.landing)  
router.get('/inicio', generalController.index)

module.exports = router
