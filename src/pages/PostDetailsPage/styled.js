import styled from 'styled-components'
import { darkColor, neutralColor, secondaryColor } from '../../constants/colors'

export const Main = styled.div`
    display:flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    height: 80vh;
`
export const DivComment = styled.div`
    display: flex;
    width: 60%;
    flex-direction: column;
    box-shadow: 2px 2px 5px ${darkColor};
    padding: 0 20px;
    border-radius: 6px;
    margin-top: 10px;
    background-color: ${neutralColor};
`
export const DivVotes = styled.div`
    display: flex;
    align-items: center;
    justify-content:space-between;
`
export const DivVoteButtons = styled.div`
    display: flex;
    align-items: center;
`

export const DivForm = styled.form`
    display:flex;
    flex-direction:column;
    width: 25%;
    height:30%;
    align-items: center;
`
export const Input = styled.input`
    width: 100%;
    margin-top:20px;
    height: 30px;
    border-radius: 10px;
    outline: 0;
`
export const DivSendButton = styled.div`
    margin-top: 20px;
    display:flex;
    align-items:center;
    justify-content:center;
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
export const VoteButton = styled.button`
    margin: 5px;
    background-color:${neutralColor};
    cursor: pointer;
`