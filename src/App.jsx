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

export default function App() {
  //animation
  useEffect(() => {
    AOS.init(); // Initialize AOS library
  }, []);
  return (
    <>
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

            <Route path="*" element={<PageNotFound />} />
          </Route>

          {/* signup route */}
          <Route element={<SignupLayot />}>
            <Route path="providerReg" element={<ProviderSignup />} />
            <Route path="clientReg" element={<ClientSignup />} />
          </Route>

          {/* Provider Dashboard */}
          <Route path="provider" element={<ProviderDashbordLayout />}>
            <Route index element={<Navigate replace to="dashboard" />} />

            <Route path="dashboard" element={<DashboardProvider />} />
            <Route path="kyc" element={<KycProvider />} />
            <Route path="services" element={<ServiceRequests />} />
            <Route path="*" element={<PageNotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
