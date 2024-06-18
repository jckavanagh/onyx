import React, { useState } from "react";
import axios from "axios";
import {
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Form,
  FormGroup,
  Input,
  FormFeedback,
  InputGroup,
  InputGroupText,
  Button,
} from "reactstrap";
import { useNavigate } from "react-router-dom";

import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/Login.css";
import "../styles/ColorPalette.css";

const Login = (props) => {
  const { isOpen, toggle } = props;
  const [showPassword, setShowPassword] = useState(false);
  const [isValid, setIsValid] = useState(false);
  const [isInvalid, setIsInvalid] = useState(false);
  const [isTouched, setIsTouched] = useState(false);
  const [modalReg, setModalReg] = useState(false);

  const [minChar, setMinChar] = useState(false);
  const [minNum, setMinNum] = useState(false);

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");

  const togglePassword = () => {
    setShowPassword(!showPassword);
  };

  const handlePasswordChange = (e) => {
    const newPassword = e.target.value;
    setPassword(newPassword);
    setIsTouched(true);

    const hasMinChar = newPassword.length > 7;
    const hasMinNum = /\d/.test(newPassword);

    setMinChar(hasMinChar);
    setMinNum(hasMinNum);

    setIsValid(hasMinChar && hasMinNum);
    setIsInvalid(!hasMinChar || !hasMinNum);

    if (newPassword === "") {
      setIsValid(false);
      setIsInvalid(false);
    }
  };

  const resetModalState = () => {
    setPassword("");
    setIsValid(false);
    setIsInvalid(false);
    setIsTouched(false);
  };

  const navigate = useNavigate();

  const handleLoginClick = () => {
    toggle();
    navigate("/dashboard");
  };

  const handleRegisterClick = () => {
    toggle();
    setModalReg(!modalReg);
  };

  const submit = async (e) => {
    e.preventDefault();

    await axios.post("http://localhost:8000/api/register", {
      first_name: firstName,
      last_name: lastName,
      email: email,
      password: password,
      password_confirm: passwordConfirm,
    });

    setModalReg(!modalReg);
    toggle();
  };

  return (
    <div>
      <Modal isOpen={isOpen} toggle={toggle} onClosed={resetModalState}>
        <ModalHeader className="gold" /*toggle={toggle}*/></ModalHeader>
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
                  value={password}
                  onChange={handlePasswordChange}
                  valid={isTouched && isValid}
                  invalid={isTouched && isInvalid}
                />
                <InputGroupText
                  className="rounded-end"
                  onClick={togglePassword}
                >
                  <i
                    className={`bi ${showPassword ? "bi-eye" : "bi-eye-slash"}`}
                  ></i>
                </InputGroupText>
                <FormFeedback valid>
                  Password meets all requirements
                </FormFeedback>
                <FormFeedback invalid>Minimum of 8 characters</FormFeedback>
                <FormFeedback invalid>Includes a number 0-9</FormFeedback>
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
      <Modal isOpen={modalReg} toggle={handleRegisterClick}>
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
              <Input
                size="sm"
                className="input"
                placeholder="password"
                onChange={(e) => setPassword(e.target.value)}
              ></Input>
              <Input
                size="sm"
                className="input"
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

export default Login;
