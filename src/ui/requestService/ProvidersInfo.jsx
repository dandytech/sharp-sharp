export default function ProvidersInfo({ item, formatCurrency, getTotalPrice }) {
  return (
    <div className="border-4 border-stone-100 p-3 shadow-md">
      <div className="mb-5 items-center justify-between gap-10 space-y-5 lg:flex">
        <div className="mt-5 lg:w-[50%]">
          <label>Service Provider</label>

          <span>
            <input
              type="text"
              className="w-full rounded-md border-2 border-gray-300 px-3 py-1"
              disabled
              value={item.provider}
            />
          </span>
        </div>
        <div className=" lg:w-[50%]">
          <label>Provider's Phone</label>
          <span>
            <input
              type="text"
              className="w-full rounded-md border-2 border-gray-300 px-3 py-1"
              disabled
              value={item.providerPhone}
            />
          </span>
        </div>
      </div>
      <div className="items-center justify-between gap-10 space-y-3 lg:flex">
        <div className="lg:w-[50%]">
          <soan className="flex justify-between">
            {" "}
            <label>Service ID: {item.id}</label>
            <label className="font-light"> Quantity: {item.quantity}</label>
          </soan>
          <span>
            <input
              type="text"
              className="w-full rounded-md border-2 border-gray-300 px-3 py-1"
              disabled
              value={item.serviceRender}
            />
          </span>
        </div>
        <div className="lg:w-[50%]">
          <label>Charge</label>
          <span>
            <input
              type="text"
              className="w-full rounded-md border-2 border-gray-300 px-3 py-1"
              disabled
              value={formatCurrency(item.price * item.quantity)}
            />
          </span>
        </div>
      </div>
      <div className="mt-5 ">
        <label>Description</label>
        <textarea
          className="w-full overflow-y-auto rounded-md border-2 border-gray-300 px-3 py-1"
          rows={4}
          disabled
          value={item.details}
        />
      </div>

      {/* <div className="items-center justify-between gap-10 space-y-10 lg:flex">
        <div className="mt-5 lg:w-[50%]">
          <label>Service Email</label>
          <span>
            <input
              type="text"
              className="w-full rounded-md border-2 border-gray-300 px-3 py-1"
              disabled
              value={item.providerEmail}
            />
          </span>
        </div>
        <div className=" lg:w-[50%]">
          <label>Provider's Phone</label>
          <span>
            <input
              type="text"
              className="w-full rounded-md border-2 border-gray-300 px-3 py-1"
              disabled
              value={item.providerPhone}
            />
          </span>
        </div>
      </div> */}
    </div>
  );
}
