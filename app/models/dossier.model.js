module.exports = (sequelize, Sequelize) => {
    const Dossier = sequelize.define("dossier", {
      titre: {
        type: Sequelize.STRING
      },
      an: {
        type: Sequelize.STRING
      },
      mois: {
        type: Sequelize.STRING
      },
      heure: {
        type: Sequelize.STRING
      },
      notaire: {
        type: Sequelize.STRING
      },
      vendeur: {
        type: Sequelize.STRING
      },
      acquereur: {
        type: Sequelize.STRING
      }
      
    });
  
    return Dossier;
  };