import React, { useState, useEffect } from "react";

// Componente funcional não tem estado até utilizar Hooks
// https://reactjs.org/docs/hooks-intro.html
export default props => {
    // let contador = 3

    // operador de desestruturação
    const [contador, setContador] = useState(0)
    // const [status, setStatus] = useState(0)
    // ou 
    // Segundo indice pode atrbuir qualquer nome
    // Indice 0 sempre será o valor que será usando dentro do componente para ler o estado
    // Indice 1 sempre é uma função que altera o estado
    const [parOuImpar, setParOuImpar] = useState('Par')

    // métodos de cliclo de vida
    // é incovado sem pre que o componente for montado ou atualizado
    useEffect(() => {
        contador % 2 === 0 ? setParOuImpar('Par') : setParOuImpar('Impar')
    })

    return (
        <>
            <h1>{contador}</h1>
            <h1>{parOuImpar}</h1>
            <button onClick={() => setContador(contador+1)}>Decremento</button>
            <button onClick={() => setContador(contador+1)}>Incrementar</button>
        </>
    )
}