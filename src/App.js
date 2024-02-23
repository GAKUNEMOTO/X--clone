import './App.css';
import Home from './components/Home/Home';
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Profile from './components/Home/profile/Profile';
import Signup from './components/Signup/Signup';
import LoginHome from './components/Login/LoginHome';
import Login from './components/Login/Login';
import AccountCreate from './components/Signup/AccountCreate';


function App() {
  
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path={'/'} element={<LoginHome/>}/>
          <Route path={'/Home'} element={<Home/>}/>
          <Route path={'/profile'} element={<Profile />} />
          <Route path={'/Signup'} element={<Signup />} />
          <Route path={'/Login'} element={<Login />} />
          <Route path={'/AccountCreate'} element={<AccountCreate />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
