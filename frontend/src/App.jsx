import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'

const { VITE_APIURL: APIURL, VITE_APIKEY: APIKEY } = import.meta.env

function App() {
  const [users, setUsers] = useState([])

  const getUsers = async () => {  
    const res = await axios.get(APIURL + '/users')
    setUsers(res.data);
  };

  useEffect(() => {
    getUsers()
  }
  , [])
  
  return (
    <>
      <h1>Users</h1>
      <ul>
        {users.map(user => (
          <li key={user.id}>{user.email}</li>
        ))}
      </ul>

      <h4>{APIKEY}</h4>
    </>
  )
}

export default App
