function botao() {
    var nome = window.document.getElementById('textonome')
    var datanasc = window.document.getElementById('datanasc')
    var sex = window.document.getElementsByName('sexo')
    var res = window.document.getElementById('res')



    if (sex[0].checked) {
        sex = 'masculino'
    } else if (sex[1].checked) {
        sex = 'feminino'
    }

    res.innerHTML = `Olá ${nome.innerText} você nasceu dia ${datanasc.innerHTML} e é do sexo ${sex}`
}