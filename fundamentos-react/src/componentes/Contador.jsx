import React, { Component } from "react";

export default class Contador extends Component {

    //Solução verbosa
    // Função Bind
    // constructor(props) {
    //     //passar as props para o controtor pai Component
    //     super(props)
    //     //apontar o this no método
    //     this.maisUm = this.maisUm.bind(this)
    // }
    
    // maisUm() {
    //     // this.props.numero++
    //     console.log(this)
    // }

    // Função anonima arrow function 
    // Resolve o this de forma diferente, o this estará associado ao local que a função foi inscrita dentro do código
    // Contexto léxico
    // Função Arrow
    // maisUm = () => {
        // ***********************
        // Tudo que é recebido por propriedade não é mudado - read only
        // this.props.numero++
        // this.props.numero = this.props.numero + 1
        // ***********************
    // }

    state = {
        numero: 0
    }

    maisUm = (e) => {
        // por padrão é passado o evento
        console.log(e)
        // quem invocou o evento
        console.log(e.target)
        this.setState({ numero: this.state.numero + 1 })
    }

    menosUm = () => {
        // this.setState({ numero: this.state.numero - 1 })
        // OU
        this.alterarNumero(-1)
    }

    alterarNumero = diferenca => {
        this.setState({
            numero: this.state.numero + diferenca
        })
    }

    render() {
        return (
            <>
                <div>Número: {this.state.numero}</div>
                {/* <button onClick={this.maisUm}>Incrementar</button> */}

                {/* Arrow function: trabalha com o this de forma diferente, garante que o this será associado ao local que a função foi chamda */}
                {/* Função Arrow (onclick) */}
                {/* <button onClick={() => this.maisUm()}>Incrementar</button> */}

                <button onClick={this.maisUm}>Incrementar</button>
                <button onClick={this.menosUm}>Decrementar</button>
                <br/>
                <button onClick={() => this.alterarNumero(10)}>Incrementar 10</button>
                <button onClick={() => this.alterarNumero(-10)}>Decrementar 10</button>
            </>
        )
    }
}
