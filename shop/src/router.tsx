import Login from "src/components/auth/login"
import { BrowserRouter, Route, Routes } from "react-router-dom";
const Router = () => {
  return (
    <BrowserRouter>
    
      <Routes>
        <Route path="/" element={<Login/>}/>
        
      </Routes>
    
    </BrowserRouter>
  );
};
export default Router;
