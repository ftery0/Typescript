import React from "react";
import { useNavigate } from 'react-router-dom';
import "./head.scss";
const Header = () => {
    const navigate = useNavigate();
  return (
    <div className="Head">
      <div className="Logo"></div>
      <div className="HeaderUl">
      <div className="headerLi" onClick={()=>navigate("/")}>Home</div>
        <div className="headerLi" onClick={()=>navigate("/myinfo")}>myinfo</div>
        <div className="headerLi" onClick={()=>navigate("/myWork")}>myWork</div>
        <div className="headerLi" onClick={()=>navigate("/he")}></div>
      </div>
    </div>
  );
};
export default Header;
