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
import FaqMobile from "../features/home/faqMobile";

export default function Home() {
  return (
    <>
      <div className=" h-auto bg-gradient-to-r from-violet-100 to-blue-100 ">
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
