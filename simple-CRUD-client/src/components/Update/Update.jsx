import React from "react";
import { useLoaderData } from "react-router-dom";

const Update = () => {
  const loadedUser = useLoaderData();
  console.log("update", loadedUser);
  const handleUpdateUser = (e) => {
    e.preventDefault();
    console.log("update user is working");
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const updateUser = { name, email };
    console.log(updateUser);
  };
  return (
    <div>
      <h2>This is update page</h2>
      <h3>Update info of {loadedUser.name}</h3>
      <form onSubmit={handleUpdateUser}>
        <input
          type="text"
          name="name"
          placeholder="name"
          defaultValue={loadedUser.name}
        />
        <br /> <br />
        <input
          type="email"
          name="email"
          placeholder="email"
          defaultValue={loadedUser.email}
        />
        <br /> <br />
        <input type="submit" value="Update User" />
        <br /> <br />
      </form>
    </div>
  );
};

export default Update;
