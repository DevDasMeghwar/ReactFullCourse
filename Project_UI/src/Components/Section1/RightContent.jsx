import React from "react";
import "remixicon/fonts/remixicon.css";
import RightCard from "./RightCard";
const RightContent = (Props) => {
  return (
    <div
      id="right"
      className="h-full w-4/3 p-4 flex flex-nowrap gap-10 overflow-x-auto rounded-4xl"
    >
      {Props.users.map((ele, idx) => {
        return (
          <RightCard
            img={ele.img}
            intro={ele.intro}
            tag={ele.tag}
            color={ele.color}
            key={idx}
            id={idx}
          />
        );
      })}
    </div>
  );
};

export default RightContent;
