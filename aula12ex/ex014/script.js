function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date
    var hora = data.getHours()
    var min = data.getMinutes()
   
    //var hora = 3
    msg.innerHTML = `Agora são ${hora}:${min}`
    if (hora >= 0 && hora < 12) {
        img.src = 'fotomanha.png'
        window.document.body.style.background = "#FFD700"
        //Bom dia
    } else if (hora >= 12 && hora < 18) {
        img.src = 'fototarde.png'
        window.document.body.style.background = "#800000"
        //Boa tarde
    } else {
        img.src = 'fotonoite.png'
        window.document.body.style.background = "#8B008B"
        //Boa noite
    }

}
