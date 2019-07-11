
const express = require("express");
const app = express();
// Modul mit den Routen einbinden
const router
    = require('./routes/routes.js');
const seminar = require('./models/seminars.js');
const bodyParser = require("body-parser");

app.set("view engine", "ejs");
app.set("views", "views");

app.use(express.static("public"));
// Router registrieren -> Der Router
// verwaltet jetzt Routen, die mit
// "/app" beginnen


app.use(bodyParser.urlencoded({ extended: false }));

app.post("/seminar_anlegen", function(req, res, next) {

    console.log("Es soll ein neues Seminar angelegt werden: " + req.body.semtitle);
        
    console.log("Das sind die Einträge");
    console.log(seminar[0]);


    var sem = new seminar("blub", "blub");

    
    res.send(JSON.stringify(seminar[0]));
    //res.send("Seminar Titel: " + req.body.semlead);

});

app.use("/", router);

// Server an Port 8050 binden --> Die "listen"-Funktion von Express delegiert
// einfach an die bekannte "listen"-Methode aus dem "http"-Modul
app.listen(8050, function () {
    console.log("Server lauscht auf http://localhost:8050");
});