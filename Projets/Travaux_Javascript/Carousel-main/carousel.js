/**
 * ESLINT-DISAEBLE Linebreak
 * */
/**
 * ESLINT-DISABLE-NEXT-LINE
 */
/**
 * Carousel
 */

// Tableau contenant toutes les images du carousel
const images = ['images/01.jpg', 'images/02.jpg', 'images/03.jpg', 'images/04.jpg', 'images/05.jpg'];

// Correspond à l'index du tableau de l'image en cours
let pointeur = 0;

// Contiendra le minuteur (setInterval())
let timer;

// On attend le chargement du DOM
window.onload = function () {
  // Évènement sur la flèche de droite
  const avancer = document.querySelector('#avancer');
  avancer.addEventListener('click', imageSuivante);

  // Évènement sur la flèche de gauche
  const reculer = document.querySelector('#reculer');
  reculer.addEventListener('click', imagePrecedente);

  const img = document.querySelector('#slide');
  // Si le curseur de la souris "sort" de l'image, on relance le timer
  img.addEventListener('mouseout', startCarousel);
  // Si le curseur de la souris est sur l'image, on arrête le timer
  img.addEventListener('mouseover', stopCarousel);

  // Démarre la carousel
  startCarousel();
};

// Arrête le carousel
function stopCarousel() {
  clearInterval(timer);
}

// Démarre le carousel
function startCarousel() {
  // setInterval() appelle une fonction toutes les XX secondes
  // Attention ! Le temps à définir doit être en millisecondes !
  timer = setInterval(imageSuivante, 1000);
}

// Permet de sélectionner l'image précédente à afficher dans le carousel
function imagePrecedente() {
  // Si le pointeur est au début du tableau, le positionner à la fin de celui-ci
  if (pointeur === 0) {
    pointeur = images.length - 1;
  } else {
    // Sinon, on décrémente la valeur de 1
    pointeur--;
  }

  document.querySelector('img').setAttribute('src', images[pointeur]);
}

// Permet de sélectionner l'image suivante à afficher dans le carousel
function imageSuivante() {
  // Si la valeur du pointeur est égal à l'index du dernier élément du tableau
  if (pointeur === images.length - 1) {
    // Je remet le pointeur à zéro, soit au début du tableau
    pointeur = 0;
  } else {
    // Sinon, j'ajoute 1 au pointeur pour passer à l'élément suivant du tableau
    pointeur++;
  }

  // Modifie l'attribut "src" de l'image en sélectionnant l'image suivante dans le tableau
  // selon la valeur du pointeur
  document.querySelector('img').setAttribute('src', images[pointeur]);
}
