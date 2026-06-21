import { EllipsisVerticalIcon } from "@heroicons/react/24/outline";
import type React from "react";
// import { useRef } from "react";

interface taskProperties {
  title: string;
  description: string;
}
interface taskProps {
  handleLeave: (e: React.DragEvent) => void;
  zone: HTMLDivElement;
  task: taskProperties;
}

const Task: React.FC<taskProps> = ({ handleLeave, zone, task }) => {
  // const zone = useRef<HTMLDivElement>(null);
  const handleDragStart = (e: React.DragEvent) => {
    // if (e.target instanceof HTMLElement) {
    //   e.target.style.cursor = "grabbing";
    // }
    // e.preventDefault();
    e.dataTransfer.setData("text/plain", "item.id");
    e.dataTransfer.effectAllowed = "move";
    document.body.classList.add("grabber");
  };
  const handleHover = (e: React.DragEvent) => {
    e.preventDefault();
    zone.classList.remove("hidden");
    zone.classList.add("transition-all");
    zone.classList.add("duration-300");
    zone.classList.add("ease-in-out");
    zone.classList.add("h-20");
    zone.classList.add("opacity-100");
  };
  return (
    <div
      draggable
      onDragStart={(e) => handleDragStart(e)}
      onDragOver={(e) => handleHover(e)}
      onDragEnd={(e) => handleLeave(e)}
      onDragLeave={(e) => handleLeave(e)}
      className="bg-white rounded-lg p-3 mb-4 text-left"
    >
      <div className="flex justify-between">
        <h2 className="text-black">{task.title}</h2>
        <i className="h-5">
          <EllipsisVerticalIcon className="h-5 cursor-pointer" />
        </i>
      </div>
      <div className="">
        <p>{task.description}</p>
      </div>
      <div>{new Date().getMonth() + 1}</div>
    </div>
  );
};

export default Task;
