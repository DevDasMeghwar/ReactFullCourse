import React from "react";
import { useContext } from "react";
import { ThemeDataContext } from "../context/ThemeContext";

const Button = () => {
  const [theme, SetTheme] = useContext(ThemeDataContext);
  const changeTheme = () => {
    SetTheme("dark");
  };
  return (
    <div>
      <button onClick={changeTheme}>Change Theme {theme} </button>
    </div>
  );
};

export default Button;
