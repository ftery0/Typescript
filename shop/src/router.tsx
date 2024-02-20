import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "src/components/auth/Login/login";
import Main from "src/components/Main/Home/Home";
import GlobalStyles from "src/style/global";

const Router = () => {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Main />} />
      </Routes>
    </BrowserRouter>
  );
};
export default Router;
