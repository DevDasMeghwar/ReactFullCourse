import React from "react";

const RightCardContent = (Props) => {
  console.log(Props.color);
  return (
    <div className="absolute top-0 left-0 h-full w-full p-4 flex flex-col justify-between">
      <h2 className="bg-white rounded-full h-10 w-10 flex justify-center items-center text-xl font-bold">
        {Props.id + 1}
      </h2>
      <div>
        <p className="leading-relaxed text-white mb-10 text-shadow-2xs ">
          {Props.intro}
        </p>
        <div className="flex justify-between">
          <button
            style={{ backgroundColor: Props.color }}
            className=" text-white font-medium px-8 py-2 rounded-full"
          >
            {Props.tag}
          </button>
          <button
            style={{ color: Props.color }}
            className=" text-white font-semibold px-4 py-2 rounded-full"
          >
            <i className="ri-arrow-right-long-fill"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default RightCardContent;
