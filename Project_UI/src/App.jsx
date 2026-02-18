import React from "react";
import Section1 from "./Components/Section1/Section1";
import Section2 from "./Components/Section2/Section2";
const App = () => {
  const users = [
    {
      img: "https://plus.unsplash.com/premium_photo-1665990292452-4f9dbdc15eea?q=80&w=979&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      intro:
        "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum id doloremque porro explicabo molestias fuga?",
      tag: "Satisfied",
      color: "yellow",
    },

    {
      img: "https://plus.unsplash.com/premium_photo-1674338457396-5d6db9f30f52?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      intro:
        "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum id doloremque porro explicabo molestias fuga?",
      tag: "UnderServed",
      color: "red",
    },

    {
      img: "https://plus.unsplash.com/premium_photo-1672691613196-99583588f22c?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      intro:
        "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum id doloremque porro explicabo molestias fuga?",
      tag: "UnderBanked",
      color: "pink",
    },
    {
      img: "https://plus.unsplash.com/premium_photo-1665990292452-4f9dbdc15eea?q=80&w=979&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      intro:
        "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum id doloremque porro explicabo molestias fuga?",
      tag: "Satisfied",
      color: "black",
    },

    {
      img: "https://plus.unsplash.com/premium_photo-1674338457396-5d6db9f30f52?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      intro:
        "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum id doloremque porro explicabo molestias fuga?",
      tag: "UnderServed",
      color: "hotpink",
    },

    {
      img: "https://plus.unsplash.com/premium_photo-1672691613196-99583588f22c?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      intro:
        "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum id doloremque porro explicabo molestias fuga?",
      tag: "UnderBanked",
      color: "blue",
    },
    {
      img: "https://plus.unsplash.com/premium_photo-1672691613196-99583588f22c?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      intro:
        "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum id doloremque porro explicabo molestias fuga?",
      tag: "UnderBanked",
      color: "green",
    },
    {
      img: "https://plus.unsplash.com/premium_photo-1665990292452-4f9dbdc15eea?q=80&w=979&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      intro:
        "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum id doloremque porro explicabo molestias fuga?",
      tag: "Satisfied",
      color: "amber",
    },

    {
      img: "https://plus.unsplash.com/premium_photo-1674338457396-5d6db9f30f52?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      intro:
        "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum id doloremque porro explicabo molestias fuga?",
      tag: "UnderServed",
      color: "yellow",
    },

    {
      img: "https://plus.unsplash.com/premium_photo-1672691613196-99583588f22c?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      intro:
        "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum id doloremque porro explicabo molestias fuga?",
      tag: "UnderBanked",
      color: "pink",
    },
  ];
  return (
    <div>
      <Section1 users={users} />
      <Section2 />
    </div>
  );
};

export default App;
