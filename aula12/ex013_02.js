var nome = 'Joana'
var sexo = 'feminino'
var lanche = 'Hamburguer Giga com coca cola'

switch (sexo) {
    case 'masculino':
        console.log(`Bom dia, Sr. ${nome}`)
        break
    case 'feminino':
        console.log(`Bom dia, Sra. ${nome}`)
        break
}

console.log(`Huum, então você quer um ${lanche}?`)