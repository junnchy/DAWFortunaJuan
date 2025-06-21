const nombre = document.getElementById("nombre");
const mensaje = document.getElementById("errorNombre")
const email = document.getElementById("email");
const mensajeEmail = document.getElementById("errorEmail")


nombre.addEventListener("focus", function(){
    nombre.classList.remove("valid")
    nombre.classList.remove("invalid")
})

nombre.addEventListener("blur", function () {
    if (nombre.value.length < 5 || !(nombre.value.includes(" "))) {
        mensaje.textContent = "El nombre debe tener más de 6 letras y al menos un espacio entre medio";
        nombre.classList.add('invalid');

    }else if (nombre.value.length > 5 && nombre.value.includes(" ")){
        mensaje.textContent = "";
        nombre.classList.add('valid');
    }
});

email.addEventListener("focus", function(){
    email.classList.remove("valid")
    email.classList.remove("invalid")
})

email.addEventListener("blur",function() {
    if (!(email.value.includes('@'))) {
        mensajeEmail.textContent = "no es un email";
        email.classList.add('invalid');
    }else{
        mensajeEmail.textContent="";
        email.classList.add('valid');
    }
})



input.addEventListener("blur", function () {
    console.log("El input tomo el foco");
});

