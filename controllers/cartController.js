const cartController = {
	addtocart: (req, res) => {
		res.render('carrito/addtocart', {hojaCSS: 'addtocart'});
	},
	checkout: (req, res) => {
		res.render('carrito/checkout', {hojaCSS: 'checkout'});
	}
};

module.exports = cartController;