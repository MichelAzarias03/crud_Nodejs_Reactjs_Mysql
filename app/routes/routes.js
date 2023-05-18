module.exports = app => {
    const dossiers = require("../controllers/dossier.controller.js");
  
    var router = require("express").Router();
  
    // Create a new dossier
    router.post("/", dossiers.create);
  
    // Retrieve all dossiers
    router.get("/", dossiers.findAll);
  
    // Retrieve all published Tutorials
   // router.get("/published", dossiers.findAllPublished);
  
    // Retrieve a single dossier with id
    router.get("/:id", dossiers.findOne);
  
    // Update a dossier with id
    router.put("/:id", dossiers.update);
  
    // Delete a dossier with id
    router.delete("/:id", dossiers.delete);
  
    // Delete all dossiers
    router.delete("/", dossiers.deleteAll);
  
    app.use('/api/dossiers', router);
  };