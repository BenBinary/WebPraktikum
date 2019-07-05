// fs-Modul einbinden
const fs = require("fs");

// http-Modul mit Server erzeugung
const http = require("http");

const server = http.createServer(function(request, response) {
    // Statuscode und Header schreiben
    //esponse.writeHead(200, { "content-type": "text/html; charset=utf-8" });

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

                //Falls die angeforderte Datei existiert
                if (fs.existsSync(path_request)) {

                    console.log("Die Datei exisitert");
                    html = fs.readFileSync(path_request,  { encoding: "utf-8" });

                    if (url.endsWith(".css")) {

                        response.writeHead(200, { "content-type": "text/css; charset=utf-8" });

                    } else if (url.endsWith(".html")) {

                        response.writeHead(200, { "content-type": "text/html; charset=utf-8" });

                    } else if (url.endsWith(".ico")){

                        //response.writeHead(200, { "content-type": "image/ico; charset=utf-8" });

                    } else if (url.endsWith(".jpg")){

                        //response.writeHead(200, { "content-type": "image/jpg; charset=utf-8" });

                    } else if (url.endsWith(".svg")){

                        //response.writeHead(200, { "content-type": "image/svg" });
                        
                    }

                } else {


                    response.writeHead(404, { "content-type": "text/html; charset=utf-8" });
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