function irFormulario() {
    location.href="./formulario.html"
}

function volver() {
    location.href="./index.html"
}

function validar() {
    let personas = document.forms["formulario"]["numeroP"].value;
    
    return (personas>1 && personas<6);
}