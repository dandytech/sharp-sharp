import { IoLocationOutline, IoTimeOutline } from "react-icons/io5";
import { MdOutlineEmail } from "react-icons/md";
import { FiPhoneCall } from "react-icons/fi";
import Map from "../ui/Map";

export default function Contact() {
  return (
    <div className="bg-gradient-to-r from-violet-100 to-blue-100  pt-[85px] lg:mt-[0px] lg:py-0 lg:pt-0 ">
      <div className="h-[300px] bg-[url('/src/data/bgcontact.png')] bg-cover bg-center bg-no-repeat pt-10">
        {/* banner section */}
        <div className="m-auto h-auto p-3 lg:w-[70%] lg:p-10">
          <div className="flex items-center gap-1 rounded-xl border-2 border-gray-400 px-2 py-3  text-white lg:w-[50%] lg:px-5">
            <span>
              <IoTimeOutline />
            </span>{" "}
            <span>Available 24/7 for your services and complains</span>
          </div>
          <div className="flex p-5 text-xl text-white">Contact Us</div>
        </div>
      </div>

      {/* Email, Phone, Address Section */}
      <div className="m-auto mt-[80px] items-center justify-between p-3 lg:mt-20 lg:flex lg:w-[70%] lg:p-10">
        <div className=" flex h-[150px] flex-col items-center justify-center   p-3 text-center shadow-2xl lg:w-[30%]">
          <div className="absolute  mt-[-180px] text-[50px] text-blue-500">
            <MdOutlineEmail />
          </div>

          <span className="text-2xl">Email Us</span>

          <div className="mt-5">
            <p>sharpapp@gmail.com</p>
            <span>support@sharpapp.com</span>
          </div>
        </div>

        <div className=" mt-[80px] flex h-[150px] flex-col items-center   justify-center p-3 text-center shadow-2xl lg:mt-0 lg:w-[30%]">
          <div className="absolute mt-[-180px] text-[50px] text-blue-500">
            <FiPhoneCall />
          </div>

          <span className="text-2xl">Call Us</span>

          <div className="mt-5">
            <p>+234 7065123746</p>
            <span>+1(40)1234563245</span>
          </div>
        </div>

        <div className=" mt-[80px] flex h-[150px] flex-col items-center   justify-center p-3 text-center shadow-2xl lg:mt-0 lg:w-[30%]">
          <div className="absolute mt-[-180px] text-[50px] text-blue-500 ">
            <IoLocationOutline />
          </div>
          <span className="text-2xl">Visit Us</span>
          <div className="mt-5">
            <p></p>
            <span>
              2 Metalbox Road, by Union Bank, Ogba, Ikeja Lagos Nigeria
            </span>
          </div>
        </div>
      </div>

      {/* map and form section */}
      <section className=" mt-10  bg-gradient-to-t pb-20 shadow-lg lg:mt-0">
        <div className="m-auto mt-[20px] items-center justify-between p-3 lg:flex lg:w-[70%] lg:p-10">
          <div className="h-auto  lg:w-[50%]">
            <div className="flex flex-col-reverse gap-10 lg:flex-col">
              <div>
                <p className="p-5 text-center text-[26px] font-semibold md:text-left md:text-[24px] lg:text-left lg:text-[34px]">
                  Reach Out To Us Directly
                </p>
                <p className="mb-1 px-5 lg:px-3">
                  Fill in the form with the appropriate fields to send us a
                  message directly and we will get back to immediately.
                </p>
              </div>

              <div>
                {" "}
                <Map />
              </div>
            </div>
          </div>

          <div className="h-auto border-2 p-5 lg:w-[50%]">
            <div className="m-auto justify-between gap-2 md:flex lg:flex">
              <div className="md:w-[50%] lg:w-[50%]">
                <label>First Name</label>
                <p>
                  {" "}
                  <input
                    type="text"
                    name="firstname"
                    placeholder="First Name"
                    className="w-[100%] rounded-lg border-2 border-white bg-gray-800 bg-gradient-to-r from-violet-100 to-blue-100 px-3 py-2  hover:border-black hover:bg-gradient-to-tr hover:from-white"
                  />
                </p>
              </div>
              <div className="w-lg:[50%] mt-5 md:mt-0 md:w-[50%] lg:mt-0">
                <label>Last Name</label>
                <p>
                  {" "}
                  <input
                    type="text"
                    name="lastname"
                    placeholder="Last Name"
                    className="w-[100%] rounded-lg border-2 border-white bg-gray-800 bg-gradient-to-r from-violet-100 to-blue-100 px-3 py-2 hover:border-black hover:bg-gradient-to-tr hover:from-white"
                  />
                </p>
              </div>
            </div>

            <div className="m-auto mt-5 justify-between gap-2 md:flex  lg:flex">
              <div className="md:w-[50%] lg:w-[50%]">
                <label>Email</label>
                <p>
                  {" "}
                  <input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    className="w-[100%] rounded-lg border-2 border-white bg-gray-800 bg-gradient-to-r from-violet-100 to-blue-100 px-3 py-2  hover:border-black hover:bg-gradient-to-tr hover:from-white "
                  />
                </p>
              </div>
              <div className="mt-5 md:mt-0 md:w-[50%] lg:mt-0 lg:w-[50%]">
                <label>Phone</label>
                <p>
                  {" "}
                  <input
                    type="text"
                    name="phone"
                    placeholder="Phone Number"
                    className="w-[100%] rounded-lg border-2 border-white bg-gray-800 bg-gradient-to-r from-violet-100 to-blue-100 px-3 py-2  hover:border-black hover:bg-gradient-to-tr hover:from-white"
                  />
                </p>
              </div>
            </div>

            <div className="mt-5">
              <label>Message</label>
              <p>
                {" "}
                <textarea
                  type="email"
                  name="email"
                  placeholder="Type Your Message Here"
                  className="w-[100%] rounded-lg border-2 border-white bg-gradient-to-r from-violet-100 to-blue-100 px-3 py-1  hover:border-black hover:bg-white hover:bg-gradient-to-tr hover:from-white"
                  rows={7}
                />
              </p>
            </div>

            <div className="m-auto mt-10 w-[100%] cursor-pointer rounded-full  border-2 bg-blue-500 px-7 py-2 text-center font-semibold hover:bg-black hover:text-white">
              {" "}
              <button>Send Message</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
