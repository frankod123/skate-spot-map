import "./App.scss";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Header from "./components/header/Header";
import HomePage from "./pages/home-page/HomePage";
import SpotDetails from "./pages/spot-details-page/SpotDetails";
import SatellitePage from "./pages/satellite-page/SatellitePage";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="home" element={<Navigate to="/" />} />
          <Route path="/satellite" element={<SatellitePage />} />
          <Route path="/spot-details/:spotId" element={<SpotDetails />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
