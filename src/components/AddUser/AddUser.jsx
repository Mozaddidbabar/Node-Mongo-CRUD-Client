import Header from "../Header/Header";

const AddUser = () => {
  const handleAddUser = (event) => {
    event.preventDefault();

    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;

    const newUser = { name, email };
    console.log(newUser);

    fetch("http://localhost:5000/users", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newUser),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          alert("User created successfully");
        }
        form.reset();
      });
  };
  return (
    <div>
      <Header></Header>
      <form onSubmit={handleAddUser} style={{ marginTop: "50px" }}>
        <input type="text" name="name" id="" />
        <br />
        <input type="email" name="email" id="" />
        <br />
        <br />
        <input type="submit" value="Add User" />
      </form>
    </div>
  );
};

export default AddUser;
