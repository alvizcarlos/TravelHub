function reservarVuelo(destino) {
    
}

function agregarComentario(destino) {
    var listaComentarios = document.getElementById('listaComentarios' + destino);
    var nuevoComentario = document.createElement('li');
    var nuevoComentarioTexto = document.getElementById('nuevoComentario' + destino).value;
    nuevoComentario.textContent = nuevoComentarioTexto;
    listaComentarios.appendChild(nuevoComentario);
}
