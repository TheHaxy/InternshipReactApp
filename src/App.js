import { Route, Routes } from "react-router-dom";
import "./App.css";
import MainPage from "./components/MainPage/MainPage";
import Login from "./components/LoginPage/LoginPage";
import SignInPage from "./components/SignInPage/SignInPage";
import Profile from "./components/Profile/Profile";
import MyArticles from "./components/MyArticles/MyArticles";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/main-page" element={<MainPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/sign-in" element={<SignInPage />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/my-articles" element={<MyArticles />} />
      </Routes>
    </div>
  );
}

export default App;
