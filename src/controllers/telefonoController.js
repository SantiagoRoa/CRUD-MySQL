const telefonoController = {};

telefonoController.list = (req, res) => {
    req.getConnection((err, conn) => {
        conn.query('SELECT * FROM telefono', (err, telefonos) => {
            res.render('telefonos', {
                data: telefonos
            });
        });
    });
};


telefonoController.create = (req, res) => {
    const data = req.body;
    req.getConnection((err, conn) => {
        conn.query('INSERT INTO telefono set ?', [data], (err, telefono) => {
            res.redirect('/telefono');
        })
    })
}

telefonoController.edit = (req, res) => {
    const id = req.params.id;
    const data = req.body;
    req.getConnection((err, conn) => {
        conn.query('UPDATE telefono set ? WHERE idTelefono = ?', [data, id], (err, telefono) => {
            res.redirect('/telefono');
        })
    })
}

telefonoController.update = (req, res) => {
    const id = req.params.id;
    req.getConnection((err, conn) => {
        conn.query('SELECT * FROM telefono WHERE idTelefono = ?', [id], (err, telefono) => {
            res.render('telefono_edit', {
                data: telefono[0]
            });
        })
    })
}

telefonoController.delete = (req, res) => {
    const id = req.params.id;
    req.getConnection((err, conn) => {
        conn.query('DELETE FROM telefono WHERE idTelefono = ?', [id], (err, telefono) => {
            res.redirect('/telefono');
        })
    })
}

module.exports = telefonoController;