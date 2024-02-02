export default function ViewDetails({ details }) {
    console.log(details);
  return (
    <div className="">
      <p className="mt-7 bg-black px-5 py-2 text-white">DETAILS</p>
      {/* <div className="space-y-3 p-5">
        <p>
          <span className="font-semibold">Name: </span>
          <span>
            {details.name.firstName} {details.name.lastName}
          </span>
        </p>
        <p>
          <span className="font-semibold">Service: </span>
          <span>{details.service}</span>
        </p>
        <p>
          <span className="font-semibold">Address: </span>
          <span>{details.address}</span>
        </p>
        <p>
          <span className="font-semibold">City: </span>
          <span>{details.city}</span>
        </p>
        <p>
          <span className="font-semibold">State: </span>
          <span>{details.state}</span>
        </p>
      </div> */}
    </div>
  );
}
