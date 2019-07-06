function getViewportWidth() {

    return window.innerWidth || document.documentElement.clientWidth;

}

const breite = getViewportWidth();

const ausgabe = `Die Viewport-Breite beträgt: ${breite}`;

console.log(ausgabe);

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

let tabelle = document.getElementById("seminartabelle_head");
console.log("Hallo " + tabelle);

//Ausgabe der Elemente
seminare.forEach(function(elem) {

    var belegte = elem.belegtePlaetze();
    let eintrag_row = document.createElement("tr");
    

    //let eintrag_text = document.createTextNode(`<td></td><td>${elem.startzeit.toLocaleDateString()}</td><td>${elem.ort}</td>`);

    let seminar_titel = document.createElement("td");
    let seminar_zeit = document.createElement("td");
    let seminar_ort = document.createElement("td");

    //let seminar_titel_text = document.createTextNode(`<a href="./detail.html">${elem.titel}</a>`);
    seminar_titel.innerHTML = `<a href="./detail.html">${elem.titel}</a>`;
    //seminar_titel.appendChild(seminar_titel_text);
    
    
    //let seminar_zeit_text = document.createTextNode(`${elem.startzeit.toLocaleDateString()}`);
    seminar_zeit.innerHTML = `${elem.startzeit.toLocaleDateString()}`;

    //let seminar_ort_text = document.createTextNode(`${elem.ort}`);
    seminar_ort.innerHTML = `${elem.ort}`;

    
    eintrag_row.append(seminar_titel);
    eintrag_row.append(seminar_zeit);
    eintrag_row.append(seminar_ort);
    
    
    tabelle.appendChild(eintrag_row);
    
    console.log(`${elem.titel} (${elem.startzeit.toLocaleDateString()}, ${belegte} von ${elem.verfugbarePlaetze} Plätzen belegt)`    );

});


//Ausgabe der Elemente dynamisch in die Tabelle
//console.log(document.body.getElementsByClassName("event").nodeType);
//console.log(document.getElementsByName("seminartabelle"));