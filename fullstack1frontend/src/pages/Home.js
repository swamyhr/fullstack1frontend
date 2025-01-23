import React from 'react'
import api from '../services/api'

function Home() {


    const initialLoadUsers = async () => {
        const users = await api.get("users", 
          
        ).then(response => {
            console.log("Data received ", response.data)
        })
        console.log("Users from API ", users.data);
    }

    initialLoadUsers();

  return (
    <div className='container'>
        <div className='py-4'>

            <table className='table border shadow'>
                <thead>
                    <tr>
                        <th scope='column'>#</th>
                        <th scope='column'>First</th>
                        <th scope='column'>Second</th>
                        <th scope='column'>Handle</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope='row'>1</th>
                        <td>First Name</td>
                        <td>Second Name</td>
                        <td>Handle@firstsecond</td>
                    </tr>
                </tbody>
            </table>


        </div>
    </div>
  )
}

export default Home