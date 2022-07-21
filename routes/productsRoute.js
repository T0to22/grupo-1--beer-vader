const express = require('express');
const router = express.Router();
const upload = require('../middlewares/multer');

const productsController = require("../controllers/productsController")

// Rutas de productos
router.get('/productos', productsController.listaProductos)
router.get('/admin/productos/abmProductos', productsController.abmProductos)

// Alta de productos
router.get('/nuevoProducto', upload.single('image'), productsController.nuevoProducto)

module.exports = router
