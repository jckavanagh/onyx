import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Register from "./features/Register";
import Login from "./features/Login";
import Dashboard from "./pages/Dashboard";
import Dove from "./pages/Dove";
import Forgot from "./features/Forgot";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <Header />
      <Dove />
      <Routes>
        {/* <Route path="/landing" element={<Landing />} /> */}
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/forgot" element={<Forgot />} />
      </Routes>
    </div>
  );
};

export default App;
