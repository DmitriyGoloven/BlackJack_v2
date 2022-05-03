import React from 'react';
import {useCallback,useState} from "react";
import {Navigate} from "react-router-dom";
// import { v4 as uuidv4 } from 'uuid';

// const jwt = require("jsonwebtoken")


const Login = ({getNewToken,token}) => {

    if (token) {
        return <Navigate to="/game"/>
    }


    const [title, setTitle] = useState({})


    const startGame = ()=>{
        console.log(title)
        getNewToken(title);
    }
    return (
        <div className={'modal'}>
            <input onChange={event => setTitle({player: event.target.value})}/>
            <button className={'hit'} onClick={startGame}>Start game</button>
        </div>
    )


}

//    const players = []
//
//     const [inputOne, setInputOne] = useState('');
//     const [inputTwo, setInputTwo] = useState('');
//
//     function addFood() {
//
//         let newFood = {
//             nameFood: inputOne,
//             calories: inputTwo
//         };
//
//         players.push(newFood);
//
//         console.log(players)
//
//     }
//
//     const getNewTokenGo = (e) => {
//         e.preventDefault();
//         console.log(players)
//         getNewToken(players);
//     }
//
//     return (
//
//         <div>
//
//             <form onSubmit={getNewTokenGo}>
//
//                 Продукт:
//                 <input
//                     type="text"
//                     name='input1'
//                     value={inputOne}
//                     onChange={(event) => setInputOne(event.target.value)}
//                 />
//
//                 <input
//                     type="text"
//                     name='input2'
//                     value={inputTwo}
//                     onChange={(event) => setInputTwo(event.target.value)}
//                 />
//
//                 {/*<input type="submit" value="Отправить" onClick={addFood}/>*/}
//                 <button  type='submit'>start game</button>
//             </form>
//
//         </div>
//     )
//
// }


    // const token = jwt.sign({
    //     sessionId: "1"},uuidv4()
    // )

//     const [players, setPlayers] = useState(['','']);
//
//     const changeName = (e) => {
//         setPlayers([...players, e.target.value])}
//
//     // const changeName = useCallback((key, value) => {
//     //
//     //     let playersArr = [...players];
//     //     playersArr[key] = value;
//     //     setPlayers(playersArr);
//     // }, [players])
//
//     const startGame = useCallback(() => {
//         console.log(players)
//         getNewToken();
//     }, [])
//
//     const addPlayer = useCallback(() => {
//         setPlayers([...players, '']);
//     }, [players])
//
//     return (
//         <div className={'modalBackground'}>
//             <div className={'modal'}>
//                 {/*<input  type="text"  onChange={changeName}/>*/}
//                 {/*<input  type="text" onChange={changeName}/>*/}
//                 {/*<input  type="text" onChange={changeName}/>*/}
//                 <h1>Players</h1>
//                 {players.map((name, index) => (
//                 <div>
//                     <input type="text"
//                            onChange={changeName}
//                     />
//                         </div>
//                     ))
//                 }
//                 <button  onClick={addPlayer}>+</button>
//                 <button type="submit" onChange={changeName} onClick={startGame}>Start game</button>
//             </div>
//         </div>
//     );
// };

export default Login;