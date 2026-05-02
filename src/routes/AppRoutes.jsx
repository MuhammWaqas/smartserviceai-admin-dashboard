import { Routes, Route, Navigate } from "react-router-dom";
import ProtectedRoute from "../routes/ProtectedRoute";

// Admin pages
import DashboardLayout from "../layouts/DashboardLayout";
import Dashboard from "../pages/Dashboard/Dashboard";
import UserForm from "../pages/Dashboard/users-management/UserForm";
import Provider from "../pages/Dashboard/providers-management/Provider";
import Services from "../pages/Dashboard/services-management/Services";
import Bookings from "../pages/Dashboard/bookings-management/Bookings";
import Payment from "../pages/Dashboard/payment-management/Payment";

// Provider pages
import ProviderLayout from "../layouts/ProviderLayout";
import ProviderDashboard from "../pages/provider/Dashboard";
import MyServices from "../pages/provider/services/Services";
import MyBooking from "../pages/provider/bookings/Bookings";
import Profile from "../pages/provider/profile/Profile";

// Auth
import Login from "../pages/auth/Login";

function AppRoutes() {
  return (
    <Routes>
      {/* Auth - Public Route */}
      <Route path="/login" element={<Login />} />

      {/* Admin Routes - The default starting point */}
      <Route
        element={
          <ProtectedRoute>
            <DashboardLayout />
          </ProtectedRoute>
        }
      >
        {/* path="/" now loads the Dashboard inside DashboardLayout */}
        <Route path="/" element={<Dashboard />} /> 
        <Route path="/users-management" element={<UserForm />} />
        <Route path="/providers-management" element={<Provider />} />
        <Route path="/services-management" element={<Services />} />
        <Route path="/bookings-management" element={<Bookings />} />
        <Route path="/payment-management" element={<Payment />} />
      </Route>

      {/* Provider Routes */}
      <Route
        element={
          <ProtectedRoute>
            <ProviderLayout />
          </ProtectedRoute>
        }
      >
        <Route path="/provider/dashboard" element={<ProviderDashboard />} />
        <Route path="/provider/services" element={<MyServices />} />
        <Route path="/provider/bookings" element={<MyBooking />} />
        <Route path="/provider/profile" element={<Profile />} />
      </Route>

      {/* 404 */}
      <Route path="*" element={<h1>404 - Not Found</h1>} />
    </Routes>
  );
}

export default AppRoutes;