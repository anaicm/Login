<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST');
header("Access-Control-Allow-Headers: X-Requested-With");

$contra_entrar="1234";//contraseña en la base de datos
$usu_entrar="admin";//usuario de la base de datos

$el_usuario=$_GET['usuario'];//usuario que entra por formulario
$la_contra=$_GET['contra'];//contraseña que entra por formulario
/*si el usuario que entra por formulario es igual al usuario que contiene el servidor
  y la contraseña que entra por formulario es igual a la contraseña que contiene en el 
  servidor, devuelve la respuesta "autorizado", en caso contrario devuelve como respuesta
  "fallo" */
if ($el_usuario==$usu_entrar && $la_contra==$contra_entrar) {
  echo 'autorizado';
} else {
  echo 'fallo';
}

?>