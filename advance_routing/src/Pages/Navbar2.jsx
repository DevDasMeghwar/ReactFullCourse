import React from "react";
import { useNavigate } from "react-router-dom";
const Navbar2 = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-row py-2 px-5 bg-blue-500">
      <button
        className="bg-amber-600 px-5 py-2 rounded m-2 cursor-pointer active:scale-95"
        onClick={() => {
          navigate("/");
        }}
      >
        Return to Home Page:
      </button>
      <button
        className="bg-amber-600 px-5 py-2 rounded m-2 cursor-pointer active:scale-95"
        onClick={() => {
          navigate(-1);
        }}
      >
        Back
      </button>
      <button
        className="bg-amber-600 px-5 py-2 rounded m-2 cursor-pointer active:scale-95"
        onClick={() => {
          navigate(+1);
        }}
      >
        Next
      </button>
    </div>
  );
};

export default Navbar2;
