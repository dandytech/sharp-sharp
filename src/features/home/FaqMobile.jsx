import { useState } from "react";
const questions = [
  {
    id: 1,
    question: "Who is Sharp Sharp",
    answer:
      "Sharp Sharp is Client-Server Interconnect Agent who is responsible of providing the world with best Home Service Services using the Application by ensuring best Client/Providers Experience.",
  },
  {
    id: 2,
    question: "What language is React built on?",
    answer: "JavaScript",
  },
  {
    id: 3,
    question: "What are the building block of React ?",
    answer: "components",
  },
  {
    id: 4,
    question: "What is the name of the syntax to display UI in React ?",
    answer: "JSX",
  },
  {
    id: 5,
    question:
      "What do we use to pass data from parent to child components in React ?",
    answer: "Props",
  },
  {
    id: 6,
    question:
      "What we call an input element that is completely synchronise with time ?",
    answer: "Controlled element",
  },
  {
    id: 7,
    question: "What do we use to give component a memory in React",
    answer: "useState Hook",
  },
];

function FaqMobile() {
  const [selectedId, setSelected] = useState(null);

  function handleClick(id) {
    console.log(id, "yes");
    setSelected(id !== selectedId ? id : null);
  }

  return (
    <div className="m-auto border-2  text-center mb-[120px] lg:hidden mt-[120px]">
      <h3 className="text-[30px]">
        FA<span className="text-blue-500">Q</span>s
      </h3>
      Click for <span className="text-[30px] text-blue-500">A</span>nswers!
      <div className="grid-flow-col-3 m-auto grid w-[100%] gap-5 border-2 p-10 shadow-sm border-blue-50">
        {questions.map((question) => (
          <div
            key={question.id}
            onClick={() => handleClick(question.id)}
            className="gap flex h-auto cursor-pointer items-center justify-center rounded-full bg-white p-5 text-black shadow-2xl"
          >
            {question.id !== selectedId && (
              <div className="card">{question.question}</div>
            )}

            {question.id === selectedId && (
              <div className="gap flex h-auto cursor-pointer items-center justify-center rounded-full bg-blue-500 p-5 text-white shadow-2xl">
                {question.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
export default FaqMobile;
