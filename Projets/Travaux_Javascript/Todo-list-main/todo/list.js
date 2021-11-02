/**
 * ====== Mon travail ====== 
 */

/*window.onload = function(){
const tab = ["UI Design", "UX Design", 
"JavaScript", "HTML", "CSS", "SASS", "SCSS"];

tab.forEach(element => {
    console.log(element)
    var ul = document.querySelector('ul').value;
    for (let)
});
document.write(tab)
}*/

/**
 * ====== Correction de la liste ======
 * Éléménts de ma todo list
 * list.js
 */

let list = ["UI Design", "UX Design", "JavaScript", "HTML", "CSS", "SASS", "SCSS"];

// On attends que le DOM charge, puisque l'on travaille avec !
window.onload = function() {

    // Sélectionne la première "UL" dans ma page HTML
    let ul = document.querySelector('ul');
    for(let i = 0; i < list.length; i++) {
        /*console.log(list[i]);*/

        // Création d'un élément de la liste UL
        let item = '<li>'+ list[i] +'</li>';
        /*let item = `<li>${list[i]}</li>`;*/
        ul.innerHTML += item;
    }


/**
 * ----
 */

/**
 * Ajoute un écouteur d'événement sur élément de la liste
 */

// Sélectionne TOUS les éléments "li" de ma page HTML
let items = document.querySelectorAll('li');

for (let i = 0; i < items.length; i++) {
    //console.log(items[i]);

    // Ajout d'un écouteur d'évènement sur un élément de la liste
    items[i].addEventListener('click', editItem);
}

/**
 * ----
 */
}

function editItem() {
    // alert(this.innerText);
    let newValue = prompt('Modifier la valeur', this.innerText);
    this.innerText = newValue;
}
