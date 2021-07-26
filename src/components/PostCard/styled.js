import styled from 'styled-components'
import { darkColor, neutralColor, primaryColor, secondaryColor } from '../../constants/colors'


export const DivPosts = styled.div`
    display:flex;
    flex-direction: column;
    width: 50%;
    height: 500px;
    border-radius: 6px;
    margin-top: 20px;
    box-shadow: 2px 2px 5px ${darkColor};
`
export const DivTitle = styled.div`
    background-color: ${primaryColor};
    border-top-left-radius: 6px;
    border-top-right-radius: 6px;
    padding: 0 10px;
`
export const DivText = styled.div`
    padding: 0 10px;
`
export const DivButtons = styled.div`
    display:flex;
    justify-content: space-between;
    align-items: center;
    height: 50px;
    width: 100%;
    border-bottom-left-radius: 6px;
    border-bottom-right-radius: 6px;
    background-color: ${primaryColor};
`
export const Button = styled.button`
    background-color: ${secondaryColor};
    font-size: 1em;
    padding: 4px;
    border: none;
    transition: all .4s;
    margin: 0 20px;
    border-radius: 6px;
    cursor: pointer;
    :active { 
        transform: scale(0.92);  
    }
`
export const DivVoteButton = styled.div`
    margin: 0 20px;
    display:flex;
    align-items: center;
`
export const VoteButton = styled.button`
    margin: 5px;
    background-color:${neutralColor};
    cursor: pointer;
`
