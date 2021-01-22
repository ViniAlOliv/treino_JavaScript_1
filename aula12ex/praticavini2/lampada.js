function acendeapaga(){
    var img = window.document.getElementById('lampada')
    var texto = window.document.getElementById('texto')
    var teste = 'Acesa'
    
    if (teste == 'Acesa') {
        img.src = 'lampadaacesa.png'
        texto = 'Acesa'
        window.document.body.style.background = '#008080'
    } else {
        img.src = 'lampadaapagada.png'
        window.document.body.style.background = '#708090'
    }
}
