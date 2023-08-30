import React, { Fragment, useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../reducer"; 

const InputTodo = () => {
  const [description, setDescription] = useState("");
  const dispatch = useDispatch(); 

  const onSubmitForm = (e) => {
    e.preventDefault();
    dispatch(addTodo(description)); 
    setDescription(""); 
  };

  return (
    <Fragment>
      <h1 className="text-center mt-5">Pern Todo List</h1>
      <form className="d-flex mt-5" onSubmit={onSubmitForm}>
        <input
          type="text"
          className="form-control"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <button className="btn btn-success">Add</button>
      </form>
    </Fragment>
  );
};

export default InputTodo;
