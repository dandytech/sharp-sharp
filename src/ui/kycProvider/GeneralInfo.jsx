import { useState } from "react";

export default function GeneralInfo({ handleTabClick }) {
  const div =
    "mb-10 flex h-[50px] items-center rounded-xl border-2 border-blue-500 bg-gray-800 text-center text-white focus:border-white lg:mb-0 lg:w-[50%] items-center justify-center";

 

  const input =
    " h-[45px] w-[100%] bg-gray-800 px-5 font-semibold text-white focus:border-2 focus:border-white rounded-xl items-center justify-center";

  const [name, setName] = useState("");
  const [cac, setCac] = useState("");
  const [taxid, settaxid] = useState("");
  const [address, setAddress] = useState("");
  const [utility, setUtility] = useState("");
  const [phone, setPhone] = useState("");
  const [nin, setNin] = useState("");
  const [servicecat, setServicecat] = useState("ICT");
  const [expyr, setExpyr] = useState("");
  const [service, setService] = useState("");

  const handleNext = (e) => {
    e.preventDefault();

    if (
      name === "" ||
      address === "" ||
      utility === "" ||
      phone === "" ||
      nin === "" ||
      servicecat === "" ||
      expyr === "" ||
      service === ""
    ) {
      alert("Fill the required * fields");
    } else {
      handleTabClick(2);
    }
  };

  return (
    <div>
      <div className="mt-10 gap-10 lg:flex ">
        <div className={div}>
          <input
            type="text"
            id="name"
            name="name"
            required
            className={`${input} `}
            placeholder="Organization/Business Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />{" "}
          <span className="mt-[-20px] text-[30px] text-red-600">*</span>
        </div>
        <div className={div}>
          <input
            className={input}
            id="cac"
            name="caca"
            label="caca"
            placeholder="Business Registration (CAC) No"
            value={cac}
            onChange={(e) => setCac(e.target.value)}
          />
        </div>
      </div>
      <div className="mt-10 gap-10 lg:flex">
        <div className={div}>
          <input
            className={input}
            id="taxid"
            name="taxid"
            label="taxid"
            placeholder="Tax ID"
            value={taxid}
            onChange={(e) => settaxid(e.target.value)}
          />
        </div>

        <div className={div}>
          <input
            type="text"
            id="address"
            name="address"
            className={input}
            placeholder="Your Residential Address"
            required
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
          <span className="mt-[-20px] text-[30px] text-red-600">*</span>
        </div>
      </div>

      <div className="mt-10 gap-10 lg:flex">
        <div className={div}>
          <span className="w-[150px] p-3 lg:w-[250px]">Utility Bill:</span>
          <input
            type="file"
            id="utility"
            name="utility"
            className={input}
            value={utility}
            onChange={(e) => setUtility(e.target.value)}
          />
          <span className="mt-[-20px] text-[30px] text-red-600">*</span>
        </div>

        <div className={div}>
          <input
            className={input}
            type="text"
            id="phone"
            name="phone"
            placeholder="Business Phone Number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
          <span className="mt-[-20px] text-[30px] text-red-600">*</span>
        </div>
      </div>

      <div className="mt-10 gap-10 lg:flex">
        <div className={div}>
          <input
            type="nin"
            id="nin"
            name="nin"
            className={input}
            placeholder="NIN"
            required
            value={nin}
            onChange={(e) => setNin(e.target.value)}
          />
          <span className="mt-[-20px] text-[30px] text-red-600">*</span>
        </div>

        <div className={div}>
          <span className="w-[150px] p-3 lg:w-[250px]">Service Category:</span>
          <input
            type="text"
            disabled
            id="servicecat"
            name="servicecat"
            className={input}
            placeholder="Service Rendering"
            required
            value={servicecat}
            onChange={(e) => setServicecat(e.target.value)}
          />
        </div>
      </div>

      <div className="mt-10 gap-10 lg:flex">
        <div className={div}>
          <input
            type="number"
            id="expyr"
            name="expyr"
            className={input}
            placeholder="Years of Experience"
            required
            value={expyr}
            onChange={(e) => setExpyr(e.target.value)}
          />
          <span className="mt-[-20px] text-[30px] text-red-600">*</span>
        </div>
        <div className={div}>
          <input
            type="text"
            id="service"
            name="service"
            className={input}
            placeholder="Service Rendering"
            required
            value={service}
            onChange={(e) => setService(e.target.value)}
          />
          <span className="mt-[-20px] text-[30px] text-red-600">*</span>
        </div>
      </div>

      <button
        className="lg:my-20 my-5 rounded-full border-2 bg-blue-500 px-7 py-3 text-white hover:bg-black  "
        onClick={handleNext}
      >
        Save & Continue
      </button>
    </div>
  );
}
