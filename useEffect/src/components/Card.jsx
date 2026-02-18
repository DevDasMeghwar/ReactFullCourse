import React from "react";

const Card = (Props) => {
  return (
    <div>
      <a href={Props.elem.url} target="_blank">
        <div className="bg-white h-40 w-44  rounded-xl overflow-hidden">
          <img
            className="h-full w-full object-cover"
            src={Props.elem.download_url}
            alt=""
          />
        </div>
        <h2 className="font-bold text-lg">{Props.elem.author}</h2>
      </a>
    </div>
  );
};

export default Card;
