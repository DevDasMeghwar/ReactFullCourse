import React from "react";

const Navbar = (props) => {
  console.log(props);
  return (
    <div>
      <p>{props.theme}</p>
      <button
        className="bg-red-300 rounded py-2 px-4 m-2 text-white active:scale-95 active:bg-red-700"
        onClick={() => {
          props.setTheme("light");
        }}
      >
        Change Theme
      </button>
    </div>
  );
};

export default Navbar;
