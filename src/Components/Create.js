import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { createUser } from "../Rtk/Slices/Users-slices";

const Create = () => {
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    age: "",
    gender: "Male", // Default value
  });

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("userData:", userData); // Log userData to check its format
    dispatch(createUser(userData))
      .unwrap()
      .then(() => {
        navigate("/Users");
      })
      .catch((error) => {
        console.error("Failed to add user: ", error);
      });
  };
  

  return (
    <div>
      <h2 className="my-2">Fill the data</h2>
      <form className="w-50 mx-auto my-5" onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Name</label>
          <input
            type="text"
            name="name"
            className="form-control"
            value={userData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Email</label>
          <input
            type="email"
            name="email"
            className="form-control"
            value={userData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Age</label>
          <input
            type="number"
            name="age"
            className="form-control"
            value={userData.age}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">id</label>
          <input
            type="number"
            name="id"
            className="form-control"
            value={userData.id}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-check-label">Gender:</label>
          <div>
            <input
              type="radio"
              name="gender"
              value="Male"
              checked={userData.gender === "Male"}
              onChange={handleChange}
              required
            />
            <label className="form-check-label">Male</label>
          </div>
          <div>
            <input
              type="radio"
              name="gender"
              value="Female"
              checked={userData.gender === "Female"}
              onChange={handleChange}
              required
            />
            <label className="form-check-label">Female</label>
          </div>
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Create;
