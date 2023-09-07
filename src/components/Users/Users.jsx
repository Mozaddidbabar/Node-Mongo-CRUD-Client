import { Link, useLoaderData } from "react-router-dom";
import Header from "../Header/Header";
import { useState } from "react";

const Users = () => {
  const loadedUsers = useLoaderData();
  const [users, setUsers] = useState(loadedUsers);

  const handleDeleteUser = (user) => {
    const agree = window.confirm(
      `Are you sure you want to delete ${user.name}`
    );

    if (agree) {
      fetch(`http://localhost:5000/users/${user._id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);

          if (data.deletedCount > 0) {
            alert("Deleted Successfully");
            const remaining = loadedUsers.filter(
              (item) => item._id !== user._id
            );
            setUsers(remaining);
          }
        });
    }
  };
  return (
    <div>
      <Header></Header>
      <h2>Total Users: {users.length}</h2>
      {users.map((user) => (
        <p key={user._id}>
          <b style={{ color: "blue" }}>Name:</b> {user.name}{" "}
          <b style={{ color: "blue" }}>Email:</b> {user.email}
          <Link to={`/update/${user._id}`}>
            <button
              style={{
                backgroundColor: "green",
                color: "white",
                border: "none",
                padding: "5px",
                marginLeft: "10px",
              }}
            >
              Update
            </button>
          </Link>
          <button
            onClick={() => handleDeleteUser(user)}
            style={{
              backgroundColor: "red",
              color: "white",
              border: "none",
              padding: "5px",
              marginLeft: "10px",
            }}
          >
            Delete
          </button>
        </p>
      ))}
    </div>
  );
};

export default Users;
