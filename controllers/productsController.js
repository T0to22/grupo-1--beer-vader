const productsController = {
    productos: (req, res) => {
        res.render ("productos/productos", {hojaCSS: "productos"});
    },
    abmProductos: (req, res) => {
        res.render ("admin/productos/abmProductos", {hojaCSS: "abmProductos"});
    }
}

module.exports = productsController
