function funcao(){
  var array = [];

  for(let i = 0; i < 3; i++) {
    var entrada = parseInt(prompt(`Informe o valor ${i+1}: `));
    array.push(entrada)
  }

  array.sort((a, b) => a - b)

  alert("O maior número é: " + array.slice(-1) + "\n" +
        "Números ordenados em ordem crescente: " + array)
}