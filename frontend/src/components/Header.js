import React from "react";
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/Header.css";
import { Navbar, NavbarBrand, Button } from "reactstrap";

const Header = (props) => {
  const { toggle } = props;

  return (
    <div>
      <Navbar>
        <NavbarBrand>ONYX</NavbarBrand>
        <Button onClick={toggle}>
          <i className="bi bi-person-circle" />
        </Button>
      </Navbar>
    </div>
  );
};

export default Header;
