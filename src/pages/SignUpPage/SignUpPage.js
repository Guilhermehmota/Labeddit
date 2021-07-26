import React from 'react'
import { Button, DivForm, DivSendButton, Inputs, MainContainer } from './styled'
import useForm from '../../hooks/useForm'
import { useHistory } from 'react-router'
import { signUp } from '../../services/user'

const initialForm = {
    email: "",
    password: "",
    username:"",
}

const SignUpPage = ({setButtonText}) => {
    const [form, onChange, clear] = useForm(initialForm);
    const history = useHistory()

    const handleClick = (event) => {
        event.preventDefault();
        signUp(form, history, setButtonText)
        clear();
    };

    return (
        <MainContainer>
            <h1>Cadastro</h1>
            <DivForm onSubmit={handleClick}>
                <Inputs
                    required
                    placeholder="Nome de usuário"
                    name="username"
                    value={form.username}
                    onChange={onChange}
                    type="text"
                />
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
                    <Button> Cadastrar </Button>
                </DivSendButton>
            </DivForm>
        </MainContainer>
    )
}

export default SignUpPage