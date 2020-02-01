import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import PrimeiroComponente from './componentes/PrimeiroComponente'
import Carro, { Moto as Mot } from './componentes/DoisComponentes'
import MultiplosElementos , { teste as Teste} from './componentes/MultiplosElementos'
import { FamiliaAugusto } from './componentes/FamiliaAugusto'
import Familia from './componentes/Familia'
import Membro from './componentes/Membro';
import ComponenteComFuncao from "./componentes/ComponenteComFuncao";
import ComunicacaoIndiretaPai from "./componentes/ComunicacaoIndiretaPai";

ReactDOM.render(
    <>
        <App />
        <PrimeiroComponente valor="Bruno Augusto" isLegal={true}/>
        <Carro marca="BMW" modelo="X1" />
        <Mot marca="Honda" modelo="CBR - 500R" />
        <MultiplosElementos />
        <Teste></Teste>
        {/* <FamiliaAugusto sobrenome="Augusto" /> */}
        <FamiliaAugusto />
        <Familia sobrenome="Vasconcellos Augusto">
            <Membro nome="Brunoooooo" />
            <Membro nome="Breno" sobrenome="Augusto"/>
        </Familia>
        <ComponenteComFuncao />
        <ComunicacaoIndiretaPai />
        
    </>
, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
