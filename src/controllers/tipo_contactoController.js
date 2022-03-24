const tipo_contactoController = {};

tipo_contactoController.list = (req, res) => {
    req.getConnection((err, conn) => {
        conn.query('SELECT * FROM tipo_contacto', (err, tipo_contactos) => {
            res.render('tipo_contactos', {
                data: tipo_contactos
            });
        });
    });
};


tipo_contactoController.create = (req, res) => {
    const data = req.body;
    req.getConnection((err, conn) => {
        conn.query('INSERT INTO tipo_contacto set ?', [data], (err, tipo_contacto) => {
            res.redirect('/tipo_contacto');
        })
    })
}

tipo_contactoController.edit = (req, res) => {
    const id = req.params.id;
    const data = req.body;
    req.getConnection((err, conn) => {
        conn.query('UPDATE tipo_contacto set ? WHERE id = ?', [data, id], (err, tipo_contacto) => {
            res.redirect('/tipo_contacto');
        })
    })
}

tipo_contactoController.update = (req, res) => {
    const id = req.params.id;
    req.getConnection((err, conn) => {
        conn.query('SELECT * FROM tipo_contacto WHERE id = ?', [id], (err, tipo_contacto) => {
            res.render('tipo_contacto_edit', {
                data: tipo_contacto[0]
            });
        })
    })
}

tipo_contactoController.delete = (req, res) => {
    const id = req.params.id;
    req.getConnection((err, conn) => {
        conn.query('DELETE FROM tipo_contacto WHERE id = ?', [id], (err, tipo_contacto) => {
            res.redirect('/tipo_contacto');
        })
    })
}

module.exports = tipo_contactoController;