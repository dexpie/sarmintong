import React, { useState } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import Login from './Login'; // Import the Login component

const Header = () => {
    const [showLogin, setShowLogin] = useState(false); // State to toggle login form visibility

    const toggleLoginForm = () => {
        setShowLogin(!showLogin);
    };

    return (
        <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
            <Container>
                {/* Add Logo if needed */}
                <Navbar.Brand href="#">
                    <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxB7r6_NzwqVpCEUl0SEeFU_XdQH_ibSo7c6rVV7zHUURRSBcCkBJ40cHAagy8kIK6A0A&usqp=CAU" // Replace this with your actual logo URL
                        alt="Sarmintong Logo"
                        style={{ width: '40px', height: '40px', marginRight: '10px' }}
                    />
                    Sarmintong
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                        <Nav.Link href="#about">About</Nav.Link>
                        <Nav.Link href="#gallery">Gallery</Nav.Link>
                        <Nav.Link href="#events">Events</Nav.Link>
                        <Nav.Link href="#contact">Contact</Nav.Link>
                        <Nav.Link onClick={toggleLoginForm} style={{ cursor: 'pointer' }}>
                            Login
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>

            {/* Show the login form if showLogin state is true */}
            {showLogin && <Login onClose={toggleLoginForm} />}
        </Navbar>
    );
}

export default Header;
