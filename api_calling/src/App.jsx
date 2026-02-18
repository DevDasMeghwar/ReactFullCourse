import React, { useState } from "react";
import axios from "axios";
const App = () => {
  const [data, setData] = useState([]);

  const getData = async () => {
    const response = await axios.get("https://picsum.photos/v2/list");

    // console.log(response.data);
    setData(response.data);
  };
  return (
    <div>
      <button className="bg-black text-white rounded p-3 m-5" onClick={getData}>
        Get Data
      </button>
      <div>
        {data.map((elem, idx) => {
          return <h3>Hello,{elem.author}</h3>;
        })}
      </div>
    </div>
  );
};

export default App;
