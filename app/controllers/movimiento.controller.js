const db = require("../models");
const Movimiento = db.movimientos;
const Op = db.Sequelize.Op;

// Create and Save a new Movimiento
exports.create = (req, res) => {
    // Validate request
    if (!req.body.tipo) {
      res.status(400).send({
        message: "Content can not be empty!"
      });
      return;
    }
  
    // Create a Movimiento
    const movimiento = {
      tipo: req.body.tipo,
      concepto: req.body.concepto,
      monto: req.body.monto,
      fecha: req.body.fecha
    };
  
    // Save Movimiento in the database
    Movimiento.create(movimiento)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the Movimiento."
        });
      });
  };


// Retrieve all Movimiento from the database.
exports.findAll = (req, res) => {
    const tipo = req.query.tipo;
    var condition = tipo ? { tipo: { [Op.like]: `%${tipo}%` } } : null;
  
    Movimiento.findAll({ where: condition })
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving movements."
        });
      });
  };

// Find a single Movimiento with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Movimiento.findByPk(id)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving Movimiento with id=" + id
      });
    });
};

// Update a Movimiento by the id in the request
exports.update = (req, res) => {
    const id = req.params.id;
  
    Movimiento.update(req.body, {
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Movimiento was updated successfully."
          });
        } else {
          res.send({
            message: `Cannot update Movimiento with id=${id}. Maybe Movimiento was not found!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error updating Movimiento with id=" + id
        });
      });
  };

// Delete a Movimiento with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;
  
    Movimiento.destroy({
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Movimiento was deleted successfully!"
          });
        } else {
          res.send({
            message: `Cannot delete Movimiento with id=${id}. Maybe Movimiento was not found!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete Movimiento with id=" + id
        });
      });
  };

