window.onload = function () {

let capitales = ["Berlin" , "Paris" , "Madrid" , "Bruxelles", "Vienne", "Sofia"];
let ol = document.createElement('ol');

for(let i = 0; i < capitales.length; i++) {
    let li = document.createElement('li'); //à chaque tour de boucle je lui créer un nouvel élément
    li.innerText = capitales[i].toUpperCase();
    ol.append(li); //on ajoute après
}
    document.querySelector('body').append(ol);
}