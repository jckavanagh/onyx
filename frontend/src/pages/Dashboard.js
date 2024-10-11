import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Card } from "reactstrap";
import "../styles/ColorPalette.css";
import { useDispatch, useSelector } from "react-redux";
import { setAuth } from "../redux/authSlice";
import InterestRateCard from "../features/Effr";

const Dashboard = () => {
  const [message, setMessage] = useState("");
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth.value);

  useEffect(() => {
    (async () => {
      try {
        const { data } = await axios.get("user");
        setMessage(`Welcome to ONYX, ${data.first_name}`);
        dispatch(setAuth(true));
      } catch (error) {
        dispatch(setAuth(false));
      }
    })();
  }, []);

  return (
    <div>
      <Card className="mt-5 text-center">
        {auth ? message : "User Not Authenticated"}
      </Card>
      <InterestRateCard />
    </div>
  );
};

export default Dashboard;
