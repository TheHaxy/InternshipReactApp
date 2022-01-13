import { Route, Routes } from "react-router-dom";
import "./App.css";
import MainPage from "./components/MainPage/MainPage";
import Login from "./components/LoginPage/LoginPage";
import SignInPage from "./components/SignInPage/SignInPage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/main-page" element={<MainPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/sign-in" element={<SignInPage />} />
      </Routes>
    </div>
  );
}

export default App;
