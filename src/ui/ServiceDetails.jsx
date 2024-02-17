import Modal from "./Modal";
import useCartStore from "../store/cartStore";
import MyButton from "./MyButton";

export default function ServiceDetails({ service }) {
  //add booked service to cart
  const addToCart = useCartStore((state) => state.addToCart);
  const addFunction = () => {
    addToCart(service);
  };

  return (
    <Modal>
      <div className="rounded-lg border-2 bg-white p-3 text-center shadow-md hover:bg-blue-500 hover:text-white">
        <div className="flex flex-col gap-3 pb-3">
          <div className="font-bold uppercase">{service.serviceRender}</div>

          {service.details.length > 10 ? (
            <span>
              {service.details.split(" ").slice(0, 10).join(" ")}
              <Modal.Open opens="more">
                <span className="cursor-pointer font-thin hover:text-black">
                  {" "}
                  ...more
                </span>
              </Modal.Open>
            </span>
          ) : (
            <span> service.details</span>
          )}

          <Modal.Window name="more">
            <div className="w-[16rem] overflow-y-auto p-5 md:w-[30rem] lg:w-[40rem] ">
              <p className="mb-3 font-semibold uppercase">{service.serviceRender}</p>
              {service.details}
            </div>
          </Modal.Window>

          <div className="font-semibold">NGN {service.price}</div>
          <div className="font-extralight">
            {service.rating === "" ? "No Rating yet" : service.rating}
          </div>
        </div>

        <MyButton type="primary" onClick={addFunction}>
          Book
        </MyButton>
      </div>
    </Modal>
  );
}
