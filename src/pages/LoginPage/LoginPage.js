import React from 'react'
import { DivForm, MainContainer, Inputs, Button, DivSendButton, SignUp } from './styled'
import useForm from '../../hooks/useForm'
import { useHistory } from 'react-router'
import { goToSignUpPage } from '../../routes/coordinator'
import { login } from "../../services/user"
import useUnProtectedPage from '../../hooks/useUnprotectedPage'

const initialForm = {
    email: "",
    password: "",
}

const LoginPage = ({ setButtonText }) => {
    useUnProtectedPage()
    const [form, onChange, clear] = useForm(initialForm);
    const history = useHistory()

    const handleClick = (event) => {
        event.preventDefault();
        login(form, history, setButtonText)
        clear();
    };

    return (
        <MainContainer>
            <h1>Login</h1>
            <DivForm onSubmit={handleClick}>
                <Inputs
                    required
                    placeholder="E-mail"
                    name="email"
                    value={form.email}
                    onChange={onChange}
                    type="text"
                />
                <Inputs
                    required
                    placeholder="senha"
                    name="password"
                    value={form.password}
                    onChange={onChange}
                    type="password"
                />
                <DivSendButton>
                    <Button>
                        Fazer login
                    </Button>
                </DivSendButton>
            </DivForm>
            <SignUp
                onClick={() => goToSignUpPage(history)}>
                Cadastre-se aqui
            </SignUp>
        </MainContainer>
    )
}

export default LoginPage