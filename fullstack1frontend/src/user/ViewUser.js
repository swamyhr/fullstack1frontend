import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { getUserDetailsInHelper } from '../common/helper';

function ViewUser() {

  const [user, setUser] = useState({});

  useEffect(() => {
    setUser(getUserDetailsInHelper());
  }, [])

  const { id, name, userName, email } = user;

  return (
    <div className='container'>
      <div className='row'>
        <div className='col-md-6 offset-md-3 border rounded p-4 mt-2 shadow'>
          <h2 className='text-center'>User Details</h2>
          { id ? 
          <div className='card'>
            <p>User details for : {id}</p>

            <ul className='list-group list-group-flush'>  

              <li className='list-group-item'>User name: {name} </li>
              <li className='list-group-item'>Email Id : {email}</li>
              <li className='list-group-item'>UserName: {userName}</li>

            </ul>
          </div> : <p>No User details selected please navigate to Home page and select user to see the details</p>}
          <Link className="btn btn-primary my-2" to="/">Home</Link>
        </div>
      </div>

    </div>
  )
}

export default ViewUser