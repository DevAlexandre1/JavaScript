let num = [5,8,5,4,1]
num.sort() //colocando em ordem
num.push(8) // Colocando um 8 no final do vetor
let n = num.length // varrável n recebe o numero de posições dentro do vetor

 /* 
console.log(`Nosso vetor é ${num}`)
console.log(`Nosso vetor tem ${num.length}`)
console.log(`o valor da possição tal é ${num[2]}`)//mostra o valor da posição que escolher
 */
/* 
for(var c = 0; c < n; c++){
    console.log(`Valor da posição ${num[c]}`)

}
console.log(`O Vetor tem ${num.length} posições`) */

for(let pos in num){
    console.log('Valor da posição é',num[pos])
}

let valor =num.indexOf(5)
console.log(`A posição do valor requerido é ${valor}`)