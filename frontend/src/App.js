import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
// import Login from "./components/Login";
import "./App.css";

const App = () => {
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);

  return (
    <div>
      <Header toggle={toggle} />
      <Body isOpen={modal} toggle={toggle} />
      {/* <Login isOpen={modal} toggle={toggle} /> */}
    </div>
  );
};

export default App;
