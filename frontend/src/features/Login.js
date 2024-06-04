import React, { useState } from "react";
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
  const [password, setPassword] = useState("");
  const [isValid, setIsValid] = useState(false);
  const [isInvalid, setIsInvalid] = useState(false);
  const [isTouched, setIsTouched] = useState(false);

  const [minChar, setMinChar] = useState(false);
  const [minNum, setMinNum] = useState(false);

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

  return (
    <div>
      <Modal isOpen={isOpen} toggle={toggle} onClosed={resetModalState}>
        <ModalHeader className="gold" /*toggle={toggle}*/ />
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
        <ModalFooter className="gold"></ModalFooter>
      </Modal>
    </div>
  );
};

export default Login;
