const { v4: uuidv4 } = require('uuid');
const fs = require('fs');
const PATH = require('path');

// Leo el JSON
const productosJSON = PATH.resolve(__dirname, '../data/products.json');
const listaDeProductosObjeto = JSON.parse(fs.readFileSync(productosJSON, 'utf-8'));

const productsController = {
	listaProductos: (req, res) => {
		res.render('productos/productos', {
			hojaCSS: 'productos',
			listaDeProductos: listaDeProductosObjeto
		});
	},
	abmProductos: (req, res) => {
		res.render('admin/productos/abmProductos', {
			hojaCSS: 'abmProductos',
			listaDeProductos: listaDeProductosObjeto
		});
	},
	nuevoProducto: (req, res) => {
		const producto = {
			id: uuidv4(),
			nombre: req.body.nombreProducto,
			tipo: req.body.tipoProducto,
			descripcion: req.body.descripcionProducto,
			aroma: req.body.aromaProducto,
			sabor: req.body.saborProducto,
			ibu: parseInt(req.body.ibuProducto),
			abv: parseInt(req.body.abvProducto),
			precio: parseFloat(req.body.precioProducto).toFixed(2),
			imagen: req.file.filename,
			stock: parseInt(req.body.cantidadStockInicial),
			ancla: `${req.body.nombreProducto.toLowerCase().split(' ').join('')}-beer`
		};

		listaDeProductosObjeto.push(producto);
		fs.writeFileSync(productosJSON, JSON.stringify(listaDeProductosObjeto, null, ' '));
		res.redirect('abmProductos');
	},
	eliminarProducto: (req, res) => {
		let productoId = req.params.id;
		let producto = listaDeProductosObjeto.find(producto => producto.id == productoId);

		// Elimino el archivo de la imagen
		let pathImagen = PATH.resolve(__dirname, `../public/images/productos/${producto.imagen}`);
		if (fs.existsSync(pathImagen)) {
			fs.unlinkSync(pathImagen);
		}

		// Elimino el producto de la lista de productos
		const index = listaDeProductosObjeto.indexOf(producto);
		listaDeProductosObjeto.splice(index, 1);

		// Guardo el cambio en el JSON
		fs.writeFileSync(productosJSON, JSON.stringify(listaDeProductosObjeto, null, ' '));
		res.redirect('/admin/productos/abmProductos');
	},
	editarProducto: (req, res) => {
		let productoId = req.params.id;
		let producto = listaDeProductosObjeto.find(producto => producto.id == productoId);

		res.render('admin/productos/editarProducto', {
			hojaCSS: 'editarProducto',
			producto: producto,
			listaDeProductos: listaDeProductosObjeto
		});
	},
	guardarEdicionProducto: (req, res) => {
		let productoId = req.params.id;
		let producto = listaDeProductosObjeto.find(producto => producto.id == productoId);

		// Elimino el archivo de la imagen
		let pathImagen = PATH.resolve(__dirname, `../public/images/productos/${producto.imagen}`);

		// Si se cambio la imagen, la elimino
		if (req.file) {
			if (fs.existsSync(pathImagen)) {
				fs.unlinkSync(pathImagen);
			}
		}

		// Actualizo el producto
		producto.nombre = req.body.nombreProducto;
		producto.tipo = req.body.tipoProducto;
		producto.descripcion = req.body.descripcionProducto;
		producto.aroma = req.body.aromaProducto;
		producto.sabor = req.body.saborProducto;
		producto.ibu = parseInt(req.body.ibuProducto);
		producto.abv = parseInt(req.body.abvProducto);
		producto.precio = parseFloat(req.body.precioProducto).toFixed(2);
		producto.stock = parseInt(req.body.cantidadItemProducto);
		producto.imagen = req.file ? req.file.filename : producto.imagen;
		producto.ancla = `${req.body.nombreProducto.toLowerCase().split(' ').join('')}-beer`;

		// Guardo el cambio en el JSON
		fs.writeFileSync(productosJSON, JSON.stringify(listaDeProductosObjeto, null, ' '));

		res.redirect('/admin/productos/abmProductos');
	},
	errorArchivo: (req, res) => {
		
		let error = req.body;

		// Elimino el archivo de la imagen
		if (req.file) {
			
			let pathImagen = PATH.resolve(__dirname, `../public/images/productos/${req.file.filename}`);
			
			if (fs.existsSync(pathImagen)) {
				fs.unlinkSync(pathImagen);
			}
		}

		res.render('errores/archivos', {
			hojaCSS: 'archivos',
			error: error
		});
	}
};

module.exports = productsController;
