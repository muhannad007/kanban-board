const PopUp = () => {
  return (
    <div className="absolute bg-black p-4">
      <form>
        <h3>Task Title</h3>
        <input type="text" placeholder="Add title" />
        <h3>Task description</h3>
        <input type="text" placeholder="Task description" />
      </form>
    </div>
  );
};

export default PopUp;
