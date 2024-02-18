import React from "react";
import { useNavigate } from 'react-router-dom';
import "./head.scss";
const Header = () => {
    const navigate = useNavigate();
  return (
    <div className="Head">
      <div className="Logo">test</div>
      <div className="HeaderUl">
        <div className="headerLi" onClick={()=>navigate("/he1")}>이거지</div>
        <div className="headerLi" onClick={()=>navigate("/he")}>멍청하지</div>
        <div className="headerLi" onClick={()=>navigate("/he")}>연희는</div>
      </div>
    </div>
  );
};
export default Header;
