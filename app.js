// Constantes Globales
const express = require('express');
const app = express();
const HOST = process.env.HOST || 'localhost';
const PORT = process.env.PORT || 3000;
const PATH = require('path');

// Agrego methodOverride
const methodOverride = require('method-override');
app.use(methodOverride("_method"));

// Agrego JSON 
app.use(express.urlencoded({extended:true}));
app.use(express.json());

//Agrego EJS
app.set("view engine", "ejs")

// Carpeta Publica
const PUBLIC_DIR = PATH.join(__dirname, 'public');
app.use(express.static(PUBLIC_DIR));

// Carpeta de Archivos HTML
const VIEWS_DIR = PATH.join(__dirname, 'views');
app.set('views', VIEWS_DIR);

// Rutas
const generalRoute= require("./routes/generalRoute")
const productsRoute = require("./routes/productsRoute")
const cartRoute = require("./routes/cartRoute")
const usersRoute = require("./routes/usersRoute")

// Landing Page e Inicio
app.use("/", generalRoute) 

// Productos
app.use("/", productsRoute)

// Login y Registro
app.use("/", usersRoute) 

// Carrito de Compras
app.use("/", cartRoute) 

//Pagina de Error con JSON para los Datos
const fs = require('fs');
const productosJSON = PATH.resolve(__dirname, 'data/products.json');
const listaDeProductosObjeto = JSON.parse(fs.readFileSync(productosJSON, 'utf-8'));

app.use((req, res, next) => {
	res.status(404).render('errores/404', { hojaCSS: '404', listaDeProductos: listaDeProductosObjeto });
});

// Iniciar Servidor
app.listen(PORT, () => {
	console.log(`Servidor corriendo en: http://${HOST}:${PORT}`);
});
