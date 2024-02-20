import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./Main/Main";
import MyProfile from "./myinfo/profile";
import MyWork from "./Work/Mywork";
import "src/style/global.scss"
const Router = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Main/>} />
          <Route path="/myinfo" element={<MyProfile/>} />
          <Route path="/myWork" element={<MyWork/>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default Router;