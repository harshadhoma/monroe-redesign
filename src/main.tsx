import './index.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Navigate } from 'react-router-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App';
import { LoginPage } from './components/vendor/LoginPage';
import { RegisterPage } from './components/vendor/RegisterPage';
import { VendorDashboard } from './components/vendor/VendorDashboard';
import { MapPreview } from './components/vendor/MapPreview';
import { VendorBookingForm } from './components/vendor/VendorBookingForm';
import { VendorMap }from './components/vendor/VendorMap';
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
import ScrollToTop from './components/Navigation/ScrollToTop';
import HallOfFame from './components/4H/HallOfFame';
import { useState } from 'react';
import { AdminLogin } from './components/admin/AdminLogin';
import { AdminDashboard } from './components/admin/AdminDashboard';
import { ManageEvents } from './components/admin/ManageEvents';
import { ManageBookings } from './components/admin/ManageBookings';
import { AnalyticsPanel } from './components/admin/AnalyticsPanel';
import { VendorList } from './components/admin/VendorList';
import { AdminMessages } from './components/admin/AdminMessages';
import { AdminReports } from './components/admin/AdminReports';
import { AdminSettings } from './components/admin/AdminSettings';


const AppRoutes = () => {
  const [isAdmin, setIsAdmin] = useState(false);

  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/vendor/login" element={<LoginPage />} />
        <Route path="/vendor/register" element={<RegisterPage />} />
        <Route path="/map" element={<FairgroundsMap />} />
        <Route path="/vendor/dashboard" element={<VendorDashboard />} />
        <Route path="/vendor/event/eventId/map" element={<VendorMap />} />
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
        <Route path="/vendor/event/:eventId/map" element={<VendorMap />} />
        <Route path='/4h-hall-of-fame' element={<HallOfFame />} />

        {/* ✅ Admin Routes */}
        <Route path="/admin" element={<AdminLogin setIsAdmin={setIsAdmin} />} />
        <Route path="/admin/dashboard" element={isAdmin ? <AdminDashboard setIsAdmin={setIsAdmin} /> : <Navigate to="/admin" />} />
        <Route path="/admin/events" element={isAdmin ? <ManageEvents /> : <Navigate to="/admin" />} />
        <Route path="/admin/bookings" element={isAdmin ? <ManageBookings /> : <Navigate to="/admin" />} />
        <Route path="/admin/analytics" element={isAdmin ? <AnalyticsPanel /> : <Navigate to="/admin" />} />
        <Route path="/admin/vendors" element={isAdmin ? <VendorList /> : <Navigate to="/admin" />} />
        <Route path="/admin/messages" element={isAdmin ? <AdminMessages /> : <Navigate to="/admin" />} />
        <Route path="/admin/reports" element={isAdmin ? <AdminReports /> : <Navigate to="/admin" />} />
        <Route path="/admin/settings" element={isAdmin ? <AdminSettings /> : <Navigate to="/admin" />} />
      </Routes>
    </Router>
  );
};

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AppRoutes />
  </React.StrictMode>
);
