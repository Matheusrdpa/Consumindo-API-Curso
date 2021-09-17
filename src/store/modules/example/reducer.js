import * as types from '../types';

const initialState = {
    botaoClicado: false,
}

export default function (state = initialState,action) {
    switch(action.type){
        case types.BOTAO_CLICADO_SUCCESS:{
            console.log('aqui deu bom');
            const newState = {...state};
            newState.botaoClicado = !newState.botaoClicado;
            return newState;
        }

        case types.BOTAO_CLICADO_FAILURE:{
            console.log('aqui deu erro');
            return state;
        }

        case types.BOTAO_CLICADO_REQUEST:{
            console.log('fazendo a requisiçao');
            return state;
        }
            
        default:{
            return state;
        }
    }
}