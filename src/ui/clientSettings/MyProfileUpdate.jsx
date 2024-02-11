import { useState } from "react";

export default function MyProfileUpdate() {
  const [firstName, setFirstName] = useState("Prince");
  const [lastName, setLastName] = useState("Daniel");
  const [email, setEmail] = useState("prince@gmail.com");
  const [phone, setPhone] = useState("+234 7065123746");
  const [gender, setGender] = useState("Male");
  const [address, setAddress] = useState("2 Metalbox Rd, Ikeja");

  const handleSubmitForm = (e) => {
    e.preventDefault();
    if (!firstName || !lastName || !email || !phone || gender || address)
      return;
  };

  return (
    <form onSubmit={handleSubmitForm}>
      <div className="overflow-y-auto text-center  mb-10 p-5 py-10">
        <div className="w-[360px] border-gray-300 lg:p-10 lg:w-[800px]">
          

          <div className="border-2 border-gray-300 p-3 lg:p-10 ">
            <div className="mb-5 flex items-center justify-between font-semibold">
              <p>Personal Information</p>
            </div>

            <div className="justify-between text-left lg:flex ">
              <div>
                <p className="font-light">First Name</p>
                <input
                  type="text"
                  value={firstName}
                  className="w-[100%] rounded-lg border-2 border-blue-500 bg-gray-800 px-3 py-1 text-white lg:w-[300px]"
                  onChange={(e) => setFirstName(e.target.value)}
                />
              </div>

              <div className="mt-2  lg:text-right">
                <p className="font-light">Last Name</p>
                <input
                  type="text"
                  value={lastName}
                  className="w-[100%] rounded-lg border-2 border-blue-500 bg-gray-800 px-3 py-1 text-white lg:w-[300px]"
                  onChange={(e) => setLastName(e.target.value)}
                />
              </div>
            </div>

            <div className="justify-between text-left lg:flex ">
              <div className="mt-2 ">
                <p className="font-light">Email</p>
                <input
                  type="text"
                  value={email}
                  className="w-[100%] rounded-lg border-2 border-blue-500 bg-gray-800 px-3 py-1 text-white lg:w-[300px]"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div className="mt-2  lg:text-right ">
                <p className="font-light">Phone</p>
                <input
                  type="text"
                  value={phone}
                  className="w-[100%] rounded-lg border-2 border-blue-500 bg-gray-800 px-3 py-1 text-white lg:w-[300px]"
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>
            </div>

            <div className="justify-between text-left lg:flex ">
              <div className="mt-2 ">
                <p className="font-light">Gender</p>
                <select
                  className="w-[100%] rounded-lg border-2 border-blue-500 bg-gray-800 px-3 py-1 text-white lg:w-[300px]"
                  onChange={(e) => setGender(e.target.value)}
                >
                  <option>{gender}</option>
                  <option>Female</option>
                </select>
              </div>

              <div className="mt-2  lg:text-right">
                <p className="font-light">Residential Address</p>
                <input
                  type="text"
                  value={address}
                  className="w-[100%] rounded-lg border-2 border-blue-500 bg-gray-800 px-3 py-1 text-white lg:w-[300px]"
                  onChange={(e) => setAddress(e.target.value)}
                />
              </div>
            </div>
          </div>
        </div>
        <button className="mt-5 cursor-pointer rounded-xl border-2 bg-blue-500 px-3 text-white hover:bg-black">
          Submit
        </button>
      </div>
    </form>
  );
}
