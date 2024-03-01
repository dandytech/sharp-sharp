const serviceCategories = [
  {
    id: 1,
    name: "All",
  },
  {
    id: 2,
    name: "Cleaning & Pest Control",
  },
  {
    id: 3,
    name: "Washing",
  },
  {
    id: 4,
    name: "Renovation & Installation",
  },
  {
    id: 5,
    name: "Repairs & Maintenance",
  },
  {
    id: 6,
    name: "Tailoring & Fashion",
  },
  {
    id: 7,
    name: "Beauty & Makeup",
  },
  {
    id: 8,
    name: "Health & Wellness",
  },
  {
    id: 9,
    name: "Gardening & Holticulture",
  },
];

const services = [
  {
    id: 1,
    category: "Cleaning & Pest Control",
    serviceRender: "House Cleaning",
    quantity: 1,
    price: 15000,
    details:
      "Cleaning of 1 sitting, 1 bed room, 1 kitchen, 5 toilet, coaches, and compound",
    rating: "",
    provider: "Jackson Ben",
    providerEmail: "jackson@gmail.com",
    providerPhone: "+234 7098987873",
    providerStarRating: 3,
  },
  {
    id: 2,
    category: "Washing",
    serviceRender: "Car Wash",
    quantity: 1,
    price: 8600,
    details:
      "We wash in and out of the vehicle. You provide us with detegent if you don't like the one we use.",
    rating: "",
    provider: "Kenneth Mba",
    providerEmail: "kenneth@gmail.com",
    providerPhone: "+234 7098987873",
    providerStarRating: 3,
  },
  {
    id: 3,
    category: "Hair",
    serviceRender: "Hair Cut",
    quantity: 1,
    price: 3000,
    details:
      "Adult or Children hair cut, We cut with good hair treatment materials and cream",
    rating: "",
    provider: "Kenneth Oko",
    providerEmail: "Kenneth@gmail.com",
    providerPhone: "+234 7098987873",
    providerStarRating: 3,
  },
  {
    id: 4,
    category: "Repairs & Maintenance",
    serviceRender: "Phone Repair",
    quantity: 1,
    price: 45000,
    details:
      "You are to buy any replacable damaged part expect if the damage is caused by us while repairing your phone",
    rating: "",
    provider: "Kenneth Ike",
    providerEmail: "Kenneth@gmail.com",
    providerPhone: "+234 7098987873",
    providerStarRating: 3,
  },
  {
    id: 5,
    category: "Tailoring & Fashion",
    serviceRender: "Fashion Design",
    quantity: 1,
    price: 6000,
    details:
      "We sow for both men and women, adault and children. We also amend clothes for fit your taste",
    rating: "",
    provider: "Grace Oko",
    providerEmail: "Kenngraceeth@gmail.com",
    providerPhone: "+234 7098987873",
    providerStarRating: 4,
  },
  {
    id: 6,
    category: "Beauty & Makeup",
    serviceRender: "Wedding Make up",
    quantity: 1,
    price: 50500,
    details:
      "We do all sorts of make-up that you may want ranging from Wedding, Party and other form of make-ups",
    rating: "",
    provider: "Diamond Kwere",
    providerEmail: "diamond@gmail.com",
    providerPhone: "+234 7098987873",
    providerStarRating: 3,
  },
  {
    id: 7,
    category: "Health",
    serviceRender: "Massage",
    quantity: 1,
    price: 8000,
    details:
      "We are specialize on massage, we provide a very reliable massage service as you may want. ",
    rating: "",
    provider: "Kenneth Oko",
    providerEmail: "Kenneth@gmail.com",
    providerPhone: "+234 7098987873",
    providerStarRating: 3,
  },
  {
    id: 8,
    category: "Garden",
    serviceRender: "Flower Dresser",
    quantity: 1,
    price: 53000,
    details: "We cut and dress your flowers of any kind with specialized tools",
    rating: "",
    provider: "Kenneth Oko",
    providerEmail: "Kenneth@gmail.com",
    providerPhone: "+234 7098987873",
    providerStarRating: 3,
  },
  {
    id: 9,
    category: "Cleaning & Pest Control",
    serviceRender: "Electronics Cleaning",
    quantity: 1,
    price: 42000,
    details: "We clean any form of electronics with best tools and materials",
    rating: "",
    provider: "Kenneth Oko",
    providerEmail: "Kenneth@gmail.com",
    providerPhone: "+234 7098987873",
    providerStarRating: 3,
  },
  {
    id: 10,
    category: "Washing",
    serviceRender: "Laundry",
    quantity: 1,
    price: 20000,
    details:
      "Daily wash and dry any form of cloth, material or bedshits. You provide us with detegent if you don't like the one we use.",
    rating: "",
    provider: "Kenneth Oko",
    providerEmail: "Kenneth@gmail.com",
    providerPhone: "+234 7098987873",
    providerStarRating: 3,
  },
  {
    id: 11,
    category: "Hair",
    serviceRender: "Stylist",
    quantity: 1,
    price: 4000,
    details: "We Style with good hair treatment materials and cream",
    provider: "Kenneth Oko",
    providerEmail: "Kenneth@gmail.com",
    providerPhone: "+234 7098987873",
    providerStarRating: 3,
  },
  {
    id: 12,
    category: "Electronics",
    serviceRender: "AC installation",
    quantity: 1,
    price: 50000,
    details:
      "We insatll Air Conditioner of any kind for indiividuals with best practices",
    rprovider: "Kenneth Oko",
    providerEmail: "Kenneth@gmail.com",
    providerPhone: "+234 7098987873",
    providerStarRating: 3,
  },
  {
    id: 13,
    category: "Tailoring",
    serviceRender: "Maintenance",
    quantity: 1,
    price: 50090,
    details:
      "We maintain for both men and women, adault and children. We also amend clothes for fit your taste",
    provider: "Kenneth Oko",
    providerEmail: "Kenneth@gmail.com",
    providerPhone: "+234 7098987873",
    providerStarRating: 3,
  },
  {
    id: 14,
    category: "Makeup",
    serviceRender: "Medicure",
    quantity: 1,
    price: 40900,
    details:
      "We do all sorts of nail-treatment that you may want ranging from finger, Toes and other form of cures",
    provider: "Kenneth Oko",
    providerEmail: "Kenneth@gmail.com",
    providerPhone: "+234 7098987873",
    providerStarRating: 3,
  },
  {
    id: 15,
    category: "Health & Wellness",
    serviceRender: "Consultant(Therapist)",
    quantity: 1,
    price: 5000,
    details:
      "We are specialize on consultation, we provide a very reliable consultation service as you may want. ",
    provider: "Kenneth Oko",
    providerEmail: "Kenneth@gmail.com",
    providerPhone: "+234 7098987873",
    providerStarRating: 3,
  },
  {
    id: 16,
    category: "Gardening & Holticulture",
    serviceRender: "Flower planter",
    quantity: 1,
    price: 6902,
    details:
      "We plant and maintain your flowers of any kind with specialized tools",
    provider: "Kenneth Oko",
    providerEmail: "Kenneth@gmail.com",
    providerPhone: "+234 7098987873",
    providerStarRating: 3,
  },
];

import {
  Button,
  Menu,
  MenuHandler,
  MenuItem,
  MenuList,
  Tooltip,
} from "@material-tailwind/react";
import { useState } from "react";

import { IoFilter, IoSearch } from "react-icons/io5";
import SmallServiceCategories from "../ui/SmallServiceCategories";
import Modal from "../ui/Modal";
import ServiceDetails from "../ui/ServiceDetails";
import useCartStore from "../store/cartStore";
import Cart from "./Cart";

import { HashLink } from "react-router-hash-link";
import MyButton from "../ui/MyButton";

export default function Services() {
  //pagination
  const [data, setServices] = useState(services);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9;
  const totalItems = data.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = Math.min(startIndex + itemsPerPage, totalItems);
  const currentItems = data.slice(startIndex, endIndex);
  const [searchInput, setSearchInput] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  const handleNext = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
  };

  const handlePrev = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  //Filter based on category
  const handleFilter = (value) => {
    console.log(value);

    if (value === "All") {
      setServices(services);
      setActiveCategory(value);
    } else {
      const selected = services.filter((where) => where.category === value);
      setServices(selected);
      setActiveCategory(value);
    }
  };

  // Filter items based on the search input
  const handleSearch = () => {
    const filteredItems = services.filter(
      (item) =>
        item.serviceRender.toLowerCase().includes(searchInput.toLowerCase()) ||
        item.details.toLowerCase().includes(searchInput.toLowerCase()) ||
        item.category.toLowerCase().includes(searchInput.toLowerCase()),
    );

    setServices(filteredItems);
  };

  //cart array count
  const items = useCartStore((state) => state.items);

  //clear cart function
  const clearCart = useCartStore((state) => state.clearCart);

  //format currency
  const formatCurrency = (amount) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "NGN",
    }).format(amount);
  };

  return (
    <Modal>
      <div className="bg-gradient-to-r from-violet-100 to-blue-100  pb-10 pt-[85px] lg:mt-[0px] lg:py-0  lg:pb-10 lg:pt-0">
        {/* banner section */}
        <section className="h-[200px] bg-[url('/src/data/service2.jpeg')] bg-cover bg-center bg-no-repeat lg:h-[300px]">
          <div className="  h-[200px] bg-gradient-to-t from-white p-3 lg:h-[300px] lg:p-10">
            <div className="m-auto px-3 py-10 text-2xl font-extrabold lg:w-[100%] lg:py-20">
              <p className="mb-4">SERVICES</p>
              <p className="text-xl font-bold">
                Our Service Providers Are Available 24/7 For Your Services
              </p>
            </div>
          </div>
        </section>

        {/* Search section */}
        <section className="m-auto items-center justify-between px-5 py-10 text-lg md:flex  md:w-[100%] lg:flex lg:w-[100%]  lg:px-7 lg:py-20 ">
          <div className="">
            <p className="mb-4 font-semibold">Search For A Service</p>

            <div className="flex justify-between border-2 border-gray-400 bg-white">
              <span>
                <input
                  className="w-full px-3 py-1"
                  type="text"
                  placeholder="Search..."
                  value={searchInput}
                  onChange={(e) => setSearchInput(e.target.value)}
                />
              </span>

              <span
                className=" cursor-pointer bg-black p-2 text-white "
                onClick={handleSearch}
              >
                <IoSearch />
              </span>
            </div>
          </div>

          <div className="mt-5 lg:hidden">
            {" "}
            <span>
              <SmallServiceCategories
                serviceCategories={serviceCategories}
                handleFilter={handleFilter}
              />
            </span>
          </div>
          <div className="mb-5 hidden text-center lg:block">
            {" "}
            <Tooltip content="Let Service Providers bid for your service">
              <HashLink smooth to="/home#quoteform">
                <MyButton type="primary"> Request A Quote</MyButton>
              </HashLink>
            </Tooltip>
          </div>
          <div>
            <Menu>
              <MenuHandler>
                <Button className="flex items-center gap-3 border-2 text-black shadow-none ">
                  <span>Fiter</span>
                  <span className="cursor-pointer">
                    <IoFilter />
                  </span>
                </Button>
              </MenuHandler>

              <MenuList className="flex flex-col gap-3 bg-gray-100 text-left ">
                <MenuItem>Highly Requested</MenuItem>
                <MenuItem>Best Rated</MenuItem>
                <MenuItem>Lowest Price</MenuItem>
                <MenuItem>Highest Price</MenuItem>
              </MenuList>
            </Menu>
          </div>
        </section>

        {/* services section */}
        <div className="mb-5 text-center lg:hidden">
          {" "}
          <Tooltip content="Let Service Providers bid for your service">
            <HashLink smooth to="/home#quoteform">
              <MyButton type="primary"> Request A Quote</MyButton>
            </HashLink>
          </Tooltip>
        </div>

        <Cart clearCart={clearCart} items={items} />

        <section className="m-auto gap-10 lg:flex lg:w-[100%] lg:px-5">
          <div className="hidden border-2 border-r-0 border-t-0 border-gray-300 p-5 lg:block lg:w-[15%]">
            <p>
              <span className="border-b-2 border-b-black text-xl font-bold ">
                Categ
              </span>
              <span className="text-xl font-bold">ories</span>
            </p>

            <div>
              {serviceCategories.map((category) => (
                <p
                  key={category.id}
                  className={`cursor-pointer border-2 border-r-0 p-2 hover:bg-blue-500 ${
                    activeCategory === category.name
                      ? "bg-blue-500"
                      : "bg-white"
                  }`}
                  onClick={() => handleFilter(category.name)}
                >
                  {category.name}
                </p>
              ))}
            </div>
          </div>

          <div className="border-2  border-l-0 border-t-0 border-gray-300 lg:p-5">
            <div className="grid w-[100%] gap-5 p-5 md:grid-cols-3 lg:grid-cols-3 lg:p-0">
              {currentItems.length < 1 ? (
                "S😞RRY!!! NO SERVICE AVAILABLE NOW"
              ) : (
                <>
                  {currentItems.map((service) => (
                    <ServiceDetails
                      key={service.id}
                      service={service}
                      formatCurrency={formatCurrency}
                    />
                  ))}
                </>
              )}
            </div>

            {currentItems.length > 0 && (
              <div className="flex items-center justify-between  px-5 py-7">
                <button
                  onClick={handlePrev}
                  disabled={currentPage === 1}
                  className="rounded-full border-2 bg-gray-800 px-5 py-2 text-white hover:bg-blue-500"
                >
                  Previous
                </button>
                <span>{`Page ${currentPage} of ${totalPages}`}</span>
                <button
                  onClick={handleNext}
                  disabled={currentPage === totalPages}
                  className="rounded-full border-2 bg-gray-800 px-5 py-2 text-white hover:bg-blue-500"
                >
                  Next
                </button>
              </div>
            )}
          </div>
        </section>
      </div>
    </Modal>
  );
}
