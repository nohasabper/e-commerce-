import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { updateUser } from "../Rtk/Slices/Users-slices";

const Update = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [updateData, setUpdateData] = useState({});
  const { users, loading, error } = useSelector((state) => state.app);

  useEffect(() => {
    if (id && users.length > 0) {
      const userToUpdate = users.find((user) => user.id === id);
      setUpdateData(userToUpdate);
    }
  }, [id, users]);

  const handleUpdate = (e) => {
    e.preventDefault();
    dispatch(updateUser(updateData));
    navigate("/Users");
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUpdateData({ ...updateData, [name]: value });
  };

  return (
    <div>
      <h2 className="my-2">Edit the data</h2>
      <form className="w-50 mx-auto my-5" onSubmit={handleUpdate}>
        <div className="mb-3">
          <label className="form-label">Name</label>
          <input
            type="text"
            name="name"
            className="form-control"
            value={updateData.name || ""}
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Email</label>
          <input
            type="email"
            name="email"
            className="form-control"
            value={updateData.email || ""}
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Age</label>
          <input
            type="number"
            name="age"
            className="form-control"
            value={updateData.age || ""}
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Gender</label>
          <div>
            <input
              className="form-check-input"
              name="gender"
              value="Male"
              type="radio"
              checked={updateData.gender === "Male"}
              onChange={handleInputChange}
            />
            <label className="form-check-label">Male</label>
          </div>
          <div>
            <input
              className="form-check-input"
              name="gender"
              value="Female"
              type="radio"
              checked={updateData.gender === "Female"}
              onChange={handleInputChange}
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

export default Update;
