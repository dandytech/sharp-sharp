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
import './index.css'

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
          <Route element={<PageLayout />}>
            <Route index element={<Navigate replace to="home" />} />

            <Route path="home" element={<Home />} />
            <Route path="contact" element={<Contact />} />
            <Route path="about" element={<About />} />
            <Route path="signup" element={<SignUp />} />
            <Route path="login" element={<Login />} />
            <Route path="*" element={<PageNotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
