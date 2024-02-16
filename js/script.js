function reservarVuelo(destino) {
    var listaReservas = document.getElementById('listaReservas');
    var nuevaReserva = document.createElement('li');
    nuevaReserva.textContent = 'Reservado vuelo a ' + destino;
    listaReservas.appendChild(nuevaReserva);
}

document.getElementById('formularioBusqueda').addEventListener('submit', function(event) {
    event.preventDefault();
});


        // recordatorios de viaje
        function agregarRecordatorioViaje(evento, fecha) {
            var listaRecordatorios = document.getElementById('recordatoriosViaje');
            var nuevoRecordatorio = document.createElement('li');
            nuevoRecordatorio.textContent = evento + ' - ' + fecha;
            listaRecordatorios.appendChild(nuevoRecordatorio);
        }
