<?php
/**
 * ***************************************************************
* **************** MON REPERTOIRE FONCTIONS ********************
******************************************************************
*/
?>


<?php

/*
** Function    : form_login_member
** Input      : aucun pour l'instant
** Output      : aucun
** Description    : affichage d'un formulaire de login de membre
** Creator    : ***
** Date        : ***
*/ 

function form_login_member($action)
{
     return '
    <table>
      <form action="'.$action.'" method="post" name="login_form">
        <tr>
          <td>Votre login</td>
          <td><input type="text" name="login" value=" " size="20" maxlength="42"></td>
        </tr>
        <tr>
          <td>Votre password</td>
          <td><input type="password" name="pass" value="" size="20" maxlenght="12"></td>
        </tr>
        <tr>
          <td>
            <input type="submit" name="valider" value="val">
            <input type="reset" name="annuler" value="anu">
          </td>
        </tr>
      </form>
    </table> ';
  } 

?> 

