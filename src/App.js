import "./App.css";
import Sidebar from "./components/navBar/sideBar";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Sidebar />} />
      </Routes>
    </>
  );
}

export default App;
