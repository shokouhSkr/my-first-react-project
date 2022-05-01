import { useState } from "react";

const HookObject = () => {
  const [user, setUser] = useState({ firstName: "", lastName: "" });

  const firstNameHandler = (e) => {
    //console.log(e.target.value) => s, sa, sah, sahe, saheb
    setUser({ ...user, firstName: e.target.value });
  };

  const lastNameHandler = (e) => {
    //console.log(e.target.value) => s, sa, sah, sahe, saheb
    setUser({ ...user, lastName: e.target.value });
  };

  return (
    <div className="mt-4 rounded p-4">
      <form>
        <input
          type="text"
          value={user.firstName}
          onChange={firstNameHandler}
          className="mb-4 mr-2 p-2"
        />
        <input
          type="text"
          value={user.lastName}
          onChange={lastNameHandler}
          className="mb-4 p-2"
        />
        <h2>My first name is - {user.firstName}</h2>
        <h2>My last name is - {user.lastName}</h2>
        <div>{JSON.stringify(user)}</div>
      </form>
    </div>
  );
};

export default HookObject;
