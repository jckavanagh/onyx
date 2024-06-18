// import React, { useState } from "react";
// import {
//   Modal,
//   ModalHeader,
//   ModalBody,
//   ModalFooter,
//   Form,
//   FormGroup,
//   Input,
//   FormFeedback,
//   InputGroup,
//   InputGroupText,
//   Button,
// } from "reactstrap";
// import { useNavigate } from "react-router-dom";

// import "bootstrap-icons/font/bootstrap-icons.css";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "../styles/Login.css";
// import "../styles/ColorPalette.css";

// const Register = (props) => {
//   const { isOpen, toggle } = props;
//   const [showPassword, setShowPassword] = useState(false);
//   const [password, setPassword] = useState("");
//   const [isValid, setIsValid] = useState(false);
//   const [isInvalid, setIsInvalid] = useState(false);
//   const [isTouched, setIsTouched] = useState(false);
//   const [modalReg, setModalReg] = useState(false);

//   const [minChar, setMinChar] = useState(false);
//   const [minNum, setMinNum] = useState(false);
//   return (
//     <div>
//       <Modal>
//         <ModalHeader className="black"></ModalHeader>
//         <ModalBody className="silver">
//           <Form>
//             <FormGroup>
//               <InputGroup>
//                 <Input
//                   size="sm"
//                   className="input m-tb"
//                   placeholder="first name"
//                 ></Input>
//                 <Input
//                   size="sm"
//                   className="input m-tb"
//                   placeholder="last name"
//                 ></Input>
//               </InputGroup>
//               <Input
//                 size="sm"
//                 className="input m-tb"
//                 placeholder="email"
//               ></Input>
//               <Input size="sm" className="input" placeholder="password"></Input>
//               <Input
//                 size="sm"
//                 className="input"
//                 placeholder="confirm password"
//               ></Input>
//               <div className="d-flex justify-content-end  mt-2">
//                 <Button className="btn-custom">
//                   Register
//                   <i className="bi bi-person-badge-fill icon-medium ml-2" />
//                 </Button>
//               </div>
//             </FormGroup>
//           </Form>
//         </ModalBody>
//         <ModalFooter className="black"></ModalFooter>
//       </Modal>
//     </div>
//   );
// };

// export default Register;
