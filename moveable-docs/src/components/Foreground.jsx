import { useRef } from "react";
import Cards from "./Cards";

const Foreground = () => {
    const ref = useRef(null)
  const data = [
    {
      desc: "lorem ipsum dolor sit amet commsenter audicing",
      filesize: ".9mb",
      close: true,
      tag: { isOpen: true, tagTitle: "Download Now", tagColor: "green" },
    },
    {
      desc: "i can swear i can joke i say whats on my mind",
      filesize: ".9mb",
      close: false,
      tag: { isOpen: true, tagTitle: "Download Now", tagColor: "pink" },
    },
    {
      desc: "i am in love with shape of you",
      filesize: ".9mb",
      close: true,
      tag: { isOpen: false, tagTitle: "Download Now", tagColor: "yellow" },
    },
    {
      desc: "lorem ipsum dolor sit amet commsenter audicing",
      filesize: ".9mb",
      close: true,
      tag: { isOpen: true, tagTitle: "update Now", tagColor: "green" },
    },
  ];
  return (
    <div ref={ref} className="fixed top-0 left-0 z-[3] w-full h-full bg-sky-800/50 flex gap-5 flex-wrap">
      {data.map((item,index)=>(
        <Cards key={index} data={item} refrence={ref} />
      ))}
    </div>
  );
};

export default Foreground;
