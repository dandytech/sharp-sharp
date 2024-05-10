import { useState } from "react";
import { useGetProvider } from "../../features/authentication/provider/useGetProvider";
import SpinnerMini from "../../ui/SpinnerMini";
import { useEditProvider } from "../../features/authentication/provider/useEditProvider";
import MyButton from "../MyButton";
import { FaRegEye } from "react-icons/fa6";
import { Tooltip } from "@material-tailwind/react";

//import { Country, State, City } from "country-state-city";

import { Country, State, City } from "country-state-city";

export default function GeneralInfo({ handleTabClick }) {
  //get Provider's detail hook
  const { user, refetch } = useGetProvider();

  //console.log(user);
  const [orgName, setorgName] = useState(user?.user_metadata?.orgName);
  const [cacNo, setCacNo] = useState(user?.user_metadata?.cacNo);
  const [taxId, setTaxId] = useState(user?.user_metadata?.taxId);
  const [utilityBill, setUtilityBill] = useState(null);
  const [busPhone, setBusPhone] = useState(user?.user_metadata?.busPhone);
  const [nin, setNin] = useState(user?.user_metadata.nin);
  const [experience, setExperience] = useState(user?.user_metadata?.experience);

  const [country, setCountry] = useState(user?.user_metadata?.country);
  const [state, setState] = useState(user?.user_metadata?.state);

  const [lga, setLga] = useState(user?.user_metadata?.lga);
  const [city, setCity] = useState(user?.user_metadata?.city);

  //
  const countries = Country.getAllCountries();

  const states = State.getStatesOfCountry(country);

  // const countryCode = Country.getCountryByCode(country);
  // const c_code = countryCode.isoCode;
  // console.log(c_code);

  const cities = City.getCitiesOfCountry(country);

  //console.log(countries);
  //console.log(states);
  console.log(cities);

  //update Provider's details hook
  const { updateProvider, isUpdating } = useEditProvider();

  //update function
  function handleSubmit(e) {
    e.preventDefault();

    if (!user?.user_metadata.fullName) return;

    const payload = {
      orgName: orgName,
      cacNo: cacNo,
      taxId: taxId,
      utilityBill: utilityBill,
      busPhone: busPhone,
      nin: nin,
      experience: experience,
      country: country,
      state: state,
      lga: lga,
      city: city,
    };

    console.log(payload);

    updateProvider(payload, {
      onSuccess: () => {
        refetch(); // Function call to clear & trigger data refetching
        handleTabClick(2);
      },
    });
  }

  const inputStyle =
    "w-full bg-white px-3 py-2 font-semibold hover:border-blue-500 rounded-xl border-2 border-gray-300";

  return (
    <form onSubmit={handleSubmit}>
      <div className="mt-10 gap-5 space-y-5 lg:flex lg:space-y-0">
        <div className="lg:w-[50%]">
          <label className="flex">Organizational Name</label>
          <p className="flex items-center">
            <span className="w-full">
              <input
                type="text"
                id="orgName"
                className={inputStyle}
                placeholder="Organization/Business Name"
                value={orgName}
                onChange={(e) => setorgName(e.target.value)}
                disabled={isUpdating}
              />
            </span>
            <span className="mt-[-20px] text-[30px] text-red-600">*</span>
          </p>
        </div>

        <div className="lg:w-[50%]">
          <label className="flex">CAC No</label>
          <input
            className={inputStyle}
            id="cacNo"
            placeholder="(CAC) Business Registration No"
            value={cacNo}
            onChange={(e) => setCacNo(e.target.value)}
            disabled={isUpdating}
          />
        </div>
      </div>

      <div className="mt-5 items-center gap-5 space-y-5  lg:flex lg:space-y-0">
        <div className="lg:w-[50%]">
          <label className="flex">Tax ID</label>
          <p>
            {" "}
            <input
              className={inputStyle}
              id="taxId"
              placeholder="Tax ID"
              value={taxId}
              onChange={(e) => setTaxId(e.target.value)}
              disabled={isUpdating}
            />
          </p>
        </div>

        <div className="lg:w-[50%]">
          <label className="flex">Utility Bill</label>

          <p className="flex items-center">
            {" "}
            <span className="w-full">
              {" "}
              <input
                className={inputStyle}
                id="utilityBill"
                type="file"
                accept="image/*"
                onChange={(e) => setUtilityBill(e.target.files[0])}
                disabled={isUpdating}
              />
            </span>
            <span className="mt-[-20px] text-[30px] text-red-600">*</span>
            {user?.user_metadata?.utilityBill && (
              <Tooltip content="View Existing File">
                <buntton
                  className="cursor-pointer"
                  onClick={() =>
                    window.open(user?.user_metadata?.utilityBill, "_blank")
                  }
                >
                  {" "}
                  <FaRegEye />
                </buntton>
              </Tooltip>
            )}{" "}
          </p>
        </div>
      </div>

      <div className="mt-5 gap-5 space-y-5 lg:flex lg:space-y-0">
        <div className="lg:w-[50%]">
          <label className="flex"> Business Address</label>
          <span className="w-full">
            <input
              type="text"
              disabled
              className={inputStyle}
              value={!user ? <SpinnerMini /> : user?.user_metadata?.busAddress}
            />
          </span>
        </div>

        <div className="lg:w-[50%]">
          <label className="flex">Business Line</label>
          <p className="flex items-center">
            {" "}
            <span className="w-full">
              {" "}
              <input
                className={inputStyle}
                type="text"
                id="busPhone"
                placeholder="Business Phone Number"
                value={busPhone}
                onChange={(e) => setBusPhone(e.target.value)}
                disabled={isUpdating}
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
                className={inputStyle}
                placeholder="NIN"
                value={nin}
                id="nin"
                onChange={(e) => setNin(e.target.value)}
                disabled={isUpdating}
              />
            </span>
            <span className="mt-[-20px] text-[30px] text-red-600">*</span>
          </p>
        </div>
        <div className="lg:w-[50%]">
          <label className="flex">Years Of Experience</label>
          <p className="flex items-center">
            <span className="w-full">
              {" "}
              <input
                type="number"
                id="experience"
                className={inputStyle}
                placeholder="Years of Work Experience"
                value={experience}
                onChange={(e) => setExperience(e.target.value)}
                disabled={isUpdating}
              />
            </span>
            <span className="mt-[-20px] text-[30px] text-red-600">*</span>
          </p>
        </div>
      </div>

      <div className="mt-5 gap-5 space-y-5 lg:flex lg:space-y-0"></div>

      <div className="mt-5 gap-5 space-y-5 lg:flex lg:space-y-0">
        <div className="lg:w-[50%]">
          <label className="flex">Country of Service</label>
          <p className="flex items-center">
            <span className="w-full">
              {" "}
              <select
                type="text"
                id="country"
                value={country}
                className={inputStyle}
                onChange={(e) => setCountry(e.target.value)}
                disabled={isUpdating}
              >
                {countries.map((country) => (
                  <option value={country.isoCode} key={country.name}>
                    {country.name}
                  </option>
                ))}
              </select>
            </span>
            <span className="mt-[-20px] text-[30px] text-red-600">*</span>
          </p>
        </div>
        <div className="lg:w-[50%]">
          <label className="flex">State of Service</label>
          <p className="flex items-center">
            <span className="w-full">
              {" "}
              <select
                type="text"
                id="state"
                value={state}
                className={inputStyle}
                onChange={(e) => setState(e.target.value)}
                disabled={isUpdating}
              >
                <option value="">Select a state</option>
                {states &&
                  states.map((state) => (
                    <option key={state.name}>{state.name}</option>
                  ))}
              </select>
            </span>
            <span className="mt-[-20px] text-[30px] text-red-600">*</span>
          </p>
        </div>
      </div>

      <div className="mt-5 gap-5 space-y-5 lg:flex lg:space-y-0">
        <div className="lg:w-[50%]">
          <label className="flex">L.G.A of Service</label>
          <p className="flex items-center">
            <span className="w-full">
              {" "}
              <select
                type="text"
                id="lga"
                value={lga}
                className={inputStyle}
                onChange={(e) => setLga(e.target.value)}
                disabled={isUpdating}
              >
                <option>Ikeja</option>
                <option>Ikoyi</option>
              </select>
            </span>
            <span className="mt-[-20px] text-[30px] text-red-600">*</span>
          </p>
        </div>
        <div className="lg:w-[50%]">
          <label className="flex">City of Service</label>
          <p className="flex items-center">
            <span className="w-full">
              {" "}
              <select
                type="text"
                id="city"
                className={inputStyle}
                placeholder="City You Render Service"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                disabled={isUpdating}
              >
                <option value="">Select a City</option>
                {cities &&
                  cities.map((city) => (
                    <option key={city.name}>{city.name}</option>
                  ))}
              </select>
            </span>
            <span className="mt-[-20px] text-[30px] text-red-600">*</span>
          </p>
        </div>
      </div>
      <p className="mt-5">
        {" "}
        <MyButton type="primary" onClick={handleSubmit} disabled={isUpdating}>
          {" "}
          Save & Continue
        </MyButton>
      </p>
    </form>
  );
}
