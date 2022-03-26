
let botaoReferencia = document.querySelector('button')

let controladoresReferencia = document.querySelectorAll('.controlador')


for(let controladorReferencia of controladoresReferencia) {

    let inputReferencia = controladorReferencia.children[1]

    inputReferencia.addEventListener('keyup', function() {

        if(inputReferencia.checkValidity()) {

            controladorReferencia.classList.remove('erro')

        } else {

            controladorReferencia.classList.add('erro')

        }

    })

}

let usuarios =[]
let posts =[]
let usuario ={}
let post = {}


botaoReferencia.addEventListener('click',function(event){

    event.preventDefault()

    if (localStorage.hasOwnProperty("postsUsuario")) {
        posts = JSON.parse(localStorage.getItem("postsUsuario"))
    }

    if (localStorage.hasOwnProperty("dadosUsuario")) {
        usuarios = JSON.parse(localStorage.getItem("dadosUsuario"))
    }
     
    usuario={
        nome: controladoresReferencia[0].children[1].value,
        email:controladoresReferencia[1].children[1].value,
        reclamacao:controladoresReferencia[2].children[1].value
    }
      
    usuarios.push(usuario)

    post={
        reclamacao: usuario.reclamacao,
        horario: "10:57 am"
    }

    posts.push(post)

 
    localStorage.setItem('postsUsuario', JSON.stringify(posts))

    localStorage.setItem('dadosUsuario', JSON.stringify(usuarios)) 

    location.href = 'home.html'
})



