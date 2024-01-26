const completedResquests = [
  {
    id: 1,
    serviceName: "Car Wash",
    provider: "James",
    client: "John Oke",
    date: "30/12/2023",
    time: "2:00 PM",
  },
  {
    id: 2,
    serviceName: "House Cleaning",
    provider: "John",
    client: "Grace",
    date: "31/12/2023",
    time: "4:00 PM",
  },
  {
    id: 3,
    serviceName: "Hair Cut",
    provider: "Mary",
    client: "Uche Oke",
    date: "10/2/2023",
    time: "5:02 PM",
  },
  {
    id: 4,
    serviceName: "Cook",
    provider: "Ola Mary",
    client: "Daniel Uche",
    date: "31/12/2023",
    time: "6:30 PM",
  },
  {
    id: 5,
    serviceName: "AC Reapir",
    provider: "Bola Omeh",
    client: "Henry Yola",
    date: "01/01/2024",
    time: "4:00 PM",
  },
  {
    id: 6,
    serviceName: "House Painting",
    provider: "Kenneth Uwakwe",
    client: "Juiet Ikem",
    date: "02/01/2024",
    time: "2:00 PM",
  },
  {
    id: 7,
    serviceName: "Typing",
    provider: "Juli oleke",
    client: "Hamzat Promise",
    date: "04/01/2024",
    time: "4:00 PM",
  },
  {
    id: 8,
    serviceName: "Car Reapir",
    provider: "Bola Omeh",
    client: "Paul Jack",
    date: "09/01/2024",
    time: "4:00 PM",
  },
];

import Barchart from "./Barchart";
import Chart from "./Chart";
import Table from "./Table";

export default function DashboardProvider() {
  const div =
    "text-bold flex w-[100%] lg:w-[40%] gap-2 flex-col lg:gap-5  md:gap-3 rounded-2xl border-2  lg:p-5 w-[30%] p-3  lg:h-auto md:h-auto text-center md:text-[18px] text-[12px] lg:text-[20px]  shadow-2xl ";

  return (
    <div className="servicebg mt-[100px] w-[100%] overflow-y-auto shadow-lg lg:px-5">
      
      <div className="justify-between lg:flex lg:gap-5">
        <div className="lg:w-[70%]">
          <div className="flex items-center justify-between gap-1 px-1 text-[14px] text-black lg:gap-10 lg:px-0 lg:text-[20px] ">
            <div className={`${div} bg-yellow-500 text-white`}>
              <p>23</p>
              <p> Ongoing Service</p>
            </div>
            <div className={`${div} bg-blue-500 text-black`}>
              <p>56</p>
              <p> Completed Service</p>
            </div>
            <div className={`${div} bg-red-500 text-white`}>
              <p>67</p>
              <p> Cancelled Service</p>
            </div>
          </div>

          <div className="mt-20 flex items-center justify-between p-5 ">
            <div className="text-bold flex gap-5 ">
              <span className="font-bold"> Requests</span>
              <span>
                <select className="rounded-lg p-1 text-black">
                  <option>Today</option>
                  <option>7 Days Ago</option>
                  <option>1 Month Ago</option>
                </select>
              </span>
            </div>

            <span className="cursor-pointer text-blue-500">View All</span>
          </div>

          <span>
            <Table />
          </span>
        </div>

        <div className="bg-white-700 mt-[80px] rounded-2xl text-center shadow-2xl md:text-[18px]  lg:mt-0 lg:w-[30%] lg:text-[18px]">
          <div className="rounded-bl-xl rounded-br-xl">
            <div className="flex h-[20px] items-center justify-center border-b-2 border-white bg-blue-500 py-10 text-center font-bold text-white">
              <p> Completed Service Summary !!!</p>
            </div>

            <div className="h-[820px] overflow-y-auto">
              {completedResquests.map((completedResquest) => (
                <div
                  key={completedResquest.id}
                  className="text-text-style z-0 flex transform justify-center gap-5 rounded-b-2xl border-b-2 border-b-white py-5 shadow-2xl transition-transform duration-300 hover:scale-110 hover:bg-blue-500 hover:text-white"
                >
                  <div className="flex items-center text-right">
                    <p>{completedResquest.time}</p>
                  </div>
                  <div className="border-l-2 border-blue-500 p-5">
                    <p className="mt-5">{completedResquest.provider}</p>
                    <p>{completedResquest.date}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="mt-[50px] h-[400px] px-2 text-center lg:p-5 lg:px-0 lg:text-left">
        <p className="py-10 font-bold">Monthy Completed & Canceled Requests </p>{" "}
        <Chart />
      </div>
      <div className="mb-[70px] mt-[170px] h-[400px] px-2 lg:px-0  ">
        <p className="py-10 font-bold ">Monthy Income </p> <Barchart />
      </div>
    </div>
  );
}
