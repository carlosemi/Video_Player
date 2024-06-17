import {Navbar, Container, NavDropdown, Nav} from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap';
import logo from '../assets/LOGO_ICON.png';
import CustomDropdown from './CustomDropdown'; 

const Header = () => {
    return (
        <header>
            <Navbar bg="white" variant="light" expand="md" collapseOnSelect>
            <Container>
                
                <Navbar bg="" variant="dark" expand="lg">
                    <Navbar.Brand href="/">
                        
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ml-auto">
                            <CustomDropdown />
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
                
            </Container>
            </Navbar>
    </header>
  )
}

export default Header