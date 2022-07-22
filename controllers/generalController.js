const fs = require('fs');
const PATH = require('path');

// Leo el JSON
const productosJSON = PATH.resolve(__dirname, '../data/products.json');
const listaDeProductosObjeto = JSON.parse(fs.readFileSync(productosJSON, 'utf-8'));

const generalController = {
    landing: (req, res) => {
        res.render ("landing", {hojaCSS: "landing"});
    },
    index: (req, res) => {
        res.render ('index', {hojaCSS: "inicio", listaDeProductos: listaDeProductosObjeto});
    }
}

module.exports = generalController