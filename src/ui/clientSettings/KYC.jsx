import { useState } from "react";

export default function KYC() {
  const [utility, setUtility] = useState("");
  const [nin, setNin] = useState("");
  const [nextOfKinPhone, setNextOfKinPhone] = useState("");
  const [nextOfKin, setNextOfKin] = useState("");
  const [nextOfKinAddress, setNextOfKinAddress] = useState("");
  const [nextOfKinID, setNextOfKinID] = useState("");

  const handleSubmitForm = (e) => {
    e.preventDefault();
    if (
      !utility ||
      !nin ||
      !nextOfKinPhone ||
      !nextOfKin ||
      !nextOfKinAddress ||
      !nextOfKinID
    )
      return;
  };

  return (
    <form onSubmit={handleSubmitForm}>
      <div className="z-0 mt-5 rounded-xl border-2 p-5 py-5 text-center lg:py-10">
        <p className="mb-3 flex px-2 font-bold">KYC</p>

        <div className="border-2 border-gray-300 p-2 text-left lg:p-10">
          <div>
            <p className="font-light">Utility bill </p>
            <input
              type="file"
              value={utility}
              className="w-[100%]  rounded-lg border-2 px-3  py-1 hover:border-blue-500"
              placeholder="Enter Old Password"
              onChange={(e) => setUtility(e.target.value)}
            />
          </div>

          <div className="mt-2">
            <p className="font-light">Your NIN </p>
            <input
              type="text"
              value={nin}
              className="w-[100%]  rounded-lg border-2 border-gray-300  px-3 py-1 hover:border-blue-500"
              placeholder="Enter New Password"
              onChange={(e) => setNin(e.target.value)}
            />
          </div>
          <div className="mt-2 ">
            <p className="font-light">Next Of Kin</p>
            <input
              type="text"
              value={nextOfKin}
              className="w-[100%]  rounded-lg border-2 border-gray-300  px-3 py-1 hover:border-blue-500"
              placeholder="Fullname"
              onChange={(e) => setNextOfKin(e.target.value)}
            />
          </div>
          <div className="mt-2 ">
            <p className="font-light">Next Of Kin Phone</p>
            <input
              type="text"
              value={nextOfKinPhone}
              className="w-[100%]  rounded-lg border-2 border-gray-300  px-3 py-1 hover:border-blue-500"
              placeholder="Next Of Kin Phone"
              onChange={(e) => setNextOfKinPhone(e.target.value)}
            />
          </div>
          
          <div className="mt-2 ">
            <p className="font-light">Next Of Kin Address</p>
            <input
              type="text"
              value={nextOfKinAddress}
              className="w-[100%]  rounded-lg border-2 border-gray-300  px-3 py-1 hover:border-blue-500"
              placeholder="Next Of Kin Address"
              onChange={(e) => setNextOfKinAddress(e.target.value)}
            />
          </div>
          <div className="mt-2 ">
            <p className="font-light">Next Of Kin ID</p>
            <input
              type="file"
              value={nextOfKinID}
              className="w-[100%]  rounded-lg border-2 border-gray-300  px-3 py-1 hover:border-blue-500"
              placeholder="Next Of Kin Email"
              onChange={(e) => setNextOfKinID(e.target.value)}
            />
          </div>
        </div>

        <button className="mt-10 cursor-pointer rounded-xl border-2 bg-blue-500 px-3 text-white hover:bg-black">
          Submit
        </button>
      </div>
    </form>
  );
}
