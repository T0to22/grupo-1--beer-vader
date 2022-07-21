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
		res.render('admin/productos/abmProductos', { hojaCSS: 'abmProductos' });
	},
	nuevoProducto: (req, res) => {
		const producto = {
			id: uuidv4(),
			nombre: req.body.nombre,
			precio: req.body.precio,
			descripcion: req.body.descripcion,
			imagen: req.file.filename
		};
		listaDeProductosObjeto.push(producto);
		fs.writeFileSync(productosJSON, JSON.stringify(listaDeProductosObjeto, null, ' '));
		res.redirect('admin/productos/abmProductos');
	}
};

module.exports = productsController;
