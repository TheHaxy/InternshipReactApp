import {Route, Routes} from "react-router-dom";
import './App.css';
import MainPage from "./components/MainPage/MainPage";
import Login from "./components/Login/Login";

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path='/main-page' element={<MainPage/>} />
                <Route path='/login' element={<Login/>} />
            </Routes>
        </div>
    );
}

export default App;
