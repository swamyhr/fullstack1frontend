import React from 'react'
import {Link} from "react-router-dom";

function AddUser() {
  return (
    <div className='container'>
      <div className='row'>
        <div className='col-md-6 offset-md-3 border rounded p-4 mt-2 shadow'>

          <h2 className='text-center m-4'>Register</h2>

          <div className='mb-3'>
            <label htmlFor='name' className='form-label'>Name</label>
            <input className="form-control" type="text" name="name" id="name"/>
          </div>

          <div className='mb-3'>
            <label htmlFor='userName' className='form-label'>User Name</label>
            <input className="form-control" type="text" name="username" id="userName"/>
          </div>

          <div className='mb-3'>
            <label htmlFor='email' className='form-label'>Name</label>
            <input className="form-control" type="email" name="email" id="email"/>
          </div>

          <button type='submit' className='btn btn-primary'>Submit</button>
          <Link to="/" type='button' className='btn btn-outline-danger mx-2'>Cancel</Link>
        </div>
      </div>
    </div>
  )
}

export default AddUser