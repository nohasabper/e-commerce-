import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useRef, useState } from "react";
export default function Login() {
  const initalFormData = {
    email: "",
    password: "",
    
  };

  const passRef = useRef(null);

  const [formData, setFormData] = useState({ ...initalFormData });

  const [err, setErr] = useState({
    email: null,
    password: null,
  });
const emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
  const changeHandler = (e) => {
    if (e.target.name === "email" && !emailRegex.test(e.target.value)) {
      setErr({
        ...err,
        email: `email should have format like name@email.com`,
        // [e.target.name]: `${e.target.name} should have format like this 'name@email.com' `,
      });
    } 
    else if (e.target.name === "password" && e.target.value.length <= 8) {
        setErr({
          ...err,
  
          [e.target.name]: `${e.target.name} must be more than 8 characters.`,
        });}else {
      setErr({
        ...err,
        [e.target.name]: null,
      });
    }

    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const submitHandler = (e) => {
    e.preventDefault();

    if (
      !err.email &&
      !err.password &&
      emailRegex.test(formData.email) &&
      formData.password.length > 8 
    ) {
      setFormData({
        ...initalFormData,
      });
      alert("Successful ✔👌!");
    } else {
      alert("You can not submit before typing your data correctly!");
    }
  };
  return (
    <Form
      className=" customHeight text-primary text-center  d-flex flex-column justify-content-center align-items-center bg-light  "
      onSubmit={submitHandler} style={{height:550}}
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
        ref={passRef}
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
