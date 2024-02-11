import { GiTakeMyMoney } from "react-icons/gi";
import { VscGitPullRequestNewChanges } from "react-icons/vsc";
import { AiOutlineDeliveredProcedure } from "react-icons/ai";

export default function ClientDashboard() {
  return (
    <div className="boder-2 inset-0 h-[100vh] overflow-y-auto pr-3 pt-[100px] shadow-md lg:w-[85%]">
      <section>
        <div className="justify-between lg:flex">
          <div className="lg:w-[70%]">
            <div className="items-center justify-between gap-3 px-5 lg:flex">
              <div className="flex justify-center space-y-3 rounded-lg border-2 bg-blue-200 p-5 text-center  shadow-md hover:bg-blue-500 hover:text-white">
                <div className="flex justify-start gap-1">
                  <div className="border-2-gray-500 flex h-[90px] w-[90px] items-center rounded-full border-2 bg-blue-500 p-2 text-[100px] text-white">
                    <AiOutlineDeliveredProcedure />
                  </div>
                  <div className="space-y-4">
                    <p className="rounded-md rounded-b-none border-4 border-b-0 px-2 font-semibold">
                      Total Requests
                    </p>
                    <span className="font-light">From 10th Jan. 2024</span>
                    <p className="rounded-md rounded-t-none border-2 border-t-0">
                      42
                    </p>
                  </div>
                </div>
              </div>{" "}
              <div className="flex justify-center space-y-3 rounded-lg border-2 bg-gray-100  p-5 text-center  shadow-md hover:bg-blue-500 hover:text-white">
                <div className="flex justify-start gap-1">
                  <div className="border-2-gray-500 flex h-[90px] w-[90px] items-center rounded-full border-2 bg-blue-500 p-2 text-[100px] text-white">
                    <GiTakeMyMoney />
                  </div>
                  <div className="space-y-4">
                    <p className="rounded-md rounded-b-none border-4 border-b-0 px-2 font-semibold">
                      Amount Paid
                    </p>
                    <span className="font-light">From 10th Jan. 2024</span>
                    <p className="rounded-md rounded-t-none border-2 border-t-0">
                      N501,000.00k
                    </p>
                  </div>
                </div>
              </div>{" "}
              <div className="flex justify-center space-y-3 rounded-lg border-2 bg-green-100  p-5 text-center  shadow-md hover:bg-blue-500 hover:text-white">
                <div className="flex justify-start gap-1">
                  <div className="border-2-gray-500 flex h-[90px] w-[90px] items-center rounded-full border-2 bg-blue-500 p-2 text-[100px] text-white">
                    <VscGitPullRequestNewChanges />
                  </div>
                  <div className="space-y-4">
                    <p className="rounded-md rounded-b-none border-4 border-b-0 px-2 font-semibold">
                      Completed Services
                    </p>
                    <span className="font-light">From 10th Jan. 2024</span>
                    <p className="rounded-md rounded-t-none border-2 border-t-0">
                      39
                    </p>
                  </div>
                </div>
              </div>{" "}
            </div>

            <div className="px-5 border-t-2 mt-5 py-20">TABLE HERE</div>
          </div>

          <div className="border-l-2 lg:w-[30%]">
            <p className="w-full bg-black py-3 text-center font-semibold text-white">
              ANNOUNCEMENTS
            </p>
            <p>Contectes here</p>

          </div>
        </div>
      </section>
    </div>
  );
}