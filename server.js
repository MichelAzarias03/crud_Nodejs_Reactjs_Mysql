const express = require("express");
const cors = require("cors");
const db = require("./app/models");


const app = express();

var corsOptions = {
  origin: "http://localhost:8088"
};

app.use(cors(corsOptions));

// importation cors
app.use(express.json());

// 
app.use(express.urlencoded({ extended: true }));

// route d'acceuil
app.get("/", (req, res) => {
  res.json({ message: "biemvenue sur l'application ." });
});

//
db.sequelize.sync()
  .then(() => {
    console.log("Synced db.");
  })
  .catch((err) => {
    console.log("Failed to sync db: " + err.message);
  });

// port de lancement
const PORT = process.env.PORT || 8080;
require("./app/routes/routes")(app);
app.listen(PORT, () => {
  console.log(`le server tourne sur le port numero ${PORT}.`);
});