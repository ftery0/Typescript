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
    const colors = ["#FF5F5F", "#FFB35A", "#FFE248", "#47EC62", "#3BADFF", "#6B53FF", "#9868FF", "#26FFFF", "#F584FF", "#FFC0FC", "#800080", "#D4FF7A", "#015969", "#ACB07D", "#484881", "#800000", "#513A3A", "#000", "#C0C0C0", "#757575", "#fff", "##FFBE98", "##FFD700", "#FF7F50"];
    return colors[hour % colors.length];
  };

  const colorStyle = {
    color: getColor(hour),
  };

  return <div id="clock" style={colorStyle}>{time}</div>;
};

export default Clock;
