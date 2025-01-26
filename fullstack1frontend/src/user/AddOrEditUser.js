import React, {useState, useEffect} from 'react'
import {Link, useNavigate, useParams} from "react-router-dom";
import api from '../services/api';

function AddOrEditUser() {

  const [user, setUser] = useState({
    name: "",
    userName: "",
    email:""
  })

  const params = useParams();
  const  { id : userId } = params;
  const [formName, setFormName] = useState("Add User");

  useEffect(() => {
    if(userId !== "NA") {
      const getUser = async (id) => {
        try {
          const response = await api.get(`users/getUsr/${userId}`);
          console.log("response ", response.data);
          setUser({...response.data});
        } catch (error) {
          console.log("error ", error);
        }
      }
      getUser();
      setFormName("Update User");
    } 
    else {
      setUser({
        name:"",
        email:"",
        userName:""
      });
      setFormName("Add User")
    }
  
  }, [params])

  const handleOnChange = (e) => {
    setUser({
      ...user, 
      [e.target.name]: e.target.value
    })
  }

  const navigateTo = useNavigate();

  let submitForm = async (e) => {
    e.preventDefault();  
    try {
      await api.post("/users/create", user);
      navigateTo("/");
    } catch (error) {
      console.log("error ", error);
    } 
  }

  const updateUser = async (e) => {
    e.preventDefault();
    try {
      const response = await api.put(`/users/updateUsr/${userId}`, user);
      navigateTo("/");
    } catch (error) {
      console.log("error ", error);
    }
  }

  const { name, userName, email } = user;
  if(userId !== "NA") {
    submitForm = updateUser;
  }

  return (
    <div className='container'>
      <div className='row'>
        <div className='col-md-6 offset-md-3 border rounded p-4 mt-2 shadow'>

          <h2 className='text-center m-4'>{formName}</h2>

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

export default AddOrEditUser