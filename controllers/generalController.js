const generalController = {
    landing: (req, res) => {
        res.render ("landing", {hojaCSS: "landing"});
    },
    index: (req, res) => {
        res.render ('index', {hojaCSS: "inicio"});
    },
    error404: (req, res) => {
        res.render ("errores/404", {hojaCSS: "404"});
    }
}

module.exports = generalController