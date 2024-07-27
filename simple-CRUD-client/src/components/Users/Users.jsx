import React, { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";

const Users = () => {
  //READ
  const loadedUsers = useLoaderData();
  let [users, setUsers] = useState(loadedUsers);
  console.log(users);

  const handleDelete = (id) => {
    console.log("delete is", id);

    //DELETE
    fetch(`http://localhost:5001/users/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.deletedCount > 0) {
          alert("deleted successfully");
          let remainingUsers = users.filter((u) => u._id !== id);
          console.log(remainingUsers);
          setUsers(remainingUsers);
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
            <Link to={`/update/${u._id}`}>
              <button>Update</button>
            </Link>
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
