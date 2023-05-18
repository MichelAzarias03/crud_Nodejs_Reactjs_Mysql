const db = require("../models");
const Immeuble = db.immeubles;
const Borne = db.bornes;

exports.createImmeuble = (immeuble) => {
    return Tutorial.create({
        sis: immeuble.sis,
        lieu_dit: immeuble.lieu_dit,
        commune: immeuble.commune,
        arrondissement: immeuble.arrondissement,
        departement: immeuble.departement,
        region: immeuble.region,
    })
      .then((immeuble) => {
        console.log(">> Created immeuble: " + JSON.stringify(immeuble, null, 4));
        return immeuble;
      })
      .catch((err) => {
        console.log(">> Error while creating immeuble: ", err);
      });
};

exports.createBorne = (immeubleId, borne) => {
    return Comment.create({
        libelle: borne.libelle,
        abcisses: borne.abcisses,
        ordonnees: borne.ordonnees,
        immeubleId:immeubleId
    })
      .then((borne) => {
        console.log(">> Created borne: " + JSON.stringify(borne, null, 4));
        return borne;
      })
      .catch((err) => {
        console.log(">> Error while creating borne: ", err);
      });
};

exports.findTutorialById = (tutorialId) => {
    return Tutorial.findByPk(tutorialId, { include: ["comments"] })
      .then((tutorial) => {
        return tutorial;
      })
      .catch((err) => {
        console.log(">> Error while finding tutorial: ", err);
      }
    );
};

exports.findCommentById = (id) => {
    return Comment.findByPk(id, { include: ["tutorial"] })
        .then((comment) => {
        return comment;
        })
        .catch((err) => {
        console.log(">> Error while finding comment: ", err);
        }
    );
};