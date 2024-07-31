import { Outlet, useLocation } from "react-router";
import Header from "../ui/Header";
import Footer from "../ui/Footer";
import SmallScreenHeader from "../ui/SmallScreenHeader";
import "../index.css";
import { useEffect } from "react";

export default function PageLoyout() {

  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);


  return (
    <div>
      <>
        <Header />
        <SmallScreenHeader />

        <Outlet />

        <Footer />
      </>
    </div>
  );
}
