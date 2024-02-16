export default function ProvidersInfo({ item }) {
  console.log(item);
  return (
    <div>
      <div className="items-center justify-between gap-10 space-y-3 lg:flex">
        <div className="lg:w-[50%]">
          <label>Service {item.id}</label>
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
              value={item.price}
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
      {/* <div className="items-center justify-between gap-10 space-y-3 lg:flex">
        <div className="lg:w-[50%]">
          <label>Service Provider</label>
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
              value={item.price}
            />
          </span>
        </div>
      </div> */}
    </div>
  );
}
