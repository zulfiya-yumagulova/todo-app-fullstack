import React, { Fragment, useState, useEffect } from "react";
import Image from "./Image.js";

export default function Input() {
  const [description, setDescription] = useState("");
  const onSubmitForm = async (e) => {
    e.preventDefault();
    try {
      const body = { description };
      const response = await fetch(`http://localhost:5000/todos`, {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify(body),
      });
      window.location = "/";
      console.log(response);
    } catch (error) {
      console.error(error.message);
    }
  };

  console.log(description);
  return (
    <Fragment>
      {/* <Image /> */}
      <div className="container">
        <form className="d-flex" onSubmit={onSubmitForm}>
          <input
            type="text"
            placeholder="add a todo"
            className="form-control"
            value={description}
            style={{ marginLeft: "75px" }}
            onChange={(e) => setDescription(e.target.value)}
          />
          <button
            className="btn btn-success"
            style={{ marginLeft: "15px", marginRight: "15px" }}
          >
            Add
          </button>
        </form>
      </div>
    </Fragment>
  );
}
