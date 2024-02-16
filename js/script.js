document.addEventListener('DOMContentLoaded', function () {
    // Datos de destinos directamente en el código
    const destinosData = [
        { nombre: "París", atracciones: ["Torre Eiffel", "Louvre"], alojamiento: ["Hotel A", "Hotel B"] },
        { nombre: "Nueva York", atracciones: ["Estátua de la Libertad", "Central Park"], alojamiento: ["Hotel X", "Hotel Y"] }
        // Agrega más destinos según sea necesario
    ];

    cargarDestinos();
});

function buscarVuelos() {
    // Lógica de búsqueda de vuelos
    alert("Buscando vuelos...");
    cargarDestinos();
}

function cargarDestinos() {
    const destinosInfo = document.getElementById("destinos-info");
    destinosInfo.innerHTML = "";

    destinosData.forEach(destino => {
        const destinoCard = document.createElement("div");
        destinoCard.classList.add("destino-card");
        destinoCard.innerHTML = `<h3>${destino.nombre}</h3>
                                <p><strong>Atracciones:</strong> ${destino.atracciones.join(", ")}</p>
                                <p><strong>Alojamiento:</strong> ${destino.alojamiento.join(", ")}</p>`;
        destinosInfo.appendChild(destinoCard);
    });
}

function reservarVuelo() {
    // Lógica para reservar vuelo
    alert("Vuelo reservado. ¡Gracias!");
}

function enviarComentario() {
    const comentario = document.getElementById("comentario").value;
    // Lógica para enviar comentarios (puedes implementar el almacenamiento en una base de datos)
    alert(`Comentario enviado: ${comentario}`);
}
