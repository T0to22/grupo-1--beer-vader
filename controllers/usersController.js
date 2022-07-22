const fs = require('fs');
const PATH = require('path');

// Leo el JSON
const productosJSON = PATH.resolve(__dirname, '../data/products.json');
const listaDeProductosObjeto = JSON.parse(fs.readFileSync(productosJSON, 'utf-8'));

const usersController = {
    login: (req, res) => {
        res.render ("usuarios/login", {hojaCSS: "login", listaDeProductos: listaDeProductosObjeto});
    },
    register: (req, res) => {
        res.render ("usuarios/registro", {hojaCSS: "registro", listaDeProductos: listaDeProductosObjeto});
    }
} 

module.exports = usersController;