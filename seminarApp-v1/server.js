// fs-Modul einbinden
const fs = require("fs");

// http-Modul mit Server erzeugung
const http = require("http");

const server = http.createServer(function(request, response) {
    // Statuscode und Header schreiben
    response.writeHead(200, { "content-type": "text/html; charset=utf-8" });

    // VARIABLENDEKLARATION

    // URL der Anfrage lesen
    const url = request.url;
    // HTTP-Methode der Anfrage lesen
    const method = request.method;

    var html = "";


    // Alle get Anfragen
    if (request.method === "GET") {
        console.log("Es wurde get gefordert");
        console.log(url);


        // Bei normaler Anfrage --> Dashboard zurück
        if (url === "/") {
            html = fs.readFileSync(`${__dirname}/public/dashboard.html`,
            { encoding: "utf-8" });
            
            
        } else {

            const path_request = `${__dirname}/public${url}`;


            try {
                if (fs.existsSync(path_request)) {
                  
                    console.log("Die Datei exisitert");
                    html = fs.readFileSync(path_request,  { encoding: "utf-8" });

                } else {

                    console.log("Es soll ein 404 ausgegeben werden");
                    html = fs.readFileSync(`${__dirname}/public/404.html`,
                    { encoding: "utf-8" });


                }
              } catch(err) {
                console.error(err)
                html = fs.readFileSync(`${__dirname}/public/404.html`,
                { encoding: "utf-8" });
              }
        }

    }

    response.end(html);

    });
    

server.listen(8020, function() {
    // Callback-Funktion, Ausgabe erfolgt nach erfolgreicher
    // Bindung des Servers
        console.log("Ich lausche nun auf http://localhost:8020");
    });