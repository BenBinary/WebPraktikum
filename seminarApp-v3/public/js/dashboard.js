let haupt = document.getElementById("haupt");

let node = document.createElement("div");
node.innerHTML = ` <a href="">+</a>`;
node.id = "plus";

node.addEventListener("click", function() {

    let name = prompt("Bitte geben Sie einen Namen ein!");
    let link = prompt("Bitte geben Sie den Pfad ein!");
    //alert("es wurde etwas gecklickt");


    let node_user = document.createElement("div");
    node_user.innerHTML = `<a href="${link}">${name}</a>`;

    node.before(node_user);
    //haupt.append(node_user);

});


haupt.append(node);

console.log(haupt);