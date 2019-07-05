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
            
            
        } else if (url === "/start.html") {
            // Bei mir heißt die Seite mit den verfügbaren Seminaren nur /start.html und nicht seminarliste.html
            
            function Seminar(titel, seminarleiter, ort, startzeit, endzeit, freiePlaetze, verfugbarePlaetze, tutoren) {

                this.titel = titel;
                this.seminarleiter = seminarleiter;
                this.ort = ort;
                this.startzeit = startzeit;
                this.endzeit = endzeit;
                this.freiePlaetze = freiePlaetze;
                this.verfugbarePlaetze = verfugbarePlaetze;
                this.tutoren = tutoren;

                this.belegtePlaetze = function() {
                    return verfugbarePlaetze - freiePlaetze;
                };

            }

            let seminar_1 = new Seminar("Programmierkurs 1", "Sven Jörges", "A.E.03", new Date('2019-05-05T12:00:00'), new Date('2019-05-05T15:00:00'),5,12,new Array("tim1", "anke3", "thad3"));
            let seminar_2 = new Seminar("Web-Technologien", "Sven Jörges", "A.E.01", new Date('2019-07-08T10:00:00'), new Date('2019-07-08T13:00:00'),10,20,new Array("den1", "blub2", "thad3"));
            let seminar_3 = new Seminar("Algorithmen und Datenstrukturen", "Herr Koll", "A.E.01", new Date('2018-07-02T08:00:00'), new Date('2018-07-02T12:00:00'),2,20,new Array("den1", "blub2", "thad3"));

            var seminare = new Array(seminar_2, seminar_1, seminar_3);
            console.log(seminare.length);
            console.log(seminare[0].tutoren);

            seminare.sort(function(x, y) {
                return x.startzeit-y.startzeit;
            });


            html = `<!DOCTYPE html>

            <html lang="de">
            
            <head>
                <title> Startsteite der Anzeige </title>
                <meta charset="utf-8">
            
                <link rel="stylesheet" type="text/css"
                      href="./css/style.css">
                <link rel="stylesheet" type="text/css"
                      href="./css/flexbox.css" > 
            
                
            </head>
            
            <body>
            
                <header>
                    <h1> Studienverwaltung </h1>
                    <figure>
                        <a href="./dashboard.html"><img src="./img/titelbild.svg" alt="FH Dortmund Logo"> </a>
                    </figure>
                </header>
            
            
                <nav>
                    <ul>
                            <li><a href="./start.html">Übersicht</a></li>
                            <li><a href="./seminar_neu.html">Neues Seminar anlegen</a></li>
                            <li><a href="./seminarleiter.html">Seminarleiter</a></li>
                            <li><a href="./detail.html">Details zum Seminar</a></li>
                    </ul>
                </nav>
            
            
                
                <div id="center">
            
                    <div id="hauptinhalt">
            
                    <h3 id="ueberschrift_h3">Suche nach Veranstaltungen </h3>
                    <script>
                        
                            const name = " Benedikt Kurz";
                            const h3 = document.getElementById("ueberschrift_h3");
                            h3.append(name);
                            console.log("H3 Typ" + h3);
                            console.log(blub);

                        
                    </script>
                    
                    <form method="GET" action="https://labs.inf.fh-dortmund.de/seminarApp/testSearch.php">
                        <input list="seminarliste" name="semtitle" required pattern="[A-Z]+[A-Za-z]{0,19}" />
                        <datalist id="seminarliste">
                            <option>Programmmierkurs 1</option>
                            <option>Programmmierkurs 2</option>
                            <option>Web Engineering</option>
                            <option>Kosten und Erlösrechnung</option>
                            <option>Marketing</option>
                            <option>Investition und Finanzierung</option>
                        </datalist>
                        <input type="submit" value="Finden" formmethod="get" />
            
            
                        <input type="button" value="Ausgabe der Breite"> 
                            
                        </input>
                    </form>
                   
                    
                    <section class="event" >
                    <h2>Veranstaltungsübersicht</h2>
                    <table id="seminartabelle" name="seminartabelle">
                        <thead  id="seminartabelle_head">
                        <tr>
                            <th>Titel des Seminars</th>
                            <th>Veranstaltungsdatum des Seminars</th>
                            <th>Veranstaltungsort</th>
                        </tr>
                    </thead>
                    <tbody  name="seminartabelle_body">
                    <script>

                    
                    let tabelle = dcument.getElementById("seminartabelle_head");
                    console.log("Hallo " + tabelle);
                    
                    //Ausgabe der Elemente
                    seminare.forEach(function(elem) {
                    
                        var belegte = elem.belegtePlaetze();
                        let eintrag_row = document.createElement("tr");
           
                        let seminar_titel = document.createElement("td");
                        let seminar_zeit = document.createElement("td");
                        let seminar_ort = document.createElement("td");
                    
                        
                        seminar_titel.innerHTML = elem.titel;
                        seminar_zeit.innerHTML = elem.startzeit.toLocaleDateString();
                        seminar_ort.innerHTML = elem.ort;
                    
                        eintrag_row.append(seminar_titel);
                        eintrag_row.append(seminar_zeit);
                        eintrag_row.append(seminar_ort);
                        
                        
                        tabelle.appendChild(eintrag_row);

                    
                      </script>
                    </tbody>
                    </table>
              
                </section>
                </div>
            
            
                <aside class="aktuelles">
                    <p>Die Übung zum Programmierkurs fällt heute aus</p>
                </aside>
                </div>
                <footer>
                    <p>&copy; 2019 by Benedikt Kurz</p>
                </footer>
                
            </body>
            
            </html>`;




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

                        response.setHeader('content-type', 'image/ico');
                        response.writeHead( 200, { "content-type": "image/ico" });

                    } else if (url.endsWith(".jpg")){

                        response.setHeader('content-type', 'image/jpg');
                        response.writeHead(200, { "content-type": "image/jpeg" });

                    } else if (url.endsWith(".svg")){


                        console.log("Es wurde das Titelbild angefordert");
                        response.setHeader('content-type', 'image/svg');
                        response.writeHead(200, { "content-type": "image/svg+xml" });
                        


                        
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