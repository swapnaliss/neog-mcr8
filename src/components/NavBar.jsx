import React from 'react'
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';

const NavbarPage = () => {
    return (
        <>
            <Navbar expand={'sm'} className="bg-body-tertiary mb-3  nav-container">
                <Container fluid>
                    <div className='logo-container'>
                        <Navbar.Brand href="#">Meetups</Navbar.Brand>
                    </div>
                    <div className='searchBar'>
                        <Navbar.Offcanvas
                            id={`offcanvasNavbar-expand-sm`}
                            aria-labelledby={`offcanvasNavbarLabel-expand-sm`}
                            placement="end"
                        >
                            <Offcanvas.Header closeButton>
                                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-sm`}>
                                    Offcanvas
                                </Offcanvas.Title>
                            </Offcanvas.Header>
                            <Offcanvas.Body>
                                <Form className="d-flex">
                                    <Form.Control
                                        type="search"
                                        placeholder="Search"
                                        className="me-2"
                                        aria-label="Search"
                                    />
                                </Form>
                            </Offcanvas.Body>
                        </Navbar.Offcanvas>
                    </div>
                </Container>
            </Navbar>
        </>
    )
}
export default NavbarPage;