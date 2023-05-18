const db = require("../models");
const Dossier = db.dossiers;
const Op = db.Sequelize.Op;

// Creation d'un dossier
exports.create = (req, res) => {
   // Validate request
   if (!req.body.title) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }

  // Create a dossier
  const dossier = {
    titre: req.body.titre,
    an: req.body.an,
    mois: req.body.mois,
    heure: req.body.heure,
    notaire: req.body.notaire,
    vendeur: req.body.vendeur,
    acquereur: req.body.acquereur
  };

  // Save dossier in the database
  Tutorial.create(tutorial)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the dossier."
      });
    });
};

// Recherche dans la base de donnees
exports.findAll = (req, res) => {
    const titre = req.query.titre;
    var condition = titre ? { titre: { [Op.like]: `%${titre}%` } } : null;
  
    Dossier.findAll({ where: condition })
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving dossiers."
        });
      });
};

// recherche par id
exports.findOne = (req, res) => {
    const id = req.params.id;

    Dossier.findByPk(id)
      .then(data => {
        if (data) {
          res.send(data);
        } else {
          res.status(404).send({
            message: `Cannot find Dossier with id=${id}.`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error retrieving Dossier with id=" + id
        });
    });
};

// mise a jour
exports.update = (req, res) => {
    const id = req.params.id;

    Dossier.update(req.body, {
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Dossier was updated successfully."
          });
        } else {
          res.send({
            message: `Cannot update Dossier with id=${id}. Maybe Dossier was not found or req.body is empty!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error updating Tutorial with id=" + id
        });
      });
};

// suppression
exports.delete = (req, res) => {
    const id = req.params.id;

    Dossier.destroy({
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Dossier was deleted successfully!"
          });
        } else {
          res.send({
            message: `Cannot delete Dossier with id=${id}. Maybe Dossier was not found!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete Dossier with id=" + id
        });
      });
};

// suppression de tous dossiers
exports.deleteAll = (req, res) => {
    Dossier.destroy({
        where: {},
        truncate: false
      })
        .then(nums => {
          res.send({ message: `${nums} Dossier were deleted successfully!` });
        })
        .catch(err => {
          res.status(500).send({
            message:
              err.message || "Some error occurred while removing all dossiers."
          });
        });
};

// // recherche des dossiers finalise
// exports.findAllPublished = (req, res) => {
//     Dossier.findAll({ where: { published: true } })
//     .then(data => {
//       res.send(data);
//     })
//     .catch(err => {
//       res.status(500).send({
//         message:
//           err.message || "Some error occurred while retrieving tutorials."
//       });
//     });
// };