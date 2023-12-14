import Modal from "../../ui/Modal";

export default function Providers({ provider }) {
  return (
    <Modal>
      <div className="slider  flex-col-reverse bg-cover bg-center  bg-no-repeat p-5  lg:flex lg:flex-row-reverse  ">
        <div className="w-full sm:w-[70%] lg:p-10 ">
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
              <div className="mx-auto h-[70vh] w-[340px] overflow-y-auto lg:w-[600px] ">
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
        <div className="flex flex-col items-center gap-5 p-5 lg:w-[30%]">
          <img
            src={provider.photo}
            width="200px"
            height="300px"
            className="rounded-[20px]"
          />
          <p className="gap-10 font-bold text-black">{provider.name}</p>
          <p className="gap-10 font-bold text-blue-500">{provider.service}</p>
        </div>
      </div>
    </Modal>
  );
}
