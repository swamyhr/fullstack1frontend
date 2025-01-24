import React, {useEffect, useState} from 'react'
// import api from '../services/api'

function Home() {

    const [users, setUsers] = useState([]);

    useEffect(()=> {
        initialLoadUsers();
    }, [])

    const initialLoadUsers = async () => {
        // const users = await api.get("/users", 
          
        // ).then(response => {
        //     console.log("Data received ", response.data)
        // })
        // console.log("Users from API ", users.data);
        try {
            const result = await fetch("http://localhost:8080/users");
            const response = await result.json();
            console.log("response ", response);
            
            // console.log("Data ", data);
            setUsers(response);
        } catch (error) {
            console.log("Error ", error);
        }
        
    }

  return (
    <div className='container'>
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
                            <button className='btn btn-primary mx-2'>View </button>
                            <button className='btn btn-outline-primary mx-2'>Edit </button>
                            <button className='btn btn-danger mx-2'>Delete</button>
                        </td>
                    </tr>)) : <td>No users found</td>}
                </tbody>
            </table>


        </div>
    </div>
  )
}

export default Home