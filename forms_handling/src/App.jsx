import React from "react";

const App = () => {
  const SubmitHandler = () => {
    console.log("Submited");
  };
  return (
    <div>
      <form
        onSubmit={(eve) => {
          eve.preventDefault();
          SubmitHandler();
        }}
      >
        <input type="text" placeholder="Enter your name:" />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default App;
