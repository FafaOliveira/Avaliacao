//Se4. FUP que Faça com que o usuário escolha entre 4 opçoes: calcular a média de 5 pesos, contar números negativos, realizar uma operação matemática ou sair do programa;
let escolha;
do {
    escolha = prompt("Escolha uma opção:\n1 - Calcular a média de 5 pesos\n2 - Contar números negativos\n3 - Realizar uma operação matemática\n4 - Sair do programa").toLowerCase();
    switch(escolha) {
        case "1":
        case "calcular a média de 5 pesos": 
let i;
let soma = 0;
let peso;
for(i = 1; i <= 5; i++) {
    peso = Number(prompt("Digite o peso da " + i + "ª pessoa: "))
    soma = soma + peso;
}
alert("A média dos pesos é: " + (soma / 5));
console.log("A média dos pesos é: " + (soma / 5));
            break;
        case "2":
        case "contar números negativos":
            let j;
let numero;
let contadorNegativos = 0;
for(j = 1; j <= 10; j++) {
    numero = Number(prompt("Digite o " + j + "º número: "));
    if(numero < 0) {
        contadorNegativos++;
    }
}
alert("A quantidade de números negativos é: " + contadorNegativos);
console.log("A quantidade de números negativos é: " + contadorNegativos);
            break;
        case "3":
        case "realizar uma operação matemática":
            let num1 = Number(prompt("Digite o primeiro número: "));
let num2 = Number(prompt("Digite o segundo número: "));
let operacao = prompt("Digite a operação desejada (soma, subtração, multiplicação, divisão): ").toLowerCase();
let resultado;
switch(operacao) {
    case "soma":
        resultado = num1 + num2;
        break;
    case "subtração":
        resultado = num1 - num2;   
        break;
    case "multiplicação":
        resultado = num1 * num2;
        break;
    case "divisão":
        if(num2 !== 0) {
            resultado = num1 / num2;
        }
        else {
            alert("Erro: Divisão por zero não é permitida.");
            console.log("Erro: Divisão por zero não é permitida.");
            resultado = null;
        }
        break;
    default:
        alert("Operação inválida.");
        console.log("Operação inválida.");
        resultado = null;
}
if(resultado !== null) {
    alert("O resultado da " + operacao + " é: " + resultado);
    console.log("O resultado da " + operacao + " é: " + resultado);
}
            break;
        case "4":
        case "sair do programa":
            alert("Saindo do programa.");
            console.log("Saindo do programa.");
            break;
        default:
            alert("Opção inválida. Tente novamente.");
            console.log("Opção inválida. Tente novamente.");
    }
} while(escolha !== "4" && escolha !== "sair do programa");