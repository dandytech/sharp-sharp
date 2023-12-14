import CountUp from "react-countup";
import ReactPlayer from "react-player";
// import CountUp from "react-countup/build/CountUp";

export default function WhoWeAre() {
  return (
    <div id="about" className="bg-gradient-to-t from-white">
      <div className="mt-[80px] py-10 text-center text-6xl font-bold lg:text-7xl">
        <span className=" border-b-2 border-b-blue-500 ">W</span>
        ho We Are?
      </div>

      <div>
        <div className="m-auto  gap-10 p-5 md:block lg:flex lg:w-[70%] ">
          <div>
            <h1 className="border-l-2 border-blue-500 px-5 text-left text-[22px] font-extrabold  lg:text-[34px]">
              We Are Service Provider Agent, Ensuring That Clients Hire The
              Best, Affordable & Availble Service Providers!!!
            </h1>
            <p className="px-5 text-justify">
              We Are Responsible and dedicated In Helping Individuals or
              Corporate Bodies To Get Best Out Of Their Income By Hiring The
              Best, Affordable and Availble Service Provider Nearest & Fast for
              Their Home Services. We Are Licensed And Registered Legally To
              Operate, Ensuring Good And Harmonized Client-Provider
              Relationship.
            </p>
          </div>

          <div className="m-5 flex items-center justify-center sm:mt-20 lg:mt-0">
            <ReactPlayer
              className="videoFrame"
              url="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
              light="https://i.pravatar.cc/4783"
              playing
              controls
            />
          </div>
        </div>

        <div className="mt-[80px] flex items-center  justify-between gap-5 px-10 pb-20  sm:px-10 lg:m-auto lg:mt-[60px] lg:w-[70%] lg:px-10">
          <div className="text-center">
            <p className="text-[44px] font-bold text-blue-500">
              <CountUp end={3000} duration={5} enableScrollSpy />+
            </p>
            <p>Clients</p>
          </div>
          <div className="text-center">
            <p className="text-[44px] font-bold text-blue-500">
              <CountUp end={230} duration={5} enableScrollSpy />+
            </p>
            <p>Service Providers</p>
          </div>
          <div className="text-center">
            <p className="text-[44px] font-bold text-blue-500">
              <CountUp end={10} duration={5} enableScrollSpy />+
            </p>
            <p>Partners</p>
          </div>
        </div>
      </div>
    </div>
  );
}
