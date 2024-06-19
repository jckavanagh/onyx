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

const Register = (props) => {
  const navigate = useNavigate();

  const [modal, setModal] = useState(true);
  const toggle = () => {
    setModal(!modal);
    navigate("/login");
  };

  //   const [showPassword, setShowPassword] = useState(false);
  //   const [isValid, setIsValid] = useState(false);
  //   const [isInvalid, setIsInvalid] = useState(false);
  //   const [isTouched, setIsTouched] = useState(false);
  //   const [modalReg, setModalReg] = useState(false);

  //   const [minChar, setMinChar] = useState(false);
  //   const [minNum, setMinNum] = useState(false);

  //   const handlePasswordChange = (e) => {
  //     const newPassword = e.target.value;
  //     setPassword(newPassword);
  //     setIsTouched(true);

  //     const hasMinChar = newPassword.length > 7;
  //     const hasMinNum = /\d/.test(newPassword);

  //     setMinChar(hasMinChar);
  //     setMinNum(hasMinNum);

  //     setIsValid(hasMinChar && hasMinNum);
  //     setIsInvalid(!hasMinChar || !hasMinNum);

  //     if (newPassword === "") {
  //       setIsValid(false);
  //       setIsInvalid(false);
  //     }
  //   };

  //   const resetModalState = () => {
  //     setPassword("");
  //     setIsValid(false);
  //     setIsInvalid(false);
  //     setIsTouched(false);
  //   };

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");

  //   const submit = async (e) => {
  //     e.preventDefault();

  //     await axios.post("http://localhost:8000/api/register", {
  //       first_name: firstName,
  //       last_name: lastName,
  //       email: email,
  //       password: password,
  //       password_confirm: passwordConfirm,
  //     });

  //     setModalReg(!modalReg);
  //     toggle();
  //   };

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

export default Register;

{
  /* <FormFeedback valid>
Password meets all requirements
</FormFeedback>
<FormFeedback invalid>Minimum of 8 characters</FormFeedback>
<FormFeedback invalid>Includes a number 0-9</FormFeedback> */
}
