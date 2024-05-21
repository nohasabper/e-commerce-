import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { showUser } from "../Rtk/Slices/Users-slices";

export default function Login() {
  const initialFormData = {
    email: "",
    password: "",
  };

  const dispatch = useDispatch();
  const { users, loading } = useSelector((state) => state.app);

  const [formData, setFormData] = useState(initialFormData);
  const [err, setErr] = useState({
    email: null,
    password: null,
  });

  useEffect(() => {
    dispatch(showUser()); // Dispatch the action to fetch user data
  }, [dispatch]);

  const changeHandler = (e) => {
    setErr({
      ...err,
      [e.target.name]: null,
    });

    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const submitHandler = async (e) => {
    e.preventDefault();
  
    try {
      // Set loading state while fetching data
      // You can show a loading spinner or a message to the user
      // based on the 'loading' state
      if (loading) {
        // Show loading indicator
        return;
      }
  
      const foundUser = users && users.find(
        (user) => user.email === formData.email && user.id === formData.password
      );
  
      if (foundUser) {
        alert(`Welcome, ${foundUser.name}! Login successful! ✔👌`);
      } else {
        setErr({
          email: "Incorrect email or password. Please try again.",
          password: "Incorrect email or password. Please try again.",
        });
      }
    } catch (error) {
      console.error("Error fetching user data:", error);
      setErr({
        email: "An error occurred. Please try again later.",
        password: "An error occurred. Please try again later.",
      });
    }
  };
  
  

  
  // const submitHandler = (e) => {
  //   e.preventDefault();

  //   if (
  //     registeredUserData &&
  //     registeredUserData.email === formData.email &&
  //     registeredUserData.password === formData.password
  //   ) {
  //     alert(`Welcome, ${registeredUserData.txt}! Login successful! ✔👌`);
  //   } else {
  //     alert("Incorrect email or password. Please try again.");
  //   }
  // };

  return (
    <Form
      className="customHeight text-primary text-center d-flex flex-column justify-content-center align-items-center bg-light"
      onSubmit={submitHandler}
      style={{ height: "100vh" }}
    >
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
        >
          {err.email
            ? err.email
            : " We'll never share your email with anyone else."}
        </Form.Text>
      </Form.Group>

      <Form.Group
        className="col-lg-8 mb-3"
        controlId="formBasicPassword"
      >
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
        >
          {err.password
            ? err.password
            : " Password has to be more than 8 characters."}
        </Form.Text>
        <Form.Text className="text-muted"></Form.Text>
      </Form.Group>

      <Button
        variant="dark"
        className="col-lg-3 btn-outline-primary mt-1 m-3 text-light"
        type="submit"
      >
        Submit
      </Button>
    </Form>
  );
}


// import Button from "react-bootstrap/Button";
// import Form from "react-bootstrap/Form";
// import { useRef, useState ,useEffect} from "react";
// export default function Login() {
//   const initalFormData = {
//     email: "",
//     password: "",
    
//   };

//   const passRef = useRef(null);

//   const [formData, setFormData] = useState({ ...initalFormData });

//   const [err, setErr] = useState({
//     email: null,
//     password: null,
//   });
// const emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
//   const changeHandler = (e) => {
//     if (e.target.name === "email" && !emailRegex.test(e.target.value)) {
//       setErr({
//         ...err,
//         email: `email should have format like name@email.com`,
//       });
//     } 
//     else if (e.target.name === "password" && e.target.value.length <= 8) {
//         setErr({
//           ...err,
  
//           [e.target.name]: `${e.target.name} must be more than 8 characters.`,
//         });}else {
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
//       !err.password &&
//       emailRegex.test(formData.email) &&
//       formData.password.length > 8 
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
//     // Retrieve data from local storage on component mount
//     const savedUserData = localStorage.getItem("userData");
//     if (savedUserData) {
//       setFormData(JSON.parse(savedUserData));
//     }
//   }, []);
//   return (
//     <Form
//       className=" customHeight text-primary text-center  d-flex flex-column justify-content-center align-items-center bg-light  "
//       onSubmit={submitHandler} style={{height:550}}
//     >
          
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
    

//       <Button
//         variant="dark"
//         className="col-lg-3 btn-outline-primary mt-1 m-3 text-light"
//         type="submit"
//       >
//         Submit
//       </Button>
//     </Form>
//   );
// }
