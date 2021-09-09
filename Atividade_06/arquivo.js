function media(){
    var nome = prompt("Digite seu nome:");
    var nota1 = parseFloat(prompt("Digite a primeira nota:"));
    var nota2 = parseFloat(prompt("Digite a segunda nota:"));
    var nota3 = parseFloat(prompt("Digite a terceira nota:"));
    return ((nota1 + nota2 + nota3) / 3);
}

function operacoes() {
    var num1 = parseFloat(prompt("Digite o primeiro numero"));
    var num2 = parseFloat(prompt("Digite o segundo numero"));

    return ("A soma dos dois é: " + (num1 + num2) + "\n"+
            "A subtração do primeiro pelo segundo é: " + (num1 - num2) + "\n" +
            "O produto dos dois é: " + (num1 * num2) + "\n" +
            "A divisão do primeiro pelo segundo é: " + (num1 / num2) + "\n" +
            "O resto da divisão do primeiro pelo segundo é: " + (num1 % num2))
}