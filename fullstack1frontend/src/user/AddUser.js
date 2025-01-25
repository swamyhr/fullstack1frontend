import React, {useState} from 'react'
import {Link, useNavigate} from "react-router-dom";
import api from '../services/api';

function AddUser() {

  const [user, setUser] = useState({
    name: "",
    userName: "",
    email:""
  })

  const handleOnChange = (e) => {
    setUser({
      ...user, 
      [e.target.name]: e.target.value
    })
  }


  // const inputFields = [
  //   {
  //     name: "name",
  //     id: "userName"
  //     type: "text",
  //   }
  // ]

  const navigateTo = useNavigate();

  const submitForm = async (e) => {
    e.preventDefault();  
    try {
      await api.post("/users/create", user);
      navigateTo("/");
    } catch (error) {
      console.log("error ", error);
    } 
  }

  const { name, userName, email } = user;

  return (
    <div className='container'>
      <div className='row'>
        <div className='col-md-6 offset-md-3 border rounded p-4 mt-2 shadow'>

          <h2 className='text-center m-4'>Register</h2>

          <form onSubmit={submitForm}>
          <div className='mb-3'>
            <label htmlFor='name' className='form-label'>Name</label>
            <input className="form-control" type="text" name="name" id="name" 
            value={name} onChange={handleOnChange}/>
          </div>

          <div className='mb-3'>
            <label htmlFor='userName' className='form-label'>User Name</label>
            <input className="form-control" type="text" name="userName" id="userName" onChange={handleOnChange} value={userName}/>
          </div>

          <div className='mb-3'>
            <label htmlFor='email' className='form-label'>E-mail</label>
            <input className="form-control" type="email" name="email" id="email" onChange={handleOnChange} value={email}/>
          </div>

          <button type='submit' className='btn btn-primary'>Submit</button>
          <Link to="/" type='button' className='btn btn-outline-danger mx-2'>Cancel</Link>
            </form>
        </div>
      </div>
    </div>
  )
}

export default AddUser