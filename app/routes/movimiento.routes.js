module.exports = app => {
    const movimientos = require("../controllers/movimiento.controller.js");
  
    var router = require("express").Router();
  
    // Create a new Movimiento
    router.post("/", movimientos.create);
  
    // Retrieve all movimientos
    router.get("/", movimientos.findAll);
    
    // Retrieve a single movimiento with id
    router.get("/:id", movimientos.findOne);
  
    // Update a movimiento with id
    router.put("/:id", movimientos.update);
  
    // Delete a movimiento with id
    router.delete("/:id", movimientos.delete);
  
    app.use('/api/movimientos', router);
  };