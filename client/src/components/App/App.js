import React from 'react';
import {Route, Routes} from 'react-router-dom'



import Game from "../Game";
import Login from "../Home/Login";

const App = () => {
    return (
        <div>
            <Routes>
                    <Route path="/game" element={<Game/>} />
                    <Route path="/login" element={<Login/>} />
                    <Route path='*' element={<Game/>}/>
            </Routes>
        </div>
    )
};

export default App;