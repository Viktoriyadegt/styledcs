import React from 'react';
import './App.css';
import styled from "styled-components";
import {LinkComponent} from "./components/Link.styled";
import {Menu} from "./components/Menu.styled";
import {StyledBtn, SuperBtn} from "./components/Button.styled";

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <Menu>
                    <ul>
                        <li><a href='#'>menu item1</a> </li>
                        <li><a href='#'> menu item2</a></li>
                        <li><a href='#'>menu item3</a> </li>
                    </ul>
                </Menu>

                <Box>
                    <LinkComponent as={StyledBtn} href={'#'}>Link Component</LinkComponent>
                    <StyledBtn as='a' href={'#'}>Link</StyledBtn>
                    <StyledBtn>Hello</StyledBtn>
                    <SuperBtn>Super Button</SuperBtn>
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
