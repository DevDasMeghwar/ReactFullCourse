import React from "react";
const App = () => {
  return (
    <div className="parent">
      <div className="cards">
        <div className="top">
          <img
            src="https://plus.unsplash.com/premium_photo-1764003928826-5d870c2e7032?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="profile-picture"
            className="profile-picture"
          />
        </div>
        <div className="center">
          <div className="right">
            <div className="detail-one">
              <h2>Dev Das</h2>
              <h3>Web Developer</h3>
            </div>
            <div className="detail-two">
              <img
                src="https://fontawesome.com/icons/github?f=brands&s=solid"
                alt=""
              />

              <img
                src="https://plus.unsplash.com/premium_photo-1764003928826-5d870c2e7032?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt=""
              />
              <img
                src="https://plus.unsplash.com/premium_photo-1764003928826-5d870c2e7032?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt=""
              />
            </div>
          </div>
          <div className="left">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Doloremque, dolorem. Lorem ipsum dolor sit amet consectetur,
              adipisicing elit. Voluptatem, nesciunt!
            </p>
          </div>
        </div>
        <div className="bottom">
          <button>Conncet</button>
        </div>
      </div>
    </div>
  );
};

export default App;
