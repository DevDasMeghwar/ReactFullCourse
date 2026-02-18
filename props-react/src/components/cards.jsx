import React from "react";

const cards = (props) => {
  return (
    <div className="card">
      <img src={props.img} alt="profile-img" />
      <h1>{props.user}</h1>
      <h3>Age: {props.age} </h3>
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
      <button>View Profile</button>
    </div>
  );
};

export default cards;
