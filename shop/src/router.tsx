import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "src/components/auth/login"
import Main from "src/components/Main/Home/Home"

const Router = () => {
  return (
    <BrowserRouter>
    
      <Routes>
        <Route path="/login" element={<Login/>}/>
        <Route path="/" element={<Main/>} />
      </Routes>
    
    </BrowserRouter>
  );
};
export default Router;
