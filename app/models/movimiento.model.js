module.exports = (sequelize, Sequelize) => {
    const Movimiento = sequelize.define("movimiento", {
      concepto: {
        type: Sequelize.STRING
      },
      monto: {
        type: Sequelize.INTEGER
      },
      fecha : {
        type: Sequelize.DATEONLY
      },
      tipo:{
        type: Sequelize.STRING
      }
    });
  
    return Movimiento;
  };