import CountUp from "react-countup";
import ReactPlayer from "react-player";
// import CountUp from "react-countup/build/CountUp";

export default function WhoWeAre() {
  return (
    <div id="about" className="overflow-x-hidden bg-gradient-to-t  from-white">
      <div className="mt-[80px] py-10 text-center text-4xl font-bold lg:text-5xl">
        <span className=" border-b-2 border-b-blue-500 ">W</span>
        ho We Are?
      </div>

      <div className="who m-auto block  gap-10 p-5 lg:flex lg:w-[70%]  ">
        <div
          data-aos="flip-right"
          data-aos-duration="1000"
          data-aos-easing="ease-in-sine"
        >
          <h1 className="border-l-2 border-blue-500 px-5 text-left text-[22px] font-extrabold  lg:text-[34px]">
            We Are Service Provider Agent, Ensuring That Clients Hire The Best,
            Affordable & Availble Service Providers!!!
          </h1>
          <p className="px-5 text-justify">
            We Are Responsible and dedicated In Helping Individuals or Corporate
            Bodies To Get Best Out Of Their Income By Hiring The Best,
            Affordable and Available Service Provider Nearest & Fast for Their
            Home Services. We Are Licensed And Registered Legally To Operate,
            Ensuring Good And Harmonized Client-Provider Relationship.
          </p>
        </div>

        <div
          className="mt-20  flex items-center justify-center lg:mt-0"
          data-aos="flip-left"
          data-aos-duration="1000"
          data-aos-easing="ease-in-sine"
        >
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
          <p className="text-[34px] font-bold text-blue-500  md:text-[44px] lg:text-[44px]">
            <CountUp end={3000} duration={5} enableScrollSpy />+
          </p>
          <p>Clients</p>
        </div>
        <div className="text-center">
          <p className="text-[34px] font-bold text-blue-500  md:text-[44px] lg:text-[44px]">
            <CountUp end={230} duration={5} enableScrollSpy />+
          </p>
          <p>Service Providers</p>
        </div>
        <div className="text-center">
          <p className="text-[34px] font-bold text-blue-500  md:text-[44px] lg:text-[44px]">
            <CountUp end={10} duration={5} enableScrollSpy />+
          </p>
          <p>Partners</p>
        </div>
      </div>
    </div>
  );
}
