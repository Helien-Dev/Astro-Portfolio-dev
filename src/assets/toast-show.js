function copiartexto(texto) {
    navigator.clipboard.writeText(texto)
    .then(function () {
        var mensaje = document.getElementById('toast');
        mensaje.style.display = 'block'

        setTimeout(function() {
            mensaje.style.display = 'none'
        }, 2000)

    })
    .catch(function(error) {
        console.log('Error al intentar copiar al portapapeles: ' + error)
    })
}


var textCopy = 'Alvaroaviladev@gmail.com'

copiartexto(textCopy)
