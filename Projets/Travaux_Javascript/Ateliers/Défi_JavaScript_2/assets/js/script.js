/**
 * Défi #2
Au lancement de la page, une roue de chargement tourne durant 3 secondes avant 
de disparaître pour laisser la place au contenu de la page.
 */

/**
 * document.onreadystatechange = function () {
    var state = document.readyState
    if (state == 'interactive') {
         document.getElementById('displayContent').style.visibility="hidden";
    } else if (state == 'complete') {
        setTimeout(function(){
           document.getElementById('interactive');
           document.getElementById('loadingAnimation').style.visibility="hidden";
           document.getElementById('displayContent').style.visibility="visible";
        },3000);
    }
  }*/

  window.onload = function() {
      setTimeout(hideLoader, 3000);
  }

  function hideLoader() {
      let hauteur = window.innerHeight;
      document.querySelector('#loadingAnimation').style.top = `-${hauteur}px`;
  }