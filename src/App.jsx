import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import PageLayout from "./pages/PageLayout";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import { useEffect } from "react";
import "./index.css";
import Login from "./pages/Login";

import GlobalStyles from "./styles/GlobalStyles";
import PageNotFound from "./ui/PageNotFound";
//animation
import AOS from "aos";
import "aos/dist/aos.css";

import ProviderSignup from "./features/signup/ProviderSignup";
import ClientSignup from "./features/signup/ClientSignup";

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
import AdminLogin from "./pages/AdminLogin.jsx";
import AdminNotifications from "./pages/dashboard/admin/AdminNotifications.jsx";
import AdminSettings from "./pages/dashboard/admin/AdminSettings.jsx";
import AdminServiceCategories from "./pages/dashboard/admin/AdminServiceCategories.jsx";
import Providers from "./pages/dashboard/admin/Providers.jsx";
import Clients from "./pages/dashboard/admin/Clients.jsx";
import SubAdmins from "./pages/dashboard/admin/SubAdmins.jsx";
import AdminServiceRequests from "./pages/dashboard/admin/AdminServiceRequests.jsx";
import SignupOption from "./features/signup/SignupOption.jsx";
import ClientDashLayout from "./pages/dashboard/client/ClientDashLayout.jsx";
import RequestService from "./pages/RequestService.jsx";

import Requests from "./pages/dashboard/client/Requests.jsx";
import ServicesAvailable from "./pages/dashboard/client/ServicesAvailble.jsx";
import ClientNotifications from "./pages/dashboard/client/ClientNotifications.jsx";
import ClientSettings from "./pages/dashboard/client/ClientSettings.jsx";
import ClientDashboard from "./pages/dashboard/client/ClientDashboard.jsx";
import FAQs from "./pages/dashboard/admin/FAQs.jsx";
import ForgotPassword from "./features/signup/ForgotPassword.jsx";
import VerifyEmail from "./features/signup/VerifyEmail.jsx";
import ClientTransactions from "./pages/dashboard/client/ClientTransactions.jsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Toaster } from "react-hot-toast";
import ProtectedRoute from "./ui/ProtectedRoute.jsx";
import ProtectedRouteAdmin from "./ui/ProtectedRouteAdmin.jsx";
import ResendVerifyEmail from "./features/signup/ResendVerifyEmail.jsx";
// import VerifyForgotPassword from "./features/signup/verifyForgotPassword.jsx";

import ChangePassword from "./features/signup/ChangePassword.jsx";

//set up react-query with some options overitting them as needed
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      // staleTime: 60 * 1000,
      staleTime: 0, //time to update table
    },
  },
});

export default function App() {
  //animation
  useEffect(() => {
    AOS.init(); // Initialize AOS library
  }, []);

  return (
    <>
      <DarkModeProvider>
        <QueryClientProvider client={queryClient}>
          <ReactQueryDevtools initialIsOpen={false} />
          <GlobalStyles />
          <BrowserRouter>
            <Routes>
              {/* main route */}
              <Route element={<PageLayout />}>
                <Route index element={<Navigate replace to="home" />} />

                <Route path="home" element={<Home />} />
                <Route path="contact" element={<Contact />} />

                <Route path="signup" element={<SignupOption />} />

                <Route path="login" element={<Login />} />

                <Route path="services" element={<Services />} />
                <Route path="providerReg" element={<ProviderSignup />} />
                <Route path="clientReg" element={<ClientSignup />} />
                <Route path="requestService" element={<RequestService />} />
                <Route path="*" element={<PageNotFound />} />
              </Route>

              <Route path="verifyemail" element={<VerifyEmail />} />

              <Route path="resendVerifyemail" element={<ResendVerifyEmail />} />

              <Route path="forgotpassword" element={<ForgotPassword />} />

              {/* <Route
                path="checkpasswordcode"
                element={<VerifyForgotPassword />}
              /> */}

              <Route path="changepassword" element={<ChangePassword />} />

              {/* Provider Dashboard */}
              <Route
                path="provider"
                element={
                  <ProtectedRoute>
                    <ProviderDashbordLayout />
                  </ProtectedRoute>
                }
              >
                <Route index element={<Navigate replace to="dashboard" />} />

                <Route path="dashboard" element={<DashboardProvider />} />

                <Route path="kyc" element={<KycProvider />} />
                <Route path="services" element={<ServiceRequests />} />

                <Route
                  path="notifications"
                  element={<ProviderNotifications />}
                />

                <Route path="providerSettings" element={<ProviderSettings />} />

                <Route path="logout" element={<Logout />} />
                <Route path="*" element={<PageNotFound />} />
              </Route>

              {/* Admin Route */}
              <Route path="adminLogin" element={<AdminLogin />} />

              <Route
                path="admin"
                element={
                  <ProtectedRouteAdmin>
                    <AdminDashboardLayout />
                  </ProtectedRouteAdmin>
                }
              >
                <Route index element={<Navigate replace to="dashboard" />} />
                <Route path="dashboard" element={<AdminDashboard />} />
                <Route path="providers" element={<Providers />} />
                <Route path="clients" element={<Clients />} />
                <Route path="subadmins" element={<SubAdmins />} />
                <Route path="categories" element={<AdminServiceCategories />} />
                <Route
                  path="serviceRequests"
                  element={<AdminServiceRequests />}
                />
                <Route path="notifications" element={<AdminNotifications />} />
                <Route path="settings" element={<AdminSettings />} />
                <Route path="logout" />
                <Route path="faqs" element={<FAQs />} />
                <Route path="*" element={<PageNotFound />} />
              </Route>

              {/* Client Route */}
              <Route
                path="client"
                element={
                  <ProtectedRoute>
                    <ClientDashLayout />
                  </ProtectedRoute>
                }
              >
                <Route index element={<Navigate replace to="dashboard" />} />
                <Route path="dashboard" element={<ClientDashboard />} />
                <Route path="requests" element={<Requests />} />
                <Route path="services" element={<ServicesAvailable />} />
                <Route path="payments" element="" />
                <Route path="notifications" element={<ClientNotifications />} />
                <Route path="settings" element={<ClientSettings />} />
                <Route path="transactions" element={<ClientTransactions />} />

                <Route path="*" element={<PageNotFound />} />
              </Route>
            </Routes>
          </BrowserRouter>

          <Toaster
            position="top-center"
            gutter={12}
            containerStyle={{ margin: "8px" }}
            toastOptions={{
              success: {
                duration: 3000,
              },
              error: {
                duration: 5000,
              },
              style: {
                fontSize: "16px",
                maxWidth: "500px",
                padding: "16px 24px",
                backgroundColor: "var(--color-grey-0)",
                color: "var(--color-grey-700)",
              },
            }}
          />
        </QueryClientProvider>
      </DarkModeProvider>
    </>
  );
}
