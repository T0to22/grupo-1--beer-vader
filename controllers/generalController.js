const generalController = {
    index: (req, res) => {
        res.render ("index")
    },
    landing: (req, res) => {
        res.render ("landing")
    },
    error404: (req, res) => {
        res.render ("404")
    }
} 