import step1 from "../../data/step1.png";
import step2 from "../../data/step2.png";
import step3 from "../../data/step3.png";
import step4 from "../../data/step4.png";
import arrowdown from "../../data/arrowdown.png";
import arrowup from "../../data/arrowup.png";
import arrowmobile from "../../data/arrowmobile.png";

export default function HowItWorks() {
  return (
    <div
      className="from-white-100 from-gray-10 mb-5 mt-5 border-2 bg-gray-100 bg-gradient-to-t pt-[150px] text-center "
      data-aos="flip-up"
      data-aos-duration="1000"
      data-aos-easing="ease-in-sine"
    >
      <div className="mb-10">
        <h2 className="text-center text-4xl font-semibold lg:text-5xl">
          {" "}
          HOW IT <span className="text-blue-500">W</span>ORKS
        </h2>{" "}
        <span>
          Four <span className="text-blue-500">Steps</span> to Get Service
          Provider for Your Home Services
        </span>
      </div>

      <div className=" m-auto space-y-10 px-10 lg:flex lg:space-y-0">
        <div className="flex flex-col items-center space-y-3">
          <div className="flex h-[300px] w-[300px] items-center  justify-center rounded-full border-[10px] border-blue-500 bg-[url('/src/data/bg7.jpeg')] bg-cover bg-center bg-no-repeat text-center transition-all duration-1000 hover:scale-110 hover:border-white">
            <img
              src={step1}
              alt="pic"
              className="h-[200px] w-[200px] rounded-full"
            />
          </div>
          <h1 className="text-lg font-bold">Select a Service</h1>
          <p>
            Choose or Search for a Service you want. You can Request a quote to
            enable Providers bid for your service.
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
          <h1 className="text-lg font-bold">Fill the Service Request Form</h1>
          <p>
            Provide the required information neccessary to get the best service
            provider around or closest to your location.
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
            Fell free to make payment for the service as you track, wait &
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
  );
}
