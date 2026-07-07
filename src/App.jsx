import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import ProfileHeader from './components/ProfileHeader';
import EmergencyProfile from './pages/EmergencyProfile';
import MedicalInfo from './pages/MedicalInfo';
import Contacts from './pages/Contacts';

function App() {
  return (
    <BrowserRouter>
      <div className="mesh-bg text-on-background min-h-screen flex flex-col md:flex-row font-body-md">
        <Navigation />
        
        {/* Main Content Canvas */}
        <main className="flex-1 md:ml-64 w-full max-w-4xl mx-auto p-container-padding md:p-xl space-y-lg relative z-10 pb-32 md:pb-8">
          <ProfileHeader />
          <Routes>
            <Route path="/" element={<EmergencyProfile />} />
            <Route path="/medical-info" element={<MedicalInfo />} />
            <Route path="/contacts" element={<Contacts />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;