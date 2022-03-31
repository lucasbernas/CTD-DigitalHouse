//Entrega Atividade 1 - Funções de percorrer Arrays

// Grupo - Mesa 5 - Lucas Bernardo, Ezio Lorenzetti, Júlio Campos, Felipe Roberto Rocha, Anderson Ferreira

//const numbers = [1,3,5,8,12,42,96,1024];

//let soma = 0;
//for(let i = 0; i < numbers.length; i++) {
   // soma += numbers[i];
   // console.log(soma)
//}


const user = {
    name: 'Lucas Bernardo',
    age: 27,
    birthDate: "10/12/1994",
    userDetail: 'teste'
}

//console.log(user['name'])

// ideal pra pegar as propriedades
for(let userDetail in user){
    console.log(userDetail)
}

// ideal pra pegar os valores
for(let userDetail in user){
    console.log(user[userDetail])
}