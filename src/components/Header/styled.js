import styled from 'styled-components'
import { primaryColor, secondaryColor } from '../../constants/colors'

export const Main = styled.header`
    width: 100%;
    background-color: ${primaryColor};
    display: flex;
    justify-content: space-between;
    align-items: center;
`
export const Title = styled.h1`
    letter-spacing: 2px;
    margin-left: 20px;
    cursor: pointer;
    :active { 
        transform: scale(0.92);  
    }
`
export const Button = styled.button`
background-color: ${secondaryColor};
    color: black;
    font-size: 1.4em;
    padding: 5px;
    letter-spacing: 2px;
    border: none;
    transition: all .4s;
    cursor: pointer;
    margin: 0 20px;
    border-radius: 6px;
    :active { 
        transform: scale(0.92);  
    }
`