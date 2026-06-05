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
  const token = localStorage.getItem("access_token");

  return (
    <Routes>
      {/* 1. If user is logged in and goes to /login, send them to dashboard. 
             If not, show Login page. */}
      <Route 
        path="/login" 
        element={token ? <Navigate to="/" replace /> : <Login />} 
      />

      {/* 2. Admin Routes - Protected */}
      <Route
        element={
          <ProtectedRoute>
            <DashboardLayout />
          </ProtectedRoute>
        }
      >
        {/* Use 'index' for the default dashboard page */}
        <Route index element={<Dashboard />} /> 
        <Route path="users-management" element={<UserForm />} />
        <Route path="providers-management" element={<Provider />} />
        <Route path="services-management" element={<Services />} />
        <Route path="bookings-management" element={<Bookings />} />
        <Route path="payment-management" element={<Payment />} />
      </Route>

      {/* 3. Provider Routes - Protected */}
      <Route
        path="/provider"
        element={
          <ProtectedRoute>
            <ProviderLayout />
          </ProtectedRoute>
        }
      >
        <Route path="dashboard" element={<ProviderDashboard />} />
        <Route path="services" element={<MyServices />} />
        <Route path="bookings" element={<MyBooking />} />
        <Route path="profile" element={<Profile />} />
      </Route>

      {/* 4. Catch-all: Redirect unknown routes to root (which checks for login) */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default AppRoutes;