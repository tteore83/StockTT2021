/* Basculer entre l'affichage et le masquage des liens 
du menu de navigation lorsque l'utilisateur clique 
sur le menu hamburger / l'icône de la barre. */
function myFunction() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  } 