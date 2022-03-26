let reclamacaoReferencia = document.querySelector('.postagens')

let reclamacoesUsuarios = JSON.parse(localStorage.getItem('postsUsuario'))


for (reclamacaoUsuario of reclamacoesUsuarios){

    let reclamacao = reclamacaoUsuario.reclamacao
    let horario = reclamacaoUsuario.horario

    reclamacaoReferencia.innerHTML += `
    <div class="card">
    <div class="card-body" >
        <p class="card-text">${reclamacao}</p>
        <p class="card-text">${horario}</p>
    </div>
    </div>
    `
}

let botaoReferencia = document.querySelector('button')

botaoReferencia.addEventListener('click',function(event){

    event.preventDefault()

    location.href = 'index.html'

})