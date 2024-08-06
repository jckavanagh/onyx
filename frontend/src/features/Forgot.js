import React, { useEffect, useState } from "react";
import {
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Form,
  FormGroup,
  InputGroup,
  Input,
  FormFeedback,
  Button,
} from "reactstrap";
import { useNavigate } from "react-router-dom";
import "../styles/Forgot.css";
import "../styles/ColorPalette.css";

const Forgot = () => {
  const [modal, setModal] = useState(true);
  const [email, setEmail] = useState("");
  const [emailInvalid, setEmailInvalid] = useState(false);

  const navigate = useNavigate();

  const toggle = () => {
    setModal(!modal);
    navigate("/login");
  };

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

  return (
    <div>
      <Modal isOpen="modal" toggle={toggle}>
        <ModalHeader className="gold"></ModalHeader>
        <ModalBody className="black ">
          <Form>
            <FormGroup>
              <InputGroup className="email" size="sm">
                <Input
                  className="input"
                  type="email"
                  placeholder="e-mail"
                  onChange={(e) => setEmail(e.target.value)}
                  invalid={emailInvalid}
                />
                <FormFeedback invalid={emailInvalid}>
                  invalid email format
                </FormFeedback>
              </InputGroup>
              <div className="d-flex justify-content-end">
                <Button className="btn-custom mt-1 btn-sm" type="submit">
                  Reset Password
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

export default Forgot;
