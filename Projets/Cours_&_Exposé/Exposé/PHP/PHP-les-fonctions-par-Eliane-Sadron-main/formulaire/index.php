<?php
/**
********************************************************************
**************************** FORMULAIRE*****************************
********************************************************************
*
*/
?>




<?php 
  // **********************Premiere METHODE ************************
  // Afficher un menu de login : 

  // echo '
  // <table>
  //   <form action="liens.php" method="post" name="login_form">
  //     <tr>
  //       <td>Votre login</td>
  //       <td><input type="text" name="login" value=" " size="20" maxlength="42"></td>
  //     </tr>
  //     <tr>
  //       <td>Votre password</td>
  //       <td><input type="password" name="pass" value="" size="20" maxlenght="12"></td>
  //     </tr>
  //     <tr>
  //       <td>
  //         <input type="submit" name="valider" value="val">
  //         <input type="reset" name="annuler" value="anu">
  //       </td>
  //     </tr>
  //   </form>
  // </table> ';

?>  

<?php
 
//  function form_login_member()
// {
//    echo '
//   <table>
//     <form action="liens.php" method="post" name="login_form">
//       <tr>
//         <td>Votre login</td>
//         <td><input type="text" name="login" value=" " size="20" maxlength="42"></td>
//       </tr>
//       <tr>
//         <td>Votre password</td>
//         <td><input type="password" name="pass" value="" size="20" maxlenght="12"></td>
//       </tr>
//       <tr>
//         <td>
//           <input type="submit" name="valider" value="val">
//           <input type="reset" name="annuler" value="anu">
//         </td>
//       </tr>
//     </form>
//   </table> ';
// } 

// echo Form_login_member();

?>



<?php
// **********************DEUXIEME METHODE ************************

  //Afficher un menu de login 
  // include ("fonctions_inc.php");
  // echo form_login_member();
// ?>


<?php

  // Utiliser la fonction avec des paramètres
  include ("fonctions_inc.php");

  $action     = "ma_page_de_validation.php";
  $login_def  = "Ici votre login";
  $sub_name   = "Envoyer";
  $reset_name = "Annuler la saisie";
  $login_txt  = "Votre login :";
  $pass_txt   = "Votre password :";

  echo form_login_member($action, $login_def, $sub_name, $reset_name, $login_txt, $pass_txt);

?> 