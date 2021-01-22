function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    //var hora = data.getHours()
    var hora = 19
    var min = data.getMinutes()

    msg.innerHTML = `Agora são ${hora}:${min} hora(s)`
    if (hora >= 0 && hora < 12) {
        img.src = 'fotomanha.png'
        window.document.body.style.background = '#FFD700'
    } else if (hora >= 12 && hora < 18) {
        img.src = 'fototarde.png'
        window.document.body.style.background = '#FF8C00'
    } else {
        img.src = 'fotonoite.png'
        window.document.body.style.background = '#4B0082'
    }

}