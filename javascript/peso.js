//Se.1 FUP que solicite o peso de 5 pessoas e calcule a media;
let i;
let soma = 0;
let peso;
for(i = 1; i <= 5; i++) {
    peso = Number(prompt("Digite o peso da " + i + "ª pessoa: "))
    soma = soma + peso;
}
alert("A média dos pesos é: " + (soma / 5));
console.log("A média dos pesos é: " + (soma / 5));

