import Card from "./components/card";
import Navbar from "./components/navbar";
const App = () => {
  const user = "Sham";
  const age = 23;
  return (
    <div>
      <div className="navbar">
        <Navbar />
      </div>
      <div className="navbar">
        <Navbar />
      </div>
      <Card />
      <Card />
    </div>
  );
};

export default App;
