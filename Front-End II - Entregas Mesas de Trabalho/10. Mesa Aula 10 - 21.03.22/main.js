let inputNomeReferencia = document.querySelector('#inputNome')
let inputSobrenomeReferencia = document.querySelector('#inputSobrenome')
let divUsuarioCadastradoReferencia = document.querySelector('.usuarioCadastrado')
let botaoConcluirCadastroReferencia = document.querySelector('#botaoConcluirCadastro')

let usuario= {}

botaoConcluirCadastroReferencia.addEventListener('click', function(event){

    event.preventDefault()

    usuario.nome = inputNomeReferencia.value.trim()  //a função trim tira os espaços desnecessários antes e depois
    usuario.sobrenome = inputSobrenomeReferencia.value.trim()
    usuario.nomeCompleto = usuario.nome.concat(" ", usuario.sobrenome)

    let substituirA = usuario.nomeCompleto.replace(/a/g,"@")
    let substituirAE = substituirA.replace(/e/g,"3")

    divUsuarioCadastradoReferencia.innerHTML += `
    <h1>Usuário Cadastrado nos métodos:</h1>
        <ol>Método trim():
            <li>${usuario.nome}</li>
            <li>${usuario.sobrenome}</li>
        </ol>

        <ol>Método toUpperCase():
            <li>${usuario.nome.toUpperCase()}</li>
            <li>${usuario.sobrenome.toUpperCase()}</li>
        </ol>

        <ol>Método toLowerCase():
            <li>${usuario.nome.toLowerCase()}</li>
            <li>${usuario.sobrenome.toLowerCase()}</li>
        </ol>

        <ul>Método concat(): 
        
            <li>${usuario.nomeCompleto}</li>
        
        </ul>

        <ul>Método replace():
        
            <li>${substituirAE}</li>
        
        </ul>
    `

})