import React, {useEffect, useState} from 'react'
import api from '../services/api'
import { Link, useNavigate } from 'react-router-dom';
import { setUserDetailsInHelper } from '../common/helper';

function Home() {

    const [users, setUsers] = useState([]);

    useEffect(()=> {
        initialLoadUsers();
    }, [])

    const initialLoadUsers = async () => {
        try {
            const response = await api.get("/users");
            const data = response.data;
            setUsers(data);
        } catch (error) {
            console.log("Error ", error);
        }
    }

    // const navigateTo = useNavigate();?

    const deletUserById = async (e, userId) => {
        e.preventDefault();
        try {
            console.log("User ID ", userId);
            
            await api.delete(`/users/deleteUser/${userId}`);
            initialLoadUsers();
        } catch (error) {
            console.log("Error ", error);
        }
    }

    const saveUserTemporarilyForView = (user) => {
        setUserDetailsInHelper(user);
    }

  return (<div className="container">
        <div className='py-4'>

            <table className='table border shadow'>
                <thead>
                    <tr>
                        <th scope='column'>#</th>
                        <th scope='column'>Name</th>
                        <th scope='column'>User Name</th>
                        <th scope='column'>Handle</th>
                        <th scope="Column">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {users.length ?  users.map((user, index) => (<tr key={user.id}>
                        <th scope='row'>{index +1}</th>
                        <td>{user.name}</td>
                        <td>{user.userName}</td>
                        <td>{user.email}</td>
                        <td>
                            <button className='border-0 bg-white' onClick={() => saveUserTemporarilyForView(user)} >
                                <Link className='btn btn-primary mx-2' to={"/view"}>View </Link></button>
                            <button className='border-0 bg-white' onClick={() => saveUserTemporarilyForView(user)}>
                                <Link to={`/addOrEditUser/${user.id}`} className='btn btn-outline-primary mx-2'>Edit</Link></button>
                            <button className='btn btn-danger mx-2' onClick={(e) => deletUserById(e, user.id)} >Delete</button>
                        </td>
                    </tr>)) : <td>No users found</td>}
                </tbody>
            </table>


        </div>
    </div>
  )
}

export default Home