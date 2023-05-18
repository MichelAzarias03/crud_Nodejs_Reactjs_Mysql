module.exports = (sequelize, Sequelize) => {
    const Borne = sequelize.define("borne", {
      libelle: {
        type: Sequelize.STRING
      },
      abcisses: {
        type: Sequelize.FLOAT
      },
      ordonnees: {
        type: Sequelize.FLOAT
      }
      
    });
  
    return Borne;
  };