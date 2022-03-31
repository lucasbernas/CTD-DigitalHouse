// pede para o usuário inserir algo e retorna o que o usuário escrever
//prompt()

//parseInt - converte de String pra Numero

/* let escolhaUsuario = parseInt(prompt('1-Pedra, 2-Papel, 3-Tesoura'));

let escolhaBot = parseInt(Math.random()*3+1); */



/* if(escolhaUsuario > 0 && escolhaUsuario < 4){

    if(escolhaUsuario===1){

        if(escolhaBot === 1){
            alert('empate')
        }
        if(escolhaBot === 2){  
            alert('o usuário perdeu')
        }
        if(escolhaBot === 3){
            alert('o usuário ganhou')
        }
    }
    
    if(escolhaUsuario === 2){
    
        if(escolhaBot === 2){
            alert('empate')
        }
        if(escolhaBot === 3){  
            alert('o usuário perdeu')
        }
        if(escolhaBot === 1){
            alert('o usuário ganhou')
        }
    }
    
    if(escolhaUsuario === 3){
    
        if(escolhaBot === 3){
            alert('empate')
        }
        if(escolhaBot === 1){  
            alert('o usuário perdeu')
        }
        if(escolhaBot === 2){
            alert('o usuário ganhou')
        }
    }
}else{
    alert('Escolha errada')
}
 */

let pontosUsuario = 0;
let pontosBot = 0;


/* function compararUsuarioBot(escolhaUsuario,escolhaBot){
    let escolhaUsuario = parseInt(prompt('1-Pedra, 2-Papel, 3-Tesoura'));
    let escolhaBot = parseInt(Math.random() * 3 + 1);
    if(escolhaUsuario===escolhaBot){
        alert('empate')
    }
    if()
} */

let escolhaUsuarioReferencia = document.querySelector('.escolhaUsuario')


do {
    let escolhaUsuario = parseInt(prompt('1-Pedra, 2-Papel, 3-Tesoura'));
    let escolhaBot = parseInt(Math.random() * 3 + 1);

    if (escolhaUsuario > 0 && escolhaUsuario < 4) {

        escolhaUsuarioReferencia.innerHTML = `
        <img src="https://www.pngegg.com/es/png-omcxt">

        `

        if (escolhaUsuario === 1) {



            if (escolhaBot === 1) {
                alert('empate')
            }
            if (escolhaBot === 2) {
                alert('o usuário perdeu')
                pontosBot++
            }
            if (escolhaBot === 3) {
                alert('o usuário ganhou')
                pontosUsuario++
            }
        }

        if (escolhaUsuario === 2) {

            if (escolhaBot === 2) {
                alert('empate')
            }
            if (escolhaBot === 3) {
                alert('o usuário perdeu')
                pontosBot++
            }
            if (escolhaBot === 1) {
                alert('o usuário ganhou')
                pontosUsuario++
            }
        }

        if (escolhaUsuario === 3) {

            if (escolhaBot === 3) {
                alert('empate')
            }
            if (escolhaBot === 1) {
                alert('o usuário perdeu')
                pontosBot++
            }
            if (escolhaBot === 2) {
                alert('o usuário ganhou')
                pontosUsuario++
            }
        }
    } else {
        alert('Escolha errada')
    }
}
while (pontosBot + pontosUsuario < 2)

if (pontosBot > pontosUsuario) {
    alert('O Bot venceu de ' + pontosBot + ' x ' + pontosUsuario)
} if (pontosUsuario > pontosBot) {
    alert('O Usuário venceu de ' + pontosUsuario + ' x ' + pontosBot)
}



