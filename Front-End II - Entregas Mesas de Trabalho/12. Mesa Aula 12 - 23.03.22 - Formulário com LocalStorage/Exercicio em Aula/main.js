//localStorage.setItem('nomeUsuario', 'Lucas Bernardo')
//so podemos armazenar strings
// ('key','value')


let botaoReferencia = document.querySelector('button')
let inputNomeReferencia = document.querySelector('input')


//JSON para enviar informações entre paginas com linguagens diferentes



// let usuarioJSON = {
//     "nome": "Lucas",
//     "idade": 21
// }


botaoReferencia.addEventListener('click',function(){

    let usuario ={
        nome: inputNomeReferencia.value,
        idade: 21
    }

    let posts = [
        {
            titulo:'titulo',
            descricao: 'descricao',
            imagem: 'link',
            autor: usuario.nome
        },
        {
            titulo:'titulo',
            descricao: 'descricao',
            imagem: 'link',
            autor: usuario.nome
        },
        {
            titulo:'titulo',
            descricao: 'descricao',
            imagem: 'link',
            autor: usuario.nome
        }
    ]

    localStorage.setItem('postsUsuario', JSON.stringify(posts))

    localStorage.setItem('dadosUsuario', JSON.stringify(usuario)) //JS para JSON

    //localStorage.setItem('nomeUsuario', inputNomeReferencia.value)

    location.href = 'home.html'
    //window.location.href = 'home.html' - window já global, localStorage tbm faz parte da window
    //endereço do http

})