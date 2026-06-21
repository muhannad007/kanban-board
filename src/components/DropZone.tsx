import { useRef } from "react";

const DropZone = () => {
  const zone = useRef<HTMLDivElement>(null);
  // const handleHover = (e: React.DragEvent) => {
  //   console.log("ffffffffff");
  //   e.preventDefault();
  //   zone.current!.style.display = "block";
  // };
  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    const id = e.dataTransfer.getData("text");
    console.log(id);
  };
  return (
    <div
      ref={zone}
      onDrop={(e) => handleDrop(e)}
      className="bg-black h-3 w-full hidden"
    ></div>
  );
};

export default DropZone;
