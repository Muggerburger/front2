import './App.css';
import Intro from './comp/intro/Intro';
import GamePage from './comp/game /GamePage';
import Home from './comp/login/Home';
import InHome from './comp/login/InHome';
import Outro from './comp/outro/Outro';
import Info from './comp/login/Info';
import Rank from './comp/login/Rank';
import LoginHandeler from './comp/login/LoginHandler';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/home" element={<InHome/>}></Route>
          <Route
            path="/kakao/login" //redirect_url
            element={<LoginHandeler/>}//당신이 redirect_url에 맞춰 꾸밀 컴포넌트
          />
          <Route path="/intro" element={<Intro />}></Route>
          <Route path="/info" element={<Info />}></Route>
          <Route path="/rank" element={<Rank/>}></Route>
          <Route path="/gamepage" element={<GamePage />}></Route>
          <Route path="/outro" element={<Outro />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
