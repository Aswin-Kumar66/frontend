import React, { useEffect } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Main from './components/Main';
import AppConsulting from './pages/AppConsulting';
import BrandPromotion from './pages/BrandPromotion';
import LeadGeneration from './pages/LeadGeneration';
import PerformaneMarketing from './pages/PerformanceMareting';
function App() {

  return (
    <>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/AppConsulting" element={<AppConsulting />} />
          <Route path="/BrandPromotion" element={<BrandPromotion />} />
          <Route path="/LeadGeneration" element={<LeadGeneration />} />
          <Route path="/PerformanceMarketing" element={<PerformaneMarketing />} />
        </Routes>

    </>
  );
}

export default App;