import "./App.css";
import Dashboard from "./pages/dashboard/dashboard";
import DashboardContainer from "./pages/dashboardContainer/dashboardContainer";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<DashboardContainer />}>
          <Route path="/" element={<Dashboard />}></Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
