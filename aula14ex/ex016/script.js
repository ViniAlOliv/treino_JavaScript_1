function contar() {
    let inicio = window.document.getElementById('inicio')
    let fim = window.document.getElementById('fim')
    let passo = window.document.getElementById('passo')
    let res = window.document.getElementById('res')

    //let = var. Não há inicialmente nenhuma diferença;

    /*if (inicio = "") {
        window.alert('O campo início deve ser preenchido')
    } else if (fim = "") {
        window.alert('O campo fim deve ser preenchido')
    } else if (passo = "") {
        window.alert('O campo passo deve ser preenchido')
    } */

    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        window.alert('[ERRO] Faltam dados')
    } else {
        res.innerHTML = 'Contando...'
        let i = Number(inicio.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        if (p <= 0 ) {
            window.alert('Passo inválido! Considerando passo 1')
            p = 1
        }
        if (i < f) {
            //Contagem crescente
            for (let c = i; c <= f ; c += p) {
                res.innerHTML += `${c} \u{1F449}`
            }
        } else {
            //Contagem regressiva
            for(let c = i ; c >= f ; c -= p) {
                res.innerHTML += `${c} \u{1F449}`
            }
            
        }
        res.innerHTML += `\u{1F3C1}`

        
    }



}