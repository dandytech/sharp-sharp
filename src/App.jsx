import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import PageLayout from "./pages/PageLayout";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import About from "./pages/About";
import SignUp from "./pages/SignUp";
import GlobalStyles from "./styles/GlobalStyles";
import PageNotFound from "./ui/PageNotFound";
import { useEffect } from "react";
//animation
import AOS from "aos";
import "aos/dist/aos.css";
import "./index.css";

import ProviderSignup from "./features/signup/ProviderSignup";
import ClientSignup from "./features/signup/ClientSignup";
import SignupLayot from "./features/signup/SignupLayout";
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
        </Routes>
      </BrowserRouter>
    </>
  );
}
