import {createAction} from "redux-actions"

const createRequestAction = (type, payload) => {
    const action = createAction(type, payload);
    action.success = type + '_SUCCESS';
    return action;
}


export const getNewToken = createRequestAction('GET_NEW_TOKEN', (players)=>({
    request: {
        method: 'post',
        url: '/login',
        data: players
    }

}))

export const getNewGame = createRequestAction('GET_NEW_GAME', () => ({
    request: {
        method: 'get',
        url: '/game'
    }
}));

export const hit = createRequestAction('HIT', () => ({
    request: {
        method: 'post',
        url: '/hit'
    }
}));

export const stand = createRequestAction('STAND', () => ({
    request: {
        method: 'post',
        url: '/stand'
    }
}));

export const reset = createRequestAction('RESET', () => ({
    request: {
        method: 'post',
        url: '/reset'
    }
}));