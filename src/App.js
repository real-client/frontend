import { Routes, Route } from "react-router-dom";
import "./App.css";

import Home from "./pages/home/home.js";
import Profile from "./pages/profile/Profile";
import Events from "./pages/events/Events";
import Opportunities from "./pages/opportunities/Opportunities";
import ContactUs from "./pages/contactUs/ContactUs";
import Founders from "./pages/founders/Founders";
import Volunteers from "./pages/volunteers/Volunteers";
import Team from "./pages/team/Team";
import Login from "./pages/login/Login";
import Signup from "./pages/signup/Signup";

function App() {
  return (
    <div className="App">
      {/* <Events /> */}
      <Founders />
      {/* <Profile /> */}
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

          {/* <Route element={<PrivateSuperAdmin />}>
              <Route path="/admin" element={<Admin />} />
            </Route> */}
        {/* </Routes>  */}
      </div>
    </div>
  );
}

export default App;
