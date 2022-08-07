import React from 'react'
import { LoginContainer, LoginQuestions } from './styles';
import * as Form from '../../components/Form/styles'
import Button from '../../components/Button';
import { Link } from 'react-router-dom'

function Login() {
    return (
        <>
            <LoginContainer>
                <Form.Title>LOGIN</Form.Title>
                <Form.Container>
                    <Form.Field>
                        <Form.Input placeholder='Digite seu CPF' />
                    </Form.Field>
                    <Form.Field>
                        <Form.Input placeholder='Digite sua senha' />
                        <LoginQuestions>
                            <Link  to="/">
                                <span>Ainda não é cadastrado?</span>
                            </Link>
                            <span>Esqueceu sua senha?</span>
                        </LoginQuestions>
                    </Form.Field>
                    <Button large background="#F2A516">
                        ENTRAR
                    </Button>
                </Form.Container>
            </LoginContainer>
        </>
    )
}

export default Login;