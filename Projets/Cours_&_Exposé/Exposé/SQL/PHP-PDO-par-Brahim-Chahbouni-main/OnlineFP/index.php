<?php require 'include/data.php'; ?>


<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style> .container {
                width: 20%;
            }
            form p {
                display: flex;
                justify-content: space-between;
            };
    </style>
</head>
<body>
    <form method="get" class="container">
        <p>
            <label for="nom">Nom : </label>
            <input type="text" name="nom">
        </p>
        <p>
            <label for="Prénom">Prénom: </label>
            <input type="text" name="prenom">
        </p>
        <p>
            <label for="Ville">Ville : </label>
            <input type="text" name="ville">
        </p>
        <p>
            <label for="age">Âge : </label>
            <input type="number" name="age">
        </p>
        <p>
            <label for="sexe">Sexe : </label>
            <input type="text" name="sexe">
        </p>
        <p>
            <label for="arriverle">Arrivé le : </label>
            <input type="text" name="arriverle">
        </p>
        <input type="submit" name="submit" value= "Envoyer">
    </form>
    <table class="container">
        <?php echo readAll(); ?>
    </table>
</body>
</html>

<?php 
if (isset($_GET['submit'])) {
	$nom = $_GET['nom'];
	$prenom = $_GET['prenom'];
	$ville = $_GET['ville'];
	$age = intVal($_GET['age']); 
	$sexe = $_GET['sexe'];
	$arriverle = $_GET['arriverle'];
	echo addItem($nom, $prenom, $ville, $age, $sexe, $arriverle);
}
echo deconnexion(); ?>