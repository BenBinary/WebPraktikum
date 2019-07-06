// Einbinden des "express"-Moduls
const express = require("express");
// Initialisieren von Express
const app = express();

// Einbinden von File Systen
const fs = require("fs");


//const url = request.url;
//const method = request.method;


app.set("view engine", "ejs");
app.set("views", "views");

// DASHBOARD
app.get("/", function(req, res, next) {
    // Antwort für Zugriff auf URL "/new" mit Methode GET erzeugen
    //res.send(fs.readFileSync(`${__dirname}/views/dashboard.ejs`));
    res.status(200);
    res.render(`dashboard`);
});


// SEMINARLISTE
app.get("/seminarliste", function(req, res, next) {
    // Antwort für Zugriff auf URL "/new" mit Methode GET erzeugen
    //res.send(fs.readFileSync(`${__dirname}/views/dashboard.ejs`));
    res.status(200);
    res.render(`seminarliste`);
});

// SEMINARDETAIL
app.get("/seminardetail", function(req, res, next) {
    // Antwort für Zugriff auf URL "/new" mit Methode GET erzeugen
    //res.send(fs.readFileSync(`${__dirname}/views/dashboard.ejs`));
    res.status(200);
    res.render(`seminardetail`);
});

// SEMINARLEITER
app.get("/seminarleiter", function(req, res, next) {
    // Antwort für Zugriff auf URL "/new" mit Methode GET erzeugen
    //res.send(fs.readFileSync(`${__dirname}/views/dashboard.ejs`));
    res.status(200);
    res.render(`seminarleiter`);
});

// SEMINARLEITER
app.get("/seminarneu", function(req, res, next) {
    // Antwort für Zugriff auf URL "/new" mit Methode GET erzeugen
    //res.send(fs.readFileSync(`${__dirname}/views/dashboard.ejs`));
    res.status(200);
    res.render(`seminar_neu`);
});



app.use(function(req, res, next) {


    

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
        res.sendFile(`${__dirname}/js${url}`); 
    } else {

        res.status(404).render("404");
    }

});



// Server an Port 8023 binden --> Die "listen"-Funktion von Express delegiert
// einfach an die bekannte "listen"-Methode aus dem "http"-Modul
app.listen(8040, function () {
    console.log("Server lauscht auf http://localhost:8040");
});