import React from 'react';
import { filhosCompProps } from '../utils/utils';

// É permitido passar nas (props) Number | Boolean | Children | Functions
export default props =>
    <>
        <button onClick={() => props.notificarSaida('Shopping')}>Vou sair</button>
    </>

