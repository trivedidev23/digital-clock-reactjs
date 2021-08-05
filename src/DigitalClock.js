import React, { useState, useEffect } from "react";
import "./DigitalClock.css";
const DigitalClock = () => {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const dateID = setInterval(() => {
      setDate(new Date());
    }, 1000);
    return () => {
      clearInterval(dateID);
    };
  });

  return (
    <div className="ui segment">
      <form className="ui form">
        <div className="header">
          <h1
            style={{
              textAlign: "center",
              fontSize: "150px",
              fontFamily: "mina",
              color: "#4C4C6D",
            }}
          >
            Digital Clock
          </h1>
          <hr />
          <div className="content">
            <h3
              style={{
                textAlign: "center",
                fontSize: "75px",
                color: "#4C4C6D",
              }}
            >
              {date.toLocaleTimeString()}
            </h3>
          </div>
        </div>
      </form>
    </div>
  );
};

export default DigitalClock;
