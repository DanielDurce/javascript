let num = [10,6,1]
num.sort()
num [3]=2
num [8]=15
num.push (6)
let pos = num.indexOf(2)
if (pos == -1){
    console.log ('Valor não encontrado!')
}  else {
    console.log(`O valor esta na posição ${pos}` )
}





console.log (`Nosso vetor é o: ${num}`)
console.log (`O vetor tem ${num.length} posições`)
console.log (`O vetor na posição zero é o : ${num[0]}`) 
console.log (`O valor 2 está na posição ${pos}`)