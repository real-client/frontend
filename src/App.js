import './App.css';
import Home from './pages/home/home.js';
import NavBar from './components/navBar/navBar.js';
import { Routes, Route } from "react-router-dom";
import "./App.css";
import PrivateSuperAdmin from './components/PrivateSuperAdmin/PrivateSuperAdmin.js';
import Profile from "./pages/profile/Profile";
import Events from "./pages/events/Events";
import Opportunities from "./pages/opportunities/Opportunities";
import ContactUs from "./pages/contactUs/ContactUs";
import Founders from "./pages/founders/Founders";
import Volunteers from "./pages/volunteers/Volunteers";
import Team from "./pages/team/Team";
import Login from "./pages/login/Login";
import Signup from "./pages/signup/Signup";
import Admin from './pages/admin/admin';
import Footer from './components/footer/footer'


function App() {
  return (
    <div>
      <NavBar />
      {/* <Home /> */}
      <Volunteers />
      <Footer/>
      <div className="App">
        <div className="App-container">
          {/* <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route exact path="/home" element={<Home />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/volunteers" element={<Volunteers />} />
            <Route path="/team" element={<Team />} />
            <Route path="/founders" element={<Founders />} />
            <Route path="/events" element={<Events />} />
            <Route path="/opportunities" element={<Opportunities />} />
            <Route path="/contactUs" element={<ContactUs />} />
            <Route element={<PrivateSuperAdmin />}> 
              { <Route path="/admin" element={<Admin />} /> }
             </Route>
          </Routes> */}
        </div>
      </div>
    </div>
  );
}

export default App;
