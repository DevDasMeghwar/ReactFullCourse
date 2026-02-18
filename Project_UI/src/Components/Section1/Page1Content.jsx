import React from "react";
import RightContent from "./RightContent";
import LeftContent from "./LeftContent";
const Page1Content = (Props) => {
  return (
    <div className="h-[90vh] pb-8 pt-6 gap-10 flex items-center justify-between px-16">
      <LeftContent />
      <RightContent users={Props.users} />
    </div>
  );
};

export default Page1Content;
