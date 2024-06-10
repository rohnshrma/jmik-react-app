import React, { useState } from "react";

const Form = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const nameHandler = (e) => {
    console.log(e.target.value);
    setFormData((prevFormData) => {
      return {
        name: e.target.value,
        email: prevFormData.email,
        password: prevFormData.password,
      };
    });
  };
  const emailHandler = (e) => {
    console.log(e.target.value);

    setFormData((prevFormData) => {
      return {
        email: e.target.value,
        name: prevFormData.name,
        password: prevFormData.password,
      };
    });
  };
  const passwordHandler = (e) => {
    console.log(e.target.value);
    setFormData((prevFormData) => {
      return {
        email: prevFormData.email,
        name: prevFormData.name,
        password: e.target.value,
      };
    });
  };

  console.log("FormData => ", formData);

  return (
    <form>
      <div>
        <label htmlFor="name">Name: </label>
        <input
          onChange={nameHandler}
          type="text"
          placeholder="Enter your name..."
          id="name"
        />
      </div>
      <div>
        <label htmlFor="email">Email Address: </label>
        <input
          onChange={emailHandler}
          type="text"
          placeholder="Enter your email..."
          id="email"
        />
      </div>
      <div>
        <label htmlFor="password">Password: </label>
        <input
          onChange={passwordHandler}
          type="text"
          placeholder="Enter your password..."
          id="password"
        />
      </div>
    </form>
  );
};

export default Form;
