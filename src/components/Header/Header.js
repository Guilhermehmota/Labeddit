import React, { useState } from 'react'
import { goToFeedPage, goToLoginPage } from '../../routes/coordinator'
import { Button, Main, Title } from './styled'
import {useHistory} from 'react-router-dom'

const Header = ({buttonText, setButtonText}) => {
    const token = localStorage.getItem("token")
    const history = useHistory()
    
    const logout = () => {
        localStorage.removeItem("token")
    }

    const tradeButton = () => {
        if (token){
            logout()
            setButtonText("Login")
            goToLoginPage(history)
        } else {
            goToLoginPage(history)
        }
    }

    return (
        <Main>
            <Title onClick={() => goToFeedPage(history)}>LabEddit</Title>
            <Button onClick={tradeButton}>{buttonText}</Button>
        </Main>
    )
}

export default Header
