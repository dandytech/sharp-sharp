import MyButton from "../../ui/MyButton";

export default function VerifyEmail() {
  return (
    <div className="mx-auto mt-[10px] flex h-[100vh]  w-auto flex-col  items-center border-2 p-10 text-center shadow-md md:w-[60%] lg:w-[50%]">
      <p className="mb-10 text-lg font-bold">Email Verification !</p>
      <p>Provide the Code sent to your email</p>
      <p className="mt-5 flex w-[100%] items-center justify-between gap-5 md:w-[70%] lg:w-[35%]">
        <div className="w-[100%]">
          <input
            type="text"
            className="w-[100%] rounded-xl border-2 border-gray-300 p-2 hover:border-blue-500"
          />
        </div>{" "}
        <div className="w-[100%]">
          <input
            type="text"
            className="w-[100%] rounded-xl border-2 border-gray-300 p-2 hover:border-blue-500"
          />
        </div>{" "}
        <div className="w-[100%]">
          <input
            type="text"
            className="w-[100%] rounded-xl border-2 border-gray-300 p-2 hover:border-blue-500"
          />
        </div>{" "}
        <div className="w-[100%]">
          <input
            type="text"
            className="w-[100%] rounded-xl border-2 border-gray-300 p-2 hover:border-blue-500"
          />
        </div>
      </p>
      <p className="py-5 font-light">
        Didn't receive any Code?{" "}
        <button className="text-blue-500">Resend</button>
      </p>
      <p className="py-10">
        <MyButton type="primary">Submit</MyButton>
      </p>
    </div>
  );
}
