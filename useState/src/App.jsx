import React from "react";
import { useState } from "react";

const App = () => {
  let [num, setNum] = useState(0);

  function changeValInc() {
    num++;
    setNum(num);
  }
  function changeValDec() {
    num--;
    setNum(num);
  }
  function JumpByFive() {
    num += 5;
    setNum(num);
  }
  return (
    <div>
      <h1>{num}</h1>
      <button onClick={changeValInc}>Increase</button>
      <button onClick={changeValDec}>Decrease</button>
      <button onClick={JumpByFive}>Jump By 5</button>
    </div>
  );
};

export default App;
