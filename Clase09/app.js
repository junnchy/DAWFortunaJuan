const nombre = document.getElementById("nombre");
const mensaje = document.getElementById("errorNombre")

const email = document.getElementById("email");
const mensajeEmail = document.getElementById("errorEmail")

const pass = document.getElementById("pass");
const mensajePass = document.getElementById("errorPass");

const edad = document.getElementById("edad");
const mensajeEdad = document.getElementById('errorEdad');

const telefono = document.getElementById("telefono");
const mensajeTelefono = document.getElementById("errorTelefono");

const direccion = document.getElementById("direccion");
const mensajeDireccion = document.getElementById("errorDireccion");

const ciudad = document.getElementById("ciudad");
const mensajeCiudad = document.getElementById("errorCiudad");

const cpos = document.getElementById("cpos");
const mensajeCpos = document.getElementById("errorCpos");

const dni = document.getElementById("dni");
const mensajeDni = document.getElementById("errorDni");

/*----------- Valida Nombre --------------*/
nombre.addEventListener("focus", function(){
    nombre.classList.remove("valid");
    nombre.classList.remove("invalid");
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

/*----------- Valida Mail--------------*/
email.addEventListener("focus", function(){
    email.classList.remove("valid");
    email.classList.remove("invalid");
})

email.addEventListener("blur",function() {
    if (!(email.value.includes('@')) || !(email.value.includes('.com'))) {
        mensajeEmail.textContent = "Ingresar un email valido";
        email.classList.add('invalid');
    }else{
        mensajeEmail.textContent="";
        email.classList.add('valid');
    }
})


/*----------- Valida Pass --------------*/

pass.addEventListener("focus", function(){
    pass.classList.remove("valid");
    pass.classList.remove("invalid");
})

pass.addEventListener("blur", function(){
    const regex = /^(?=.*[a-zA-Z])(?=.*\d)/;
    if(regex.test(pass.value) && pass.value.length > 7){
        pass.classList.add("valid");
        mensajePass.textContent = "";
    }else{
        mensajePass.textContent = "La contraseña elegida debe tener 8 caracteres, formados por letras y números";
        pass.classList.add("invalid");
    }
})


/*----------- Valida Edad --------------*/

edad.addEventListener("focus", function(){
    edad.classList.remove("valid");
    edad.classList.remove("invalid");
})

edad.addEventListener("blur", function(){
    if (edad.value > 17) {
        edad.classList.add('valid');
        mensajeEdad.textContent = "";
    }else{
        edad.classList.add('invalid');
        mensajeEdad.textContent = "Tienes que tener al menos 18 años";
    }
});

/*----------- Valida Telefono --------------*/
telefono.addEventListener("focus", function(){
    telefono.classList.remove("valid");
    telefono.classList.remove("invalid");
})

telefono.addEventListener("blur",function(){
    if (telefono.value.length > 6) {
        telefono.classList.add("valid");
        mensajeTelefono.textContent= "";
    } else {
        telefono.classList.add("invalid");
        mensajeTelefono.textContent= "Se necesitan al menos 7 caracteres";
    }
});


/*----------- Valida Direccion --------------*/
direccion.addEventListener("focus", function(){
    direccion.classList.remove("valid");
    direccion.classList.remove("invalid");
})

direccion.addEventListener("blur", function(){
    const regex2 = /^(?=.*[a-zA-Z])(?=.*\d)(?=.*\s)/;
    if (regex2.test(direccion.value)) {
        direccion.classList.add("valid");
        mensajeDireccion.textContent= "";
    } else {
        direccion.classList.add("invalid");
        mensajeDireccion.textContent= "No es una direccion valida";
    }
});

/*----------- Valida Cuidad --------------*/
ciudad.addEventListener("focus", function(){
    ciudad.classList.remove("valid");
    ciudad.classList.remove("invalid");
})

ciudad.addEventListener("blur", function(){
    if (ciudad.value.length > 2) {
        ciudad.classList.add('valid');
        mensajeCiudad.textContent = "";
    } else {
        ciudad.classList.add('invalid');
        mensajeCiudad.textContent = "Ingrese una ciudad valida";
    }
});

/*----------- Valida Codigo Postal --------------*/
cpos.addEventListener("focus", function(){
    cpos.classList.remove("valid");
    cpos.classList.remove("invalid");
})

cpos.addEventListener("blur", function(){
    if (cpos.value.length > 2) {
        cpos.classList.add('valid');
        mensajeCpos.textContent = "";
    } else {
        cpos.classList.add('invalid');
        mensajeCpos.textContent = "Ingrese una codigo postal valido";
    }
});



/*----------- Valida DNI --------------*/
dni.addEventListener("focus", function(){
    dni.classList.remove("valid");
    dni.classList.remove("invalid");
})

dni.addEventListener("blur", function(){
    if (dni.value.length > 6 && dni.value.length < 9 ) {
        dni.classList.add('valid');
        mensajeDni.textContent = "";
    } else {
        dni.classList.add('invalid');
        mensajeDni.textContent = "Ingrese un DNI Valido";
    }
});



