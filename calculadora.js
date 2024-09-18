const ask = require("readline-sync")

console.clear()
let num1 = Number(ask.question("Qual sera o primeiro numero?"))
let num2 = Number(ask.question("Qual sera o segundo numero?"))
let calculadorarodando = true

while(calculadorarodando){
    console.clear()
   console.log(`
Seus numeros sao: ${num1} e ${num2}
    ___________________________________
    [1] - soma
    [2] - subtracao
    [3] - divisao
    [4] - multiplicacao
    [5] - calculo de mod
    [6] - para inserir novos numeros
    [0] - encerrar programa
    ___________________________________
    `)

    let operacao = Number(ask.question("Qual sera a operacao?"))

    switch(operacao){
        case  1:
    console.log(num1 + num2)
            break
        case 2:
    console.log(num1 - num2)
            break
        case 3:
    console.log(num1 / num2)
            break
        case 4:
    console.log(num1 * num2)
            break
        case 5:
    console.log(num1 % num2)
            break 
        case 6:
        console.clear()
        num1 = Number(ask.question("Digite um novo primeiro numero: "))
        num2 = Number(ask.question("Digite um novo segundo numero: "))
            break    
        case 0:
        calculadorarodando = false
            break
    }
    ask.question("Aperte enter para continuar")
    console.clear()
}
