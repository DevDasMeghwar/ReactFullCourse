import React, { useState } from "react";

const App = () => {
  const [title, setfirstTitle] = useState("");

  const [details, setfirstDetails] = useState("");

  const [task, setTask] = useState([]);

  const submitForm = (eve) => {
    eve.preventDefault();

    const copyTask = [...task];

    copyTask.push({ title, details });

    setTask(copyTask);

    setfirstDetails("");
    setfirstTitle("");
  };

  const deleteNote = (idx) => {
    const copyTask = [...task];

    copyTask.splice(idx, 1);
    setTask(copyTask);
  };

  return (
    <div className="min-h-screen lg:flex bg-black text-white">
      <form
        onSubmit={(eve) => {
          submitForm(eve);
        }}
        className="p-10  flex items-start  flex-col gap-5 lg:w-1/2"
      >
        <h1 className="text-3xl font-bold">Add Notes:</h1>
        {/* First Input for Heading */}
        <input
          className="  px-5 py-2 border-2 rounded w-full outline-none font-medium"
          type="text"
          placeholder="Enter Task Here:"
          value={title}
          onChange={(e) => {
            setfirstTitle(e.target.value);
          }}
        />
        {/* Details wala Input */}
        <textarea
          className="w-full h-30 px-5 py-2 border-2 rounded outline-none font-medium"
          type="text"
          placeholder="Enter Details Here:"
          value={details}
          onChange={(e) => {
            setfirstDetails(e.target.value);
          }}
        />
        <button className="bg-white text-black  px-5 py-2 border-2 rounded w-full outline-none active:bg-gray-900 active:scale-95">
          Add Note
        </button>
      </form>
      <div
        className=" p-10  lg:w-1/2 
      lg:border-l-2"
      >
        <h1 className="text-3xl font-bold">Notes here:</h1>
        <div className="flex flex-wrap gap-5 min-h-screen overflow-auto mt-5 items-start justify-start">
          {task.map((elem, idx) => {
            return (
              <div
                key={idx}
                className="h-70 w-60 rounded-xl bg-white text-black p-4 overflow-hidden flex justify-between flex-col items-start relative"
              >
                <div>
                  <h3 className=" text-xl font-bold break-word">
                    {elem.title}
                  </h3>
                  <p className="mt-4 font-medium break-word text-gray-700">
                    {elem.details}
                  </p>
                </div>
                <button
                  onClick={() => {
                    deleteNote(idx);
                  }}
                  className="cursor-pointer  w-full bg-red-400 text-white hover:scale-95 hover:bg-red-700 text-xl rounded"
                >
                  Delete
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default App;
