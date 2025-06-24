pedirDatos();

function pedirDatos(event) {

    const url = "https://rickandmortyapi.com/api/character";
    const tabla = document.getElementById("cuerpoTabla");

    
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