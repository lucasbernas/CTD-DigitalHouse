import "./style.css"


function Card(props){

    return(
        <div className={props.card.profissao}>
            <h1 className="card-h1">NOME: {props.card.nome}</h1>
            <h2 className="card-h2">{props.card.profissao}</h2>
            <h3 className="card-h3">MAT: {props.card.matricula}</h3>
        </div>
    )
    
}

export default Card;