import { NavLink } from "react-router-dom";
import Providers from "./Providers";
import Modal from "../../ui/Modal";
import Slider from "react-slick";

const providers = [
  {
    id: 1,
    name: "Johnson Joe",
    rate: 10,
    service: "Mechanic",
    phone: "+234 7065123746",
    email: "joe@gmail.com",
    address: "2 metalbox road Ikeja Lagos Nigeria",
    photo: "https://i.pravatar.cc/48?u=49941004",
    description:
      "I have best experience in Motor mechanic of all kinds, available 24/7. Conduct regular maintenance on machinery, systems, and automotive vehicle Meet with clients to better understand their concerns and identify the issue. Assemble mechanical components according to specifications. Examine machines and oversee diagnostic tests to determine functionality problems. Design a plan of action for all maintenance tasks and upgrades. Maintain work logs, repairs, and maintenance records. Monitor inventory and order new parts when necessary. Offer consultation on maintenance and preventative procedures to machine and vehicle users. Perform vehicle assessments and clients on issues that will prohibit their vehicles from passing inspection.",
  },
  {
    id: 2,
    name: "Mary Ali",
    rate: 20,
    service: "Cook",
    phone: "+234 7065123746",
    email: "ali@gmail.com",
    address: "2 metalbox road Ikeja Lagos Nigeria",
    photo: "https://i.pravatar.cc/48?u=4994344",
    description:
      "Set up workstations with all needed ingredients and cooking equipment Prepare ingredients to use in cooking (chopping and peeling vegetables, cutting meat etc.) Cook food in various utensils or grillers Check food while cooking to stir or turn Ensure great presentation by dressing dishes before they are served Keep a sanitized and orderly environment in the kitchen Ensure all food and other items are stored properly Check quality of ingredients Monitor stock and place orders when there are shortages",
  },
  {
    id: 3,
    name: "Jackson Greek",
    rate: 90,
    service: "Shoe-maker",
    phone: "+234 7065123746",
    email: "greek@gmail.com",
    address: "2 metalbox road Ikeja Lagos Nigeria",
    photo: "https://i.pravatar.cc/48?u=492374",
    description:
      "Designing shoes: Shoemakers may work with designers and manufacturers to create new shoe designs or modify existing designs to meet specific needs or preferences. They may create sketches, models, or prototypes to refine their designs. Selecting materials: Shoemakers must select the right materials for each shoe they create, taking into account factors such as durability, comfort, and style. They may work with a variety of materials, including leather, synthetic materials, rubber, and suede. Measuring and fitting shoes: Shoemakers must take precise measurements of customers' feet to ensure that their shoes fit comfortably and correctly. They may use tools such as measuring tapes, foot gauges, and foot scanners to obtain accurate measurements. Cutting and shaping materials: Shoemakers must cut and shape materials to the correct size and shape to fit the design of the shoe. They may use tools such as cutting knives, scissors, and specialized machinery to cut and shape materials. Assembling shoes: Shoemakers must assemble the various parts of the shoe, including the sole, upper, and lining, using specialized tools and techniques such as stitching, gluing, and nailing. Repairing shoes: Shoemakers may also repair and maintain shoes, replacing worn-out soles or heels, fixing tears or holes, and restoring shoes to their original condition. Managing inventory: Shoemakers may be responsible for managing inventory of materials and supplies, tracking usage and ordering new materials when needed. Customer service: Shoemakers may interact with customers directly, helping them to select and fit shoes, answering questions about materials and design, and providing advice on shoe care and maintenance.",
  },

  {
    id: 4,
    name: "Daniella John",
    rate: 44,
    service: "Web Developer",
    phone: "+234 7065123746",
    email: "john@gmail.com",
    address: "Web services at 2 metalbox road Ikeja Lagos Nigeria",
    photo: "https://i.pravatar.cc/48?u=49956774",
    description:
      "We design websites of all kind using any stack such Wordpress, Vue JS,React JS, PHP, Node JS, Python, Java, e.t.c. Basically Build and optimize a secure web page for evolving business needs. Provide continued support for one or more web properties. Maintain communication with team members and supervisors concerning the direction of the website. Code and script applications.Perform routine site audits, as well as ongoing maintenance, on an as-needed basis.",
  },
  // Add more divs as needed
];

export default function Services() {
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

  // Use reduce to find the user with the highest score
  const highestRate = providers.reduce((prevUser, currentUser) =>
    prevUser.rate > currentUser.rate ? prevUser : currentUser,
  );
  return (
    <Modal>
      <div className="from-white-100 bg-gray-100 bg-gradient-to-r p-5  text-center">
        <h2 className=" text-center  text-4xl font-bold lg:text-5xl ">
          SERVICES
        </h2>
        <p className="mb-5 mt-5">
          Request for a{" "}
          <span className="font-bold text-blue-500">Service Provider</span>
        </p>

        <div className="gap-10 lg:flex ">
          <div className="text-black-300 bg-wite-500 rounded-3xl p-2 text-center h-auto   lg:w-[70%]   ">
            <div className=" rounded-[40px] border-[10px] bg-gray-100 shadow-lg">
              <Slider {...settings}>
                {providers.map((provider) => (
                  <>
                    <Providers provider={provider} key={provider.id} />
                  </>
                ))}
              </Slider>
              <p className="py-10">
                {" "}
                <button className="rounded-full bg-blue-500 px-10 py-5 font-light text-white hover:bg-gray-900 hover:text-blue-500">
                  {" "}
                  <NavLink to="/signup">Request Service</NavLink>
                </button>
              </p>

              {/* <SwiperComponent /> */}
            </div>
          </div>

          <div className="text-black-300  bg-wite-500  mt-5 items-center  rounded-[40px] border-[10px] bg-gray-100  p-2 pb-10 text-center h-auto    lg:w-[30%] ">
            <p className="py-10 font-bold">Best Rated Service Providers</p>

            {highestRate && (
              <>
                <div className="m-auto  flex h-[150px] w-[150px] items-center justify-center rounded-full bg-white">
                  <img
                    className="h-[150px] w-[150px] rounded-full"
                    src={highestRate.photo}
                    alt="highest Rated"
                    width="100"
                    height="100"
                  />
                </div>
                <h2 className="font-bold">{highestRate.name}</h2>
                <p className=" mb-5 font-light">{highestRate.service}</p>
                <span>
                  {highestRate.phone} | {highestRate.email}
                </span>
                <p>{highestRate.address}</p>
              </>
            )}
          </div>
        </div>
      </div>
    </Modal>
  );
}
