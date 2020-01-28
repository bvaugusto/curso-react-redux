import React from 'react'

// export default props => [
//     <h1>Parte 1</h1>,
//     <h1>Parte 2</h1>
// ]


// export default props => 
//     <>
//         <h1>Parte 1</h1>
//         <h1>Parte 2</h1>
//     </>


// export default props => 
//     <React.Fragment>
//         <h1>Parte 1</h1>
//         <h1>Parte 2</h1>
//     </React.Fragment>


// Mais usado!!!
export default props => 
    <div>
        <h1>Parte 1 - export default </h1>
        <h1>Parte 2 - export default </h1>
    </div>


const teste = props => <h1>Teste 1 export {}</h1>

export { teste }