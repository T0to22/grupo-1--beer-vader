const cartController = {
	addtocart: (req, res) => {
		res.render('./carrito/addtocart');
	},
	checkout: (req, res) => {
		res.render('./carrito/checkout');
	}
};

module.exports = cartController;