let pagina = 1;

pedirDatos();

document.getElementById("formulario").addEventListener("submit", function(event) {
  event.preventDefault(); // evitar recarga
  pagina = 1;
  pedirDatos(); // llamar a la función que consulta la API
});

window.addEventListener("DOMContentLoaded", () => {
  // Event listener para cerrar modal
  document.getElementById("cerrarModal").addEventListener("click", () => {
    document.getElementById("modal").classList.add("hidden");
  });
});

function pedirDatos(event) {

    const tabla = document.getElementById("cuerpoTabla");
    const filtern = document.getElementById("filtronombre")
    const filtere = document.getElementById("filterestatus");
    const filterg = document.getElementById("filtergender");
    const filteres = document.getElementById("filtroespecie");
    const filtert = document.getElementById("filtrotipo");
    const filterv = filtern.value;
    const filterev = filtere.value;
    const filteregv = filterg.value;
    const filtereesv = filteres.value;
    const filtertv = filtert.value;

    const params = new URLSearchParams({
        page: pagina,
        name: filterv,
        status: filterev,
        gender: filteregv,
        species: filtereesv,
        type: filtertv
    });
    
    const url = `https://rickandmortyapi.com/api/character?${params.toString()}`;

    fetch(url)
    .then(response => response.json())
    .then(data => {
        console.log(data.results);

        var html = "";

        for (let personaje of data.results) {
            html += `<tr> 
                        <td><img src="${personaje.image}" class="perfil"></td>
                        <td>${personaje.name}</td>
                        <td>${personaje.status}</td>
                        <td>${personaje.species}</td>
                        <td><button class="ver-mas" data-id="${personaje.id}">Ver más</button></td>
                    <tr>`;
        }

        tabla.innerHTML = html;

        document.getElementById("paginaActual").textContent = pagina;
        document.getElementById("anterior").disabled = !data.info.prev;
        document.getElementById("siguiente").disabled = !data.info.next;

        const botones = document.querySelectorAll(".ver-mas");

        botones.forEach(boton => {
            boton.addEventListener("click", () => {
                const id = boton.getAttribute("data-id");

                fetch(`https://rickandmortyapi.com/api/character/${id}`)
                .then(response => response.json())
                .then(data => {
                    // Mostrar el modal con los datos del personaje
                    document.getElementById("modal").classList.remove("hidden");
                    document.getElementById("modalTitulo").textContent = data.name;
                    document.getElementById("modalMensaje").innerHTML = `
                    <img src="${data.image}" alt="${data.name}" style="width:150px;"><br>
                    <strong>Status:</strong> ${data.status}<br>
                    <strong>Species:</strong> ${data.species}<br>
                    <strong>Gender:</strong> ${data.gender}<br>
                    <strong>Origin:</strong> ${data.origin.name}
                    `;
                })
                .catch(error => {
                    document.getElementById("modal").classList.remove("hidden");
                    document.getElementById("modalTitulo").textContent = "Error";
                    document.getElementById("modalMensaje").textContent = "No se pudo cargar el personaje.";
                    console.error("Error cargando personaje:", error);
                });
            });
        });
    })
    .catch(error => {
        console.error("❌ Error al enviar:", error);
    });
}

document.getElementById("anterior").addEventListener("click", () => {
  if (pagina > 1) {
    pagina--;
    pedirDatos();
  }
});

document.getElementById("siguiente").addEventListener("click", () => {
  pagina++;
  pedirDatos();
});

