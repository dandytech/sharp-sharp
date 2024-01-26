import { NavLink } from "react-router-dom";
import Slider from "react-slick";

export default function SliderDivs() {
  //Carousel Slider
  const settings = {
    dots: true,
    infinite: true,
    speed: 400,
    slidesToShow: 1,
    slidesToScroll: -1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  return (
    <div className=" h-[600px] overflow-x-hidden">
      <Slider {...settings}>
        <div className="slider1 h-[600px] bg-[url('/src/data/bg2.jpeg')]  bg-cover bg-center bg-no-repeat ">
          <p className="mb-10 text-[34px] font-bold leading-[40px] sm:w-[50%] lg:w-[50%]">
            REGISTER AS A{" "}
            <span className="text-blue-500">SERVICE PROVIDER</span>
          </p>
          <p className="text-[24px] font-bold sm:w-[55%]">
            <NavLink to="/signup" className="font-semibold text-blue-500">
              {" "}
              Get Started
            </NavLink>{" "}
            as a Service Provider to get latest jobs from our Potential Customers
            closest to you.
          </p>
        </div>

        <div className="slider1 h-[600px] bg-[url('/src/data/bg3.jpeg')]  from-white bg-cover bg-center bg-no-repeat lg:w-[50%] ">
          <p className="mb-10 text-[34px] font-bold leading-[40px] sm:w-[50%]">
            REGISTER AS A <span className="text-blue-500">CLIENT</span>
          </p>
          <p className="text-[24px] font-bold sm:w-[55%]">
            <NavLink to="/signup" className="font-semibold text-blue-500">
              {" "}
              Get Started
            </NavLink>{" "}
            as a Client to hire the Best Available & Affordable Professional
            Service Providers for your Home Services.
          </p>
        </div>

        <div className="slider1 h-[600px] bg-[url('/src/data/bg11.jpeg')] bg-cover bg-center bg-no-repeat ">
          <p className="mb-10 text-[34px] font-bold leading-[40px] sm:w-[50%]">
            YOUR <span className="text-blue-500">SATISFACTION & COMFORT </span>
            IS OUR PRIORITY
          </p>
          <p className="text-[24px] font-bold sm:w-[55%]">
            We care for our Clients & Providers Welfare, you are covered!!!
          </p>
        </div>

        {/* Add more slides as needed */}
      </Slider>
    </div>
  );
}
