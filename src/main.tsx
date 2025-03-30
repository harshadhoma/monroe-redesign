import './index.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App';
import { LoginPage } from './components/vendor/LoginPage';
import { RegisterPage } from './components/vendor/RegisterPage';
import { VendorDashboard } from './components/vendor/VendorDashboard';
import { MapPreview } from './components/vendor/MapPreview';
import { VendorBookingForm } from './components/vendor/VendorBookingForm';
import TicketsList from './components/tickets/TicketsList';
import EventDetails from './components/Events/EventDetails';
import TicketSelection from './components/tickets/TicketSelection';
import UserInfo from './components/tickets/UserInfo';
import VisitorLogin from './components/visitor/VisitorLogin';
import VisitorRegister from './components/visitor/VisitorRegister';
import VisitorDashboard from './components/visitor/VisitorDashboard';
import PaymentPage from './components/tickets/PaymentPage';
import TicketSuccess from './components/tickets/TicketSuccess';
import SponsorsPage from './components/Sponsor/SponsorPage';
import EventsPage from './components/Events/Events';
import EventDetailsPage from './components/Events/EventDetailsPage';
import EventCalendarPage from './components/Events/EventCalendar';
import EventSchedule from './components/Events/EventSchedule';
import FairUpdates from './components/visitor/FairUpdates';
import FourHShowcase from './components/4H/4h';
import FourHSchedule from './components/4H/4h-schedule';
import FairgroundsMap from './components/Navigation/InteractiveMap';
import GalleryPage from './components/Photos/GalleryWall';
import ShareStoryPage from './components/Photos/ShareStoryPage';
import ShareYourStory  from './components/Photos/ShareYourStory';
import MeetYourCommunity from './components/MeetYourCommunity';


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/vendor/login" element={<LoginPage />} />
        <Route path="/vendor/register" element={<RegisterPage />} />
        <Route path="/map" element={<FairgroundsMap />} />
        <Route path="/vendor/dashboard" element={<VendorDashboard />} />
        <Route path="/vendor/event/:id/map" element={<MapPreview />} />
        <Route path="/vendor/event/:id/booking" element={<VendorBookingForm />} />
        <Route path="/auth/login" element={<VisitorLogin />} />
        <Route path="/auth/register" element={<VisitorRegister />} />
        <Route path="/tickets" element={<TicketsList />} />
        <Route path="/tickets/:eventId" element={<EventDetails />} />
        <Route path="/tickets/:eventId/checkout" element={<TicketSelection />} />
        <Route path="/tickets/:eventId/user-info" element={<UserInfo />} />
        <Route path="/user/dashboard" element={<VisitorDashboard />} />
        <Route path="/tickets/:eventId/payment" element={<PaymentPage />} />
        <Route path="/tickets/:eventId/success" element={<TicketSuccess />} />
        <Route path="/sponsor" element={<SponsorsPage />} />
        <Route path="/events" element={<EventsPage />} />
        <Route path="/events/:eventId" element={<EventDetailsPage />} />
        <Route path="/tickets/calendar" element={<EventCalendarPage />} />
        <Route path="/schedule" element={<EventSchedule />} />
        <Route path="/updates" element={<FairUpdates />} />
        <Route path='/4h' element={<FourHShowcase />} />
        <Route path='/4h-schedule' element={<FourHSchedule />} />
        <Route path='/upload' element={<GalleryPage />} />
        <Route path="/share-your-story" element={<ShareStoryPage />} />
        <Route path="/share" element={<ShareYourStory />} />
        <Route path="/community" element={<MeetYourCommunity />} />


      </Routes>
    </Router>
  </React.StrictMode>
);
