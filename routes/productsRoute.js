const express = require('express');
const router = express.Router();

const productsController = require("../controllers/productsController")

router.get('/productos', productsController.productos)  
router.get('/admin/abmProductos', productsController.abmProductos)

module.exports = router
