let buttonEnviarReference = document.querySelector('#buttonEnviar')
let mainReference = document.querySelector('main')
let textAreaReference = document.querySelector('#texto')
let pTextAreaContentReference = document.querySelector('#alertaTextArea')
let contador = 0;

function mostrarMensagem(){
    alert('O postagem foi enviada')
    //mensagemSucessoReference.classList.toggle('show')
}

buttonEnviarReference.addEventListener('click', function(event){
    mostrarMensagem();
    event.preventDefault(); //para previnir que o "submit" do button recarregue a pagina, e também da um feedback pro usuario
    
    let inputReference = document.querySelector('#titulo');
    let value = inputReference.value;

    let categoriaReference = document.querySelector('#categoria');
    let linguagemReference = document.querySelector('#linguagem');

    let textAreaValue = textAreaReference.value;
    let categoriaValue = categoriaReference.value;
    let linguagemValue = linguagemReference.value;

    mainReference.innerHTML +=`
    <div class="postagem">
        <h1>${value}</h1>
        <h2>Categoria: ${categoriaValue}</h2>
        <h2>Linguagem: ${linguagemValue}</h2>
        <p class="pPostagem">${textAreaValue}</p>
        <p>Para digitar o texto da postagem, o evento "KEYDOWN" foi chamado ${contador} vezes</p>
    </div>
    `
})


textAreaReference.addEventListener('keydown', function(event){
    
    pTextAreaContentReference.innerHTML = `digitando...`;
   
    contador ++;
})

textAreaReference.addEventListener('keyup',function(event){
    pTextAreaContentReference.innerHTML = ``; 
}) 


//titleInputReference.addEventListener('mouseover', mostrarSugestao)

//titleInputReference.addEventListener('mouseout', esconderSugestao)


// como obter o valor do input com javascript






// buttonReference.onclick = function(){
//     mostraMensagem()
// }


// // funciona quando o carregamento todo da pagina for realizado
// window.onload = function() {

//     alert('A página está carregada completamente')

// }

//let titleHintReference = document.querySelector('#titleHint')
//let mensagemSucessoReference = document.querySelector('#mensagemSucesso')

// function mostrarSugestao(){
//     titleHintReference.classList.toggle('show')
// }

// function esconderSugestao(){
//     titleHintReference.classList.remove('show')
// }

// Adiciona como parametros 1º o evento que a gente quer, 2º um função
//buttonReference.addEventListener('click', mostrarMensagem)