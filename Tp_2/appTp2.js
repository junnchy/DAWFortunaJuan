pedirDatos();

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
                        <td><a href="${personaje.url}"> Ver Mas </a></td>
                    <tr>`;
        }

        tabla.innerHTML = html;
        
    })
    .catch(error => {
        console.error("❌ Error al enviar:", error);
    });
}

document.getElementById("formulario").addEventListener("submit", function(event) {
  event.preventDefault(); // evitar recarga
  pedirDatos(); // llamar a la función que consulta la API
});