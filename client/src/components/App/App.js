import React from 'react';
import {useEffect} from "react";
import {Route,Navigate, Routes} from 'react-router-dom'
import Game from "../Game";
import Login from "../Login";


const App = ({token}) => {

    if (!token) {
        return <Navigate to='/login'/>;
    }
    return <Navigate to='/game'/>;

};

export default App;