import React, { useState } from "react";

const App = () => {
  const [num, setnum] = useState({
    user: "Dev",
    age: 20,
  });
  const btnClick = () => {
    const newNum = { ...num };
    newNum.user = "Das";
    newNum.age = 21;
    setnum(newNum);
  };
  return (
    <div>
      <h1>
        {num.user} {num.age}
      </h1>
      <button onClick={btnClick}>Click</button>
    </div>
  );
};

export default App;
