import { Route, Routes } from "react-router-dom";

import MainPage from "./components/MainPage/MainPage";
import Login from "./components/LoginPage/LoginPage";
import SignInPage from "./components/SignInPage/SignInPage";
import Profile from "./components/Profile/Profile";
import MyArticles from "./components/MyArticles/MyArticles";
import AddArticle from "./components/AddArticle/AddArticle";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/main-page" element={<MainPage />} />
        <Route path="/" element={<MainPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/sign-in" element={<SignInPage />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/my-articles" element={<MyArticles />} />
        <Route path="/add-article" element={<AddArticle />} />
      </Routes>
    </div>
  );
}

export default App;
