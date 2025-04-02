import './App.css'
import RetailPage from './components/RetailPage'
import Dashboard from './components/dashboard/Dashboard'
import Footer from './components/footer/Footer'
import Header from './components/header/Header'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ContactPage from './components/ContactUs'
import Schedule from './components/Schedule'
import LifeScience from './components/LifeScience'
import Education from './components/Education'
import FeaturePage from './components/Pages/FeaturePage'
import OurServices from './components/Pages/OurServices'
import AuthPage from './components/Pages/AuthPage'
import AboutUs from './components/Pages/Aboutus'
import Professional from './components/Pages/Professional'
import Public from './components/Pages/Public'
import Customer from './components/Customer'
import Chatbot from './components/chatbot.jsx'
import Healthcare from './components/Healthcare'


function App() {
  return (
    <BrowserRouter>  
      <Header />
      <Routes>
        <Route path="/retail" element={<RetailPage />} />
        <Route path="/" element={<Dashboard />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/ContactPage" element={<ContactPage />} />
        <Route path="/schedule" element={<Schedule />} />
        <Route path="/services" element={<OurServices />} />
        <Route path="/features" element={<FeaturePage />} />
        <Route path="/auth" element={<AuthPage />} />
        <Route path="/aboutUs" element={<AboutUs />} />
        <Route path="/professional" element={<Professional />} />
        <Route path="/publicSector" element={<Public />} />
        <Route path="/customer" element={<Customer />} />
        <Route path="/lifescience" element={<LifeScience />} />
        <Route path="/education" element={<Education />} />
        <Route path="/healthcare" element={<Healthcare />} />

      </Routes>
      <Footer />
      <Chatbot />
    </BrowserRouter>
  );
}

export default App;
