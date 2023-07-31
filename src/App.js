import "./App.scss";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Header from "./components/header/Header";
import HomePage from "./pages/home-page/HomePage";
import SpotDetailsPage from "./pages/spot-details-page/SpotDetailsPage";
import SatellitePage from "./pages/satellite-page/SatellitePage";
import ContactPage from "./pages/contact-page/ContactPage";
import AboutPage from "./pages/about-page/AboutPage";
import SkateSpotsPage from "./pages/skate-spots-page/SkateSpotsPage";

function App() {
  return (
    <div>
      <BrowserRouter>
      <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="home" element={<Navigate to="/" />} />
          <Route path="/satellite" element={<SatellitePage />} />
          <Route path="/spot-details/:spotId" element={<SpotDetailsPage />} />
          <Route path="/skate-spots" element={<SkateSpotsPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
