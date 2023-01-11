import React from 'react'
import styled from 'styled-components'
import { mobile } from '../responsive'

const Container = styled.div`
   width: 100vw;
   height: 100vh; 
   background: linear-gradient(rgba(255, 255, 255, 0.3), rgba(255, 255, 255, 0.3)), url('https://images.pexels.com/photos/297933/pexels-photo-297933.jpeg?cs=srgb&dl=pexels-david-bartus-297933.jpg&fm=jpg&_gl=1*kilyvd*_ga*MTA1ODU5MDUwMS4xNjY2MDQ5ODE0*_ga_8JE65Q40S6*MTY2NjgzOTM3OC41LjEuMTY2NjgzOTYwNy4wLjAuMA..') center ;
   background-size: 100vw 100vh;

   display: flex;
   align-items: center;
   justify-content: center;
`

const Wrapper = styled.div`
    width: 40%;
    padding: 20px;
    background-color: #fff;

    ${mobile({ width: '75%' })}
`
const Form = styled.form`
    display: flex;
    flex-direction: column;
`
const Input = styled.input`
    flex: 1;
    min-width: 30%;
    margin: 10px 0px;
    padding: 10px ;
`
const Title = styled.h1`
    font-size: 24px;
    font-weight: 300;
`

const Button = styled.button`
    width: 40%;
    border: none;
    padding: 15px 20px;
    background-color: teal;
    color: #fff;
    cursor: pointer;
    margin-bottom: 5px;
`

const Link = styled.a`
    margin: 5px 0px;
    font-size: 12px;
    text-decoration: underline;
    cursor: pointer;
`

const Login = () => {
    return (
        <Container>
            <Wrapper>
                <Title>SIGN IN</Title>
                <Form>
                    <Input placeholder="username" />
                    <Input placeholder="password" />
                    <Button>LOGIN</Button>
                    <Link>FORGOT PASSWORD? </Link>
                    <Link>CREATE AN ACCOUNT </Link>
                </Form>
            </Wrapper>
        </Container>
    )
}

export default Login