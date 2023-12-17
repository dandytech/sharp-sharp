import { Outlet } from "react-router";
import SignupTab from "./SignupTab";
import Header from "../../ui/Header";
import SmallScreenHeader from "../../ui/SmallScreenHeader";
import Footer from "../../ui/Footer";

export default function SignupLayout() {
  return (
    <div className="overflow-x-hidden bg-gradient-to-r from-violet-100 to-blue-100 ">
      <Header />
      <SmallScreenHeader />
      <SignupTab />
      <Outlet />
      <Footer />
    </div>
  );
}
