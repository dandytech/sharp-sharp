import { useEffect } from "react";
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

export default function Faqs() {
  //FAQs
  const [selectedId, setSelected] = useState(null);
  const [disAns, setDisAns] = useState("");
  const [disQuestion, setdisQuestion] = useState("");

  function handleClick(id) {
    // console.log(id, "yes");
    setSelected(id !== selectedId ? id : null);

    const ans = questions.filter((where) => where.id === id);
    const question = questions.filter((where) => where.id === id);
    //console.log(ans);
    setDisAns(ans[0].answer);
    setdisQuestion(question[0].question);
  }

  const Default = () => {
    const ans = questions.filter((where) => where.id !== 0);
    const question = questions.filter((where) => where.id !== 0);

    setDisAns(ans[0].answer);
    setdisQuestion(question[0].question);
    setSelected(1);
  };
  useEffect(() => {
    // Call the function when the component is mounted
    Default();
    // Cleanup function (optional)
    return () => {
      // Code to run on component unmount (if needed)
    };
  }, []);

  return (
    <div className="hidden bg-gradient-to-b from-white p-10 pt-[140px] md:mb-[70px] lg:block ">
      <div className="pb-10">
        <h2 className="p-5 text-center text-6xl font-bold lg:text-7xl ">
          ASK &{" "}
          <span className="text-blue-500">
            <span className="underline">Q</span>UESTIONS
          </span>
        </h2>
      </div>

      <div className="m-auto flex w-[100%] justify-start gap-5 border-2 p-5 lg:w-[70%] lg:gap-10 lg:p-5">
        <div className="w-[100%] shadow-2xl shadow-red-50">
          <p className="font-bold">Questions</p>
          {questions.map((question) => (
            <p
              className={`mt-5 cursor-pointer ${
                question.id === selectedId && " text-blue-500"
              }`}
              onClick={() => handleClick(question.id)}
              key={question.id}
            >
              <input
                type="radio"
                name="questions"
                checked={selectedId === question.id}
              />
              <span> {question.question}</span>
            </p>
          ))}
        </div>
        <div className="w-[500px] shadow-2xl shadow-red-50">
          <p className="font-xl font-bolder font-bold text-blue-500 ">
            {disQuestion}
          </p>

          <p className="mt-5 w-[100%] ">{disAns}</p>
        </div>
      </div>
    </div>
  );
}
