// Constantes Globales
const express = require('express');
const app = express();
const HOST = process.env.HOST || 'localhost';
const PORT = process.env.PORT || 3000;
const PATH = require('path');

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

//Pagina de Error
// app.get('*', (req, res) => {
//     res.sendFile(PATH.join(VIEWS_DIR, '404.html'));
// });

app.use((req, res, next) => {
	res.status(404).render('errores/404', {hojaCSS: '404'});
});

// Iniciar Servidor
app.listen(PORT, () => {
	console.log(`Servidor corriendo en: http://${HOST}:${PORT}`);
});
