import React, { useEffect, useState } from "react";
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
  FormFeedback,
} from "reactstrap";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/Login.css";
import "../styles/ColorPalette.css";

const Register = (props) => {
  const [modal, setModal] = useState(true);
  const [firstName, setFirstName] = useState("");
  const [firstNameInvalid, setFirstNameInvalid] = useState(false);
  const [lastName, setLastName] = useState("");
  const [lastNameInvalid, setLastNameInvalid] = useState(false);
  const [email, setEmail] = useState("");
  const [emailInvalid, setEmailInvalid] = useState(false);
  const [password, setPassword] = useState("");
  const [passwordInvalid, setPasswordInvalid] = useState(false);
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [isInvalid, setIsInvalid] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const navigate = useNavigate();

  // function to close Register Modal & redirect to Login
  const toggle = () => {
    setModal(!modal);
    navigate("/login");
  };

  // function to hide or show password
  const togglePassword = () => {
    setShowPassword(!showPassword);
  };

  //function to visually affirm email is correctly formatted
  useEffect(() => {
    const validateEmail = () => {
      const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      if (email && !emailPattern.test(email)) {
        setEmailInvalid(true);
      } else {
        setEmailInvalid(false);
      }
    };
    validateEmail();
  }, [email]);

  //function to visually affirm password match
  useEffect(() => {
    const validatePassword = () => {
      if (password && passwordConfirm && password !== passwordConfirm) {
        setIsInvalid(true);
      } else {
        setIsInvalid(false);
      }
    };
    validatePassword();
  }, [password, passwordConfirm]);

  // function to visually invalidate first & last name fields if empty on submit
  const validateSubmit = () => {
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    let submitValid = true;

    if (!firstName) {
      setFirstNameInvalid(true);
      submitValid = false;
    }
    if (!lastName) {
      setLastNameInvalid(true);
      submitValid = false;
    }
    if (!email || !emailPattern.test(email)) {
      setEmailInvalid(true);
      submitValid = false;
    }
    if (!password) {
      setPasswordInvalid(true);
      submitValid = false;
    }
    if (password !== passwordConfirm) {
      submitValid = false;
    }

    return submitValid;
  };

  // function to remove invalid from first name field
  useEffect(() => {
    const firstNameText = () => {
      if (firstName) {
        setFirstNameInvalid(false);
      }
    };
    firstNameText();
  }, [firstName]);

  // function to remove invalid from last name field
  useEffect(() => {
    const lastNameText = () => {
      if (lastName) {
        setLastNameInvalid(false);
      }
    };
    lastNameText();
  }, [lastName]);

  // function to remove invalid from password
  useEffect(() => {
    const passwordText = () => {
      if (password) {
        setPasswordInvalid(false);
      }
    };
    passwordText();
  }, [password]);

  // function to submit Register Form Data & redirect to Login
  const submit = async (e) => {
    e.preventDefault();

    if (!validateSubmit()) {
      return;
    }

    try {
      await axios.post(
        // "http://localhost:8000/api/register",
        "http://157.245.245.241:8000/api/register",
        {
          first_name: firstName,
          last_name: lastName,
          email: email,
          password: password,
          password_confirm: passwordConfirm,
        }
      );

      setModal(!modal);
      navigate("/login");
    } catch (error) {
      setErrorMessage(error.message);
    }
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
                  invalid={firstNameInvalid}
                ></Input>
                <Input
                  size="sm"
                  className="input m-tb"
                  placeholder="last name"
                  onChange={(e) => setLastName(e.target.value)}
                  invalid={lastNameInvalid}
                ></Input>
              </InputGroup>
              <InputGroup>
                <Input
                  size="sm"
                  className="input m-tb"
                  placeholder="email"
                  onChange={(e) => setEmail(e.target.value)}
                  invalid={emailInvalid}
                ></Input>
                <FormFeedback invalid={emailInvalid}>
                  invalid email format
                </FormFeedback>
              </InputGroup>
              <InputGroup size="sm">
                <Input
                  className="input"
                  type={showPassword ? "text" : "password"}
                  placeholder="password"
                  onChange={(e) => setPassword(e.target.value)}
                  invalid={passwordInvalid}
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
                invalid={isInvalid}
              ></Input>
              <FormFeedback invalid={isInvalid}>
                passwords do not match
              </FormFeedback>
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
