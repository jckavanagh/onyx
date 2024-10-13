import React, { useState } from "react";
import { Navbar, NavbarBrand, Button, Offcanvas } from "reactstrap";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { setAuth } from "../redux/authSlice";
import { clearUser } from "../redux/userSlice";

import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/Header.css";

const Header = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [icon, setIcon] = useState("bi-three-dots");
  const auth = useSelector((state) => state.auth.value);
  const user = useSelector((state) => state.user.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate("/login");
  };

  const handleMenuClick = () => {
    setIcon((icon) =>
      icon === "bi-three-dots" ? "bi-three-dots-vertical" : "bi-three-dots"
    );
    setIsOpen(!isOpen);
  };

  const logout = async () => {
    await axios.post("logout", {}, { withCredentials: true });
    axios.defaults.headers.common["Authorization"] = "";
    dispatch(clearUser());
    dispatch(setAuth(false));
    navigate("/landing");
  };

  let links;

  if (auth) {
    links = (
      <>
        <div className="navbar-items">
          <div>
            <NavbarBrand>ONYX</NavbarBrand>
            <Button className="menu" onClick={handleMenuClick}>
              <i className={`bi ${icon}`} />
            </Button>
          </div>
          <div>
            <Button className="btn-transparent btn-sm logout" onClick={logout}>
              logout
            </Button>
            <Button className="btn-transparent btn-sm">
              <span className="user">{user}</span>
              <i className="bi bi-person-fill-gear" />
            </Button>
          </div>
        </div>
        <Offcanvas
          isOpen={isOpen}
          toggle={handleMenuClick}
          backdrop={false}
        ></Offcanvas>
      </>
    );
  } else {
    links = (
      <>
        <div className="navbar-items">
          <NavbarBrand>ONYX</NavbarBrand>
          <Button className="btn-transparent" onClick={handleLoginClick}>
            <i className="bi bi-person-circle" />
          </Button>
        </div>
      </>
    );
  }

  return <Navbar>{links}</Navbar>;
};

export default Header;
