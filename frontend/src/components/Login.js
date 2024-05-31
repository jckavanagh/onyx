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
import "bootstrap-icons/font/bootstrap-icons.css";

import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/Login.css";

const Login = (props) => {
  const { isOpen, toggle } = props;
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState("");
  const [isValid, setIsValid] = useState(false);
  const [isTouched, setIsTouched] = useState(false);

  const togglePassword = () => {
    setShowPassword(!showPassword);
  };

  const handlePasswordChange = (e) => {
    const newPassword = e.target.value;
    setPassword(newPassword);
    setIsTouched(true);
    setIsValid(newPassword.length >= 8);
  };

  return (
    <div>
      <Modal isOpen={isOpen} toggle={toggle}>
        <ModalHeader toggle={toggle}>Login</ModalHeader>
        <ModalBody>
          <Form>
            <FormGroup>
              <InputGroup size="sm">
                <Input
                  type={showPassword ? "text" : "password"}
                  placeholder="password"
                  value={password}
                  onChange={handlePasswordChange}
                  valid={isTouched && isValid}
                  invalid={isTouched && !isValid}
                />
                <InputGroupText
                  className="rounded-end"
                  onClick={togglePassword}
                >
                  <i
                    className={`bi ${showPassword ? "bi-eye" : "bi-eye-slash"}`}
                  ></i>
                </InputGroupText>
                <FormFeedback valid>Minimum of 8 characters</FormFeedback>
                <FormFeedback invalid>Minimum of 8 characters</FormFeedback>
              </InputGroup>
            </FormGroup>
          </Form>
        </ModalBody>
        <ModalFooter></ModalFooter>
      </Modal>
    </div>
  );
};

export default Login;
