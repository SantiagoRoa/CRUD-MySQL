const personaController = {};

personaController.list = (req, res) => {
    req.getConnection((err, conn) => {
        conn.query('SELECT * FROM persona', (err, personas) => {
            res.render('personas', {
                data: personas
            });
        });
    });
};


personaController.create = (req, res) => {
    const data = req.body;
    req.getConnection((err, conn) => {
        conn.query('INSERT INTO persona set ?', [data], (err, persona) => {
            res.redirect('/persona');
        })
    })
}

personaController.edit = (req, res) => {
    const id = req.params.id;
    const data = req.body;
    req.getConnection((err, conn) => {
        conn.query('UPDATE persona set ? WHERE documento = ?', [data, id], (err, persona) => {
            res.redirect('/persona');
        })
    })
}

personaController.update = (req, res) => {
    const id = req.params.id;
    req.getConnection((err, conn) => {
        conn.query('SELECT * FROM persona WHERE documento = ?', [id], (err, persona) => {
            res.render('persona_edit', {
                data: persona[0]
            });
        })
    })
}

personaController.delete = (req, res) => {
    const id = req.params.id;
    req.getConnection((err, conn) => {
        conn.query('DELETE FROM persona WHERE documento = ?', [id], (err, persona) => {
            res.redirect('/persona');
        })
    })
}

module.exports = personaController;