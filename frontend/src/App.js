import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Register from "./features/Register";
import Login from "./features/Login";
import Dashboard from "./pages/Dashboard";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </div>
  );
};

export default App;
