import Modal from "../../ui/Modal";

export default function Providers({ provider }) {
  return (
    <Modal>
      <div className="slider gap-10 lg:flex lg:p-5 ">
        <div className=" flex flex-col items-center p-5 pb-10 lg:w-[30%]">
          <img
            src={provider.photo}
            width="200px"
            height="300px"
            className="rounded-[20px]"
          />
          <p className="font-bold text-black">{provider.name}</p>
          <p className=" font-bold text-blue-500">{provider.service}</p>
        </div>
        <div className=" flex flex-col items-center p-5 pb-10 lg:w-[70%]">
          <p className="font-bold text-black underline">Service Description</p>
          <p className="font-normal text-black">
            {provider.description.length < 500 ? (
              provider.description
            ) : (
              <>
                {provider.description.split(" ").slice(0, 65).join(" ")}
                <Modal.Open opens="more">
                  <p className="cursor-pointer text-blue-600">..more</p>
                </Modal.Open>
              </>
            )}
            <Modal.Window name="more">
              <div className="h-[70vh] w-[100%] overflow-y-auto  p-5 ">
                <h1 className="font-lg font-bold"> {provider.name}</h1>
                <h1 className="font-lg font-thin text-blue-500">
                  {" "}
                  {provider.service}
                </h1>
                <p> {provider.description}</p>
              </div>
            </Modal.Window>
          </p>
        </div>
      </div>
    </Modal>
  );
}
