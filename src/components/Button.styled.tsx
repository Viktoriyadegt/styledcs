import styled from "styled-components";

export const StyledBtn = styled.button`
    border: none;
    padding: 10px 20px;
    background-color: crimson;
    color: antiquewhite;
    font-size: 30px;

    &:hover {
        background-color: aquamarine;
    }

    &:last-child {
        background-color: #61dafb;
    }
`

export const SuperBtn = styled(StyledBtn)`
    border-radius: 5px;
    background-color: #b8af0b;
    color: antiquewhite;
`