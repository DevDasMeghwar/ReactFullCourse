import React from "react";
import { Bookmark } from "lucide-react";
const cards = (Props) => {
  return (
    <div className="card">
      <div>
        <div className="top">
          <img src={Props.arr.brandLogo} alt="brandLogo" />
          <button>
            Save <Bookmark size={12} />
          </button>
        </div>
        <div className="center">
          <h3>
            {Props.arr.companyName} <span> {Props.arr.postedAgo} </span>
          </h3>
          <h2> {Props.arr.post} </h2>
          <div className="tag">
            <h4> {Props.arr.tag} </h4>
            <h4> {Props.arr.tag2} </h4>
          </div>
        </div>
      </div>
      <div className="bottom">
        <div>
          <h3> {Props.arr.payPerHour}$/hr</h3>
          <p>
            {Props.arr.location.state}, {Props.arr.location.country}
          </p>
        </div>
        <button>Apply Now</button>
      </div>
    </div>
  );
};

export default cards;
