import React, { useState, useContext } from "react";
import clsx from "clsx";
import { UsersContext } from "./context";

const AddUser = () => {
  const [userName, setUserName] = useState("");
  const { addNewUser } = useContext(UsersContext);

  const handleChange = e => {
    setUserName(e.target.value);
  };

  return (
    <>
      <hr />
      <h3>Agrega nuevo usuario:</h3>
      <input
        type="text"
        value={userName}
        onChange={handleChange}
        placeholder="Enter name"
      />
      <button
        className={clsx("add-btn", {
          disabled: !userName
        })}
        onClick={() => addNewUser(userName)}
        disabled={!userName}
      >
        Agregar
      </button>
    </>
  );
};

export default AddUser;