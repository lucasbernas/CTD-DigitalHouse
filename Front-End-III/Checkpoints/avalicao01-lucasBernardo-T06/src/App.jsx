import Card from "./Card";
import { useState } from "react"
import "./index.css"


function App() {

  const [formData, setFormData] = useState({nome:'', profissao:'', matricula:''})

  const[cards, setCards] = useState([])

  const[errors, setErrors] = useState({erroNome:'',erroProfissao:'',erroMatricula:''})

  
  
  function salvar(){

    setErrors({...errors,erroNome:'', erroMatricula:'', erroProfissao:''})

    if(formData.nome === "" || formData.matricula === "" || formData.profissao ===""){

      alert("Preencha os campos para salvar as informações")
      return

    } 
    
    if((formData.nome.length < 3) && (formData.matricula.length < 6 || formData.matricula.length > 8)){
      
      setErrors({...errors, erroNome:"O nome deve possuir 3 ou mais letras!", erroMatricula:"Digite uma matrícula de 6 a 8 números!"})

      return
    }
    
    if(formData.nome.length < 3){

      setErrors({...errors, erroNome:"O nome deve possuir 3 ou mais letras!", erroMatricula:''})

      return 

    } 
    
    if(formData.matricula.length < 6 || formData.matricula.length > 8){

      setErrors({...errors, erroNome:'', erroMatricula:"Digite uma matrícula de 6 a 8 números!"})

      return
      
    }
    
        setErrors({...errors,erroNome:'', erroMatricula:'', erroProfissao:''})

        setCards([...cards, {nome:formData.nome, profissao:formData.profissao, matricula: formData.matricula}])


  }
 
  console.log(errors)

  return (
    <div className="App">
      <div>
          <div className={ (errors.erroNome.length || errors.erroMatricula.length) > 0 ? "form-error" : "form-container"}>
          <h1>Cadastro profissional na Plataforma</h1>
            <form className="form">
              
              <div className="nome-container">
                <p>Nome</p>
                <input
                  className={(errors.erroNome.length || errors.erroMatricula.length) > 0 ? "error":""}
                  placeholder="Insira o nome" 
                  value={formData.nome}
                  onChange={(event)=>
                    setFormData({...formData, nome: event.target.value
                    })}
                />
                {errors.erroNome.length > 0 ? <span>{errors.erroNome}</span> : "" }
              </div>

              <div className="matricula-container">        
                <p>Matrícula</p>
                <input
                  className={(errors.erroNome.length || errors.erroMatricula.length) > 0 ? "error":""}
                  placeholder="Insira a matrícula" 
                  type="number"
                  value={formData.matricula}
                  onChange={(event)=>
                    setFormData({...formData, matricula: event.target.value
                    })}
                />
                {errors.erroMatricula.length > 0 ? <span>{errors.erroMatricula}</span> : "" }
              </div>

              <div className="profissao-container"> 
                <p>Profissão</p>
                <select
                className={(errors.erroNome.length || errors.erroMatricula.length) > 0 ? "error":""}
                  placeholder="Selecione uma profissão"
                  value={formData.profissao}
                  onChange={(event)=>
                    setFormData({...formData, profissao: event.target.value
                    })}
                >
                  <option disabled hidden value="">Selecione uma profissão</option>
                  <option value="Desenvolvedor">Desenvolvedor</option>
                  <option value="Engenheiro-Civil">Engenheiro Civil</option>
                  <option value="Advogado">Advogado</option>
                  <option value="Medico">Médico</option>
                </select>
              </div>
                    
              <div className="button-container">
                <button type="button" onClick={salvar}>Salvar</button>
              </div>
            </form>
          </div>
          {(errors.erroNome.length || errors.erroMatricula.length) > 0 ? <span className="span2">Por favor, verifique os dados inseridos no formulário!</span> : ""}
      </div>
      
      <div className="cards-container">
        <h2>PROFISSIONAIS CADASTRADOS</h2>
        <div className="cards">
          {
            cards.map((card) => {
              return(
                <Card card={card}/>
              )
            })
          }
        </div>
      </div>
    </div>
    
  )
}

export default App
