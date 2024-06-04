import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Dashboard from "./pages/Dashboard";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </div>
  );
};

export default App;
