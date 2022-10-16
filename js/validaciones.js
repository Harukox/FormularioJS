// funciones para navegar 

function irFormulario() {
    location.href="./formulario.html";
}

function volver() {
    location.href="./index.html";
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
 // fecha de hoy. 
    
    const hoy = new Date();
    const fechaFormulario =new Date(fecha);


    if(fechaFormulario >= hoy ) {
        return true;
    } else{

        alert("introduce una fecha valida");
        return false;
    }
    
}
//funcion para validar el nombre y el apellido que no se puedan ingresar otro tipo de caracteres
function validarTexto(texto, valor){
    //expresion regular para los caracteres.
    var expresionR = /^([A-Za-zÑñÁáÉéÍíÓóÚú]+['\-]{0,1}[A-Za-zÑñÁáÉéÍíÓóÚú]+)(\s+([A-Za-zÑñÁáÉéÍíÓóÚú]+['\-]{0,1}[A-Za-zÑñÁáÉéÍíÓóÚú]+))*$/

    if(expresionR.test(texto)){

        return true;

    }else{
        alert("introduce un " + valor + " valido");
        return false;
    }
}


function validarDNI(dni) {
    var numero
    var letr
    var letra
    var expresion_regular_dni
   
    expresion_regular_dni = /^\d{8}[a-zA-Z]$/;
   
    if(expresion_regular_dni.test (dni) == true){
       numero = dni.substr(0,dni.length-1);
       letr = dni.substr(dni.length-1,1);
       numero = numero % 23;
       letra='TRWAGMYFPDXBNJZSQVHLCKET';
       letra=letra.substring(numero,numero+1);
      if (letra!=letr.toUpperCase()) {
            alert('Dni erroneo, la letra del DNI no se corresponde');
            return false;
       }else{
            return true;
       }
    }else{
       alert('Dni erroneo, formato no válido');
       return false;
     }
  }




//funcion para validar el telefono y que se introduzca un valor valido
function validarTelefono(telefono){
    var expresion =/^\d{9}$/ ;
    if(expresion.test(telefono))  {
      return true;
    }else{
        alert("introduce un telefono valido");
        return false;
    }

}
// funcion para validar el email  para que se introduzcan valores validos.
function validarEmail(email){
    var expresion = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i ;
    if(expresion.test(email)  ) {
        return true;
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
    
    
    return validarTexto(nombre, "nombre") && validarTexto(apellido, "apellido") &&
    validarDNI(dni) && validarPersonas(personas) && validarEmail(email) && 
    validarTelefono(telefono) && validarFecha(fecha);

    
}

