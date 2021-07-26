import styled from 'styled-components'
import { secondaryColor } from '../../constants/colors'

export const Main = styled.div`
    display:flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    height: 80vh;
`
export const DivForm = styled.form`
    display:flex;
    flex-direction:column;
    width: 25%;
    height: 40%;
    align-items: center;
`
export const Input = styled.input`
    width: 100%;
    margin-top:20px;
    height: 30px;
    border-radius: 10px;
    outline: 0;
`
export const Button = styled.button`
    background-color: ${secondaryColor};
    color: black;
    font-size: 1.2em;
    padding: 5px;
    letter-spacing: 1px;
    border: none;
    transition: all .4s;
    cursor: pointer;
    margin: 0 20px;
    border-radius: 6px;
    :active { 
        transform: scale(0.92);  
    }
`
export const DivSendButton = styled.div`
    margin-top: 20px;
    display:flex;
    align-items:center;
    justify-content:center;
`