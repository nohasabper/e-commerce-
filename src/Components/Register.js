import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

export default function Register() {
  const initialFormData = {
    email: "",
    password: "",
    age: "",
    txt: "",
  };

  const [formData, setFormData] = useState({ ...initialFormData });

  const [err, setErr] = useState({
    email: null,
    password: null,
    age: null,
    txt: null,
  });

  const emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;

  const changeHandler = (e) => {
    // Existing validation logic

    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };

  const submitHandler = (e) => {
    e.preventDefault();

    if (
      !err.email &&
      !err.age &&
      !err.password &&
      emailRegex.test(formData.email) &&
      formData.password.length > 8 &&
      formData.age >= 18 &&
      formData.txt.length > 3
    ) {
      // Save the data to local storage after validation
      localStorage.setItem("userData", JSON.stringify(formData));
      setFormData({ ...initialFormData }); // Reset form data after submission
      alert("Successful ✔👌!");
    } else {
      alert("You cannot submit before typing your data correctly!");
    }
  };

  return (
    <Form
      className="customHeight text-primary text-center d-flex flex-column justify-content-center align-items-center bg-light my-5"
      onSubmit={submitHandler}
      style={{ height: "100vh" }}
    >
      <Form.Group className="col-lg-8 " controlId="formBasicTxt">
        <Form.Label>Name</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter Name"
          name="txt"
          onChange={changeHandler}
          value={formData.txt}
        />
        <Form.Text
          className={err.txt ? "bg-danger text-light fs-5" : "text-muted"}
        ></Form.Text>
      </Form.Group>
      <Form.Group className="col-lg-8 " controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          type="email"
          placeholder="Enter email"
          name="email"
          onChange={changeHandler}
          value={formData.email}
        />
        <Form.Text
          className={err.email ? "bg-danger text-light fs-5" : "text-muted"}
        ></Form.Text>
      </Form.Group>
      <Form.Group className="col-lg-8 mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          value={formData.password}
          placeholder="Password"
          name="password"
          onChange={changeHandler}
        />
        <Form.Text
          className={err.password ? "bg-danger text-light fs-5" : "text-muted"}
        ></Form.Text>
        <Form.Text className="text-muted"></Form.Text>
      </Form.Group>
      <Form.Group className="col-lg-8 mb-3" controlId="formBasicAge">
        <Form.Label>Age</Form.Label>
        <Form.Control
          type="number"
          placeholder="Your Age"
          value={formData.age}
          name="age"
          onChange={changeHandler}
        />
        <Form.Text
          className={err.age ? "bg-danger text-light fs-5" : "text-muted"}
        ></Form.Text>
      </Form.Group>
      <Button
        variant="dark"
        className="col-lg-3 btn-outline-primary mt-1 m-3 text-light"
        type="submit"
      >
        Signup
      </Button>
    </Form>
  );
}


// import Button from "react-bootstrap/Button";
// import Form from "react-bootstrap/Form";
// import { useRef, useState, useEffect } from "react";

// export default function Register() {
//   const initialFormData = {
//     email: "",
//     password: "",
//     age: "",
//     txt: "",
//   };

//   const ageRef = useRef(null);
//   const passRef = useRef(null);
//   const txtRef = useRef(null);

//   const [formData, setFormData] = useState({ ...initialFormData });

//   const [err, setErr] = useState({
//     email: null,
//     password: null,
//     age: null,
//     txt: null,
//   });

//   useEffect(() => {
//     localStorage.setItem("userData", JSON.stringify(formData));
//   }, [formData]);

//   const emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;

//   const changeHandler = (e) => {
//     if (e.target.name === "email" && !emailRegex.test(e.target.value)) {
//       setErr({
//         ...err,
//         email: `email should have format like name@email.com`,
//         // [e.target.name]: `${e.target.name} should have format like this 'name@email.com' `,
//       });
//     } else if (e.target.name === "age" && e.target.value < 18) {
//       setErr({
//         ...err,
//         [e.target.name]: `${e.target.name} must be +18, Adults only.`,
//       });
//     } else if (e.target.name === "password" && e.target.value.length <= 8) {
//       setErr({
//         ...err,

//         [e.target.name]: `${e.target.name} must be more than 8 characters.`,
//       });
//     } else if (e.target.name === "txt" && e.target.value.length <= 3) {
//       setErr({
//         ...err,

//         [e.target.name]: `${e.target.name} must be more than 3 characters.`,
//       });
//     }
//     else {
//       setErr({
//         ...err,
//         [e.target.name]: null,
//       });
//     }

//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const submitHandler = (e) => {
//     e.preventDefault();

//     if (
//       !err.email &&
//       !err.age &&
//       !err.password &&
//       emailRegex.test(formData.email) &&
//       formData.password.length > 8 &&
//       formData.age >= 18 &&
//       formData.txt.length > 3
//     ) {      localStorage.setItem("userData", JSON.stringify(formData));

//       setFormData({
//         ...initialFormData,
//       });
//       alert("Successful ✔👌!");
//     } else {
//       alert("You cannot submit before typing your data correctly!");
//     }
//   };

//   return (
//     <Form
//       className="customHeight text-primary text-center d-flex flex-column justify-content-center align-items-center bg-light my-5"
//       onSubmit={submitHandler}
//       style={{ height: "100vh" }}
//     >
//       <Form.Group className="col-lg-8 " controlId="formBasicTxt">

// <Form.Label> Name</Form.Label>
// <Form.Control
//   ref={txtRef}

//   type="text"
//   placeholder="Enter Name"
//   name="txt"
//   onChange={changeHandler}
//   value={formData.txt}
// />
// <Form.Text
//   className={err.txt ? "bg-danger text-light fs-5" : "text-muted"}
// >
//   {err.txt
//     ? err.txt
//     : " enter your Name "}
// </Form.Text>
// </Form.Group>
// <Form.Group className="col-lg-8 " controlId="formBasicEmail">

// <Form.Label>Email address</Form.Label>
// <Form.Control
//   type="email"
//   placeholder="Enter email"
//   name="email"
//   onChange={changeHandler}
//   value={formData.email}
// />
// <Form.Text
//   className={err.email ? "bg-danger text-light fs-5" : "text-muted"}
// >
//   {err.email
//     ? err.email
//     : " We'll never share your email with anyone else."}
// </Form.Text>
// </Form.Group>

// <Form.Group
// ref={passRef}
// className="col-lg-8 mb-3"
// controlId="formBasicPassword"
// >
// <Form.Label>Password</Form.Label>
// <Form.Control
//   type="password"
//   value={formData.password}
//   placeholder="Password"
//   name="password"
//   onChange={changeHandler}
// />
// <Form.Text
//   className={err.password ? "bg-danger text-light fs-5" : "text-muted"}
// >
//   {err.password
//     ? err.password
//     : " Password has to be more than 8 characters."}
// </Form.Text>
// <Form.Text className="text-muted"></Form.Text>
// </Form.Group>
// <Form.Group
// className="col-lg-8 mb-3"
// controlId="formBasicAge"
// ref={ageRef}
// >
// <Form.Label>Age</Form.Label>
// <Form.Control
//   type="number"
//   placeholder="Your Age"
//   value={formData.age}
//   name="age"
//   onChange={changeHandler}
// />
// <Form.Text
//   className={err.age ? "bg-danger text-light fs-5" : "text-muted"}
// >
//   {err.age ? err.age : "  Your Age must be more than +18."}
// </Form.Text>
// </Form.Group>

// <Button
// variant="dark"
// className="col-lg-3 btn-outline-primary mt-1 m-3 text-light"
// type="submit"
// >
// Signup
// </Button>    </Form>
//   );
// }





// import Button from "react-bootstrap/Button";
// import Form from "react-bootstrap/Form";
// import { useRef, useState, useEffect } from "react";
// export default function Register() {
//   const initalFormData = {
//     email: "",
//     password: "",
//     age: "",
//     txt: "",
//   };

//   const ageRef = useRef(null);
//   const passRef = useRef(null);
//   const txtRef = useRef(null);

//   const [formData, setFormData] = useState({ ...initalFormData });

//   const [err, setErr] = useState({
//     email: null,
//     password: null,
//     age: null, txt: null,
//   });
//   const emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
//   const changeHandler = (e) => {
//     if (e.target.name === "email" && !emailRegex.test(e.target.value)) {
//       setErr({
//         ...err,
//         email: `email should have format like name@email.com`,
//         // [e.target.name]: `${e.target.name} should have format like this 'name@email.com' `,
//       });
//     } else if (e.target.name === "age" && e.target.value < 18) {
//       setErr({
//         ...err,
//         [e.target.name]: `${e.target.name} must be +18, Adults only.`,
//       });
//     } else if (e.target.name === "password" && e.target.value.length <= 8) {
//       setErr({
//         ...err,

//         [e.target.name]: `${e.target.name} must be more than 8 characters.`,
//       });
//     } else if (e.target.name === "txt" && e.target.value.length <= 3) {
//       setErr({
//         ...err,

//         [e.target.name]: `${e.target.name} must be more than 3 characters.`,
//       });
//     }
//     else {
//       setErr({
//         ...err,
//         [e.target.name]: null,
//       });
//     }

//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   };
//   const submitHandler = (e) => {
//     e.preventDefault();

//     if (
//       !err.email &&
//       !err.age &&
//       !err.password &&
//       emailRegex.test(formData.email) &&
//       formData.password.length > 8 &&
//       formData.age >= 18 && formData.txt.length > 3
//     ) {
//       setFormData({
//         ...initalFormData,
//       });
//       alert("Successful ✔👌!");
//     } else {
//       alert("You can not submit before typing your data correctly!");
//     }
//   };
//   useEffect(() => {
//     // Save data to local storage when formData changes
//     localStorage.setItem("userData", JSON.stringify(formData));
//   }, [formData]);


//   return (
//     <Form
//       className=" customHeight text-primary text-center  d-flex flex-column justify-content-center align-items-center bg-light my-5 "
//       onSubmit={submitHandler} style={{ height: 550 }}
//     >
//       <Form.Group className="col-lg-8 " controlId="formBasicTxt">

//         <Form.Label> Name</Form.Label>
//         <Form.Control
//           ref={txtRef}

//           type="text"
//           placeholder="Enter Name"
//           name="txt"
//           onChange={changeHandler}
//           value={formData.txt}
//         />
//         <Form.Text
//           className={err.txt ? "bg-danger text-light fs-5" : "text-muted"}
//         >
//           {err.txt
//             ? err.txt
//             : " enter your Name "}
//         </Form.Text>
//       </Form.Group>
//       <Form.Group className="col-lg-8 " controlId="formBasicEmail">

//         <Form.Label>Email address</Form.Label>
//         <Form.Control
//           type="email"
//           placeholder="Enter email"
//           name="email"
//           onChange={changeHandler}
//           value={formData.email}
//         />
//         <Form.Text
//           className={err.email ? "bg-danger text-light fs-5" : "text-muted"}
//         >
//           {err.email
//             ? err.email
//             : " We'll never share your email with anyone else."}
//         </Form.Text>
//       </Form.Group>

//       <Form.Group
//         ref={passRef}
//         className="col-lg-8 mb-3"
//         controlId="formBasicPassword"
//       >
//         <Form.Label>Password</Form.Label>
//         <Form.Control
//           type="password"
//           value={formData.password}
//           placeholder="Password"
//           name="password"
//           onChange={changeHandler}
//         />
//         <Form.Text
//           className={err.password ? "bg-danger text-light fs-5" : "text-muted"}
//         >
//           {err.password
//             ? err.password
//             : " Password has to be more than 8 characters."}
//         </Form.Text>
//         <Form.Text className="text-muted"></Form.Text>
//       </Form.Group>
//       <Form.Group
//         className="col-lg-8 mb-3"
//         controlId="formBasicAge"
//         ref={ageRef}
//       >
//         <Form.Label>Age</Form.Label>
//         <Form.Control
//           type="number"
//           placeholder="Your Age"
//           value={formData.age}
//           name="age"
//           onChange={changeHandler}
//         />
//         <Form.Text
//           className={err.age ? "bg-danger text-light fs-5" : "text-muted"}
//         >
//           {err.age ? err.age : "  Your Age must be more than +18."}
//         </Form.Text>
//       </Form.Group>

//       <Button
//         variant="dark"
//         className="col-lg-3 btn-outline-primary mt-1 m-3 text-light"
//         type="submit"
//       >
//         Signup
//       </Button>
//     </Form>
//   );
// }
