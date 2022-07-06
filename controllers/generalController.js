const generalController = {
    landing: (req, res) => {
        res.render ("landing", {hojaCSS: "landing"});
    },
    index: (req, res) => {
        res.render ('index', {hojaCSS: "inicio"});
    }
}

module.exports = generalController