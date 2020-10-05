function capturar() {
    var nombre = prompt("Ingrese su nombre de usuario:");
    var mes = prompt("Ingrese el mes que desea contar:");
    var año = parseInt(prompt("Ingrese el año del mes que desea contar:"));
    resultado = diasenunmes(mes, año);
    console.log(resultado);
    document.getElementById("resultado").innerHTML += ' <h1>Bienvenido '+nombre+'</h1><p>La cantidad de dias que tiene el mes '+mes+' del año '+año+' es: '+resultado+' dias.</p>';
}

function diasenunmes(mes, año) {
    //return new Date(año, mes, 0).getDate();
    mes = mes.toUpperCase();
	var meses = ["ENERO", "FEBRERO", "MARZO", "ABRIL", "MAYO", "JUNIO", "JULIO", "AGOSTO", "SEPTIEMBRE", "OCTUBRE", "NOVIEMBRE", "DICIEMBRE"];
	return new Date(año, meses.indexOf(mes) + 1, 0).getDate();
}