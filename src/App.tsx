import React from 'react';
import './App.css';
import styled from "styled-components";
import {LinkComponent} from "./components/Link.styled";
import {SuperButton} from "./components/Button.styled";


function App() {
    return (
        <div className="App">
            <header className="App-header">

                <Box>
                   {/* <SuperButton color='red' fontSize={'20px'}>Hello</SuperButton>
                    <SuperButton color={'blue'}>Hello</SuperButton>
                    <SuperButton fontSize={'30px'}>Hello</SuperButton>*/}


                    <SuperButton typeBtn={'primary'} active>Hello</SuperButton>
                    <SuperButton typeBtn={'outlined'}>Hello</SuperButton>
                </Box>

            </header>
        </div>
    );
}


const Box = styled.div`
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;

    button {
        cursor: pointer;
    }

    ${LinkComponent} {
        cursor: zoom-in;
    }
    
    @media screen and (max-width: 800px){
        flex-direction: column;
    }
`

export default App;
