const nombre = document.getElementById("nombre");
const mensaje = document.getElementById("errorNombre");

const email = document.getElementById("email");
const mensajeEmail = document.getElementById("errorEmail");

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

validar();

window.addEventListener("DOMContentLoaded", () => {
  // Event listener para cerrar modal
  document.getElementById("cerrarModal").addEventListener("click", () => {
    document.getElementById("modal").classList.add("hidden");
  });

  // Nuevo: asignar función enviarDatos al evento submit del formulario
  const form = document.getElementById("formulario");
  form.addEventListener("submit", enviarDatos);

  // Recarga de datos guardados en localStorage
  const datosGuardados = localStorage.getItem("datosFormulario");
  if (datosGuardados) {
    const datos = JSON.parse(datosGuardados);
    document.getElementById("nombre").value = datos.nombre || "";
    document.getElementById("email").value = datos.email || "";
    document.getElementById("edad").value = datos.edad || "";
    document.getElementById("telefono").value = datos.telefono || "";
    document.getElementById("direccion").value = datos.direccion || "";
    document.getElementById("ciudad").value = datos.ciudad || "";
    document.getElementById("cpos").value = datos.cpos || "";
    document.getElementById("dni").value = datos.dni || "";
  }
});

/*-----------------------Validar Campos----------------------------*/

function validar(){

    let valido = true;

    valido = validaVacio(valido);

    /*----------- Valida Nombre --------------*/
    nombre.addEventListener("focus", function(){
        nombre.classList.remove("valid");
        nombre.classList.remove("invalid");
        valido = validaVacio(valido);
    })
    

    nombre.addEventListener("blur", function () {
        if (nombre.value.length < 5 || !(nombre.value.includes(" "))) {
            mensaje.textContent = "El nombre debe tener más de 6 letras y al menos un espacio entre medio";
            nombre.classList.add('invalid');
            valido = false;

        }else if (nombre.value.length > 5 && nombre.value.includes(" ")){
            mensaje.textContent = "";
            nombre.classList.add('valid');
        }
    });

    /*----------- Valida Mail--------------*/
    email.addEventListener("focus", function(){
        email.classList.remove("valid");
        email.classList.remove("invalid");
        valido = validaVacio(valido);
    })

    email.addEventListener("blur",function() {
        if (!(email.value.includes('@')) || !(email.value.includes('.com'))) {
            mensajeEmail.textContent = "Ingresar un email valido";
            email.classList.add('invalid');
            valido = false;
        }else{
            mensajeEmail.textContent="";
            email.classList.add('valid');
        }
    })


    /*----------- Valida Pass --------------*/

    pass.addEventListener("focus", function(){
        pass.classList.remove("valid");
        pass.classList.remove("invalid");
        valido = validaVacio(valido);
    })

    pass.addEventListener("blur", function(){
        const regex = /^(?=.*[a-zA-Z])(?=.*\d)/;
        if(regex.test(pass.value) && pass.value.length > 7){
            pass.classList.add("valid");
            mensajePass.textContent = "";
        }else{
            mensajePass.textContent = "La contraseña elegida debe tener 8 caracteres, formados por letras y números";
            pass.classList.add("invalid");
            valido = false;
        }
    })


    /*----------- Valida Edad --------------*/

    edad.addEventListener("focus", function(){
        edad.classList.remove("valid");
        edad.classList.remove("invalid");
        valido = validaVacio(valido);
    })

    edad.addEventListener("blur", function(){
        if (edad.value > 17) {
            edad.classList.add('valid');
            mensajeEdad.textContent = "";
        }else{
            edad.classList.add('invalid');
            mensajeEdad.textContent = "Tienes que tener al menos 18 años";
            valido = false;
        }
    });

    /*----------- Valida Telefono --------------*/
    telefono.addEventListener("focus", function(){
        telefono.classList.remove("valid");
        telefono.classList.remove("invalid");
        valido = validaVacio(valido);
    })

    telefono.addEventListener("blur",function(){
        if (telefono.value.length > 6) {
            telefono.classList.add("valid");
            mensajeTelefono.textContent= "";
        } else {
            telefono.classList.add("invalid");
            mensajeTelefono.textContent= "Se necesitan al menos 7 caracteres";
            valido = false;
        }
    });


    /*----------- Valida Direccion --------------*/
    direccion.addEventListener("focus", function(){
        direccion.classList.remove("valid");
        direccion.classList.remove("invalid");
        valido = validaVacio(valido);
    })

    direccion.addEventListener("blur", function(){
        const regex2 = /^(?=.*[a-zA-Z])(?=.*\d)(?=.*\s)/;
        if (regex2.test(direccion.value)) {
            direccion.classList.add("valid");
            mensajeDireccion.textContent= "";
        } else {
            direccion.classList.add("invalid");
            mensajeDireccion.textContent= "No es una direccion valida";
            valido = false;
        }
    });

    /*----------- Valida Cuidad --------------*/
    ciudad.addEventListener("focus", function(){
        ciudad.classList.remove("valid");
        ciudad.classList.remove("invalid");
        valido = validaVacio(valido);
    })

    ciudad.addEventListener("blur", function(){
        if (ciudad.value.length > 2) {
            ciudad.classList.add('valid');
            mensajeCiudad.textContent = "";
        } else {
            ciudad.classList.add('invalid');
            mensajeCiudad.textContent = "Ingrese una ciudad valida";
            valido = false;
        }
    });

    /*----------- Valida Codigo Postal --------------*/
    cpos.addEventListener("focus", function(){
        cpos.classList.remove("valid");
        cpos.classList.remove("invalid");
        valido = validaVacio(valido);
    })

    cpos.addEventListener("blur", function(){
        if (cpos.value.length > 2) {
            cpos.classList.add('valid');
            mensajeCpos.textContent = "";
        } else {
            cpos.classList.add('invalid');
            mensajeCpos.textContent = "Ingrese una codigo postal valido";
            valido = false;
        }
    });



    /*----------- Valida DNI --------------*/
    dni.addEventListener("focus", function(){
        dni.classList.remove("valid");
        dni.classList.remove("invalid");
        valido = validaVacio(valido);
    })

    dni.addEventListener("blur", function(){
        if (dni.value.length > 6 && dni.value.length < 9 ) {
            dni.classList.add('valid');
            mensajeDni.textContent = "";
        } else {
            dni.classList.add('invalid');
            mensajeDni.textContent = "Ingrese un DNI Valido";
            valido = false;
        }
    });
    
    return(valido);
};

/*----------------------Envio de Datos--------------------------*/

function enviarDatos(event) {
    event.preventDefault();

    if(!validar()){
        alert("Faltan datos en el formulario por favor revisar y volver a enviar");
        return;
        
    }

    const nombre = document.getElementById("nombre").value;
    const email = document.getElementById("email").value;
    const pass = document.getElementById("pass").value;
    const edad = document.getElementById("edad").value;       
    const telefono = document.getElementById("telefono").value;
    const direccion = document.getElementById("direccion").value;
    const ciudad = document.getElementById("ciudad").value;
    const cpos = document.getElementById("cpos").value;
    const dni = document.getElementById("dni").value;
            
    const params = new URLSearchParams({
        nombre: nombre,
        email: email,
        pass: pass,
        edad: edad,
        telefono: telefono,
        direccion: direccion,
        ciudad: ciudad,
        cpos: cpos,
        dni: dni
    })

    const url = `https://jsonplaceholder.typicode.com/posts?${params.toString()}`;
    
    fetch(url)
    .then(response => response.json())
    .then(data => {
        document.getElementById("modal").classList.remove("hidden");
        document.getElementById("modalTitulo").textContent = "✅ Suscripción exitosa";
        document.getElementById("modalMensaje").textContent =  "Datos enviados correctamente. Primer título: " + data[0].title;
        const datos = {
            nombre,
            email,
            edad,
            telefono,
            direccion: document.getElementById("direccion").value.trim(),
            ciudad: document.getElementById("ciudad").value.trim(),
            cpos: document.getElementById("cpos").value.trim(),
            dni: document.getElementById("dni").value.trim()
            };
            localStorage.setItem("datosFormulario", JSON.stringify(datos));
        })
    .catch(error => {
        console.error("❌ Error al enviar:", error);
    });

}

function validaVacio(val){
    console.log("Entra al validador", val)
    if (nombre.value === "" || email.value === "" || pass.value === "" || edad.value === "" 
        || telefono.value === "" || direccion.value === "" || ciudad.value === "" || cpos.value === "" || dni.value === "") {
        val = false
    }
    return val;
}