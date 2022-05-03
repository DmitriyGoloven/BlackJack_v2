import {applyMiddleware} from "redux";
import axiosMiddleware from "redux-axios-middleware";
import {createStore} from 'redux';
import axios from "axios";
import reducer from "./reducer/reducer";

const client = axios.create({
    baseURL: 'http://localhost:8080/api'
})


export const store = createStore(
    reducer,
    applyMiddleware(
        axiosMiddleware(client)
    )
);