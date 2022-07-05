const express = require('express');
const router = express.Router();

const cartController = require("../controllers/cartController")

router.get('/addtocart', cartController.addtocart)  
router.get('/checkout', cartController.checkout)  

module.exports = router 
