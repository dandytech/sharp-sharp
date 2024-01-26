import { useState } from "react";
import Modal from "../../ui/Modal";

export default function Testimonies({ testimony }) {
  const [countWords, setCountWords] = useState();

  return (
    <Modal>
      <li className="rounded-[10px] border-2">
        <div className="flex w-[100%] items-center  justify-center rounded-full bg-white lg:w-[200px] ">
          <img src={testimony.photo} alt="pic" width="100%" height="100%" />
        </div>
        <div>
          <span className="font-bold">{testimony.name}</span>
          <div className="w-[200px] p-1">
            {testimony.testimony.length < 30 ? (
              testimony.testimony
            ) : (
              <>
                {testimony.testimony.split(" ").slice(0, 10).join(" ")}
                <Modal.Open opens="more">
                  <p className="cursor-pointer text-blue-600">..more</p>
                </Modal.Open>
              </>
            )}

            <Modal.Window name="more">
              <div className="h-[70vh] w-[100%] overflow-y-auto lg:p-5     ">
                <h1 className="font-lg font-bold"> {testimony.name}</h1>
                <p> {testimony.testimony}</p>
              </div>
            </Modal.Window>
            {/* <TextExpander
            collapsedNumWords={10}
            expandButtonText="more"`
            collapseButtonText="less"
            buttonColor="#ff6622"
          >
            {testimony.testimony}
          </TextExpander> */}
          </div>
        </div>
      </li>
    </Modal>
  );
}

function TextExpander({
  //default values
  collapsedNumWords = 10,
  expandButtonText = "Show more",
  collapseButtonText = "Show less",
  buttonColor = "blue",
  expanded = false,
  className,
  children,
}) {
  const [isExpanded, setIsExpanded] = useState(expanded);
  const displayText = isExpanded
    ? children
    : children.split(" ").slice(0, collapsedNumWords).join(" ") + "...";

  const buttonStyle = {
    background: "none",
    border: "none",
    font: "inherit",
    cursor: "pointer",
    marginLeft: "6px",
    color: buttonColor,
  };
  return (
    <div className={className}>
      <span>{displayText}</span>
      <button onClick={() => setIsExpanded((exp) => !exp)} style={buttonStyle}>
        {isExpanded ? collapseButtonText : expandButtonText}
      </button>
    </div>
  );
}
