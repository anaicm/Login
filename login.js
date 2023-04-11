$(document).ready(function() {
	//apunta al objeto form con identificador "login", al pulsar el submit realiza la funcion anónima
	$("#login").submit(function(){
		/*guarda el objeto XHR y con la funcion serialize() recorre todos los campos del formulario
		  devolviendo una array de todos los campos clave=valor.*/
		var datosFormulario=$(this).serialize();
		//var datosFormulario = "?usuario="+ document.getElementById("usuario") + "contra=" + document.getElementById("contra");
		$.ajax({
			//hace una petición al servidor de los datos
			url: "http://localhost/Ejercicios_JavaScript/Ejercicios_tema8/Ejercicio_1/login.php",
			data: datosFormulario// data:los parametros que le pasa el cliente al servidor
			}).done(function(respuesta) {//done() devolucion de los datos
				procesarDatos(respuesta);//realiza la función
			});
		return false;
	});
	function procesarDatos(datos_devueltos){
		if(datos_devueltos=="autorizado"){//si la respuesta es igual autorizado
			$("#contenidos_externos").html("<p> Usuario Válido </p>")//modifica el DOM con html
		}else{//si la respuesta es distinta que en este caso sería "fallo"
			$("#contenidos_externos").html("<p> Usuario no Válido </p>")//modifica el DOM con html
		}

	}	
}); 