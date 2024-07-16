function encriptarTexto() {
    const input = document.getElementById('texto-entrada').value;
    const seccionSalida = document.getElementById('seccion-salida');
    const textoEncriptado = input.replace(/[aeiou]/g, function (match) {
        switch (match) {
            case 'a':
                return 'ai';
            case 'e':
                return 'enter';
            case 'i':
                return 'imes';
            case 'o':
                return 'ober';
            case 'u':
                return 'ufat';
            default:
                return match;
        }
    });

    seccionSalida.innerHTML = `
        <div class="contenido-salida">
            <h2>Mensaje Encriptado</h2>
            <p id="texto-salida">${textoEncriptado}</p>
            <button id="boton-copiar" onclick="copiarTexto()">Copiar</button>
        </div>
    `;
}

function desencriptarTexto() {
    const input = document.getElementById('texto-entrada').value;
    const seccionSalida = document.getElementById('seccion-salida');
    const textoDesencriptado = input.replace(/ai|enter|imes|ober|ufat/g, function (match) {
        switch (match) {
            case 'ai':
                return 'a';
            case 'enter':
                return 'e';
            case 'imes':
                return 'i';
            case 'ober':
                return 'o';
            case 'ufat':
                return 'u';
            default:
                return match;
        }
    });

    seccionSalida.innerHTML = `
        <div class="contenido-salida">
            <h2>Mensaje Desencriptado</h2>
            <p id="texto-salida">${textoDesencriptado}</p>
            <button id="boton-copiar" onclick="copiarTexto()">Copiar</button>
        </div>
        <button id="boton-copiar" onclick="copiarTexto()" class="white-button">Copiar</button>
    `;
}

function copiarTexto() {
    const textoSalida = document.getElementById('texto-salida').innerText;
    navigator.clipboard.writeText(textoSalida).then(function() {
        alert('Texto copiado al portapapeles');
    }, function(err) {
        console.error('Error al copiar el texto: ', err);
    });
}
