let vetornatela = [8, 1, 7, 4, 2, 9]
//vetornatela.sort()
//console.log(vetornatela)
/*
for(let pos=0; pos < vetornatela.length ; pos++) {
    console.log(`A posição ${pos} tem o valor ${vetornatela[pos]}`)
}
*/

//Para cada posição dentro de vetornatela...
for(let pos in vetornatela) {
    console.log(`A posição ${pos} tem o valor ${vetornatela[pos]}`)
}


let num = vetornatela.indexOf(9)

//Retorno -1 é quando não tenho um valor que exista


if (num == -1) {
    console.log('O valor procurado não existe')
}else {
    console.log(`O valor está na posição ${num}`)
}
    