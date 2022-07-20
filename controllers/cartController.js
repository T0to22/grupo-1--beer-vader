const fs = require("fs");
const PATH = require("path");

// Leo el JSON
const productosJSON = PATH.resolve(__dirname, "../data/products.json");
const listaDeProductosObjeto = JSON.parse(
      fs.readFileSync(productosJSON, "utf-8")
);

const cartController = {
	addtocart: (req, res) => {

		let productId = req.params.id;
		let producto = listaDeProductosObjeto.find((producto) => producto.id == productId);
		res.render('carrito/addtocart', {hojaCSS: 'addtocart', producto: producto});
	},
	checkout: (req, res) => {
		res.render('carrito/checkout', {hojaCSS: 'checkout'});
	}
};

module.exports = cartController;