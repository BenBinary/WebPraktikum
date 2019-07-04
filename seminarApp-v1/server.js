// fs-Modul einbinden
const fs = require("fs");

// http-Modul mit Server erzeugung
const http = require("http");
const server = http.createServer(function(request, response) {
    // Statuscode und Header schreiben
    response.writeHead(200, { "content-type": "text/html; charset=utf-8" });

    // URL der Anfrage lesen
    const url = request.url;
    // HTTP-Methode der Anfrage lesen
    const method = request.method;


    if (request.method === "GET") {
        console.log("Es wurde get gefordert");
    }

    // HTML-Inhalt mittels Template-Literal erstellen
    const html = `<!DOCTYPE html>
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
    response.end(html);
    });
    

server.listen(8020, function() {
    // Callback-Funktion, Ausgabe erfolgt nach erfolgreicher
    // Bindung des Servers
        console.log("Ich lausche nun auf http://localhost:8020");
    });