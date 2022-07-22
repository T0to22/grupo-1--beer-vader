const fs = require('fs');
const PATH = require('path');

// Leo el JSON
const productosJSON = PATH.resolve(__dirname, '../data/products.json');
const listaDeProductosObjeto = JSON.parse(fs.readFileSync(productosJSON, 'utf-8'));

const cartController = {
	addtocart: (req, res) => {

		let productoId = req.params.id;
		let producto = listaDeProductosObjeto.find((producto) => producto.id == productoId);
		res.render('carrito/addtocart', {hojaCSS: 'addtocart', producto: producto, listaDeProductos: listaDeProductosObjeto});
	},
	checkout: (req, res) => {
		res.render('carrito/checkout', {hojaCSS: 'checkout', listaDeProductos: listaDeProductosObjeto});
	}
};

module.exports = cartController;