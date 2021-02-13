function geratabuada() {
    let numero = window.document.getElementById('numero')
    let res = window.document.getElementById('seltab')
    if (numero.value.length == 0) {
        window.alert('Por favor, digite um número!')
    } else {
        let n = Number(numero.value)
        lec c = 1
        while (c <= 10) {
            let item = document.createElement('option')
            item.text = `${numero} x ${c} = ${num*c}`
            res.appendChild(item)
            c++
        }
    }

}