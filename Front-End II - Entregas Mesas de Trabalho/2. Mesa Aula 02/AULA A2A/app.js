//EXERCICIO DO VIDEO

//alert('olá visitante')

//let resultado = confirm('Deseja excluir este cliente?');

//console.log(resultado)

//let nome = prompt('Digite seu nome:'); //

//alert('Olá ' + nome)

//console.log(nome)

//document.querySelector('h1').innerText += ' ' + nome;

// vai mexer no conteudo interno da TAG <h1>, adicionando a variável "nome" ao texto h1
// o += concatena e atribui
// o script deve estar no fim do html, pois o codigo vai sendo lido em ordem das linhas, e se 
// o script estiver antes do <h1> não vai funcionar


// EXERCICIO ESCRITO

//let tratamentoPersonalizado = confirm('Deseja um tratamento personalizado?')

/* if(tratamentoPersonalizado){
    let nome = prompt('Por favor, digite seu nome:');
    alert('Bem vindo ao nosso site '+ nome + '. Muito obrigado pela sua visita.')
} else {
    alert('obrigado por conectar')
} */

/* if(tratamentoPersonalizado){
    let nome = prompt('Por favor, digite seu nome:');
    document.querySelector('h1').innerText += ' ' + nome + '. Bem vindo ao nosso site, muito obrigado pela sua visita.'
} else {
    document.querySelector('h1').innerText += ' visitante. Obrigado por conectar';
} */

// a barra invertiva + n --> \n, é um caractere que gera um salto para próxima linha


// EXERCICIO - DESAFIO - MANIPULANDO DADOS

/* let idade;
let verificacao;

do{
    idade = parseInt(prompt("Introduza sua idade"));
    verificacao = isNaN(idade)
    if (verificacao === true){
        alert('Escreva uma idade válida!')
    }
} while (verificacao === true) 

if(idade>=18){ 
console.log("É maior de idade"); 
}else{ 
console.log("É menor de idade"); 
}  */