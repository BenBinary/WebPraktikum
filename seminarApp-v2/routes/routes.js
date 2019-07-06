// Einbinden des "express"-Moduls
const express = require("express");
// Initialisieren von Express
const router = express.Router();

// Einbinden von File Systen
const fs = require("fs");


//const url = request.url;
//const method = request.method;


router.set("view engine", "ejs");
router.set("views", "views");

// DASHBOARD
router.get("/", function(req, res, next) {
    // Antwort für Zugriff auf URL "/new" mit Methode GET erzeugen
    //res.send(fs.readFileSync(`${__dirname}/views/dashboard.ejs`));
    res.status(200);
    res.render(`dashboard`);
});


// SEMINARLISTE
router.get("/seminarliste", function(req, res, next) {
    // Antwort für Zugriff auf URL "/new" mit Methode GET erzeugen
    //res.send(fs.readFileSync(`${__dirname}/views/dashboard.ejs`));
    res.status(200);
    res.render(`seminarliste`);
});

// SEMINARDETAIL
router.get("/seminardetail", function(req, res, next) {
    // Antwort für Zugriff auf URL "/new" mit Methode GET erzeugen
    //res.send(fs.readFileSync(`${__dirname}/views/dashboard.ejs`));
    res.status(200);
    res.render(`seminardetail`);
});

// SEMINARLEITER
router.get("/seminarleiter", function(req, res, next) {
    // Antwort für Zugriff auf URL "/new" mit Methode GET erzeugen
    //res.send(fs.readFileSync(`${__dirname}/views/dashboard.ejs`));
    res.status(200);
    res.render(`seminarleiter`);
});

// SEMINARLEITER
router.get("/seminarneu", function(req, res, next) {
    // Antwort für Zugriff auf URL "/new" mit Methode GET erzeugen
    //res.send(fs.readFileSync(`${__dirname}/views/dashboard.ejs`));
    res.status(200);
    res.render(`seminar_neu`);
});



router.use(function(req, res, next) {


    

    console.log("Zweite Middleware! " + req.url);
    // Senden der Antwort - Kette beenden


    let url = req.url;

    if (url.endsWith(".css")) {

        console.log("css wurde angefordert " + url);
        res.sendFile(`${__dirname}/public${url}`);

    } else if ((url.endsWith(".png")) ||  (url.endsWith(".svg"))  ||  (url.endsWith(".jpg"))) {
        
        console.log(`URL für die Bilder ${url}`);
        console.log(`${__dirname}/public${url}`);

        res.sendFile(`${__dirname}/public${url}`); 

    } else if (url.endsWith(".js")) {

        console.log(`JS wurde angefordert ${__dirname}/public${url}`);
        res.sendFile(`${__dirname}/public${url}`); 

    } else {

        res.status(404).render("404");
    }

});

// Router zugreifbar machen
module.exports = router;