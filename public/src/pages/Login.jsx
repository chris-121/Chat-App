import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from 'axios';
import { LoginRoute } from '../utils/APIRoutes';

function Login() {
  const navigate = useNavigate()
  const [values, setValues] = useState({
    username: "",
    password: "",
  });
  const toastoptions = {
    position: "bottom-right",
    autoClose: 5000,
    pauseOnHover: true,
    draggable: true,
    theme: "dark",
  }
  useEffect(() => {
    if (localStorage.getItem("chat-app-user")) {
      navigate("/")
    }
  }, [])
  const handleSubmit = async (event) => {
    event.preventDefault();
    if (handleValidation()) {
      const { password, username } = values;
      const { data } = await axios.post(LoginRoute, { username, password });
      if (data.status === false) {
        toast.error(data.msg, toastoptions)
      }
      if (data.status === true) {
        localStorage.setItem("chat-app-user", JSON.stringify(data.user));
        navigate("/")
      }
    }
  }
  const handleValidation = () => {
    const { password, username } = values
    if (username === "") {
      toast.error("Username is required.", toastoptions)
      return false;
    } else if (password === "") {
      toast.error("Password is required.", toastoptions)
      return false;
    }
    return true;
  }
  const handleChange = (event) => {
    event.preventDefault();
    console.log(event.target)
    setValues({ ...values, [event.target.name]: event.target.value })
  }
  return (
    <>
      <FormContainer>
        <form onSubmit={(event) => handleSubmit(event)}>
          <div className="brand">
            <img src='https://raw.githubusercontent.com/koolkishan/chat-app-react-nodejs/51e46d4ac8ecff43b9e4c7c581fe3a33711c5fd9/public/src/assets/logo.svg' alt='' />
            <h1>Snappy</h1>
          </div>
          <input
            type="text"
            placeholder='Username'
            name='username'
            min="3"
            onChange={(event) => handleChange(event)}
          />
          <input
            type="password"
            placeholder='Password'
            name='password'
            onChange={(event) => handleChange(event)}
          />
          <button type='submit'>Log In</button>
          <span>
            Don't have an account ? <Link to="/register">Register</Link>
          </span>
        </form>
      </FormContainer>
      <ToastContainer />
    </>
  )
}
const FormContainer = styled.div`
height:100vh;
width:100vw;
display:flex;
justify-content:center;
gap:1rem;
align-items:center;
background-color:#131324;
.brand {
    display:flex;
    align-items:center;
    gap:1rem;
    justify-content:center;
    img {
        height: 5rem;
    }
    h1 {
        color: white;
        text-transform:uppercase;
    }
}
form {
    display:flex;
    flex-direction: column;
    gap: 2rem;
    background-color:#00000076;
    border-radius: 2rem;
    padding: 3rem 5rem;
    input {
        background-color:transparent;
        padding: 1rem;
        border:0.1rem solid #4e0eff;
        border-radius:0.4rem;
        color: white;
        width 100%;
        font-size: 1rem;
        &:focus {
            border: 0.1rem solid #997af0;
            outline:none
        }
    }    
    button {
        background-color: #997af0;
        color:white;
        padding:1rem 2rem;
        border:none;
        font-weight:bold;
        cursor:pointer;
        border-radius: 0.4rem;
        font-size:1rem;
        text-transform:uppercase;
        transition: 0.2s ease-in-out;
        &:hover {
            background-color: #4e0eff;
        }
    } 
    span {
        color: white;
        font-size:small;
        text-transform:uppercase;
        a {
            color:white;
            text-decoration:none;
        }
    }

}
`;

export default Login