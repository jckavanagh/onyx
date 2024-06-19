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
import axios from "axios";
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/Login.css";
import "../styles/ColorPalette.css";

const Register = (props) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();

  const [modal, setModal] = useState(true);

  // function to close Register Modal & redirect to Login
  const toggle = () => {
    setModal(!modal);
    navigate("/login");
  };

  // function to hide or show password
  const togglePassword = () => {
    setShowPassword(!showPassword);
  };

  // function to submit Register Form Data & redirect to Login
  const submit = async (e) => {
    e.preventDefault();

    await axios.post("http://localhost:8000/api/register", {
      first_name: firstName,
      last_name: lastName,
      email: email,
      password: password,
      password_confirm: passwordConfirm,
    });

    setModal(!modal);
    navigate("/login");
  };

  return (
    <div>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader className="black"></ModalHeader>
        <ModalBody className="silver">
          <Form onSubmit={submit}>
            <FormGroup>
              <InputGroup>
                <Input
                  size="sm"
                  className="input m-tb"
                  placeholder="first name"
                  onChange={(e) => setFirstName(e.target.value)}
                ></Input>
                <Input
                  size="sm"
                  className="input m-tb"
                  placeholder="last name"
                  onChange={(e) => setLastName(e.target.value)}
                ></Input>
              </InputGroup>
              <Input
                size="sm"
                className="input m-tb"
                placeholder="email"
                onChange={(e) => setEmail(e.target.value)}
              ></Input>
              <InputGroup size="sm">
                <Input
                  className="input"
                  type={showPassword ? "text" : "password"}
                  placeholder="password"
                  onChange={(e) => setPassword(e.target.value)}
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
              <Input
                size="sm"
                className="input"
                type={showPassword ? "text" : "password"}
                placeholder="confirm password"
                onChange={(e) => setPasswordConfirm(e.target.value)}
              ></Input>
              <div className="d-flex justify-content-end  mt-2">
                <Button className="btn-custom" type="submit">
                  Register
                  <i className="bi bi-person-badge-fill icon-medium ml-2" />
                </Button>
              </div>
            </FormGroup>
          </Form>
        </ModalBody>
        <ModalFooter className="black"></ModalFooter>
      </Modal>
    </div>
  );
};

export default Register;
