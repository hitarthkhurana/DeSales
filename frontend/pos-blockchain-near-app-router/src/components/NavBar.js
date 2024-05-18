import Navbar from "react-bootstrap/Navbar";
import ColorSchemeIcon from "./ColorSchemeIcon";

const NavBar = () => {
  return (
    <Navbar>
      <Navbar.Collapse className="justify-content-center">
        <Navbar.Text>
          <ColorSchemeIcon />
        </Navbar.Text>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;
