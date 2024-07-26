import React from "react";
import { useLoaderData } from "react-router-dom";

const Users = () => {
  const users = useLoaderData();
  console.log(users);

  const handleDelete = (id) => {
    console.log("delete is", id);
    fetch(`http://localhost:5001/users/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.deletedCount > 0) {
          alert("deleted successfully");
        }
      });
  };
  return (
    <div>
      <h2>All users in here:{users.length}</h2>
      {users &&
        users.map((u) => (
          <h3 key={u._id}>
            Name:{u.name},Email:{u.email},id:{u._id}
            <button
              className="text-"
              onClick={() => {
                handleDelete(u._id);
              }}
            >
              X
            </button>
          </h3>
        ))}
    </div>
  );
};

export default Users;
