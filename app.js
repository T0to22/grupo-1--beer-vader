// Constantes Globales
const EXPRESS = require('express');
const APP = EXPRESS();
const PATH = require('path');
const PORT = process.env.PORT || 3000;

//Carpeta Publica
const PUBLIC_DIR = PATH.join(__dirname, 'public');
APP.use(EXPRESS.static(PUBLIC_DIR));

//Carpeta de Archivos HTML
const VIEWS_DIR = PATH.join(__dirname, 'views');
APP.set('views', VIEWS_DIR);

//Rutas
//Landing Page
APP.get('/', (req, res) => {
	res.sendFile(PATH.join(VIEWS_DIR, 'index.html'));
});

//Productos
APP.get('/productos', (req, res) => {
	res.sendFile(PATH.join(VIEWS_DIR, 'productos.html'));
});

//Login
APP.get('/login', (req, res) => {
	res.sendFile(PATH.join(VIEWS_DIR, 'login.html'));
});

//Registro
APP.get('/registro', (req, res) => {
	res.sendFile(PATH.join(VIEWS_DIR, 'registro.html'));
});

//Seleccion de Cantidades de Producto
APP.get('/addtocart', (req, res) => {
	res.sendFile(PATH.join(VIEWS_DIR, 'addtocart.html'));
});

//Checkout Carrito de Compras
APP.get('/checkout', (req, res) => {
	res.sendFile(PATH.join(VIEWS_DIR, 'checkout.html'));
});

//Pagina de Error
APP.get('/inicio', (req, res) => {
    res.sendFile(PATH.join(VIEWS_DIR, 'inicio.html'));
}
);

//Iniciar Servidor
APP.listen(PORT, () => {
	console.log(`Servidor corriendo en: http://localhost:${PORT}`);
});