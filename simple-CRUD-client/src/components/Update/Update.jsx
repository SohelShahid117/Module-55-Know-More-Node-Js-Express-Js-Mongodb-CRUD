import React from "react";
import { useLoaderData, json } from "react-router-dom";
//https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch

const Update = () => {
  const loadedUser = useLoaderData();
  console.log("update data-->", loadedUser);

  const handleUpdateUser = (e) => {
    e.preventDefault();
    console.log("update user is working");
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const updatedUser = { name, email };
    console.log(updatedUser);

    //UPDATE
    fetch(`http://localhost:5001/users/${loadedUser._id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedUser),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          alert("updated successfully");
        }
      });
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
          defaultValue={loadedUser?.name}
        />
        <br /> <br />
        <input
          type="email"
          name="email"
          placeholder="email"
          defaultValue={loadedUser?.email}
        />
        <br /> <br />
        <input type="submit" value="Update User" />
        <br /> <br />
      </form>
    </div>
  );
};

export default Update;
