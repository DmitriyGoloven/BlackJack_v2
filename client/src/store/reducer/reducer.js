import {handleActions} from "redux-actions";
import {getNewGame, hit, stand, reset, getNewToken} from "./actions";

const defaultState = {
    players: null,
    token: null}

const getGameDta = (state, {payload}) => {
    const {players, activePlayer, winner} = payload.data;
    return {
        ...state,
        players: players,
        activePlayerId: activePlayer.id,
        winner: winner
    }
}

const getToken = (state, {payload}) => {
    console.log(payload.data.token)
    localStorage.setItem('token', payload.data.token);
    return {...state,
        token: payload.data.token,
    };
}

export const reducer = handleActions({
    [getNewToken.success]:getToken,
    [getNewGame.success]: getGameDta,
    [hit.success]: getGameDta,
    [stand.success]: getGameDta,
    [reset.success]: getGameDta

}, defaultState)

export default reducer;

