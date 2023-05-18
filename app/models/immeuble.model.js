module.exports = (sequelize, Sequelize) => {
    const Immeuble = sequelize.define("immeuble", {
      sis: {
        type: Sequelize.STRING
      },
      lieu_dit: {
        type: Sequelize.STRING
      },
      commune: {
        type: Sequelize.STRING
      },
      arrondissement: {
        type: Sequelize.STRING
      },
      departement: {
        type: Sequelize.STRING
      },
      region: {
        type: Sequelize.STRING
      }
      
    });
  
    return Immeuble;
  };