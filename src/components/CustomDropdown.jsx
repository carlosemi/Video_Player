import {NavDropdown} from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap';
import logo from '../assets/LOGO_ICON.png';
import { FaUserCircle, FaVideo } from "react-icons/fa";
import '../index.css' 

const CustomDropdown = () => {
    return (
      <NavDropdown 
        title={<img src={logo} alt="User Logo" height="50" />} 
        className="custom-dropdown"
      >
        <LinkContainer to="/profile">
          <NavDropdown.Item>Add video <FaVideo /></NavDropdown.Item>
        </LinkContainer>
      </NavDropdown>
    );
  }
  
  export default CustomDropdown;