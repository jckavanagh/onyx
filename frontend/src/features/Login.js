import React, { useState } from "react";
import {
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Form,
  FormGroup,
  Input,
  InputGroup,
  InputGroupText,
  Button,
} from "reactstrap";
import { useNavigate } from "react-router-dom";
// import axios from "axios";
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/Login.css";
import "../styles/ColorPalette.css";

const Login = (props) => {
  const [modal, setModal] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();

  // function to close Login Modal & redirect to Landing
  const toggle = () => {
    setModal(!modal);
    navigate("/");
  };

  // function to hide or show password
  const togglePassword = () => {
    setShowPassword(!showPassword);
  };

  // function to close Login Modal & redirect to Dashboard
  const handleLoginClick = () => {
    setModal(!modal);
    navigate("/dashboard");
  };

  // function to close Login Modal & redirect to Register
  const handleRegisterClick = () => {
    setModal(!modal);
    navigate("/register");
  };

  return (
    <div>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader className="gold"></ModalHeader>
        <ModalBody className="black">
          <Form>
            <FormGroup>
              <InputGroup className="email" size="sm">
                <Input className="input" type="email" placeholder="e-mail" />
              </InputGroup>
              <InputGroup size="sm">
                <Input
                  className="input"
                  type={showPassword ? "text" : "password"}
                  placeholder="password"
                />
                <InputGroupText
                  className="rounded-end"
                  onClick={togglePassword}
                >
                  <i
                    className={`bi ${showPassword ? "bi-eye" : "bi-eye-slash"}`}
                  ></i>
                </InputGroupText>
              </InputGroup>
              <div className="d-flex justify-content-end  mt-2">
                <Button className="btn-custom" onClick={handleLoginClick}>
                  Login
                  <i className="bi bi-safe-fill icon-medium ml-2" />
                </Button>
              </div>
            </FormGroup>
          </Form>
        </ModalBody>
        <ModalFooter className="gold">
          <p className="ft-sm">Not a user? Register</p>
          <i className="bi bi-person-vcard" onClick={handleRegisterClick} />
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default Login;
