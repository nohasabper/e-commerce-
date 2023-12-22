import React from "react";
import { useSelector } from "react-redux";
import style from"./CustomModal.module.css";

const CustomModal = ({ id, setShowPopup }) => {
  const allusers = useSelector((state) => state.app.users);

  const singleUser = allusers.filter((ele) => ele.id === id);
  console.log("singleuser", singleUser);

  return (
    <div className={style['modalBackground'] }>
      <div className={style['modalContainer']}>
        <button onClick={() => setShowPopup(false)}>Close</button>
        <h2>{singleUser[0].name}</h2>
        <h3>{singleUser[0].email}</h3>
        <h4>{singleUser[0].age}</h4>
        <p>{singleUser[0].gender}</p>
      </div>
    </div>
  );
};

export default CustomModal;