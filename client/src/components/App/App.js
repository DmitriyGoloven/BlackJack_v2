import React from 'react';
import {useEffect} from "react";
import {Route,useNavigate, Routes} from 'react-router-dom'
import Game from "../Game";
import Login from "../Login";


const App = ({token}) => {

    let navigate = useNavigate();
    useEffect(() => {
        if (token) {
            navigate('/game');
        } else {
            navigate('/login');
        }
    }, [token])


    return (
        <div>
            <Routes>
                    <Route path="/game" element={<Game/>} />
                    <Route path="/login" element={<Login/>} />
                    <Route path='*' element={<Login/>}/>
            </Routes>
        </div>
    )
};

export default App;