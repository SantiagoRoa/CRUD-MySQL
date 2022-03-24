const vehiculosController = {};

vehiculosController.list = (req, res) => {
    req.getConnection((err, conn) => {
        conn.query('SELECT * FROM vehiculo', (err, vehiculos) => {
            res.render('vehiculos', {
                data: vehiculos
            });
        });
    });
};


vehiculosController.create = (req, res) => {
    const data = req.body;
    req.getConnection((err, conn) => {
        conn.query('INSERT INTO vehiculo set ?', [data], (err, vehiculo) => {
            res.redirect('/vehiculo');
        })
    })
}

vehiculosController.edit = (req, res) => {
    const id = req.params.id;
    const data = req.body;
    req.getConnection((err, conn) => {
        conn.query('UPDATE vehiculo set ? WHERE idVehiculo = ?', [data, id], (err, vehiculo) => {
            res.redirect('/vehiculo');
        })
    })
}

vehiculosController.update = (req, res) => {
    const id = req.params.id;
    req.getConnection((err, conn) => {
        conn.query('SELECT * FROM vehiculo WHERE idVehiculo = ?', [id], (err, vehiculo) => {
            res.render('vehiculo_edit', {
                data: vehiculo[0]
            });
        })
    })
}

vehiculosController.delete = (req, res) => {
    const id = req.params.id;
    req.getConnection((err, conn) => {
        conn.query('DELETE FROM vehiculo WHERE idVehiculo = ?', [id], (err, vehiculo) => {
            res.redirect('/vehiculo');
        })
    })
}

module.exports = vehiculosController;