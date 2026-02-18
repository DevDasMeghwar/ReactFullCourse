import React from "react";
import Card from "./components/cards";
const App = () => {
  return (
    <div className="parent">
      <Card
        user="Dev Das"
        age={23}
        img="https://images.unsplash.com/photo-1769167693699-ff3e3b91abb5?q=80&w=627&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      />
      <Card
        user="Sham"
        age={21}
        img="https://images.unsplash.com/photo-1768813282031-2aec62eee8b7?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw1fHx8ZW58MHx8fHx8"
      />
      <Card
        user="Kishore"
        age={25}
        img="https://plus.unsplash.com/premium_photo-1761929642510-be8d4bb29b06?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw2fHx8ZW58MHx8fHx8"
      />
    </div>
  );
};

export default App;
