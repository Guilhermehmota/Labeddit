import styled from 'styled-components'
import { darkColor, neutralColor, primaryColor } from '../../constants/colors'

export const DivComments = styled.div`
    display:flex;
    flex-direction: column;
    width: 50%;
    height: 300px;
    box-shadow: 2px 2px 5px ${darkColor};
    border-radius: 6px;
    margin-top: 20px;
`
export const DivUser = styled.div`
    background-color: ${primaryColor};
    border-top-left-radius: 6px;
    border-top-right-radius: 6px;
    padding: 0 10px;
`
export const DivComment = styled.div`
    padding: 0 10px;
`
export const DivButtons = styled.div`
    display:flex;
    align-items: center;
    width: 100%;
    border-bottom-left-radius: 6px;
    border-bottom-right-radius: 6px;
    background-color: ${primaryColor};
`
export const VoteButton = styled.div`
    margin: 0 20px;
    display: flex;
    align-items: center;
`
export const NumberComments = styled.p`
    margin-right: 10px;
`
export const Button = styled.button`
    margin: 5px;
    background-color:${neutralColor};
    cursor: pointer;
`