import {NavDropdown} from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap';
import logo from '../assets/LOGO_ICON.png';
import { FaPhotoVideo  } from "react-icons/fa";
import '../index.css' 
import { MdVideoCall } from "react-icons/md";

const CustomDropdown = () => {
    return (
      <NavDropdown 
        title={<img src={logo} alt="User Logo" height="50" />} 
        className="custom-dropdown"
      >

        <LinkContainer to="/">
          <NavDropdown.Item>
              My videos &nbsp;
              <FaPhotoVideo 
                  size="1.5em"
              />
          
          </NavDropdown.Item>
        </LinkContainer>
        
        <LinkContainer to="/">
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