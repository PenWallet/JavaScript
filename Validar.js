function validar()
{
	var nombre = document.getElementById('txtNombre').value;
	var apellidos = document.getElementById('txtApellidos').textContent;
	var hombre = document.getElementById('rdbHombre').textContent;
	var mujer = document.getElementById('rdbMujer').textContent;
	
	
	if(nombre == "")
		document.getElementById("lblErrorNombre").innerHTML = "K ase mierda";
	else if(nombre.length > 20)
		document.getElementById("lblErrorNombre").innerHTML = "Demasiao largo illo";
	else
		document.getElementById("lblErrorNombre").innerHTML = "Perfe loko";
	
	if(apellidos == "")
		document.getElementById("lblErrorApellidos").innerHTML = "K ase mierda";
	else if(apellidos.length > 20)
		document.getElementById("lblErrorApellidos").innerHTML = "Demasiao largo illo";
	else
		document.getElementById("lblErrorApellidos").innerHTML = "Perfe loko";
	
	if(hombre == false && mujer == false)
		document.getElementById("lblErrorSexo").innerHTML = "Elige ya conio";
}