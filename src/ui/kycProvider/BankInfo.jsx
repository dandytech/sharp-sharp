// const banks = [
//   {
//     id: 1,
//     name: "Access",
//   },
//   {
//     id: 2,
//     name: "GTB",
//   },
//   {
//     id: 3,
//     name: "First Bank PLC",
//   },
//   {
//     id: 4,
//     name: "Union",
//   },
//   {
//     id: 5,
//     name: "Opay",
//   },
//   {
//     id: 6,
//     name: "Palm Pay",
//   },
//   {
//     id: 7,
//     name: "Fidelity",
//   },
//   {
//     id: 8,
//     name: "Zenith",
//   },
// ];

const actType = [
  {
    id: 1,
    name: "Savings",
  },
  {
    id: 2,
    name: "Current",
  },
  {
    id: 3,
    name: "Fixed Deposit",
  },
];

import { useEffect, useState } from "react";

export default function BankInfo({ handleTabClick }) {
  const [actno, setActno] = useState("");
  const [actname, setActname] = useState("");

  const [acttype, setActtype] = useState("Savings");
  const [bankName, setBankName] = useState();

  //Phone number API
  const [bank, setBank] = useState(null);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  //fetch baks on Load
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://nigerianbanks.xyz");

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const result = await response.json();
        setBank(result);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []); // Empty dependency array means this effect will only run once, similar to componentDidMount

  useEffect(() => {
    if (actno.length >= 10) {
      fetchBankInfo();
    }
  }, [actno]);

  //validate if Account Number exist
  const fetchBankInfo = async () => {
    try {
      const response = await fetch(
        `https://nubapi.com/api/verify?account_number=${actno}&bank_code=${bankName}`,
        {
          headers: {
            Authorization:
              "Bearer piuMTZSsjy7Ce7gEvUEuaMZYYK7PEuxh4KEv7qTCc48e9c66",
            "Content-Type": "application/json",
          },
        },
      );
      if (!response.ok) {
        throw new Error("Account Doesn't exist");
      }

      const data = await response.json();
      // console.log(data);
      // console.log(data.account_name);

      setActname(data.account_name);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    if (actno === "" || actname === "" || bank === "" || acttype === "")
      alert("All Fields Are Required");
  };

  const div =
    "mb-10 flex h-[50px] items-center rounded-xl border-2 border-blue-500 bg-gray-800 text-center text-white focus:border-white lg:mb-0 lg:w-[50%]";

  const input =
    " h-[45px] w-[100%] bg-gray-800 px-5 font-semibold text-white focus:border-2 focus:border-white rounded-xl";

  return (
    <div>
      <div className="mt-10 gap-10 lg:flex">
        <div className={div}>
          <span className="w-[200px] p-3 lg:w-[230px]">Bank Name:</span>
          <select
            className={input}
            id="service"
            name="service"
            required
            value={bankName}
            onChange={(e) => setBankName(e.target.value)}
          >
            <option></option>
            {bank?.map((item) => (
              <option value={item.code} key={item.slug}>
                {item.name}
              </option>
            ))}
          </select>
          <span className="mt-[-20px] text-[30px] text-red-600">*</span>
        </div>

        <div className={div}>
          <input
            type="number"
            id="actno"
            name="actno"
            className={input}
            placeholder="Account number"
            required
            value={actno}
            onChange={(e) => setActno(e.target.value)}
          />
          <span className="mt-[-20px] text-[30px] text-red-600">*</span>
        </div>
      </div>

      <div className="mt-10 gap-10 lg:flex">
        <div className={div}>
          <input
            type="text"
            id="actname"
            name="actname"
            className={input}
            placeholder="Account Name"
            required
            disabled
            value={actname}
            onChange={(e) => setActname(e.target.value)}
          />
          <span className="mt-[-20px] text-[30px] text-red-600">*</span>
        </div>

        <div className={div}>
          <span className="w-[300px] p-3 lg:w-[250px]">Account Type:</span>
          <select className={input} id="service" name="service" required>
            value={acttype}
            onChange={(e) => setActtype(e.target.value)}
            {actType.map((type) => (
              <>
                <option key={type.id}>{type.name}</option>
              </>
            ))}
          </select>
          <span className="mt-[-20px] text-[30px] text-red-600">*</span>
        </div>
      </div>

      <div className="flex gap-5">
        <button
          className="my-5 rounded-full border-2 bg-black px-7 py-3 text-white hover:bg-blue-500 lg:my-20  "
          onClick={() => handleTabClick(2)}
        >
          ⬅️Previous
        </button>

        <button
          className="5ext-white my-4 rounded-full border-2 bg-blue-500 px-7 py-3 hover:bg-black hover:text-white lg:my-20  "
          onClick={handleSubmit}
        >
          Submit
        </button>
      </div>
    </div>
  );
}
