import {NavDropdown} from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap';
import logo from '../assets/LOGO_ICON.png';
import { FaPhotoVideo  } from "react-icons/fa";
import '../index.css' 
import { MdVideoCall } from "react-icons/md";
import { CiMenuBurger } from "react-icons/ci";

const CustomDropdown = () => {
    return (
      <NavDropdown 
        title={<CiMenuBurger size="1.5em"/>}
        className="custom-dropdown dropdown-toggle"
        id="navbar-dropdown"
        drop="start"
      >
        <LinkContainer to="/">
          <NavDropdown.Item>
              My videos &nbsp;
              <FaPhotoVideo 
                  size="1.5em"
              />
          </NavDropdown.Item>
        </LinkContainer>
        
        <LinkContainer to="/addVideo">
            <NavDropdown.Item>
                Add video &nbsp;
                <MdVideoCall 
                    size="2em"
                />
            </NavDropdown.Item>
        </LinkContainer>
        
      </NavDropdown>
    );
  }
  
  export default CustomDropdown;