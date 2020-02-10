import React, { Component } from "react";
import Main from "../template/main/Main";

const headerProps = {
    icon: 'users',
    title: 'Usuários',
    subtitle: 'Cadastro de usuários: Incluir Listar, Alterar e Excluir'
}

export default class UsrCrud extends Component {
    render() {
        return(
            <Main {...headerProps} >
                Cadastro de Usuário
            </Main>
        )
    }
}