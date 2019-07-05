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


            try {
                if (fs.existsSync(path)) {
                  //file exists
                }
              } catch(err) {
                console.error(err)
              }


                // HTML-Inhalt mittels Template-Literal erstellen
                html = `<!DOCTYPE html>
                <html>
                <head>
                    <title>Hallo WEB1</title>
                    <meta charset="utf-8">
                </head>
                <body>
                    <h1>Hallo WEB1!</h1>
                </body>
            </html>`;
            // Inhalt in einem einzigen Chunk schicken
        }

    }




    response.end(html);


    });
    

server.listen(8020, function() {
    // Callback-Funktion, Ausgabe erfolgt nach erfolgreicher
    // Bindung des Servers
        console.log("Ich lausche nun auf http://localhost:8020");
    });