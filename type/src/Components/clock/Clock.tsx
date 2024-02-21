import React, { useState, useEffect } from "react";

interface ClockProps {
  onMinuteChange: (minutes: number) => void;
}

const Clock: React.FC<ClockProps> = ({ onMinuteChange }) => {
  const [time, setTime] = useState<string>("");
  const [hour, setHour] = useState<number>(0);
  const [minutes, setMinutes] = useState<number>(0);

  const getClock = () => {
    const date = new Date();
    const newHour =  String(date.getHours()).padStart(2, "0");
    const newMinutes = String(date.getMinutes()).padStart(2, "0");
    const second = String(date.getSeconds()).padStart(2, "0");
    setTime(`${newHour}:${newMinutes}:${second}`);
    setHour(Number(newHour));
    setMinutes(Number(newMinutes));
  };

  useEffect(() => {
    getClock();
    const intervalId = setInterval(getClock, 1000);

    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    onMinuteChange(minutes);
  }, [minutes, onMinuteChange]);

  const getColor = (hour: number): string => {
    const colors = ["red", "orange", "yellow", "green", "#3BADFF", "indigo", "violet", "cyan", "magenta", "pink", "purple", "lime", "teal", "olive", "navy", "maroon", "brown", "black", "silver", "gray", "white", "darkblue", "gold", "coral"];
    return colors[hour % colors.length];
  };

  const colorStyle = {
    color: getColor(hour),
  };

  return <div id="clock" style={colorStyle}>{time}</div>;
};

export default Clock;
