<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Methode POST</title>
</head>

<body>


<html>
   <body>
   
      <form action = "anna.php" method = "POST">
         Name: <input type = "text" name = "name" />
         Age: <input type = "text" name = "age" />
         <input type = "submit" />
      </form>



<!-- EXEMPLE 2 POST -->

<!-- <form method="post" action="<?php echo $_SERVER['PHP_SELF'];?>">
  Name: <input type="text" name="fname">
  <input type="submit">
</form>

<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
  $name = $_POST['fname'];
  if (empty($name)) {
    echo "Name is empty";
  } else {
    echo $name;
  }
}
?> -->
<!-- L'exemple ci-dessus montre un formulaire avec un champ de saisie et un bouton d'envoi. 
Lorsqu'un utilisateur soumet les données en cliquant sur "Soumettre", 
les données du formulaire sont envoyées au fichier spécifié dans l'attribut action de la balise <form>. 
Dans cet exemple, nous pointons sur le fichier lui-même pour le traitement des données du formulaire. 
Si vous souhaitez utiliser un autre fichier PHP pour traiter les données du formulaire, 
remplacez-le par le nom de fichier de votre choix -->



<!-- EXEMPLE 3 POST -->
    <!-- <form>

        <label for="name">Please enter your name: </label>
        <input name="name" type="text"><br>

        <label for="age">Please enter your age: </label>
        <input name="age" type="text">

        <input type="submit" value="Submit">

    </form>


    <?php
        $name=$_POST['name'];
        $age=$_POST['age'];
        echo "<strong>".$name." is $age years old.</strong>";
    ?> -->

<!-- Dans le code ci-dessus, nous avons créé un formulaire 
qui prend le nom et l'âge de l'utilisateur et accède aux données 
à l'aide de la super variable globale $_POST lorsqu'il soumet les données. 
Étant donné que chaque variable superglobale est un tableau, 
elle peut stocker plusieurs valeurs. Par conséquent, 
nous avons récupéré le nom et l'âge de la variable $_POST 
et les avons stockés dans les variables $nm et $age. -->

</body>
</html>