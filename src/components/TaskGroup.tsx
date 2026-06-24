import Task from "./Task";
import { useRef, useEffect, useState } from "react";

interface propTypes {
  colTitle: string;
  form: HTMLDivElement;
}

const TaskGroup: React.FC<propTypes> = ({ form, colTitle }) => {
  const [isLiked, setIsLiked] = useState(false);
  const performStartupAction = () => {
    console.log(isLiked);
    setIsLiked(true);
  };
  const op = useRef<HTMLDivElement>(null);
  const zone = useRef<HTMLDivElement>(null);
  const handleClick = () => {
    // op.current!.style.opacity = "0.5";
    form.classList.remove("hidden");
    // op.current!.classList.add("invisible");
  };
  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    const id = e.dataTransfer.getData("text");
    console.log(id);
  };
  const handleLeave = (e: React.DragEvent) => {
    e.preventDefault();
    zone.current!.classList.remove("h-20");
    zone.current!.classList.remove("opacity-100");
  };
  const handleHover = (e: React.DragEvent) => {
    e.preventDefault();
    zone.current!.classList.remove("hidden");
    zone.current!.classList.add("transition-all");
    zone.current!.classList.add("duration-300");
    zone.current!.classList.add("ease-in-out");
    zone.current!.classList.add("h-20");
    zone.current!.classList.add("opacity-100");
  };

  useEffect(() => {
    performStartupAction();
  }, []);
  return (
    <div ref={op} className="bg-clr w-[90%] py-2 rounded-lg m-auto">
      <div className="text-left mb-3">
        <h2 className="font-bold">{colTitle}</h2>
      </div>
      {/* tasks */}
      <Task
        handleLeave={handleLeave}
        zone={zone.current!}
        task={{ title: "Title", description: "description" }}
      />
      {/* <hr onDragOver={(e) => handleHover(e)} /> */}
      <div
        ref={zone}
        onDragLeave={(e) => handleLeave(e)}
        onDragOver={(e) => handleHover(e)}
        onDragEnd={(e) => handleLeave(e)}
        onDrop={(e) => handleDrop(e)}
        className="border-dashed border-blue-300 border-2 rounded-lg mt-3 mb-3 h-0 opacity-0 w-full"
      ></div>
      <Task
        // handleLeave={handleLeave}
        zone={zone.current!}
        task={{ title: "Title", description: "description" }}
      />
      {/* tasks */}
      <div className="h-12 border border-dashed rounded-lg">
        <button onClick={handleClick} className="h-full w-full font-big">
          + Add new task
        </button>
      </div>
    </div>
  );
};

export default TaskGroup;
