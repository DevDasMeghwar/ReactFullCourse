import React from "react";
import { useState } from "react";

const App = () => {
  const [title, setTitle] = useState("");
  const SubmitHandler = () => {
    console.log("Submited by", title);

    setTitle("");
  };
  return (
    <div>
      <form
        onSubmit={(eve) => {
          eve.preventDefault();
          SubmitHandler();
        }}
      >
        <input
          type="text"
          placeholder="Enter your name:"
          value={title}
          onChange={(eve) => {
            // console.log(eve.target.value);
            setTitle(eve.target.value);
          }}
        />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default App;
