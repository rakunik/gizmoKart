import React from 'react'
import { LinkContainer } from 'react-router-bootstrap'
import { Navbar, Nav, Container } from 'react-bootstrap'

const Header = () => {
	return (
		<header>
			<Navbar bg="primary" variant="dark" expand="lg" collapseOnSelect>
				<Container>
					<LinkContainer to="/">
						<Navbar.Brand>gizmoKart</Navbar.Brand>
					</LinkContainer>

					<Nav className="ml-auto">
						<LinkContainer to="/cart">
							<Nav.Link>
								<i className="fas fa-shopping-cart"></i> Cart
							</Nav.Link>
						</LinkContainer>
						<LinkContainer to="/login">
							<Nav.Link>
								<i className="fas fa-user"></i> Sign in
							</Nav.Link>
						</LinkContainer>
					</Nav>
				</Container>
			</Navbar>
		</header>
	)
}

export default Header
