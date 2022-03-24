const tomadorController = {};

tomadorController.list = (req, res) => {
    req.getConnection((err, conn) => {
        conn.query('SELECT * FROM tomador', (err, tomadores) => {
            res.render('tomadores', {
                data: tomadores
            });
        });
    });
};


tomadorController.create = (req, res) => {
    const data = req.body;
    req.getConnection((err, conn) => {
        conn.query('INSERT INTO tomador set ?', [data], (err, tomador) => {
            res.redirect('/tomador');
        })
    })
}

tomadorController.edit = (req, res) => {
    const id = req.params.id;
    const data = req.body;
    req.getConnection((err, conn) => {
        conn.query('UPDATE tomador set ? WHERE idDocTomador = ?', [data, id], (err, tomador) => {
            res.redirect('/tomador');
        })
    })
}

tomadorController.update = (req, res) => {
    const id = req.params.id;
    req.getConnection((err, conn) => {
        conn.query('SELECT * FROM tomador WHERE idDocTomador = ?', [id], (err, tomador) => {
            res.render('tomador_edit', {
                data: tomador[0]
            });
        })
    })
}

tomadorController.delete = (req, res) => {
    const id = req.params.id;
    req.getConnection((err, conn) => {
        conn.query('DELETE FROM tomador WHERE idDocTomador = ?', [id], (err, tomador) => {
            res.redirect('/tomador');
        })
    })
}

module.exports = tomadorController;