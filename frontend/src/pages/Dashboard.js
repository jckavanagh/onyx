import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Card } from "reactstrap";
import "../styles/ColorPalette.css";

const Dashboard = () => {
  const [message, setMessage] = useState("");

  useEffect(() => {
    (async () => {
      try {
        const { data } = await axios.get("user");
        setMessage(`Welcome to ONYX, ${data.first_name}`);
      } catch (error) {
        setMessage("user not logged in");
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
