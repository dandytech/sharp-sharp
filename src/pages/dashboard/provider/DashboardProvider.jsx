import Barchart from "./Barchart";
import Chart from "./Chart";
import Table from "./Table";

export default function DashboardProvider() {
  const div =
    "text-bold flex w-[100%] lg:w-[40%] gap-2 flex-col lg:gap-5  md:gap-3 rounded-2xl border-2  lg:p-5 w-[30%] p-3  lg:h-auto md:h-auto text-center md:text-[18px] text-[12px] lg:text-[20px]  shadow-2xl ";
  return (
    <div className="right-0 mt-[80px] h-auto w-[100%]  p-10 shadow-lg lg:ml-[170px]">
      <div className="justify-between lg:flex lg:gap-5">
        <div className="lg:w-[70%]">
          <div className="flex items-center justify-between gap-1 text-[14px] text-black lg:gap-10 lg:text-[20px]">
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

          <div className="mt-20 flex  items-center justify-between p-5">
            <div className="text-bold flex gap-5">
              <span className="font-bold"> Requests</span>
              <span>
                <select className="rounded-lg p-1 text-black">
                  <option>Today</option>
                  <option>7 Days Ago</option>
                  <option>1 Month Ago</option>
                </select>
              </span>
            </div>

            <div className="cursor-pointer text-blue-500">View All</div>
          </div>
          <div>
            <Table />
          </div>

          <div className="mt-20 h-[400px] text-center lg:p-5 lg:text-left">
            <p className="py-10 font-bold">
              Monthy Completed & Canceled Requests{" "}
            </p>{" "}
            <Chart />
          </div>
        </div>

        <div className="bg-white-700 mt-[130px] rounded-2xl text-center shadow-2xl md:text-[18px]  lg:mt-0 lg:w-[30%] lg:text-[18px]">
          <div className="rounded-bl-xl rounded-br-xl">
            <div className="flex h-[20px] items-center justify-center border-b-2 border-white bg-blue-500 py-10 text-center font-bold text-white ">
              <p> Completed Service Summary !!!</p>
            </div>

            <div className="h-[620px] overflow-y-auto">
              <div className="bgsummary flex justify-center gap-5 rounded-b-2xl border-b-2 border-b-black py-5 text-black shadow-2xl">
                <div className="flex items-center text-right">
                  <p>2:00 PM</p>
                </div>
                <div className="border-l-2 border-blue-500 p-5">
                  <p>Success Dan</p>
                  <p>30/11/2023</p>
                </div>
              </div>

              <div className="bgsummary flex justify-center gap-5 rounded-b-2xl border-b-2 border-b-black py-5 text-black shadow-2xl">
                <div className="flex items-center text-right">
                  <p>4:00 PM</p>
                </div>

                <div className="border-l-2  border-blue-500 p-5">
                  <p>Grace Uba</p>
                  <p>30/11/2023</p>
                </div>
              </div>
              <div className="bgsummary flex justify-center gap-5 rounded-b-2xl border-b-2 border-b-black py-5 text-black shadow-2xl">
                <div className="flex items-center text-right">
                  <p>12:00 PM</p>
                </div>
                <div className="border-l-2 border-blue-500 p-5">
                  <p>Hamzat Adeleke</p>
                  <p>30/11/2023</p>
                </div>
              </div>
              <div className="bgsummary flex justify-center gap-5 rounded-b-2xl border-b-2 border-b-black py-5 text-black shadow-2xl">
                <div className="flex items-center text-right">
                  <p>12:00 PM</p>
                </div>
                <div className="border-l-2 border-blue-500 p-5">
                  <p>james Amaechi</p>
                  <p>30/11/2023</p>
                </div>
              </div>
              <div className="bgsummary flex justify-center gap-5 rounded-b-2xl border-b-2 border-b-black py-5 text-black shadow-2xl">
                <div className="flex items-center text-right">
                  <p>12:00 PM</p>
                </div>
                <div className="border-l-2 border-blue-500 p-5">
                  <p>james Hamzat</p>
                  <p>30/11/2023</p>
                </div>
              </div>

              <div className="bgsummary flex justify-center gap-5 rounded-b-2xl border-b-2 border-b-black py-5 text-black shadow-2xl">
                <div className="flex items-center text-right">
                  <p>4:00 PM</p>
                </div>
                <div className="border-l-2 border-blue-500 p-5">
                  <p>Obi Nweke</p>
                  <p>31/11/2023</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mb-[70px] mt-[50px] h-[400px] ">
            <p className="py-10 font-bold ">Monthy Income </p> <Barchart />
          </div>
        </div>
      </div>
    </div>
  );
}
