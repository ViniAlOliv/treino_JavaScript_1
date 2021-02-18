function parimpar(n) {
    if (n%2 == 0 ) {
        return 'Par'
    } else {
        return 'ímpar'
    }
}

//Ambos comandos abaixo são funcionais, sendo o segundo mais ágil e melhor funcional
let res = parimpar(8)
console.log(res)

//console.log(parimpar(34))