/* funciones para navegar */

function irFormulario() {
    location.href="./formulario.html"
}

function volver() {
    location.href="./index.html"
}



//funcion para validar el numero de personas permitidas en el escape room
function validarPersonas(personas) {
    if(personas>1 && personas<6){

        return true;

    }else{
        alert("El número de mortales tiene que ser entre 2 y 6");
        return false;
    }

}
//funcion para validar las fechas.
function validarFecha(fecha){


var ano = document.getElementById("ano").value;
var mes = document.getElementById("mes").value;
var dia = document.getElementById("dia").value;

valor = new Date(ano, mes, dia);

if( isNaN(valor) ) {
  return true;
} else{

    alert("introduce una fecha valida");
    return false;
}
    
}
//funcion para validar el nombre y el apellido que no se puedan ingresar otro tipo de caracteres
function validarTexto(texto){
//expresion regular para los caracteres.
var expresionR =  / ^ [a-zA-Z] + [a-zA-Z] + $ / ;

if(expresionR.test(texto)){

    return true;

}else{
    alert("introduce un texto valido");
    return false;
}
}


//funcion para validar el dni, y que sea un dni valido.
function validarDNI(dni) {
    var numero, let, letra;
    var expresion_regular_dni = /^[XYZ]?\d{5,8}[A-Z]$/;

    dni = dni.toUpperCase();

    if(expresion_regular_dni.test(dni) === true){
        numero = dni.substr(0,dni.length-1);
        numero = numero.replace('X', 0);
        numero = numero.replace('Y', 1);
        numero = numero.replace('Z', 2);
        let = dni.substr(dni.length-1, 1);
        numero = numero % 23;
        letra = 'TRWAGMYFPDXBNJZSQVHLCKET';
        letra = letra.substring(numero, numero+1);
        if (letra != let) {
            //alert('Dni erroneo, la letra del NIF no se corresponde');
            return false;
        }else{
            //alert('Dni correcto');
            return true;
        }
    }else{
        //alert('Dni erroneo, formato no válido');
        return false;
    }
}

//funcion para validar el telefono y que se introduzca un valor valido
function validarTelefono(telefono){

    if( (/^\d{9}$/.test(telefono)) ) {
      return true;
    }else{
        alert("introduce un telefono valido");
        return false;
    }

}
// funcion para validar el email  para que se introduzcan valores validos.
function validarEmail(email){

    valorEmail = document.getElementById("campo").value;
if( (/\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)/.test(valor)) ) {
  return false;
}else{
    alert("ingrese un email valido");
    return false;
}
}

//funcion para validar todos los campos. 
function validar() {
    let personas = document.forms["formulario"]["numeroP"].value;
    let fecha = document.forms["formulario"]["fecha"].value;
    let nombre = document.forms ["formulario"]["nombre"].value;
    let apellido =document.forms["formulario"]["apellidos"].value;
    let dni =document.forms["formulario"]["dni"].value;
    let telefono =document.forms["formulario"]["telefono"].value;
    let email =document.forms["formulario"]["email"].value;
    
    
    return validarTexto(nombre) && validarTexto(apellido) &&
    validarDNI(dni) && validarPersonas(personas) && validarEmail(email) && 
    validarTelefono(telefono) && validarFecha(fecha);

    
}

