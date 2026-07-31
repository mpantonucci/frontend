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
 

var verBoletim = confirm("Deseja visualizar o boletim?");

var situacao = media >= 6 ? "Aprovado" : "Reprovado";

if (verBoletim) {
    var mensagem = "=====================================\n";
    mensagem += "Boletim do aluno\n";
    mensagem += "Nome: " + nomeAluno + "\n";
    mensagem += "Nota 1: " + nota1 + "\n";
    mensagem += "Nota 2: " + nota2 + "\n";
    mensagem += "Nota 3: " + nota3 + "\n";
    mensagem += "Média: " + media + "\n";
    mensagem += "Situacao: " + situacao + "\n";
    mensagem += "=====================================\n";
    alert(mensagem);
    log.console(mensagem);
}else{
    alert("Operação cancelada.");
    log.console("Operação cancelada.");
}
