import {useEffect} from "react";
import React from 'react';
import ButtonTable from "../Buttontable/ButtonTable";
import MainTable from "../Maintable/MainTable";
import Modal from "../Modal/Modal";
import Spinner from "../Spinner/Spinner";




const Game = ({getNewGame, hit, stand, gameState, reset}) => {

    useEffect(() => {
        getNewGame();

    }, [reset])

console.log(gameState)
    if (!gameState.activePlayerId)
        return <Spinner/>

    return (
        <div className={"table"}>
            <MainTable state={gameState}/>
            <ButtonTable onClick={hit} offClick={stand}/>
            <Modal winner={gameState.winner} onclick={reset}/>
        </div>
    );
};

export default Game;

