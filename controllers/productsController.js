const { v4: uuidv4 } = require("uuid");
const fs = require("fs");
const PATH = require("path");

// Leo el JSON
const productosJSON = PATH.resolve(__dirname, "../data/products.json");
const listaDeProductosObjeto = JSON.parse(
      fs.readFileSync(productosJSON, "utf-8")
);

const productsController = {
  productos: (req, res) => {
    res.render("productos/productos", {
      hojaCSS: "productos",
      listaDeProductos: listaDeProductosObjeto,
    });
  },
  abmProductos: (req, res) => {
    res.render("admin/productos/abmProductos", { hojaCSS: "abmProductos" });
  },
};

module.exports = productsController;
