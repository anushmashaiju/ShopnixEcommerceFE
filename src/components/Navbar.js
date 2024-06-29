import React from 'react';
import { Navbar, Nav, Button } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { useNavigate } from 'react-router-dom';

const AppNavbar = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        navigate('/');
    };

    return (
        <Navbar bg="light" expand="lg" fixed="top" >
            <Navbar.Brand style={{ color: 'turquoise', marginLeft: '2rem' }}>Shopnix</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav style={{ marginRight: 'auto' }}>
                    <LinkContainer to="/home">
                        <Nav.Link>Home</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to="/chic">
                        <Nav.Link>Chic</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to="/bag">
                        <Nav.Link>Bag</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to="/flex">
                        <Nav.Link>Flex</Nav.Link>
                    </LinkContainer>
                </Nav>
                <Nav style={{ marginRight: '2rem' }}>
                    <Button variant="outline-turquoise" onClick={handleLogout}>
                        Logout
                    </Button>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default AppNavbar;
