

export default function AdminViewRecentRequests({ serviceRequest }) {
  return (
    
      <div className="w-[300px] overflow-y-auto overflow-x-hidden border-l-2 px-5 md:mt-0 md:w-full md:px-5  lg:mt-0 lg:w-full lg:px-5">
        <p className="mb-4 underline">REQUEST DETAILS</p>
        <p>
          <img
            className="flex h-[100px] w-[100px] items-center justify-center rounded-full border-2 p-3"
            src={serviceRequest.photo}
            alt="photo"
          />
        </p>
        <div className="space-y-3  pb-10">
          <p>
            <span className="font-semibold">Name:</span>{" "}
            {serviceRequest.name.firstName} {serviceRequest.name.lastName}
          </p>
          <p>
            <span className="font-semibold">Address:</span>{" "}
            {serviceRequest.address}
          </p>
          <p>
            <span className="font-semibold">Phone: </span>{" "}
            {serviceRequest.phone}
          </p>
          <p>
            <span className="font-semibold">Email: </span>
            {serviceRequest.email}
          </p>
          <p>
            <span className="font-semibold">Request Time: </span>{" "}
            {serviceRequest.requestTime}
          </p>
          <p>
            <span className="font-semibold">Requested Service: </span>
            {serviceRequest.service}
          </p>
          <p>
            <span className="font-semibold">Request Details: </span>
            {serviceRequest.detail}
          </p>
          <p>
            <span className="font-semibold">Expected Delivery Time: </span>{" "}
            {serviceRequest.deliveryTime}
          </p>
        </div>
      </div>
    
 
  );
}
