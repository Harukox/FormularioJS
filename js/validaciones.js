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


/**
* Funcion que captura las variables pasados por GET
* Devuelve un array de clave=>valor
*/
function getParametrosUrl()
{
    // capturamos la url
    var url = document.location.href;
    // si existe el interrogante
    if(url.indexOf('?')>0)
    {
        // cogemos la parte de la url que hay despues del interrogante
        var parametros = url.split('?')[1];
        // obtenemos un array con cada clave=valor
        var arrayParametros = parametros.split('&');
        var mapa = {};
        // recorremos todo el array de valores
        for(var i = 0; i < arrayParametros.length; i++){
            var param = arrayParametros[i].split('=');
            mapa[param[0]] =unescape (decodeURI(param[1]));
        }
        return mapa;
    }
}

function datosReserva(mapa){
    //recogemos los valores que nos envia la URL en variables para trabajar con ellas

    let personas = mapa["numeroP"];
    let fecha = mapa["fecha"];
    let nombre = mapa["nombre"];
    
    let apellido =mapa["apellidos"];
    let dni =mapa["dni"];
    let telefono =mapa["telefono"];
    let email =mapa["email"];

    document.write("<p> <b>Nombre: </b> " +  nombre.replaceAll("+", " ")+ "</p>");
    document.write("<p> <b>Apellido: </b> " +  apellido.replaceAll("+", " ") + "</p>");
    document.write("<p> <b>DNI: </b> " +  dni + "</p>");
    document.write("<p> <b>Teléfono: </b> " +  telefono + "</p>");
    document.write("<p> <b>email: </b> " +  email + "</p>");
    document.write("<p> <b>Número de mortales: </b>" +  personas +"</p>");
    document.write("<p> <b>Para el día: </b>" +  fecha + "</p>");
}

