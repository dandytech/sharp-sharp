import { useMoveBack } from "../hooks/useMoveBack";

function PageNotFound() {
  const moveBack = useMoveBack();

  return (
    <>
      <div className="mt-20 flex h-[50vh] flex-col-reverse items-center justify-center p-10">
        <span>
          {" "}
          <button onClick={moveBack} className="text-[26px]">&larr; Go back</button>
        </span>
        <span>
          {" "}
          <h1 className="text-[24px]">The page you are looking for could not be found 😢</h1>
        </span>
      </div>
    </>
  );
}

export default PageNotFound;
