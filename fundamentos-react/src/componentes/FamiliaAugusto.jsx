import React from 'react'
// import Membro from './Membro'
// Ou
import { Membro } from './Membro'

const FamiliaAugusto = props => 
    <>
        <Membro nome="Nome 1" sobrenome="Augusto" />
        <Membro nome="Nome 2" sobrenome="Augusto" />
        <Membro nome="Nome 3" sobrenome="Augusto" />
        <Membro nome="Nome 4" sobrenome="Augusto" />


        {/* <Membro nome="Nome 1" sobrenome={props.sobrenome} />
        <Membro nome="Nome 2" sobrenome={props.sobrenome} />
        <Membro nome="Nome 3" sobrenome={props.sobrenome} />
        <Membro nome="Nome 4" sobrenome={props.sobrenome} /> */}
    </>

    export { FamiliaAugusto }