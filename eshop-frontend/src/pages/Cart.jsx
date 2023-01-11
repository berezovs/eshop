import React from 'react'
import styled from 'styled-components'
import Navbar from '../components/Navbar'
import Anouncement from '../components/Anouncement'
import Footer from '../components/Footer'
import { Add, Remove } from '@mui/icons-material'
import { mobile } from '../responsive'

const Container = styled.div`
    
`

const Wrapper = styled.div`
    padding: 20px;
    ${mobile({ padding: '10px' })}
`

const Title = styled.h1`
    font-weight: 200;
    text-align: center;
`

const Top = styled.div`
    padding: 20px;
    display: flex;
    align-content: center;
    justify-content: space-between;
`

const TopButton = styled.button`
    padding: 10px;
    font-weight: 600;
    cursor: pointer;
    border: ${props => props.type === "filled" && "none"};
    background-color: ${props => props.type === "filled" ? "#000" : "transparent"};
    color: ${props => props.type === "filled" && "#fff"};
`


const TopTexts = styled.div`
    ${mobile({ display: "none" })}

`
const TopText = styled.span`
    text-decoration: underline;
    cursor: pointer;
    margin: 0px 10px;
`

const Bottom = styled.div`
    display: flex;
    justify-content: space-between;
    ${mobile({ flexDirection: "column" })}

`

const Info = styled.div`
    flex: 3;
`

const Summary = styled.div`
    flex: 1;
    border: 0.5px solid lightgray;
    border-radius: 10px;
    padding: 20px;
    height: 55vh;
`


const SummaryTitle = styled.h1`
    font-weight: 200;
`
const SummaryItem = styled.div`
    margin: 30px 0px;
    display: flex;
    justify-content: space-between;
    font-weight: ${props => props.type === 'total' && '500'};
    font-size: ${props => props.type === 'total' && '24px'};
`
const SummaryItemText = styled.span`
    
`
const SummaryItemPrice = styled.span`
    
`
const Button = styled.button`
    width: 100%;
    padding: 10px;
    background-color: #000;
    color : #fff;
    font-weight: 600;
    border: none;
    cursor: pointer;
`

const Product = styled.div`
    display: flex;
    flex: 1;
    justify-content: space-between;
    ${mobile({ flexDirection: "column" })}
`
const ProductDetail = styled.div`
    display: flex;
    flex: 2;
     
`
const Image = styled.img`
    width: 200px;
`
const Details = styled.div`
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
`
const PriceDetails = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
     
`
const ProductName = styled.span``
const ProductId = styled.span``
const ProductColor = styled.div`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: ${props => props.color};
`
const ProductSize = styled.span``

const AmountContainer = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 20px;
`
const ProductAmount = styled.div`
    font-size: 24px;
    margin: 5px;
    ${mobile({ margin: "5px 15px" })}
`
const ProductPrice = styled.div`
    font-size: 30px;
    font-weight: 200;
    ${mobile({ marginBottom: "20px" })}
`
const Hr = styled.hr`
    background-color: #eee;
    border: none;
    height: 1px;
    margin: 10px 0px;
`
const Cart = () => {
    return (
        <Container>
            <Navbar />
            <Anouncement />
            <Wrapper>
                <Title>YOUR BAG</Title>
                <Top>
                    <TopButton>CONTINUE SHOPPING</TopButton>
                    <TopTexts>
                        <TopText>Shopping Bag(2)</TopText>
                        <TopText>Wishlist(0)</TopText>
                    </TopTexts>
                    <TopButton type="filled">CHECKOUT NOW</TopButton>
                </Top>
                <Bottom>
                    <Info>
                        <Product>
                            <ProductDetail>
                                <Image src='https://images.pexels.com/photos/9558254/pexels-photo-9558254.jpeg?cs=srgb&dl=pexels-mart-production-9558254.jpg&fm=jpg&_gl=1*qnfl90*_ga*MTA1ODU5MDUwMS4xNjY2MDQ5ODE0*_ga_8JE65Q40S6*MTY2NjkwMzcyMS43LjEuMTY2NjkwMzgyNy4wLjAuMA..' />
                                <Details>
                                    <ProductName><b>Product: </b>WHITE T-SHIRT</ProductName>
                                    <ProductId><b>ID: </b>1234567890</ProductId>
                                    <ProductColor color="black" />
                                    <ProductSize><b>Size: </b>37.5</ProductSize>
                                </Details>
                            </ProductDetail>
                            <PriceDetails>
                                <AmountContainer>
                                    <Add />
                                    <ProductAmount>
                                        2
                                    </ProductAmount>
                                    <Remove />
                                </AmountContainer>
                                <ProductPrice>$ 30</ProductPrice>
                            </PriceDetails>
                        </Product>
                        <Hr />
                        <Product>
                            <ProductDetail>
                                <Image src='https://images.pexels.com/photos/9558254/pexels-photo-9558254.jpeg?cs=srgb&dl=pexels-mart-production-9558254.jpg&fm=jpg&_gl=1*qnfl90*_ga*MTA1ODU5MDUwMS4xNjY2MDQ5ODE0*_ga_8JE65Q40S6*MTY2NjkwMzcyMS43LjEuMTY2NjkwMzgyNy4wLjAuMA..' />
                                <Details>
                                    <ProductName><b>Product: </b>WHITE T-SHIRT</ProductName>
                                    <ProductId><b>ID: </b>1234567890</ProductId>
                                    <ProductColor color="black" />
                                    <ProductSize><b>Size: </b>37.5</ProductSize>
                                </Details>
                            </ProductDetail>
                            <PriceDetails>
                                <AmountContainer>
                                    <Add />
                                    <ProductAmount>
                                        2
                                    </ProductAmount>
                                    <Remove />
                                </AmountContainer>
                                <ProductPrice>$ 30</ProductPrice>
                            </PriceDetails>
                        </Product>
                    </Info>
                    <Summary>
                        <SummaryTitle>
                            ORDER SUMMARY
                        </SummaryTitle>
                        <SummaryItem>
                            <SummaryItemText>Subtotal</SummaryItemText>
                            <SummaryItemPrice>$ 60</SummaryItemPrice>
                        </SummaryItem>
                        <SummaryItem>
                            <SummaryItemText>Estimated shipping</SummaryItemText>
                            <SummaryItemPrice>$ 6.24</SummaryItemPrice>
                        </SummaryItem>
                        <SummaryItem>
                            <SummaryItemText>Shipping discount</SummaryItemText>
                            <SummaryItemPrice>$ -6.24</SummaryItemPrice>
                        </SummaryItem>
                        <SummaryItem type="total">
                            <SummaryItemText>Total</SummaryItemText>
                            <SummaryItemText>$ 60</SummaryItemText>
                        </SummaryItem>
                        <Button>CHECKOUT NOW</Button>
                    </Summary>
                </Bottom>
            </Wrapper>
            <Footer />
        </Container>
    )
}

export default Cart