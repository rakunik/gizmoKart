import React, { useState, useEffect } from 'react'
import { Row, Col } from 'react-bootstrap'
import axios from 'axios'
// import products from '../products'
import Product from '../components/Product'

const HomeScreen = () => {
	const [products, setProducts] = useState([])

	useEffect(() => {
		const fetchProducts = async () => {
			const response = await axios.get('/api/products')
			setProducts(response.data)
		}
		fetchProducts()
	}, [])

	return (
		<>
			<h1>Latest products</h1>
			<Row>
				{products.map((product) => {
					return (
						<Col sm={12} md={6} lg={3} key={product._id}>
							<Product product={product} />
						</Col>
					)
				})}
			</Row>
		</>
	)
}

export default HomeScreen
