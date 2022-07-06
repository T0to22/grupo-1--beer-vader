const usersController = {
    login: (req, res) => {
        res.render ("./usuarios/login")
    },
    register: (req, res) => {
        res.render ("./usuarios/registro")
    }
} 