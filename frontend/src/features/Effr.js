import React, { useEffect, useState } from "react";

const InterestRateCard = () => {
  const [interestRate, setInterestRate] = useState(null);

  useEffect(() => {
    fetch("https://api.jckavanagh.com/api/effr") // replace with your actual endpoint
      .then((response) => response.json())
      .then((data) => {
        // Assuming the response is in the format {'effr': interest_rate}
        setInterestRate(data.effr);
      })
      .catch((error) => {
        console.error("Error fetching the data:", error);
      });
  }, []); // Empty dependency array means this will run once when the component mounts.

  return (
    <div className="card" style={{ width: "18rem" }}>
      <div className="card-body">
        <h5 className="card-title">Effective Federal Funds Rate</h5>
        <p className="card-text">
          {interestRate ? `Current Rate: ${interestRate}%` : "Loading..."}
        </p>
      </div>
    </div>
  );
};

export default InterestRateCard;
