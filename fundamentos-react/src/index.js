import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import PrimeiroComponente from './componentes/PrimeiroComponente'

import { Carro as Car, Moto as Mot } from './componentes/DoisComponentes'

import MultiplosElementos , { teste as Teste} from './componentes/MultiplosElementos'

import { Familia } from './componentes/Familia'

ReactDOM.render(
    <>
        <App />
        <PrimeiroComponente valor="Bruno Augusto" isLegal={true}/>
        <Car marca="BMW" modelo="X1" />
        <Mot marca="Honda" modelo="CBR - 500R" />
        <MultiplosElementos />
        <Teste></Teste>
        <Familia />
    </>
, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
