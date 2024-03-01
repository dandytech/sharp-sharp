import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "../index.css";
import Services from "../features/home/Services";
import WhyUs from "../features/home/WhyUs";
import Faqs from "../features/home/Faqs";
import Testimonial from "../features/home/Testimonial";
import SliderDivs from "../features/home/SliderDivs";
import WhoWeAre from "../features/home/WhoWeAre";
import Solutions from "../features/home/Solutions";
import RequestForm from "../features/home/RequestForm";
import Partners from "../features/home/Partners";
import FaqMobile from "../features/home/FaqMobile";

import { useState } from "react";
import Cookies from "js-cookie";

export default function Home() {
  const [showBanner, setShowBanner] = useState(!Cookies.get("cookiesAccepted"));

  const handleAcceptCookies = () => {
    Cookies.set("cookiesAccepted", true);
    setShowBanner(false);
  };
  return (
    <>
      <div className=" h-auto  overflow-x-hidden bg-gradient-to-r from-violet-100 to-blue-100 ">
        <di>
          {showBanner && (
            <div className="fixed bottom-[20px] left-[20px] rounded-xl border-2 bg-white p-10 z-50 shadow-md">
              <p>This website uses cookies to improve user experience.</p>
              <button
                onClick={handleAcceptCookies}
                className="mt-5 rounded-lg border-2 p-3"
              >
                Accept Cookies
              </button>
            </div>
          )}
        </di>

        {/* Solutions */}
        <Solutions />

        {/* SLIDER  */}
        <SliderDivs />

        {/* who we are */}
        <WhoWeAre />

        {/* WHY CHOSE US */}
        <WhyUs />

        {/* FAQs */}
        <Faqs />
        <FaqMobile />

        {/* SERVICES */}
        <Services />

        {/* What our client say */}
        <Testimonial />

        {/* menu */}

        {/* <Head /> */}

        <RequestForm />

        <Partners />
      </div>
    </>
  );
}
