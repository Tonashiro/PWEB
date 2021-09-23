function pesquisa(){

  const pessoas = 3;

  var idades = 0;
  var maisVelha = 0;
  var maisNova = 200;
  var pessimo = 0;
  var bom_otimo = 0;
  var mulheres = 0;
  var homens = 0;

  for (let i=0; i<pessoas; i++) {
    let idade = parseInt(prompt(`Informe a idade da pessoa ${i+1}:`));
      maisVelha = (idade > maisVelha) ? idade : maisVelha;
      maisNova = (idade < maisNova) ? idade : maisNova;
      idades += idade;

    let opiniao = parseInt(prompt(`
      Digite sua opinião: \n` +
      "4 - ótimo\n" +
      "3 - bom\n" +
      "2 - regular\n" +
      "1 - péssimo"
    ));
      pessimo += (opiniao === 1) ? 1 : 0;
      bom_otimo += (opiniao === 3 || opiniao === 4) ? 1 : 0;
    let sexo = parseInt(prompt(`
      Informe o sexo da pessoa ${i+1}:\n` +
      "1 - mulher\n" +
      "2 - homem"
    ));
      mulheres += (sexo === 1) ? 1 : 0;
      homens += (sexo === 2) ? 1 : 0;
  }

  idades /= pessoas;
  bom_otimo /= pessoas / 100;

  alert(
    `Média das idades: ${idades}\n` +
    `Idade da pessoa mais velha: ${maisVelha}\n` +
    `Idade da pessoa mais nova: ${maisNova}\n` +
    `Pessoas que responderam péssimo: ${pessimo}\n` +
    `Porcentagem de ótimo e bom: ${bom_otimo}\n` +
    `Quantidade de mulheres: ${mulheres}\n` +
    `Quantidade de homens: ${homens}\n`
  );
}