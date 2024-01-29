import React from "react";

export default function Signup() {
  const [formData, setFormData] = React.useState({
    email: "",
    password: "",
    passwordConfirm: "",
    joinedNewsletter: true,
  });
  function handleChange(event) {
    const { name, value, type, checked } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: type === "checkbox" ? checked : value,
    }));
  }
  console.log("formData");
  function handleSubmit(event) {
    event.preventDefault();
    if (formData.password === formData.passwordConfirm) {
      console.log("Successfully signed up");
    } else {
      console.log("Password do not match");
      return;
    }
    if (formData.joinedNewsletter) {
      console.log("Thanks for signing up for our newsletter");
    }
  }
  return (
    <div className="form-container">
      <form className="form" onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email address"
          className="form--input"
          name="email"
          onChange={handleChange}
          value={formData.email}
        ></input>
        <br></br>
        <input
          type="password"
          placeholder="Passwowrd"
          className="form--input"
          name="password"
          onChange={handleChange}
          value={formData.password}
        ></input>
        <br></br>
        <input
          type="password"
          placeholder="Confirm password"
          className="form--input"
          name="passwordConfirm"
          onChange={handleChange}
          value={formData.passwordConfirm}
        ></input>
        <br></br>
        <input
          type="checkbox"
          id="checkbox"
          name=" joinedNewsletter"
          onChange={handleChange}
          checked={formData.joinedNewsletter}
        ></input>
        <label htmlFor="checkbox">I want to join the newsletter</label>
        <br></br>
        <button className="form--button">Sign up</button>
        <br></br>
      </form>
    </div>
  );
}
