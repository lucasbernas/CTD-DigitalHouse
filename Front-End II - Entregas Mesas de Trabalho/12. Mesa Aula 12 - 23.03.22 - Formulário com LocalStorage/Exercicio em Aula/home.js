let nomeUsuarioReferencia = document.querySelector('b')
//let nomeUsuario = localStorage.getItem('nomeUsuario') //vem la do main.js

//nomeUsuarioReferencia.innerHTML = nomeUsuario

let dadosUsuario = JSON.parse(localStorage.getItem('dadosUsuario'))

nomeUsuarioReferencia.innerHTML = dadosUsuario.nome