import { useLoaderData, useNavigate } from "react-router-dom";
import Header from "../Header/Header";
import { useRef } from "react";

const UpdateUsers = () => {
  const loadedUser = useLoaderData();
  // console.log(loadedUser);
  const nameRef = useRef();
  const emailRef = useRef();
  const navigate = useNavigate();

  const handleUpdateUser = (event) => {
    event.preventDefault();

    const name = nameRef.current.value;
    const email = emailRef.current.value;
    const updatedUser = { name, email };
    // console.log(updatedUser);
    fetch(`http://localhost:5000/users/${loadedUser._id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updatedUser),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.matchedCount > 0) {
          nameRef.current.value = "";
          emailRef.current.value = "";
          alert("Updated Successfully");
          navigate("/users");
        }
      });
  };
  return (
    <div>
      <Header></Header>
      <form onSubmit={handleUpdateUser} style={{ marginTop: "50px" }}>
        <input
          type="text"
          defaultValue={loadedUser?.name}
          ref={nameRef}
          id=""
        />
        <br />
        <input
          type="email"
          defaultValue={loadedUser?.email}
          ref={emailRef}
          id=""
        />
        <br />
        <br />
        <input type="submit" value="Update User" />
      </form>
    </div>
  );
};

export default UpdateUsers;
