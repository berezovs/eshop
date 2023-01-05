import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import axios from 'axios'
import Product from './Product'
import { popularProducts } from '../datasource'

const Container = styled.div`
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
`

const Products = ({ category, filters, sort }) => {
    const [products, setProducts] = useState([])
    const [filteredProducts, setFilteredProducts] = useState({})


    useEffect(() => {
        const getProducts = async () => {
            try {
                const response = await axios(category ? `http://localhost:8080/api/products?category=${category}` : 'http://localhost:8080/api/products')
                setProducts(response.data)
            }
            catch (err) {

            }
        }

        getProducts()
    }, [category])


    useEffect(() => {
        category && setFilteredProducts(
            products.filter(item => Object.entries(filters).every(([key, value]) =>
                item.includes(value)
            ))
        )
    }, [products, category, filters])
    console.log(filteredProducts);
    return (
        <Container>
            {
                products.map((product) => (
                    <Product key={product.id} product={product} />
                ))
            }
        </Container>
    )
}

export default Products