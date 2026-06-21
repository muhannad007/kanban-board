import { useState } from "react";

interface formProps {
  ref: React.Ref<HTMLDivElement>;
}

const TaskForm = ({ ref }: formProps) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const handleClick = () => {
    // e.preventDefault();
    localStorage.setItem("task", JSON.stringify({ title, description }));
    console.log("fffff");
    console.log(localStorage.getItem("task"));
  };
  return (
    <div
      // style={{ height: "100vh" }}
      ref={ref}
      className="hidden fixed inset-0 items-center z-50 justify-center"
    >
      <div className="bg-blue-300 rounded-lg p-10 text-left mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <h2>Add Task</h2>
        <hr />
        <form className="form mt-4 w-full space-y-6">
          <div className="w-full">
            <label
              htmlFor="name"
              className="block text-sm/6 font-medium text-gray-900"
            >
              Title
            </label>
            <div className="mt-2">
              <input
                type="text"
                name="name"
                id="name"
                onChange={(e) => setTitle(e.target.value)}
                required
                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
              />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label
                htmlFor="description"
                className="block text-sm/6 font-medium text-gray-900"
              >
                Task description
              </label>
            </div>
            <div className="mt-2">
              <textarea
                name="description"
                id="description"
                onChange={(e) => setDescription(e.target.value)}
                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
              />
            </div>
          </div>

          <div>
            <button
              onClick={() => handleClick()}
              className="flex w-full justify-center rounded-md bg-indigo-500 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-indigo-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Add task
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default TaskForm;
