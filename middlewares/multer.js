const path = require('path');
const multer = require('multer');

const storage = multer.diskStorage({
	destination: (req, file, cb) => {
		cb(null, path.join(__dirname, '../public/images/productos'));
	},
	filename: (req, file, cb) => {
		let nameFile = Date.now() + path.extname(file.originalname);
		cb(null, nameFile);
	}
});

// const upload = multer({ storage });

const upload = multer({
	storage,
	fileFilter(req, file, cb) {
		const ext = path.extname(file.originalname).toLowerCase();
		if (ext !== '.png' && ext !== '.jpg' && ext !== '.jpeg') {

			req.body.titulo = 'Error';
            req.body.mensaje = 'El archivo elegido no es una imagen';
            req.body.descripcion = 'El Emperador solo permite archivos JPG, PNG o JPEG.'
    
            // cb(res.send(productsController.errorArchivo(req,res)), false)

			cb(new Error('Error: Unacceptable file format'), false);
		} else {
			cb(null, true);
		}
	}
});

module.exports = upload;
