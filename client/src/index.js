import React from 'react'
import ReactDOM from 'react-dom/client'
import {Provider} from 'react-redux'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {store} from "./store/store";
import './style/style.scss'
import Game from "./components/Game";
import Login from "./components/Login";
import App from "./components/App";


const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
    <BrowserRouter>
        <Provider store={store}>
            <Routes>
                <Route path="/" element={<Game/>}/>
                <Route path="login" element={<Login/>}/>
                <Route path="game" element={<Game/>}/>
            </Routes>
        </Provider>
    </BrowserRouter>
)

