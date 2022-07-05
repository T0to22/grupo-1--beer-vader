// Constantes Globales
const express = require('express');
const app = express();
const PATH = require('path');
const PORT = process.env.PORT || 3000;

//Set EJS como motor de plantillas
app.set('view engine', 'ejs');

//Agrego EJS
app.set("view engine", "ejs")

// Carpeta Publica
const PUBLIC_DIR = PATH.join(__dirname, 'public');
// Carpeta de Archivos HTML
const VIEWS_DIR = PATH.join(__dirname, 'views');
app.set('views', VIEWS_DIR);

// Rutas
const cartRoute = require("./routes/cartRoute")
const generalRoute= require("./routes/generalRoute")
const productsRoute = require("./routes/productsRoute")
const usersRoute = require("./routes/usersRoute")

// Landing Page
// app.get("/", (req, res) => {
//   res.sendFile(PATH.join(VIEWS_DIR, "landing.html"));
// });
app.use("/", generalRoute) 

// Inicio
// app.get('/inicio', (req, res) => {
// 	res.sendFile(PATH.join(VIEWS_DIR, 'inicio.html'));
// });
app.use("/index", generalRoute) 

// Productos
// app.get('/productos', (req, res) => {
// 	res.sendFile(PATH.join(VIEWS_DIR, 'productos.html'));
// });
app.use("/products", productsRoute) 

// Login
// app.get('/login', (req, res) => {
// 	res.sendFile(PATH.join(VIEWS_DIR, 'login.html'));
// });
app.use("/login", usersRoute) 


// Registro
// app.get('/registro', (req, res) => {
// 	res.sendFile(PATH.join(VIEWS_DIR, 'registro.html'));
// });
app.use("/register", usersRoute) 

// Seleccion de Cantidades de Producto
// app.get('/addtocart', (req, res) => {
// 	res.sendFile(PATH.join(VIEWS_DIR, 'addtocart.html'));
// });
app.use("/addtocart", cartRoute) 

// Checkout Carrito de Compras
// app.get('/checkout', (req, res) => {
// 	res.sendFile(PATH.join(VIEWS_DIR, 'checkout.html'));
// });
app.use("/checkout", cartRoute) 

//Pagina de Error
// app.get('*', (req, res) => {
//     res.sendFile(PATH.join(VIEWS_DIR, '404.html'));
// });
app.use("/404", generalRoute) 

// Iniciar Servidor
app.listen(PORT, () => {
	console.log(`Servidor corriendo en: http://localhost:${PORT}`);
});
