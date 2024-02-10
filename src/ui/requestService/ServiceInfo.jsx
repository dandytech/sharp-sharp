export default function ServiceInfo() {
  return (
    <div>
      <div className="items-center justify-between gap-10 space-y-3 lg:flex">
        <div className="lg:w-[50%]">
          <label>Service</label>
          <span>
            <input
              type="text"
              className="w-full rounded-md border-2 border-gray-300 px-3 py-1"
            />
          </span>
        </div>
        <div className="lg:w-[50%]">
          <label>Charge</label>
          <span>
            <input
              type="text"
              className="w-full rounded-md border-2 border-gray-300 px-3 py-1"
            />
          </span>
        </div>
      </div>
      <div className="mt-5 ">
        <textarea
          className="w-full overflow-y-auto rounded-md border-2 border-gray-300 px-3 py-1"
          rows={5}
        />
      </div>
    </div>
  );
}
