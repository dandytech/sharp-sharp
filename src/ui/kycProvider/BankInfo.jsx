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

const actTypes = [
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
import MyButton from "../MyButton";

import { useGetProvider } from "../../features/authentication/provider/useGetProvider";
import { useEditProvider } from "../../features/authentication/provider/useEditProvider";
import toast from "react-hot-toast";

export default function BankInfo({ handleTabClick }) {
  //get Provider's detail hook
  const { user, refetch } = useGetProvider();

  const [bankName, setBankName] = useState(user?.user_metadata.bankName);
  const [actNo, setActNo] = useState(user?.user_metadata.actNo);
  const [actName, setActName] = useState(user?.user_metadata.actName);
  const [bankActType, setActType] = useState(user?.user_metadata.actType);

  //update Provider's details hook
  const { updateProvider, isUpdating } = useEditProvider();

  //Bank act number API
  const [bank, setBank] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  //fetch banks on Load
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

  // useEffect(() => {
  //   if (actNo.length >= 10) {
  //     fetchBankInfo();
  //   }
  // }, [actNo]);

  //validate if Account Number exist
  // const fetchBankInfo = async () => {
  //   try {
  //     const response = await fetch(
  //       `https://nubapi.com/api/verify?account_number=${actNo}&bank_code=${bankName}`,
  //       {
  //         headers: {
  //           Authorization:
  //             "Bearer piuMTZSsjy7Ce7gEvUEuaMZYYK7PEuxh4KEv7qTCc48e9c66",
  //           "Content-Type": "application/json",
  //         },
  //       },
  //     );
  //     if (!response.ok) {
  //       throw new Error("Account Doesn't exist");
  //     }

  //     //console.log(actno);
  //     //console.log(bankName);

  //     const data = await response.json();
  //     console.log(data);
  //     //console.log(data.account_name);

  //     setActName(data.account_name);
  //   } catch (error) {
  //     setError(error);
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  //update function
  function handleSubmit(e) {
    e.preventDefault();

    if (!user?.user_metadata.fullName) return;

    let toastShown = false; // Flag to track if toast has been shown

    const payload = {
      actName: actName,
      actNo: actNo,
      bankActType: bankActType,
      bankName: bankName,
    };
    console.log(payload);

    updateProvider(payload, {
      onSuccess: () => {
        refetch(); // Function to clear & trigger data refetching

        // Check if toast has been shown already
        if (!toastShown) {
          setTimeout(() => {
            toast.success("NOTE: ADMIN WILL VET YOUR DATA FOR APPROVAL");
            toastShown = true; // Update flag to indicate toast has been shown
          }, 5000);
        }
      },
    });
  }

  const input =
    "w-full bg-white px-3 py-2 font-semibold hover:border-blue-500 rounded-xl border-2 border-gray-300";

  return (
    <form onSubmit={handleSubmit}>
      <div className="mt-10 gap-5 space-y-5 lg:flex lg:space-y-0">
        <div className="lg:w-[50%]">
          <label className="flex">Bank Name</label>
          <p className="flex items-center">
            <span className="w-full">
              <select
                className={input}
                id="bankName"
                disabled={isUpdating}
                value={bankName}
                onChange={(e) => setBankName(e.target.value)}
              >
                {bank?.map((item) => (
                  <option value={item.name} key={item.slug}>
                    {item.name}
                  </option>
                ))}
              </select>
            </span>

            <span className="mt-[-20px] text-[30px] text-red-600">*</span>
          </p>
        </div>

        <div className="lg:w-[50%]">
          <label className="flex">Account Number</label>
          <p className="flex items-center">
            <span className="w-full">
              {" "}
              <input
                type="number"
                id="actNo"
                disabled={isUpdating}
                className={input}
                placeholder="Correct Account Number"
                value={actNo}
                onChange={(e) => setActNo(e.target.value)}
              />
            </span>
            <span className="mt-[-20px] text-[30px] text-red-600">*</span>
          </p>
        </div>
      </div>

      <div className="mt-10 gap-5 space-y-5 lg:flex lg:space-y-0">
        <div className="lg:w-[50%]">
          <label className="flex">Account Holder Name</label>
          <p className="flex items-center">
            <span className="w-full">
              <input
                type="text"
                id="actname"
                name="actName"
                className={input}
                placeholder="Account Name"
                disabled={isUpdating}
                value={actName}
                onChange={(e) => setActName(e.target.value)}
              />
            </span>
            <span className="mt-[-20px] text-[30px] text-red-600">*</span>
          </p>
        </div>

        <div className="lg:w-[50%]">
          <label className="flex">Account Type</label>
          <p className="flex items-center">
            <span className="w-full">
              <select
                className={input}
                id="actType"
                value={bankActType}
                disabled={isUpdating}
                onChange={(e) => setActType(e.target.value)}
              >
                {actTypes.map((type) => (
                  <>
                    <option key={type.id}>{type.name}</option>
                  </>
                ))}
              </select>
            </span>
            <span className="mt-[-20px] text-[30px] text-red-600">*</span>
          </p>
        </div>
      </div>

      <div className="mt-10  flex justify-between">
        <MyButton onClick={() => handleTabClick(2)} type="primary">
          {" "}
          ⬅️Previous
        </MyButton>

        <MyButton onClick={handleSubmit} type="primary">
          {" "}
          Submit
        </MyButton>
      </div>
    </form>
  );
}
