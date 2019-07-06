
const express = require("express");
const app = express();
// Modul mit den Routen einbinden
const router
    = require('./routes/routes.js');
app.use(express.static("public"));
// Router registrieren -> Der Router
// verwaltet jetzt Routen, die mit
// "/app" beginnen
app.use("/app", router);


// Server an Port 8023 binden --> Die "listen"-Funktion von Express delegiert
// einfach an die bekannte "listen"-Methode aus dem "http"-Modul
app.listen(8040, function () {
    console.log("Server lauscht auf http://localhost:8040");
});