import React from 'react'
import ReactDOM from 'react-dom'
import { combineReducers, createStore } from 'redux'
import { Provider } from 'react-redux'

import Field from './field'
import fieldReducer from './fieldReducer'
import counterReducer from './counterReducer'
import Counter from './counter'

const reducers = combineReducers({
    // field: () => ({ value: 'Opa Bruno' })
    // field: fieldReducer,
    counter: counterReducer
})

ReactDOM.render(
    <Provider store={createStore(reducers)}>
        {/* <Field initialValue='Teste' /> */}
        <Counter />
    </Provider>
, document.getElementById('app'))