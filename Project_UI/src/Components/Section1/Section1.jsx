import Navbar from "./Navbar";
import Page1Content from "./Page1Content";

const Section1 = (Props) => {
  return (
    <div className="h-full w-full">
      <Navbar />
      <Page1Content users={Props.users} />
    </div>
  );
};

export default Section1;
