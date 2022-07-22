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
		res.render('admin/productos/abmProductos', { hojaCSS: 'abmProductos', listaDeProductos: listaDeProductosObjeto});
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
			ancla: `${req.body.nombreProducto.toLowerCase()}-beer`
		};

		listaDeProductosObjeto.push(producto);
		fs.writeFileSync(productosJSON, JSON.stringify(listaDeProductosObjeto, null, ' '));
		res.redirect('abmProductos');
	},
	eliminarProducto: (req, res) => {
		
		const id = req.body.id;

		const producto = listaDeProductosObjeto.find((producto) => producto.id === id);
		const index = listaDeProductosObjeto.indexOf(producto);

		// Elimino el archivo de la imagen
		// fs.unlinkSync(`/images/productos/${producto.imagen}`)
		
		
		listaDeProductosObjeto.splice(index, 1);
		
		fs.writeFileSync(productosJSON, JSON.stringify(listaDeProductosObjeto, null, ' '));
		res.redirect('/admin/productos/abmProductos');

	}

};

module.exports = productsController;
