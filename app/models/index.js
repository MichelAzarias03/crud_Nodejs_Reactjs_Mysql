const dbConfig = require("../config/config.js");

const Sequelize = require("sequelize");

const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  operatorsAliases: false,
  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle
  }
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.dossiers = require("./dossier.model.js")(sequelize, Sequelize);
db.immeubles = require("./immeuble.model.js")(sequelize, Sequelize);
db.bornes = require("./borne.model.js")(sequelize, Sequelize);

db.immeubles.hasMany(db.bornes, { as: "bornes" });
db.bornes.belongsTo(db.immeubles, {
  foreignKey: "immeubleId",
  as: "immeuble",
});

module.exports = db;