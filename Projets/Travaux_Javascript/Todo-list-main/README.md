# Todo list

Créez un dossier `todo` contenant une page `index.html`, `list.js` et `todo.js`.

## Etape #1

Dans le fichier `index.html`, ajoutez l'élément HTML `ul` vide pour le moment.  
Dans le fichier `list.js`, créez un tableau contenant les informations suivantes : 
* UI Design
* UX Design
* JavaScript
* HTML
* CSS
* SASS
* SCSS

Grâce à une boucle, récupérez les éléments du tableau et affichez-les dans la `ul` vide du fichier `index.html`.

> N'oubliez pas comment est consituté une liste `ul` et que vous travaillez avec le DOM ;)

## Etape #2

Dans le fichier `list.js`, toujours, appliquez un écouteur d'évènement sur chaque élément de la liste `ul` qui exécutera la fonction `editItem` au clic.

> Pour cela, vous devez récupérer tous les éléments contenus dans cette liste et grâce à une boucle, appliquez un écouteur d'évènement qui exécutera la fonction voulue.

### Fonction `editItem`

Cette fonction enclenche une boite de dialogue permettant au visiteur de modifier l'item choisi.

> Rappel : le `this` correspond à l'élément ayant enclenché la fonction au moment du clic exécuté par l'écouteur d'évènement. Grâce à lui, vous pouvez récupérer la valeur du texte à modifier, voire le remplacer.
