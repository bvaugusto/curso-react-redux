import React from 'react'

//Componente baseado em função

//Ex: 1
// function primeiro() {
//     return <h1>Primeiro Componente</h1>
// }
// export default primeiro

//Ex: 2
// export default function() {
//     return <h1>Primeiro Componente!</h1>
// }

//Ex: 3
// export default () => <h1>Primeiro Componente!!!</h1>

//Ex: 4
// export default () => (<h1>Primeiro Componente!!!</h1>)

//Ex: 5
// export default () => 
//     <div>
//         <h1>Primeiro Componente!!!</h1>
//     </div>


//Ex: 6
export default (props) => 
    <>
        <h1>Primeiro Componente!!!</h1>
        <h2>{props.valor}</h2>
        <h3>IsLegal? {props.isLegal ? 'Sim' : 'Não'}</h3>
        <h4>{1+1}</h4>
        <p>{Math.pow(2,8)}</p>
        <p>{Math.random()}</p>
        <p>{4**2}</p>
    </>