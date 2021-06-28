import React, { useState } from 'react'

import Form from './components/Form'
import PersonList from './components/PersonList'

import './App.css'

function App() {
  const [usersList, setUsersList] = useState([])

  const handleSaveData = (name, age) => {
    setUsersList(prevData => {
      return [
        ...prevData,
        { name: name, age: age, id: Math.random().toString() },
      ]
    })
  }

  return (
    <div className='form'>
      <Form onAddUser={handleSaveData} />
      <PersonList users={usersList} />
    </div>
  )
}

export default App
