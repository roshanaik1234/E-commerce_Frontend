import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import LandingPage from "./Page/LandingPage";
import Header from "./Page/Header";
import LoginPage from "./Page/Login";
import SignIn from "./Page/SignIn";
import SignUp from "./Page/Signup";

function App() {
  return (
    <BrowserRouter>
    <Header/>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signIn" element={<SignIn />} />
         <Route path="/signout" element={<SignUp />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
