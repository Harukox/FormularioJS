function validar() {
    let personas = document.forms["formulario"]["numeroP"].value;
    
    return (personas>1 && personas<6);
}