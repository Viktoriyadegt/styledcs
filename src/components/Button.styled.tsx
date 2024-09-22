import styled, {css} from "styled-components";


export type SuperButtonPropsTYpe = {
    color?:string
    fontSize?:string
    typeBtn: 'primary' | 'outlined'
    active?:boolean
}

export const SuperButton = styled.button<SuperButtonPropsTYpe>`
    border: none;
    padding: 10px 20px;
    border-radius: 5px;
        /*background-color: ${props => props.color || '#da2290'};
    color: antiquewhite;*/
    font-size: ${props => props.fontSize || '2rem'};

    ${(props) => props.typeBtn === 'primary' && css<SuperButtonPropsTYpe>`
        //primary
        background-color: ${props => props.color || '#da2290'};
    `}
    ${(props) => props.typeBtn === 'outlined' && css<SuperButtonPropsTYpe>`
        //outline
        border: 2px solid ${props => props.color || '#da2290'};
        color: ${props => props.color || '#da2290'};
        background-color: transparent;
    `}
    &:hover {
        background-color: #afe858;
    }
    
    ${props=>props.active &&css<SuperButtonPropsTYpe>`
        box-shadow: 5px 5px 5px 5px rgba(128, 128, 128, 0.36);
    `}
`




