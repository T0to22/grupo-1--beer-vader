const express = require('express');
const router = express.Router();
const upload = require('../middlewares/multer');

const productsController = require("../controllers/productsController")

// Rutas de productos
router.get('/productos', productsController.listaProductos)
router.get('/admin/productos/abmProductos', productsController.abmProductos)

// Alta de producto
router.post('/admin/productos/nuevoProducto', upload.single('imagen'), productsController.nuevoProducto)

//Eliminar producto
router.delete('/admin/productos/eliminarProducto/:id', productsController.eliminarProducto)

// Editar producto
router.get('/admin/productos/editarProducto/:id', productsController.editarProducto)
// router.put('/admin/productos/guardarProducto/:id', upload.single('imagen'), productsController.guardarEdicionProducto)

router.put('/admin/productos/guardarProducto/:id', upload.single('imagen'), (req, res, next) => {
	const archivo = req.file;

    if (archivo) {
        
        let extensionArchivo = archivo.filename.split('.').pop();

        console.log(extensionArchivo);

        if (extensionArchivo != 'jpg' || extensionArchivo != 'png' || extensionArchivo != 'jpeg') {
            
            req.body.titulo = 'Error';
            req.body.mensaje = 'El archivo elegido no es una imagen';
            req.body.descripcion = 'El Emperador solo permite archivos JPG, PNG o JPEG.'
    
            next(res.send(productsController.errorArchivo(req,res)))
        }

    }

    res.send(productsController.guardarEdicionProducto(req, res));
    
});

module.exports = router
