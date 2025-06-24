pedirDatos();

function pedirDatos(event) {

    const url = "https://rickandmortyapi.com/api/character";
    const li = document.getElementById("listadoPersonajes");

    
    fetch(url)
    .then(response => response.json())
    .then(data => {
        console.log(data.results);

        var html = "";

        for (let personaje of data.results) {
            html += `<li>${personaje.name}</li>`;
        }

        li.innerHTML = html;
        
    })
    .catch(error => {
        console.error("❌ Error al enviar:", error);
    });

}