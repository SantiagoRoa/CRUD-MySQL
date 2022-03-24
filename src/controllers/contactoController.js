const contactoController = {};

contactoController.list = (req, res) => {
    req.getConnection((err, conn) => {
        conn.query('SELECT * FROM contacto', (err, contactos) => {
            res.render('contactos', {
                data: contactos
            });
        });
    });
};


contactoController.create = (req, res) => {
    const data = req.body;
    req.getConnection((err, conn) => {
        conn.query('INSERT INTO contacto set ?', [data], (err, contactos) => {
            res.redirect('/contacto');
        })
    })
}

contactoController.edit = (req, res) => {
    const id = req.params.id;
    const data = req.body;
    req.getConnection((err, conn) => {
        conn.query('UPDATE contacto set ? WHERE id = ?', [data, id], (err, contacto) => {
            res.redirect('/contacto');
        })
    })
}

contactoController.update = (req, res) => {
    const id = req.params.id;
    req.getConnection((err, conn) => {
        conn.query('SELECT * FROM contacto WHERE id = ?', [id], (err, contacto) => {
            res.render('contacto_edit', {
                data: contacto[0]
            });
        })
    })
}

contactoController.delete = (req, res) => {
    const id = req.params.id;
    req.getConnection((err, conn) => {
        conn.query('DELETE FROM contacto WHERE id = ?', [id], (err, contacto) => {
            res.redirect('/contacto');
        })
    })
}

module.exports = contactoController;