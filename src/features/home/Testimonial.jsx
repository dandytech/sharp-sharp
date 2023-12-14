import Marquee from "react-fast-marquee";
import PlayerComponent from "./PlayerComponent";
import Testimonies from "./Testimonies";

export const testimonies = [
  {
    id: 1,
    name: "Laudry",
    photo: "https://i.pravatar.cc/48?u=4994374",
    testimony: "Good Agent with good and honest providers",
  },
  {
    id: 2,
    name: "Tailoring",
    photo: "https://i.pravatar.cc/48?u=4932546",
    testimony: "Nice experience",
  },
  {
    id: 3,
    name: "Barbing",
    photo: "https://i.pravatar.cc/48?u=4992454",
    testimony:
      "I realy love the service receieved by one of the cleaner I hired, she was so hubmle, hardworking and fast. very impressive and good experience. I have also hired so many others and never regreted any.",
  },

  {
    id: 4,
    name: "Make-up",
    photo: "https://i.pravatar.cc/48?u=4223574",
    testimony: "Nice experience",
  },
  {
    id: 5,
    name: "Mechanic",
    photo: "https://i.pravatar.cc/48?u=4993454",
    testimony: "Nice experience",
  },
  {
    id: 6,
    name: "Electricia",
    photo: "https://i.pravatar.cc/48?u=49994454",
    testimony: "Nice experience",
  },

  {
    id: 7,
    name: "Shoe-Maker",
    photo: "https://i.pravatar.cc/48?u=49940974",
    testimony:
      "For the many times I have hired service providers from the Agency I enjoyed their services especially in terms of cost and fast delivery and more interestingly, their honesty.",
  },
  {
    id: 8,
    name: "Cook",
    photo: "https://i.pravatar.cc/48?u=499440054",
    testimony: "Nice experience",
  },
  {
    id: 9,
    name: "Cleaner",
    photo: "https://i.pravatar.cc/48?u=49944523",
    testimony: "Nice experience",
  },

  {
    id: 10,
    name: "Nanny",
    photo: "https://i.pravatar.cc/48?u=49944214",
    testimony: "Nice experience",
  },
  {
    id: 11,
    name: "Barbing",
    photo: "https://i.pravatar.cc/48?u=4994733",
    testimony: "Nice experience",
  },
  {
    id: 12,
    name: "Barbing",
    photo: "https://i.pravatar.cc/48?u=49934474",
    testimony: "Nice experience",
  },

  {
    id: 13,
    name: "Barbing",
    photo: "https://i.pravatar.cc/48?u=499443474",
    testimony: "Nice experience",
  },
  {
    id: 14,
    name: "Barbing",
    photo: "https://i.pravatar.cc/48?u=49942374",
    testimony: "Nice experience",
  },
  {
    id: 15,
    name: "Barbing",
    photo: "https://i.pravatar.cc/48?u=499324",
    testimony: "Nice experience",
  },

  {
    id: 16,
    name: "Barbing",
    photo: "https://i.pravatar.cc/48?u=49923474",
    testimony: "Nice experience",
  },
  {
    id: 17,
    name: "Barbing",
    photo: "https://i.pravatar.cc/48?u=49934474",
    testimony: "Nice experience",
  },
  {
    id: 18,
    name: "Barbing",
    photo: "https://i.pravatar.cc/48?u=49934454",
    testimony: "Nice experience",
  },

  {
    id: 19,
    name: "Barbing",
    photo: "https://i.pravatar.cc/48?u=49944574",
    testimony: "Nice experience",
  },
  {
    id: 20,
    name: "Barbing",
    photo: "https://i.pravatar.cc/48?u=49943274",
    testimony: "Nice experience",
  },
];

export default function Testimonial() {
  return (
    <div className="bg-gradient-to-l from-white  lg:pt-[160px] pt-[100px] text-center ">
      <h2 className=" p-5 text-center text-6xl font-bold lg:text-7xl">
        WHAT OUR <span className="text-blue-500">CLIENTS</span> SAY
      </h2>
      <p className="lag:mb-10 mt-5  px-10">
        Listen and Read comments and testimonies from our Potential Clients!
      </p>

      <div className="gap-5 p-10 sm:shadow-md lg:flex">
        <div className="bg-white-500   flex items-center justify-center  gap-5  rounded-3xl border-2 p-2 shadow-md lg:mt-0  ">
          <PlayerComponent />
        </div>

        <div className="z-0 mt-20 flex w-full items-center justify-center overflow-x-auto  border-2 lg:mt-0">
          <Marquee>
            <ul className="flex gap-3 p-5 ">
              {testimonies.map((testimony) => (
                <Testimonies testimony={testimony} key={testimony.id} />
              ))}
            </ul>
          </Marquee>
        </div>
      </div>
    </div>
  );
}
