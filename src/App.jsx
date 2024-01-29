import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import PageLayout from "./pages/PageLayout";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import { useEffect } from "react";
import "./index.css";
import Login from "./pages/Login";
import About from "./pages/About";
import SignUp from "./pages/SignUp";
import GlobalStyles from "./styles/GlobalStyles";
import PageNotFound from "./ui/PageNotFound";
//animation
import AOS from "aos";
import "aos/dist/aos.css";

import ProviderSignup from "./features/signup/ProviderSignup";
import ClientSignup from "./features/signup/ClientSignup";
import SignupLayot from "./features/signup/SignupLayout";
import ProviderDashbordLayout from "./pages/dashboard/provider/ProviderDashboardLayout";

import DashboardProvider from "./pages/dashboard/provider/DashboardProvider";
import KycProvider from "./pages/dashboard/provider/KycProvider";
import ServiceRequests from "./pages/dashboard/provider/ServiceRequests.jsx";

import { DarkModeProvider } from "./context/DarkModeContext";

import ProviderNotifications from "./pages/dashboard/provider/ProviderNotifications";
import ProviderSettings from "./pages/dashboard/provider/ProviderSettings.jsx";
import Services from "./pages/Services.jsx";
import Logout from "./pages/dashboard/provider/Logout.jsx";
import AdminDashboardLayout from "./pages/dashboard/admin/AdminDashboardLayout.jsx";
import AdminDashboard from "./pages/dashboard/admin/AdminDashboard.jsx";
import AdminLogin from "./pages/dashboard/admin/AdminLogin.jsx";
import AdminNotifications from "./pages/dashboard/admin/AdminNotifications.jsx";
import AdminSettings from "./pages/dashboard/admin/AdminSettings.jsx";
import AdminServiceCategories from "./pages/dashboard/admin/AdminServiceCategories.jsx";

export default function App() {
  //animation
  useEffect(() => {
    AOS.init(); // Initialize AOS library
  }, []);
  return (
    <>
      <DarkModeProvider>
        <GlobalStyles />
        <BrowserRouter>
          <Routes>
            {/* main route */}
            <Route element={<PageLayout />}>
              <Route index element={<Navigate replace to="home" />} />

              <Route path="home" element={<Home />} />
              <Route path="contact" element={<Contact />} />
              <Route path="about" element={<About />} />
              <Route path="signup" element={<SignUp />} />
              <Route path="login" element={<Login />} />

              <Route path="services" element={<Services />} />

              <Route path="*" element={<PageNotFound />} />
            </Route>

            {/* signup route */}
            <Route element={<SignupLayot />}>
              <Route path="providerReg" element={<ProviderSignup />} />
              <Route path="clientReg" element={<ClientSignup />} />
              <Route path="*" element={<PageNotFound />} />
            </Route>

            {/* Provider Dashboard */}
            <Route path="provider" element={<ProviderDashbordLayout />}>
              <Route index element={<Navigate replace to="dashboard" />} />

              <Route path="dashboard" element={<DashboardProvider />} />

              <Route path="kyc" element={<KycProvider />} />
              <Route path="services" element={<ServiceRequests />} />

              <Route path="notifications" element={<ProviderNotifications />} />

              <Route path="providerSettings" element={<ProviderSettings />} />

              <Route path="logout" element={<Logout />} />
              <Route path="*" element={<PageNotFound />} />
            </Route>

            {/* Admin Route */}
            <Route path="adminLogin" element={<AdminLogin />} />
            <Route path="admin" element={<AdminDashboardLayout />}>
              <Route index element={<Navigate replace to="dashboard" />} />
              <Route path="dashboard" element={<AdminDashboard />} />
              <Route path="providers" />
              <Route path="clients" />
              <Route path="subadmins" />
              <Route path="categories" element={<AdminServiceCategories />} />
              <Route path="notifications" element={<AdminNotifications />} />
              <Route path="settings" element={<AdminSettings />} />
              <Route path="logout" />
              <Route path="*" element={<PageNotFound />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </DarkModeProvider>
    </>
  );
}
