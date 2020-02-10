// import React from 'react';
// export default class ComponenteClasse extends React.Component

import React, { Component } from 'react';
export default class ComponenteClasse extends Component {

    //Componente baseado em classe ele tem um estado interno
    //  

    render() {
        return (
            // Sem favor nas props será renderizado o padrão
            // Null renderiza o padrão
            // Undefined renderiza o padrão
            <h1>{this.props.valor || 'Olá mundo!'}</h1>
        )
    }
}