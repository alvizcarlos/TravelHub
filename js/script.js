function reservarVuelo(destino) {
    
}

function agregarComentario(destino) {
    var listaComentarios = document.getElementById('listaComentarios' + destino);
    var nuevoComentario = document.createElement('li');
    var nuevoComentarioTexto = document.getElementById('nuevoComentario' + destino).value;
    nuevoComentario.textContent = nuevoComentarioTexto;
    listaComentarios.appendChild(nuevoComentario);
}

// Ejemplo de vuelos recientes o cercanos
const vuelosRecientes = [
    { origen: "Bogotá", destino: "Medellín", fecha: "2024-02-20" },
    { origen: "Medellín", destino: "Cali", fecha: "2024-02-22" },
    { origen: "Bogotá", destino: "Cartagena", fecha: "2024-02-25" }
];

document.getElementById('formularioBusqueda').addEventListener('submit', function (event) {
    event.preventDefault();

    // Obtener valores del formulario
    const origen = document.getElementById('origen').value;
    const destino = document.getElementById('destino').value;
    const fecha = document.getElementById('fecha').value;

    // búsqueda
    if (origen && destino) {
        // Filtrar vuelos recientes o cercanos basados en la fecha 
        const vuelosFiltrados = vuelosRecientes.filter(vuelo => vuelo.origen === origen && vuelo.destino === destino);
        
        // Muestra los vuelos encontrados 
        if (vuelosFiltrados.length > 0) {
            alert('Vuelos encontrados: ' + JSON.stringify(vuelosFiltrados));
        } else {
            alert('No se encontraron vuelos para la ruta seleccionada.');
        }
    } else {
        alert('Por favor, selecciona origen y destino.');
    }
});
