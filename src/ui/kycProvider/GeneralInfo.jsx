import { useState } from "react";

export default function GeneralInfo({ handleTabClick }) {
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

  const input =
    "w-full bg-white px-3 py-2 font-semibold hover:border-blue-500 rounded-xl border-2 border-gray-300";

  return (
    <div>
      <div className="mt-10 gap-5 space-y-5 lg:flex lg:space-y-0">
        <div className="lg:w-[50%]">
          <label className="flex">Organizational Name</label>
          <p className="flex items-center">
            <span className="w-full">
              <input
                type="text"
                name="name"
                required
                className={input}
                placeholder="Organization/Business Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </span>
            <span className="mt-[-20px] text-[30px] text-red-600">*</span>
          </p>
        </div>

        <div className="lg:w-[50%]">
          <label className="flex">CAC No</label>
          <input
            className={input}
            id="cac"
            name="caca"
            label="caca"
            placeholder="(CAC) Business Registration No"
            value={cac}
            onChange={(e) => setCac(e.target.value)}
          />
        </div>
      </div>

      <div className="mt-5 items-center gap-5 space-y-5  lg:flex lg:space-y-0">
        <div className="lg:w-[50%]">
          <label className="flex">Tax ID</label>
          <p>
            {" "}
            <input
              className={input}
              id="taxid"
              name="taxid"
              label="taxid"
              placeholder="Tax ID"
              value={taxid}
              onChange={(e) => settaxid(e.target.value)}
            />
          </p>
        </div>

        <div className="lg:w-[50%]">
          <label className="flex">Residential Address</label>
          <p className="flex items-center">
            {" "}
            <spam className="w-full">
              {" "}
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
            </spam>
            <span className="mt-[-20px] text-[30px] text-red-600">*</span>
          </p>
        </div>
      </div>

      <div className="mt-5 gap-5 space-y-5 lg:flex lg:space-y-0">
        <div className="lg:w-[50%]">
          <label className="flex">Utility Bill</label>

          <p className="flex items-center">
            {" "}
            <span className="w-full">
              {" "}
              <input
                type="file"
                id="utility"
                name="utility"
                className={input}
                value={utility}
                onChange={(e) => setUtility(e.target.value)}
              />
            </span>
            <span className="mt-[-20px] text-[30px] text-red-600">*</span>
          </p>
        </div>

        <div className="lg:w-[50%]">
          <label className="flex">Business Line</label>
          <p className="flex items-center">
            {" "}
            <span className="w-full">
              {" "}
              <input
                className={input}
                type="text"
                id="phone"
                name="phone"
                placeholder="Business Phone Number"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </span>
            <span className="mt-[-20px] text-[30px] text-red-600">*</span>
          </p>
        </div>
      </div>

      <div className="mt-5 gap-5 space-y-5 lg:flex lg:space-y-0">
        <div className="lg:w-[50%]">
          <label className="flex">National Identification Number</label>
          <p className="flex items-center">
            {" "}
            <span className="w-full">
              {" "}
              <input
                type="text"
                name="nin"
                className={input}
                placeholder="NIN"
                required
                value={nin}
                onChange={(e) => setNin(e.target.value)}
              />
            </span>
            <span className="mt-[-20px] text-[30px] text-red-600">*</span>
          </p>
        </div>

        <div className="lg:w-[50%]">
          <label className="flex">Service Category</label>
          <span className="w-full">
            <input
              type="text"
              disabled
              id="servicecat"
              name="servicecat"
              className={input}
              required
              value={servicecat}
              onChange={(e) => setServicecat(e.target.value)}
            />
          </span>
        </div>
      </div>

      <div className="mt-5 gap-5 space-y-5 lg:flex lg:space-y-0">
        <div className="lg:w-[50%]">
          <label className="flex">Years Of Experience</label>
          <p className="flex items-center">
            <span className="w-full">
              {" "}
              <input
                type="number"
                id="expyr"
                name="expyr"
                className={input}
                placeholder="Years of Work Experience"
                required
                value={expyr}
                onChange={(e) => setExpyr(e.target.value)}
              />
            </span>
            <span className="mt-[-20px] text-[30px] text-red-600">*</span>
          </p>
        </div>
        <div className="lg:w-[50%]">
          <label className="flex"> Business Address</label>
          <span className="w-full">
            <input
              type="text"
              name="service"
              disabled
              className={input}
              placeholder="2 metalbox rd, ikeja Lagos"
              value={service}
              onChange={(e) => setService(e.target.value)}
            />
          </span>
        </div>
      </div>

      <button
        className="my-5 rounded-full border-2 bg-blue-500 px-7 py-3 text-white hover:bg-black lg:my-20  "
        onClick={handleNext}
      >
        Save & Continue
      </button>
    </div>
  );
}
