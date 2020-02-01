import React from "react";

export default props => {

    const aprovados = ['BMW', 'Volvo', 'volkswagen', 'Honda']

    const gerarItens = itens => {return itens.map(item => <li>{item}</li>)}

    return (<ul>{gerarItens(aprovados)}</ul>)
}



