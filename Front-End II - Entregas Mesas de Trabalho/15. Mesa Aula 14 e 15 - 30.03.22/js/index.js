// Aqui realizamos a consulta da promisse, esperando sua resposta assíncrona
let cardRef = document.querySelector('.card');
let usuarioRef = document.querySelector('.usuario');
let emailRef = document.querySelector('.email');
let botaoSubmitRef = document.querySelector('button')



function renderizarDadosUsuario(dados) {

    let nomeUsuario = dados.name.first.concat(" ", dados.name.last)

    cardRef.innerHTML = `
    
    <img src="${dados.picture.large}" alt="">
    <p>${nomeUsuario}</p>
    <p>${dados.email}</p>
    `;

}



botaoSubmitRef.addEventListener('click', event => {
fetch('https://randomuser.me/api/')
    .then(response => {
        return response.json()
    })
    .then(data => {
        //manipulamos a resposta
        console.log(data)
        console.log(data.results[0].picture.large)
        let dados = data.results[0];
        renderizarDadosUsuario(dados);
    });
})



/* -------------------------------- Tarefa 1 -------------------------------- */
    // Aqui devem desenvolver uma função que seja exibida na tela:
    // a foto, o nome completo do usuário e o e-mail.
    // Isto deve ser baseado nas informações que obtemos da API e inseridas no HTML.

/* --------------------------- Tarefa 2 (extra) --------------------------- */
// Aqui você pode ir para o ponto extra de usar o botão que está comentado no HTML.
// Você pode descomentar o código no index.html e usar esse botão para executar uma nova solicitação API, sem recarregar a página.
// Cabe aos desenvolvedores decidirem qual bloco de código deve ser contido dentro de uma função para que ele possa ser executado toda vez que um clique de botão for realizado.