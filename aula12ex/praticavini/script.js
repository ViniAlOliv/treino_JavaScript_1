function sinal() {
    var img = window.document.getElementById('image')
    var semaf = 'Verde'

    img.innerHTML = `Cor ${semaf}`

    if (semaf == 'Vermelho') {
        img.src = 'fotored.png'
    } else if (semaf == 'Amarelo') {
        img.src = 'fotoyellow.png'
    } else if (semaf == 'Verde') {
        img.src = 'fotogreen.png'
    } else {
        img.src = 'fotogreen.png'
    }
}

