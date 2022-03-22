let inputNomeReferencia = document.querySelector('#inputNome')
let inputTermosReferencia = document.querySelector('#inputTermos')
let botaoConcluirCadastroReferencia = document.querySelector('#botaoConcluirCadastro')
let inputsTipoPessoaReferencia = document.getElementsByName('tipoPessoa') //retorna uma lista
let selectCidadeReferencia = document.querySelector('#selectCidade')


let usuario= {}

botaoConcluirCadastroReferencia.addEventListener('click', function(event){

    event.preventDefault()

    usuario.nome = inputNomeReferencia.value.trim()  //a função trim tira os espaços desnecessários antes e depois
    usuario.aceitouTermos = inputTermosReferencia.checked

    for(let tipoPessoa of inputsTipoPessoaReferencia){

        if(tipoPessoa.checked){

            usuario.tipoPessoa = inputsTipoPessoaReferencia.value
        }
    }

    usuario.cidade = selectCidadeReferencia.value

    console.log(usuario)

})