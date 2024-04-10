import React from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../features/todo/todoSlice";

const Addform = () => {
  const [task, setTask] = React.useState("");
    const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(task);
    dispatch(addTodo(task));
    setTask("");
  }
    return (
      <>
        <form onSubmit={handleSubmit}>
          <input type="text" onChange={(e) => setTask(e.target.value)}></input>
          <button>Add Task</button>
        </form>
      </>
    );
  };


export default Addform;
