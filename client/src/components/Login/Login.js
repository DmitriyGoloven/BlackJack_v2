import React from 'react';


const Login = ({getNewToken, getNewGame}) => {

    const submit = (e) => {
        e.preventDefault();
        getNewToken("jjjj");
    }

    return (
        <div className={'modalBackground'}>
        <div className={'modal'}>
            <p>login page </p>
            <form onSubmit={submit}>

                <button className='hit' type='submit' onSubmit={submit}>start</button>
            </form>
        </div>
        </div>
    );
};

export default Login;