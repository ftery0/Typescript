import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./Main/Main";
import MyProfile from "./myinfo/profile";
import "src/style/global.scss"
const Router = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Main/>} />
          <Route path="/myinfo" element={<MyProfile/>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default Router;