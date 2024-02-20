import React, { useState, useEffect } from "react";

const Clock = () => {
  const [time, setTime] = useState<string>("");

  const getClock = () => {
    const date = new Date();
    const hour = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const second = String(date.getSeconds()).padStart(2, "0");
    setTime(`${hour}:${minutes}:${second}`);
  };

  useEffect(() => {
    getClock();
    const intervalId = setInterval(getClock, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return <div id="clock">{time}</div>;
};

export default Clock;
