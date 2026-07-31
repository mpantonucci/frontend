console.log("Olá, mundo!");


var salarioBruto = 2000;
var salarioLiquido = salarioBruto - (salarioBruto * 0.2);
var nomeFuncionario = "Paula";

var mensagem = "O funcionário " + nomeFuncionario + " tem um salário líquido de R$ " + salarioLiquido + ". O salário bruto é de R$ " + salarioBruto + ".";
var mensagem2 = `O funcionário ${nomeFuncionario} tem um salário líquido de R$ ${salarioLiquido}. O salário bruto é de R$ ${salarioBruto}.`;

/* console.log(mensagem);
console.log(mensagem2);


var salario = prompt("Digite o salário do funcionário:");
console.log('O salário digitado foi: R$ ' + salario + '.');

var novoSalario;    
var mensagemNovoSalario
if (salario < 1000) {
    novoSalario = Number(salario) + 100;
    mensagemNovoSalario = `O salário é inferior a R$ 1000. O novo salário será R$ ${novoSalario}.`;
}else{
    novoSalario = salario;
    mensagemNovoSalario = `O salário é igual ou superior a R$ 1000. O salário fica o mesmo R$ ${novoSalario}.`;
}

    console.log(mensagemNovoSalario); */

/* var confirmar = confirm("Tem certeza que deseja fechar?");
console.log(confirmar);
 */

//alert ("Olá mundo!!");

var nomeAluno = prompt("Digite o nome do aluno:");

var nota1 = Number(prompt("Digite a primeira nota do aluno:"));
var nota2 = Number(prompt("Digite a segunda nota do aluno:"));
var nota3 = Number(prompt("Digite a terceira nota do aluno:"));
var media = (nota1 + nota2 + nota3) / 3;
 
if (media >= 6) {
    alert(`Aluno ${nomeAluno} foi aprovado com a média ${media}!`);
}else if (media >= 5) {
    alert(`Aluno ${nomeAluno} está em recuperação com a média ${media}!`);
}else{
    alert(`Aluno ${nomeAluno} foi reprovado!`);
}

