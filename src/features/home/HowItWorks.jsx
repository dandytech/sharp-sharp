import step1c from "../../data/step1c.jpeg";
import step2 from "../../data/step2.png";
import step3 from "../../data/step3.png";
import step4 from "../../data/step4.png";
import step1p from "../../data/step1p.png";
import step2p from "../../data/step2p.png";
import step3p from "../../data/step3p.png";
import step4p from "../../data/step4p.png";
import arrowdown from "../../data/arrowdown.png";
import arrowup from "../../data/arrowup.png";
import arrowmobile from "../../data/arrowmobile.png";
import { useState } from "react";

export default function HowItWorks() {
  const [activeTab, setActiveTab] = useState(1);

  const handleTabClick = (tabNumber) => {
    setActiveTab(tabNumber);
  };

  return (
    <div
      className="from-white-100 from-gray-10 mb-5 mt-5 border-2 bg-gray-100 bg-gradient-to-t pt-[150px] text-center "
      data-aos="flip-up"
      data-aos-duration="1000"
      data-aos-easing="ease-in-sine"
    >
      <div className="mb-10">
        <h2 className="mb-3 text-center text-4xl font-semibold lg:text-5xl">
          {" "}
          HOW IT <span className="text-blue-500">W</span>ORKS
        </h2>{" "}
      </div>

      <div className="tab-buttons font-bold">
        <button
          className={activeTab === 1 ? "active " : " "}
          onClick={() => handleTabClick(1)}
        >
          For Clients
        </button>

        <button
          className={activeTab === 2 ? "active" : ""}
          onClick={() => handleTabClick(2)}
        >
          For Providers
        </button>
      </div>

      <div className="tab-content">
        {activeTab === 1 && (
          <div>
            <p className="my-10">
              Four <span className="text-blue-500">Steps</span> to Hire the{" "}
              <span className="text-blue-500">Best</span> and{" "}
              <span className="text-blue-500">Affordable</span> Service
              Providers Closest to your House to Serve you at the comfort of
              your Home.
            </p>

            <div className=" m-auto space-y-10 px-10 lg:flex lg:space-y-0">
              <div className="flex flex-col items-center space-y-3">
                <div className="flex h-[300px] w-[300px] items-center  justify-center rounded-full border-[10px] border-blue-500 bg-[url('/src/data/bg7.jpeg')] bg-cover bg-center bg-no-repeat text-center transition-all duration-1000 hover:scale-110 hover:border-white">
                  <img
                    src={step1c}
                    alt="pic"
                    className="h-[200px] w-[200px] rounded-full"
                  />
                </div>
                <h1 className="text-lg font-bold">Register as a Client</h1>
                <p>
                  Sign Up for free as a Client and complete your profile
                  information to enable you request the services of Providers at
                  the comfort of your home.
                </p>
              </div>{" "}
              <div className="hidden pt-[150px] lg:block">
                {" "}
                <img src={arrowdown} alt="pic" />
              </div>
              <div className="flex h-[50px] items-center justify-center lg:hidden">
                <img src={arrowmobile} alt="pic" width="100" />
              </div>
              <div className="flex flex-col items-center space-y-3  border-2 lg:pt-[80px]">
                <div className="flex h-[300px] w-[300px] items-center  justify-center rounded-full border-[10px] border-blue-500 bg-[url('/src/data/bg7.jpeg')] bg-cover bg-center bg-no-repeat text-center transition-all duration-1000 hover:scale-110 hover:border-white">
                  <img
                    src={step2}
                    alt="pic"
                    className="h-[200px] w-[200px] rounded-full"
                  />
                </div>
                <h1 className="text-lg font-bold">Request for Service</h1>
                <p>
                  Choose or request Quote for your desired service and proceeed
                  to complete your request information.
                </p>
              </div>
              <div className="hidden pt-[200px] lg:block">
                {" "}
                <img src={arrowup} alt="pic" />
              </div>
              <div className="flex h-[50px] items-center justify-center lg:hidden">
                <img src={arrowmobile} alt="pic" width="100" />
              </div>
              <div className="flex flex-col items-center space-y-3">
                <div className="flex h-[300px] w-[300px] items-center  justify-center rounded-full border-[10px] border-blue-500 bg-[url('/src/data/bg7.jpeg')] bg-cover bg-center bg-no-repeat text-center transition-all duration-1000 hover:scale-110 hover:border-white">
                  <img
                    src={step3}
                    alt="pic"
                    className="h-[200px] w-[200px] rounded-full"
                  />
                </div>
                <h1 className="text-lg font-bold">Make Payment</h1>
                <p>
                  Feel free to make payment for the service as you track, wait &
                  expect the provider in due time.
                </p>
              </div>
              <div className="hidden pt-[150px] lg:block">
                {" "}
                <img src={arrowdown} alt="pic" />
              </div>
              <div className="flex h-[50px] items-center justify-center lg:hidden">
                <img src={arrowmobile} alt="pic" width="100" />
              </div>
              <div className="flex flex-col items-center space-y-3 lg:pt-[80px]">
                <div className="flex h-[300px] w-[300px] items-center  justify-center rounded-full border-[10px] border-blue-500 bg-[url('/src/data/bg7.jpeg')] bg-cover bg-center bg-no-repeat text-center transition-all duration-1000 hover:scale-110 hover:border-white">
                  <img
                    src={step4}
                    alt="pic"
                    className="h-[200px] w-[200px] rounded-full"
                  />
                </div>
                <h1 className="text-lg font-bold">Receieve the Service</h1>
                <p>
                  Get your service delivered once the payment is successful as
                  Provider comes directly to serve you at home.
                </p>
              </div>
            </div>
          </div>
        )}
        {activeTab === 2 && (
          <p className="mt-10 lg:mt-0">
            {" "}
            <div>
              <p className="my-10">
                Four <span className="text-blue-500">Steps</span> to Get Hired
                by <span className="text-blue-500">Verified</span> Home
                Residents Closest to you.
              </p>

              <div className=" m-auto space-y-10 px-10 lg:flex lg:space-y-0">
                <div className="flex flex-col items-center space-y-3">
                  <div className="flex h-[300px] w-[300px] items-center  justify-center rounded-full border-[10px] border-blue-500 bg-[url('/src/data/bg7.jpeg')] bg-cover bg-center bg-no-repeat text-center transition-all duration-1000 hover:scale-110 hover:border-white">
                    <img
                      src={step1p}
                      alt="pic"
                      className="h-[200px] w-[200px] rounded-full"
                    />
                  </div>
                  <h1 className="text-lg font-bold">
                    Register as a Service Provider
                  </h1>
                  <p>
                    Sign Up for free as a Service Provider and complete your
                    profile information(KYC) to enable you get service requests
                    from Clients.
                  </p>
                </div>{" "}
                <div className="hidden pt-[150px] lg:block">
                  {" "}
                  <img src={arrowdown} alt="pic" />
                </div>
                <div className="flex h-[50px] items-center justify-center lg:hidden">
                  <img src={arrowmobile} alt="pic" width="100" />
                </div>
                <div className="flex flex-col items-center space-y-3  border-2 lg:pt-[80px]">
                  <div className="flex h-[300px] w-[300px] items-center  justify-center rounded-full border-[10px] border-blue-500 bg-[url('/src/data/bg7.jpeg')] bg-cover bg-center bg-no-repeat text-center transition-all duration-1000 hover:scale-110 hover:border-white">
                    <img
                      src={step2p}
                      alt="pic"
                      className="h-[200px] w-[200px] rounded-full"
                    />
                  </div>
                  <h1 className="text-lg font-bold">
                    Accept Reject Service Request
                  </h1>
                  <p>
                    Accept or Reject request from clients demanding for your
                    services.
                  </p>
                </div>
                <div className="hidden pt-[200px] lg:block">
                  {" "}
                  <img src={arrowup} alt="pic" />
                </div>
                <div className="flex h-[50px] items-center justify-center lg:hidden">
                  <img src={arrowmobile} alt="pic" width="100" />
                </div>
                <div className="flex flex-col items-center space-y-3">
                  <div className="flex h-[300px] w-[300px] items-center  justify-center rounded-full border-[10px] border-blue-500 bg-[url('/src/data/bg7.jpeg')] bg-cover bg-center bg-no-repeat text-center transition-all duration-1000 hover:scale-110 hover:border-white">
                    <img
                      src={step3p}
                      alt="pic"
                      className="h-[200px] w-[200px] rounded-full"
                    />
                  </div>
                  <h1 className="text-lg font-bold">Render the Home Service</h1>
                  <p>
                    Track and locate the Clients Home and render the service as
                    expected in due date and time.
                  </p>
                </div>
                <div className="hidden pt-[150px] lg:block">
                  {" "}
                  <img src={arrowdown} alt="pic" />
                </div>
                <div className="flex h-[50px] items-center justify-center lg:hidden">
                  <img src={arrowmobile} alt="pic" width="100" />
                </div>
                <div className="flex flex-col items-center space-y-3 lg:pt-[80px]">
                  <div className="flex h-[300px] w-[300px] items-center  justify-center rounded-full border-[10px] border-blue-500 bg-[url('/src/data/bg7.jpeg')] bg-cover bg-center bg-no-repeat text-center transition-all duration-1000 hover:scale-110 hover:border-white">
                    <img
                      src={step4p}
                      alt="pic"
                      className="h-[200px] w-[200px] rounded-full"
                    />
                  </div>
                  <h1 className="text-lg font-bold">Request Withdrawal</h1>
                  <p>
                    Request for withdrawal of money paid by the clients after
                    confirmed and satifactory service delivery.
                  </p>
                </div>
              </div>
            </div>
          </p>
        )}
      </div>
    </div>
  );
}
