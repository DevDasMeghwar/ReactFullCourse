import RightCardContent from "./RightCardContent";

const RightCard = (Props) => {
  return (
    <div className="h-full w-70 rounded-4xl overflow-hidden relative shrink-0">
      <img
        className="h-full w-full rounded-4xl object-cover"
        src={Props.img}
        alt="images"
      />
      <RightCardContent
        id={Props.id}
        intro={Props.intro}
        tag={Props.tag}
        color={Props.color}
      />
    </div>
  );
};

export default RightCard;
