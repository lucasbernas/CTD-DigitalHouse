 let inputCepRef = document.querySelector('#inputCep')
 let botaoSubmitRef = document.querySelector('button')
 let subtituloCidadeRef = document.querySelector('b')
 let inputRuaRef = document.querySelector('#inputRua')

 botaoSubmitRef.addEventListener('click', event => {
    
    event.preventDefault()

    //console.log(inputCepRef.value)

    //fetch(`https://viacep.com.br/ws/01001000/json/`)

    //let response = await fetch(`https://viacep.com.br/ws/${inputCepRef.value}/json/`)
    //response.then()

    fetch(`https://viacep.com.br/ws/${inputCepRef.value}/json/`)
        .then(
            response => {
                response.json()
                    .then(
                        data => {

                            if(data.erro){
                                alert('Cep não encontrado')
                            }
                            else{
                                inputRuaRef.value = data.logradouro
                                subtituloCidadeRef.innerHTML = data.localidade
                                console.log(data)
                            }
                        }
                    )
            }

        )


 })