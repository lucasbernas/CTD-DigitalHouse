let buttonSomarReference = document.querySelector('#somar');
let buttonSubtrairReference = document.querySelector('#subtrair');
let buttonMultiplicarReference = document.querySelector('#multiplicar');
let buttonDividirReference = document.querySelector('#dividir');
let num1Reference = document.querySelector('#num1')
let num2Reference = document.querySelector('#num2')
let pReference = document.querySelector('p')


buttonSomarReference.addEventListener('click', function(event){
    
    event.preventDefault();

    let value1 = Number(num1Reference.value)
    let value2 = Number(num2Reference.value)

    let resultado = value1 + value2;

    pReference.innerHTML = `
        <p>${resultado}</p>
    `
});

buttonSubtrairReference.addEventListener('click', function(event){
    
    event.preventDefault();

    let value1 = Number(num1Reference.value)
    let value2 = Number(num2Reference.value)

    let resultado = value1 - value2;

    pReference.innerHTML = `
        <p>${resultado}</p>
    `
});

buttonMultiplicarReference.addEventListener('click', function(event){
    
    event.preventDefault();

    let value1 = Number(num1Reference.value)
    let value2 = Number(num2Reference.value)

    let resultado = value1 * value2;

    pReference.innerHTML = `
        <p>${resultado}</p>
    `
});

buttonDividirReference.addEventListener('click', function(event){
    
    event.preventDefault();

    let value1 = Number(num1Reference.value)
    let value2 = Number(num2Reference.value)

    let resultado = value1 / value2;

    pReference.innerHTML = `
        <p>${resultado}</p>
    `
})