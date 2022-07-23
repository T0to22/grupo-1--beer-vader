const express = require('express');
const router = express.Router();

// Multer
const upload = require('../middlewares/multer');
// const upload = multer.single('imagen');

const productsController = require('../controllers/productsController');

// Rutas de productos
router.get('/productos', productsController.listaProductos);
router.get('/admin/productos/abmProductos', productsController.abmProductos);

// Alta de producto
router.post('/admin/productos/nuevoProducto', upload.single('imagen'), productsController.nuevoProducto);

//Eliminar producto
router.delete('/admin/productos/eliminarProducto/:id', productsController.eliminarProducto);

// Editar producto
router.get('/admin/productos/editarProducto/:id', productsController.editarProducto);
// router.put('/admin/productos/guardarProducto/:id', upload.single('imagen'), productsController.guardarEdicionProducto)

// router.put('/admin/productos/guardarProducto/:id', (req, res) => {
// 	upload(req, res, function (err) {
		
//         if (err) {
// 			// An unknown error occurred when uploading.
// 			req.body.titulo = 'Error';
// 			req.body.mensaje = 'El archivo elegido no es una imagen';
// 			req.body.descripcion = 'El Emperador solo permite archivos JPG, PNG o JPEG.';

//             return res.redirect(productsController.errorArchivo(req, res));
            
//         }
        
// 		// Everything went fine.
//         res.send(productsController.guardarEdicionProducto(req, res));
// 	});
// });

router.put('/admin/productos/guardarProducto/:id', upload.single('imagen'), (req, res, next) => {

    const archivo = req.file;

    if (archivo) {

        let extensionArchivo = archivo.filename.split('.').pop().toLowerCase().toString();
        let extensionesPermitidas = ['jpg', 'png', 'jpeg'];
        
        if (!extensionesPermitidas.includes(extensionArchivo)) {

            req.body.titulo = 'Error';
            req.body.mensaje = 'El archivo elegido no es una imagen valida';
            req.body.descripcion = 'El Emperador solo permite archivos JPG, PNG o JPEG y te recomienda que sean PNG con fondo transparente.';

            return next(res.send(productsController.errorArchivo(req, res)))
        }

    }

    res.send(productsController.guardarEdicionProducto(req, res));

});

module.exports = router;
