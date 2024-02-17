import { useState } from "react";

export default function ProfileInfo() {
  const [show, setShow] = useState(false);
  const [fullname, setfullName] = useState("David");
  const [phone, setPhone] = useState("+234 7087875876");
  const [email, setEmail] = useState("david@gmail.com");
  const [homeAddress, setHomeAdddress] = useState(
    "3 Obi Nweke Estate, Ikeja Lagos,Nigeria",
  );
  const [newAddress, setNewAddress] = useState("");

  const handleShow = () => {
    setShow(!show);
  };
  return (
    <div className="border-4 border-stone-100 p-3 shadow-md">
      <div className="items-center justify-between gap-5 space-y-3 lg:flex">
        <div className="w-full">
          <label>Full Name</label>
          <span>
            <input
              type="text"
              className="w-full rounded-md border-2 border-gray-300 px-3 py-1"
              disabled
              value={fullname}
            />
          </span>
        </div>
        <div className="w-full">
          <label>Phone</label>
          <span>
            <input
              type="text"
              className="w-full rounded-md border-2 border-gray-300 px-3 py-1"
              disabled
              value={phone}
            />
          </span>
        </div>
        <div className="w-full">
          <label>Email</label>
          <span>
            <input
              type="email"
              className="w-full rounded-md border-2 border-gray-300 px-3 py-1"
              disabled
              value={email}
            />
          </span>
        </div>
      </div>

      <div className=" mt-5 ">
        <label className="flex items-center justify-between">
          <span>Home Address</span>
          <button
            className="rounded-xl bg-gray-400 px-3 py-1 text-white"
            onClick={handleShow}
          >
            Change Address ⌄
          </button>
        </label>
        <textarea
          className="w-full overflow-y-auto rounded-md border-2 border-gray-300 px-3 py-1"
          rows={4}
          disabled
          value={homeAddress}
        />
        {show && (
          <div className="mt-5">
            <label>Service Address</label>
            <textarea
              className="w-full overflow-y-auto rounded-md border-2 border-gray-300 px-3 py-1"
              rows={4}
              placeholder="Input the New Service Address"
              value={newAddress}
              onChange={(e) => setNewAddress(e.target.value)}
            />
          </div>
        )}
      </div>
    </div>
  );
}
