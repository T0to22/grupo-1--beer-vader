const usersController = {
    login: (req, res) => {
        res.render ("./usuarios/login", {hojaCSS: "login"})
    },
    register: (req, res) => {
        res.render ("./usuarios/registro", {hojaCSS: "registro"})
    }
} 

module.exports = usersController;