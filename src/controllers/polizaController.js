const polizaController = {};

polizaController.list = (req, res) => {
    req.getConnection((err, conn) => {
        conn.query('SELECT * FROM poliza', (err, polizas) => {
            res.render('polizas', {
                data: polizas
            });
        });
    });
};


polizaController.create = (req, res) => {
    const data = req.body;
    data.Vehiculo_Tomador_idDocTomador = data.Tomador_idDocTomador;
    req.getConnection((err, conn) => {
        conn.query('INSERT INTO poliza set ?', [data], (err, poliza) => {
            res.redirect('/poliza');
        })
    })
}

polizaController.edit = (req, res) => {
    const id = req.params.id;
    const data = req.body;
    data.Vehiculo_Tomador_idDocTomador = data.Tomador_idDocTomador;
    req.getConnection((err, conn) => {
        conn.query('UPDATE poliza set ? WHERE idPoliza = ?', [data, id], (err, poliza) => {
            res.redirect('/poliza');
        })
    })
}

polizaController.update = (req, res) => {
    const id = req.params.id;
    req.getConnection((err, conn) => {
        conn.query('SELECT * FROM poliza WHERE idPoliza = ?', [id], (err, poliza) => {
            res.render('poliza_edit', {
                data: poliza[0]
            });
        })
    })
}

polizaController.delete = (req, res) => {
    const id = req.params.id;
    req.getConnection((err, conn) => {
        conn.query('DELETE FROM poliza WHERE idPoliza = ?', [id], (err, poliza) => {
            res.redirect('/poliza');
        })
    })
}

module.exports = polizaController;