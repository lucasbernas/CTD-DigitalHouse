
let pontosUsuario = 0;
let pontosBot = 0;
let nome = prompt('Bem-vindo! Qual seu nome?')

document.querySelector('h2').innerText += ' ' + nome + '. Vamos jogar um jogo?'

let confirmacao = confirm('Você quer jogar Jokenpo?')

if (confirmacao){

    alert('Essa vai ser uma melhor de 3, então se prepara que vai começar!')

do{
    let escolhaUsuario = parseInt(prompt('Escolha: 1-Pedra; 2-Papel; 3-Tesoura'))
    let escolhaBot = parseInt(Math.random()*3+1)
    
    if (escolhaUsuario > 0 && escolhaUsuario < 4){
        if(escolhaUsuario === escolhaBot){
            alert('Deu empate!')
        }

        if(escolhaUsuario === 1){
            if(escolhaBot === 2){
                alert('O Bot ganhou!')
                pontosBot++
            }
            if(escolhaBot === 3){
                alert('Você ganhou!')
                pontosUsuario++
            }
        }

        if(escolhaUsuario === 2){
            if(escolhaBot === 3){
                alert('O Bot ganhou!')
                pontosBot++
            }
            if(escolhaBot === 1){
                alert('Você ganhou!')
                pontosUsuario++
            }
        }

        if(escolhaUsuario === 3){
            if(escolhaBot === 1){
                alert('O Bot ganhou!')
                pontosBot++
            }
            if(escolhaBot === 2){
                alert('Você ganhou!')
                pontosUsuario++
            }
        } 
        alert('O placar está: Usuário ' + pontosUsuario + ' X ' + pontosBot + ' Bot' )

    } else {
        alert('Escolha errada! Escolha um das opções!')
    } 
} while ((pontosBot + pontosUsuario) < 3)

if (pontosBot > pontosUsuario) {
    alert('O Bot venceu de ' + pontosBot + ' x ' + pontosUsuario)
    document.querySelector('h2').innerText = 'Não foi dessa vez ' + nome + '. Mas você pode tentar de novo atualizando a página'
} if (pontosUsuario > pontosBot) {
    alert('O Usuário venceu de ' + pontosUsuario + ' x ' + pontosBot)
    document.querySelector('h2').innerText = 'Paranbéns ' + nome + '! Você venceu! Você pode jogar novamente atualizando a página'
}
} else {
    document.querySelector('h2').innerText = 'Não?! :( Obrigado por visitar então ' + nome 
}