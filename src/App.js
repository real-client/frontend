import "./App.css";
import Dashboard from "./pages/dashboard/dashboard";
import DashboardContainer from "./pages/dashboardContainer/dashboardContainer";
import Users from "./pages/users/users";
import Events from "./pages/events/events";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<DashboardContainer />}>
          <Route path="/" element={<Dashboard />}></Route>
          <Route path="/users" element={<Users />}></Route>
          <Route path="/events" element={<Events />}></Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
