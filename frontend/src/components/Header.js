import React, { useState } from "react";
import { Navbar, NavbarBrand, Button, Offcanvas } from "reactstrap";
import { useLocation, useNavigate } from "react-router-dom";

import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/Header.css";

const Header = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [icon, setIcon] = useState("bi-three-dots");
  const location = useLocation();
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate("/login");
  };

  const handleLogoutClick = () => {
    navigate("/");
  };

  const handleMenuClick = () => {
    setIcon((icon) =>
      icon === "bi-three-dots" ? "bi-three-dots-vertical" : "bi-three-dots"
    );
    setIsOpen(!isOpen);
  };

  return (
    <Navbar>
      {/* <NavbarBrand>ONYX</NavbarBrand> */}
      {location.pathname === "/dashboard" ? (
        <div className="navbar-items">
          <div>
            <NavbarBrand>ONYX</NavbarBrand>
            <Button className="menu" onClick={handleMenuClick}>
              <i className={`bi ${icon}`} />
            </Button>
          </div>
          <div>
            <Button
              className="btn-transparent btn-sm logout"
              onClick={handleLogoutClick}
            >
              logout
            </Button>
            <Button className="btn-transparent btn-sm">
              <i className="bi bi-person-fill-gear" />
            </Button>
          </div>
          <Offcanvas
            isOpen={isOpen}
            toggle={handleMenuClick}
            backdrop={false}
          ></Offcanvas>
        </div>
      ) : (
        <div className="navbar-items">
          <NavbarBrand>ONYX</NavbarBrand>
          <Button className="btn-transparent" onClick={handleLoginClick}>
            <i className="bi bi-person-circle" />
          </Button>
        </div>
      )}
    </Navbar>
  );
};

export default Header;
