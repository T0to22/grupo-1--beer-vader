const express = require('express');
const router = express.Router();
const upload = require('../middlewares/multer');

const productsController = require("../controllers/productsController")

// Rutas de productos
router.get('/productos', productsController.listaProductos)
router.get('/admin/productos/abmProductos', productsController.abmProductos)

// Alta de productos
router.post('/admin/productos/nuevoProducto', upload.single('imagen'), productsController.nuevoProducto)

//Eliminar productos
router.delete('/admin/productos/eliminarProducto/:id', productsController.eliminarProducto)

module.exports = router
