export default function YesModal({ isOpen, onClose, onYes }) {
  if (!isOpen) {
    return null;
  }

  return (
    // <div className=" fixed left-0 top-0 flex h-screen w-full items-center justify-center bg-gray-100">

    //   <div className="yModal right-0 h-44 w-[300px] rounded-lg border-2 bg-gray-100 p-5 shadow-lg">

    <div className="modalOverlay">
      <div className="modalDiv text-center">
        <p className="bg-black text-white p-2 mb-3 font-bold">LOGOUT</p>
        <div className="mb-5 px-10 py-4">Are You Sure?</div>
        <div className="flex justify-between px-10 gap-5 mb-10">
          <button className="shadow-lg px-4 border-2 rounded-full"
            onClick={() => {
              onYes();
              onClose();
            }}
          >
            Yes
          </button>
          <button className="shadow-lg px-4 border-2 rounded-full" onClick={onClose}>No</button>
        </div>
      </div>
    </div>
    //   </div>
    // </div>
  );
}
