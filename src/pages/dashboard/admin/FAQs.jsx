const faqs = [
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

import { useMemo, useState } from "react";
import { CiHome } from "react-icons/ci";
import { NavLink, useNavigate } from "react-router-dom";
import Table from "../../../ui/Table";
import MyButton from "../../../ui/MyButton";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function FAQs() {
  const [data, setData] = useState(faqs);
  const columns = useMemo(
    () => [
      {
        accessorKey: "id",
        header: "SN",
        size: 120,
      },
      {
        accessorKey: "question",
        header: "Question",
        size: 300,
      },
      {
        accessorKey: "answer",
        header: "Answer",
        size: 600,
      },
    ],
    [],
  );

  // Reverse the data array
  const reversedData = useMemo(() => [...data].reverse(), [data]);

  const [show, setShow] = useState(false);
  const [question, setQuestion] = useState();
  const [answer, setAnswer] = useState();

  const navigate = useNavigate();

  const handleShow = () => {
    setShow(!show);
  };

  const nextId = data.length;
  const handleSave = (e) => {
    e.preventDefault();
    if (!question || !answer) {
      toast.error("All Fields are Required 😰");
    } else {
      setData([
        ...data,
        {
          id: nextId + 1,
          question: question,
          answer: answer,
        },
      ]);

      setQuestion("");
      setAnswer("");
      toast.success("FAQ added Successfully ✅");
    }
  };

  return (
    <div className="servicebg z-0 mt-[80px] h-[100vh] overflow-y-auto px-5 lg:w-[85%] lg:pr-10">
      <div className="m-auto mt-14 flex items-center">
        <NavLink to="/">
          <CiHome />
        </NavLink>
        /<button onClick={() => navigate("/admin/dashboard")}>dashboard</button>
        /<NavLink to="">FAQs</NavLink>
      </div>

      <div className="mt-10">
        <div className="flex items-center justify-between">
          <span className="mb-7 text-xl font-bold">
            Frequently Asked <span className="text-blue-500">Q</span>uestions &
            <span className="text-blue-500"> A</span>nswers
          </span>
          <span>
            <MyButton type="primary" onClick={handleShow}>
              {show ? "Close" : " + Add"}
            </MyButton>
          </span>
        </div>

        {show && (
          <div className="space-y-3">
            <p>
              {" "}
              <label>Question</label>
              <textarea
                value={question}
                onChange={(e) => setQuestion(e.target.value)}
                type="text"
                placeholder="Your Question here"
                rows={3}
                className="w-full rounded-xl border-2 border-gray-300 px-2 py-3"
              />
            </p>
            <p>
              {" "}
              <label>Answer</label>
              <textarea
                value={answer}
                onChange={(e) => setAnswer(e.target.value)}
                type="text"
                placeholder="Your Answer here"
                rows={5}
                className="w-full rounded-xl border-2 border-gray-300 px-2 py-3"
              />
            </p>
            <p className="pb-7 text-center">
              <MyButton type="primary" onClick={handleSave}>
                Submit
              </MyButton>
            </p>
          </div>
        )}

        <p>
          <Table data={reversedData} columns={columns} />
        </p>
      </div>

      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition:Bounce
        ToastContainer
      />
    </div>
  );
}
