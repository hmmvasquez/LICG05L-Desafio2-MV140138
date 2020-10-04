function capturar() {

    function datos(dato1,dato2,dato3,dato4,dato5) {
        this.dato1=dato1;
        this.dato2=dato2;
        this.dato3=dato3;
        this.dato4=dato4;
        this.dato5=dato5;
    }
    
    var capturardato1 = document.getElementById("dato1").value;
    var capturardato2 = document.getElementById("dato2").value;
    var capturardato3 = document.getElementById("dato3").value;
    var capturardato4 = document.getElementById("dato4").value;
    var capturardato5 = document.getElementById("dato5").value;

    ndato = new datos(capturardato1,capturardato2,capturardato3,capturardato4,capturardato5);
    console.log(ndato);
    agregar();
}

var array=[];
function agregar() {
    array.push(ndato);
    console.log(array);
    document.getElementById("tabla").innerHTML += ' <tbody><tr><th scope="row">1</th><td>'+ndato.dato1+'</td></tr></tbody>';
    document.getElementById("tabla").innerHTML += ' <tbody><tr><th scope="row">2</th><td>'+ndato.dato2+'</td></tr></tbody>';
    document.getElementById("tabla").innerHTML += ' <tbody><tr><th scope="row">3</th><td>'+ndato.dato3+'</td></tr></tbody>';
    document.getElementById("tabla").innerHTML += ' <tbody><tr><th scope="row">4</th><td>'+ndato.dato4+'</td></tr></tbody>';
    document.getElementById("tabla").innerHTML += ' <tbody><tr><th scope="row">5</th><td>'+ndato.dato5+'</td></tr></tbody>';
};