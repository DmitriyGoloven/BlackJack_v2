import {useEffect} from "react";
import React from 'react';
import ButtonTable from "../Buttontable/ButtonTable";
import MainTable from "../Maintable/MainTable";
import Modal from "../Modal/Modal";
import Spinner from "../Spinner/Spinner";
import { useNavigate }  from 'react-router-dom';


const Game = ({getNewGame, hit, stand, gameState, reset}) => {
    let navigate = useNavigate()

    useEffect(() => {
        getNewGame();
        if (!gameState)
            return navigate('/login')
    }, [reset])



    if (!gameState)
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

