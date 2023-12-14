import { FaPeopleLine } from "react-icons/fa6";
import { MdCardGiftcard } from "react-icons/md";
import { PiCertificateDuotone } from "react-icons/pi";
import { SiSpringsecurity } from "react-icons/si";
import cert from '../../data/cert.png'

export default function WhyUs() {
  return (
    <div className="bg-gray-100 bg-gradient-to-b from-white px-10 sm:px-[30px]">
      <div className="mb-0 pt-[80px] text-center">
        <h2 className="p-5 text-center text-6xl font-bold lg:text-7xl">
          WHY CHOSE US?
        </h2>
        There are alot of Reasons to Chosing us!!!
      </div>

      <div
        className="mb-10 rounded-[20px] px-10 py-10 text-center  hover:bg-blue-500 hover:text-white"
        data-aos="flip-left"
        data-aos-duration="1000"
        data-aos-easing="ease-in-sine"
      >
        <div className="text-6x flex items-center justify-center text-center">
          <span>
            <img src={cert} width="100" height="100" />
          </span>
        </div>
        <h1 className="mb-3 mt-3 font-bold">Registered Agent</h1>
        <span className="  font-light ">
          {" "}
          We are registered agent operating accross the Globe connecting Clients
          with Best Affordable Professional Service Providers.
        </span>
      </div>

      <div className="flex items-center gap-x-8">
        <div className=" m-auto grid gap-x-8 gap-y-8 lg:w-[70%] lg:grid-cols-2 ">
          <div
            className="rounded-[20px] bg-gray-100 p-10 py-20 text-center shadow-xl hover:bg-blue-500 hover:text-white"
            data-aos="fade-left"
            data-aos-duration="1000"
            data-aos-easing="ease-in-sine"
          >
            <div className="flex items-center justify-center text-center text-6xl">
              <span>
                <PiCertificateDuotone />
              </span>
            </div>
            <h1 className="mb-3 mt-3 font-bold">
              Qualified/Certified Service-Providers
            </h1>
            <span className=" font-light ">
              {" "}
              All our available Service Providers are confirmed & verified for
              the specific service they render for best Clients experiences.
            </span>
          </div>
          <div
            className="rounded-[20px] bg-gray-100 p-10 py-20 text-center shadow-xl hover:bg-blue-500 hover:text-white sm:h-full md:h-full"
            data-aos="fade-right"
            data-aos-duration="1000"
            data-aos-easing="ease-in-sine"
          >
            <div className="flex items-center justify-center text-center text-6xl">
              <span>
                <FaPeopleLine />
              </span>
            </div>
            <h1 className="mb-3 mt-3 font-bold">Confirmed/Regulated Clients</h1>
            <span className="  font-light">
              {" "}
              Our Clients are verfified and confirmed for safety of our Service
              providers and for fast service delivery.
            </span>
          </div>
          <div
            className="rounded-[20px] bg-gray-100 p-10 py-20 text-center shadow-xl hover:bg-blue-500 hover:text-white"
            data-aos="flip-right"
            data-aos-duration="1000"
            data-aos-easing="ease-out-sine"
          >
            <div className="flex items-center justify-center text-center text-6xl">
              <span>
                <MdCardGiftcard />
              </span>
            </div>
            <h1 className="mb-3 mt-3 font-bold">
              Affordable & Quality Service Delivery
            </h1>
            <span className="  font-light">
              {" "}
              You stand the chance to hire the cheapest but professional Service
              Provider hence price range for a service differs.
            </span>
          </div>

          <div
            className="rounded-[20px] bg-gray-100 p-10 py-20 text-center shadow-xl hover:bg-blue-500 hover:text-white "
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-easing="ease-in-sine"
          >
            <div className="flex items-center justify-center text-center text-6xl">
              <span>
                <SiSpringsecurity />
              </span>
            </div>
            <h1 className="mb-3 mt-3 font-bold">Security</h1>
            <span className="  font-light">
              {" "}
              Security of our Service Providers and that of Clients is our
              outmost priority hence adequate security measures are in place.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
