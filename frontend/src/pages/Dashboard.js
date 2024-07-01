import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Card } from "reactstrap";
import "../styles/ColorPalette.css";

const Dashboard = () => {
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    (async () => {
      try {
        const { data } = await axios.get("http://localhost:8000/api/user");
        setMessage(`Welcome to ONYX, ${data.first_name}`);
      } catch (error) {
        navigate("/login");
        console.error("error fetching user data", error);
      }
    })();
  }, []);

  return (
    <div>
      <Card className="mt-5 text-center">{message}</Card>
    </div>
  );
};

export default Dashboard;
