import { Outlet } from "react-router";
import Header from "../ui/Header";
import Footer from "../ui/Footer";
import SmallScreenHeader from "../ui/SmallScreenHeader";
import "../index.css";

export default function PageLoyout() {
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
