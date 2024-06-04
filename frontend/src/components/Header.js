import React, { useState } from "react";
import { Navbar, NavbarBrand, Button } from "reactstrap";
import { useLocation, useNavigate } from "react-router-dom";
import Login from "../features/Login";

import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/Header.css";

const Header = (props) => {
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);

  const location = useLocation();
  const navigate = useNavigate();

  const handleLogoutClick = () => {
    navigate("/");
  };

  return (
    <div>
      <Navbar>
        <NavbarBrand>ONYX</NavbarBrand>
        {location.pathname === "/dashboard" ? (
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
        ) : (
          <Button className="btn-transparent" onClick={toggle}>
            <i className="bi bi-person-circle" />
          </Button>
        )}
      </Navbar>
      <Login isOpen={modal} toggle={toggle} />
    </div>
  );
};

export default Header;
