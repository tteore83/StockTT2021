/**
 * Magic 8 ball
 */


// Attente du DOM (Data Object Model)
window.onload = function() {
    // querySelector() sélectionne le premier élément du DOM trouvé !
    let button = document.querySelector('button');

    // Evènement au clique du bouton -> appelle la fonction "magic8ball()"
    button.addEventListener('click', magic8ball);
}

// Permet de retourner une réponse aléatoire parmis une sélection
function magic8ball()
{
    // Les différentes réponses possibles
    let answers = [
        'Essaye plus tard', 'Essaye encore', 'Pas d\'avis', 'C\'est ton destin',
        'Le sort en est jeté', 'Une chance sur deux', 'Repose ta question', 'D\'après moi oui',
        'C\'est certain', 'Oui absolument', 'Tu peux compter dessus', 'Sans aucun doute',
        'Très probable', 'Oui', 'C\'est bien parti', 'C\'est non', 'Peu probable', 'Faut pas rêver',
        'N\'y compte pas', 'Impossible'
    ];

    // Génère un index aléatoire pour extraire une valeur du tableau
    let random = Math.floor(Math.random() * answers.length);

    // Sélectionne un élément du DOM où afficher la valeur aléatoire du tableau
    let element = document.querySelector('#reponse');

    // Transmet la valeur aléatoire du tableau à la valeur de l'élément HTML
    element.innerText = answers[random] 
}
    
