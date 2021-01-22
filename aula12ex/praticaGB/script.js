function jogo() {
    var jogo = window.document.getElementsByName('jogo')
    var telinha = window.document.getElementById('gif')

    if (jogo[0].checked) {
        telinha.src = 'mariokart.gif'
    } else if (jogo[1].checked) {
        telinha.src = 'pokemon.gif'
    } else if (jogo[2].checked) {
        telinha.src = 'pokemonamarelo.gif'
    } else if (jogo[3].checked) {
        telinha.src = 'Super Mario Bros.gif'
    } else if (jogo[4].checked) {
        telinha.src = 'castlevaniasotn.gif'
    } else if (jogo[5].checked) {
        telinha.src = 'zeldaoot.gif'
    } else if (jogo[6].checked) {
        telinha.src = 'banjokazooie1.gif'
    } else if (jogo[7].checked) {
        telinha.src = 'kh2.gif'
    } else if (jogo[8].checked) {
        telinha.src = 'zeldamm.gif'
    }

    

}