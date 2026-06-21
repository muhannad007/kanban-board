// import NavBar from "../components/NavBar";
// import SideBar from "../components/SideBar";
// import { useState } from "react";
import TaskGroup from "../components/TaskGroup";
import TaskForm from "../components/TaskForm";
import { useRef } from "react";

const Kanban = () => {
  const formRef = useRef<HTMLDivElement>(null);
  return (
    <>
      <div className="bg-white w-[98%] px-5 mt-5 py-5 rounded-lg grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
        <div className="w-full bg-clr m-auto rounded-lg">
          <TaskGroup form={formRef.current!} colTitle="ToDo List" />
        </div>
        <div className="w-full bg-clr m-auto rounded-lg">
          <TaskGroup form={formRef.current!} colTitle="Ongoing" />
        </div>
        <div className="w-full bg-clr m-auto rounded-lg">
          <TaskGroup form={formRef.current!} colTitle="Review" />
        </div>
        <div className="w-full bg-clr m-auto rounded-lg">
          <TaskGroup form={formRef.current!} colTitle="Done" />
        </div>
      </div>
      <TaskForm ref={formRef} />
    </>
  );
};

export default Kanban;
