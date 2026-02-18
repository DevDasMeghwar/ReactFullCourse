import React, { use } from "react";

const App = () => {
  // localStorage always take a string:
  const user = JSON.parse(localStorage.getItem("user"));
  console.log(user);
  return <div></div>;
};

export default App;
