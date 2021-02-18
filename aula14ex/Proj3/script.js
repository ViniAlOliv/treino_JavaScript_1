function contagem() {
    var pedaco = document.getElementById('pedaco')
    var fatia = document.getElementById('contador')

    if (pedaco.value.length == 0) {
        window.alert('Não tem pizza? Digite quantas fatias de pizza')
    } else {
        let n = Number(pedaco.value)
        let c = n - 1
        fatia.innerHTML =''

        while (c != 0) {
            let item = document.createElement('option')
            item.text = `${n} menos ${c} = ${n-c} fatias comidas`
            fatia.appendChild(item)
            c--
        }
    }
}