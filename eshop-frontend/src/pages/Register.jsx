import React from 'react'
import styled from 'styled-components'
import { mobile } from '../responsive'


const Container = styled.div`
   width: 100vw;
   height: 100vh; 
   background: linear-gradient(rgba(255, 255, 255, 0.3), rgba(255, 255, 255, 0.3)), url('https://images.pexels.com/photos/2129970/pexels-photo-2129970.jpeg?cs=srgb&dl=pexels-waldemar-brandt-2129970.jpg&fm=jpg&_gl=1*huuo7d*_ga*MTA1ODU5MDUwMS4xNjY2MDQ5ODE0*_ga_8JE65Q40S6*MTY2NjgzNzE3MC40LjEuMTY2NjgzNzE4Ny4wLjAuMA..') center ;
   background-size: cover;

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
    flex-wrap: wrap;
`
const Input = styled.input`
    flex: 1;
    min-width: 40%;
    margin: 20px 10px 0px 0px;
    padding: 10px;
`
const Title = styled.h1`
    font-size: 24px;
    font-weight: 300;
`
const Agreement = styled.span`
    font-size: 12px;
    margin: 20px 0px;
`
const Button = styled.button`
    width: 40%;
    border: none;
    padding: 15px 20px;
    background-color: teal;
    color: #fff;
    cursor: pointer;
`

const Register = () => {
    return (
        <Container>
            <Wrapper>
                <Title>CREATE AN ACCOUNT</Title>
                <Form>
                    <Input placeholder="name" />
                    <Input placeholder="last_name" />
                    <Input placeholder="username" />
                    <Input placeholder="email" />
                    <Input placeholder="password" />
                    <Input placeholder="confirm_password" />
                    <Agreement>
                        By creating an account I agree with the processing of my personal data in accordance with the PRIVACY POLICY
                    </Agreement>
                    <Button>CREATE</Button>
                </Form>
            </Wrapper>
        </Container>
    )
}

export default Register